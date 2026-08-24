"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaShieldHalved,
  FaFileContract,
  FaRotateLeft,
  FaCheck,
  FaCircleInfo,
  FaTriangleExclamation,
  FaScaleBalanced,
  FaBuildingColumns,
  FaEnvelope,
  FaChevronRight,
  FaLock,
  FaUserCheck,
  FaBuilding,
  FaClock,
  FaGavel,
  FaShareNodes,
  FaPhone,
  FaLocationDot
} from "react-icons/fa6";
import "./LegalPage.css";

const PRIVACY_POLICY_DATA = {
  id: "privacy-policy",
  title: "Privacy Policy",
  subtitle: "How we collect, protect, process and handle your personal and corporate data under Indian Law.",
  lastUpdated: "August 2026",
  preamble: "Welcome to The Corporate Hub (“Corporate Hub”, “we”, “us” or “our”). We respect the privacy of our clients, visitors and users and are committed to handling personal information responsibly and in accordance with applicable Indian law.\n\nThis Privacy Policy explains how information may be collected, used, stored, processed and shared when you visit our website, contact us, submit an enquiry or engage us for services.",
  sections: [
    {
      id: "information-collected",
      title: "Information We May Collect",
      icon: FaUserCheck,
      content: "Depending upon the service requested, we may collect information including your name, mobile number, email address, business details, address, identity and address documents, incorporation documents, tax information, financial/business information and other documents voluntarily provided by you.",
      subtext: "For professional assignments, additional information may be required depending upon applicable law, regulatory requirements and the nature of the engagement."
    },
    {
      id: "purpose-of-collection",
      title: "Purpose of Collection",
      icon: FaBuilding,
      lead: "Information may be processed for purposes including:",
      bullets: [
        "Responding to enquiries;",
        "Providing requested services;",
        "Preparing applications, documents and filings;",
        "Communicating with clients;",
        "Processing payments;",
        "Maintaining engagement and compliance records;",
        "Submitting information to government departments, regulators and authorised portals;",
        "Coordinating with professionals/service providers where necessary;",
        "Preventing fraud, misuse or unlawful activity;",
        "Complying with applicable legal or regulatory requirements; and",
        "Improving our website and services."
      ],
      note: "We endeavour to collect only such information as is reasonably necessary for the relevant purpose."
    },
    {
      id: "sharing-of-information",
      title: "Sharing of Information",
      icon: FaShareNodes,
      content: "Information may be shared, where reasonably necessary, with government departments, regulatory authorities, statutory portals, banks, financial institutions, authorised professionals, consultants, technology/service providers or other parties involved in completing the requested assignment.",
      highlight: "We do not sell personal information merely for commercial exploitation."
    },
    {
      id: "government-portals",
      title: "Government and Third-Party Portals",
      icon: FaBuildingColumns,
      content: "Where a service requires filing or submission through portals operated by government authorities or third parties, information supplied by the client may necessarily be transmitted to those platforms.",
      subtext: "Their processing practices may be governed by their respective privacy policies and applicable laws."
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: FaLock,
      content: "We take reasonable administrative and technical precautions to protect information in our possession.",
      warning: "However, no internet transmission, email, cloud system, messaging platform or electronic storage mechanism can be guaranteed to be completely secure."
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: FaClock,
      content: "Information may be retained for the duration reasonably required to complete the assignment, maintain business/professional records, meet statutory requirements, resolve disputes and protect legitimate legal interests."
    },
    {
      id: "cookies-analytics",
      title: "Cookies and Analytics",
      icon: FaCircleInfo,
      content: "Our website may use cookies, analytics tools and similar technologies for website functionality, security, traffic analysis and improving user experience."
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: FaShieldHalved,
      content: "Subject to applicable law and its commencement requirements, individuals may exercise applicable rights concerning their personal data, including correction, updating, erasure, grievance redressal or withdrawal of consent where legally available.",
      alert: "The DPDP framework contemplates clear notices describing personal data collected and the purposes for processing, along with mechanisms concerning consent and rights."
    },
    {
      id: "communication-consent",
      title: "Communication Consent",
      icon: FaEnvelope,
      content: "By voluntarily submitting your contact information or making an enquiry, you authorise us to contact you regarding that enquiry or requested services through reasonable communication channels, subject to applicable law and communication preferences."
    },
    {
      id: "changes-to-policy",
      title: "Changes to Privacy Policy",
      icon: FaFileContract,
      content: "We may update this Policy periodically to reflect changes in law, technology, business practices or services."
    },
    {
      id: "grievance-contact",
      title: "Grievance / Privacy Contact",
      icon: FaGavel,
      content: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Legal & Compliance Office:",
      contactDetails: {
        company: "The Corporate Hub Services",
        role: "Grievance & Privacy Officer",
        location: "Ahmedabad, Gujarat, India",
        email: "privacy@thecorporatehub.in",
        phone: "+91 (079) 4000-1234"
      }
    }
  ]
};

const TERMS_CONDITIONS_DATA = {
  id: "terms-and-conditions",
  title: "Terms & Conditions",
  subtitle: "Terms governing the use of our services, professional engagements, and website interaction.",
  lastUpdated: "August 2026",
  preamble: "By accessing this website, submitting an enquiry, making payment or engaging The Corporate Hub, you acknowledge and agree to these Terms & Conditions.",
  sections: [
    {
      id: "nature-of-services",
      title: "Nature of Services",
      icon: FaBuilding,
      content: "The Corporate Hub operates as a business consulting and corporate services platform providing or facilitating services including business registration, startup advisory, intellectual property assistance, taxation and compliance support, licensing, corporate advisory, funding-related assistance and other allied business services.",
      subtext: "Certain assignments may be performed, certified, represented or completed by appropriately qualified or registered professionals where applicable law requires the same."
    },
    {
      id: "no-automatic-relationship",
      title: "No Automatic Professional Relationship",
      icon: FaUserCheck,
      content: "Merely visiting the website, communicating through WhatsApp/email or submitting an enquiry does not by itself create an advocate-client, chartered accountant-client, company secretary-client, investment adviser-client or any other regulated professional relationship.",
      alert: "Such relationship shall arise only where expressly agreed and legally permissible."
    },
    {
      id: "client-responsibility",
      title: "Client Responsibility",
      icon: FaShieldHalved,
      content: "The client is responsible for providing complete, accurate, genuine and current information and documents.\n\nThe Corporate Hub may rely upon information supplied by the client without independently verifying every document unless verification forms part of the agreed scope.",
      warning: "The client shall remain responsible for consequences arising from false, forged, incomplete, inaccurate or misleading information supplied by the client or persons acting on their behalf."
    },
    {
      id: "authorisation",
      title: "Authorisation",
      icon: FaFileContract,
      content: "By engaging us for a filing, registration or related assignment, the client authorises us and/or the relevant associated professional to use the information and documents supplied for performing the agreed services and making necessary submissions, subject to applicable law."
    },
    {
      id: "fees",
      title: "Fees",
      icon: FaScaleBalanced,
      content: "Professional fees, government fees, stamp duty, certification fees, portal charges, taxes, third-party charges and other expenses may be separately applicable unless expressly stated otherwise in writing.",
      note: "Government fees and statutory charges may change without notice."
    },
    {
      id: "timelines",
      title: "Timelines",
      icon: FaClock,
      content: "Any timeline communicated by us is an estimate unless expressly guaranteed in writing.\n\nProcessing may depend upon government authorities, regulators, banks, financial institutions, third-party platforms and other entities beyond our control.",
      highlight: "Therefore, delays caused by such parties shall not automatically constitute deficiency on our part."
    },
    {
      id: "government-approval",
      title: "Government Approval",
      icon: FaBuildingColumns,
      content: "Submission of an application does not guarantee approval.\n\nThe Corporate Hub cannot control decisions of MCA/ROC, Trademark Registry, Income Tax Department, GST authorities, DPIIT, DGFT, RBI, SEBI, IFSCA, banks, financial institutions or any other governmental, regulatory or third-party authority."
    },
    {
      id: "no-guarantee-results",
      title: "No Guarantee of Results",
      icon: FaTriangleExclamation,
      lead: "We do not guarantee:",
      bullets: [
        "Company or LLP name approval;",
        "Trademark registration;",
        "Licence approval;",
        "Startup India/DPIIT recognition;",
        "Tax exemption;",
        "Government subsidy;",
        "Loan sanction;",
        "Investment/funding;",
        "IPO approval/listing;",
        "Regulatory approval; or",
        "Any particular commercial or financial result."
      ],
      footer: "Where the ultimate decision rests with another authority or person, our obligation is limited to providing the agreed professional assistance."
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: FaShareNodes,
      content: "Where appropriate, assignments may involve independent professionals, merchant bankers, valuers, financial institutions, technology providers or other specialists.\n\nUnless expressly stated otherwise, independent third parties remain responsible for the professional services provided directly by them."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: FaLock,
      content: "Website content, graphics, branding, layout, original text and other proprietary materials belonging to The Corporate Hub may not be copied, reproduced or commercially exploited without permission, except where permitted by law."
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: FaShieldHalved,
      content: "To the maximum extent permitted by applicable law, The Corporate Hub shall not be responsible for indirect, incidental, special or consequential losses resulting from reliance on website information, third-party decisions, portal failures, government delays or circumstances outside our reasonable control.",
      subtext: "Nothing in these Terms excludes or restricts any liability that cannot lawfully be excluded or restricted."
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: FaGavel,
      content: "Subject to applicable law, a client shall be responsible for losses, claims or consequences arising from fraudulent, forged, unlawful, materially inaccurate or unauthorised information/documents supplied by that client."
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: FaScaleBalanced,
      content: "These Terms shall be governed by the laws of India.",
      highlight: "Subject to applicable mandatory law and dispute-resolution requirements, courts having jurisdiction at Ahmedabad, Gujarat shall have jurisdiction over disputes relating to these Terms or services."
    }
  ]
};

const REFUND_POLICY_DATA = {
  id: "refund-policy",
  title: "Refund, Cancellation & Professional Disclaimer Policy",
  subtitle: "Policies governing cancellations, professional fees, non-guarantee terms, and refund processing.",
  lastUpdated: "August 2026",
  preamble: "This Refund, Cancellation & Professional Disclaimer Policy governs services provided by The Corporate Hub (“Corporate Hub”, “we”, “us” or “our”).\n\nBy engaging our services, making payment, submitting documents or authorising us to commence an assignment, the client acknowledges and agrees to the following terms.",
  sections: [
    {
      id: "professional-fees-cancellation",
      title: "1. Professional Fees & Cancellation",
      icon: FaScaleBalanced,
      content: "Once an assignment has commenced, professional fees attributable to consultation, document verification, research, drafting, application preparation, processing, filing, advisory or other work already undertaken shall ordinarily be non-refundable, subject to applicable law.\n\nWhere cancellation is requested before substantive work has commenced, any refund shall be considered after deducting applicable administrative expenses, payment gateway charges, third-party expenses and charges for any work already performed."
    },
    {
      id: "government-third-party-fees",
      title: "2. Government & Third-Party Fees",
      icon: FaBuildingColumns,
      content: "Government fees, stamp duty, statutory charges, certification fees, portal charges, payment gateway charges and amounts paid to third parties are separate from our professional fees unless expressly stated otherwise.\n\nAmounts already deposited with a government authority, regulator or third party shall ordinarily be non-refundable by The Corporate Hub.\n\nAny refund of such amount shall depend upon the refund rules and decision of the concerned authority or third party."
    },
    {
      id: "application-rejection-objection",
      title: "3. Application Rejection, Objection or Delay",
      icon: FaTriangleExclamation,
      lead: "Payment of professional fees is for the professional services performed by us and does not constitute payment for a guaranteed approval. Accordingly, an application being:",
      bullets: [
        "rejected;",
        "objected to;",
        "opposed;",
        "queried;",
        "marked for resubmission;",
        "delayed; or",
        "otherwise not approved"
      ],
      footer: "shall not automatically create a right to refund where the agreed professional services have been properly performed."
    },
    {
      id: "no-guarantee-of-approval",
      title: "4. No Guarantee of Approval",
      icon: FaShieldHalved,
      lead: "The Corporate Hub provides professional assistance, consultancy, documentation, filing and related business support. We do not guarantee:",
      bullets: [
        "Company or LLP name approval;",
        "Company incorporation;",
        "Trademark registration;",
        "Startup India / DPIIT recognition;",
        "GST registration;",
        "FSSAI or other licence approval;",
        "Tax exemption or benefit;",
        "Government subsidy;",
        "Loan sanction;",
        "Investment or fundraising;",
        "IPO or SME listing;",
        "SEBI, RBI, FEMA, IFSCA or other regulatory approval; or",
        "any particular commercial or financial outcome."
      ],
      footer: "The final decision in such matters rests with the concerned government authority, regulator, financial institution, investor, stock exchange or other competent third party."
    },
    {
      id: "estimated-timelines",
      title: "5. Estimated Timelines",
      icon: FaClock,
      content: "Any processing time communicated by us is indicative unless specifically guaranteed in writing.\n\nGovernment portals, regulatory authorities, banks and other third parties operate independently of The Corporate Hub.\n\nWe shall not be responsible for reasonable delays caused by government processing, portal downtime, technical issues, regulatory scrutiny, third-party response time, force majeure or other circumstances beyond our reasonable control."
    },
    {
      id: "client-responsibility-refund",
      title: "6. Client Responsibility",
      icon: FaUserCheck,
      lead: "Our services are substantially based upon information, documents and declarations supplied by clients. Clients are responsible for ensuring that all information and documents submitted are complete, genuine, accurate and legally valid. The Corporate Hub shall not be responsible for consequences directly resulting from:",
      bullets: [
        "forged or fabricated documents;",
        "false declarations;",
        "inaccurate information;",
        "material facts deliberately withheld;",
        "outdated documents;",
        "unauthorised instructions; or",
        "failure by the client to provide required information within the prescribed time."
      ],
      warning: "We reserve the right to suspend or discontinue an assignment where unlawful activity, fraud, forged documentation, material misrepresentation, conflict of interest or serious non-cooperation is reasonably suspected."
    },
    {
      id: "trademark-disclaimer",
      title: "7. Trademark Disclaimer",
      icon: FaFileContract,
      content: "A trademark availability search or professional opinion regarding availability does not constitute a guarantee of registration.\n\nTrademark applications remain subject to examination, objection, opposition and determination by the competent Trademark Registry and may also be affected by rights claimed by third parties."
    },
    {
      id: "company-llp-disclaimer",
      title: "8. Company & LLP Registration Disclaimer",
      icon: FaBuilding,
      content: "Availability of a proposed company or LLP name during a preliminary search does not guarantee approval.\n\nName reservation and incorporation remain subject to applicable law and approval by the Ministry of Corporate Affairs / Registrar of Companies and other competent authorities."
    },
    {
      id: "startup-india-disclaimer",
      title: "9. Startup India Disclaimer",
      icon: FaBuilding,
      content: "Startup India / DPIIT recognition remains subject to applicable eligibility conditions and approval by the competent authority.\n\nObtaining DPIIT recognition does not automatically guarantee tax exemption, funding, government grants, tenders, subsidies or other benefits. Separate eligibility requirements and approvals may apply."
    },
    {
      id: "funding-loan-investment-disclaimer",
      title: "10. Funding, Loan & Investment Disclaimer",
      icon: FaScaleBalanced,
      content: "Assistance with fundraising, business loans, project finance, investor readiness, subsidies, IPO/SME support or preparation of financial/business documentation does not guarantee funding or investment.\n\nFinal decisions are independently taken by investors, lenders, banks, financial institutions, merchant bankers, government authorities, stock exchanges and other relevant parties."
    },
    {
      id: "professional-regulatory-services",
      title: "11. Professional & Regulatory Services",
      icon: FaGavel,
      content: "Certain services may legally require certification, attestation, audit, valuation, legal representation or performance by a specifically qualified, licensed or registered professional.\n\nWhere required, such work may be performed or facilitated through appropriately qualified professionals or independent service providers.\n\nEach independent professional remains responsible for services performed by them in their professional capacity.\n\nThe Corporate Hub shall not represent itself as holding any licence, registration or regulatory capacity that it does not legally possess."
    },
    {
      id: "website-social-media-disclaimer",
      title: "12. Website & Social Media Disclaimer",
      icon: FaCircleInfo,
      content: "Information published through our website, blogs, social media accounts, Google Business Profile, WhatsApp, videos, reels, posts, FAQs, presentations and other educational materials is intended primarily for general awareness.\n\nSuch information should not automatically be considered legal, taxation, accounting, investment or financial advice applicable to a particular person or transaction.\n\nProfessional advice should be obtained after considering the specific facts and circumstances of each case."
    },
    {
      id: "changes-in-law",
      title: "13. Changes in Law",
      icon: FaFileContract,
      content: "Laws, rules, notifications, circulars, government fees, regulatory requirements and portal procedures may change from time to time.\n\nWhile reasonable efforts may be made to keep information current, The Corporate Hub does not warrant that every article, webpage, social media post or other educational material will always reflect the latest legal or regulatory position."
    },
    {
      id: "limitation-of-liability-refund",
      title: "14. Limitation of Liability",
      icon: FaShieldHalved,
      content: "To the maximum extent permitted by applicable law, The Corporate Hub shall not be liable for indirect, incidental, consequential or special losses resulting from government decisions, third-party actions, regulatory changes, portal failures, client-supplied misinformation or delayed information or circumstances outside our reasonable control.\n\nNothing contained in this Policy is intended to exclude or restrict any liability that cannot lawfully be excluded or restricted."
    },
    {
      id: "duplicate-excess-payments",
      title: "15. Duplicate or Excess Payments",
      icon: FaRotateLeft,
      content: "Where a duplicate or excess payment is verified, the amount may be refunded or adjusted against other services after reconciliation.\n\nAny applicable payment gateway, banking or third-party charges may be deducted where legally permissible."
    },
    {
      id: "refund-processing",
      title: "16. Refund Processing",
      icon: FaRotateLeft,
      content: "Where a refund is approved, it shall be processed through an appropriate payment method after verification and applicable deductions.\n\nProcessing time may depend upon banks, payment gateways and other third-party payment providers."
    },
    {
      id: "acceptance-of-policy",
      title: "17. Acceptance of Policy",
      icon: FaUserCheck,
      content: "By making payment, submitting documents, authorising commencement of work or continuing to use our services, the client acknowledges having read and accepted this Policy along with our applicable Terms & Conditions and Privacy Policy."
    },
    {
      id: "governing-law-jurisdiction-refund",
      title: "18. Governing Law & Jurisdiction",
      icon: FaScaleBalanced,
      content: "This Policy shall be governed by the laws of India.",
      highlight: "Subject to applicable mandatory law and dispute-resolution requirements, courts having jurisdiction at Ahmedabad, Gujarat shall have jurisdiction in relation to disputes arising from our services or this Policy."
    }
  ]
};

export default function LegalPage({ defaultTab = "privacy-policy" }) {
  const router = useRouter();
  const [prevDefaultTab, setPrevDefaultTab] = useState(defaultTab);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [activeSectionId, setActiveSectionId] = useState("");

  if (defaultTab !== prevDefaultTab) {
    setPrevDefaultTab(defaultTab);
    setActiveTab(defaultTab);
  }

  const currentData =
    activeTab === "terms-and-conditions"
      ? TERMS_CONDITIONS_DATA
      : activeTab === "refund-policy"
      ? REFUND_POLICY_DATA
      : PRIVACY_POLICY_DATA;

  // Handle Tab Switch & URL Sync
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveSectionId("");
    if (tabId === "privacy-policy") {
      router.push("/privacy-policy", { scroll: false });
    } else if (tabId === "terms-and-conditions") {
      router.push("/terms-and-conditions", { scroll: false });
    } else if (tabId === "refund-policy") {
      router.push("/refund-policy", { scroll: false });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Smooth Scroll to Section
  const scrollToSection = (id) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // header navbar compensation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="legal-page-wrapper">
      {/* Main Content Layout with Sidebar */}
      <div className="legal-main-container">
        {/* Sidebar Column */}
        <aside className="legal-sidebar">
          <div className="sidebar-sticky-inner">
            {/* Sidebar Navigation Switcher */}
            <div className="sidebar-card doc-selector-card">
              <h3 className="sidebar-heading">Legal Documents</h3>
              <div className="doc-nav-list">
                <button
                  className={`doc-nav-btn ${activeTab === "privacy-policy" ? "active" : ""}`}
                  onClick={() => handleTabChange("privacy-policy")}
                >
                  <div className="doc-btn-icon">
                    <FaShieldHalved />
                  </div>
                  <div className="doc-btn-info">
                    <span className="doc-btn-title">Privacy Policy</span>
                    <span className="doc-btn-count">11 Key Clauses</span>
                  </div>
                  <FaChevronRight className="doc-arrow" />
                </button>

                <button
                  className={`doc-nav-btn ${activeTab === "terms-and-conditions" ? "active" : ""}`}
                  onClick={() => handleTabChange("terms-and-conditions")}
                >
                  <div className="doc-btn-icon">
                    <FaFileContract />
                  </div>
                  <div className="doc-btn-info">
                    <span className="doc-btn-title">Terms & Conditions</span>
                    <span className="doc-btn-count">13 Key Clauses</span>
                  </div>
                  <FaChevronRight className="doc-arrow" />
                </button>

                <button
                  className={`doc-nav-btn ${activeTab === "refund-policy" ? "active" : ""}`}
                  onClick={() => handleTabChange("refund-policy")}
                >
                  <div className="doc-btn-icon">
                    <FaRotateLeft />
                  </div>
                  <div className="doc-btn-info">
                    <span className="doc-btn-title">Refund & Cancellation</span>
                    <span className="doc-btn-count">18 Key Clauses</span>
                  </div>
                  <FaChevronRight className="doc-arrow" />
                </button>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="sidebar-card toc-card">
              <h3 className="sidebar-heading">Table of Contents</h3>
              <nav className="toc-list">
                {currentData.sections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`toc-item ${activeSectionId === sec.id ? "active" : ""}`}
                  >
                    <span className="toc-num">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="toc-title">{sec.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Document Content Column */}
        <main className="legal-content-area">
          {/* Preamble Card */}
          <div className="legal-document-header">
            <div className="doc-meta-bar">
              <span className="meta-item">
                <strong>Jurisdiction:</strong> Ahmedabad, Gujarat (India)
              </span>
              <span className="meta-item">
                <strong>Governing Law:</strong> Laws of Republic of India
              </span>
              <span className="meta-item">
                <strong>Last Updated:</strong> {currentData.lastUpdated}
              </span>
            </div>
            <div className="preamble-box">
              <h1 className="main-doc-title">{currentData.title}</h1>
              <p className="preamble-text">{currentData.preamble}</p>
            </div>
          </div>

          {/* Sections List */}
          <div className="legal-sections-container">
            {currentData.sections.map((sec, idx) => {
              const IconComp = sec.icon || FaShieldHalved;
              return (
                <section key={sec.id} id={sec.id} className="legal-section-card">
                  <div className="section-header">
                    <span className="section-number-pill">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="section-title-wrap">
                      <IconComp className="section-header-icon" />
                      <h2 className="section-title">{sec.title}</h2>
                    </div>
                  </div>

                  <div className="section-body">
                    {/* Paragraph Content */}
                    {sec.content && (
                      <p className="section-paragraph">
                        {sec.content.split("\n\n").map((para, pIdx) => (
                          <React.Fragment key={pIdx}>
                            {para}
                            {pIdx < sec.content.split("\n\n").length - 1 && <><br /><br /></>}
                          </React.Fragment>
                        ))}
                      </p>
                    )}

                    {/* Subtext */}
                    {sec.subtext && <p className="section-subtext">{sec.subtext}</p>}

                    {/* Lead label before bullets */}
                    {sec.lead && <p className="section-lead">{sec.lead}</p>}

                    {/* Bullet List */}
                    {sec.bullets && (
                      <ul className="section-bullet-list">
                        {sec.bullets.map((item, bIdx) => (
                          <li key={bIdx} className="section-bullet-item">
                            <FaCheck className="bullet-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Note Box */}
                    {sec.note && (
                      <div className="callout-box note-callout">
                        <FaCircleInfo className="callout-icon" />
                        <div className="callout-content">{sec.note}</div>
                      </div>
                    )}

                    {/* Highlight Box */}
                    {sec.highlight && (
                      <div className="callout-box highlight-callout">
                        <FaShieldHalved className="callout-icon" />
                        <div className="callout-content">{sec.highlight}</div>
                      </div>
                    )}

                    {/* Warning Box */}
                    {sec.warning && (
                      <div className="callout-box warning-callout">
                        <FaTriangleExclamation className="callout-icon" />
                        <div className="callout-content">{sec.warning}</div>
                      </div>
                    )}

                    {/* Alert Box */}
                    {sec.alert && (
                      <div className="callout-box alert-callout">
                        <FaCircleInfo className="callout-icon" />
                        <div className="callout-content">{sec.alert}</div>
                      </div>
                    )}

                    {/* Footer text */}
                    {sec.footer && <p className="section-footer-text">{sec.footer}</p>}

                    {/* Grievance Contact Card */}
                    {sec.contactDetails && (
                      <div className="grievance-card">
                        <div className="grievance-header">
                          <FaBuildingColumns className="grievance-icon" />
                          <div>
                            <h4 className="grievance-title">{sec.contactDetails.company}</h4>
                            <p className="grievance-subtitle">{sec.contactDetails.role}</p>
                          </div>
                        </div>
                        <div className="grievance-details">
                          <div className="g-detail-item">
                            <FaLocationDot /> <span>{sec.contactDetails.location}</span>
                          </div>
                          <div className="g-detail-item">
                            <FaEnvelope /> <a href={`mailto:${sec.contactDetails.email}`}>{sec.contactDetails.email}</a>
                          </div>
                          <div className="g-detail-item">
                            <FaPhone /> <a href={`tel:${sec.contactDetails.phone}`}>{sec.contactDetails.phone}</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Footer Notice inside Content */}
          <div className="legal-content-footer">
            <p>
              For any official correspondence, statutory notices, or legal questions, please email{" "}
              <a href="mailto:contact@thecorporatehub.in">contact@thecorporatehub.in</a> or visit our{" "}
              <Link href="/contact">Contact Page</Link>.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
