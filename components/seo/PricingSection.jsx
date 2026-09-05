import React from "react";
import { FiClock, FiFileText } from "react-icons/fi";
import SeoContactModalTrigger from "./SeoContactModalTrigger";

export default function PricingSection({ timelineText, cityName, serviceName, citySlug, serviceSlug }) {
  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Timeline & Execution</span>
        <h2 className="seo-section-title">Expected Timeline for {serviceName} in {cityName}</h2>
      </div>

      <div className="seo-grid-2">
        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiClock />
          </div>
          <h4>Expected Turnaround Time</h4>
          <p>{timelineText || "Typically 5 to 7 Business Days upon verified document submission."}</p>
        </div>

        <div className="seo-info-card" style={{ borderTop: "4px solid #ff6000" }}>
          <div className="seo-card-icon" style={{ color: "#ff6000" }}>
            <FiFileText />
          </div>
          <h4>Transparent Customized Quotation</h4>
          <p style={{ marginBottom: "14px" }}>
            Get an all-inclusive transparent quote customized for your company type and govt fee schedule in {cityName}.
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
