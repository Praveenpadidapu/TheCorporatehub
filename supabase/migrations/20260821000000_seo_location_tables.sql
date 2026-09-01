-- Migration: 20260821000000_seo_location_tables.sql
-- Description: Create SEO Location x Service schema, indexes, RLS policies, lead attribution columns, and seed initial data.

-- 1. Create SEO Locations Table
CREATE TABLE IF NOT EXISTS public.seo_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_name text NOT NULL,
  state_name text NOT NULL,
  city_slug text NOT NULL UNIQUE,
  state_slug text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 2. Create SEO Services Table
CREATE TABLE IF NOT EXISTS public.seo_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL,
  service_slug text NOT NULL UNIQUE,
  parent_service text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 3. Create SEO Location Pages Table
CREATE TABLE IF NOT EXISTS public.seo_location_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid NOT NULL REFERENCES public.seo_locations(id) ON DELETE CASCADE,
  service_id uuid NOT NULL REFERENCES public.seo_services(id) ON DELETE CASCADE,
  h1 text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  intro text,
  what_is_service text,
  who_should_choose text,
  key_benefits text,
  eligibility text,
  documents text,
  process text,
  timeline text,
  tax_compliance text,
  comparison text,
  business_growth text,
  local_information text,
  why_corporate_hub text,
  pricing text,
  canonical_url text,
  og_image text,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(location_id, service_id)
);

-- Ensure existing database tables get new columns via ALTER TABLE IF NOT EXISTS
ALTER TABLE public.seo_location_pages
  ADD COLUMN IF NOT EXISTS what_is_service text,
  ADD COLUMN IF NOT EXISTS who_should_choose text,
  ADD COLUMN IF NOT EXISTS key_benefits text,
  ADD COLUMN IF NOT EXISTS eligibility text,
  ADD COLUMN IF NOT EXISTS tax_compliance text,
  ADD COLUMN IF NOT EXISTS comparison text,
  ADD COLUMN IF NOT EXISTS business_growth text;

-- 4. Create SEO FAQs Table
CREATE TABLE IF NOT EXISTS public.seo_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid NOT NULL REFERENCES public.seo_location_pages(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 5. Create SEO Internal Links Table
CREATE TABLE IF NOT EXISTS public.seo_internal_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_page_id uuid NOT NULL REFERENCES public.seo_location_pages(id) ON DELETE CASCADE,
  target_page_id uuid NOT NULL REFERENCES public.seo_location_pages(id) ON DELETE CASCADE,
  anchor_text text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(source_page_id, target_page_id)
);

-- 6. Add Lead Attribution Columns to contact_submissions Table (if not exists)
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS landing_page text,
  ADD COLUMN IF NOT EXISTS utm_source text,
  ADD COLUMN IF NOT EXISTS utm_medium text,
  ADD COLUMN IF NOT EXISTS utm_campaign text,
  ADD COLUMN IF NOT EXISTS utm_term text,
  ADD COLUMN IF NOT EXISTS utm_content text;

-- 7. Database Indexes
CREATE INDEX IF NOT EXISTS idx_seo_locations_city_slug ON public.seo_locations(city_slug);
CREATE INDEX IF NOT EXISTS idx_seo_locations_state_slug ON public.seo_locations(state_slug);
CREATE INDEX IF NOT EXISTS idx_seo_locations_active ON public.seo_locations(is_active);

CREATE INDEX IF NOT EXISTS idx_seo_services_slug ON public.seo_services(service_slug);

CREATE INDEX IF NOT EXISTS idx_seo_location_pages_location_service ON public.seo_location_pages(location_id, service_id);
CREATE INDEX IF NOT EXISTS idx_seo_location_pages_published ON public.seo_location_pages(published);

CREATE INDEX IF NOT EXISTS idx_seo_faqs_page_id ON public.seo_faqs(page_id);

-- 8. Enable Row Level Security (RLS)
ALTER TABLE public.seo_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_location_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_internal_links ENABLE ROW LEVEL SECURITY;

-- 9. Create Public Read Policies
DROP POLICY IF EXISTS "Public can view active locations" ON public.seo_locations;
CREATE POLICY "Public can view active locations"
  ON public.seo_locations FOR SELECT
  USING (is_active = true);

DROP POLICY IF EXISTS "Public can view active services" ON public.seo_services;
CREATE POLICY "Public can view active services"
  ON public.seo_services FOR SELECT
  USING (is_active = true);

DROP POLICY IF EXISTS "Public can view published SEO pages" ON public.seo_location_pages;
CREATE POLICY "Public can view published SEO pages"
  ON public.seo_location_pages FOR SELECT
  USING (published = true);

DROP POLICY IF EXISTS "Public can view active FAQs on published pages" ON public.seo_faqs;
CREATE POLICY "Public can view active FAQs on published pages"
  ON public.seo_faqs FOR SELECT
  USING (
    is_active = true AND
    page_id IN (SELECT id FROM public.seo_location_pages WHERE published = true)
  );

DROP POLICY IF EXISTS "Public can view active internal links" ON public.seo_internal_links;
CREATE POLICY "Public can view active internal links"
  ON public.seo_internal_links FOR SELECT
  USING (is_active = true);

-- 10. Admin Full Management Policies (Authenticated users / Service role)
DROP POLICY IF EXISTS "Admins have full access to seo_locations" ON public.seo_locations;
CREATE POLICY "Admins have full access to seo_locations"
  ON public.seo_locations FOR ALL
  TO authenticated, service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins have full access to seo_services" ON public.seo_services;
CREATE POLICY "Admins have full access to seo_services"
  ON public.seo_services FOR ALL
  TO authenticated, service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins have full access to seo_location_pages" ON public.seo_location_pages;
CREATE POLICY "Admins have full access to seo_location_pages"
  ON public.seo_location_pages FOR ALL
  TO authenticated, service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins have full access to seo_faqs" ON public.seo_faqs;
CREATE POLICY "Admins have full access to seo_faqs"
  ON public.seo_faqs FOR ALL
  TO authenticated, service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins have full access to seo_internal_links" ON public.seo_internal_links;
CREATE POLICY "Admins have full access to seo_internal_links"
  ON public.seo_internal_links FOR ALL
  TO authenticated, service_role
  USING (true)
  WITH CHECK (true);

-- 11. Seed Initial Locations
INSERT INTO public.seo_locations (city_name, state_name, city_slug, state_slug, is_active)
VALUES
  ('Ahmedabad', 'Gujarat', 'ahmedabad', 'gujarat', true),
  ('Surat', 'Gujarat', 'surat', 'gujarat', true),
  ('Vadodara', 'Gujarat', 'vadodara', 'gujarat', true),
  ('Rajkot', 'Gujarat', 'rajkot', 'gujarat', true),
  ('Mumbai', 'Maharashtra', 'mumbai', 'maharashtra', true),
  ('Pune', 'Maharashtra', 'pune', 'maharashtra', true),
  ('Thane', 'Maharashtra', 'thane', 'maharashtra', true),
  ('Nagpur', 'Maharashtra', 'nagpur', 'maharashtra', true),
  ('Nashik', 'Maharashtra', 'nashik', 'maharashtra', true),
  ('Bengaluru', 'Karnataka', 'bengaluru', 'karnataka', true),
  ('Hyderabad', 'Telangana', 'hyderabad', 'telangana', true),
  ('Chennai', 'Tamil Nadu', 'chennai', 'tamil-nadu', true)
ON CONFLICT (city_slug) DO UPDATE
SET city_name = EXCLUDED.city_name,
    state_name = EXCLUDED.state_name,
    state_slug = EXCLUDED.state_slug,
    is_active = EXCLUDED.is_active;

-- 12. Seed Initial Services
INSERT INTO public.seo_services (service_name, service_slug, parent_service, is_active)
VALUES
  ('Company Registration', 'company-registration', 'business-registration', true),
  ('Trademark Registration', 'trademark-registration', 'intellectual-property', true),
  ('GST Compliance', 'gst-compliance', 'accounting-taxation', true),
  ('Copyright Registration', 'copyright-registration', 'intellectual-property', true)
ON CONFLICT (service_slug) DO UPDATE
SET service_name = EXCLUDED.service_name,
    parent_service = EXCLUDED.parent_service,
    is_active = EXCLUDED.is_active;
