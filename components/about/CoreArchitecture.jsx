"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiPlay,
  FiShield,
  FiFileText,
  FiCheckSquare,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";
import { coreArchitectureData } from "@/data/aboutPage";

const iconMap = {
  FiPlay: FiPlay,
  FiShield: FiShield,
  FiFileText: FiFileText,
  FiCheckSquare: FiCheckSquare,
  FiTrendingUp: FiTrendingUp,
};

export default function CoreArchitecture() {
  const data = coreArchitectureData;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="about-architecture-section" aria-labelledby="architecture-heading">
      <div className="corporate-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">{data.badge}</span>
          <h2 id="architecture-heading" className="section-header-title">
            {data.title}
          </h2>
          <p className="section-header-desc">{data.description}</p>
        </div>

        {/* Interactive Stepper Navigation Bar */}
        <div className="architecture-stepper-bar" role="tablist" aria-label="Core Architecture Steps">
          {data.pillars.map((pillar, idx) => (
            <button
              key={pillar.step}
              type="button"
              role="tab"
              aria-selected={activeStep === idx}
              aria-controls={`step-panel-${idx}`}
              className={`stepper-nav-item ${activeStep === idx ? "active" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className="stepper-step-num">{pillar.step}</span>
              <span className="stepper-step-title">{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* 5-Pillar Cards Layout */}
        <div className="architecture-pillars-grid">
          {data.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || FiPlay;
            const isSelected = activeStep === idx;

            return (
              <div
                key={pillar.step}
                id={`step-panel-${idx}`}
                className={`pillar-card ${isSelected ? "highlighted" : ""}`}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className="pillar-card-top">
                  <span className="pillar-num-pill">{pillar.step}</span>
                  <div className="pillar-icon-box">
                    <IconComponent className="pillar-icon" aria-hidden="true" />
                  </div>
                </div>

                <div className="pillar-card-body">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <span className="pillar-tagline">{pillar.tagline}</span>
                  <p className="pillar-description">{pillar.description}</p>
                </div>

                <div className="pillar-card-footer">
                  <Link href={pillar.href} className="pillar-service-link">
                    <span>Explore Practice</span>
                    <FiArrowRight className="link-arrow" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Banner Mantra */}
        <div className="architecture-mantra-bar">
          <span className="mantra-text">{data.footerMantra}</span>
        </div>
      </div>
    </section>
  );
}
