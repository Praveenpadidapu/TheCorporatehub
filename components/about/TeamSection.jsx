"use client";

import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import ProfileAvatar from "./ProfileAvatar";
import { teamMembers } from "@/data/aboutPage";

export default function TeamSection() {
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="about-team-section" aria-labelledby="team-heading">
      <div className="corporate-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">IN-HOUSE SPECIALISTS</span>
          <h2 id="team-heading" className="section-header-title">
            Our Specialist Team
          </h2>
          <p className="section-header-desc">
            Behind our founding leadership is a multidisciplinary team of dedicated CA, CS, legal, audit, valuation, and compliance associates driving daily excellence for clients nationwide.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="team-cards-grid">
          {teamMembers.map((member, index) => (
            <div key={member.id || index} className="team-member-card">
              <div className="team-avatar-wrapper">
                <ProfileAvatar
                  src={member.photo}
                  alt={member.name}
                  name={member.name}
                  credentials={member.credentials}
                  aspectRatio="1/1"
                  className="team-avatar"
                />

                {member.credentials && (
                  <span className="team-credentials-badge">{member.credentials}</span>
                )}
              </div>

              <div className="team-card-content">
                <div className="team-header-meta">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  {member.experience && (
                    <span className="team-exp-tag">{member.experience}</span>
                  )}
                </div>

                {member.bio && <p className="team-bio">{member.bio}</p>}

                {/* Expertise Badges */}
                {member.expertise && member.expertise.length > 0 && (
                  <div className="team-expertise-chips">
                    {member.expertise.map((tag, idx) => (
                      <span key={idx} className="team-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional Social / Contact Links */}
                <div className="team-contact-footer">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-icon"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="team-social-icon email"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
