import React from "react";
import { FiMapPin } from "react-icons/fi";

export default function LocalInformation({ cityName, localInformation }) {
  if (!localInformation) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">{cityName} Local Guide</span>
        <h2 className="seo-section-title">Local Legal & Regulatory Information in {cityName}</h2>
      </div>

      <div className="seo-content-box" style={{ borderLeft: "4px solid #ff6000" }}>
        <p>{localInformation}</p>
      </div>
    </section>
  );
}
