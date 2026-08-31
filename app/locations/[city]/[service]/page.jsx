import React from "react";
import { notFound } from "next/navigation";
import { getSeoLocationPage } from "@/lib/seo/getSeoLocationPage";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoHero from "@/components/seo/SeoHero";
import ServiceOverview from "@/components/seo/ServiceOverview";
import LocalInformation from "@/components/seo/LocalInformation";
import RegistrationProcess from "@/components/seo/RegistrationProcess";
import DocumentsSection from "@/components/seo/DocumentsSection";
import PricingSection from "@/components/seo/PricingSection";
import WhyCorporateHub from "@/components/seo/WhyCorporateHub";
import FAQSection from "@/components/seo/FAQSection";
import RelatedServices from "@/components/seo/RelatedServices";
import RelatedLocations from "@/components/seo/RelatedLocations";
import CorporateFooter from "@/components/CorporateFooter";

import "@/components/seo/SeoPages.css";

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

  return {
    title: isPreview ? `[PREVIEW DRAFT] ${page.meta_title}` : page.meta_title,
    description: page.meta_description,
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: page.meta_title,
      description: page.meta_description,
      url: canonicalUrl,
      type: "website",
      images: page.og_image ? [{ url: page.og_image }] : [{ url: "/logo.png" }]
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

      {/* Hero Section */}
      <SeoHero
        h1={page.h1}
        intro={page.intro}
        cityName={location.city_name}
        stateName={location.state_name}
        serviceName={serviceObj.service_name}
        citySlug={location.city_slug}
        serviceSlug={serviceObj.service_slug}
      />

      {/* Service Overview */}
      <ServiceOverview
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        whyChooseService={page.why_choose_service}
      />

      {/* Local Regulatory Information */}
      <LocalInformation
        cityName={location.city_name}
        localInformation={page.local_information}
      />

      {/* Step-by-Step Registration Process */}
      <RegistrationProcess
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        processText={page.process}
      />

      {/* Documents Required */}
      <DocumentsSection
        serviceName={serviceObj.service_name}
        cityName={location.city_name}
        documentsText={page.documents}
      />

      {/* Pricing & Timeline */}
      <PricingSection
        pricingText={page.pricing}
        timelineText={page.timeline}
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
      />

      {/* Why Choose Corporate Hub */}
      <WhyCorporateHub
        whyCorporateHub={page.why_corporate_hub}
        cityName={location.city_name}
      />

      {/* FAQs Section */}
      <FAQSection
        faqs={faqs}
        cityName={location.city_name}
        serviceName={serviceObj.service_name}
      />

      {/* Related Services in Same City */}
      <RelatedServices
        relatedServices={relatedServices}
        cityName={location.city_name}
        citySlug={location.city_slug}
        parentCategorySlug={serviceObj.parent_service}
      />

      {/* Related Locations for Same Service */}
      <RelatedLocations
        relatedLocations={relatedLocations}
        serviceName={serviceObj.service_name}
        serviceSlug={serviceObj.service_slug}
      />

      {/* Footer */}
      <CorporateFooter />
    </div>
  );
}
