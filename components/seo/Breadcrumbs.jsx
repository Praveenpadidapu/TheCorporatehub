import React from "react";
import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

export default function Breadcrumbs({ cityName, serviceName, citySlug }) {
  return (
    <div className="seo-breadcrumbs-wrapper">
      <div className="seo-breadcrumbs-container">
        <Link href="/" title="Home">
          <FiHome style={{ verticalAlign: "middle" }} /> Home
        </Link>

        <span className="seo-breadcrumb-separator">
          <FiChevronRight />
        </span>

        <span className="seo-breadcrumb-text">Locations</span>

        <span className="seo-breadcrumb-separator">
          <FiChevronRight />
        </span>

        <span className="seo-breadcrumb-text">{cityName}</span>

        <span className="seo-breadcrumb-separator">
          <FiChevronRight />
        </span>

        <span className="seo-breadcrumb-current">{serviceName}</span>
      </div>
    </div>
  );
}
