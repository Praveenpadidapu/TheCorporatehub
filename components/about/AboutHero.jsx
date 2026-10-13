"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FiArrowRight,
  FiAward,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import { aboutHeroData } from "@/data/aboutData";

// Icon mapping helper
const iconMap = {
  FiAward: FiAward,
  FiClock: FiClock,
  FiUsers: FiUsers,
  FiCheckCircle: FiCheckCircle,
  FiShield: FiShield,
};

export default function AboutHero() {
  const [imageError, setImageError] = useState(false);
  const data = aboutHeroData;

  return (
    <section className="about-hero-section" aria-labelledby="about-hero-title">
      <div className="about-container">
        {/* Top Header Badge & Main Title */}
        <div className="about-hero-header">
          <div className="about-kicker-pill">
            <span className="kicker-dot" aria-hidden="true" />
            <span>{data.kicker}</span>
          </div>

          <h1 id="about-hero-title" className="about-hero-title">
            {data.title}
          </h1>

          <p className="about-hero-subtitle">
            <span className="subtitle-highlight">{data.subtitle}</span>
          </p>

          <p className="about-hero-description">{data.description}</p>

          {/* Action Buttons */}
          <div className="about-hero-actions">
            <Link
              href={data.ctaPrimary.href}
              className="btn-corporate-primary"
              aria-label={data.ctaPrimary.label}
            >
              <span>{data.ctaPrimary.label}</span>
              <FiArrowRight className="btn-icon" aria-hidden="true" />
            </Link>

            <a
              href={data.ctaSecondary.href}
              className="btn-corporate-secondary"
              aria-label={data.ctaSecondary.label}
            >
              <span>{data.ctaSecondary.label}</span>
            </a>

            <a
              href={data.ctaWhatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-corporate-whatsapp"
              aria-label="Chat on WhatsApp with Corporate Hub Team"
            >
              <FaWhatsapp className="btn-whatsapp-icon" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Display with Floating Badges */}
        <div className="about-hero-visual-wrapper">
          <div className="about-hero-image-frame">
            {!imageError && data.heroImage ? (
              <Image
                src={data.heroImage}
                alt={data.heroImageAlt || "The Corporate Hub Advisory Team"}
                width={1200}
                height={580}
                priority
                className="about-hero-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="about-hero-image-fallback">
                <div className="fallback-glow" aria-hidden="true" />
                <div className="fallback-content">
                  <FiAward className="fallback-icon" aria-hidden="true" />
                  <span className="fallback-title">The Corporate Hub</span>
                  <span className="fallback-desc">
                    CA • CS • CMA Multidisciplinary Advisory Excellence
                  </span>
                </div>
              </div>
            )}

            <div className="hero-visual-overlay" aria-hidden="true" />

            {/* Floating Trust Badge on Hero Visual */}
            <div className="hero-floating-badge top-right">
              <span className="floating-badge-dot" aria-hidden="true" />
              <div>
                <strong>Single-Window Solution</strong>
                <span>CA • CS • CMA Collaboration</span>
              </div>
            </div>

            <div className="hero-floating-badge bottom-left">
              <FiShield className="floating-badge-icon" aria-hidden="true" />
              <div>
                <strong>Pan-India Practice</strong>
                <span>Over 10+ Years of Corporate Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators / Stats Grid */}
        <div
          className="about-hero-stats-grid"
          role="region"
          aria-label="Firm Statistics and Key Milestones"
        >
          {data.stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <span className="stat-number">{stat.value}</span>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-subtext">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
