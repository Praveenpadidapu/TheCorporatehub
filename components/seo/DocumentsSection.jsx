import React from "react";
import { FiFileText } from "react-icons/fi";

export default function DocumentsSection({ serviceName, cityName, documentsText }) {
  if (!documentsText) return null;

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Checklist</span>
        <h2 className="seo-section-title">Documents Required for {serviceName} in {cityName}</h2>
      </div>

      <div className="seo-info-card">
        <div className="seo-card-icon">
          <FiFileText />
        </div>
        <h4>Document Checklist</h4>
        <p>{documentsText}</p>
      </div>
    </section>
  );
}
