import React from "react";
import { FiMapPin, FiCheckCircle, FiShield, FiClock, FiSend } from "react-icons/fi";
import SeoContactModalTrigger from "./SeoContactModalTrigger";

export default function SeoHero({ h1, intro, cityName, stateName, serviceName, citySlug, serviceSlug }) {
  return (
    <header className="seo-hero-section">
      <div className="seo-hero-inner">
        <div className="seo-hero-content">
          <div className="seo-location-badge">
            <FiMapPin /> {cityName}, {stateName}
          </div>

          <h1 className="seo-hero-title">{h1}</h1>

          <p className="seo-hero-intro">{intro}</p>

          <div className="seo-hero-stats-grid">
            <div className="seo-hero-stat-card">
              <div className="seo-hero-stat-value">100% Online</div>
              <div className="seo-hero-stat-label">Paperless Filing</div>
            </div>
            <div className="seo-hero-stat-card">
              <div className="seo-hero-stat-value">5-7 Days</div>
              <div className="seo-hero-stat-label">Fast Execution</div>
            </div>
            <div className="seo-hero-stat-card">
              <div className="seo-hero-stat-value">Top Rated</div>
              <div className="seo-hero-stat-label">Legal Experts</div>
            </div>
          </div>
        </div>

        <div className="seo-quick-card">
          <h3>Get Consultation in {cityName}</h3>
          <p>Talk to our corporate registration & tax specialists for step-by-step guidance in {cityName}.</p>
          <SeoContactModalTrigger
            cityName={cityName}
            serviceName={serviceName}
            citySlug={citySlug}
            serviceSlug={serviceSlug}
          />
        </div>
      </div>
    </header>
  );
}
