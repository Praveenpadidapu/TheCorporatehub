// Comprehensive data structured strictly according to the 17-section PDF framework
// for all sub-services across the 6 core business verticals.

export const subServiceDetailsData = {
  // ==========================================
  // BUSINESS REGISTRATION
  // ==========================================
  "pvt-ltd": {
    id: "pvt-ltd",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Private Limited Company Registration",
    locationHeading: "Private Limited Company Registration in India",
    heroIntro: "Incorporate your Private Limited Company with complete legal compliance, limited liability protection, and separate legal entity status. Designed for startups, founders, and growing enterprises seeking institutional equity funding, market credibility, and structured governance.",
    whatIs: "A Private Limited Company is the most popular corporate legal structure in India, governed by the Companies Act, 2013 and administered by the Ministry of Corporate Affairs (MCA). It establishes a separate legal entity distinct from its shareholders and directors, limiting the financial liability of members strictly to their unpaid share capital.",
    whoShouldChoose: [
      {
        title: "Early-Stage & Scalable Startups",
        desc: "Founders planning to raise venture capital, angel investment, or issue ESOPs to key team members."
      },
      {
        title: "Growing MSMEs & SMEs",
        desc: "Businesses transitioning from proprietorships or partnerships to build corporate reputation."
      },
      {
        title: "E-Commerce & Tech Companies",
        desc: "Online platforms requiring corporate merchant accounts, payment gateway integrations, and API agreements."
      },
      {
        title: "Foreign Entities & Subsidiaries",
        desc: "International corporations seeking 100% subsidiary establishment or joint ventures in India."
      }
    ],
    keyBenefits: [
      {
        title: "Limited Liability Protection",
        desc: "Personal assets of directors and shareholders remain completely protected against business debts and losses."
      },
      {
        title: "Separate Legal Entity Status",
        desc: "The company can independently own property, enter binding contracts, sue, and be sued in its own name."
      },
      {
        title: "Investor & Venture Capital Ready",
        desc: "The only entity structure preferred by venture capital firms, angel networks, and institutional investors."
      },
      {
        title: "Perpetual Succession",
        desc: "The legal existence of the company continues unaffected by changes in directors or shareholding."
      },
      {
        title: "Easy Transferability of Shares",
        desc: "Ownership can be transferred seamlessly through standard share transfer instruments."
      },
      {
        title: "High Market Credibility",
        desc: "Corporate registration fosters trust among corporate clients, banks, suppliers, and government agencies."
      }
    ],
    eligibility: [
      "Minimum 2 Shareholders (Maximum 200 shareholders allowed)",
      "Minimum 2 Directors (At least one director must be a resident of India, residing >182 days in the preceding financial year)",
      "Registered Office Address in India (Commercial or residential premises)",
      "Active PAN and Aadhaar/Passport for all directors and shareholders",
      "Digital Signature Certificate (DSC Class 3) for all proposed directors"
    ],
    documentsRequired: {
      directors: [
        "Self-attested PAN Card copy (Mandatory for Indian nationals)",
        "Passport copy (Mandatory for foreign nationals)",
        "Identity Proof: Aadhaar Card, Voter ID, or Passport",
        "Address Proof: Bank Statement or Electricity Bill (Not older than 2 months)",
        "Recent passport-sized photographs"
      ],
      registeredOffice: [
        "Electricity Bill or Water Bill of the premises (Not older than 2 months)",
        "Rent Agreement on stamp paper (If rented)",
        "No Objection Certificate (NOC) from the property owner",
        "Municipal tax receipt / ownership deed (If owned)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Digital Signatures (DSC) & Director KYC",
        desc: "Procurement of Class-3 Digital Signature Certificates for all directors and verification of KYC credentials."
      },
      {
        step: 2,
        title: "Company Name Reservation (SPICe+ Part A)",
        desc: "Filing name approval application with MCA. Up to 2 unique name choices submitted under RUN / SPICe+ Part A."
      },
      {
        step: 3,
        title: "Drafting MOA & AOA Charters",
        desc: "Drafting the Memorandum of Association (MOA) and Articles of Association (AOA) tailored to business objectives."
      },
      {
        step: 4,
        title: "MCA SPICe+ Part B Incorporation Filing",
        desc: "Filing integrated forms including AGILE-PRO-S for PAN, TAN, EPFO, ESIC, Professional Tax, and Bank Account."
      },
      {
        step: 5,
        title: "Issuance of Certificate of Incorporation (COI)",
        desc: "Registrar of Companies (ROC) issues the COI with unique Corporate Identification Number (CIN), PAN, and TAN."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "Turnaround time is subject to MCA portal approval timelines and prompt document submission by directors."
    },
    taxCompliance: [
      "Mandatory Corporate Income Tax return filing (ITR-6) every financial year.",
      "Annual ROC Return filings: Form AOC-4 (Financial Statements) and Form MGT-7 (Annual Return).",
      "Annual Director KYC (DIR-3 KYC) for all DIN holders before September 30th.",
      "GST Registration and monthly/quarterly GSTR-1 and GSTR-3B filings if turnover exceeds threshold.",
      "Mandatory statutory audit by a practicing Chartered Accountant regardless of turnover."
    ],
    comparison: {
      title: "Comparison: Private Limited vs LLP vs Sole Proprietorship",
      headers: ["Parameter", "Private Limited Company", "LLP (Limited Liability Partnership)", "Sole Proprietorship"],
      rows: [
        ["Legal Status", "Separate Legal Entity", "Separate Legal Entity", "No Separate Entity"],
        ["Liability", "Limited to Unpaid Shares", "Limited to Agreed Contribution", "Unlimited Personal Liability"],
        ["Investor Preference", "Highly Preferred by VCs & Angels", "Limited Investor Appeal", "Not Eligible for Equity Funding"],
        ["Statutory Audit", "Mandatory Every Year", "Mandatory if Turnover > ₹40L or Capital > ₹25L", "Mandatory only if Turnover exceeds Tax Audit limits"],
        ["Tax Rate", "22% base corporate tax (+ surcharge/cess)", "30% flat tax (+ surcharge/cess)", "Individual Income Tax slab rates"],
        ["Transfer of Ownership", "Seamless share transfer", "Requires partner consent & agreement amendment", "Non-transferable"]
      ]
    },
    growthImpact: [
      "Unlocks institutional equity funding, convertible notes, and venture debt access.",
      "Enables structured employee stock option plans (ESOPs) to retain top engineering and executive talent.",
      "Allows participation in large corporate and government tenders requiring established corporate credentials.",
      "Protects enterprise brand equity and intellectual property under an independent legal corporate structure."
    ],
    localInformation: "The Ministry of Corporate Affairs administers registrations via state-wise Registrar of Companies (ROC) jurisdictions. From commercial financial districts like Ahmedabad, Mumbai, Bengaluru, Hyderabad, Pune, to Delhi NCR, The Corporate Hub executes 100% digital filings without requiring in-person visits to ROC offices.",
    whyCorporateHub: [
      "Expert Chartered Accountants and Company Secretaries dedicated to your incorporation case.",
      "100% digital paperless filing process with real-time status notifications.",
      "Transparent statutory handling with zero hidden charges or unexpected surprise fees.",
      "End-to-end post-incorporation kit including PAN, TAN, Bank Account, GST advisory, and first board resolutions."
    ],
    faqs: [
      {
        q: "What is the minimum capital required to register a Private Limited Company?",
        a: "Under the Companies Act, 2013, there is no minimum paid-up capital requirement. You can start with an authorized capital of ₹1,00,000 and paid-up capital as low as ₹1,000."
      },
      {
        q: "Can a salaried individual become a director in a Private Limited Company?",
        a: "Yes, an individual employed full-time can become a director unless their employment contract specifically prohibits directorships or secondary business ownership."
      },
      {
        q: "Is physical presence required at the Registrar of Companies (ROC)?",
        a: "No. The entire incorporation procedure is completely online through digital signature authentication and MCA portal filings."
      },
      {
        q: "Can a residential address be used as the registered office of the company?",
        a: "Yes, you can use your home or residential premises as the registered office address provided you have a valid utility bill and NOC from the property owner."
      },
      {
        q: "What is the validity of the Certificate of Incorporation?",
        a: "The Certificate of Incorporation is valid for a lifetime and does not require periodic renewal as long as statutory annual ROC returns are maintained."
      },
      {
        q: "How many directors are needed to start a Private Limited Company?",
        a: "A minimum of 2 directors and a maximum of 15 directors are permitted under the standard provisions of the Companies Act."
      }
    ],
    relatedServices: [
      { name: "LLP Registration", slug: "llp-reg", categorySlug: "business-registration" },
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "GST Consultancy", slug: "gst-consultancy", categorySlug: "accounting-taxation" },
      { name: "ROC Compliance", slug: "roc-compliance", categorySlug: "corporate-compliance" }
    ]
  },

  "llp-reg": {
    id: "llp-reg",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Limited Liability Partnership (LLP) Registration",
    locationHeading: "Limited Liability Partnership Registration in India",
    heroIntro: "Form a Limited Liability Partnership combining the operational flexibility of a traditional partnership with limited liability protection. Ideal for professional service firms, consultants, legal practices, and real estate partnerships.",
    whatIs: "A Limited Liability Partnership (LLP) is an alternative corporate business form governed by the Limited Liability Partnership Act, 2008. It offers the benefit of limited liability to its partners at low compliance costs while allowing members the internal flexibility of organizing their partnership according to a mutually agreed LLP Agreement.",
    whoShouldChoose: [
      {
        title: "Professional Service Providers",
        desc: "Chartered Accountants, Lawyers, Architects, Software Consultants, and Marketing Agencies."
      },
      {
        title: "Family Businesses & Joint Ventures",
        desc: "Partners seeking operational freedom without exposing personal assets to unlimited liabilities."
      },
      {
        title: "Medium-Scale Trading Entities",
        desc: "Enterprises looking for lower regulatory compliance burdens compared to a Private Limited Company."
      }
    ],
    keyBenefits: [
      {
        title: "Limited Liability Protection",
        desc: "Partners are not personally liable for the debts of the LLP or the negligent acts of other partners."
      },
      {
        title: "Lower Compliance Burden",
        desc: "Statutory audit is not mandatory unless turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs."
      },
      {
        title: "No Mandatory Minimum Capital",
        desc: "Can be established with any nominal capital contributed by partners in cash or kind."
      },
      {
        title: "Flexible Internal Management",
        desc: "Operational rules, profit-sharing ratios, and voting powers are customized via the LLP Agreement."
      }
    ],
    eligibility: [
      "Minimum 2 Partners (No upper limit on maximum number of partners)",
      "At least 2 Designated Partners must be individuals (At least 1 resident in India)",
      "Valid DPIN / DIN and Digital Signatures (DSC) for all Designated Partners",
      "Registered Office Address in India"
    ],
    documentsRequired: {
      directors: [
        "PAN Card copy of all partners (Mandatory for Indian nationals)",
        "Identity Proof: Aadhaar Card, Passport, or Voter ID",
        "Address Proof: Recent Bank Statement, Electricity Bill, or Telephone Bill",
        "Passport size photographs"
      ],
      registeredOffice: [
        "Electricity Bill or Property Tax Receipt of the premises",
        "Rent Agreement & NOC from Landlord (if rented)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "DSC & DPIN Application",
        desc: "Procure Digital Signature Certificates and Designated Partner Identification Numbers."
      },
      {
        step: 2,
        title: "Name Reservation (RUN-LLP)",
        desc: "Submit unique name reservation request on the MCA portal."
      },
      {
        step: 3,
        title: "Incorporation Filing (FiLLiP Form)",
        desc: "File incorporation form with ROC including consent letters and subscriber sheets."
      },
      {
        step: 4,
        title: "Drafting & Filing LLP Agreement (Form 3)",
        desc: "Execute LLP agreement on non-judicial stamp paper and file Form 3 within 30 days of incorporation."
      }
    ],
    timeline: {
      duration: "7 - 10 Business Days",
      qualification: "Subject to ROC name approval and timely execution of the stamped LLP agreement."
    },
    taxCompliance: [
      "Flat 30% Income Tax rate on taxable profits (+ applicable surcharge and cess).",
      "Annual Return filing: Form 11 due on or before May 30th each year.",
      "Statement of Accounts & Solvency: Form 8 due on or before October 30th each year.",
      "ITR-5 filing by July 31st (or October 31st if audit is applicable)."
    ],
    comparison: {
      title: "Comparison: LLP vs Traditional Partnership vs Private Limited",
      headers: ["Feature", "LLP", "Traditional Partnership", "Private Limited Company"],
      rows: [
        ["Liability", "Limited to capital contribution", "Unlimited personal liability", "Limited to unpaid share value"],
        ["Governing Act", "LLP Act, 2008", "Indian Partnership Act, 1932", "Companies Act, 2013"],
        ["Legal Status", "Separate legal entity", "Not a separate entity", "Separate legal entity"],
        ["Compliance Level", "Low to Medium", "Minimal", "High & Rigorous"]
      ]
    },
    growthImpact: [
      "Enables collaborative joint ventures with transparent capital contribution and profit sharing.",
      "Protects individual partner net worth from commercial claims and enterprise contractual disputes.",
      "Provides legal credibility to bid for institutional consulting contracts and professional retainers."
    ],
    localInformation: "LLP incorporation is handled digitally by the Ministry of Corporate Affairs ROC across all states. State stamp duty for the LLP Agreement is determined by the respective state government where the registered office is located.",
    whyCorporateHub: [
      "Customized LLP agreement drafting tailored specifically to your profit-sharing and exit clauses.",
      "Dedicated secretarial compliance tracking to avoid daily MCA late filing penalties.",
      "100% digital incorporation process with proactive CA support."
    ],
    faqs: [
      {
        q: "Is statutory audit mandatory for all LLPs in India?",
        a: "No. An LLP is exempt from audit if its annual turnover does not exceed ₹40 Lakhs and partner contribution does not exceed ₹25 Lakhs."
      },
      {
        q: "Can an existing partnership firm be converted into an LLP?",
        a: "Yes, an existing partnership firm or private company can be converted into an LLP under the Second, Third, or Fourth Schedules of the LLP Act."
      },
      {
        q: "What is the penalty for late filing of LLP Form 8 and Form 11?",
        a: "MCA charges statutory delay fees of ₹100 per day until the annual returns are filed."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" },
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" },
      { name: "LLP Compliance", slug: "llp-compliance", categorySlug: "corporate-compliance" }
    ]
  },

  "sec8-ngo": {
    id: "sec8-ngo",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Section 8 Company (NGO) Registration",
    locationHeading: "Section 8 Company Registration in India",
    heroIntro: "Establish a non-profit organization under Section 8 of the Companies Act, 2013 with maximum credibility, institutional donor trust, and eligibility for 12A, 80G, and CSR funding.",
    whatIs: "A Section 8 Company is an entity registered for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or other non-profit objectives. Any profits or other income earned are applied solely to promoting its objects, and payment of dividends to members is prohibited by law.",
    whoShouldChoose: [
      {
        title: "Social Entrepreneurs & Activists",
        desc: "Individuals creating structured programs in education, healthcare, rural development, and environmental protection."
      },
      {
        title: "Corporate Foundations & CSR Arms",
        desc: "Corporates establishing dedicated non-profit vehicles for corporate social responsibility mandates."
      },
      {
        title: "Research & Educational Institutions",
        desc: "Foundations building academic institutions, incubation centers, and scientific laboratories."
      }
    ],
    keyBenefits: [
      {
        title: "Highest Institutional Credibility",
        desc: "Recognized as more transparent and accountable than traditional trusts or societies by international donors."
      },
      {
        title: "Eligible for 12A & 80G Tax Exemptions",
        desc: "Unlocks 100% tax exemption on income and provides tax deductions for donors."
      },
      {
        title: "CSR Grant Eligibility",
        desc: "Eligible to receive corporate CSR funding upon registering Form CSR-1 with the MCA."
      },
      {
        title: "Exemption from Using 'Limited' Suffix",
        desc: "Operates with clean foundation/association naming without appending 'Pvt Ltd' or 'Limited'."
      }
    ],
    eligibility: [
      "Minimum 2 Directors and Shareholders",
      "Objects strictly dedicated to charity, education, environment, healthcare, or social welfare",
      "Prohibition of dividend distribution or return of capital to members",
      "Clear 3-year projected income and expenditure roadmap"
    ],
    documentsRequired: {
      directors: [
        "PAN Card and Aadhaar/Passport of promoters & directors",
        "Bank statements and identity proof",
        "Promoter profile and social work credentials"
      ],
      registeredOffice: [
        "Premises proof (Utility bill & Rent agreement/NOC)",
        "3-year future projected income and expenditure statement",
        "Declaration of non-profit objects under Section 8(1)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Name Approval (RUN/SPICe+)",
        desc: "Reserve non-profit name incorporating words like Foundation, Association, Council, or Forum."
      },
      {
        step: 2,
        title: "License Application (Form INC-12)",
        desc: "Apply for Section 8 License from Central Government / Regional Director with detailed MOA objectives."
      },
      {
        step: 3,
        title: "Filing SPICe+ Incorporation",
        desc: "Submit incorporation forms and receive Certificate of Incorporation."
      },
      {
        step: 4,
        title: "12A, 80G & CSR-1 Registrations",
        desc: "Apply for Income Tax exemption certificates and CSR grant receiving authorization."
      }
    ],
    timeline: {
      duration: "12 - 15 Business Days",
      qualification: "Includes Section 8 Central Government license processing and ROC certificate issuance."
    },
    taxCompliance: [
      "Mandatory annual filing of Form AOC-4 and Form MGT-7 with ROC.",
      "Filing of Form ITR-7 on Income Tax Portal.",
      "Maintenance of books of accounts and mandatory CA statutory audit.",
      "Compliance with Foreign Contribution Regulation Act (FCRA) if receiving international grants."
    ],
    comparison: {
      title: "Comparison: Section 8 Company vs Trust vs Society",
      headers: ["Parameter", "Section 8 Company", "Trust", "Society"],
      rows: [
        ["Governing Authority", "Ministry of Corporate Affairs (Central)", "State Charity Commissioner / Registrar", "State Registrar of Societies"],
        ["Credibility for CSR Grants", "Highest across India", "Moderate", "Moderate"],
        ["Management Structure", "Board of Directors", "Board of Trustees", "Governing Body / Committee"],
        ["Transparency & Compliance", "Stringent digital disclosures", "Varies by state", "Varies by state"]
      ]
    },
    growthImpact: [
      "Unlocks corporate CSR partnership programs and central government welfare grants.",
      "Instills deep donor confidence through statutory auditing and MCA digital transparency.",
      "Allows structured hiring of professionals to scale charitable operations nationally."
    ],
    localInformation: "Section 8 companies operate pan-India under unified Central Government MCA guidelines, ensuring seamless branch expansion across any state without regional trust deed re-registration.",
    whyCorporateHub: [
      "Comprehensive guidance on drafting bulletproof non-profit charters and Section 8 license approvals.",
      "End-to-end support for 12A, 80G, and CSR-1 portal registrations.",
      "Experienced advisory on FCRA compliance and philanthropic tax planning."
    ],
    faqs: [
      {
        q: "Can directors in a Section 8 Company draw a salary?",
        a: "Directors who act as executive administrators or full-time managers may draw reasonable remuneration for actual services rendered, provided it is permitted under the Articles of Association."
      },
      {
        q: "How can a Section 8 Company receive CSR funds from corporates?",
        a: "The company must register Form CSR-1 on the MCA portal to obtain a unique CSR Registration Number."
      }
    ],
    relatedServices: [
      { name: "Startup India & MSME", slug: "startup-msme", categorySlug: "business-registration" },
      { name: "Income Tax Consultancy", slug: "it-consultancy", categorySlug: "accounting-taxation" },
      { name: "DPIIT Recognition", slug: "dpiit-recognition", categorySlug: "business-growth" }
    ]
  },

  "startup-msme": {
    id: "startup-msme",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Startup India & MSME (Udyam) Registration",
    locationHeading: "Startup India & MSME Udyam Registration",
    heroIntro: "Unlock government recognition, Section 80-IAC tax holidays, collateral-free credit under CGTMSE, priority sector lending, and subsidized intellectual property filings.",
    whatIs: "Startup India is the flagship initiative of the Government of India launched to foster innovation and entrepreneurship, providing DPIIT Recognition. MSME (Udyam) Registration classifies micro, small, and medium enterprises under the MSMED Act, 2006 to avail government subsidies, tenders, and delayed payment protections.",
    whoShouldChoose: [
      {
        title: "Innovative Technology Startups",
        desc: "Ventures developing patented technology, scalable software, or novel business models seeking 80-IAC tax exemption."
      },
      {
        title: "Manufacturing & Service Micro-Enterprises",
        desc: "Businesses looking for collateral-free bank loans, electricity tariff concessions, and ISO reimbursement."
      }
    ],
    keyBenefits: [
      {
        title: "3-Year 100% Tax Holiday (80-IAC)",
        desc: "Eligible DPIIT startups can apply for 100% tax exemption on profits for 3 consecutive years out of 10."
      },
      {
        title: "Angel Tax Exemption (Section 56)",
        desc: "Exemption from angel tax on equity investments raised above fair market value."
      },
      {
        title: "Up to 80% Subsidy on IP Filings",
        desc: "Government provides fast-track examination and huge fee rebates on patent and trademark applications."
      },
      {
        title: "Collateral-Free Bank Loans",
        desc: "Access to credit guarantee coverage under CGTMSE without mortgaging personal assets."
      }
    ],
    eligibility: [
      "For MSME (Udyam): Any business entity with active Aadhaar, PAN, and GST (if applicable).",
      "For Startup India: Incorporated as Pvt Ltd / LLP within the last 10 years with turnover below ₹100 Crores and working towards innovation/scalability."
    ],
    documentsRequired: {
      directors: [
        "Aadhaar Card of proprietor/partner/director",
        "PAN Card of the business entity",
        "Brief write-up and pitch deck on business innovation and scalability"
      ],
      registeredOffice: [
        "Certificate of Incorporation / Partnership Deed",
        "Bank account details (IFSC & Account Number)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Udyam MSME Portal Filing",
        desc: "Submit Udyam registration form with NIC codes and automated income-tax linkage."
      },
      {
        step: 2,
        title: "DPIIT Profile Creation",
        desc: "Set up Startup India profile and prepare innovation narrative highlighting job creation and scalability."
      },
      {
        step: 3,
        title: "Issuance of Certificates",
        desc: "Instant Udyam Registration Certificate and DPIIT Recognition Certificate with official QR code verification."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Immediate issuance for Udyam; 3-5 days for DPIIT portal evaluation."
    },
    taxCompliance: [
      "Annual filing of Udyam data updates if turnover or plant & machinery investments change.",
      "Maintenance of startup eligibility criteria without breaching the ₹100 Crore turnover cap."
    ],
    comparison: {
      title: "Comparison: DPIIT Startup vs MSME Udyam",
      headers: ["Feature", "DPIIT Startup Recognition", "MSME Udyam Registration"],
      rows: [
        ["Eligibility", "Pvt Ltd & LLPs under 10 years old with innovative scope", "All business forms (Proprietorship, Partnership, Pvt Ltd, LLP)"],
        ["Tax Holidays", "Section 80-IAC (3 years tax-free)", "No direct income tax waiver"],
        ["Bank Lending Subsidies", "Access to SIDBI Fund of Funds", "Priority Sector Lending & CGTMSE credit"],
        ["Validity", "Up to 10 years from incorporation", "Lifetime valid"]
      ]
    },
    growthImpact: [
      "Empowers startups to pitch for government tenders exempt from prior turnover and experience criteria.",
      "Provides legal protection under MSME Samadhaan for delayed customer payments within 45 days.",
      "Reduces intellectual property defense costs drastically."
    ],
    localInformation: "Both Udyam and DPIIT registrations are centralized national portals providing uniform benefits across all Indian states and union territories.",
    whyCorporateHub: [
      "100% success rate in structuring DPIIT innovation write-ups and pitch presentations.",
      "Instant Udyam MSME certificate generation with accurate NIC classification.",
      "Comprehensive advisory on Angel Tax waivers and Section 80-IAC applications."
    ],
    faqs: [
      {
        q: "Can a Sole Proprietorship get Startup India recognition?",
        a: "No. DPIIT recognition requires the entity to be incorporated as a Private Limited Company, LLP, or registered Partnership Firm."
      },
      {
        q: "Is there any government fee for Udyam Registration?",
        a: "The central government does not charge a filing fee on the Udyam portal. Our professional fee covers verification and documentation advisory."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" },
      { name: "DPIIT Recognition", slug: "dpiit-recognition", categorySlug: "business-growth" },
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" }
    ]
  },

  "export-setup": {
    id: "export-setup",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Export Business Setup & IEC Allotment",
    locationHeading: "Export Business Setup & IEC Registration",
    heroIntro: "Launch your cross-border trade operations with complete regulatory licensing: Import Export Code (IEC) from DGFT, AD Code registration, Port registration, and Export Promotion Council RCMC.",
    whatIs: "Export Business Setup involves registering a business entity with the Directorate General of Foreign Trade (DGFT) to obtain a 10-digit Import Export Code (IEC). It enables Indian enterprises to legally export goods and services worldwide and claim export duty incentives (RoDTEP, EPCG).",
    whoShouldChoose: [
      {
        title: "Goods Manufacturers & Traders",
        desc: "Textile, agricultural, chemical, engineering, and handicraft businesses selling to international markets."
      },
      {
        title: "Software & Service Exporters",
        desc: "IT companies, digital agencies, and consultants invoicing foreign clients in USD, EUR, or GBP."
      }
    ],
    keyBenefits: [
      {
        title: "Lifetime Valid IEC",
        desc: "The 10-digit IEC issued by DGFT has lifetime validity and requires only annual online validation."
      },
      {
        title: "Customs Clearance & Port Registration",
        desc: "Enables seamless customs clearance at sea ports, air cargo terminals, and ICDs."
      },
      {
        title: "Foreign Remittance Processing",
        desc: "Allows Indian banks to issue Electronic Bank Realization Certificates (e-BRC) for inward remittances."
      },
      {
        title: "Duty Drawback & Export Subsidies",
        desc: "Unlocks benefits under export schemes such as RoDTEP, RoSCTL, and Advance Authorization."
      }
    ],
    eligibility: [
      "Any registered business entity (Proprietorship, LLP, Pvt Ltd) with active PAN",
      "Valid business current bank account",
      "Registered office address proof"
    ],
    documentsRequired: {
      directors: [
        "Entity PAN Card copy",
        "Aadhaar / Passport of authorized signatory",
        "Bank Certificate or Cancelled Cheque with printed entity name"
      ],
      registeredOffice: [
        "Electricity Bill / Rent Agreement of registered office",
        "Authorized Dealer (AD) Code letter issued by bank"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "DGFT Portal Application",
        desc: "Online filing of IEC application on the Directorate General of Foreign Trade portal."
      },
      {
        step: 2,
        title: "Automated Banking & PAN Validation",
        desc: "Real-time verification of bank account credentials with RBI and CBDT databases."
      },
      {
        step: 3,
        title: "IEC Certificate Allotment",
        desc: "Instant generation of the official 10-digit Import Export Code certificate."
      },
      {
        step: 4,
        title: "AD Code & Port Registration (ICEGATE)",
        desc: "Register Authorized Dealer Code with Indian Customs ICEGATE portal for port clearance."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "1-2 days for IEC allotment; 3-5 days for ICEGATE port registration."
    },
    taxCompliance: [
      "Mandatory annual IEC details validation between April and June on DGFT portal.",
      "GST Letter of Undertaking (LUT) filing for zero-rated export supplies without paying IGST.",
      "Quarterly reconciliation of export remittances against inward BRCs."
    ],
    comparison: {
      title: "Comparison: IEC with LUT vs Export with IGST Payment",
      headers: ["Parameter", "Export under LUT (Zero-Rated)", "Export with IGST Payment"],
      rows: [
        ["Working Capital Impact", "Zero cash outflow on tax", "Working capital blocked until refund"],
        ["Refund Process", "Accumulated ITC refund claimed", "Automatic IGST refund upon customs clearance"],
        ["Filing Requirement", "Online LUT Form GST RFD-11 once a year", "Invoice-level shipping bill mapping"]
      ]
    },
    growthImpact: [
      "Opens multi-currency international revenue streams in US, Europe, Middle East, and Southeast Asia.",
      "Provides eligibility to participate in global trade fairs with government financial support."
    ],
    localInformation: "Export documentation is integrated with DGFT regional authorities and Customs ports across major transit hubs including Nhava Sheva (Mumbai), Mundra (Gujarat), Chennai, and Delhi Air Cargo.",
    whyCorporateHub: [
      "End-to-end setup including IEC allotment, ICEGATE registration, AD code authorization, and GST LUT filing.",
      "Advisory on EPC councils (FIEO, APEDA, EEPC, TEXPROCIL) to maximize export subsidies."
    ],
    faqs: [
      {
        q: "Is IEC required for service exporters?",
        a: "IEC is optional for service exporters unless you wish to claim benefits under foreign trade policy schemes."
      },
      {
        q: "Does the IEC expire after a few years?",
        a: "No, IEC is valid for a lifetime. However, DGFT mandates an annual online confirmation update between April and June."
      }
    ],
    relatedServices: [
      { name: "APEDA and Spices Board", slug: "apeda-spice", categorySlug: "licenses-certifications" },
      { name: "GST Consultancy", slug: "gst-consultancy", categorySlug: "accounting-taxation" },
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" }
    ]
  },

  "food-franchisee": {
    id: "food-franchisee",
    categorySlug: "business-registration",
    categoryTitle: "Business Registration",
    name: "Food and Franchisee Business Setup",
    locationHeading: "Food and Franchisee Business Legal Setup",
    heroIntro: "Turn-key legal setup for restaurants, cloud kitchens, cafes, FMCG brands, and franchise networks: FSSAI licensing, trademark protection, franchise agreements, and municipal health NOCs.",
    whatIs: "Food and Franchisee Business Setup establishes the legal, regulatory, and contractual foundation required to operate restaurants, food production units, cloud kitchens, and franchise models compliant with FSSAI regulations, local health departments, and commercial contract law.",
    whoShouldChoose: [
      {
        title: "Restaurant & Cafe Owners",
        desc: "Dine-in outlets, bakeries, bars, and fast-food chains opening commercial premises."
      },
      {
        title: "Cloud Kitchens & Delivery Brands",
        desc: "Commercial kitchens operating on Swiggy, Zomato, and direct delivery channels."
      },
      {
        title: "Franchisors & Franchisees",
        desc: "Brands scaling through franchise partner networks requiring legally enforceable agreements."
      }
    ],
    keyBenefits: [
      {
        title: "14-Digit FSSAI License",
        desc: "Mandatory food safety license for food manufacturing, handling, storage, and distribution."
      },
      {
        title: "Swiggy & Zomato Onboarding",
        desc: "Complete documentation compliance to list on food aggregator platforms immediately."
      },
      {
        title: "Franchise Agreement Shield",
        desc: "Comprehensive legal contracts protecting brand recipes, royalty structures, and territorial rights."
      },
      {
        title: "Brand Trademark Protection",
        desc: "Secure exclusive proprietary rights over restaurant names, logos, and signature recipes."
      }
    ],
    eligibility: [
      "Commercial or cloud kitchen premises with municipal water/power connection",
      "Food handlers trained under FoSTaC food safety standards",
      "Valid business registration (Proprietorship, LLP, or Pvt Ltd)"
    ],
    documentsRequired: {
      directors: [
        "Photo ID and address proof of promoters",
        "List of food categories, menu items, and kitchen equipment",
        "Food safety management plan"
      ],
      registeredOffice: [
        "Premises rent agreement and property owner NOC",
        "Kitchen layout blueprint and water test report (for state/central licenses)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Entity Incorporation & Trademark Filing",
        desc: "Register company/LLP and file ™ trademark application for restaurant brand name."
      },
      {
        step: 2,
        title: "FSSAI FoSCoS License Application",
        desc: "Determine tier (Basic, State, Central) and submit application with food category mapping."
      },
      {
        step: 3,
        title: "Shop & Establishment and Health NOC",
        desc: "Obtain local municipal trade license and fire safety NOC."
      },
      {
        step: 4,
        title: "Franchise Master Agreement Drafting",
        desc: "Draft franchise disclosure documents, royalty payout terms, and non-compete agreements."
      }
    ],
    timeline: {
      duration: "7 - 12 Business Days",
      qualification: "FSSAI Basic in 3-5 days; State license and municipal NOCs in 7-12 days."
    },
    taxCompliance: [
      "Restaurant GST rate compliance (5% without ITC or 18% with ITC for air-conditioned hotels).",
      "FSSAI annual return filing for food manufacturers by May 31st.",
      "Monthly GSTR-1 and GSTR-3B filings."
    ],
    comparison: {
      title: "Comparison: FSSAI Basic vs State vs Central License",
      headers: ["Tier", "Turnover Limit", "Target Business", "Issuing Authority"],
      rows: [
        ["Basic Registration", "Up to ₹12 Lakhs / year", "Small stalls, home kitchens, petty retailers", "Local State Authority"],
        ["State License", "₹12 Lakhs to ₹20 Crores / year", "Restaurants, mid-sized cloud kitchens, manufacturers", "State Food Safety Commissioner"],
        ["Central License", "Above ₹20 Crores / year or Multi-State", "Large food chains, importers, e-commerce, airports", "Central FSSAI Head Office"]
      ]
    },
    growthImpact: [
      "Enables rapid national store rollouts through legally fortified franchise agreements.",
      "Protects brand recipes and operational trade secrets from unauthorized former employee use."
    ],
    localInformation: "Municipal health trade licenses and fire NOC requirements are handled through local municipal corporations (e.g., AMC Ahmedabad, BMC Mumbai, BBMP Bengaluru, MCD Delhi).",
    whyCorporateHub: [
      "Turn-key legal execution covering corporate registration, FSSAI licensing, trademark filing, and franchise contracts.",
      "Zero hassle aggregator listing verification for Swiggy, Zomato, and Blinkit."
    ],
    faqs: [
      {
        q: "What FSSAI license is needed for a new cloud kitchen?",
        a: "A new cloud kitchen with estimated first-year turnover below ₹12 Lakhs can start with an FSSAI Basic Registration, upgrading to a State License as turnover grows."
      }
    ],
    relatedServices: [
      { name: "FSSAI Food License", slug: "fssai-lic", categorySlug: "licenses-certifications" },
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" }
    ]
  },

  // ==========================================
  // INTELLECTUAL PROPERTY
  // ==========================================
  "tm-reg": {
    id: "tm-reg",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "Trademark Registration",
    locationHeading: "Trademark Registration in India",
    heroIntro: "Secure exclusive legal ownership over your brand name, logo, slogan, and symbol across India. File Form TM-A with the Trademark Registry to immediately use the ™ symbol and secure registered ® status.",
    whatIs: "Trademark Registration provides statutory protection under the Trade Marks Act, 1999, granting the brand owner exclusive nationwide rights to commercialize their brand identity and legally prevent competitors from using identical or deceptively similar marks.",
    whoShouldChoose: [
      {
        title: "Product Brands & D2C Companies",
        desc: "Businesses selling physical goods on Amazon, Flipkart, retail shelves, and brand websites."
      },
      {
        title: "Software & SaaS Ventures",
        desc: "Tech startups building valuable domain names, apps, and digital platforms."
      },
      {
        title: "Service Providers & Agencies",
        desc: "Consultancies, financial firms, and educational institutes protecting institutional goodwill."
      }
    ],
    keyBenefits: [
      {
        title: "Exclusive Legal Ownership",
        desc: "Prevents competitors from using identical brand names or confusing your customers."
      },
      {
        title: "Immediate ™ Usage Right",
        desc: "Start using the ™ symbol beside your brand name immediately on the day of application filing."
      },
      {
        title: "Valuable Intangible Asset",
        desc: "Registered trademarks can be sold, franchised, licensed for royalties, and pledged for business valuation."
      },
      {
        title: "Amazon Brand Registry Ready",
        desc: "Unlocks Amazon Brand Registry to remove unauthorized sellers and hijackers instantly."
      },
      {
        title: "10-Year Protection & Indefinite Renewals",
        desc: "Valid for 10 years and can be renewed indefinitely every decade."
      }
    ],
    eligibility: [
      "Any individual, proprietor, partnership, LLP, private company, or trust",
      "Unique brand name or logo not in conflict with existing registered marks in the same class",
      "Classification under one or more of the 45 NICE Trademark Classes"
    ],
    documentsRequired: {
      directors: [
        "Applicant PAN Card and Address Proof",
        "Incorporation Certificate & MSME/Udyam Certificate (to get 50% govt fee waiver)",
        "Signed Power of Attorney (Form TM-48)"
      ],
      registeredOffice: [
        "Brand Logo artwork (JPEG/PNG) or Word Mark details",
        "User Affidavit & Date of first commercial usage in India (if mark is already in use)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Comprehensive Trademark Search",
        desc: "Conduct phonetic and visual conflict search across all 45 classes on the IPO database."
      },
      {
        step: 2,
        title: "Form TM-A Drafting & Class Selection",
        desc: "Draft application specifying goods/services description aligned with NICE classification."
      },
      {
        step: 3,
        title: "Application Filing & ™ Allotment",
        desc: "Submit application on the IP India portal. Receive official TM application number within 24 hours."
      },
      {
        step: 4,
        title: "Examination & Journal Publication",
        desc: "Registry issues examination report; mark is published in Trademark Journal for 4 months."
      },
      {
        step: 5,
        title: "Registration Certificate (® Grant)",
        desc: "Issuance of official Registered Trademark Certificate by Registrar of Trade Marks."
      }
    ],
    timeline: {
      duration: "Same-Day Filing (Final Certificate in 6 - 8 Months)",
      qualification: "Immediate ™ usage in 24 hours. Full registration certificate subject to registry examination speed."
    },
    taxCompliance: [
      "Renewal every 10 years via Form TM-R.",
      "Maintenance of continuous commercial use evidence to defend against non-use rectification petitions."
    ],
    comparison: {
      title: "Comparison: Trademark vs Copyright vs Patent",
      headers: ["Aspect", "Trademark (™ / ®)", "Copyright (©)", "Patent"],
      rows: [
        ["Protects", "Brand Name, Logo, Slogan, Visual Identity", "Original Literary, Artistic, Software Code, Media", "New, Novel, and Useful Inventions & Tech"],
        ["Validity", "10 Years (Renewable indefinitely)", "Author's lifetime + 60 years", "20 Years (Non-renewable)"],
        ["Government Fee", "Subsidized for MSME/Individuals", "Low statutory fee", "Higher statutory examination fees"]
      ]
    },
    growthImpact: [
      "Safeguards millions of rupees spent on customer acquisition, Google ads, and marketing from brand copycats.",
      "Essential pre-requisite for raising venture capital and negotiating franchisee agreements."
    ],
    localInformation: "Administered by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) with branches in Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad.",
    whyCorporateHub: [
      "Comprehensive pre-filing search report to minimize examination objection risks.",
      "50% government fee subsidy advisory for MSMEs and DPIIT startups.",
      "Dedicated IP attorney tracking journal publications and third-party oppositions."
    ],
    faqs: [
      {
        q: "What is the difference between ™ and ® symbols?",
        a: "™ indicates that a trademark application has been filed and is currently pending with the registry. ® can only be used after the formal Trademark Registration Certificate has been issued."
      },
      {
        q: "Can I register a trademark in my personal name?",
        a: "Yes, individuals, proprietors, and companies can all hold trademark registrations."
      }
    ],
    relatedServices: [
      { name: "Trademark Litigation", slug: "tm-litigation", categorySlug: "intellectual-property" },
      { name: "Copyright Registration", slug: "copyright-reg", categorySlug: "intellectual-property" },
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" }
    ]
  },

  "tm-litigation": {
    id: "tm-litigation",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "Trademark Litigation & Objection Defense",
    locationHeading: "Trademark Litigation & Hearing Defense",
    heroIntro: "Expert IP attorney representation for reply to examination reports, opposition notices (Form TM-O), hearing appearances, and brand infringement notices.",
    whatIs: "Trademark Litigation covers legal defense procedures before the Trademark Registry, Intellectual Property Appellate bodies, and High Courts to overcome statutory objections under Section 9 (distinctiveness) or Section 11 (similarity), respond to third-party oppositions, and enforce cease-and-desist actions.",
    whoShouldChoose: [
      {
        title: "Applicants Facing TM Objections",
        desc: "Brand owners who received an Examination Report with Section 9 or Section 11 objections."
      },
      {
        title: "Brands Facing Third-Party Oppositions",
        desc: "Enterprises facing opposition notices filed by competitors during the journal publication period."
      }
    ],
    keyBenefits: [
      {
        title: "Drafted by Specialized IP Advocates",
        desc: "Solid legal replies citing relevant High Court and Supreme Court trademark precedents."
      },
      {
        title: "Representation at Hearing Sessions",
        desc: "Direct virtual or physical representation by counsel before the Trademark Hearing Registrar."
      },
      {
        title: "Salvage Pending Applications",
        desc: "Prevent application abandonment and secure registration grant."
      }
    ],
    eligibility: [
      "Active Trademark Application with status showing 'Objected', 'Opposed', or 'Ready for Show Cause Hearing'"
    ],
    documentsRequired: {
      directors: [
        "Copy of official Examination Report or Notice of Opposition",
        "Invoices, promotional bills, and website archives proving prior brand usage",
        "Signed Power of Attorney (TM-48)"
      ],
      registeredOffice: [
        "Evidence affidavit drafted under Rule 45 / Rule 46"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Objection Analysis",
        desc: "Review examiner concerns under Section 9 / 11 and assess conflicting registered marks."
      },
      {
        step: 2,
        title: "Drafting Formal Written Reply",
        desc: "Draft detailed legal reply with supporting prior use affidavits within the mandatory 30-day window."
      },
      {
        step: 3,
        title: "Hearing Attendance",
        desc: "If matter is listed for hearing, IP counsel presents arguments before the Hearing Officer."
      }
    ],
    timeline: {
      duration: "Reply drafted in 3 - 5 Business Days",
      qualification: "Hearings are scheduled according to the official roster of the Trademark Registry."
    },
    taxCompliance: [
      "Filing replies within statutory time limits (30 days for examination reports; 2 months for counter-statements)."
    ],
    comparison: {
      title: "Comparison: Section 9 Objection vs Section 11 Objection",
      headers: ["Objection Type", "Grounds", "Defense Strategy"],
      rows: [
        ["Section 9 (Absolute Grounds)", "Mark is generic, descriptive, or lacks distinctiveness", "Provide evidence of acquired distinctiveness through long commercial usage"],
        ["Section 11 (Relative Grounds)", "Mark is identical or deceptively similar to an existing mark", "Establish visual/phonetic differences, honest concurrent usage, or niche industry segregation"]
      ]
    },
    growthImpact: [
      "Protects core brand identity from being canceled or permanently abandoned.",
      "Prevents competitors from blocking your brand rollout in national markets."
    ],
    localInformation: "Representations are conducted before the respective jurisdiction benches in Mumbai, Delhi, Ahmedabad, Chennai, and Kolkata.",
    whyCorporateHub: [
      "Over 92% objection clearance track record through rigorous case law research.",
      "Direct representation by seasoned advocates specializing in IP dispute resolution."
    ],
    faqs: [
      {
        q: "What happens if I miss the 30-day deadline to reply to a TM examination report?",
        a: "The Trademark Registry will treat the application as abandoned. A formal revival petition must be filed immediately."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "Trademark Renewal", slug: "tm-renewal", categorySlug: "intellectual-property" },
      { name: "Brand Registry", slug: "brand-registry", categorySlug: "intellectual-property" }
    ]
  },

  "tm-renewal": {
    id: "tm-renewal",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "Trademark Renewal & Restoration",
    locationHeading: "Trademark Renewal & Restoration in India",
    heroIntro: "Renew your registered trademark (®) status every 10 years to maintain perpetual, uninterrupted brand ownership and prevent trademark lapse or removal from the register.",
    whatIs: "Trademark Renewal is the statutory process of extending the legal protection of a registered trademark under Section 25 of the Trade Marks Act, 1999. Filing Form TM-R ensures the registered mark remains valid for another decade.",
    whoShouldChoose: [
      {
        title: "Registered Brand Owners",
        desc: "Enterprises whose 10-year registration tenure is nearing expiration or within the 6-month renewal window."
      },
      {
        title: "Lapsed Trademark Holders",
        desc: "Brands seeking restoration within 1 year of expiration."
      }
    ],
    keyBenefits: [
      {
        title: "Uninterrupted Legal Rights",
        desc: "Retain active ® status without any gap in enforcement rights against infringers."
      },
      {
        title: "Prevent Brand Hijacking",
        desc: "Prevents competitors from registering your established brand once it expires."
      },
      {
        title: "Simple & Rapid Process",
        desc: "Fast-track renewal filing without needing fresh examination or journal publication."
      }
    ],
    eligibility: [
      "Any registered trademark nearing the 10-year expiration date or within the 1-year restoration period."
    ],
    documentsRequired: {
      directors: [
        "Copy of the original Trademark Registration Certificate",
        "TM Application Number and Class details",
        "Power of Attorney (TM-48)"
      ],
      registeredOffice: [
        "Updated registered address of the proprietor"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Status & Expiry Verification",
        desc: "Check official IP India register for current renewal window and calculate fee."
      },
      {
        step: 2,
        title: "Filing Form TM-R",
        desc: "Submit renewal application with official statutory fees on the IP portal."
      },
      {
        step: 3,
        title: "Issuance of Renewal Certificate",
        desc: "Registry updates the register and issues the official Renewal Certificate valid for 10 years."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Renewal receipt generated immediately upon filing."
    },
    taxCompliance: [
      "Filing can be initiated up to 6 months before the expiration date.",
      "Restoration with statutory surcharge permitted up to 1 year after expiration."
    ],
    comparison: {
      title: "Comparison: Timely Renewal vs Restoration After Expiry",
      headers: ["Parameter", "Timely Renewal (Form TM-R)", "Restoration After Expiry"],
      rows: [
        ["Timeline", "Within 6 months before expiry date", "Within 1 year after expiration date"],
        ["Government Fee", "Standard statutory fee", "Standard fee + Late restoration penalty"],
        ["Risk of Loss", "Zero risk; seamless extension", "Competitors can file fresh applications"]
      ]
    },
    growthImpact: [
      "Guarantees lifetime asset value for brand equity built over decades.",
      "Protects global licensing and franchise revenue continuity."
    ],
    localInformation: "Filed digitally through the Controller General of Patents, Designs and Trade Marks portal covering all Indian states.",
    whyCorporateHub: [
      "Automated trademark portfolio tracking to alert you months ahead of expiration.",
      "Zero paperwork hassle with same-day TM-R filing."
    ],
    faqs: [
      {
        q: "What happens if I forget to renew my trademark for over a year?",
        a: "If not renewed or restored within 1 year of expiration, the mark is officially removed from the register and a fresh application must be submitted."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "Trademark Litigation", slug: "tm-litigation", categorySlug: "intellectual-property" }
    ]
  },

  "brand-registry": {
    id: "brand-registry",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "Brand Registry (Amazon & E-commerce)",
    locationHeading: "Brand Registry Setup for Amazon & E-Commerce",
    heroIntro: "Protect your brand from counterfeiters, buy-box hijackers, and unauthorized sellers on Amazon, Flipkart, and Meesho. Unlock A+ Content, Brand Stores, and automated IP protection tools.",
    whatIs: "Brand Registry is an e-commerce brand protection program that gives verified trademark owners complete control over product detail pages, automated counterfeit takedowns, Enhanced Brand Content (A+ Content), Sponsored Brands advertising, and analytics.",
    whoShouldChoose: [
      {
        title: "D2C & Private Label Brands",
        desc: "Sellers manufacturing their own branded products and selling online."
      },
      {
        title: "E-Commerce Entrepreneurs",
        desc: "Store owners seeking to prevent buy-box hijackers on Amazon and Flipkart."
      }
    ],
    keyBenefits: [
      {
        title: "Instant Counterfeit Takedown",
        desc: "Report and automatically remove unauthorized sellers and copycat product listings."
      },
      {
        title: "Unlock A+ Content & Brand Store",
        desc: "Boost conversion rates by up to 20% with rich media, video modules, and customized storefronts."
      },
      {
        title: "Works with Pending Trademarks",
        desc: "Enroll with a pending ™ application without waiting for final ® certificate."
      }
    ],
    eligibility: [
      "Active or pending word mark / device mark with the Indian Trademark Registry",
      "Active Amazon Seller Central or Vendor Central account",
      "Product packaging with branded logo permanently affixed"
    ],
    documentsRequired: {
      directors: [
        "Trademark Application Number or Registration Certificate",
        "Amazon Seller Central Account Merchant Token"
      ],
      registeredOffice: [
        "High-resolution photos of product packaging showing brand name",
        "Sample manufacturing invoice / authorization letter"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "TM Status & Packaging Audit",
        desc: "Verify trademark serial number and inspect product branding photos."
      },
      {
        step: 2,
        title: "Brand Registry Portal Submission",
        desc: "Submit enrollment on Amazon Brand Registry portal."
      },
      {
        step: 3,
        title: "Verification Code Approval",
        desc: "Receive verification code at registered trademark attorney email and confirm enrollment."
      }
    ],
    timeline: {
      duration: "2 - 4 Business Days",
      qualification: "Subject to Amazon Brand Registry team verification review."
    },
    taxCompliance: [
      "Maintain active trademark status to preserve brand registry benefits."
    ],
    comparison: {
      title: "Comparison: Standard Amazon Seller vs Brand Registered Seller",
      headers: ["Feature", "Standard Seller", "Brand Registered Seller"],
      rows: [
        ["Listing Control", "Shared with unauthorized sellers", "Exclusive detail page ownership"],
        ["Content Features", "Basic bullet points and text", "A+ Enhanced Brand Content & Video"],
        ["Counterfeit Defense", "Lengthy manual support tickets", "Automated algorithmic takedown tools"],
        ["Storefront", "No custom store", "Multi-page branded storefront"]
      ]
    },
    growthImpact: [
      "Drives higher organic search rankings on Amazon and Flipkart marketplaces.",
      "Protects gross margins from unauthorized price discounting by unauthorized third-party sellers."
    ],
    localInformation: "Applicable to Indian and global marketplace platforms including Amazon India, Amazon US/EU, Flipkart Brand Protection Program, and Meesho.",
    whyCorporateHub: [
      "Complete coordination with trademark registry attorney email to approve Amazon verification codes instantly.",
      "Turn-key enrollment support for pending ™ and registered ® marks."
    ],
    faqs: [
      {
        q: "Can I enroll in Amazon Brand Registry with a pending trademark?",
        a: "Yes! Amazon Brand Registry accepts pending trademark applications filed with the Indian Trademark Registry."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "Copyright Registration", slug: "copyright-reg", categorySlug: "intellectual-property" }
    ]
  },

  "copyright-reg": {
    id: "copyright-reg",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "Copyright Registration",
    locationHeading: "Copyright Registration in India",
    heroIntro: "Secure statutory ownership over your original software source code, creative artwork, literary books, websites, musical recordings, and media works under the Copyright Act, 1957.",
    whatIs: "Copyright Registration protects original works of authorship including software programs, website code, artistic works, literary books, designs, and sound recordings, granting exclusive reproduction, distribution, and commercial licensing rights.",
    whoShouldChoose: [
      {
        title: "Software & SaaS Companies",
        desc: "Developers protecting proprietary software source code and UX interface designs."
      },
      {
        title: "Writers, Artists & Content Creators",
        desc: "Authors, filmmakers, musicians, and designers protecting creative media."
      }
    ],
    keyBenefits: [
      {
        title: "Statutory Proof of Ownership",
        desc: "Prima facie legal evidence in civil and criminal courts for copyright infringement cases."
      },
      {
        title: "Lifetime + 60 Years Protection",
        desc: "Enjoy comprehensive protection for the entire life of the author plus 60 additional years."
      },
      {
        title: "Monetization & Licensing",
        desc: "License code or creative work to third parties for recurring royalties."
      }
    ],
    eligibility: [
      "Original work created by the author",
      "Work must not be copied or infringing on existing copyrighted material"
    ],
    documentsRequired: {
      directors: [
        "Applicant ID and address proof",
        "Author / Creator details & NOC from author (if applicant is a company)"
      ],
      registeredOffice: [
        "Complete copy of the work / First & last 10 pages of software source code",
        "Form XIV application and statement of particulars"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Categorization & Filing Form XIV",
        desc: "Submit application on the Copyright Office portal."
      },
      {
        step: 2,
        title: "Mandatory 30-Day Waiting Period",
        desc: "Public objection period of 30 days mandated under copyright rules."
      },
      {
        step: 3,
        title: "Examination & Registration Certificate",
        desc: "Copyright Examiner reviews application and issues official Extracts of Register of Copyrights (ROC)."
      }
    ],
    timeline: {
      duration: "2 - 4 Months",
      qualification: "Includes mandatory 30-day objection window and examiner scrutiny."
    },
    taxCompliance: [
      "No recurring renewal required; valid for author's lifetime + 60 years."
    ],
    comparison: {
      title: "Comparison: Copyright vs Patent for Software",
      headers: ["Parameter", "Copyright Registration", "Software Patent"],
      rows: [
        ["What is Protected", "Source code and literal program text", "Underlying novel functional algorithm / technical effect"],
        ["Cost & Speed", "Low cost; processed in months", "High cost; 2-4 years evaluation"],
        ["Duration", "Lifetime + 60 Years", "20 Years"]
      ]
    },
    growthImpact: [
      "Defends proprietary tech stacks and algorithms against theft by departing employees.",
      "Enhances technology enterprise valuation during funding and M&A due diligence."
    ],
    localInformation: "Administered directly by the Copyright Office, Department for Promotion of Industry and Internal Trade (DPIIT), New Delhi.",
    whyCorporateHub: [
      "Expert drafting of source code redactions to protect confidential business logic.",
      "Comprehensive NOC documentation for employee-created intellectual property."
    ],
    faqs: [
      {
        q: "How much software source code needs to be submitted for copyright registration?",
        a: "Typically, the first 10 and last 10 pages of clean source code are submitted without disclosing core confidential encryption keys."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "IP Advisory", slug: "ip-advisory", categorySlug: "intellectual-property" }
    ]
  },

  "ip-advisory": {
    id: "ip-advisory",
    categorySlug: "intellectual-property",
    categoryTitle: "Intellectual Property",
    name: "IP Advisory & Portfolio Management",
    locationHeading: "Intellectual Property Advisory & Licensing",
    heroIntro: "Strategic advisory for technology transfer, IP valuation, licensing agreements, trade secret protection, and IP audit to maximize enterprise valuation.",
    whatIs: "IP Advisory provides high-level legal and commercial strategy to identify, protect, monetize, and audit an organization's intangible assets, including patents, trade secrets, software code, and brand portfolios.",
    whoShouldChoose: [
      {
        title: "Funded Startups & Enterprises",
        desc: "Companies building large intellectual property portfolios for venture funding or IPO."
      },
      {
        title: "Franchisors & Tech Licensors",
        desc: "Businesses licensing proprietary know-how to partners worldwide."
      }
    ],
    keyBenefits: [
      {
        title: "IP Audit & Risk Mapping",
        desc: "Identify unprotected intellectual property and prevent internal leakage."
      },
      {
        title: "Robust Licensing & NDAs",
        desc: "Draft bulletproof Non-Disclosure Agreements, Technology Transfer Deeds, and Licensing Contracts."
      },
      {
        title: "Higher Enterprise Valuation",
        desc: "Properly structured IP portfolios command higher valuation multiples from institutional investors."
      }
    ],
    eligibility: [
      "Any business entity possessing proprietary software, trade secrets, designs, or brands."
    ],
    documentsRequired: {
      directors: [
        "Company constitutional documents",
        "List of existing IP registrations and pending applications"
      ],
      registeredOffice: [
        "Draft agreements, employee contracts, and technology summaries"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Comprehensive IP Audit",
        desc: "Evaluate all organizational assets: trademarks, software, trade secrets, and brand assets."
      },
      {
        step: 2,
        title: "Strategy & Agreement Formulation",
        desc: "Draft licensing models, employee IP assignment agreements, and confidentiality frameworks."
      },
      {
        step: 3,
        title: "Execution & Monitoring",
        desc: "Implement governance protocols to maintain trade secret protection."
      }
    ],
    timeline: {
      duration: "Project-based / Consultation",
      qualification: "Timelines structured according to portfolio scope."
    },
    taxCompliance: [
      "Withholding tax (TDS) and GST compliance on cross-border IP licensing royalties."
    ],
    comparison: {
      title: "Comparison: In-House Ad-Hoc IP vs Structured IP Advisory",
      headers: ["Area", "Ad-Hoc IP Handling", "Structured IP Advisory"],
      rows: [
        ["Employee Code Ownership", "Vague contracts risk copyright claims", "Strict IP assignment deeds secure 100% ownership"],
        ["Licensing Royalties", "Informal terms lead to revenue loss", "Formal contracts ensure recurring royalty compliance"],
        ["Due Diligence Readiness", "Red flags stall investment deals", "Clean Data Room accelerates funding rounds"]
      ]
    },
    growthImpact: [
      "Turns passive ideas into monetizable licensing revenue streams.",
      "Eliminates legal liabilities during investor audits."
    ],
    localInformation: "Advisory services provided pan-India by experienced corporate IP attorneys.",
    whyCorporateHub: [
      "Multidisciplinary team of IP attorneys, corporate lawyers, and Chartered Accountants.",
      "Proven track record structuring IP holding companies and cross-border licensing frameworks."
    ],
    faqs: [
      {
        q: "Why do startups need IP Assignment agreements with developers?",
        a: "Without a written IP assignment agreement, individual freelance or contract developers may legally retain copyright over the source code they write."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" },
      { name: "Due Diligence", slug: "due-diligence", categorySlug: "business-growth" }
    ]
  },

  // ==========================================
  // ACCOUNTING & TAXATION
  // ==========================================
  "acc-bookkeeping": {
    id: "acc-bookkeeping",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "Accounting & Bookkeeping Services",
    locationHeading: "Accounting & Bookkeeping Services in India",
    heroIntro: "Professional monthly accounting, automated cloud bookkeeping, bank reconciliations, and financial MIS reports managed by experienced accountants on Zoho Books, Tally Prime, and QuickBooks.",
    whatIs: "Accounting and Bookkeeping is the systematic recording, categorizing, and reconciling of all financial transactions of a business to produce accurate Profit & Loss statements, Balance Sheets, and management information reports in compliance with Indian Accounting Standards.",
    whoShouldChoose: [
      {
        title: "Startups & Growing Businesses",
        desc: "Founders seeking accurate books without hiring expensive in-house accounting staff."
      },
      {
        title: "Trading & E-Commerce Sellers",
        desc: "Sellers managing multi-channel payouts, inventory reconciliations, and vendor bills."
      }
    ],
    keyBenefits: [
      {
        title: "100% Accurate Books",
        desc: "Eliminate discrepancies with timely ledger classification and bank reconciliation."
      },
      {
        title: "Cloud Software Setup",
        desc: "Real-time visibility on Zoho Books, QuickBooks, or Tally Prime."
      },
      {
        title: "Monthly MIS Reports",
        desc: "Monthly P&L, cash flow statements, and debtor/creditor aging analysis."
      },
      {
        title: "Hassle-Free Tax Readiness",
        desc: "Clean books ready for GST filings, advance tax computations, and year-end audits."
      }
    ],
    eligibility: [
      "Any business entity (Proprietorship, Partnership, LLP, Pvt Ltd) operating commercial bank accounts."
    ],
    documentsRequired: {
      directors: [
        "Bank statements in Excel/PDF",
        "Sales invoices and purchase bills",
        "Expense receipts and payroll registers"
      ],
      registeredOffice: [
        "Prior year audited financials and opening trial balance"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Software & Chart of Accounts Setup",
        desc: "Configure cloud accounting ledger heads tailored to business revenue streams."
      },
      {
        step: 2,
        title: "Monthly Transaction Entry & Reconciliation",
        desc: "Book sales, purchases, bank feeds, and reconcile bank accounts."
      },
      {
        step: 3,
        title: "Financial Statement & MIS Delivery",
        desc: "Deliver monthly P&L, Balance Sheet, and cash flow analysis reports."
      }
    ],
    timeline: {
      duration: "Monthly Retainer / Ongoing",
      qualification: "Monthly reports delivered by the 7th of every subsequent month."
    },
    taxCompliance: [
      "Ensures clean audit trails for statutory tax audits under Section 44AB.",
      "Seamless reconciliation with GSTR-2B for input tax credit claims."
    ],
    comparison: {
      title: "Comparison: In-House Accountant vs The Corporate Hub Outsourced Accounting",
      headers: ["Parameter", "In-House Accountant", "Corporate Hub Accounting"],
      rows: [
        ["Cost", "High fixed salary + employee benefits", "Fractional cost-effective monthly retainer"],
        ["Expertise", "Single individual knowledge limit", "Supervised by Chartered Accountants & tax experts"],
        ["Continuity", "Risk of disruption if employee resigns", "Zero disruption guaranteed SLA"],
        ["Software & Cloud", "Additional software license expenses", "Cloud setup included"]
      ]
    },
    growthImpact: [
      "Provides clear financial metrics on gross margins and unit economics to optimize profitability.",
      "Instantly investor-ready financial reports for fundraising due diligence."
    ],
    localInformation: "Handled 100% digitally through secure cloud platforms across all Indian states.",
    whyCorporateHub: [
      "Dedicated Chartered Accountant supervising your monthly books.",
      "Automated bank feed and e-commerce payment gateway reconciliations."
    ],
    faqs: [
      {
        q: "Which accounting software do you support?",
        a: "We work with all major platforms including Zoho Books, Tally Prime, QuickBooks, and Busy."
      }
    ],
    relatedServices: [
      { name: "GST Consultancy", slug: "gst-consultancy", categorySlug: "accounting-taxation" },
      { name: "Income Tax Consultancy", slug: "it-consultancy", categorySlug: "accounting-taxation" },
      { name: "Virtual CFO", slug: "virtual-cfo", categorySlug: "accounting-taxation" }
    ]
  },

  "gst-consultancy": {
    id: "gst-consultancy",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "GST Consultancy & Return Filing",
    locationHeading: "GST Consultancy & Return Filing in India",
    heroIntro: "Complete GST compliance: new GST registration, monthly GSTR-1 & GSTR-3B filings, annual GSTR-9 returns, Input Tax Credit (ITC) reconciliation, and GST notice defense.",
    whatIs: "GST Consultancy provides end-to-end tax advisory under the Central Goods and Services Tax (CGST) and State Goods and Services Tax (SGST) Acts, ensuring timely tax computation, Input Tax Credit optimization, and avoidance of portal penalties.",
    whoShouldChoose: [
      {
        title: "Businesses Exceeding GST Threshold",
        desc: "Enterprises with aggregate turnover exceeding ₹40 Lakhs (goods) or ₹20 Lakhs (services)."
      },
      {
        title: "E-Commerce Sellers & Inter-State Traders",
        desc: "Businesses selling across state borders or via Amazon, Flipkart, and Shopify."
      }
    ],
    keyBenefits: [
      {
        title: "100% On-Time Filing",
        desc: "Avoid statutory late fees of up to ₹50/day and interest on delayed payments."
      },
      {
        title: "Maximum ITC Claim (GSTR-2B Match)",
        desc: "Identify missing vendor invoices to claim maximum eligible Input Tax Credit."
      },
      {
        title: "GST Notice Handling",
        desc: "Expert drafting of replies to scrutiny notices under Section 61, 73, and 74."
      }
    ],
    eligibility: [
      "Any registered taxable person with active GSTIN or applying for new GSTIN."
    ],
    documentsRequired: {
      directors: [
        "PAN and Aadhaar of promoters",
        "Monthly Sales Register and Purchase Register",
        "Bank statements"
      ],
      registeredOffice: [
        "Premises rent agreement and electricity bill (for new registration)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Data Collation & Invoice Validation",
        desc: "Review outward sales invoices and purchase bills for correct HSN/SAC codes."
      },
      {
        step: 2,
        title: "GSTR-2B Reconciliation",
        desc: "Automated match of purchase invoices with portal GSTR-2B to claim accurate ITC."
      },
      {
        step: 3,
        title: "Filing GSTR-1 and GSTR-3B",
        desc: "Submit monthly/quarterly returns and generate tax payment challan."
      }
    ],
    timeline: {
      duration: "Monthly / Quarterly Filing Cycles",
      qualification: "GSTR-1 by the 11th; GSTR-3B by the 20th of every month."
    },
    taxCompliance: [
      "Monthly GSTR-1 (Outward Supplies) & GSTR-3B (Summary Tax Return).",
      "Annual Return Form GSTR-9 and Reconciliation Statement GSTR-9C.",
      "E-Invoicing for entities with turnover exceeding statutory thresholds."
    ],
    comparison: {
      title: "Comparison: Regular GST Scheme vs Composition Scheme",
      headers: ["Parameter", "Regular GST Scheme", "Composition GST Scheme"],
      rows: [
        ["Turnover Limit", "No limit", "Up to ₹1.5 Crores (goods) / ₹50 Lakhs (services)"],
        ["ITC Claim", "Eligible to claim full Input Tax Credit", "Not eligible to claim ITC"],
        ["Inter-State Sales", "Allowed freely", "Not allowed to make inter-state sales"],
        ["Tax Rate", "Standard rates (5%, 12%, 18%, 28%)", "Flat 1% (traders) or 5% (restaurants)"]
      ]
    },
    growthImpact: [
      "Enables inter-state expansion and participation in B2B corporate supply chains.",
      "Prevents working capital blockages caused by blocked ITC."
    ],
    localInformation: "Covers State GST departments across all Indian states and Union Territories.",
    whyCorporateHub: [
      "Dedicated tax team preventing ITC leakage with automated GSTR-2B reconciliations.",
      "Fast-track GST registration approvals with zero jurisdiction queries."
    ],
    faqs: [
      {
        q: "What is the penalty for filing GST returns late?",
        a: "Late fee of ₹50 per day (₹20 for nil returns) plus 18% per annum interest on unpaid tax liability."
      }
    ],
    relatedServices: [
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" },
      { name: "Income Tax Consultancy", slug: "it-consultancy", categorySlug: "accounting-taxation" }
    ]
  },

  "it-consultancy": {
    id: "it-consultancy",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "Income Tax Consultancy & ITR Filing",
    locationHeading: "Income Tax Consultancy & ITR Filing in India",
    heroIntro: "Strategic corporate and individual income tax planning, advance tax calculation, annual ITR filing (ITR-1 to ITR-7), TDS compliance, and tax assessment notice advisory.",
    whatIs: "Income Tax Consultancy ensures lawful tax optimization under the Income Tax Act, 1961, accurate computation of corporate/individual taxable income, timely advance tax payments, and seamless e-filing of Income Tax Returns.",
    whoShouldChoose: [
      {
        title: "Corporate Entities & LLPs",
        desc: "Companies requiring ITR-6 / ITR-5 filings with audited financial statements."
      },
      {
        title: "Directors, Founders & High Net-Worth Individuals",
        desc: "Founders managing capital gains, ESOP exercises, and dividend income."
      }
    ],
    keyBenefits: [
      {
        title: "Tax Optimization & Savings",
        desc: "Maximize legitimate deductions, business expense allowances, and depreciation benefits."
      },
      {
        title: "Advance Tax Calculation",
        desc: "Avoid Section 234B and 234C interest penalties with accurate quarterly installments."
      },
      {
        title: "Notice & Scrutiny Support",
        desc: "Draft professional legal responses to Section 143(1) intimations and Section 148 notices."
      }
    ],
    eligibility: [
      "All registered corporate entities and individuals earning taxable income in India."
    ],
    documentsRequired: {
      directors: [
        "PAN and Aadhaar",
        "Form 26AS, AIS, and TIS statements",
        "Bank statements for all active accounts"
      ],
      registeredOffice: [
        "Audited Balance Sheet and Profit & Loss Account",
        "Tax Audit Report Form 3CA/3CD (if applicable)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Financial Scrutiny & Tax Computation",
        desc: "Review income heads, capital gains, allowable business deductions, and TDS credits."
      },
      {
        step: 2,
        title: "Draft ITR Review & Client Confirmation",
        desc: "Prepare detailed computation statement showing tax payable or refund due."
      },
      {
        step: 3,
        title: "Portal E-Filing & E-Verification",
        desc: "Upload return to the Income Tax e-filing portal and complete digital verification."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Immediate ITR-V generation upon filing."
    },
    taxCompliance: [
      "Quarterly Advance Tax payment dates: June 15, Sept 15, Dec 15, and March 15.",
      "Annual ITR due dates: July 31 (non-audit) / October 31 (audit cases).",
      "Quarterly TDS return filings (Form 24Q, 26Q, 27Q)."
    ],
    comparison: {
      title: "Comparison: Old Tax Regime vs New Tax Regime (Section 115BAC)",
      headers: ["Feature", "Old Tax Regime", "New Tax Regime"],
      rows: [
        ["Tax Slab Rates", "Higher slab rates", "Lower concessional slab rates"],
        ["Deductions (80C, 80D, HRA)", "Allowed fully", "Disallowed (with minimal exceptions)"],
        ["Best For", "Individuals with high home loan & tax investments", "Individuals/Entities with minimal deductions"]
      ]
    },
    growthImpact: [
      "Clean tax compliance records essential for bank loan sanctions and government tender bids.",
      "Prevents sudden tax demands and bank account attachments."
    ],
    localInformation: "E-filed nationally via the Centralized Processing Center (CPC), Income Tax Department, Bengaluru.",
    whyCorporateHub: [
      "Senior Chartered Accountants structuring your tax strategy.",
      "Comprehensive AIS/TIS reconciliation to prevent automated mismatch notices."
    ],
    faqs: [
      {
        q: "When is a Tax Audit under Section 44AB mandatory for a business?",
        a: "Tax audit is mandatory if business turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions are less than 5% of total turnover)."
      }
    ],
    relatedServices: [
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" },
      { name: "Audit & Assurance", slug: "audit-assurance", categorySlug: "accounting-taxation" }
    ]
  },

  "virtual-cfo": {
    id: "virtual-cfo",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "Virtual CFO Services",
    locationHeading: "Virtual CFO Services for Startups & Growth Enterprises",
    heroIntro: "Get strategic financial leadership, cash flow modeling, unit economics optimization, investor reporting, and budgeting from an experienced Chartered Accountant at a fraction of full-time CFO cost.",
    whatIs: "Virtual CFO (Chief Financial Officer) is an outsourced high-level financial leadership service providing strategic cash flow management, budgeting, financial modeling, KPI dashboard tracking, and board-level financial presentations.",
    whoShouldChoose: [
      {
        title: "Seed to Series A Startups",
        desc: "High-growth ventures managing burn rate, runway planning, and investor relations."
      },
      {
        title: "Mid-Sized Enterprises",
        desc: "Companies seeking institutional financial controls and growth strategy."
      }
    ],
    keyBenefits: [
      {
        title: "Senior CA Financial Leadership",
        desc: "Executive financial guidance without paying full-time executive salaries."
      },
      {
        title: "Runway & Cash Flow Forecasting",
        desc: "Proactive cash burn projections and working capital optimization."
      },
      {
        title: "Investor Reporting & Board Decks",
        desc: "Professional monthly financial dashboards for angels and venture capitalists."
      }
    ],
    eligibility: [
      "Any enterprise seeking structured financial leadership and strategic financial planning."
    ],
    documentsRequired: {
      directors: [
        "Historical financial statements",
        "Current cap table and banking records",
        "Revenue projections and business plan"
      ],
      registeredOffice: [
        "Organizational structure and budget expectations"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Financial Diagnostic Review",
        desc: "Audit current accounting, margin structures, working capital, and tax liabilities."
      },
      {
        step: 2,
        title: "Financial Model & KPI Setup",
        desc: "Build forward-looking dynamic financial models and unit economic trackers."
      },
      {
        step: 3,
        title: "Ongoing Monthly CFO Cadence",
        desc: "Monthly budget reviews, cash flow oversight, and investor report delivery."
      }
    ],
    timeline: {
      duration: "Monthly Retainer",
      qualification: "Tailored to company requirements."
    },
    taxCompliance: [
      "Oversight of all corporate tax, transfer pricing, and statutory compliance timelines."
    ],
    comparison: {
      title: "Comparison: Full-Time In-House CFO vs Virtual CFO",
      headers: ["Parameter", "Full-Time CFO", "Virtual CFO"],
      rows: [
        ["Annual Cost", "₹35 Lakhs – ₹80 Lakhs / year + Equity", "Fractional cost-effective retainer"],
        ["Scalability", "Fixed long-term commitment", "Flexible on-demand scalability"],
        ["Ecosystem Access", "Single executive network", "Access to broad corporate advisory network"]
      ]
    },
    growthImpact: [
      "Extends startup runway through tight cost control and accurate burn management.",
      "Builds rock-solid investor confidence during funding rounds."
    ],
    localInformation: "Provided virtually across India and international subsidiaries.",
    whyCorporateHub: [
      "Proven team of veteran CAs and startup financial specialists.",
      "Hands-on support during venture capital fundraising and due diligence."
    ],
    faqs: [
      {
        q: "What is included in a Virtual CFO engagement?",
        a: "Includes financial planning, cash flow forecasting, budgeting, unit economics modeling, MIS dashboards, and investor reporting."
      }
    ],
    relatedServices: [
      { name: "Startup Funding", slug: "startup-funding", categorySlug: "business-growth" },
      { name: "Business Valuation", slug: "business-valuation", categorySlug: "business-growth" }
    ]
  },

  "audit-assurance": {
    id: "audit-assurance",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "Audit & Assurance Services",
    locationHeading: "Audit & Assurance Services in India",
    heroIntro: "Independent statutory audits under Companies Act, tax audits under Section 44AB, internal audits, and stock audits conducted by qualified practicing Chartered Accountants.",
    whatIs: "Audit and Assurance provides an independent, objective evaluation of an organization's financial statements, internal controls, and statutory records to ensure true and fair presentation in compliance with Indian Accounting Standards and statutory laws.",
    whoShouldChoose: [
      {
        title: "Mandatory Corporate Audits",
        desc: "All Private Limited and Public Companies governed by the Companies Act, 2013."
      },
      {
        title: "Entities Exceeding Tax Audit Limits",
        desc: "Enterprises with turnover exceeding thresholds under Section 44AB."
      }
    ],
    keyBenefits: [
      {
        title: "Full Statutory Compliance",
        desc: "Avoid ROC and Income Tax penalties with clean, certified audit reports."
      },
      {
        title: "Internal Control Evaluation",
        desc: "Identify financial leakages, operational vulnerabilities, and risk areas."
      },
      {
        title: "Bank & Investor Credibility",
        desc: "Audited financial statements are mandatory for bank credit and equity investments."
      }
    ],
    eligibility: [
      "Mandatory for all registered companies; mandatory for other entities exceeding turnover thresholds."
    ],
    documentsRequired: {
      directors: [
        "Complete books of accounts (General ledger, Trial balance)",
        "Bank statements and reconciliation reports",
        "Fixed asset registers and stock inventory sheets"
      ],
      registeredOffice: [
        "Statutory return copies (GST, TDS, ITR, PF/ESIC)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Audit Planning & Scope Definition",
        desc: "Define materiality thresholds and review internal control systems."
      },
      {
        step: 2,
        title: "Substantive Testing & Verification",
        desc: "Sample testing of vouchers, invoices, statutory registers, and asset verifications."
      },
      {
        step: 3,
        title: "Audit Report Issuance",
        desc: "Issuance of certified Statutory Audit Report and Tax Audit Form 3CA/3CB/3CD with UDIN."
      }
    ],
    timeline: {
      duration: "7 - 14 Business Days",
      qualification: "Subject to complete trial balance and documentation readiness."
    },
    taxCompliance: [
      "Tax Audit Report Form 3CA/3CD filing before September 30th.",
      "Statutory Audit report integration with MCA Form AOC-4."
    ],
    comparison: {
      title: "Comparison: Statutory Audit vs Internal Audit",
      headers: ["Parameter", "Statutory Audit", "Internal Audit"],
      rows: [
        ["Mandate", "Mandatory by law (Companies Act / Income Tax)", "Management discretion / Governance best practice"],
        ["Objective", "Express opinion on true & fair financial view", "Evaluate operational efficiency & fraud prevention"],
        ["Auditor", "Independent external Chartered Accountant", "Internal or outsourced consulting team"]
      ]
    },
    growthImpact: [
      "Essential for securing bank credit limits, working capital loans, and private equity investments.",
      "Protects directors from personal liability regarding statutory misstatements."
    ],
    localInformation: "Executed nationwide in compliance with Institute of Chartered Accountants of India (ICAI) auditing standards.",
    whyCorporateHub: [
      "Rigorous audit methodology ensuring zero compliance lapses.",
      "Timely UDIN generation and seamless e-filing integration."
    ],
    faqs: [
      {
        q: "What is UDIN in Chartered Accountant audit reports?",
        a: "Unique Document Identification Number (UDIN) is a mandatory 18-digit number generated on the ICAI portal to verify the authenticity of CA-signed audit reports."
      }
    ],
    relatedServices: [
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" },
      { name: "Income Tax Consultancy", slug: "it-consultancy", categorySlug: "accounting-taxation" }
    ]
  },

  "business-consulting": {
    id: "business-consulting",
    categorySlug: "accounting-taxation",
    categoryTitle: "Accounting & Taxation",
    name: "Business Consulting & Financial Strategy",
    locationHeading: "Business Consulting & Financial Restructuring",
    heroIntro: "Strategic advisory for cost optimization, profitability analysis, financial restructuring, debt syndication, and organizational process design to drive sustainable corporate growth.",
    whatIs: "Business Consulting provides actionable commercial and financial insights to improve operational efficiency, restructure balance sheets, optimize working capital, and scale enterprise profitability.",
    whoShouldChoose: [
      {
        title: "Enterprises Seeking Margin Expansion",
        desc: "Businesses looking to optimize operational costs and improve EBITDA margins."
      },
      {
        title: "Companies undergoing Financial Restructuring",
        desc: "Firms refinancing high-interest debt or restructuring business verticals."
      }
    ],
    keyBenefits: [
      {
        title: "Cost Rationalization",
        desc: "Identify redundant operational expenses to boost bottom-line net profit."
      },
      {
        title: "Debt Syndication & Refinancing",
        desc: "Structure debt facilities and bank loans with optimal interest rates and covenants."
      },
      {
        title: "Sustainable Business Roadmap",
        desc: "Data-driven commercial strategy aligned with market opportunities."
      }
    ],
    eligibility: [
      "Any commercial enterprise seeking strategic growth, margin improvement, or capital restructuring."
    ],
    documentsRequired: {
      directors: [
        "Past 3 years audited financial statements",
        "Business operations summary and organizational chart",
        "Current loan sanction letters and liability details"
      ],
      registeredOffice: [
        "Product/service pricing and cost structure breakdown"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Operational & Financial Diagnostic",
        desc: "Deep-dive analysis of P&L cost lines, revenue concentrations, and unit margins."
      },
      {
        step: 2,
        title: "Strategy Formulation",
        desc: "Develop actionable recommendations for cost cutting, pricing, and capital restructuring."
      },
      {
        step: 3,
        title: "Implementation Support",
        desc: "Guide management in implementing new internal controls and financial milestones."
      }
    ],
    timeline: {
      duration: "Project-based Assignment",
      qualification: "Typically 2 - 4 weeks based on enterprise scope."
    },
    taxCompliance: [
      "Advisory aligned with corporate income tax optimization and statutory norms."
    ],
    comparison: {
      title: "Comparison: Generic Strategy Consulting vs Financial-Driven Business Consulting",
      headers: ["Area", "Generic Strategy", "Corporate Hub Consulting"],
      rows: [
        ["Focus", "Theoretical market positioning", "Concrete balance sheet & cash flow ROI"],
        ["Implementation", "High-level slide decks", "Execution-ready financial models & controls"],
        ["Deliverable", "General advice", "Quantifiable EBITDA & working capital improvements"]
      ]
    },
    growthImpact: [
      "Accelerates path to profitability and healthy positive free cash flow.",
      "Prepares enterprise for successful expansion and fundraising."
    ],
    localInformation: "Delivered across major corporate centers in India.",
    whyCorporateHub: [
      "Pragmatic, execution-oriented advisory with verifiable financial outcomes.",
      "Integrated expertise across corporate law, taxation, and corporate finance."
    ],
    faqs: [
      {
        q: "How does financial business consulting improve working capital?",
        a: "By optimizing debtor collection cycles, negotiating structured vendor credit terms, and reducing inventory holding costs."
      }
    ],
    relatedServices: [
      { name: "Virtual CFO", slug: "virtual-cfo", categorySlug: "accounting-taxation" },
      { name: "Project Report & CMA", slug: "project-cma", categorySlug: "business-growth" }
    ]
  },

  // ==========================================
  // CORPORATE COMPLIANCE
  // ==========================================
  "roc-compliance": {
    id: "roc-compliance",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "ROC Annual Compliance",
    locationHeading: "ROC Annual Compliance & Secretarial Filings",
    heroIntro: "Mandatory annual MCA filings for Private Limited and Public Companies: Form AOC-4 (Financials), Form MGT-7/7A (Annual Return), DIR-3 KYC, and Board Meeting documentation to avoid daily penalties.",
    whatIs: "ROC (Registrar of Companies) Compliance is the statutory obligation mandated under the Companies Act, 2013 for all registered companies to file annual financial statements, shareholding patterns, and director records on the MCA portal every year.",
    whoShouldChoose: [
      {
        title: "All Private Limited Companies",
        desc: "Mandatory for every active company regardless of whether any business transactions occurred."
      },
      {
        title: "One Person Companies (OPCs)",
        desc: "Streamlined annual compliance via Form MGT-7A."
      }
    ],
    keyBenefits: [
      {
        title: "Avoid Heavy Daily MCA Fines",
        desc: "Prevent statutory delay penalty of ₹100 per day per form on delayed filings."
      },
      {
        title: "Protect Director DIN Status",
        desc: "Prevent deactivation of Director Identification Numbers (DINs) and disqualification under Section 164."
      },
      {
        title: "Maintain Active Company Standing",
        desc: "Prevent the ROC from striking off the company name or freezing bank accounts."
      }
    ],
    eligibility: [
      "All active companies registered under the Companies Act, 2013 / 1956."
    ],
    documentsRequired: {
      directors: [
        "Director DIN, PAN, and active DSC (Class 3)",
        "Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts)"
      ],
      registeredOffice: [
        "Notice of Annual General Meeting (AGM) and Board Resolutions",
        "Directors' Report and Auditor's Report"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Financials & Board Report Drafting",
        desc: "Prepare Directors' Report, AGM Notice, and statutory disclosure annexures."
      },
      {
        step: 2,
        title: "Filing Form AOC-4 (Financials)",
        desc: "Submit audited financial statements with ROC within 30 days of AGM."
      },
      {
        step: 3,
        title: "Filing Form MGT-7 / 7A (Annual Return)",
        desc: "Submit annual return within 60 days of AGM."
      },
      {
        step: 4,
        title: "Annual DIR-3 KYC Verification",
        desc: "Complete web or form-based KYC for all directors before September 30th."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "AOC-4 due within 30 days of AGM; MGT-7 due within 60 days of AGM."
    },
    taxCompliance: [
      "Statutory due date for AGM is September 30th for standard financial year ending March 31st.",
      "Filing INC-20A (Commencement of Business) within 180 days of incorporation for new entities."
    ],
    comparison: {
      title: "Comparison: Compliant Company vs Non-Compliant Company",
      headers: ["Parameter", "Compliant Company", "Non-Compliant Company"],
      rows: [
        ["Status on MCA Portal", "Active / Good Standing", "Active Non-Compliant / Defaulting"],
        ["Director Status", "Eligible to direct & incorporate entities", "DIN deactivated; risk of 5-year disqualification"],
        ["Penalties", "Standard filing fees only", "₹100/day per form + punitive director fines"],
        ["Bank & Investor Access", "Smooth loan approvals & funding", "Bank accounts frozen; loans rejected"]
      ]
    },
    growthImpact: [
      "Ensures unhindered business continuity and clean regulatory standing.",
      "Critical for clearing institutional vendor onboarding and investor audits."
    ],
    localInformation: "Administered digitally via the Ministry of Corporate Affairs V3 portal across all Indian ROC offices.",
    whyCorporateHub: [
      "Certified Company Secretaries drafting board reports and AGM registers.",
      "Proactive automated compliance tracking to eliminate late penalty risks."
    ],
    faqs: [
      {
        q: "What is the penalty if a company does not file annual ROC returns?",
        a: "MCA levies ₹100 per day per form indefinitely. Additionally, directors risk disqualification for 5 years and company strike-off."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" },
      { name: "Secretarial Compliance", slug: "secretarial-compliance", categorySlug: "corporate-compliance" }
    ]
  },

  "llp-compliance": {
    id: "llp-compliance",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "LLP Annual Compliance",
    locationHeading: "LLP Annual Compliance & Filings",
    heroIntro: "Annual statutory MCA compliance for Limited Liability Partnerships: Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) to keep your LLP active and penalty-free.",
    whatIs: "LLP Compliance represents the mandatory annual regulatory filings required by the Ministry of Corporate Affairs under the LLP Act, 2008 to disclose financial accounts, solvency, and partner details.",
    whoShouldChoose: [
      {
        title: "All Registered LLPs",
        desc: "Mandatory for every Limited Liability Partnership in India from the year of incorporation."
      }
    ],
    keyBenefits: [
      {
        title: "Avoid Daily MCA Penalties",
        desc: "Prevent statutory delay penalty of ₹100 per day on overdue Form 11 and Form 8."
      },
      {
        title: "Maintain Active Legal Status",
        desc: "Keep Designated Partner Identification Numbers (DPIN) active and valid."
      }
    ],
    eligibility: [
      "All active LLPs registered under the Limited Liability Partnership Act, 2008."
    ],
    documentsRequired: {
      directors: [
        "Designated Partner DSC and DPIN credentials",
        "Financial Statement of Accounts & Solvency"
      ],
      registeredOffice: [
        "Partner contribution and turnover details"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Filing Form 11 (Annual Return)",
        desc: "Submit annual return containing partner summary by May 30th."
      },
      {
        step: 2,
        title: "Filing Form 8 (Accounts & Solvency)",
        desc: "Submit statement of accounts and solvency declaration by October 30th."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Form 11 due by May 30; Form 8 due by October 30 annually."
    },
    taxCompliance: [
      "Income Tax return filing on Form ITR-5 by July 31st (or October 31st if audit applies)."
    ],
    comparison: {
      title: "Comparison: LLP Form 11 vs LLP Form 8",
      headers: ["Form", "Filing Due Date", "Key Contents"],
      rows: [
        ["Form 11", "May 30th annually", "Summary of partners, capital contributions, and business activities"],
        ["Form 8", "October 30th annually", "Financial statement of accounts and partner solvency declaration"]
      ]
    },
    growthImpact: [
      "Maintains clean enterprise credit history with banking institutions.",
      "Facilitates easy conversion to Private Limited Company when raising venture capital."
    ],
    localInformation: "Filed digitally through MCA V3 portal.",
    whyCorporateHub: [
      "Dedicated secretarial team handling Form 11 and Form 8 with zero portal errors.",
      "Automated reminder alerts months in advance of statutory due dates."
    ],
    faqs: [
      {
        q: "Is Form 8 filing required if the LLP had zero transactions during the year?",
        a: "Yes. Even an LLP with zero transactions (Nil return) must file Form 8 and Form 11 annually."
      }
    ],
    relatedServices: [
      { name: "LLP Registration", slug: "llp-reg", categorySlug: "business-registration" },
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" }
    ]
  },

  "secretarial-compliance": {
    id: "secretarial-compliance",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "Secretarial Compliance & Audits",
    locationHeading: "Secretarial Compliance & Governance Services",
    heroIntro: "Company Secretarial support for drafting board minutes, AGM notices, statutory register maintenance, share allotments (PAS-3), director changes (DIR-12), and Secretarial Audits (MR-3).",
    whatIs: "Secretarial Compliance ensures an enterprise adheres strictly to the corporate governance provisions of the Companies Act, Secretarial Standards (SS-1 and SS-2) issued by ICSI, and statutory register rules.",
    whoShouldChoose: [
      {
        title: "Growing Private Companies",
        desc: "Entities issuing new shares, adding directors, or altering constitutional charters (MOA/AOA)."
      },
      {
        title: "Medium & Large Enterprises",
        desc: "Companies requiring mandatory Secretarial Audit under Section 204."
      }
    ],
    keyBenefits: [
      {
        title: "Complete Corporate Governance",
        desc: "Legally sound board resolutions, minutes books, and shareholder notices."
      },
      {
        title: "Flawless Share Allotments",
        desc: "Proper PAS-3 filing, stamp duty payment, and share certificate issuance."
      }
    ],
    eligibility: [
      "Any company incorporated under the Companies Act, 2013."
    ],
    documentsRequired: {
      directors: [
        "Board resolutions and minutes records",
        "Shareholder register and cap table details"
      ],
      registeredOffice: [
        "Existing MOA, AOA, and statutory registers"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Drafting Notice & Agenda",
        desc: "Prepare compliant notices for Board and General Meetings."
      },
      {
        step: 2,
        title: "Executing Resolutions & Minutes",
        desc: "Document board resolutions and maintain minutes books."
      },
      {
        step: 3,
        title: "Filing Event-Based MCA Forms",
        desc: "File DIR-12, PAS-3, SH-7, or MGT-14 as required."
      }
    ],
    timeline: {
      duration: "Ongoing / Event-Based",
      qualification: "Event-based forms filed within 30 days of board/shareholder approval."
    },
    taxCompliance: [
      "Payment of state stamp duty on share certificates within 60 days of allotment."
    ],
    comparison: {
      title: "Comparison: Event-Based Compliance vs Annual Compliance",
      headers: ["Type", "Trigger", "Example Forms"],
      rows: [
        ["Annual Compliance", "Fixed yearly statutory schedule", "AOC-4, MGT-7, DIR-3 KYC"],
        ["Event-Based Compliance", "Triggered by corporate actions", "DIR-12 (Director change), PAS-3 (Share allotment), INC-22 (Address change)"]
      ]
    },
    growthImpact: [
      "Ensures cap table and shareholding records are 100% legally clean for investor due diligence.",
      "Eliminates internal shareholder disputes through formal minutes documentation."
    ],
    localInformation: "Supervised by certified Company Secretaries (ICSI) nationwide.",
    whyCorporateHub: [
      "Practicing CS team ensuring adherence to ICSI secretarial standards.",
      "Turn-key management of share issuances and director appointments."
    ],
    faqs: [
      {
        q: "What is Form DIR-12 used for?",
        a: "Form DIR-12 must be filed with the MCA within 30 days for appointment, resignation, or change in designation of a director."
      }
    ],
    relatedServices: [
      { name: "ROC Compliance", slug: "roc-compliance", categorySlug: "corporate-compliance" },
      { name: "Investor Documentation", slug: "investor-docs", categorySlug: "business-growth" }
    ]
  },

  "sebi-compliance": {
    id: "sebi-compliance",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "Listed Company & SEBI Compliance",
    locationHeading: "SEBI Compliance & Listed Company Advisory",
    heroIntro: "Advisory for public listed companies under SEBI (LODR) Regulations, quarterly financial disclosures, Prohibition of Insider Trading (PIT) compliance, and secretarial governance.",
    whatIs: "SEBI Compliance encompasses the comprehensive regulatory requirements mandated by the Securities and Exchange Board of India (SEBI) for companies listed on BSE and NSE stock exchanges.",
    whoShouldChoose: [
      {
        title: "BSE / NSE Mainboard & SME Listed Entities",
        desc: "Public listed corporations managing ongoing stock exchange disclosures."
      }
    ],
    keyBenefits: [
      {
        title: "Full SEBI LODR Adherence",
        desc: "Quarterly financial result disclosures (Regulation 33) and shareholding patterns (Regulation 31)."
      },
      {
        title: "Avoid Stock Exchange Penalties",
        desc: "Prevent trading suspensions and punitive fines from stock exchanges."
      }
    ],
    eligibility: [
      "Public limited companies listed on recognized stock exchanges."
    ],
    documentsRequired: {
      directors: [
        "Quarterly financial statements and limited review reports",
        "Compliance officer reports and board resolutions"
      ],
      registeredOffice: [
        "Insider trading disclosure registers"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Quarterly Compliance Calendar",
        desc: "Schedule audit committee and board meeting announcements on stock exchanges."
      },
      {
        step: 2,
        title: "Stock Exchange Portal Filings",
        desc: "Submit XBRL and PDF disclosures on BSE Listing Centre and NSE NEAPS portals."
      }
    ],
    timeline: {
      duration: "Quarterly & Annual Cycles",
      qualification: "Strict stock exchange submission timelines."
    },
    taxCompliance: [
      "Quarterly compliance certificate under Regulation 7(3) and Regulation 40(9)."
    ],
    comparison: {
      title: "Comparison: Mainboard Listing vs SME Platform Compliance",
      headers: ["Parameter", "Mainboard Listed", "SME Exchange (BSE SME / NSE Emerge)"],
      rows: [
        ["Financial Results", "Quarterly filings mandatory", "Half-yearly filings permitted"],
        ["Publication", "National English & Hindi newspapers", "Website disclosure sufficient"]
      ]
    },
    growthImpact: [
      "Maintains market liquidity, institutional shareholder confidence, and stock valuation stability."
    ],
    localInformation: "Administered in coordination with SEBI, BSE (Mumbai), and NSE (Mumbai).",
    whyCorporateHub: [
      "Experienced corporate secretarial team specializing in capital markets governance."
    ],
    faqs: [
      {
        q: "What is SEBI LODR Regulation 33?",
        a: "Regulation 33 mandates listed entities to submit quarterly financial results approved by the Board within 45 days of quarter end."
      }
    ],
    relatedServices: [
      { name: "IPO & SME Listing Advisory", slug: "ipo-sme-advisory", categorySlug: "corporate-compliance" }
    ]
  },

  "ipo-sme-advisory": {
    id: "ipo-sme-advisory",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "IPO & SME Listing Advisory",
    locationHeading: "IPO & SME Listing Advisory in India",
    heroIntro: "Comprehensive readiness advisory for listing your high-growth business on BSE SME and NSE Emerge platforms: eligibility assessment, DRHP drafting, merchant banker liaison, and public issue structuring.",
    whatIs: "IPO & SME Listing Advisory guides growing enterprises through the structural, financial, and legal transformation required to float an Initial Public Offering (IPO) on dedicated SME exchange platforms.",
    whoShouldChoose: [
      {
        title: "Profitable SMEs & Startups",
        desc: "Companies with positive net worth and track record seeking public capital without massive mainboard listing costs."
      }
    ],
    keyBenefits: [
      {
        title: "Access to Public Equity Capital",
        desc: "Raise growth capital from institutional and retail investors."
      },
      {
        title: "Tremendous Brand Prestige",
        desc: "Listed status elevates company standing with clients, vendors, and lenders."
      }
    ],
    eligibility: [
      "Post-issue paid up capital up to ₹25 Crores for SME platforms",
      "Minimum 2-3 years track record of profitability and positive net worth"
    ],
    documentsRequired: {
      directors: [
        "Past 3 years audited restated financials",
        "Promoter profile and business growth plan"
      ],
      registeredOffice: [
        "Constitutional corporate charters and statutory registers"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Eligibility & Structural Audit",
        desc: "Evaluate corporate structure and convert to Public Limited Company."
      },
      {
        step: 2,
        title: "Drafting Prospectus (DRHP)",
        desc: "Draft Draft Red Herring Prospectus in coordination with Merchant Bankers."
      },
      {
        step: 3,
        title: "Exchange In-Principal Approval & Issue Launch",
        desc: "Obtain exchange clearance, launch public subscription, and ring the opening bell."
      }
    ],
    timeline: {
      duration: "4 - 8 Months",
      qualification: "Structured over preparation, due diligence, DRHP filing, and IPO launch phases."
    },
    taxCompliance: [
      "Conversion to Public Limited Company; restatement of financial statements under Ind AS."
    ],
    comparison: {
      title: "Comparison: SME IPO vs Venture Capital Funding",
      headers: ["Parameter", "SME IPO", "Venture Capital"],
      rows: [
        ["Control", "Promoters retain operational control", "VCs demand board seats & veto rights"],
        ["Liquidity", "Publicly tradable stock provides exit liquidity", "Illiquid until next funding round or acquisition"],
        ["Valuation", "Public market transparent valuation", "Subject to private negotiation"]
      ]
    },
    growthImpact: [
      "Unlocks multi-crore public capital for factory expansion, technology R&D, and acquisitions."
    ],
    localInformation: "Executed on BSE SME (Mumbai) and NSE Emerge (Mumbai) platforms.",
    whyCorporateHub: [
      "End-to-end guidance from restating financials to ringing the listing bell."
    ],
    faqs: [
      {
        q: "What is the minimum post-issue paid-up capital for BSE SME listing?",
        a: "The post-issue paid-up capital of the company must not exceed ₹25 Crores for the SME platform."
      }
    ],
    relatedServices: [
      { name: "Business Valuation", slug: "business-valuation", categorySlug: "business-growth" },
      { name: "Due Diligence", slug: "due-diligence", categorySlug: "business-growth" }
    ]
  },

  "pf-esic-compliance": {
    id: "pf-esic-compliance",
    categorySlug: "corporate-compliance",
    categoryTitle: "Corporate Compliance",
    name: "PF & ESIC Compliances",
    locationHeading: "PF & ESIC Monthly Compliance & Registrations",
    heroIntro: "Employee Provident Fund (EPFO) and Employee State Insurance (ESIC) registration, monthly Electronic Challan-cum-Return (ECR) filing, employee UAN generation, and labor notice defense.",
    whatIs: "PF & ESIC Compliance represents the statutory labor welfare obligations under the EPF & MP Act, 1952 and ESI Act, 1948 ensuring employee social security and healthcare benefits.",
    whoShouldChoose: [
      {
        title: "Enterprises with 10+ or 20+ Employees",
        desc: "ESIC is mandatory for entities with 10+ employees; PF is mandatory for entities with 20+ employees."
      }
    ],
    keyBenefits: [
      {
        title: "Statutory Labor Compliance",
        desc: "Prevent severe labor department penalties and arrest warrants."
      },
      {
        title: "Employee Healthcare & Retirement",
        desc: "Provides workforce medical coverage and retirement savings."
      }
    ],
    eligibility: [
      "Mandatory for businesses reaching employee count thresholds; voluntary registration allowed."
    ],
    documentsRequired: {
      directors: [
        "Employer PAN and Certificate of Incorporation",
        "Monthly salary / wage register with gross and basic components"
      ],
      registeredOffice: [
        "Employee Aadhaar, bank details, and previous UAN (if any)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Monthly Wage Processing",
        desc: "Calculate PF (12%) and ESIC (0.75% / 3.25%) contributions."
      },
      {
        step: 2,
        title: "Monthly ECR Generation & Payment",
        desc: "Upload ECR files on EPFO Unified Portal and ESIC portal by the 15th of each month."
      }
    ],
    timeline: {
      duration: "Monthly Filing Cycle",
      qualification: "Monthly returns due on or before the 15th of every month."
    },
    taxCompliance: [
      "Timely deposit of employee and employer contributions by the 15th of every month."
    ],
    comparison: {
      title: "Comparison: PF vs ESIC",
      headers: ["Scheme", "Threshold", "Contribution Rate"],
      rows: [
        ["Provident Fund (EPFO)", "Mandatory for 20+ employees (wages up to ₹15,000/mo)", "12% Employee + 12% Employer"],
        ["Employee State Insurance (ESIC)", "Mandatory for 10+ employees (wages up to ₹21,000/mo)", "0.75% Employee + 3.25% Employer"]
      ]
    },
    growthImpact: [
      "Boosts employee retention and satisfies vendor audit compliance for large corporate contracts."
    ],
    localInformation: "Administered through central Shram Suvidha and EPFO/ESIC online portals.",
    whyCorporateHub: [
      "Error-free monthly ECR preparation with zero mismatch penalties."
    ],
    faqs: [
      {
        q: "What is the due date for monthly PF and ESIC deposits?",
        a: "The 15th of each subsequent month is the mandatory deadline."
      }
    ],
    relatedServices: [
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" },
      { name: "ROC Compliance", slug: "roc-compliance", categorySlug: "corporate-compliance" }
    ]
  },

  // ==========================================
  // BUSINESS GROWTH
  // ==========================================
  "startup-funding": {
    id: "startup-funding",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "Startup Funding & Pitch Deck Advisory",
    locationHeading: "Startup Funding & Pitch Deck Advisory in India",
    heroIntro: "Strategic advisory for early-stage and growth fundraising: investor pitch deck creation, financial modeling, valuation justification, cap table management, and term sheet negotiations.",
    whatIs: "Startup Funding Advisory assists founders in structuring institutional fundraising campaigns from angel syndicates, venture capital firms, and family offices, ensuring compelling investment narratives and clean legal structures.",
    whoShouldChoose: [
      {
        title: "Seed & Pre-Series A Startups",
        desc: "Founders looking to raise ₹50 Lakhs to ₹20 Crores in institutional equity capital."
      }
    ],
    keyBenefits: [
      {
        title: "High-Impact Pitch Deck",
        desc: "Story-driven, visually compelling pitch presentations tailored to investor criteria."
      },
      {
        title: "Robust 5-Year Financial Model",
        desc: "Unit economics, customer acquisition cost (CAC), LTV, and revenue projections."
      }
    ],
    eligibility: [
      "Any innovative startup venture with measurable traction or a scalable prototype."
    ],
    documentsRequired: {
      directors: [
        "Business overview and founder resumes",
        "Current cap table and traction metrics"
      ],
      registeredOffice: [
        "Historical financial data and market size analysis"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Narrative & Deck Structuring",
        desc: "Build 12-15 slide investor presentation covering problem, solution, market, and traction."
      },
      {
        step: 2,
        title: "Financial Model & Cap Table Planning",
        desc: "Design detailed 5-year monthly projection model and dilution impact."
      },
      {
        step: 3,
        title: "Data Room Setup & Term Sheet Support",
        desc: "Organize virtual data room and advise during term sheet negotiations."
      }
    ],
    timeline: {
      duration: "2 - 6 Weeks",
      qualification: "Structured over deck creation, financial modeling, and investor readiness."
    },
    taxCompliance: [
      "Advisory on Section 56(2)(viib) angel tax exemptions and CCPS instrument structuring."
    ],
    comparison: {
      title: "Comparison: Equity Financing vs Convertible Notes (CCPS / SAFE)",
      headers: ["Instrument", "Valuation Requirement", "Speed to Close"],
      rows: [
        ["Direct Equity Shares", "Requires immediate fixed valuation", "Longer legal closing"],
        ["Compulsorily Convertible Preference Shares (CCPS)", "Structured with valuation caps / discounts", "Standard for Indian VC rounds"],
        ["i-SAFE Notes", "Defers valuation to subsequent priced round", "Fastest closing for seed rounds"]
      ]
    },
    growthImpact: [
      "Accelerates venture capital fundraising cycles and minimizes founder equity dilution."
    ],
    localInformation: "Advisory services tailored to startup hubs in Bengaluru, Mumbai, Delhi NCR, Hyderabad, and Ahmedabad.",
    whyCorporateHub: [
      "Deep experience structuring institutional VC funding rounds and investor agreements."
    ],
    faqs: [
      {
        q: "What is an i-SAFE note in Indian startup funding?",
        a: "An India-Simple Agreement for Future Equity (i-SAFE) is an agreement allowing founders to raise seed capital with the promise of issuing shares at a future priced round."
      }
    ],
    relatedServices: [
      { name: "Business Valuation", slug: "business-valuation", categorySlug: "business-growth" },
      { name: "Investor Documentation", slug: "investor-docs", categorySlug: "business-growth" }
    ]
  },

  "dpiit-recognition": {
    id: "dpiit-recognition",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "DPIIT Recognition & Startup Perks",
    locationHeading: "DPIIT Startup Recognition in India",
    heroIntro: "Get recognized under Startup India by the Department for Promotion of Industry and Internal Trade (DPIIT) to unlock 3-year Section 80-IAC tax holidays, angel tax waivers, and patent rebates.",
    whatIs: "DPIIT Recognition is the official government certification granted to innovative startups, unlocking major statutory exemptions, government tender bidding waivers, and intellectual property fee subsidies.",
    whoShouldChoose: [
      {
        title: "Private Limited Companies & LLPs under 10 Years",
        desc: "Startups working on innovative products, software, or scalable business models."
      }
    ],
    keyBenefits: [
      {
        title: "Section 80-IAC Tax Exemption",
        desc: "Eligible startups can apply for 100% tax holiday for 3 consecutive years."
      },
      {
        title: "Angel Tax Exemption",
        desc: "Raise funds without tax scrutiny under Section 56 of the Income Tax Act."
      },
      {
        title: "80% Patent & 50% TM Fee Rebate",
        desc: "Huge cost savings on IP registrations."
      }
    ],
    eligibility: [
      "Incorporated as Pvt Ltd or LLP within the last 10 years",
      "Turnover below ₹100 Crores in any preceding financial year",
      "Working towards innovation, development, or improvement of products/services"
    ],
    documentsRequired: {
      directors: [
        "Certificate of Incorporation and MOA/AOA or LLP Agreement",
        "Pitch Deck or product demonstration link",
        "Detailed write-up on innovation, job creation, and scalability"
      ],
      registeredOffice: [
        "Entity PAN and directorship details"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Innovation Narrative Formulation",
        desc: "Draft comprehensive innovation and scalability pitch aligned with DPIIT criteria."
      },
      {
        step: 2,
        title: "Startup India Portal Filing",
        desc: "Submit application with supporting deck and website links."
      },
      {
        step: 3,
        title: "DPIIT Certificate Grant",
        desc: "Receive official Certificate of Recognition with official QR code."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "Subject to DPIIT evaluation scrutiny."
    },
    taxCompliance: [
      "Separate application before the Inter-Ministerial Board (IMB) for Section 80-IAC approval."
    ],
    comparison: {
      title: "Comparison: Standard Entity vs DPIIT Recognized Startup",
      headers: ["Benefit", "Standard Company", "DPIIT Recognized Startup"],
      rows: [
        ["Income Tax Holiday", "Standard 22% corporate tax", "100% tax exemption for 3 years (80-IAC)"],
        ["Angel Tax Waiver", "Subject to scrutiny", "Complete exemption on premium share allotment"],
        ["Government Tenders", "Requires prior turnover & experience", "Exempt from prior turnover & EMD requirements"]
      ]
    },
    growthImpact: [
      "Substantially improves cash retention and investor attractiveness."
    ],
    localInformation: "Universal national certification valid across all states.",
    whyCorporateHub: [
      "Expertise in drafting winning innovation narratives with 100% approval track record."
    ],
    faqs: [
      {
        q: "How long does DPIIT recognition remain valid?",
        a: "Valid up to 10 years from the date of incorporation or until turnover exceeds ₹100 Crores."
      }
    ],
    relatedServices: [
      { name: "Startup Funding", slug: "startup-funding", categorySlug: "business-growth" },
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" }
    ]
  },

  "project-cma": {
    id: "project-cma",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "Project Report & CMA Data for Bank Loans",
    locationHeading: "Project Report & CMA Data for Bank Loans",
    heroIntro: "Detailed Project Reports (DPR) and Credit Monitoring Arrangement (CMA) Data prepared by Chartered Accountants for bank loan approvals, CC limits, term loans, and government subsidy schemes.",
    whatIs: "CMA Data and Detailed Project Reports provide the standardized financial ratios, cash flow projections, and debt-service coverage calculations required by commercial banks and financial institutions for credit sanctions.",
    whoShouldChoose: [
      {
        title: "Businesses Applying for Bank Loans",
        desc: "Enterprises seeking working capital cash credit (CC) limits, overdrafts, or machinery term loans."
      }
    ],
    keyBenefits: [
      {
        title: "Bank Compliant Form I to Form VI",
        desc: "Standardized CMA format accepted by public and private commercial banks."
      },
      {
        title: "Optimal DSCR & Financial Ratios",
        desc: "Structured to meet bank benchmark ratios for fast loan sanctioning."
      }
    ],
    eligibility: [
      "Any business enterprise applying for bank credit facilities."
    ],
    documentsRequired: {
      directors: [
        "Past 3 years audited financials (for existing businesses)",
        "Bank statements for last 12 months",
        "Cost estimates of proposed machinery / land / construction"
      ],
      registeredOffice: [
        "Sanction letters of existing bank facilities (if any)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Project Cost & Working Capital Estimation",
        desc: "Analyze project capital expenditure, raw material cycles, and revenue projections."
      },
      {
        step: 2,
        title: "CMA Formulation & Ratio Analysis",
        desc: "Prepare 5-year comparative statements, MPBF calculations, and DSCR analysis."
      },
      {
        step: 3,
        title: "Report Delivery & Bank Liaison",
        desc: "Deliver CA-certified DPR and assist in answering bank credit officer queries."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Fast-track delivery for urgent loan sanction schedules."
    },
    taxCompliance: [
      "Aligned with ICAI valuation standards and RBI lending guidelines."
    ],
    comparison: {
      title: "Comparison: Basic Financial Projections vs CA-Certified CMA Data",
      headers: ["Parameter", "Basic Projections", "Certified CMA Data"],
      rows: [
        ["Bank Acceptance", "Frequently rejected by credit officers", "Strictly compliant with RBI Tandon/Chore committee norms"],
        ["Ratio Coverage", "Basic revenue estimates", "Full DSCR, Current Ratio, TOL/TNW, and MPBF calculations"]
      ]
    },
    growthImpact: [
      "Secures multi-crore bank credit lines to fuel manufacturing and operational expansion."
    ],
    localInformation: "Prepared for all leading banks including SBI, HDFC, ICICI, Axis, Bank of Baroda, and PNB.",
    whyCorporateHub: [
      "Chartered Accountants experienced in resolving bank credit queries promptly."
    ],
    faqs: [
      {
        q: "What is DSCR in a bank project report?",
        a: "Debt Service Coverage Ratio (DSCR) measures the ability of a business to repay its loan principal and interest from operational cash flows. Banks typically look for a DSCR of 1.5 to 2.0."
      }
    ],
    relatedServices: [
      { name: "Business Valuation", slug: "business-valuation", categorySlug: "business-growth" },
      { name: "Accounting & Bookkeeping", slug: "acc-bookkeeping", categorySlug: "accounting-taxation" }
    ]
  },

  "business-valuation": {
    id: "business-valuation",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "Business Valuation Report",
    locationHeading: "Business Valuation Report by Registered Valuers",
    heroIntro: "Certified business and equity valuation reports issued by IBBI Registered Valuers and Chartered Accountants under Discounted Cash Flow (DCF), NAV, and Market Multiple methods for fundraising and M&A.",
    whatIs: "Business Valuation is the statutory and financial calculation of the economic fair market value of an enterprise or its shares, mandatory for share allotment to investors under Section 56 of the Income Tax Act and Companies Act, 2013.",
    whoShouldChoose: [
      {
        title: "Startups Raising Equity Rounds",
        desc: "Required for issuing shares or CCPS to angel investors, venture funds, or foreign investors (FDI/FEMA)."
      },
      {
        title: "Mergers & Acquisitions",
        desc: "Determining swap ratios and fair transaction prices."
      }
    ],
    keyBenefits: [
      {
        title: "IBBI & CA Certified",
        desc: "Compliant with Income Tax Rule 11UA and Section 247 of Companies Act."
      },
      {
        title: "DCF & Market Multiples",
        desc: "Scientifically robust valuation methodology defensible before tax authorities."
      }
    ],
    eligibility: [
      "Any business issuing shares at a premium or undertaking restructuring."
    ],
    documentsRequired: {
      directors: [
        "5-year management-certified projected financial statements",
        "Audited Balance Sheets for past 3 years",
        "Current cap table and details of proposed investment round"
      ],
      registeredOffice: [
        "Company constitutional charters"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Methodology Selection & Projection Audit",
        desc: "Evaluate appropriate valuation method (DCF, NAV, PE / EBITDA multiples)."
      },
      {
        step: 2,
        title: "Discount Rate & Terminal Value Computation",
        desc: "Calculate WACC (Weighted Average Cost of Capital) and enterprise value."
      },
      {
        step: 3,
        title: "Issuance of Certified Valuation Report",
        desc: "Deliver official signed Valuation Report with UDIN / IBBI registration credentials."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Subject to financial projection verification."
    },
    taxCompliance: [
      "Mandatory adherence to Income Tax Rule 11UA(2) and FEMA pricing guidelines."
    ],
    comparison: {
      title: "Comparison: DCF Method vs NAV Method",
      headers: ["Methodology", "Best Suited For", "Key Driver"],
      rows: [
        ["Discounted Cash Flow (DCF)", "Tech startups & high-growth ventures", "Future cash flow generation potential"],
        ["Net Asset Value (NAV)", "Asset-heavy manufacturing & real estate", "Historical book value of tangible assets"]
      ]
    },
    growthImpact: [
      "Ensures smooth closing of funding rounds without tax penalties under Angel Tax provisions."
    ],
    localInformation: "Issued by IBBI Registered Valuers recognized across India and RBI/FEMA authorities.",
    whyCorporateHub: [
      "Registered Valuers with extensive track record in venture capital equity pricing."
    ],
    faqs: [
      {
        q: "Who is authorized to issue a valuation report for share allotment in India?",
        a: "For Companies Act and FEMA compliance, an IBBI Registered Valuer is mandatory. For Income Tax Rule 11UA DCF valuation, a Merchant Banker or practicing CA is required."
      }
    ],
    relatedServices: [
      { name: "Startup Funding", slug: "startup-funding", categorySlug: "business-growth" },
      { name: "Investor Documentation", slug: "investor-docs", categorySlug: "business-growth" }
    ]
  },

  "investor-docs": {
    id: "investor-docs",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "Investor Documentation (SHA / SSA / Term Sheets)",
    locationHeading: "Investor Documentation & Legal Drafting",
    heroIntro: "Expert corporate drafting and legal negotiation for Term Sheets, Shareholders Agreements (SHA), Share Subscription Agreements (SSA), Founder Vesting Deeds, and ESOP Schemes.",
    whatIs: "Investor Documentation forms the binding legal framework governing investment transactions, founder equity vesting, board governance, veto matters, liquidation preferences, and exit rights.",
    whoShouldChoose: [
      {
        title: "Founders Closing Investment Rounds",
        desc: "Securing favorable governance terms, non-compete clauses, and anti-dilution protections."
      }
    ],
    keyBenefits: [
      {
        title: "Founder Protection",
        desc: "Prevent loss of company control through carefully structured reserved matters and board rights."
      },
      {
        title: "Clear Exit & Liquidation Rights",
        desc: "Clearly define Tag-Along, Drag-Along, and ROFR rights."
      }
    ],
    eligibility: [
      "Any startup or enterprise entering equity investment transactions."
    ],
    documentsRequired: {
      directors: [
        "Agreed Term Sheet or commercial summary",
        "Cap table details and constitutional documents"
      ],
      registeredOffice: [
        "Prior investment agreements (if any)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Term Sheet Drafting / Review",
        desc: "Draft or redline commercial and governance terms."
      },
      {
        step: 2,
        title: "Drafting SHA & SSA Contracts",
        desc: "Draft full definitive agreements including warranties, representations, and vesting."
      },
      {
        step: 3,
        title: "Execution & Stamp Duty Payment",
        desc: "Coordinate digital signing and state stamp duty payment."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "Includes negotiation rounds with investor legal counsel."
    },
    taxCompliance: [
      "Compliance with state stamp duty regulations on corporate contracts."
    ],
    comparison: {
      title: "Comparison: Term Sheet vs Definitive Agreements (SHA/SSA)",
      headers: ["Agreement", "Legal Enforceability", "Detail Level"],
      rows: [
        ["Term Sheet", "Generally non-binding (except exclusivity & confidentiality)", "High-level summary of commercial terms"],
        ["Shareholders Agreement (SHA)", "Legally binding and enforceable", "Comprehensive clauses on governance, voting, and exit"]
      ]
    },
    growthImpact: [
      "Establishes institutional governance foundation and prevents co-founder disputes."
    ],
    localInformation: "Drafted in compliance with the Indian Contract Act, 1872 and Companies Act, 2013.",
    whyCorporateHub: [
      "Corporate advocates experienced in venture capital negotiations on founder-friendly terms."
    ],
    faqs: [
      {
        q: "What is reverse vesting for founders in an investment agreement?",
        a: "Reverse vesting requires founders to earn back their existing shares over a 3-4 year period, ensuring founder commitment to the startup post-funding."
      }
    ],
    relatedServices: [
      { name: "Startup Funding", slug: "startup-funding", categorySlug: "business-growth" },
      { name: "Business Valuation", slug: "business-valuation", categorySlug: "business-growth" }
    ]
  },

  "due-diligence": {
    id: "due-diligence",
    categorySlug: "business-growth",
    categoryTitle: "Business Growth",
    name: "Due Diligence (Financial, Legal & Tax)",
    locationHeading: "Due Diligence Services for M&A & Funding",
    heroIntro: "Comprehensive financial, legal, secretarial, and tax due diligence audits for acquisitions, venture capital investments, joint ventures, and corporate buyouts.",
    whatIs: "Due Diligence is an exhaustive investigation and verification of an enterprise's financial records, tax filings, legal contracts, regulatory compliances, and intellectual property ownership before a major investment or acquisition.",
    whoShouldChoose: [
      {
        title: "Investors & Acquirers",
        desc: "Verifying target company claims, identifying hidden liabilities, and mitigating risk."
      },
      {
        title: "Companies Preparing for Funding/Exit",
        desc: "Vendor due diligence to identify and fix red flags prior to investor audits."
      }
    ],
    keyBenefits: [
      {
        title: "Identify Red Flags & Liabilities",
        desc: "Discover undisclosed tax claims, labor disputes, or contract vulnerabilities."
      },
      {
        title: "Data Room Structuring",
        desc: "Organize Virtual Data Room for clean, swift investor review."
      }
    ],
    eligibility: [
      "Any business enterprise involved in funding, M&A, or strategic partnerships."
    ],
    documentsRequired: {
      directors: [
        "Historical corporate, financial, and tax records for last 3-5 years",
        "Material customer, vendor, and employee contracts",
        "Litigation notices and intellectual property registrations"
      ],
      registeredOffice: [
        "Corporate statutory registers and secretarial filings"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Checklist & Data Room Setup",
        desc: "Issue comprehensive information checklist and set up secure data room."
      },
      {
        step: 2,
        title: "Audit & Analysis",
        desc: "Deep-dive review of financial books, tax positions, labor records, and legal agreements."
      },
      {
        step: 3,
        title: "Due Diligence Report (DDR) Issuance",
        desc: "Deliver executive report detailing red flags, risk assessments, and remediation steps."
      }
    ],
    timeline: {
      duration: "1 - 3 Weeks",
      qualification: "Depends on enterprise transaction size."
    },
    taxCompliance: [
      "Comprehensive verification of past 3 years GST, Income Tax, TDS, and ROC filings."
    ],
    comparison: {
      title: "Comparison: Standard Statutory Audit vs Due Diligence Audit",
      headers: ["Parameter", "Statutory Audit", "Due Diligence Audit"],
      rows: [
        ["Objective", "Verify compliance with accounting standards", "Investigate commercial viability, risks, and undisclosed liabilities"],
        ["Scope", "Sample testing of historical numbers", "Exhaustive review of contracts, operational risks, and IP ownership"]
      ]
    },
    growthImpact: [
      "Provides deal certainty and protects investors from costly post-acquisition surprises."
    ],
    localInformation: "Conducted nationally across India.",
    whyCorporateHub: [
      "Integrated team of Chartered Accountants, Company Secretaries, and Corporate Lawyers."
    ],
    faqs: [
      {
        q: "What is Vendor Due Diligence?",
        a: "Vendor Due Diligence is commissioned by the selling company to identify and rectify compliance gaps before presenting the business to prospective buyers or investors."
      }
    ],
    relatedServices: [
      { name: "Investor Documentation", slug: "investor-docs", categorySlug: "business-growth" },
      { name: "Audit & Assurance", slug: "audit-assurance", categorySlug: "accounting-taxation" }
    ]
  },

  // ==========================================
  // LICENSES & CERTIFICATIONS
  // ==========================================
  "fssai-lic": {
    id: "fssai-lic",
    categorySlug: "licenses-certifications",
    categoryTitle: "Licenses & Certifications",
    name: "FSSAI Food Safety License",
    locationHeading: "FSSAI Food Safety License Registration",
    heroIntro: "Obtain your 14-digit FSSAI Food Safety License (Basic Registration, State License, or Central License) on the FoSCoS portal for restaurants, cloud kitchens, food manufacturers, and repackers.",
    whatIs: "An FSSAI License is a statutory authorization issued by the Food Safety and Standards Authority of India (FSSAI) under the Food Safety and Standards Act, 2006, certifying that food products meet safety, hygienic, and nutritional standards.",
    whoShouldChoose: [
      {
        title: "Restaurants, Cafes & Cloud Kitchens",
        desc: "Food outlets preparing, cooking, and serving meals to consumers or through Swiggy/Zomato."
      },
      {
        title: "Food Manufacturers & Repackers",
        desc: "Enterprises processing, packaging, or warehousing packaged consumer food products."
      },
      {
        title: "Food Importers & Exporters",
        desc: "Businesses importing or exporting food products requiring Central FSSAI License."
      }
    ],
    keyBenefits: [
      {
        title: "14-Digit FSSAI Registration Number",
        desc: "Mandatory identifier printed on all food packaging and invoices."
      },
      {
        title: "Swiggy, Zomato & Blinkit Onboarding",
        desc: "Mandatory requirement to list on e-commerce food delivery portals."
      },
      {
        title: "Consumer Trust & Legal Compliance",
        desc: "Avoid severe municipal health penalties and operational closure notices."
      }
    ],
    eligibility: [
      "Basic Registration: Annual turnover up to ₹12 Lakhs",
      "State License: Annual turnover between ₹12 Lakhs and ₹20 Crores",
      "Central License: Annual turnover exceeding ₹20 Crores or operating in multiple states"
    ],
    documentsRequired: {
      directors: [
        "Applicant ID and address proof (Aadhaar / PAN)",
        "List of food categories, product names, and equipment"
      ],
      registeredOffice: [
        "Premises rent agreement and property owner NOC / Electricity bill",
        "Kitchen layout plan and water test report (for manufacturing / state licenses)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Tier & Category Mapping",
        desc: "Determine eligible tier (Basic / State / Central) and map food category codes on FoSCoS."
      },
      {
        step: 2,
        title: "Online Application Filing",
        desc: "Submit Form A / Form B on the FoSCoS portal with supporting floor plans and NOC."
      },
      {
        step: 3,
        title: "Verification & License Generation",
        desc: "Food Safety Officer review and instant generation of 14-digit FSSAI Certificate."
      }
    ],
    timeline: {
      duration: "5 - 10 Business Days",
      qualification: "Basic registration in 3-5 days; State and Central licenses in 7-10 days."
    },
    taxCompliance: [
      "FSSAI license valid from 1 to 5 years; renewal must be filed 30 days prior to expiry.",
      "Annual return Form D-1 for food manufacturers by May 31st."
    ],
    comparison: {
      title: "Comparison: FSSAI Basic vs State vs Central",
      headers: ["Parameter", "Basic Registration", "State License", "Central License"],
      rows: [
        ["Turnover Cap", "Under ₹12 Lakhs / yr", "₹12 Lakhs to ₹20 Crores / yr", "Above ₹20 Crores / yr or multi-state"],
        ["Typical Entity", "Home bakers, small stalls", "Restaurants, cloud kitchens, mid-scale makers", "Large FMCG, multi-state chains, importers"],
        ["Issuing Authority", "Local Municipal Officer", "State Food Safety Authority", "Central FSSAI Head Office"]
      ]
    },
    growthImpact: [
      "Unlocks nationwide retail distribution and commercial supermarket listings.",
      "Protects brand reputation from food adulteration allegations."
    ],
    localInformation: "Administered through the Food Safety and Standards Authority of India (FoSCoS) portal across all states.",
    whyCorporateHub: [
      "Fast-track FoSCoS filing with zero query rejections.",
      "End-to-end assistance on food category selection and aggregator listing."
    ],
    faqs: [
      {
        q: "What is the penalty for operating a food business without an FSSAI license?",
        a: "Operating without an FSSAI license can result in imprisonment up to 6 months and monetary fines up to ₹5 Lakhs under Section 63 of the FSS Act."
      }
    ],
    relatedServices: [
      { name: "Food & Franchisee Business Setup", slug: "food-franchisee", categorySlug: "business-registration" },
      { name: "Trademark Registration", slug: "tm-reg", categorySlug: "intellectual-property" }
    ]
  },

  "iec-code": {
    id: "iec-code",
    categorySlug: "licenses-certifications",
    categoryTitle: "Licenses & Certifications",
    name: "Import Export Code (IEC)",
    locationHeading: "Import Export Code (IEC) Registration in India",
    heroIntro: "Obtain your lifetime-valid 10-digit Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) for international merchandise and service trade.",
    whatIs: "Import Export Code (IEC) is a mandatory 10-digit identification number issued by the DGFT, Ministry of Commerce and Industry, enabling businesses to clear customs, ship goods globally, and process foreign inward remittances.",
    whoShouldChoose: [
      {
        title: "Importers & Exporters of Goods",
        desc: "Businesses bringing goods into India or shipping products to international buyers."
      },
      {
        title: "Cross-Border Service Providers",
        desc: "Consultants, developers, and digital agencies receiving payments from foreign clients."
      }
    ],
    keyBenefits: [
      {
        title: "Lifetime Validity",
        desc: "No renewal fees required; valid for the lifetime of the business."
      },
      {
        title: "Customs & Port Clearance",
        desc: "Mandatory for Indian Customs EDI clearance at sea, air, and dry ports."
      },
      {
        title: "Export Incentive Schemes",
        desc: "Avail duty drawbacks and incentives under RoDTEP and Advance Authorization."
      }
    ],
    eligibility: [
      "Any registered business entity or individual with a valid PAN and bank account."
    ],
    documentsRequired: {
      directors: [
        "Entity PAN Card copy",
        "Aadhaar / Passport of authorized signatory",
        "Bank Certificate or Cancelled Cheque with printed company name"
      ],
      registeredOffice: [
        "Registered office address proof (Electricity bill / Rent agreement)"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "DGFT Profile Creation",
        desc: "Set up profile with DSC or Aadhaar OTP verification."
      },
      {
        step: 2,
        title: "Online IEC Form Filing",
        desc: "Submit online application with verified bank credentials."
      },
      {
        step: 3,
        title: "Instant e-IEC Certificate Generation",
        desc: "Receive official 10-digit IEC e-Certificate from DGFT."
      }
    ],
    timeline: {
      duration: "1 - 2 Business Days",
      qualification: "Instant issuance upon successful bank account API validation."
    },
    taxCompliance: [
      "Mandatory annual online confirmation update between April and June on DGFT portal."
    ],
    comparison: {
      title: "Comparison: IEC vs GST for Exports",
      headers: ["Parameter", "Import Export Code (IEC)", "Goods & Services Tax (GST)"],
      rows: [
        ["Issuing Authority", "DGFT (Ministry of Commerce)", "CBIC (Ministry of Finance)"],
        ["Purpose", "Customs clearance & international trade authorization", "Domestic and cross-border tax assessment / LUT filing"],
        ["Validity", "Lifetime valid", "Valid as long as active returns are filed"]
      ]
    },
    growthImpact: [
      "Unlocks international markets across the US, Europe, Middle East, and Asia.",
      "Enables opening multi-currency corporate bank accounts."
    ],
    localInformation: "Integrated with DGFT and Customs ICEGATE systems nationwide.",
    whyCorporateHub: [
      "Same-day IEC certificate allotment with zero documentation errors."
    ],
    faqs: [
      {
        q: "Is annual renewal required for IEC?",
        a: "There is no fee for renewal, but DGFT mandates an annual online confirmation update between April and June."
      }
    ],
    relatedServices: [
      { name: "APEDA and Spices Board", slug: "apeda-spice", categorySlug: "licenses-certifications" },
      { name: "Export Business Setup", slug: "export-setup", categorySlug: "business-registration" }
    ]
  },

  "iso-cert": {
    id: "iso-cert",
    categorySlug: "licenses-certifications",
    categoryTitle: "Licenses & Certifications",
    name: "ISO Certification (ISO 9001, 27001, 22000)",
    locationHeading: "ISO Certification in India",
    heroIntro: "Achieve globally recognized quality accreditations: ISO 9001:2015 (Quality Management), ISO 27001 (Information Security), ISO 14001 (Environmental), and ISO 22000 (Food Safety) to win government and corporate tenders.",
    whatIs: "ISO Certification is an internationally recognized quality standard credential confirming that an organization's management systems, security protocols, or manufacturing processes meet stringent international benchmarks.",
    whoShouldChoose: [
      {
        title: "B2B & Government Tender Bidders",
        desc: "Enterprises bidding for corporate contracts where ISO 9001 / ISO 27001 is a mandatory eligibility criterion."
      },
      {
        title: "SaaS & Tech Companies",
        desc: "Software platforms requiring ISO 27001 for enterprise client data security compliance."
      }
    ],
    keyBenefits: [
      {
        title: "Tender & Enterprise Vendor Eligibility",
        desc: "Qualify for government tenders and large corporate supply chain vendor lists."
      },
      {
        title: "Global Credibility & Trust",
        desc: "Showcase international quality standards to foreign and domestic clients."
      }
    ],
    eligibility: [
      "Any operating business entity with defined operational processes."
    ],
    documentsRequired: {
      directors: [
        "Business Registration Certificate",
        "Scope of business activities and organizational chart"
      ],
      registeredOffice: [
        "Sample sales invoice / work order copy"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Gap Analysis & SOP Documentation",
        desc: "Evaluate current operational processes and draft compliant Quality Manuals."
      },
      {
        step: 2,
        title: "Certification Audit",
        desc: "Accredited certification registrar conducts Stage 1 and Stage 2 compliance audit."
      },
      {
        step: 3,
        title: "Issuance of Official ISO Certificate",
        desc: "Receive official ISO Certificate valid for 3 years."
      }
    ],
    timeline: {
      duration: "3 - 5 Business Days",
      qualification: "Fast-track certification available for tender deadlines."
    },
    taxCompliance: [
      "Surveillance audits conducted annually during the 3-year validity cycle."
    ],
    comparison: {
      title: "Comparison: ISO 9001 vs ISO 27001 vs ISO 22000",
      headers: ["Standard", "Core Domain", "Target Industry"],
      rows: [
        ["ISO 9001:2015", "Quality Management Systems (QMS)", "All manufacturing & service businesses"],
        ["ISO 27001:2022", "Information Security Management (ISMS)", "SaaS, IT companies, FinTech, data centers"],
        ["ISO 22000:2018", "Food Safety Management (FSMS)", "Food processors, packaging, restaurants"]
      ]
    },
    growthImpact: [
      "Dramatically increases success rate in government procurement and Fortune 500 vendor selections."
    ],
    localInformation: "Issued by accredited international certification registrars recognized worldwide.",
    whyCorporateHub: [
      "Comprehensive SOP documentation support included with zero audit hassle."
    ],
    faqs: [
      {
        q: "What is the validity period of an ISO certificate?",
        a: "An ISO certificate is valid for 3 years, subject to annual surveillance audit confirmations."
      }
    ],
    relatedServices: [
      { name: "Startup India & MSME", slug: "startup-msme", categorySlug: "business-registration" },
      { name: "FSSAI Food Safety License", slug: "fssai-lic", categorySlug: "licenses-certifications" }
    ]
  },

  "drug-license": {
    id: "drug-license",
    categorySlug: "licenses-certifications",
    categoryTitle: "Licenses & Certifications",
    name: "Drug License (Retail & Wholesale)",
    locationHeading: "Drug License Registration in India",
    heroIntro: "Statutory licensing for retail medical stores, wholesale pharmaceutical distributors, and drug manufacturing units issued by the State Drugs Control Department under the Drugs and Cosmetics Act, 1940.",
    whatIs: "A Drug License is a mandatory statutory permit granted by the State Licensing Authority certifying that a retail pharmacy, wholesale distributor, or manufacturer meets infrastructure, refrigeration, and pharmacist requirements to store and dispense pharmaceutical drugs.",
    whoShouldChoose: [
      {
        title: "Retail Pharmacy Stores & Chemists",
        desc: "Retail outlets selling prescription and OTC medicines directly to consumers."
      },
      {
        title: "Wholesale Pharmaceutical Distributors",
        desc: "Distributors and stockists supplying medicines to hospitals and pharmacies."
      }
    ],
    keyBenefits: [
      {
        title: "Statutory License to Dispense Medicines",
        desc: "Legal permit to purchase, stock, and distribute pharmaceutical formulations."
      },
      {
        title: "Pharma Distribution Onboarding",
        desc: "Mandatory to procure medicines directly from pharmaceutical manufacturers."
      }
    ],
    eligibility: [
      "Minimum carpet area: 10 sq. meters for retail/wholesale; 15 sq. meters for combined retail & wholesale",
      "Registered Pharmacist (B.Pharm / D.Pharm) for retail; competent experienced person for wholesale",
      "Working refrigerator on premises"
    ],
    documentsRequired: {
      directors: [
        "Pharmacist registration certificate, pharmacy degree, and appointment letter",
        "Applicant ID and address proof"
      ],
      registeredOffice: [
        "Premises blueprint and ownership/rent agreement with property owner NOC",
        "Purchase invoice of refrigerator"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Premises & Pharmacist Verification",
        desc: "Audit layout measurements and pharmacist qualification credentials."
      },
      {
        step: 2,
        title: "Application Filing on State Portal",
        desc: "Submit Form 19 with supporting blueprints and affidavits."
      },
      {
        step: 3,
        title: "Drug Inspector Site Inspection",
        desc: "Drug inspector conducts physical site audit."
      },
      {
        step: 4,
        title: "Issuance of Form 20 / Form 21 Drug License",
        desc: "Receive official Retail (Form 20/21) or Wholesale (Form 20B/21B) Drug License."
      }
    ],
    timeline: {
      duration: "15 - 25 Business Days",
      qualification: "Subject to State Drug Inspector site inspection scheduling."
    },
    taxCompliance: [
      "Drug license valid for 5 years; retention fees payable every 5 years.",
      "Mandatory maintenance of Schedule H prescription registers."
    ],
    comparison: {
      title: "Comparison: Retail Drug License vs Wholesale Drug License",
      headers: ["Parameter", "Retail Drug License (Form 20/21)", "Wholesale Drug License (Form 20B/21B)"],
      rows: [
        ["Staff Requirement", "Mandatory Registered Pharmacist", "Competent person with 4+ years pharma experience or graduate"],
        ["Target Customer", "End consumers and patients", "Hospitals, retail pharmacies, and clinics"],
        ["Minimum Area", "10 sq. meters", "10 sq. meters"]
      ]
    },
    growthImpact: [
      "Enables opening retail pharmacy chain branches and distribution agencies."
    ],
    localInformation: "Administered by the Food and Drugs Control Administration (FDCA) of the respective state.",
    whyCorporateHub: [
      "Expert guidance on premise layout norms to pass Drug Inspector site inspections on the first attempt."
    ],
    faqs: [
      {
        q: "What is the minimum educational qualification required for a retail drug license?",
        a: "A qualified Registered Pharmacist holding a D.Pharm, B.Pharm, or Pharm.D registered with the State Pharmacy Council is mandatory."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "pvt-ltd", categorySlug: "business-registration" },
      { name: "GST Consultancy", slug: "gst-consultancy", categorySlug: "accounting-taxation" }
    ]
  },

  "apeda-spice": {
    id: "apeda-spice",
    categorySlug: "licenses-certifications",
    categoryTitle: "Licenses & Certifications",
    name: "APEDA and Spices Board Registration",
    locationHeading: "APEDA & Spices Board Registration in India",
    heroIntro: "Mandatory Registration-cum-Membership Certificate (RCMC) for exporters of agricultural food products, fresh fruits, vegetables, basmati rice (APEDA), and Indian spices (Spices Board CRES).",
    whatIs: "APEDA and Spices Board Registrations provide the statutory RCMC export certificates required by Customs and Export Promotion Councils under the Foreign Trade Policy to export scheduled agricultural commodities and spices from India.",
    whoShouldChoose: [
      {
        title: "Agro & Food Exporters",
        desc: "Exporters of rice, fruits, vegetables, processed foods, meat, and organic products."
      },
      {
        title: "Spice Traders & Manufacturers",
        desc: "Exporters of whole and powdered Indian spices (cardamom, pepper, turmeric, cumin, chili)."
      }
    ],
    keyBenefits: [
      {
        title: "Mandatory Customs Export Clearance",
        desc: "Customs will not clear scheduled agricultural cargo without an active APEDA/Spices Board RCMC."
      },
      {
        title: "Export Subsidies & Financial Assistance",
        desc: "Access government financial assistance for international market development, packaging, and sampling."
      }
    ],
    eligibility: [
      "Active Import Export Code (IEC) issued by DGFT",
      "Valid business registration and active bank account"
    ],
    documentsRequired: {
      directors: [
        "Import Export Code (IEC) copy",
        "Entity PAN and Aadhaar of authorized partner/director",
        "Bank Certificate / Cancelled Cheque"
      ],
      registeredOffice: [
        "Registered office address proof"
      ]
    },
    processSteps: [
      {
        step: 1,
        title: "Online Portal Profile Creation",
        desc: "Register on APEDA or Spices Board portal using IEC credentials."
      },
      {
        step: 2,
        title: "Filing Form & Commodity Selection",
        desc: "Select product categories and submit digital application."
      },
      {
        step: 3,
        title: "RCMC Certificate Issuance",
        desc: "Issuance of official Registration-cum-Membership Certificate valid for 5 years."
      }
    ],
    timeline: {
      duration: "5 - 7 Business Days",
      qualification: "Subject to Export Promotion Council verification."
    },
    taxCompliance: [
      "Quarterly export return submissions on the APEDA/Spices Board portal.",
      "RCMC valid for 5 years."
    ],
    comparison: {
      title: "Comparison: APEDA RCMC vs Spices Board CRES",
      headers: ["Council", "Covered Products", "Issuing Body"],
      rows: [
        ["APEDA", "Fruits, vegetables, rice, grains, processed foods, organic agro", "Agricultural and Processed Food Products Export Development Authority"],
        ["Spices Board", "52 scheduled spices, spice oils, oleoresins, curry powders", "Spices Board India (Ministry of Commerce)"]
      ]
    },
    growthImpact: [
      "Unlocks multi-million dollar export opportunities to Europe, USA, GCC countries, and Southeast Asia."
    ],
    localInformation: "Administered nationally under the Ministry of Commerce and Industry, Government of India.",
    whyCorporateHub: [
      "End-to-end setup including IEC allotment, RCMC issuance, and export subsidy advisory."
    ],
    faqs: [
      {
        q: "What is an RCMC in export trade?",
        a: "Registration-cum-Membership Certificate (RCMC) is an export authorization certificate issued by Export Promotion Councils certifying an enterprise as an authorized exporter of specific commodities."
      }
    ],
    relatedServices: [
      { name: "Import Export Code (IEC)", slug: "iec-code", categorySlug: "licenses-certifications" },
      { name: "Export Business Setup", slug: "export-setup", categorySlug: "business-registration" }
    ]
  }
};

// Helper to look up subservice details by ID or slug
export function getSubServiceDetail(subServiceId) {
  if (!subServiceId) return null;
  return subServiceDetailsData[subServiceId] || null;
}

// Helper to get all available sub-services
export function getAllSubServiceDetails() {
  return Object.values(subServiceDetailsData);
}
