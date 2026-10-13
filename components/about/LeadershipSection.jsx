"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FiCheck, FiArrowRight, FiClock } from "react-icons/fi";
import ProfileAvatar from "./ProfileAvatar";
import { founders } from "@/data/aboutPage";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="about-leadership-section" aria-labelledby="leadership-heading">
      <div className="corporate-container">
        {/* Section Header - Compact */}
        <div className="section-header-block">
          <span className="section-eyebrow">MULTIDISCIPLINARY LEADERSHIP</span>
          <h2 id="leadership-heading" className="section-header-title">
            Meet Our Leadership
          </h2>
          <p className="section-header-desc">
            Seasoned practice leaders across Corporate Law, Taxation, Intellectual Property, and Cost Accounting delivering synchronized advisory under one roof.
          </p>
        </div>

        {/* Executive Split Profiles List - Compact & Balanced */}
        <div className="leadership-profiles-list">
          {founders.map((leader, index) => (
            <article
              key={leader.id || index}
              className={`founder-profile-card ${index % 2 === 1 ? "reverse" : ""}`}
              aria-label={`Profile of ${leader.name}`}
            >
              {/* Compact Visual Column (4:5 Aspect Ratio, max-width ~210px) */}
              <div className="founder-visual-col">
                <div className="founder-avatar-frame">
                  <ProfileAvatar
                    src={leader.photo}
                    alt={`${leader.name} - ${leader.role}`}
                    name={leader.name}
                    credentials={leader.credentials}
                    aspectRatio="4/5"
                    className="founder-avatar"
                  />
                  <div className="founder-visual-overlay-badge">
                    <span className="badge-credentials">{leader.credentials}</span>
                    <span className="badge-exp">{leader.experience}</span>
                  </div>
                </div>

                {/* Compact Social & Contact Strip */}
                <div className="founder-social-strip">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-social-btn"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <FaLinkedinIn />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="founder-social-btn email"
                      aria-label={`Email ${leader.name}`}
                    >
                      <FaEnvelope />
                      <span>Email</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/918866901544?text=Hello%20${encodeURIComponent(leader.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-social-btn whatsapp"
                    aria-label={`WhatsApp consultation with ${leader.name}`}
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Compact Details Column */}
              <div className="founder-details-col">
                <div className="founder-title-block">
                  <div className="founder-meta-row">
                    <span className="founder-credentials-tag">{leader.credentials}</span>
                    <span className="founder-exp-pill">
                      <FiClock className="pill-icon" aria-hidden="true" />
                      <span>{leader.experience}</span>
                    </span>
                  </div>

                  <h3 className="founder-full-name">{leader.name}</h3>
                  <div className="founder-role-title">{leader.role}</div>
                </div>

                <p className="founder-bio-text">{leader.bio}</p>

                {/* Core Expertise Tags Grid - Compact */}
                {leader.expertise && leader.expertise.length > 0 && (
                  <div className="founder-expertise-block">
                    <span className="expertise-block-label">CORE ADVISORY EXPERTISE</span>
                    <ul className="founder-expertise-grid">
                      {leader.expertise.map((item, idx) => (
                        <li key={idx} className="expertise-item">
                          <FiCheck className="expertise-check-icon" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="founder-action-row">
                  <Link href="/contact" className="btn-corporate-primary btn-compact">
                    <span>Consult {leader.name.split(" ")[1] || "Specialist"}</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
