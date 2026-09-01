import { createClient as createSupabaseClient } from "@supabase/supabase-js";

function getPublicSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SUPABASE_URL
    : "https://placeholder.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
  return createSupabaseClient(supabaseUrl, supabaseKey);
}

// Static Seed Data fallback for development / initial deployment
const FALLBACK_LOCATIONS = [
  { id: "loc-1", city_name: "Ahmedabad", state_name: "Gujarat", city_slug: "ahmedabad", state_slug: "gujarat", is_active: true },
  { id: "loc-2", city_name: "Surat", state_name: "Gujarat", city_slug: "surat", state_slug: "gujarat", is_active: true },
  { id: "loc-3", city_name: "Vadodara", state_name: "Gujarat", city_slug: "vadodara", state_slug: "gujarat", is_active: true },
  { id: "loc-4", city_name: "Rajkot", state_name: "Gujarat", city_slug: "rajkot", state_slug: "gujarat", is_active: true },
  { id: "loc-5", city_name: "Mumbai", state_name: "Maharashtra", city_slug: "mumbai", state_slug: "maharashtra", is_active: true },
  { id: "loc-6", city_name: "Pune", state_name: "Maharashtra", city_slug: "pune", state_slug: "maharashtra", is_active: true },
  { id: "loc-7", city_name: "Thane", state_name: "Maharashtra", city_slug: "thane", state_slug: "maharashtra", is_active: true },
  { id: "loc-8", city_name: "Nagpur", state_name: "Maharashtra", city_slug: "nagpur", state_slug: "maharashtra", is_active: true },
  { id: "loc-9", city_name: "Nashik", state_name: "Maharashtra", city_slug: "nashik", state_slug: "maharashtra", is_active: true },
  { id: "loc-10", city_name: "Bengaluru", state_name: "Karnataka", city_slug: "bengaluru", state_slug: "karnataka", is_active: true },
  { id: "loc-11", city_name: "Hyderabad", state_name: "Telangana", city_slug: "hyderabad", state_slug: "telangana", is_active: true },
  { id: "loc-12", city_name: "Chennai", state_name: "Tamil Nadu", city_slug: "chennai", state_slug: "tamil-nadu", is_active: true }
];

const FALLBACK_SERVICES = [
  { id: "srv-1", service_name: "Company Registration", service_slug: "company-registration", parent_service: "business-registration", is_active: true },
  { id: "srv-2", service_name: "Trademark Registration", service_slug: "trademark-registration", parent_service: "intellectual-property", is_active: true },
  { id: "srv-3", service_name: "GST Compliance", service_slug: "gst-compliance", parent_service: "accounting-taxation", is_active: true },
  { id: "srv-4", service_name: "Copyright Registration", service_slug: "copyright-registration", parent_service: "intellectual-property", is_active: true }
];

const FALLBACK_PAGES = [
  {
    location_slug: "ahmedabad",
    service_slug: "company-registration",
    published: true,
    h1: "Private Limited Company Registration in Ahmedabad",
    meta_title: "Private Limited Company Registration in Ahmedabad | Corporate Hub",
    meta_description: "Register your Private Limited Company in Ahmedabad with Corporate Hub. Fast-track MCA SPICe+ filing, DSC, DIN, PAN, TAN & GST in 5-7 business days.",
    intro: "Ahmedabad is Gujarat's commercial powerhouse, thriving with industrial manufacturing, textiles, tech startups, and GIFT City financial innovation. Incorporating a Private Limited Company in Ahmedabad provides limited liability protection, enhanced corporate credibility, and investor attraction.",
    what_is_service: "Private Limited Company Registration is the formal incorporation of a legal business entity under the Companies Act, 2013 with the Registrar of Companies (ROC) Gujarat. It grants a distinct corporate personality separated from its owners.",
    who_should_choose: "• Tech Startups seeking Seed / Angel funding\n• Manufacturing & Export units in GIDC Sanand, Changodar, & Naroda\n• Service enterprises needing limited liability protection\n• Founders planning to issue ESOPs to key employees",
    key_benefits: "• Limited Liability Protection: Personal assets remain completely safe\n• Separate Legal Entity: Company can acquire assets & contracts in its own name\n• Equity Fundraising: Venture Capitalists & Angel Investors strictly require Pvt Ltd structure\n• Perpetual Succession: Uninterrupted existence regardless of ownership changes",
    eligibility: "• Minimum 2 Directors & 2 Shareholders (Directors can be Shareholders)\n• At least 1 Director must be a resident of India\n• Registered Office Address proof in Gujarat / Ahmedabad\n• No minimum capital requirement",
    documents: "• PAN Card & Aadhaar Card of Directors\n• Passport-size photos of Directors\n• Address Proof (Bank Statement / Utility Bill)\n• Registered Office Address Proof (Electricity bill / Property tax receipt)\n• Rent Agreement & NOC from landlord",
    process: "1. Obtain Digital Signature Certificate (DSC) & Director Identification Number (DIN)\n2. Name Reservation via RUN / SPICe+ Part A portal\n3. Drafting Memorandum of Association (MOA) & Articles of Association (AOA)\n4. Filing SPICe+ Part B form with MCA ROC Gujarat\n5. Receiving Certificate of Incorporation (COI) with PAN, TAN, EPFO & ESIC",
    timeline: "5 to 7 Business Days upon document submission",
    tax_compliance: "• Mandatory Annual MCA Filing (AOC-4 & MGT-7)\n• Income Tax Return (ITR-6) filing annually\n• Monthly / Quarterly GST Return filing (GSTR-1 & GSTR-3B)\n• Statutory Audit by a certified Chartered Accountant",
    comparison: "• Pvt Ltd vs LLP: Pvt Ltd is equity funding-friendly and allows stock options, whereas LLP is partner-managed with lower compliance costs.\n• Pvt Ltd vs OPC: OPC allows only 1 director/owner, whereas Pvt Ltd supports scaling with multiple founders and investors.",
    business_growth: "Incorporating as a Private Limited Company opens doors to institutional bank credit, GIFT City tax incentives, corporate tenders, and international investor confidence.",
    local_information: "The Registrar of Companies (ROC) Gujarat is located at ROC Bhavan, Ahmedabad. Business owners in industrial hubs like SG Highway, Prahlad Nagar, Ashram Road, and GIDC Sanand choose Corporate Hub for seamless MCA digital filing and corporate legal assistance.",
    why_corporate_hub: "Over 10,000+ businesses registered across India. Dedicated chartered accountant & legal experts assigned to your case, 100% online process without physical office visits.",
    canonical_url: "https://www.thecorporatehub.in/locations/ahmedabad/company-registration",
    og_image: "/logo.png",
    faqs: [
      {
        question: "How long does company registration in Ahmedabad take?",
        answer: "Company incorporation in Ahmedabad typically takes 5 to 7 business days once all required documents are verified and submitted to the MCA ROC Gujarat."
      },
      {
        question: "Can a foreign national be a director in an Ahmedabad company?",
        answer: "Yes, a foreign national can be a director and shareholder. At least one resident director who stays in India for 182 days or more in the financial year is required."
      },
      {
        question: "Is physical presence required in ROC Ahmedabad office?",
        answer: "No, the entire process is 100% online through digital signatures and MCA portal submissions."
      }
    ]
  },
  {
    location_slug: "mumbai",
    service_slug: "trademark-registration",
    published: true,
    h1: "Trademark Registration in Mumbai",
    meta_title: "Trademark Registration in Mumbai | Protect Brand & Logo | Corporate Hub",
    meta_description: "Protect your brand name, logo, and slogan in Mumbai with official Trademark Registration. File TM application with IPO Mumbai trademark registry in 24 hours.",
    intro: "Mumbai is India's financial capital and home to thousands of brands, media enterprises, and retail powerhouses. Securing trademark registration in Mumbai grants exclusive nationwide legal rights to your brand name and logo.",
    what_is_service: "Trademark Registration is legal brand protection under the Trade Marks Act, 1999. It grants exclusive rights to use your brand name, logo, or tagline and prevents competitors from copying your identity.",
    who_should_choose: "• E-commerce sellers on Amazon, Flipkart, & Shopify\n• D2C Brands & Consumer Enterprises in Mumbai\n• Software, Tech Startups & Media agencies\n• Restaurant chains, Retail stores, & Manufacturers",
    key_benefits: "• Nationwide Exclusive Rights: Sole legal authority to use brand across India\n• Brand Assets & Valuation: Registered IP adds monetary valuation during funding\n• Right to use ® Symbol: Display official registered trademark symbol\n• Legal Protection Against Infringement: Court injunctions and damages against infringers",
    eligibility: "• Any Individual, Proprietorship, Partnership, LLP, or Pvt Ltd Company\n• Unique brand name, logo, or slogan not deceptively similar to existing marks\n• Selection of appropriate NICE Trademark Class (Class 1 to 45)",
    documents: "• Applicant PAN Card & Aadhaar / Incorporation Certificate\n• Brand Logo / Tagline artwork in JPEG format\n• User Affidavit (if trademark is already in use)\n• Signed Power of Attorney (Form TM-48)",
    process: "1. Brand & Logo Trademark Search in IPO Database\n2. Selecting appropriate NICE Trademark Class (Class 1 to 45)\n3. Drafting & Filing Form TM-A with IPO Mumbai Registry\n4. Allotment of ™ Application Number within 24 Hours\n5. Examination Report response, Journal Publication & Certificate Issuance",
    timeline: "24 Hours for ™ Application Number; 6 to 8 Months for ® Registration Certificate",
    tax_compliance: "• Trademark renewal required every 10 years\n• Trademark assignment or licensing agreements must be recorded with IPO Mumbai",
    comparison: "• Registered Trademark (®) vs Unregistered (™): ™ indicates pending application; ® grants full statutory legal remedy against counterfeiters.",
    business_growth: "A registered trademark acts as an intangible asset that boosts franchise expansion, brand equity valuation, and investor trust.",
    local_information: "The Trade Marks Registry Mumbai office covers Maharashtra, MP, and Goa. Filing your TM application with expert IP attorneys ensures complete protection against brand infringement under Class 1 to 45 of NICE classification.",
    why_corporate_hub: "Experienced IP attorneys, comprehensive pre-filing search report to minimize objection risk, transparent tracking.",
    canonical_url: "https://www.thecorporatehub.in/locations/mumbai/trademark-registration",
    og_image: "/logo.png",
    faqs: [
      {
        question: "When can I use the ™ symbol in Mumbai?",
        answer: "You can start using the ™ symbol immediately after submitting Form TM-A and receiving your official TM Application Number (within 24 hours)."
      },
      {
        question: "What is the validity of a registered trademark in India?",
        answer: "A registered trademark is valid for 10 years from the filing date and can be renewed indefinitely every 10 years."
      }
    ]
  }
];

export async function getSeoLocationPage(citySlug, serviceSlug, allowUnpublished = false) {
  if (!citySlug || !serviceSlug) return null;

  const normalizedCity = citySlug.toLowerCase().trim();
  const normalizedService = serviceSlug.toLowerCase().trim();

  try {
    const supabase = getPublicSupabaseClient();

    // 1. Query Location
    const { data: locationData } = await supabase
      .from("seo_locations")
      .select("*")
      .eq("city_slug", normalizedCity)
      .eq("is_active", true)
      .maybeSingle();

    // 2. Query Service
    const { data: serviceData } = await supabase
      .from("seo_services")
      .select("*")
      .eq("service_slug", normalizedService)
      .eq("is_active", true)
      .maybeSingle();

    let location = locationData;
    let service = serviceData;

    // Fallback if DB not seeded yet
    if (!location) {
      location = FALLBACK_LOCATIONS.find((l) => l.city_slug === normalizedCity && l.is_active);
    }
    if (!service) {
      service = FALLBACK_SERVICES.find((s) => s.service_slug === normalizedService && s.is_active);
    }

    if (!location || !service) {
      return null;
    }

    // 3. Query Location Page
    let page = null;
    let faqs = [];

    if (locationData && serviceData) {
      let query = supabase
        .from("seo_location_pages")
        .select("*")
        .eq("location_id", location.id)
        .eq("service_id", service.id);

      if (!allowUnpublished) {
        query = query.eq("published", true);
      }

      const { data: pageData } = await query.maybeSingle();

      if (pageData) {
        page = pageData;
        const { data: faqData } = await supabase
          .from("seo_faqs")
          .select("*")
          .eq("page_id", page.id)
          .eq("is_active", true)
          .order("sort_order", { ascending: true });
        if (faqData && faqData.length > 0) {
          faqs = faqData;
        }
      }
    }

    // Fallback to memory store if page not in DB
    if (!page) {
      const fallbackPage = FALLBACK_PAGES.find(
        (p) => p.location_slug === normalizedCity && p.service_slug === normalizedService && (allowUnpublished || p.published)
      );
      if (fallbackPage) {
        page = fallbackPage;
        faqs = fallbackPage.faqs || [];
      }
    }

    // If page is still null or published is false (and allowUnpublished is false) -> 404
    if (!page || (!allowUnpublished && !page.published)) {
      return null;
    }

    // 4. Related Published Services in same Location
    let relatedServices = FALLBACK_SERVICES.filter((s) => s.service_slug !== normalizedService);

    // 5. Related Published Locations for same Service
    let relatedLocations = FALLBACK_LOCATIONS.filter((l) => l.city_slug !== normalizedCity);

    return {
      location,
      service,
      page,
      faqs,
      relatedServices,
      relatedLocations
    };
  } catch (err) {
    console.error("Error in getSeoLocationPage:", err);
    const location = FALLBACK_LOCATIONS.find((l) => l.city_slug === normalizedCity);
    const service = FALLBACK_SERVICES.find((s) => s.service_slug === normalizedService);
    const page = FALLBACK_PAGES.find(
      (p) => p.location_slug === normalizedCity && p.service_slug === normalizedService && (allowUnpublished || p.published)
    );

    if (!location || !service || !page) return null;

    return {
      location,
      service,
      page,
      faqs: page.faqs || [],
      relatedServices: FALLBACK_SERVICES.filter((s) => s.service_slug !== normalizedService),
      relatedLocations: FALLBACK_LOCATIONS.filter((l) => l.city_slug !== normalizedCity)
    };
  }
}

export async function getAllLocations() {
  try {
    const supabase = getPublicSupabaseClient();
    const { data: locations } = await supabase
      .from("seo_locations")
      .select("*")
      .eq("is_active", true)
      .order("city_name", { ascending: true });

    if (locations && locations.length > 0) {
      return locations;
    }
  } catch (err) {
    console.error("Error in getAllLocations:", err);
  }
  return FALLBACK_LOCATIONS;
}

export async function getAllServices() {
  try {
    const supabase = getPublicSupabaseClient();
    const { data: services } = await supabase
      .from("seo_services")
      .select("*")
      .eq("is_active", true)
      .order("service_name", { ascending: true });

    if (services && services.length > 0) {
      return services;
    }
  } catch (err) {
    console.error("Error in getAllServices:", err);
  }
  return FALLBACK_SERVICES;
}

export async function getCityHubData(citySlug) {
  if (!citySlug) return null;
  const normalizedCity = citySlug.toLowerCase().trim();

  let location = null;
  try {
    const supabase = getPublicSupabaseClient();
    const { data: locationData } = await supabase
      .from("seo_locations")
      .select("*")
      .eq("city_slug", normalizedCity)
      .eq("is_active", true)
      .maybeSingle();

    location = locationData;
  } catch (err) {
    console.error("Error fetching city in getCityHubData:", err);
  }

  if (!location) {
    location = FALLBACK_LOCATIONS.find((l) => l.city_slug === normalizedCity && l.is_active);
  }

  if (!location) return null;

  const services = await getAllServices();
  const allLocations = await getAllLocations();

  return {
    location,
    services,
    allLocations: allLocations.filter((l) => l.city_slug !== normalizedCity)
  };
}


