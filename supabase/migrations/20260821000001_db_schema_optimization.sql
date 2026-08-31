-- ==============================================================================
-- MIGRATION: 20260821000001_db_schema_optimization.sql
-- PURPOSE: Recommended Database Constraints, Indexes, Foreign Key Cascades & RLS
-- ==============================================================================

-- 1. ADD UNIQUE CONSTRAINT TO PREVENT DUPLICATE LOCATION x SERVICE PAGES
ALTER TABLE public.seo_location_pages
ADD CONSTRAINT seo_location_pages_unique_loc_srv UNIQUE (location_id, service_id);

-- 2. UPDATE FOREIGN KEYS WITH ON DELETE CASCADE FOR CLEAN DELETIONS
-- (Deletes associated FAQs and internal links automatically when a page is deleted)
ALTER TABLE public.seo_faqs
DROP CONSTRAINT IF EXISTS seo_faqs_page_id_fkey,
ADD CONSTRAINT seo_faqs_page_id_fkey
FOREIGN KEY (page_id) REFERENCES public.seo_location_pages(id) ON DELETE CASCADE;

ALTER TABLE public.seo_internal_links
DROP CONSTRAINT IF EXISTS seo_internal_links_source_page_id_fkey,
ADD CONSTRAINT seo_internal_links_source_page_id_fkey
FOREIGN KEY (source_page_id) REFERENCES public.seo_location_pages(id) ON DELETE CASCADE;

ALTER TABLE public.seo_internal_links
DROP CONSTRAINT IF EXISTS seo_internal_links_target_page_id_fkey,
ADD CONSTRAINT seo_internal_links_target_page_id_fkey
FOREIGN KEY (target_page_id) REFERENCES public.seo_location_pages(id) ON DELETE CASCADE;

-- 3. PERFORMANCE INDEXES FOR FAST NEXT.JS PUBLIC PAGE & SITEMAP QUERIES
CREATE INDEX IF NOT EXISTS idx_seo_locations_slug ON public.seo_locations(city_slug) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_seo_services_slug ON public.seo_services(service_slug) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_seo_location_pages_lookup ON public.seo_location_pages(location_id, service_id);
CREATE INDEX IF NOT EXISTS idx_seo_location_pages_published ON public.seo_location_pages(published) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_seo_faqs_page_sort ON public.seo_faqs(page_id, sort_order) WHERE is_active = true;

-- 4. ENABLE ROW LEVEL SECURITY (RLS) & PUBLIC READ POLICIES
ALTER TABLE public.seo_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_location_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_internal_links ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Only active locations/services and published pages)
CREATE POLICY "Public read active locations" ON public.seo_locations
FOR SELECT USING (is_active = true);

CREATE POLICY "Public read active services" ON public.seo_services
FOR SELECT USING (is_active = true);

CREATE POLICY "Public read published pages" ON public.seo_location_pages
FOR SELECT USING (published = true);

CREATE POLICY "Public read active faqs" ON public.seo_faqs
FOR SELECT USING (is_active = true);

CREATE POLICY "Public read active internal links" ON public.seo_internal_links
FOR SELECT USING (is_active = true);

-- Admin Full Management Policies
CREATE POLICY "Admin full management locations" ON public.seo_locations
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full management services" ON public.seo_services
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full management pages" ON public.seo_location_pages
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full management faqs" ON public.seo_faqs
FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full management internal links" ON public.seo_internal_links
FOR ALL USING (auth.role() = 'authenticated');

-- 5. AUTOMATIC TIMESTAMP TRIGGER FOR UPDATED_AT
CREATE OR REPLACE FUNCTION public.update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_seo_locations_timestamp
BEFORE UPDATE ON public.seo_locations
FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();

CREATE TRIGGER update_seo_services_timestamp
BEFORE UPDATE ON public.seo_services
FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();

CREATE TRIGGER update_seo_location_pages_timestamp
BEFORE UPDATE ON public.seo_location_pages
FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();

CREATE TRIGGER update_seo_faqs_timestamp
BEFORE UPDATE ON public.seo_faqs
FOR EACH ROW EXECUTE FUNCTION public.update_timestamp();
