import React from "react";
import Link from "next/link";
import { getAllLocations, getAllServices } from "@/lib/seo/getSeoLocationPage";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CorporateFooter from "@/components/CorporateFooter";
import { FiMapPin, FiArrowRight, FiBriefcase } from "react-icons/fi";
import "@/components/seo/SeoPages.css";

export const revalidate = 60; // Dynamic revalidation every 60s for live admin updates

export async function generateMetadata() {
  const canonicalUrl = "https://www.thecorporatehub.in/locations";
  const title = "Our Service Locations Across India | Corporate Hub";
  const description = "Explore legal, corporate registration, tax compliance, and intellectual property services across major cities in India.";

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

export default async function LocationsDirectoryPage() {
  const locations = await getAllLocations();
  const services = await getAllServices();

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
      }
    ]
  };

  // Group locations by state
  const locationsByState = locations.reduce((acc, loc) => {
    const state = loc.state_name || "India";
    if (!acc[state]) acc[state] = [];
    acc[state].push(loc);
    return acc;
  }, {});

  return (
    <div className="seo-page-container">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs />

      <header className="seo-hero-section">
        <div className="seo-hero-inner single-col">
          <div className="seo-hero-content" style={{ textAlign: "center", alignItems: "center", margin: "0 auto" }}>
            <div className="seo-location-badge">
              <FiMapPin /> Nationwide Presence
            </div>
            <h1 className="seo-hero-title">The Corporate Hub Service Locations Across India</h1>
            <p className="seo-hero-intro" style={{ textAlign: "center" }}>
              Providing fast, reliable, 100% online corporate registration, trademark, GST, and legal compliance services tailored to local city regulations and Registrar of Companies (ROC) requirements.
            </p>
          </div>
        </div>
      </header>

      {/* Cities by State */}
      <main className="seo-main-content">
        <section className="seo-card-section">
          <div className="seo-section-header">
            <span className="seo-section-tag">Directory by Region</span>
            <h2 className="seo-section-title">Select Your City</h2>
            <p className="seo-section-desc">
              Choose your commercial hub below to access dedicated local corporate advisory, incorporation, and ROC filing services.
            </p>
          </div>

          {Object.entries(locationsByState).map(([state, cityList]) => (
            <div key={state} style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "1.15rem", color: "#193563", borderBottom: "1.5px solid #e2e8f0", paddingBottom: "8px", marginBottom: "16px", fontWeight: 700 }}>
                {state}
              </h3>
              <div className="seo-links-grid">
                {cityList.map((loc) => (
                  <Link
                    key={loc.city_slug}
                    href={`/locations/${loc.city_slug}`}
                    className="seo-link-pill"
                  >
                    <span className="seo-link-pill-label">
                      <FiMapPin className="seo-link-pill-icon" /> Services in {loc.city_name}
                    </span>
                    <FiArrowRight className="seo-link-pill-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Popular Locations & Services Matrix */}
        <section className="seo-card-section">
          <div className="seo-section-header">
            <span className="seo-section-tag">Quick Service Links</span>
            <h2 className="seo-section-title">Popular City & Service Landing Pages</h2>
            <p className="seo-section-desc">
              Direct access to top requested company registration and intellectual property filings across major cities.
            </p>
          </div>
          <div className="seo-links-grid">
            {locations.slice(0, 6).flatMap((loc) =>
              services.map((srv) => (
                <Link
                  key={`${loc.city_slug}-${srv.service_slug}`}
                  href={`/locations/${loc.city_slug}/${srv.service_slug}`}
                  className="seo-link-pill"
                >
                  <span className="seo-link-pill-label">
                    <FiBriefcase className="seo-link-pill-icon" /> {srv.service_name} in {loc.city_name}
                  </span>
                  <FiArrowRight className="seo-link-pill-arrow" />
                </Link>
              ))
            )}
          </div>
        </section>
      </main>

      <CorporateFooter />
    </div>
  );
}
