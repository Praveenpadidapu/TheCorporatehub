"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import "./ServiceAccordion.css";
import { FiChevronDown, FiChevronUp, FiArrowLeft, FiCheckCircle, FiClock, FiFileText } from "react-icons/fi";
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
  const searchParams = useSearchParams();
  const subserviceParam = searchParams ? searchParams.get("subservice") : null;

  const allServices = servicesData;
  const service = allServices.find((s) => s.slug === currentSlug) || allServices[0];
  const subServices = service.accordionData?.onClickServices?.subServices || [];

  const targetSubId = subserviceParam && subServices.some(s => s.id === subserviceParam)
    ? subserviceParam
    : (subServices[0]?.id || null);

  // State for main accordion: open onClickServices if a subserviceParam is active
  const [openSections, setOpenSections] = useState(() => ({
    about: false,
    servicesWeProvide: !subserviceParam,
    onClickServices: Boolean(subserviceParam),
    termsAndConditions: false
  }));

  // State for inner sub-accordion inside "About Services"
  const [openSubServiceId, setOpenSubServiceId] = useState(targetSubId);

  const [prevParams, setPrevParams] = useState({ currentSlug, subserviceParam });

  // Adjust state during render when currentSlug or subserviceParam changes
  if (prevParams.currentSlug !== currentSlug || prevParams.subserviceParam !== subserviceParam) {
    setPrevParams({ currentSlug, subserviceParam });
    if (subserviceParam && subServices.some(s => s.id === subserviceParam)) {
      setOpenSections({
        about: false,
        servicesWeProvide: false,
        onClickServices: true,
        termsAndConditions: false
      });
      setOpenSubServiceId(subserviceParam);
    } else {
      setOpenSubServiceId(subServices[0]?.id || null);
    }
  }

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleSubService = (id) => {
    setOpenSubServiceId((prevId) => (prevId === id ? null : id));
  };

  const accordionData = service?.accordionData || {};
  const about = accordionData.about || { title: "About", content: "" };
  const servicesWeProvide = accordionData.servicesWeProvide || { title: "Services We Provide", items: [] };
  const onClickServices = accordionData.onClickServices || { title: "About Services", subServices: [] };
  const termsAndConditions = accordionData.termsAndConditions || { title: "Terms and Conditions", items: [] };

  const handleProvideCardClick = (srvIndex, srvName) => {
    const subServices = onClickServices.subServices || [];
    
    // Match target subservice by index or by name
    let targetSub = subServices[srvIndex];
    if (!targetSub && srvName) {
      const nameLower = srvName.toLowerCase();
      targetSub = subServices.find(
        (s) => s.name.toLowerCase().includes(nameLower) || nameLower.includes(s.name.toLowerCase())
      );
    }

    if (!targetSub && subServices.length > 0) {
      targetSub = subServices[0];
    }

    if (targetSub) {
      // 1. Expand About Services main section
      setOpenSections((prev) => ({
        ...prev,
        onClickServices: true
      }));

      // 2. Expand target sub-service details
      setOpenSubServiceId(targetSub.id);

      // 3. Scroll smoothly to target sub-service element
      setTimeout(() => {
        const el = document.getElementById(`sub-service-${targetSub.id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          const sectionEl = document.getElementById("about-services-section");
          if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 120);
    }
  };

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
                      <div
                        key={index}
                        className="service-provide-card"
                        onClick={() => handleProvideCardClick(index, srv.name)}
                        title={`Click to view details for ${srv.name}`}
                      >
                        <div className="card-check">
                          <FiCheckCircle />
                        </div>
                        <div className="card-info">
                          <h4>{srv.name}</h4>
                          <p>{srv.desc}</p>
                          <span className="card-click-hint">View details →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 3: Services here on click accordion */}
            <div
              id="about-services-section"
              className={`accordion-item ${openSections.onClickServices ? "is-expanded" : ""}`}
            >
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
                        <div
                          key={subSrv.id}
                          id={`sub-service-${subSrv.id}`}
                          className={`sub-accordion-item ${isSubOpen ? "active" : ""}`}
                        >
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

                                  <Link
                                    href={`/contact?service=${encodeURIComponent(service.slug)}&subject=${encodeURIComponent(`Inquiry for ${subSrv.name}`)}`}
                                    className="apply-btn"
                                  >
                                    Proceed with {subSrv.name}
                                  </Link>
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
