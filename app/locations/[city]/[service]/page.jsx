import React from "react";
import { notFound } from "next/navigation";
import { getSeoLocationPage } from "@/lib/seo/getSeoLocationPage";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoHero from "@/components/seo/SeoHero";
import ServiceOverview from "@/components/seo/ServiceOverview";
import DocumentsSection from "@/components/seo/DocumentsSection";
import RegistrationProcess from "@/components/seo/RegistrationProcess";
import PricingSection from "@/components/seo/PricingSection";
import LocalInformation from "@/components/seo/LocalInformation";
import ComparisonSection from "@/components/seo/ComparisonSection";
import BusinessGrowthSection from "@/components/seo/BusinessGrowthSection";
import WhyCorporateHub from "@/components/seo/WhyCorporateHub";
import FAQSection from "@/components/seo/FAQSection";
import RelatedServices from "@/components/seo/RelatedServices";
import RelatedLocations from "@/components/seo/RelatedLocations";
import FinalCtaSection from "@/components/seo/FinalCtaSection";
import CorporateFooter from "@/components/CorporateFooter";

import "@/components/seo/SeoPages.css";

export const revalidate = 60; // Dynamic revalidation every 60s for live admin updates

// Dynamic Metadata Generator
export async function generateMetadata({ params, searchParams }) {
  const { city, service } = await params;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  const pageData = await getSeoLocationPage(city, service, isPreview);

  if (!pageData || !pageData.page) {
    return {
      title: "Page Not Found | Corporate Hub",
      description: "The requested location or service page could not be found."
    };
  }

  const { location, service: serviceObj, page } = pageData;
  const canonicalUrl = page.canonical_url || `https://www.thecorporatehub.in/locations/${location.city_slug}/${serviceObj.service_slug}`;
  const title = isPreview ? `[PREVIEW DRAFT] ${page.meta_title}` : page.meta_title;
  const description = page.meta_description;

  return {
    title,
    description,
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: page.og_image ? [{ url: page.og_image }] : [{ url: "/logo.png" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function SeoLocationPage({ params, searchParams }) {
  const { city, service } = await params;
  const sParams = await searchParams;
  const isPreview = sParams?.preview === "true";

  const pageData = await getSeoLocationPage(city, service, isPreview);

  // Return 404 for invalid/unpublished pages (unless in preview mode)
  if (!pageData || !pageData.page) {
    notFound();
  }

  const { location, service: serviceObj, page, faqs, relatedServices, relatedLocations } = pageData;

  const canonicalUrl = page.canonical_url || `https://www.thecorporatehub.in/locations/${location.city_slug}/${serviceObj.service_slug}`;

  // Structured Data (JSON-LD) for Search Engine Rich Snippets
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
        "name": "Locations",
        "item": "https://www.thecorporatehub.in/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.city_name,
        "item": `https://www.thecorporatehub.in/locations/${location.city_slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": serviceObj.service_name,
        "item": canonicalUrl
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Corporate Hub ${serviceObj.service_name} in ${location.city_name}`,
    "url": canonicalUrl,
    "logo": "https://www.thecorporatehub.in/logo.png",
    "description": page.meta_description || `${serviceObj.service_name} services in ${location.city_name}, ${location.state_name}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city_name,
      "addressRegion": location.state_name,
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "City",
      "name": location.city_name
    }
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="seo-page-container">
      {/* Draft Preview Banner */}
      {isPreview && (
        <div style={{ background: "#f59e0b", color: "#000000", padding: "10px 20px", textCenter: "center", fontWeight: 700, fontSize: "0.9rem", textAlign: "center" }}>
          ⚠️ PREVIEW MODE: You are viewing an UNPUBLISHED DRAFT page ({location.city_name} × {serviceObj.service_name}). Search engines will not index this page.
        </div>
      )}

      {/* Search Engine Rich Snippet JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {!isPreview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {!isPreview && faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
        citySlug={location.city_slug}
      />

      {/* 1. Main Heading & 2. Hero Introduction */}
      <SeoHero
        h1={page.h1}
        intro={page.intro}
        cityName={location.city_name}
        stateName={location.state_name}
        serviceName={serviceObj.service_name}
        citySlug={location.city_slug}
        serviceSlug={serviceObj.service_slug}
      />

      {/* 3. What Is the Service?, 4. Who Should Choose This?, 5. Key Benefits, 6. Eligibility / Requirements */}
      <ServiceOverview
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        whatIsService={page.what_is_service}
        whoShouldChoose={page.who_should_choose}
        keyBenefits={page.key_benefits}
        eligibility={page.eligibility}
        whyChooseService={page.why_choose_service}
      />

      {/* 7. Documents Required */}
      <DocumentsSection
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        documentsText={page.documents}
      />

      {/* 8. Process */}
      <RegistrationProcess
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        processText={page.process}
      />

      {/* 9. Timeline */}
      <PricingSection
        timelineText={page.timeline}
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
        citySlug={location.city_slug}
        serviceSlug={serviceObj.service_slug}
      />

      {/* 10. Tax & Compliance & 13. Local Information */}
      <LocalInformation
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
        localInformation={page.local_information}
        taxCompliance={page.tax_compliance}
      />

      {/* 11. Comparison */}
      <ComparisonSection
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        comparisonText={page.comparison}
        citySlug={location.city_slug}
        serviceSlug={serviceObj.service_slug}
      />

      {/* 12. How It Helps Your Business Grow */}
      <BusinessGrowthSection
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        businessGrowthText={page.business_growth}
      />

      {/* 14. Why The Corporate Hub? */}
      <WhyCorporateHub
        whyCorporateHub={page.why_corporate_hub}
        cityName={location.city_name}
      />

      {/* 15. Frequently Asked Questions */}
      <FAQSection
        faqs={faqs}
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
      />

      {/* 16. Related Services & Locations */}
      <RelatedServices
        relatedServices={relatedServices}
        cityName={location.city_name}
        citySlug={location.city_slug}
        parentCategorySlug={serviceObj.parent_service}
      />
      <RelatedLocations
        relatedLocations={relatedLocations}
        serviceName={serviceObj.service_name}
        serviceSlug={serviceObj.service_slug}
      />

      {/* 17. Final Call to Action */}
      <FinalCtaSection
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        citySlug={location.city_slug}
        serviceSlug={serviceObj.service_slug}
      />

      {/* Footer */}
      <CorporateFooter />
    </div>
  );
}
