import React from "react";
import Link from "next/link";
import { getAllLocations, getAllServices } from "@/lib/seo/getSeoLocationPage";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CorporateFooter from "@/components/CorporateFooter";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
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
        <div className="seo-hero-inner">
          <div className="seo-hero-content">
            <div className="seo-location-badge">
              <FiMapPin /> Nationwide Presence
            </div>
            <h1 className="seo-hero-title">Corporate Hub Service Locations Across India</h1>
            <p className="seo-hero-intro">
              Providing fast, reliable, 100% online corporate registration, trademark, GST, and legal compliance services tailored to local city regulations and Registrar of Companies (ROC) requirements.
            </p>
          </div>
        </div>
      </header>

      {/* Cities by State */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px", textAlign: "center", color: "#1e293b" }}>
          Select Your City
        </h2>

        {Object.entries(locationsByState).map(([state, cityList]) => (
          <div key={state} style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#ff6000", borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "20px" }}>
              {state}
            </h3>
            <div className="seo-links-grid">
              {cityList.map((loc) => (
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
          </div>
        ))}

        {/* Popular Locations & Services Matrix */}
        <section className="seo-section-wrapper" style={{ marginTop: "50px" }}>
          <div className="seo-section-header">
            <span className="seo-section-tag">Quick Service Links</span>
            <h2 className="seo-section-title">Popular City & Service Landing Pages</h2>
          </div>
          <div className="seo-links-grid">
            {locations.slice(0, 6).flatMap((loc) =>
              services.map((srv) => (
                <Link
                  key={`${loc.city_slug}-${srv.service_slug}`}
                  href={`/locations/${loc.city_slug}/${srv.service_slug}`}
                  className="seo-link-pill"
                >
                  <span>{srv.service_name} in {loc.city_name}</span>
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
