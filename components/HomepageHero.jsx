"use client";

import React from "react";
import Link from "next/link";
import "./HomepageHero.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FiArrowRight, FiAward, FiCheckCircle, FiShield, FiClock } from "react-icons/fi";
import {
  BizRegAnimatedIcon,
  IpAnimatedIcon,
  TaxAnimatedIcon,
  ComplianceAnimatedIcon,
  GrowthAnimatedIcon,
  LicenseAnimatedIcon,
} from "@/components/ui/CategoryAnimatedIcons";

export default function HomepageHero() {
  const categories = [
    {
      name: "Business Registration",
      subtitle: "Pvt Ltd, LLP, OPC, Section 8",
      description: "Company incorporation, statutory structuring, partner deeds, and end-to-end setup across India.",
      slug: "business-registration",
      icon: <BizRegAnimatedIcon size={38} />,
      badge: "Inception",
    },
    {
      name: "Intellectual Property",
      subtitle: "Trademark, Copyright & Patent",
      description: "Brand defense, trademark application, objection hearings, and IP portfolio governance.",
      slug: "intellectual-property",
      icon: <IpAnimatedIcon size={38} />,
      badge: "Protection",
    },
    {
      name: "Accounting & Taxation",
      subtitle: "GST, Income Tax & Auditing",
      description: "Cloud bookkeeping, monthly GST filings, direct tax audit, and international tax management.",
      slug: "accounting-taxation",
      icon: <TaxAnimatedIcon size={38} />,
      badge: "Management",
    },
    {
      name: "Corporate Compliance",
      subtitle: "ROC, MCA Filings & Secretarial",
      description: "Annual statutory ROC returns, minutes drafting, director disclosures, and regulatory health audits.",
      slug: "corporate-compliance",
      icon: <ComplianceAnimatedIcon size={38} />,
      badge: "Governance",
    },
    {
      name: "Business Growth",
      subtitle: "Valuation, Due Diligence & IPO",
      description: "Registered valuations, investor due diligence, cap table advisory, and SME IPO readiness.",
      slug: "business-growth",
      icon: <GrowthAnimatedIcon size={38} />,
      badge: "Scale",
    },
    {
      name: "Licenses & Permits",
      subtitle: "FSSAI, IEC, ISO & MSME",
      description: "Obtain critical business licenses, export-import codes, ISO quality marks, and industry permits.",
      slug: "licenses-certifications",
      icon: <LicenseAnimatedIcon size={38} />,
      badge: "Authorization",
    },
  ];

  return (
    <section className="homepage-hero-section" aria-label="Corporate Hub Advisory Ecosystem">
      <div className="homepage-hero-backdrop-glow" aria-hidden="true" />

      <div className="corporate-container">
        {/* Main Executive Hero Header - Balanced & Proportional */}
        <div className="hero-header-wrap">
          <div className="hero-kicker-badge">
            <span className="kicker-pulse-dot" aria-hidden="true" />
            <span>INDIA&apos;S MULTIDISCIPLINARY CORPORATE PRACTICE</span>
          </div>

          <h1 className="hero-headline">
            Complete Business Consulting & Corporate Services
          </h1>

          <p className="hero-subheadline">
            <span className="gold-highlight">CA • CS • CMA Expertise</span> unified under one roof. We guide entrepreneurs and enterprises from incorporation through protection, taxation, governance, and capital growth.
          </p>

          {/* Action CTAs - Refined Sizes */}
          <div className="hero-action-buttons">
            <Link href="/contact" className="btn-hero-primary" aria-label="Consult Our Specialists">
              <span>Consult Specialists</span>
              <FiArrowRight className="hero-btn-icon" aria-hidden="true" />
            </Link>

            <Link href="/about" className="btn-hero-secondary" aria-label="Learn More About Us">
              <span>About Our Practice</span>
            </Link>

            <a
              href="https://wa.me/918866901544"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-whatsapp"
              aria-label="Direct WhatsApp Consultation"
            >
              <FaWhatsapp className="hero-whatsapp-icon" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Trust Indicators Bar - Compact */}
          <div className="hero-trust-bar">
            <div className="trust-pill">
              <FiAward className="trust-icon" aria-hidden="true" />
              <span>CA • CS • CMA Under One Roof</span>
            </div>
            <div className="trust-pill">
              <FiClock className="trust-icon" aria-hidden="true" />
              <span>10+ Years Experience</span>
            </div>
            <div className="trust-pill">
              <FiShield className="trust-icon" aria-hidden="true" />
              <span>10+ In-House Experts</span>
            </div>
            <div className="trust-pill">
              <FiCheckCircle className="trust-icon" aria-hidden="true" />
              <span>100% Lifecycle Support</span>
            </div>
          </div>
        </div>

        {/* 6 Core Practice Cards Grid - Compact & Balanced */}
        <div className="hero-services-block">
          <div className="services-block-header">
            <span className="block-eyebrow">OUR PRACTICE AREAS</span>
            <h2 className="block-title">Start • Protect • Manage • Comply • Grow</h2>
            <p className="block-desc">
              Select an advisory domain to explore comprehensive corporate, tax, and legal solutions.
            </p>
          </div>

          <div className="hero-services-grid">
            {categories.map((category) => (
              <Link
                href={`/services/${category.slug}`}
                key={category.slug}
                className="hero-service-card"
                aria-label={`Explore ${category.name} services`}
              >
                <div>
                  <div className="card-top-row">
                    <span className="service-category-badge">{category.badge}</span>
                    <div className="service-card-icon-wrap">{category.icon}</div>
                  </div>

                  <div className="card-content-wrap">
                    <h3 className="service-card-title">{category.name}</h3>
                    <span className="service-card-subtitle">{category.subtitle}</span>
                    <p className="service-card-desc">{category.description}</p>
                  </div>
                </div>

                <div className="card-footer-cta">
                  <span>Explore Practice</span>
                  <FiArrowRight className="card-arrow-icon" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
