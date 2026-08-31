import { servicesData } from "@/data/servicesData";
import { createClient } from "@supabase/supabase-js";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thecorporatehub.in";

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Query published SEO Location Pages from Supabase using direct public client
  let locationRoutes = [];
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http")
      ? process.env.NEXT_PUBLIC_SUPABASE_URL
      : "https://placeholder.supabase.co";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: pages } = await supabase
      .from("seo_location_pages")
      .select("updated_at, seo_locations(city_slug), seo_services(service_slug)")
      .eq("published", true);

    if (pages && pages.length > 0) {
      locationRoutes = pages
        .filter((p) => p.seo_locations?.city_slug && p.seo_services?.service_slug)
        .map((p) => ({
          url: `${baseUrl}/locations/${p.seo_locations.city_slug}/${p.seo_services.service_slug}`,
          lastModified: new Date(p.updated_at || Date.now()),
          changeFrequency: "weekly",
          priority: 0.85,
        }));
    }
  } catch (err) {
    console.error("Error fetching SEO location pages for sitemap:", err);
  }

  // Fallback seed published pages if none returned from DB yet
  if (locationRoutes.length === 0) {
    locationRoutes = [
      {
        url: `${baseUrl}/locations/ahmedabad/company-registration`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      },
      {
        url: `${baseUrl}/locations/mumbai/trademark-registration`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      },
    ];
  }

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
