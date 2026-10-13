/**
 * @file team.js
 * @description In-House Specialist Team Members for The Corporate Hub.
 * Supports any number of team members (1 to 20+).
 * If an image is missing or null, the UI automatically displays an executive monogram avatar.
 */

export const teamMembers = [
  {
    id: "meera-trivedi",
    name: "Adv. Meera Trivedi",
    role: "Senior Corporate Legal Counsel",
    credentials: "LL.B, LL.M",
    experience: "7+ Years Exp.",
    photo: null, // Gracefully shows professional avatar fallback
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
    credentials: "CFA (L2), MBA",
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

export default teamMembers;
