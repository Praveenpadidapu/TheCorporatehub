"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { Skeleton, ServiceCardSkeleton } from "@/components/ui/Skeleton";
import "./ServiceAccordion.css";
import { FiChevronDown, FiChevronUp, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiCertificate2Line } from "react-icons/ri";

const iconMap = {
  IoDocumentOutline: <IoDocumentOutline />,
  LuBrain: <LuBrain />,
  MdAttachMoney: <MdAttachMoney />,
  GrGroup: <GrGroup />,
  BsGraphUpArrow: <BsGraphUpArrow />,
  RiCertificate2Line: <RiCertificate2Line />
};

export default function ServiceAccordion({ currentSlug }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [currentSlug]);

  const allServices = servicesData;
  const service = allServices.find((s) => s.slug === currentSlug) || allServices[0];
  const subServices = service.accordionData?.onClickServices?.subServices || [];

  // State for main accordion
  const [openSections, setOpenSections] = useState({
    about: false,
    servicesWeProvide: true,
    termsAndConditions: false
  });

  const [prevSlug, setPrevSlug] = useState(currentSlug);

  // Adjust state when currentSlug changes
  if (prevSlug !== currentSlug) {
    setPrevSlug(currentSlug);
    setIsLoading(true);
    setOpenSections({
      about: false,
      servicesWeProvide: true,
      termsAndConditions: false
    });
  }

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      about: false,
      servicesWeProvide: false,
      termsAndConditions: false,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const accordionData = service?.accordionData || {};
  const about = accordionData.about || { title: "About", content: "" };
  const servicesWeProvide = accordionData.servicesWeProvide || { title: "Services We Provide", items: [] };
  const termsAndConditions = accordionData.termsAndConditions || { title: "Terms and Conditions", items: [] };

  return (
    <div className="service-accordion-page">
      <div className="service-accordion-layout">
        {/* Navigation Left Sidebar */}
        <aside className="accordion-sidebar-nav">
          <Link href="/" className="back-link">
            <FiArrowLeft /> Back to Homepage
          </Link>

          <div className="sidebar-header">
            <h3 className="sidebar-title">Our Services</h3>
          </div>

          {/* Service Selector Tabs */}
          <div className="service-tabs">
            {allServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className={`service-tab ${item.slug === service.slug ? "active" : ""}`}
              >
                <span className="tab-icon">{iconMap[item.iconName]}</span>
                <span className="tab-title">{item.title}</span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Container matching the Image Layout */}
        {isLoading ? (
          <div className="accordion-main-wrapper">
            <Skeleton width="55%" height="38px" borderRadius="6px" style={{ marginBottom: "24px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          </div>
        ) : (
          <div className="accordion-main-wrapper animate-fade-in-up">
            <h1 className="service-main-title">{service.title}</h1>

            <div className="accordion-card">
              {/* Section 1: About */}
              <div className={`accordion-item ${openSections.about ? "is-expanded" : ""}`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleSection("about")}
                  aria-expanded={openSections.about}
                >
                  <span className="accordion-title-text">{about.title}</span>
                  <span className="accordion-icon">
                    {openSections.about ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>
                {openSections.about && (
                  <div className="accordion-body">
                    <p className="about-text">{about.content}</p>
                  </div>
                )}
              </div>

              {/* Section 2: Services We Provide */}
              <div className={`accordion-item ${openSections.servicesWeProvide ? "is-expanded" : ""}`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleSection("servicesWeProvide")}
                  aria-expanded={openSections.servicesWeProvide}
                >
                  <span className="accordion-title-text">{servicesWeProvide.title}</span>
                  <span className="accordion-icon">
                    {openSections.servicesWeProvide ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>
                {openSections.servicesWeProvide && (
                  <div className="accordion-body">
                    <div className="services-list-grid">
                      {servicesWeProvide.items.map((srv, index) => {
                        const targetSubId = srv.id || (subServices[index] ? subServices[index].id : null) || srv.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        return (
                          <Link
                            key={index}
                            href={`/services/${service.slug}/${targetSubId}`}
                            className="service-provide-card"
                            title={`Click to view full details for ${srv.name}`}
                          >
                            <div className="card-check">
                              <FiCheckCircle />
                            </div>
                            <div className="card-info">
                              <h4>{srv.name}</h4>
                              <p>{srv.desc}</p>
                              <span className="card-click-hint">View details →</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Section 3: Terms and Conditions */}
              <div className={`accordion-item ${openSections.termsAndConditions ? "is-expanded" : ""}`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleSection("termsAndConditions")}
                  aria-expanded={openSections.termsAndConditions}
                >
                  <span className="accordion-title-text">{termsAndConditions.title}</span>
                  <span className="accordion-icon">
                    {openSections.termsAndConditions ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>
                {openSections.termsAndConditions && (
                  <div className="accordion-body">
                    <ul className="terms-list">
                      {termsAndConditions.items.map((term, tIdx) => (
                        <li key={tIdx}>
                          <span className="bullet">•</span>
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

