-- ==============================================================================
-- MIGRATION: 20260822000000_seo_sitemaps.sql
-- PURPOSE: Dynamic XML Sitemap table for storing & caching sitemaps for Google Search Console
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.seo_sitemaps (
  id text PRIMARY KEY DEFAULT 'default',
  xml_content text NOT NULL,
  urls_count integer NOT NULL DEFAULT 0,
  routes_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_generated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.seo_sitemaps ENABLE ROW LEVEL SECURITY;

-- Drop policies if re-running
DROP POLICY IF EXISTS "Public read seo_sitemaps" ON public.seo_sitemaps;
DROP POLICY IF EXISTS "Anyone can insert seo_sitemaps" ON public.seo_sitemaps;
DROP POLICY IF EXISTS "Anyone can update seo_sitemaps" ON public.seo_sitemaps;

-- Public read access so Next.js frontend and Googlebot can fetch without restrictions
CREATE POLICY "Public read seo_sitemaps"
  ON public.seo_sitemaps
  FOR SELECT
  USING (true);

-- Allow inserting/updating for admin panel sync and fallback builders
CREATE POLICY "Anyone can insert seo_sitemaps"
  ON public.seo_sitemaps
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update seo_sitemaps"
  ON public.seo_sitemaps
  FOR UPDATE
  USING (true);

-- Automatic update trigger
DROP TRIGGER IF EXISTS update_seo_sitemaps_timestamp ON public.seo_sitemaps;
CREATE TRIGGER update_seo_sitemaps_timestamp
  BEFORE UPDATE ON public.seo_sitemaps
  FOR EACH ROW
  EXECUTE FUNCTION public.update_timestamp();
