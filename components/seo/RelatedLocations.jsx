import React from "react";
import Link from "next/link";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function RelatedLocations({ relatedLocations, serviceName, serviceSlug }) {
  if (!relatedLocations || relatedLocations.length === 0) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Other Cities</span>
        <h2 className="seo-section-title">{serviceName} in Other Major Cities</h2>
      </div>

      <div className="seo-links-grid">
        {relatedLocations.map((loc) => (
          <Link
            key={loc.city_slug}
            href={`/locations/${loc.city_slug}/${serviceSlug}`}
            className="seo-link-pill"
          >
            <span><FiMapPin style={{ verticalAlign: "middle", marginRight: "4px" }} /> {serviceName} in {loc.city_name}</span>
            <FiArrowRight className="seo-link-pill-arrow" />
          </Link>
        ))}
      </div>
    </section>
  );
}
