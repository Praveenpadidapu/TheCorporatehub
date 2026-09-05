import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import CorporateFooter from "@/components/CorporateFooter";
import {
  getLocalizedServiceDetail,
  formatCityName,
  resolveSubService,
  TOP_CITIES,
  TOP_SERVICES
} from "@/lib/seo/locationServiceHelper";
import { getSeoLocationPage } from "@/lib/seo/getSeoLocationPage";

// Enable static pre-rendering for top commercial hubs, with on-demand SSR for any other location
export const dynamicParams = true;

export async function generateStaticParams() {
  const params = [];
  for (const city of TOP_CITIES) {
    for (const service of TOP_SERVICES) {
      params.push({ city, service });
    }
  }
  return params;
}

// Dynamic Metadata Generator for Search Engines
export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const { city, service } = resolvedParams;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  // Check localized service detail
  const localizedData = getLocalizedServiceDetail(city, service);

  if (!localizedData) {
    // Fallback check to database-backed SEO page
    const pageData = await getSeoLocationPage(city, service, isPreview);
    if (!pageData || !pageData.page) {
      return {
        title: "Page Not Found | The Corporate Hub",
        description: "The requested location or service page could not be found."
      };
    }
    const { location, service: sObj, page } = pageData;
    const canonical = page.canonical_url || `https://www.thecorporatehub.in/locations/${location.city_slug}/${sObj.service_slug}`;
    return {
      title: isPreview ? `[PREVIEW DRAFT] ${page.meta_title}` : page.meta_title,
      description: page.meta_description,
      robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
      alternates: { canonical },
      openGraph: {
        title: page.meta_title,
        description: page.meta_description,
        url: canonical,
        type: "website",
        images: page.og_image ? [{ url: page.og_image }] : [{ url: "/logo.png" }]
      }
    };
  }

  const { cityName, detail } = localizedData;
  const title = `${detail.name} in ${cityName} | The Corporate Hub`;
  const description = `Register your ${detail.name} in ${cityName} with The Corporate Hub. 100% online MCA, DGFT & tax filing, expert CA/CS consultation, and fast turnaround.`;
  const canonicalUrl = `https://www.thecorporatehub.in/locations/${city.toLowerCase()}/${service.toLowerCase()}`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "The Corporate Hub",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"]
    }
  };
}

export default async function LocationServicePage({ params, searchParams }) {
  const resolvedParams = await params;
  const { city, service } = resolvedParams;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  // 1. Resolve localized service detail from serviceDetailsData.js
  const localizedData = getLocalizedServiceDetail(city, service);

  // 2. If not found in static data, check Supabase DB fallback
  let customDbPage = null;
  if (!localizedData) {
    customDbPage = await getSeoLocationPage(city, service, isPreview);
    if (!customDbPage || !customDbPage.page) {
      notFound();
    }
  }

  // If resolved via static subServiceDetailsData
  if (localizedData) {
    const { cityName, detail } = localizedData;
    const canonicalUrl = `https://www.thecorporatehub.in/locations/${city.toLowerCase()}/${service.toLowerCase()}`;

    // Schema.org Structured Data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.thecorporatehub.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.thecorporatehub.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": detail.categoryTitle,
          "item": `https://www.thecorporatehub.in/services/${detail.categorySlug}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": `${detail.name} in ${cityName}`,
          "item": canonicalUrl
        }
      ]
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${detail.name} in ${cityName}`,
      "serviceType": detail.name,
      "provider": {
        "@type": "Organization",
        "name": "The Corporate Hub",
        "url": "https://www.thecorporatehub.in",
        "logo": "https://www.thecorporatehub.in/logo.png"
      },
      "areaServed": {
        "@type": "City",
        "name": cityName
      },
      "description": detail.heroIntro || detail.whatIs,
      "url": canonicalUrl
    };

    const faqSchema = detail.faqs && detail.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": detail.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    } : null;

    return (
      <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* JSON-LD Schemas for Search Engine Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <div style={{ flex: 1 }}>
          <ServiceDetailPage
            data={detail}
            categorySlug={detail.categorySlug}
            locationName={cityName}
            locationSlug={city}
          />
        </div>
        <CorporateFooter />
      </main>
    );
  }

  // Fallback for custom DB page if ever configured without static service
  const { location, service: serviceObj, page, faqs } = customDbPage;
  const canonicalUrl = page.canonical_url || `https://www.thecorporatehub.in/locations/${location.city_slug}/${serviceObj.service_slug}`;

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ServiceDetailPage
          data={{
            id: serviceObj.service_slug,
            categorySlug: serviceObj.parent_service || "business-registration",
            categoryTitle: "Business Services",
            name: serviceObj.service_name,
            locationHeading: page.h1 || `${serviceObj.service_name} in ${location.city_name}`,
            heroIntro: page.intro,
            whatIs: page.why_choose_service,
            localInformation: page.local_information,
            faqs: (faqs || []).map((f) => ({ q: f.question, a: f.answer }))
          }}
          categorySlug={serviceObj.parent_service || "business-registration"}
          locationName={location.city_name}
          locationSlug={location.city_slug}
        />
      </div>
      <CorporateFooter />
    </main>
  );
}
