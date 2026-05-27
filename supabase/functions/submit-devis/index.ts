import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

// Public endpoint (verify_jwt = false). This is the ONLY public entry point
// for the catering quote form. It validates input, inserts a devis_requests
// row, and triggers the two transactional emails via the service-role key
// — so the public anon key can never invoke send-transactional-email directly.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let body: any
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const name = String(body?.name ?? '').trim()
  const email = String(body?.email ?? '').trim().toLowerCase()
  const phone = String(body?.phone ?? '').trim()
  const eventType = String(body?.eventType ?? '').trim()
  const guestsRaw = body?.guests
  const date = String(body?.date ?? '').trim()
  const message = body?.message ? String(body.message).trim() : null

  const guests = typeof guestsRaw === 'number' ? guestsRaw : parseInt(String(guestsRaw ?? ''), 10)

  const errors: string[] = []
  if (name.length < 1 || name.length > 200) errors.push('name')
  if (email.length < 3 || email.length > 254 || !EMAIL_RE.test(email)) errors.push('email')
  if (phone.length < 3 || phone.length > 50) errors.push('phone')
  if (eventType.length < 1 || eventType.length > 100) errors.push('eventType')
  if (!Number.isFinite(guests) || guests <= 0 || guests >= 100000) errors.push('guests')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) errors.push('date')
  if (message && message.length > 5000) errors.push('message')

  if (errors.length > 0) {
    return new Response(JSON.stringify({ error: 'Invalid input', fields: errors }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  // Per-email throttle: max 3 quote requests per 10 minutes per email address.
  const tenMinAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString()
  const { count: recentCount } = await supabase
    .from('devis_requests')
    .select('id', { count: 'exact', head: true })
    .eq('email', email)
    .gte('created_at', tenMinAgo)
  if ((recentCount ?? 0) >= 3) {
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const { data: inserted, error: insertErr } = await supabase
    .from('devis_requests')
    .insert({ name, email, phone, event_type: eventType, guests, date, message })
    .select('id')
    .single()

  if (insertErr || !inserted) {
    console.error('Failed to insert devis_requests', { error: insertErr })
    return new Response(JSON.stringify({ error: 'Failed to save request' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const id = inserted.id
  const templateData = { name, email, phone, eventType, guests, date, message }

  // Fire transactional emails using service-role auth.
  const [notif, confirm] = await Promise.all([
    supabase.functions.invoke('send-transactional-email', {
      body: {
        templateName: 'devis-notification',
        idempotencyKey: `devis-notif-${id}`,
        templateData,
      },
    }),
    supabase.functions.invoke('send-transactional-email', {
      body: {
        templateName: 'devis-confirmation',
        recipientEmail: email,
        idempotencyKey: `devis-confirm-${id}`,
        templateData: { name, eventType },
      },
    }),
  ])

  if (notif.error || confirm.error) {
    console.error('Email dispatch error', { notif: notif.error, confirm: confirm.error })
    // The row was saved, so the request is not lost. Return 200 with a warning.
    return new Response(
      JSON.stringify({ success: true, id, emailError: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  return new Response(JSON.stringify({ success: true, id }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
