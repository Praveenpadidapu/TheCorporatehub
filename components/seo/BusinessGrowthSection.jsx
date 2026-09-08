import React from "react";

export default function BusinessGrowthSection({ serviceName, cityName, businessGrowthText }) {
  if (!businessGrowthText) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Business Value & Outcomes</span>
        <h2 className="seo-section-title">How {serviceName} Helps Your Business Grow in {cityName}</h2>
      </div>

      <div className="seo-content-box" style={{ background: "#f8fafc", borderLeft: "4px solid #10b981" }}>
        <div style={{ whiteSpace: "pre-line", lineHeight: "1.7", color: "#334155" }}>
          {businessGrowthText}
        </div>
      </div>
    </section>
  );
}
