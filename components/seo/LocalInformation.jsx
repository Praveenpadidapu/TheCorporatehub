import React from "react";
import { FiMapPin, FiShield } from "react-icons/fi";

export default function LocalInformation({ cityName, serviceName, localInformation, taxCompliance }) {
  if (!localInformation && !taxCompliance) return null;

  return (
    <div className="seo-local-tax-wrapper">
      {/* 10. Tax & Compliance */}
      {taxCompliance && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Regulatory Obligations</span>
            <h2 className="seo-section-title">Tax & Compliance Requirements for {serviceName}</h2>
          </div>
          <div className="seo-content-box" style={{ borderLeft: "4px solid #8b5cf6" }}>
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{taxCompliance}</p>
          </div>
        </section>
      )}

      {/* 13. Local Information */}
      {localInformation && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">{cityName} Local Guide</span>
            <h2 className="seo-section-title">Local Legal & ROC Regulatory Information in {cityName}</h2>
          </div>
          <div className="seo-content-box" style={{ borderLeft: "4px solid #ff6000" }}>
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{localInformation}</p>
          </div>
        </section>
      )}
    </div>
  );
}
