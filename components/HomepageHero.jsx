"use client";

import React from "react";
import Link from "next/link";
import "./HomepageHero.css";
import {
  BizRegAnimatedIcon,
  IpAnimatedIcon,
  TaxAnimatedIcon,
  ComplianceAnimatedIcon,
  GrowthAnimatedIcon,
  LicenseAnimatedIcon
} from "@/components/ui/CategoryAnimatedIcons";

export default function HomepageHero() {
  const categories = [
    {
      name: "Business Registration",
      slug: "business-registration",
      icon: <BizRegAnimatedIcon size={52} />
    },
    {
      name: "Intellectual Property",
      slug: "intellectual-property",
      icon: <IpAnimatedIcon size={52} />
    },
    {
      name: "Accounting & Taxation",
      slug: "accounting-taxation",
      icon: <TaxAnimatedIcon size={52} />
    },
    {
      name: "Corporate Compliance",
      slug: "corporate-compliance",
      icon: <ComplianceAnimatedIcon size={52} />
    },
    {
      name: "Business Growth",
      slug: "business-growth",
      icon: <GrowthAnimatedIcon size={52} />
    },
    {
      name: "Licenses & Certifications",
      slug: "licenses-certifications",
      icon: <LicenseAnimatedIcon size={52} />
    }
  ];

  return (
    <div className="homepage-hero">
      <h1>India's Complete Business Consulting & Corporate Services Ecosystem</h1>

      <ul className="hero-subtitle-list">
        <li>Business Registration</li>
        <li>Compliance</li>
        <li>Taxation</li>
        <li>Licensing</li>
        <li>Funding</li>
        <li>Business Growth</li>
      </ul>

      <div className="services">
        {categories.map((category) => (
          <Link href={`/services/${category.slug}`} key={category.name} className="category-link">
            <div className="category">
              <div className="icon">{category.icon}</div>
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
