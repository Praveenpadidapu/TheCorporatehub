import { servicesData } from "@/data/servicesData";
import { subServiceDetailsData } from "@/data/serviceDetailsData";
import { createClient } from "@supabase/supabase-js";
import { TOP_CITIES, TOP_SERVICES } from "@/lib/seo/locationServiceHelper";

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
      url: `${baseUrl}/locations`,
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

  const subServiceRoutes = Object.values(subServiceDetailsData).map((sub) => ({
    url: `${baseUrl}/services/${sub.categorySlug}/${sub.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Query published SEO Location Pages from Supabase using direct public client
  let locationRoutes = [];
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http")
      ? process.env.NEXT_PUBLIC_SUPABASE_URL
      : "https://placeholder.supabase.co";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Fetch active city locations
    const { data: locations } = await supabase
      .from("seo_locations")
      .select("city_slug, updated_at")
      .eq("is_active", true);

    if (locations && locations.length > 0) {
      locations.forEach((loc) => {
        locationRoutes.push({
          url: `${baseUrl}/locations/${loc.city_slug}`,
          lastModified: new Date(loc.updated_at || Date.now()),
          changeFrequency: "weekly",
          priority: 0.85,
        });
      });
    }

    // 2. Fetch published location-service pages
    const { data: pages } = await supabase
      .from("seo_location_pages")
      .select("updated_at, seo_locations(city_slug), seo_services(service_slug)")
      .eq("published", true);

    if (pages && pages.length > 0) {
      pages
        .filter((p) => p.seo_locations?.city_slug && p.seo_services?.service_slug)
        .forEach((p) => {
          locationRoutes.push({
            url: `${baseUrl}/locations/${p.seo_locations.city_slug}/${p.seo_services.service_slug}`,
            lastModified: new Date(p.updated_at || Date.now()),
            changeFrequency: "weekly",
            priority: 0.85,
          });
        });
    }
  } catch (err) {
    console.error("Error fetching SEO location pages for sitemap:", err);
  }

  // Programmatic location routes for high-traffic cities and services
  const programmaticLocationRoutes = [];
  for (const city of TOP_CITIES) {
    for (const service of TOP_SERVICES) {
      programmaticLocationRoutes.push({
        url: `${baseUrl}/locations/${city}/${service}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  // Combine and deduplicate location routes
  const urlMap = new Map();
  [...programmaticLocationRoutes, ...locationRoutes].forEach((route) => {
    urlMap.set(route.url, route);
  });
  const allLocationRoutes = Array.from(urlMap.values());

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes, ...allLocationRoutes];
}
