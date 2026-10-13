"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { lifecycleData } from "@/data/aboutPage";

export default function BusinessLifecycle() {
  const data = lifecycleData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStages =
    selectedCategory === "All"
      ? data.stages
      : data.stages.filter((s) => s.category === selectedCategory);

  return (
    <section className="about-lifecycle-section" aria-labelledby="lifecycle-heading">
      <div className="corporate-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">{data.badge}</span>
          <h2 id="lifecycle-heading" className="section-header-title">
            {data.heading}
          </h2>
          <p className="section-header-desc">{data.description}</p>
        </div>

        {/* Dedicated Partner Callout Banner */}
        <div className="lifecycle-partner-callout">
          <div className="callout-content">
            <span className="callout-lead-badge">BEYOND INCORPORATION</span>
            <p className="callout-statement">{data.partnerCallout}</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="lifecycle-filter-tabs" role="tablist" aria-label="Lifecycle Stage Categories">
          {data.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
              {selectedCategory === cat && (
                <span className="tab-count-badge">({filteredStages.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* 9 Lifecycle Stages Responsive Grid */}
        <div className="lifecycle-stages-grid" role="region" aria-live="polite">
          {filteredStages.map((stage) => (
            <div key={stage.num} className="lifecycle-stage-card">
              <div className="stage-card-header">
                <span className="stage-num-badge">{stage.num}</span>
                <span className="stage-cat-pill">{stage.category}</span>
              </div>

              <div className="stage-card-body">
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
              </div>

              <div className="stage-card-footer">
                <Link href={stage.link} className="stage-details-link">
                  <span>View Services</span>
                  <FiArrowRight className="stage-link-icon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
