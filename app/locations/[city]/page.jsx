import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityHubData } from "@/lib/seo/getSeoLocationPage";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CorporateFooter from "@/components/CorporateFooter";
import { FiMapPin, FiArrowRight, FiCheckCircle, FiShield, FiBriefcase } from "react-icons/fi";
import "@/components/seo/SeoPages.css";

export const revalidate = 60; // Dynamic revalidation every 60s for live admin updates

export async function generateMetadata({ params }) {
  const { city } = await params;
  const hubData = await getCityHubData(city);

  if (!hubData || !hubData.location) {
    return {
      title: "City Not Found | Corporate Hub",
      description: "The requested location could not be found."
    };
  }

  const { location } = hubData;
  const canonicalUrl = `https://www.thecorporatehub.in/locations/${location.city_slug}`;
  const title = `Legal, Tax & Company Registration Services in ${location.city_name} | Corporate Hub`;
  const description = `Explore professional company registration, trademark, GST filing, and legal compliance services in ${location.city_name}, ${location.state_name}. 100% online corporate advisory.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [{ url: "/logo.png" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function CityHubPage({ params }) {
  const { city } = await params;
  const hubData = await getCityHubData(city);

  if (!hubData || !hubData.location) {
    notFound();
  }

  const { location, services, allLocations } = hubData;
  const canonicalUrl = `https://www.thecorporatehub.in/locations/${location.city_slug}`;

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
        "item": canonicalUrl
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Corporate Hub - ${location.city_name}`,
    "url": canonicalUrl,
    "logo": "https://www.thecorporatehub.in/logo.png",
    "description": `Corporate registration, legal compliance, and tax advisory services in ${location.city_name}, ${location.state_name}.`,
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

  return (
    <div className="seo-page-container">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Breadcrumbs cityName={location.city_name} citySlug={location.city_slug} />

      <header className="seo-hero-section">
        <div className="seo-hero-inner">
          <div className="seo-hero-content">
            <div className="seo-location-badge">
              <FiMapPin /> {location.city_name}, {location.state_name}
            </div>
            <h1 className="seo-hero-title">
              Legal, Tax & Corporate Registration Services in {location.city_name}
            </h1>
            <p className="seo-hero-intro">
              Setup and grow your business in {location.city_name}. We handle complete ROC company incorporation, trademark protection, GST compliance, and annual legal filings with dedicated local expertise.
            </p>
            <div className="seo-hero-stats-grid">
              <div className="seo-hero-stat-card">
                <div className="seo-hero-stat-value">100% Online</div>
                <div className="seo-hero-stat-label">Paperless Process</div>
              </div>
              <div className="seo-hero-stat-card">
                <div className="seo-hero-stat-value">Fast Track</div>
                <div className="seo-hero-stat-label">5-7 Days Delivery</div>
              </div>
              <div className="seo-hero-stat-card">
                <div className="seo-hero-stat-value">Expert CA/CS</div>
                <div className="seo-hero-stat-label">Dedicated Advisory</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Services in City */}
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Available Services</span>
            <h2 className="seo-section-title">Corporate Services Offered in {location.city_name}</h2>
          </div>

          <div className="seo-links-grid">
            {services.map((srv) => (
              <Link
                key={srv.service_slug}
                href={`/locations/${location.city_slug}/${srv.service_slug}`}
                className="seo-link-pill"
              >
                <span><FiBriefcase style={{ verticalAlign: "middle", marginRight: "6px" }} /> {srv.service_name} in {location.city_name}</span>
                <FiArrowRight className="seo-link-pill-arrow" />
              </Link>
            ))}
          </div>
        </section>

        {/* Other Cities */}
        <section className="seo-section-wrapper" style={{ marginTop: "50px" }}>
          <div className="seo-section-header">
            <span className="seo-section-tag">Other Cities</span>
            <h2 className="seo-section-title">Explore Other Locations Across India</h2>
          </div>

          <div className="seo-links-grid">
            {allLocations.map((loc) => (
              <Link
                key={loc.city_slug}
                href={`/locations/${loc.city_slug}`}
                className="seo-link-pill"
              >
                <span><FiMapPin style={{ verticalAlign: "middle", marginRight: "6px" }} /> Services in {loc.city_name}</span>
                <FiArrowRight className="seo-link-pill-arrow" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
