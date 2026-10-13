"use client";

import React from "react";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiTrendingUp, FiUsers, FiArrowRight } from "react-icons/fi";
import { overviewData } from "@/data/aboutPage";

const iconMap = {
  FiCheckCircle: FiCheckCircle,
  FiShield: FiShield,
  FiTrendingUp: FiTrendingUp,
  FiUsers: FiUsers,
};

export default function FirmOverview() {
  const data = overviewData;

  return (
    <section className="about-overview-section" aria-labelledby="firm-overview-heading">
      <div className="corporate-container">
        {/* Main Overview Split Layout */}
        <div className="overview-split-layout">
          {/* Left Column: Firm Story & Multi-Disciplinary Mandate */}
          <div className="overview-text-column">
            <span className="section-eyebrow">{data.badge}</span>
            <h2 id="firm-overview-heading" className="overview-heading">
              {data.heading}
            </h2>

            <p className="overview-lead-paragraph">{data.lead}</p>

            <div className="overview-body-paragraphs">
              {data.paragraphs.map((para, idx) => (
                <p key={idx} className="overview-body-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="overview-action-row">
              <Link href="/contact" className="btn-corporate-primary">
                <span>Consult Our Specialists</span>
                <FiArrowRight />
              </Link>
              <a href="#leadership" className="btn-corporate-secondary">
                <span>Meet Leadership</span>
              </a>
            </div>
          </div>

          {/* Right Column: Why Choose Us (4 Pillar Cards) */}
          <div className="overview-why-column">
            <div className="why-choose-header">
              <span className="why-badge">WHY ENTERPRISES CHOOSE US</span>
              <h3 className="why-title">Unified Governance & Zero Fragmentation</h3>
            </div>

            <div className="why-cards-grid">
              {data.whyChooseUs.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || FiCheckCircle;
                return (
                  <div key={idx} className="why-card">
                    <div className="why-card-icon-wrap">
                      <IconComponent className="why-icon" aria-hidden="true" />
                    </div>
                    <div className="why-card-content">
                      <h4 className="why-card-title">{item.title}</h4>
                      <p className="why-card-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
