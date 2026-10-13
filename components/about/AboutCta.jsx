"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { ctaData } from "@/data/aboutPage";

export default function AboutCta() {
  const data = ctaData;

  return (
    <section className="about-cta-section" aria-labelledby="cta-heading">
      <div className="corporate-container">
        <div className="about-cta-card">
          <div className="about-cta-card-glow" aria-hidden="true" />

          <div className="about-cta-content">
            <span className="cta-badge">{data.badge}</span>
            <h2 id="cta-heading" className="cta-title">
              {data.title}
            </h2>
            <p className="cta-desc">{data.description}</p>

            <div className="cta-buttons-row">
              <Link href="/contact" className="btn-cta-gold">
                <span>Speak With Our Team</span>
                <FiArrowRight />
              </Link>

              <Link href="/services/business-registration" className="btn-cta-outline">
                <span>Explore Services</span>
              </Link>

              <a
                href="https://wa.me/918866901544"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
                aria-label="Direct WhatsApp Consultation"
              >
                <FaWhatsapp size={19} />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
