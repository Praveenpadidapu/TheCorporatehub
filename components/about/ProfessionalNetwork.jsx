"use client";

import React from "react";
import {
  FiBriefcase,
  FiFileText,
  FiTrendingUp,
  FiDollarSign,
  FiAward,
  FiShield,
  FiLayers,
  FiUsers,
} from "react-icons/fi";
import { professionalNetworkData } from "@/data/aboutPage";

const iconMap = {
  FiBriefcase: FiBriefcase,
  FiFileText: FiFileText,
  FiTrendingUp: FiTrendingUp,
  FiDollarSign: FiDollarSign,
  FiAward: FiAward,
  FiShield: FiShield,
  FiLayers: FiLayers,
  FiUsers: FiUsers,
};

export default function ProfessionalNetwork() {
  const data = professionalNetworkData;

  return (
    <section className="about-network-section" aria-labelledby="network-heading">
      <div className="corporate-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">{data.badge}</span>
          <h2 id="network-heading" className="section-header-title">
            {data.heading}
          </h2>
          <p className="section-header-desc">{data.networkIntro}</p>
        </div>

        {/* 8 Partner Cards Grid */}
        <div className="network-partners-grid">
          {data.partners.map((partner, idx) => {
            const IconComponent = iconMap[partner.icon] || FiBriefcase;
            return (
              <div key={idx} className="partner-card">
                <div className="partner-card-icon-wrap">
                  <IconComponent className="partner-card-icon" aria-hidden="true" />
                </div>
                <div className="partner-card-content">
                  <h3 className="partner-title">{partner.name}</h3>
                  <p className="partner-desc">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Bottom Callout */}
        <div className="network-banner-box">
          <div className="network-banner-text">
            <span className="network-banner-tag">CONNECTED ECOSYSTEM</span>
            <p className="network-banner-statement">{data.bannerMantra}</p>
            <p className="network-banner-sub">{data.footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
