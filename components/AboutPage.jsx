"use client";

import React from "react";
import "./AboutPage.css";
import AboutHero from "@/components/about/AboutHero";
import FirmOverview from "@/components/about/FirmOverview";
import CoreArchitecture from "@/components/about/CoreArchitecture";
import BusinessLifecycle from "@/components/about/BusinessLifecycle";
import MissionVision from "@/components/about/MissionVision";
import LeadershipSection from "@/components/about/LeadershipSection";
import TeamSection from "@/components/about/TeamSection";
import ProfessionalNetwork from "@/components/about/ProfessionalNetwork";
import AboutCta from "@/components/about/AboutCta";

/**
 * AboutPage
 * Redesigned executive corporate consulting page for The Corporate Hub.
 * Architected with 9 modular, reusable, accessible, data-driven sections.
 */
export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero / About Intro with trust indicators & visual frame */}
      <AboutHero />

      {/* 2. Firm Overview & Why Choose Us benefit cards */}
      <FirmOverview />

      {/* 3. Core Service Architecture: Start, Protect, Manage, Comply, Grow */}
      <CoreArchitecture />

      {/* 4. Business Lifecycle with Category Filter Tabs (9 Stages) */}
      <BusinessLifecycle />

      {/* 5. Mission, Vision, and Strategic Direction */}
      <MissionVision />

      {/* 6. Executive Leadership Profiles (Founders & Co-Founders) */}
      <LeadershipSection />

      {/* 7. Multidisciplinary In-House Specialist Team */}
      <TeamSection />

      {/* 8. Professional Network & Collaborative Ecosystem */}
      <ProfessionalNetwork />

      {/* 9. Final Call-to-Action */}
      <AboutCta />
    </div>
  );
}
