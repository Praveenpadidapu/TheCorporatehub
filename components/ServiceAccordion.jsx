"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import "./ServiceAccordion.css";
import { FiChevronDown, FiChevronUp, FiArrowLeft, FiCheckCircle, FiClock, FiFileText } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BsGraphDownArrow } from "react-icons/bs";
import { RiCertificate2Line } from "react-icons/ri";

const iconMap = {
  IoDocumentOutline: <IoDocumentOutline />,
  LuBrain: <LuBrain />,
  MdAttachMoney: <MdAttachMoney />,
  GrGroup: <GrGroup />,
  BsGraphDownArrow: <BsGraphDownArrow />,
  RiCertificate2Line: <RiCertificate2Line />
};

export default function ServiceAccordion({ currentSlug }) {
  // Find current service or fallback to first
  const service = servicesData.find((s) => s.slug === currentSlug) || servicesData[0];

  // State for main accordion: which sections are open (default open Section 1 & Section 3 for showcase)
  const [openSections, setOpenSections] = useState({
    about: false,
    servicesWeProvide: false,
    onClickServices: true, // Default open as per image focus
    termsAndConditions: false
  });

  // State for inner sub-accordion inside "Services here on click accordion"
  const [openSubServiceId, setOpenSubServiceId] = useState(
    service.accordionData.onClickServices.subServices[0]?.id || null
  );

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleSubService = (id) => {
    setOpenSubServiceId((prevId) => (prevId === id ? null : id));
  };

  const { about, servicesWeProvide, onClickServices, termsAndConditions } = service.accordionData;

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
            {servicesData.map((item) => (
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
        <div className="accordion-main-wrapper">
          <h1 className="service-main-title">{service.title}</h1>

          <div className="accordion-card">
            {/* Section 1: About Business Registration */}
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

            {/* Section 2: Services We provide */}
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
                    {servicesWeProvide.items.map((srv, index) => (
                      <div key={index} className="service-provide-card">
                        <div className="card-check">
                          <FiCheckCircle />
                        </div>
                        <div className="card-info">
                          <h4>{srv.name}</h4>
                          <p>{srv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 3: Services here on click accordion */}
            <div className={`accordion-item ${openSections.onClickServices ? "is-expanded" : ""}`}>
              <button
                className="accordion-header"
                onClick={() => toggleSection("onClickServices")}
                aria-expanded={openSections.onClickServices}
              >
                <span className="accordion-title-text">{onClickServices.title}</span>
                <span className="accordion-icon">
                  {openSections.onClickServices ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {openSections.onClickServices && (
                <div className="accordion-body sub-accordion-container">
                  <p className="sub-accordion-instruction">
                    Click on any service below to view process steps, turnaround time & required documents:
                  </p>
                  <div className="sub-accordion-list">
                    {onClickServices.subServices.map((subSrv) => {
                      const isSubOpen = openSubServiceId === subSrv.id;
                      return (
                        <div key={subSrv.id} className={`sub-accordion-item ${isSubOpen ? "active" : ""}`}>
                          <div
                            className="sub-accordion-header"
                            onClick={() => toggleSubService(subSrv.id)}
                          >
                            <div className="sub-header-left">
                              <span className="sub-title">{subSrv.name}</span>
                              <span className="sub-tagline">{subSrv.tagline}</span>
                            </div>
                            <span className="sub-toggle-btn">
                              {isSubOpen ? "Hide Details -" : "Click to Expand +"}
                            </span>
                          </div>

                          {isSubOpen && (
                            <div className="sub-accordion-content">
                              <div className="sub-content-grid">
                                {/* Process Steps */}
                                <div className="content-box process-box">
                                  <h5><FiCheckCircle /> Registration Process</h5>
                                  <ul>
                                    {subSrv.process.map((step, idx) => (
                                      <li key={idx}>
                                        <span className="step-num">{idx + 1}</span>
                                        <span className="step-text">{step}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Details & Documents */}
                                <div className="content-box meta-box">
                                  <div className="time-badge">
                                    <FiClock /> <strong>Turnaround Time:</strong> {subSrv.turnaround}
                                  </div>

                                  <div className="docs-needed">
                                    <h5><FiFileText /> Documents Required:</h5>
                                    <ul>
                                      {subSrv.documentsNeeded.map((doc, dIdx) => (
                                        <li key={dIdx}>{doc}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <button className="apply-btn">
                                    Proceed with {subSrv.name}
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Section 4: Term and Conditions */}
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
      </div>
    </div>
  );
}
