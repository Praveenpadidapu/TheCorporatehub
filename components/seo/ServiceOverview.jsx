import React from "react";

export default function ServiceOverview({ serviceName, cityName, whyChooseService }) {
  if (!whyChooseService) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Service Overview</span>
        <h2 className="seo-section-title">Why Businesses in {cityName} Choose {serviceName}</h2>
      </div>

      <div className="seo-content-box">
        <p>{whyChooseService}</p>
      </div>
    </section>
  );
}
