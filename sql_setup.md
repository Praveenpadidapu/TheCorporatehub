-- ============================================================
-- The Corporate Hub — Supabase SQL Setup (Tables Only)
-- ============================================================

-- profiles (Mirrors Supabase auth.users)
CREATE TABLE public.profiles (
    id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name          TEXT,
    email         TEXT UNIQUE,
    phone_number  TEXT
);

-- Trigger: auto-create a profile row when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, phone_number)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.email,
    NEW.raw_user_meta_data ->> 'phone_number'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- contact_submissions
CREATE TABLE public.contact_submissions (
    id          TEXT PRIMARY KEY DEFAULT 'SUB-' || LPAD(FLOOR(RANDOM() * 900000 + 100000)::TEXT, 6, '0'),
    "fullName"  TEXT NOT NULL,
    email       TEXT NOT NULL,
    phone       TEXT,
    service     TEXT,
    subject     TEXT NOT NULL,
    message     TEXT NOT NULL,
    date        TIMESTAMPTZ NOT NULL DEFAULT now(),
    status      TEXT NOT NULL DEFAULT 'New'
);

-- Allow anyone (including anonymous visitors) to submit contact forms
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert contact submissions"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow reading contact submissions (needed by admin panel)
CREATE POLICY "Anyone can read contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (true);

-- Allow updating contact submissions (status changes from admin)
CREATE POLICY "Anyone can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  USING (true);

-- Allow deleting contact submissions (admin cleanup)
CREATE POLICY "Anyone can delete contact submissions"
  ON public.contact_submissions
  FOR DELETE
  USING (true);
