import React from "react";
import { FiCheck, FiX, FiLayers } from "react-icons/fi";
import SeoContactModalTrigger from "./SeoContactModalTrigger";

export default function ComparisonSection({ serviceName, cityName, comparisonText, citySlug, serviceSlug }) {
  if (!comparisonText) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Structure Comparison</span>
        <h2 className="seo-section-title">Comparing {serviceName} with Alternatives in {cityName}</h2>
      </div>

      <div className="seo-content-box" style={{ borderLeft: "4px solid #3b82f6" }}>
        <div style={{ whiteSpace: "pre-line", lineHeight: "1.7", color: "#334155" }}>
          {comparisonText}
        </div>

        <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
          <p style={{ fontWeight: 600, color: "#1e293b", marginBottom: "12px" }}>
            Unsure which corporate structure best fits your business goals in {cityName}?
          </p>
          <SeoContactModalTrigger
            cityName={cityName}
            serviceName={serviceName}
            citySlug={citySlug}
            serviceSlug={serviceSlug}
          />
        </div>
      </div>
    </section>
  );
}
