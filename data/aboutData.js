/**
 * @file aboutData.js
 * @description Centralized content configuration for The Corporate Hub's "About Us" page.
 * Clients and administrators can update all text, metrics, services, leadership profiles,
 * team members, and partner networks directly in this file without editing UI code.
 */

export const aboutHeroData = {
  kicker: "ABOUT THE CORPORATE HUB",
  title: "Building Businesses. Strengthening Bharat.",
  subtitle: "CA • CS • CMA Expertise — All Under One Roof",
  description:
    "A multidisciplinary corporate advisory practice delivering synchronized corporate law, taxation, accounting, governance, and business growth solutions for entrepreneurs, SMEs, and scaling enterprises across India.",
  heroImage: "/images/about/hero-consulting.jpg",
  heroImageAlt: "The Corporate Hub Senior Advisory Team in Executive Conference Room",
  trustPills: [
    { label: "CA • CS • CMA Under One Roof", icon: "FiAward" },
    { label: "10+ Years Experience", icon: "FiClock" },
    { label: "10+ In-House Experts", icon: "FiUsers" },
    { label: "100% Lifecycle Support", icon: "FiCheckCircle" },
  ],
  stats: [
    {
      value: "10+",
      label: "Years Experience",
      subtext: "Seasoned corporate leadership",
    },
    {
      value: "CA • CS • CMA",
      label: "All Under One Roof",
      subtext: "Unified professional umbrella",
    },
    {
      value: "10+",
      label: "In-House Experts",
      subtext: "Tax, corporate law & finance specialists",
    },
    {
      value: "100%",
      label: "Lifecycle Support",
      subtext: "From incorporation to SME IPO",
    },
  ],
  ctaPrimary: {
    label: "Consult Our Specialists",
    href: "/contact",
  },
  ctaSecondary: {
    label: "Meet Leadership",
    href: "#leadership",
  },
  ctaWhatsapp: {
    label: "WhatsApp Consultation",
    href: "https://wa.me/918866901544",
  },
};

export const aboutOverviewData = {
  badge: "FIRM OVERVIEW",
  heading: "Integrated Business Consulting & Complete Corporate Services",
  lead:
    "The Corporate Hub is a multidisciplinary corporate advisory practice built to support entrepreneurs, growing enterprises, and established institutions across every stage of business.",
  paragraphs: [
    "By bringing together seasoned expertise across Chartered Accountancy (CA), Company Secretary (CS), and Cost & Management Accountancy (CMA), we eliminate fragmented advisory and deliver synchronized corporate, financial, and legal solutions under one single roof.",
    "From starting a company and safeguarding intellectual property to managing complex taxation, board governance, licensing, valuations, due diligence, and capital expansion — our mandate is to make doing business easier, thoroughly compliant, and growth-oriented.",
  ],
  whyChooseUs: [
    {
      icon: "FiCheckCircle",
      title: "Single-Window Advisory",
      description:
        "Chartered Accountants, Company Secretaries, and CMAs under one roof prevent conflicting advice and disconnected execution.",
    },
    {
      icon: "FiShield",
      title: "Proactive Compliance Hygiene",
      description:
        "Forward-looking regulatory compliance protecting your enterprise against penalties, litigation, and governance pitfalls.",
    },
    {
      icon: "FiTrendingUp",
      title: "Built for Enterprise Scale",
      description:
        "From early stage seed structuring to institutional investor diligence, SEBI valuations, and SME IPO readiness.",
    },
    {
      icon: "FiUsers",
      title: "Dedicated Account Officers",
      description:
        "Direct access to seasoned domain leaders rather than automated chatbots or call-center intermediaries.",
    },
  ],
};

export const coreArchitectureData = {
  badge: "5-PILLAR FRAMEWORK",
  subtitle: "CORE SERVICE ARCHITECTURE",
  title: "Start • Protect • Manage • Comply • Grow",
  description:
    "A seamless lifecycle model that guides enterprises from first registration through statutory defense, financial discipline, and capital expansion.",
  pillars: [
    {
      step: "01",
      key: "start",
      title: "Start",
      tagline: "Entity Structuring & Setup",
      description:
        "Business registration, Private Limited, LLP, OPC, Section 8, Partnerships, and optimal corporate structure advisory.",
      href: "/services/business-registration",
      icon: "FiPlay",
    },
    {
      step: "02",
      key: "protect",
      title: "Protect",
      tagline: "IP & Intangible Assets",
      description:
        "Trademark registration, brand defense, copyright, patent filing, objections hearings, and IP portfolio governance.",
      href: "/services/intellectual-property",
      icon: "FiShield",
    },
    {
      step: "03",
      key: "manage",
      title: "Manage",
      tagline: "Accounting & Tax Discipline",
      description:
        "Cloud bookkeeping, monthly GST compliance, Income Tax audits, payroll structuring, and international taxation.",
      href: "/services/accounting-and-taxation",
      icon: "FiFileText",
    },
    {
      step: "04",
      key: "comply",
      title: "Comply",
      tagline: "Secretarial & MCA Governance",
      description:
        "ROC filings, annual board returns, minutes drafting, MCA regulatory compliance, and statutory health audits.",
      href: "/services/corporate-compliance",
      icon: "FiCheckSquare",
    },
    {
      step: "05",
      key: "grow",
      title: "Grow",
      tagline: "Valuation, Due Diligence & IPO",
      description:
        "Registered valuations, investor diligence, cap-table modeling, pitch-deck readiness, and SME IPO preparation.",
      href: "/services/business-growth",
      icon: "FiTrendingUp",
    },
  ],
  footerMantra: "Your Business. Our Expertise. Bharat's Growth.",
};

export const businessLifecycleData = {
  badge: "COMPREHENSIVE CORPORATE LIFECYCLE",
  heading: "From an Idea to an Enterprise",
  lead: "We believe that registering a business is only the beginning.",
  description:
    "The real journey starts after incorporation — managing taxation, maintaining regulatory compliance, protecting intellectual property, obtaining licenses, raising capital, and making the right strategic decisions as the business grows.",
  partnerCallout:
    "That is where The Corporate Hub becomes more than a professional service provider. We become your dedicated business partner.",
  categories: [
    "All",
    "Registration & Setup",
    "Tax & Accounting",
    "Compliance & IP",
    "Valuation & Growth",
  ],
  stages: [
    {
      num: "01",
      title: "Business Registration",
      desc: "Private Limited, LLP, OPC, Section 8, Partnerships & sole proprietorship structuring.",
      category: "Registration & Setup",
      link: "/services/business-registration",
    },
    {
      num: "02",
      title: "Trademark & IP Protection",
      desc: "Brand name, logo, copyright, patent protection, objections & portfolio advisory.",
      category: "Compliance & IP",
      link: "/services/intellectual-property",
    },
    {
      num: "03",
      title: "Accounting & Taxation",
      desc: "Routine bookkeeping, GST compliance, Income Tax audits & international taxation.",
      category: "Tax & Accounting",
      link: "/services/accounting-and-taxation",
    },
    {
      num: "04",
      title: "ROC & Secretarial Compliance",
      desc: "Statutory ROC filings, annual returns, minutes drafting & MCA regulatory management.",
      category: "Compliance & IP",
      link: "/services/corporate-compliance",
    },
    {
      num: "05",
      title: "Business Licensing",
      desc: "FSSAI, Import Export Code (IEC), ISO, MSME/Udyam, Shop Act & industry permits.",
      category: "Registration & Setup",
      link: "/services/business-licensing",
    },
    {
      num: "06",
      title: "Startup Advisory & Valuation",
      desc: "Cap table advisory, SEBI registered valuation reports, pitch-deck & investor readiness.",
      category: "Valuation & Growth",
      link: "/services/business-growth",
    },
    {
      num: "07",
      title: "Funding Support & Due Diligence",
      desc: "Financial modeling, transaction advisory, legal diligence & investor reporting.",
      category: "Valuation & Growth",
      link: "/services/business-growth",
    },
    {
      num: "08",
      title: "IPO & Listed Compliance",
      desc: "SME IPO preparation, corporate governance architecture & exchange compliance.",
      category: "Valuation & Growth",
      link: "/services/business-growth",
    },
    {
      num: "09",
      title: "Business Expansion",
      desc: "Cross-border expansion, corporate restructuring, M&A advisory & scaling frameworks.",
      category: "Valuation & Growth",
      link: "/services/business-growth",
    },
  ],
};

export const missionVisionData = {
  mission: {
    label: "OUR MISSION",
    title: "To Build Better Businesses.",
    icon: "FiCompass",
    lead: "Our mission is to help entrepreneurs transform their ideas into strong, compliant and sustainable businesses through professional expertise, practical guidance and complete corporate solutions.",
    body: "We believe that when businesses grow, they create employment, innovation, investment, opportunities and economic value. And when thousands of such businesses grow together, Bharat grows with them.",
    highlight:
      "Our purpose goes beyond completing registrations — we build businesses that contribute to building Bharat.",
  },
  vision: {
    label: "OUR VISION",
    title: "A Complete Consulting Ecosystem.",
    icon: "FiTrendingUp",
    lead: "Our vision is to create a complete business consulting ecosystem where entrepreneurs can access the professional expertise they need to Start, Protect, Manage, Comply and Grow their businesses under one roof.",
    body: "We aspire to make The Corporate Hub a trusted business partner for entrepreneurs, startups, SMEs and growing companies across India — simplifying complex corporate requirements while unlocking real potential.",
    highlight: "Your Business. Our Expertise. Bharat's Growth.",
  },
};

export const strategicDirectionData = {
  badge: "STRATEGIC DIRECTION",
  title: "Beyond Compliance. Towards Growth.",
  description:
    "Modern businesses need more than compliance. They need the right corporate structure, financial discipline, regulatory foresight and strategic direction.",
  pillars: [
    {
      icon: "FiShield",
      title: "Strategic Growth Advisory",
      description:
        "Our advisory approach extends beyond routine filings to critical corporate milestones: business restructuring, investor readiness, funding support, valuations, due diligence, and IPO advisory.",
      mantra: "Make business simpler. Make compliance stronger. Make growth possible.",
    },
    {
      icon: "FiGlobe",
      title: "Business Beyond Borders",
      description:
        "For businesses looking beyond India, we provide support for export setup, Import Export Code (IEC), statutory registrations, and cross-border regulatory compliance to explore global opportunities.",
      mantra: "Guiding Indian enterprises into international marketplaces with regulatory clarity.",
    },
    {
      icon: "FiAward",
      title: "Our Philosophy",
      description:
        "We believe professional consulting should be simple, transparent, practical and accessible. Inspired by the spirit of Ease of Doing Business, Startup India, and Make in India.",
      mantra: "Reducing regulatory friction so entrepreneurs focus on building their business.",
    },
  ],
};

export const leadershipData = [
  {
    id: "dhaval-gohel",
    name: "CS Dhaval Gohel",
    role: "Founder | Business & Corporate Consultant",
    credentials: "CS",
    experience: "8+ Years Experience",
    photo: "/images/leadership/dhaval-gohel.jpg",
    linkedin: "https://www.linkedin.com/in/dhaval-gohel",
    email: "corporatehubcs@gmail.com",
    bio: "With 8+ years of professional experience, Dhaval leads The Corporate Hub with a focus on helping entrepreneurs build, structure, and scale their businesses sustainably. He combines deep Company Secretarial acumen with practical startup strategy.",
    expertise: [
      "Business Consulting & Startup Structuring",
      "Corporate Law & Secretarial Advisory",
      "Trademark & Intellectual Property Advisory",
      "Business Growth Consulting",
      "Investment & Financial Advisory (SEBI Registered)",
      "Visiting Faculty for Professional & Business Programs",
    ],
  },
  {
    id: "rahulsingh-panwar",
    name: "CA Rahulsingh Panwar",
    role: "Co-Founder | Tax & Financial Consultant",
    credentials: "CA",
    experience: "8+ Years Experience",
    photo: "/images/leadership/rahulsingh-panwar.jpg",
    linkedin: "https://www.linkedin.com/in/rahulsingh-panwar",
    email: "corporatehubcs@gmail.com",
    bio: "With 8+ years of experience, Rahulsingh brings authoritative command over taxation, statutory audit, financial planning, and international accounting, establishing rock-solid fiscal foundations for growing businesses.",
    expertise: [
      "GST & Indirect Taxation",
      "GST Litigation & Advisory",
      "Audit & Assurance",
      "International Accounting & Taxation",
      "Business Financial Management",
      "Internal Audit & Financial Assistance",
    ],
  },
  {
    id: "arjun-bhatt",
    name: "CMA Arjun Bhatt",
    role: "Co-Founder | Income Tax & Accounting Consultant",
    credentials: "CMA",
    experience: "10+ Years Experience",
    photo: "/images/leadership/arjun-bhatt.jpg",
    linkedin: "https://www.linkedin.com/in/arjun-bhatt",
    email: "corporatehubcs@gmail.com",
    bio: "With 10+ years of distinguished experience, Arjun specializes in direct taxation, cost management, accounting standards, and non-profit/trust governance, guiding organizations toward lean, compliant financial health.",
    expertise: [
      "Income Tax Planning & Advisory",
      "Accounting & Bookkeeping",
      "Tax Compliance & Consulting",
      "Trust & NGO Advisory",
      "Financial Accounting",
      "Visiting Faculty for Tally & Accounting",
    ],
  },
];

export const teamMembersData = [
  {
    id: "meera-trivedi",
    name: "Adv. Meera Trivedi",
    role: "Senior Corporate Legal Counsel",
    credentials: "LL.B, LL.M",
    experience: "7+ Years Exp.",
    photo: null, // Will use professional avatar fallback
    bio: "Specializes in commercial contract drafting, shareholder agreements, NCLT corporate disputes, and regulatory compliance advisory.",
    expertise: ["Commercial Contracts", "NCLT Advisory", "Corporate Governance"],
    linkedin: "https://www.linkedin.com",
    email: "legal@thecorporatehub.in",
  },
  {
    id: "priyank-sharma",
    name: "CS Priyank Sharma",
    role: "Associate Lead – MCA & Secretarial",
    credentials: "CS",
    experience: "5+ Years Exp.",
    photo: null,
    bio: "Directs statutory ROC filings, annual secretarial audits, MCA compliance calendars, and corporate restructuring documentation.",
    expertise: ["ROC Compliance", "MCA Filings", "Secretarial Audits"],
    linkedin: "https://www.linkedin.com",
    email: "secretarial@thecorporatehub.in",
  },
  {
    id: "sneha-kothari",
    name: "CA Sneha Kothari",
    role: "Senior Tax & GST Audit Specialist",
    credentials: "CA",
    experience: "6+ Years Exp.",
    photo: null,
    bio: "Handles multi-state GST audit assessments, departmental scrutiny responses, input tax credit reconciliations, and tax planning.",
    expertise: ["GST Audits", "Department Scrutiny", "Direct Tax Planning"],
    linkedin: "https://www.linkedin.com",
    email: "tax@thecorporatehub.in",
  },
  {
    id: "bhavin-vora",
    name: "Bhavin Vora",
    role: "IP & Trademark Portfolio Associate",
    credentials: "IP Attorney",
    experience: "4+ Years Exp.",
    photo: null,
    bio: "Manages trademark search clearances, objection reply drafting, show-cause hearings, copyright registrations, and IP renewals.",
    expertise: ["Trademark Hearings", "Copyright Filing", "IP Search Reports"],
    linkedin: "https://www.linkedin.com",
    email: "ip@thecorporatehub.in",
  },
  {
    id: "riddhish-patel",
    name: "Riddhish Patel",
    role: "Valuation & Financial Modeling Analyst",
    credentials: "CFA (L2), MBA Finance",
    experience: "5+ Years Exp.",
    photo: null,
    bio: "Prepares discounted cash flow (DCF) models, SEBI-compliant startup valuation reports, investor pitch desks, and due diligence dossiers.",
    expertise: ["DCF Modeling", "Startup Valuations", "Investor Pitch Decks"],
    linkedin: "https://www.linkedin.com",
    email: "valuation@thecorporatehub.in",
  },
  {
    id: "kavita-rao",
    name: "Kavita Rao",
    role: "Client Success & Regulatory Liaison",
    credentials: "M.Com",
    experience: "6+ Years Exp.",
    photo: null,
    bio: "Coordinates timely delivery across multidisciplinary teams, client onboarding, government portal submissions, and license renewals.",
    expertise: ["Client Onboarding", "Portal Submissions", "License Renewals"],
    linkedin: "https://www.linkedin.com",
    email: "support@thecorporatehub.in",
  },
];

export const professionalNetworkData = {
  badge: "COLLABORATIVE ECOSYSTEM",
  heading: "Our Team & Professional Network",
  subheading: "Expertise Beyond Our Leadership",
  teamIntro:
    "Behind our leadership is a growing team of 10+ professionals with experience across CA, CS, taxation, accounting, corporate compliance, intellectual property, and business advisory matters. Our multidisciplinary approach enables us to manage diverse business requirements through a coordinated team, giving clients access to multiple areas of expertise through one professional platform.",
  networkIntro:
    "To support businesses through specialised transactions and distinct stages of growth, The Corporate Hub works within a strong, institutional professional network.",
  partners: [
    {
      name: "Merchant Bankers",
      icon: "FiBriefcase",
      description: "SEBI-registered merchant bankers for SME IPO underwriting and issue management.",
    },
    {
      name: "Registrars & Transfer Agents (RTA)",
      icon: "FiFileText",
      description: "Depository connectivity and share transfer governance for unlisted and listed entities.",
    },
    {
      name: "Registered Valuers",
      icon: "FiTrendingUp",
      description: "IBBI & Companies Act certified valuation for equity, instruments, and M&A transactions.",
    },
    {
      name: "Bankers & Financial Institutions",
      icon: "FiDollarSign",
      description: "Institutional debt, working capital facilities, trade finance, and banking credit lines.",
    },
    {
      name: "Financial & Audit Professionals",
      icon: "FiAward",
      description: "Specialized statutory audit, forensic accounting, and transfer pricing counsel.",
    },
    {
      name: "Legal & Dispute Counsel",
      icon: "FiShield",
      description: "NCLT advocates, commercial litigation specialists, and corporate arbitration counsel.",
    },
    {
      name: "Industry Specialists",
      icon: "FiLayers",
      description: "Technical domain experts across pharmaceuticals, manufacturing, retail, and tech.",
    },
    {
      name: "Business & Networking Groups",
      icon: "FiUsers",
      description: "Chambers of commerce, trade associations, and national entrepreneur networks.",
    },
  ],
  footerNote:
    "This ecosystem connects businesses with the right institutions when specialized expertise is required for funding, valuation, corporate transactions, IPOs, or cross-border expansion.",
  bannerMantra: "One Team. Multiple Expertise. One Business Partner.",
};

export const aboutCtaData = {
  badge: "PARTNER WITH THE CORPORATE HUB",
  title: "Your Business. Our Expertise. Bharat's Growth.",
  description:
    "At The Corporate Hub, our objective is not simply to provide individual professional services. We aim to create a complete business support ecosystem where entrepreneurs can access the expertise, professional connections, and guidance they need to start, manage, and grow their businesses with confidence.",
  actions: [
    {
      label: "Speak With Our Team",
      href: "/contact",
      type: "primary",
    },
    {
      label: "Explore Services",
      href: "/services/business-registration",
      type: "secondary",
    },
    {
      label: "WhatsApp Consultation",
      href: "https://wa.me/918866901544",
      type: "whatsapp",
      isExternal: true,
    },
  ],
};
