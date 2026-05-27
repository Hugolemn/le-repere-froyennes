
DROP POLICY IF EXISTS "Allow authenticated read own" ON public.devis_requests;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.devis_requests;

CREATE POLICY "Public can submit devis requests"
ON public.devis_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 254
  AND length(phone) BETWEEN 3 AND 50
  AND length(event_type) BETWEEN 1 AND 100
  AND guests > 0 AND guests < 100000
  AND (message IS NULL OR length(message) <= 5000)
);

REVOKE SELECT ON public.devis_requests FROM anon, authenticated;
