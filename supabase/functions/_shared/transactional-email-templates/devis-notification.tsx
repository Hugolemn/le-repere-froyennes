import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Le Repère Froyennes'

interface DevisNotificationProps {
  name?: string
  email?: string
  phone?: string
  eventType?: string
  guests?: string
  date?: string
  message?: string
}

const DevisNotificationEmail = ({
  name, email, phone, eventType, guests, date, message,
}: DevisNotificationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle demande de devis traiteur — {name ?? 'client'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouvelle demande de devis traiteur</Heading>
        <Text style={text}>
          Une nouvelle demande de devis vient d'être envoyée via le site {SITE_NAME}.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={row}><strong>Nom :</strong> {name ?? '—'}</Text>
          <Text style={row}><strong>Email :</strong> {email ?? '—'}</Text>
          <Text style={row}><strong>Téléphone :</strong> {phone ?? '—'}</Text>
          <Text style={row}><strong>Type d'événement :</strong> {eventType ?? '—'}</Text>
          <Text style={row}><strong>Nombre de personnes :</strong> {guests ?? '—'}</Text>
          <Text style={row}><strong>Date souhaitée :</strong> {date ?? '—'}</Text>
        </Section>
        {message && (
          <>
            <Hr style={hr} />
            <Text style={rowLabel}>Message :</Text>
            <Text style={text}>{message}</Text>
          </>
        )}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: DevisNotificationEmail,
  subject: (d: Record<string, any>) =>
    `Nouvelle demande de devis — ${d.name ?? 'client'}${d.eventType ? ` (${d.eventType})` : ''}`,
  to: 'info@lereperefroyennes.be',
  displayName: 'Notification — Demande de devis',
  previewData: {
    name: 'Marie Dupont',
    email: 'marie@example.com',
    phone: '0470 12 34 56',
    eventType: 'Mariage',
    guests: '80',
    date: '2026-06-15',
    message: 'Cocktail dînatoire en extérieur.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#111111', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 12px' }
const row = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '4px 0' }
const rowLabel = { fontSize: '14px', color: '#111111', fontWeight: 'bold', margin: '8px 0 4px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
