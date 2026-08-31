import React from "react";

export default function RegistrationProcess({ serviceName, cityName, processText }) {
  if (!processText) return null;

  // Split steps by line or numbers
  const steps = processText
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Step-by-Step Execution</span>
        <h2 className="seo-section-title">{serviceName} Process in {cityName}</h2>
      </div>

      <div className="seo-process-list">
        {steps.map((step, idx) => {
          // Remove leading numbers if present
          const cleanText = step.replace(/^\d+\.\s*/, "");
          return (
            <div key={idx} className="seo-process-item">
              <div className="seo-process-step-num">{idx + 1}</div>
              <div className="seo-process-step-text">{cleanText}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
