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

/**
 * Parses CMS plain-text fields (newline or bullet-separated) into an array of clean strings.
 * Handles bullets, numbered prefixes (1., 2.), and trims whitespace.
 */
function parseCmsLines(text) {
  if (!text || typeof text !== "string") return [];
  return text
    .split("\n")
    .map((line) => line.replace(/^[\s\u2022\u2713\-\*]+/, "").replace(/^\d+[\.\)]\s*/, "").trim())
    .filter(Boolean);
}

/**
 * Converts flat CMS text fields from Supabase into the structured shapes
 * that ServiceDetailPage expects (arrays of objects, structured objects, etc.)
 */
function buildCmsData(page, serviceObj, location, faqs) {
  const serviceName = serviceObj?.service_name || "Service";
  const cityName = location?.city_name || "City";

  // whoShouldChoose: [{title, desc}]
  const whoShouldChoose = parseCmsLines(page.who_should_choose).map((line) => ({
    title: line,
    desc: ""
  }));

  // keyBenefits: [{title, desc}]
  const keyBenefits = parseCmsLines(page.key_benefits).map((line) => ({
    title: line,
    desc: ""
  }));

  // eligibility: [string]
  const eligibility = parseCmsLines(page.eligibility);

  // documentsRequired: { directors: [string] }
  const docLines = parseCmsLines(page.documents);
  const documentsRequired = docLines.length > 0 ? { directors: docLines } : null;

  // processSteps: [{step, title, desc}]
  const processSteps = parseCmsLines(page.process).map((line, idx) => ({
    step: idx + 1,
    title: line,
    desc: ""
  }));

  // timeline: {duration, qualification}
  const timeline = page.timeline ? {
    duration: page.timeline,
    qualification: "Subject to government processing times and document completeness."
  } : null;

  // taxCompliance: [string]
  const taxCompliance = parseCmsLines(page.tax_compliance);

  // growthImpact: [string]
  const growthImpact = parseCmsLines(page.how_it_helps);

  // whyCorporateHub: [string]
  const whyCorporateHub = parseCmsLines(page.why_corporate_hub);

  return {
    id: serviceObj?.service_slug || "service",
    categorySlug: serviceObj?.parent_service || "business-registration",
    categoryTitle: "Business Services",
    name: serviceName,
    locationHeading: page.h1 || `${serviceName} in ${cityName}`,
    heroIntro: page.intro || "",
    whatIs: page.what_is_service || page.why_choose_service || "",
    whoShouldChoose: whoShouldChoose.length > 0 ? whoShouldChoose : undefined,
    keyBenefits: keyBenefits.length > 0 ? keyBenefits : undefined,
    eligibility: eligibility.length > 0 ? eligibility : undefined,
    documentsRequired,
    processSteps: processSteps.length > 0 ? processSteps : undefined,
    timeline,
    taxCompliance: taxCompliance.length > 0 ? taxCompliance : undefined,
    comparison: undefined,
    growthImpact: growthImpact.length > 0 ? growthImpact : undefined,
    localInformation: page.local_information || "",
    whyCorporateHub: whyCorporateHub.length > 0 ? whyCorporateHub : undefined,
    faqs: (faqs || []).map((f) => ({ q: f.question, a: f.answer }))
  };
}

// Dynamic Metadata Generator for Search Engines
export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const { city, service } = resolvedParams;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  // 1. Check database FIRST for a published CMS page
  const dbData = await getSeoLocationPage(city, service, isPreview);
  if (dbData && dbData.page) {
    const { location, service: sObj, page } = dbData;
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

  // 2. Fallback to static localized data
  const localizedData = getLocalizedServiceDetail(city, service);
  if (!localizedData) {
    return {
      title: "Page Not Found | The Corporate Hub",
      description: "The requested location or service page could not be found."
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
    alternates: { canonical: canonicalUrl },
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

  // 1. Check database FIRST for a published (or preview) CMS page
  const dbData = await getSeoLocationPage(city, service, isPreview);

  if (dbData && dbData.page) {
    const { location, service: serviceObj, page, faqs } = dbData;
    const cmsData = buildCmsData(page, serviceObj, location, faqs);
    const canonicalUrl = page.canonical_url || `https://www.thecorporatehub.in/locations/${location.city_slug}/${serviceObj.service_slug}`;

    // Schema.org Structured Data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thecorporatehub.in" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.thecorporatehub.in/services" },
        { "@type": "ListItem", "position": 3, "name": serviceObj.service_name, "item": `https://www.thecorporatehub.in/services/${serviceObj.parent_service || "business-registration"}` },
        { "@type": "ListItem", "position": 4, "name": `${serviceObj.service_name} in ${location.city_name}`, "item": canonicalUrl }
      ]
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceObj.service_name} in ${location.city_name}`,
      "serviceType": serviceObj.service_name,
      "provider": {
        "@type": "Organization",
        "name": "The Corporate Hub",
        "url": "https://www.thecorporatehub.in",
        "logo": "https://www.thecorporatehub.in/logo.png"
      },
      "areaServed": { "@type": "City", "name": location.city_name },
      "description": page.intro || page.what_is_service || "",
      "url": canonicalUrl
    };

    const faqSchema = cmsData.faqs && cmsData.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cmsData.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    } : null;

    return (
      <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        {faqSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        )}
        <div style={{ flex: 1 }}>
          <ServiceDetailPage
            data={cmsData}
            categorySlug={serviceObj.parent_service || "business-registration"}
            locationName={location.city_name}
            locationSlug={location.city_slug}
          />
        </div>
        <CorporateFooter />
      </main>
    );
  }

  // 2. Fallback to static localized data
  const localizedData = getLocalizedServiceDetail(city, service);
  if (!localizedData) {
    notFound();
  }

  const { cityName, detail } = localizedData;
  const canonicalUrl = `https://www.thecorporatehub.in/locations/${city.toLowerCase()}/${service.toLowerCase()}`;

  // Schema.org Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thecorporatehub.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.thecorporatehub.in/services" },
      { "@type": "ListItem", "position": 3, "name": detail.categoryTitle, "item": `https://www.thecorporatehub.in/services/${detail.categorySlug}` },
      { "@type": "ListItem", "position": 4, "name": `${detail.name} in ${cityName}`, "item": canonicalUrl }
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
    "areaServed": { "@type": "City", "name": cityName },
    "description": detail.heroIntro || detail.whatIs,
    "url": canonicalUrl
  };

  const faqSchema = detail.faqs && detail.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": detail.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : null;

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
