CREATE TABLE public.devis_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    event_type text NOT NULL,
    guests integer NOT NULL,
    date date NOT NULL,
    message text,
    status text NOT NULL DEFAULT 'new',
    created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.devis_requests TO anon;
GRANT SELECT, INSERT ON public.devis_requests TO authenticated;
GRANT ALL ON public.devis_requests TO service_role;

ALTER TABLE public.devis_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.devis_requests
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.devis_requests
    FOR ALL TO service_role
    USING (true);

CREATE POLICY "Allow authenticated read own" ON public.devis_requests
    FOR SELECT TO authenticated
    USING (true);
