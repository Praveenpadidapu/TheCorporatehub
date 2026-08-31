import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedServices({ relatedServices, cityName, citySlug, parentCategorySlug }) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Explore More Services</span>
        <h2 className="seo-section-title">Other Legal & Tax Services in {cityName}</h2>
      </div>

      <div className="seo-links-grid">
        {relatedServices.map((s) => (
          <Link
            key={s.service_slug}
            href={`/locations/${citySlug}/${s.service_slug}`}
            className="seo-link-pill"
          >
            <span>{s.service_name} in {cityName}</span>
            <FiArrowRight className="seo-link-pill-arrow" />
          </Link>
        ))}

        {parentCategorySlug && (
          <Link
            href={`/services/${parentCategorySlug}`}
            className="seo-link-pill"
            style={{ borderColor: "#ff6000", color: "#ff6000" }}
          >
            <span>View All National {cityName} Services</span>
            <FiArrowRight className="seo-link-pill-arrow" />
          </Link>
        )}
      </div>
    </section>
  );
}
