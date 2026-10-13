"use client";

import React from "react";
import { FiCompass, FiTrendingUp, FiShield, FiGlobe, FiAward } from "react-icons/fi";
import { missionVisionData, strategicDirectionData } from "@/data/aboutPage";

const iconMap = {
  FiCompass: FiCompass,
  FiTrendingUp: FiTrendingUp,
  FiShield: FiShield,
  FiGlobe: FiGlobe,
  FiAward: FiAward,
};

export default function MissionVision() {
  const mv = missionVisionData;
  const sd = strategicDirectionData;

  const MissionIcon = iconMap[mv.mission.icon] || FiCompass;
  const VisionIcon = iconMap[mv.vision.icon] || FiTrendingUp;

  return (
    <section className="about-purpose-section" aria-labelledby="purpose-heading">
      <div className="corporate-container">
        {/* Mission & Vision Side-by-Side Cards */}
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <div className="purpose-card mission-card">
            <div className="purpose-card-header">
              <div className="purpose-icon-box mission">
                <MissionIcon className="purpose-icon" aria-hidden="true" />
              </div>
              <div className="purpose-header-text">
                <span className="purpose-label">{mv.mission.label}</span>
                <h3 className="purpose-title">{mv.mission.title}</h3>
              </div>
            </div>

            <p className="purpose-lead">{mv.mission.lead}</p>
            <p className="purpose-body">{mv.mission.body}</p>

            <div className="purpose-highlight-box mission-highlight">
              <span className="highlight-tag">OUR CORE PURPOSE</span>
              <p className="highlight-quote">{mv.mission.highlight}</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="purpose-card vision-card">
            <div className="purpose-card-header">
              <div className="purpose-icon-box vision">
                <VisionIcon className="purpose-icon" aria-hidden="true" />
              </div>
              <div className="purpose-header-text">
                <span className="purpose-label">{mv.vision.label}</span>
                <h3 className="purpose-title">{mv.vision.title}</h3>
              </div>
            </div>

            <p className="purpose-lead">{mv.vision.lead}</p>
            <p className="purpose-body">{mv.vision.body}</p>

            <div className="purpose-highlight-box vision-highlight">
              <span className="highlight-tag">OUR ENDURING VISION</span>
              <p className="highlight-quote">{mv.vision.highlight}</p>
            </div>
          </div>
        </div>

        {/* Strategic Direction Block */}
        <div className="strategic-direction-block">
          <div className="section-header-block">
            <span className="section-eyebrow">{sd.badge}</span>
            <h2 id="purpose-heading" className="section-header-title">
              {sd.title}
            </h2>
            <p className="section-header-desc">{sd.description}</p>
          </div>

          <div className="strategic-pillars-grid">
            {sd.pillars.map((pillar, idx) => {
              const PillarIcon = iconMap[pillar.icon] || FiShield;
              return (
                <div key={idx} className="strategic-pillar-card">
                  <div className="strategic-pillar-header">
                    <div className="strategic-icon-wrap">
                      <PillarIcon className="strategic-icon" aria-hidden="true" />
                    </div>
                    <h4 className="strategic-pillar-title">{pillar.title}</h4>
                  </div>

                  <p className="strategic-pillar-desc">{pillar.description}</p>

                  <div className="strategic-mantra-box">
                    <span className="mantra-label">PHILOSOPHY</span>
                    <p className="mantra-text">{pillar.mantra}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
