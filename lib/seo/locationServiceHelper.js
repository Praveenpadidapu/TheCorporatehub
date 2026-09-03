import { subServiceDetailsData } from "../../data/serviceDetailsData.js";
import { servicesData } from "../../data/servicesData.js";

// Comprehensive map of well-known Indian cities with standard display formatting
export const KNOWN_CITIES = {
  mumbai: "Mumbai",
  delhi: "Delhi",
  "new-delhi": "New Delhi",
  "delhi-ncr": "Delhi NCR",
  bengaluru: "Bengaluru",
  bangalore: "Bangalore",
  hyderabad: "Hyderabad",
  ahmedabad: "Ahmedabad",
  chennai: "Chennai",
  kolkata: "Kolkata",
  surat: "Surat",
  pune: "Pune",
  jaipur: "Jaipur",
  lucknow: "Lucknow",
  kanpur: "Kanpur",
  nagpur: "Nagpur",
  indore: "Indore",
  thane: "Thane",
  bhopal: "Bhopal",
  visakhapatnam: "Visakhapatnam",
  vadodara: "Vadodara",
  ghaziabad: "Ghaziabad",
  ludhiana: "Ludhiana",
  agra: "Agra",
  nashik: "Nashik",
  faridabad: "Faridabad",
  meerut: "Meerut",
  rajkot: "Rajkot",
  varanasi: "Varanasi",
  srinagar: "Srinagar",
  aurangabad: "Aurangabad",
  dhanbad: "Dhanbad",
  amritsar: "Amritsar",
  "navi-mumbai": "Navi Mumbai",
  allahabad: "Allahabad",
  prayagraj: "Prayagraj",
  ranchi: "Ranchi",
  howrah: "Howrah",
  coimbatore: "Coimbatore",
  jabalpur: "Jabalpur",
  gwalior: "Gwalior",
  vijayawada: "Vijayawada",
  jodhpur: "Jodhpur",
  madurai: "Madurai",
  raipur: "Raipur",
  kota: "Kota",
  chandigarh: "Chandigarh",
  guwahati: "Guwahati",
  solapur: "Solapur",
  hubli: "Hubli",
  mysore: "Mysore",
  mysuru: "Mysuru",
  tiruchirappalli: "Tiruchirappalli",
  bareilly: "Bareilly",
  aligarh: "Aligarh",
  tiruppur: "Tiruppur",
  moradabad: "Moradabad",
  jalandhar: "Jalandhar",
  bhubaneswar: "Bhubaneswar",
  salem: "Salem",
  warangal: "Warangal",
  guntur: "Guntur",
  bhiwandi: "Bhiwandi",
  saharanpur: "Saharanpur",
  gorakhpur: "Gorakhpur",
  bikaner: "Bikaner",
  amravati: "Amravati",
  noida: "Noida",
  "greater-noida": "Greater Noida",
  gurugram: "Gurugram",
  gurgaon: "Gurgaon",
  dehradun: "Dehradun",
  kochi: "Kochi",
  cochin: "Cochin",
  thiruvananthapuram: "Thiruvananthapuram",
  trivandrum: "Trivandrum",
  calicut: "Calicut",
  kozhikode: "Kozhikode",
  mangalore: "Mangalore",
  mangaluru: "Mangaluru",
  udaipur: "Udaipur",
  panjim: "Panjim",
  goa: "Goa",
  shimla: "Shimla",
  siliguri: "Siliguri"
};

// Common SEO search query aliases mapped to exact subServiceDetailsData keys
export const SUB_SERVICE_ALIASES = {
  // Business Registration
  "opc": "opc-reg",
  "opc-registration": "opc-reg",
  "one-person-company": "opc-reg",
  "one-person-company-registration": "opc-reg",
  "pvt-ltd": "pvt-ltd",
  "private-limited": "pvt-ltd",
  "private-limited-company": "pvt-ltd",
  "private-limited-company-registration": "pvt-ltd",
  "company-registration": "pvt-ltd",
  "company-incorporation": "pvt-ltd",
  "llp": "llp-reg",
  "llp-registration": "llp-reg",
  "limited-liability-partnership": "llp-reg",
  "limited-liability-partnership-registration": "llp-reg",
  "section-8": "sec8-ngo",
  "section-8-company": "sec8-ngo",
  "section-8-registration": "sec8-ngo",
  "sec-8": "sec8-ngo",
  "sec8": "sec8-ngo",
  "ngo": "sec8-ngo",
  "ngo-registration": "sec8-ngo",
  "startup-msme": "startup-msme",
  "startup-india": "startup-msme",
  "msme": "startup-msme",
  "msme-registration": "startup-msme",
  "udyam": "startup-msme",
  "udyam-registration": "startup-msme",
  "export-setup": "export-setup",
  "export-business-setup": "export-setup",
  "food-franchisee": "food-franchisee",
  "franchisee-business-setup": "food-franchisee",

  // Intellectual Property
  "tm-reg": "tm-reg",
  "trademark": "tm-reg",
  "trademark-registration": "tm-reg",
  "tm": "tm-reg",
  "tm-registration": "tm-reg",
  "tm-litigation": "tm-litigation",
  "trademark-objection": "tm-litigation",
  "tm-objection": "tm-litigation",
  "trademark-litigation": "tm-litigation",
  "tm-renewal": "tm-renewal",
  "trademark-renewal": "tm-renewal",
  "brand-registry": "brand-registry",
  "amazon-brand-registry": "brand-registry",
  "copyright-reg": "copyright-reg",
  "copyright": "copyright-reg",
  "copyright-registration": "copyright-reg",
  "ip-advisory": "ip-advisory",

  // Accounting & Taxation
  "acc-bookkeeping": "acc-bookkeeping",
  "accounting": "acc-bookkeeping",
  "bookkeeping": "acc-bookkeeping",
  "accounting-bookkeeping": "acc-bookkeeping",
  "gst-consultancy": "gst-consultancy",
  "gst": "gst-consultancy",
  "gst-registration": "gst-consultancy",
  "gst-compliance": "gst-consultancy",
  "it-consultancy": "it-consultancy",
  "income-tax": "it-consultancy",
  "income-tax-return": "it-consultancy",
  "itr": "it-consultancy",
  "itr-filing": "it-consultancy",
  "virtual-cfo": "virtual-cfo",
  "cfo": "virtual-cfo",
  "virtual-cfo-services": "virtual-cfo",
  "audit-assurance": "audit-assurance",
  "audit": "audit-assurance",
  "tax-audit": "audit-assurance",

  // Corporate Secretarial & Legal
  "business-consulting": "business-consulting",
  "roc-compliance": "roc-compliance",
  "roc": "roc-compliance",
  "roc-filing": "roc-compliance",
  "llp-compliance": "llp-compliance",
  "secretarial-compliance": "secretarial-compliance",
  "sebi-compliance": "sebi-compliance",
  "sebi": "sebi-compliance",
  "ipo-sme-advisory": "ipo-sme-advisory",
  "ipo": "ipo-sme-advisory",
  "sme-ipo": "ipo-sme-advisory",
  "pf-esic-compliance": "pf-esic-compliance",
  "pf-esic": "pf-esic-compliance",
  "epfo-esic": "pf-esic-compliance",

  // Fundraising & Expansion
  "startup-funding": "startup-funding",
  "fundraising": "startup-funding",
  "dpiit-recognition": "dpiit-recognition",
  "dpiit": "dpiit-recognition",
  "dpiit-registration": "dpiit-recognition",
  "project-cma": "project-cma",
  "cma-report": "project-cma",
  "business-valuation": "business-valuation",
  "valuation": "business-valuation",
  "investor-docs": "investor-docs",
  "due-diligence": "due-diligence",

  // Licenses & Certifications
  "fssai-lic": "fssai-lic",
  "fssai": "fssai-lic",
  "fssai-license": "fssai-lic",
  "food-license": "fssai-lic",
  "iec-code": "iec-code",
  "iec": "iec-code",
  "iec-registration": "iec-code",
  "import-export-code": "iec-code",
  "iso-cert": "iso-cert",
  "iso": "iso-cert",
  "iso-certification": "iso-cert",
  "drug-license": "drug-license",
  "pharmacy-license": "drug-license",
  "apeda-spice": "apeda-spice",
  "apeda": "apeda-spice",
  "spices-board": "apeda-spice",
  "rcmc": "apeda-spice"
};

/**
 * Formats any raw slug into a human-readable city name.
 * Handles known cities, hyphenated names, and acronyms (NCR, USA, UK).
 */
export function formatCityName(citySlug) {
  if (!citySlug) return "";
  const normalized = citySlug.toLowerCase().trim();

  if (KNOWN_CITIES[normalized]) {
    return KNOWN_CITIES[normalized];
  }

  return normalized
    .split("-")
    .map((word) => {
      if (["ncr", "usa", "uk", "uae"].includes(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Resolves a service slug or alias into the full sub-service detail object.
 * Checks exact key, common alias, slugified name, or servicesData subServices fallback.
 */
export function resolveSubService(serviceSlug) {
  if (!serviceSlug) return null;
  const normalized = serviceSlug.toLowerCase().trim();

  // 1. Direct key match in subServiceDetailsData
  if (subServiceDetailsData[normalized]) {
    return subServiceDetailsData[normalized];
  }

  // 2. Direct alias match
  const aliasedKey = SUB_SERVICE_ALIASES[normalized];
  if (aliasedKey && subServiceDetailsData[aliasedKey]) {
    return subServiceDetailsData[aliasedKey];
  }

  // 3. Match by slugified service name
  const foundByName = Object.values(subServiceDetailsData).find((sub) => {
    const slugifiedName = sub.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return slugifiedName === normalized;
  });
  if (foundByName) return foundByName;

  // 4. Fallback search across servicesData subServices list
  for (const category of servicesData) {
    const subList = category?.accordionData?.onClickServices?.subServices || [];
    const matched = subList.find(
      (s) => s.id === normalized || s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === normalized
    );
    if (matched && subServiceDetailsData[matched.id]) {
      return subServiceDetailsData[matched.id];
    }
  }

  return null;
}

/**
 * Creates a localized clone of the sub-service detail object with
 * city-specific heading, localized FAQs, and metadata tags.
 */
export function getLocalizedServiceDetail(citySlug, serviceSlug) {
  const detail = resolveSubService(serviceSlug);
  if (!detail) return null;

  const cityName = formatCityName(citySlug);
  const locationHeading = `${detail.name} in ${cityName}`;

  // Clone detail and apply city overrides
  const localizedDetail = {
    ...detail,
    cityName,
    citySlug,
    locationHeading,
    heroIntro: detail.heroIntro,
    faqs: [
      {
        q: `How can I complete ${detail.name} in ${cityName}?`,
        a: `You can complete ${detail.name} in ${cityName} 100% online through The Corporate Hub. Our dedicated chartered accountants, company secretaries, and legal experts handle all filings, document preparations, and government portal approvals without requiring physical office visits in ${cityName}.`
      },
      {
        q: `What is the expected turnaround time for ${detail.name} in ${cityName}?`,
        a: `For businesses in ${cityName}, the typical turnaround is ${detail.timeline?.duration || "5 to 7 business days"}, subject to standard government authority processing times.`
      },
      ...(detail.faqs || [])
    ]
  };

  return {
    cityName,
    citySlug,
    serviceSlug: detail.id,
    detail: localizedDetail
  };
}

/**
 * List of top Indian business cities for programmatic SEO and sitemap generation.
 */
export const TOP_CITIES = [
  "mumbai",
  "delhi",
  "bengaluru",
  "hyderabad",
  "ahmedabad",
  "chennai",
  "kolkata",
  "pune",
  "jaipur",
  "surat",
  "lucknow",
  "chandigarh",
  "noida",
  "gurugram",
  "indore"
];

/**
 * Top high-intent services for sitemap indexing.
 */
export const TOP_SERVICES = [
  "pvt-ltd",
  "opc-reg",
  "llp-reg",
  "sec8-ngo",
  "startup-msme",
  "tm-reg",
  "copyright-reg",
  "gst-consultancy",
  "it-consultancy",
  "fssai-lic",
  "iec-code",
  "iso-cert"
];
