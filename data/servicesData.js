export const servicesData = [
  {
    id: "business-registration",
    slug: "business-registration",
    title: "Business Registration",
    iconName: "IoDocumentOutline",
    shortDescription: "Complete legal structure registration for your business, startup, or enterprise.",
    accordionData: {
      about: {
        title: "About Business Registration",
        content: `Business registration is the fundamental legal step required to formalize your business structure in accordance with statutory regulations. Incorporating your business grants it a separate legal entity status, protects personal assets through limited liability, and unlocks access to corporate banking, investor capital, and government schemes.

Whether you are launching a startup, transforming a partnership, or establishing an international subsidiary, registering your entity ensures complete legal compliance and credibility in the market.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "pvt-ltd", name: "Private Limited Company", desc: "Ideal for startups and growing businesses seeking equity funding and limited liability." },
          { id: "llp-reg", name: "LLP Registration", desc: "Combines operational flexibility of a partnership with limited liability protection." },
          { id: "opc-reg", name: "One Person Company (OPC)", desc: "Own 100% single-member corporate entity with limited liability and separate legal identity." },
          { id: "sec8-ngo", name: "Section 8 Company (NGO)", desc: "Registration for charitable trusts, foundations, and non-profit social enterprises." },
          { id: "startup-msme", name: "Startup India & MSME", desc: "Government portal registration unlocking tax holidays, subsidies, and credit benefits." },
          { id: "business-structuring", name: "Business Structuring & Entity Selection", desc: "Strategic advice on selecting between Proprietorship, LLP, OPC, and Pvt Ltd before incorporation." },
          { id: "export-setup", name: "Export Business Setup", desc: "Complete setup for international commerce, DGFT IEC allotment, and customs approvals." },
          { id: "food-franchisee", name: "Food and Franchisee Business Setup", desc: "Turn-key legal setup including FSSAI licensing, shop permits, and franchisee agreements." },
          { id: "ecommerce-setup", name: "E-Commerce Business Setup", desc: "Legal, tax, trademark, and financial framework for Amazon, Flipkart, Meesho, and D2C brands." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "pvt-ltd",
            name: "Private Limited Company",
            tagline: "Most popular choice for tech startups & venture-backed entities",
            process: [
              "Digital Signature Certificate (DSC) & Director Identification Number (DIN) allotment",
              "Name Reservation via RUN / SPICe+ Part A portal",
              "Drafting Memorandum of Association (MOA) & Articles of Association (AOA)",
              "Filing SPICe+ Part B form with MCA for Certificate of Incorporation (COI)",
              "Automated allotment of PAN, TAN, EPFO, ESIC, and Bank Account setup"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["PAN Card of Directors", "Aadhaar Card / Passport", "Bank Statement / Utility Bill", "Registered Office Premises Proof & Rent Agreement"]
          },
          {
            id: "llp-reg",
            name: "LLP Registration",
            tagline: "Best for professional firms, agencies, and joint ventures",
            process: [
              "Designated Partner Identification Number (DPIN) & DSC application",
              "Name Reservation via FiLLiP portal",
              "Filing FiLLiP form for incorporation approval",
              "Drafting & executing LLP Agreement on stamp paper within 30 days"
            ],
            turnaround: "7 - 10 Business Days",
            documentsNeeded: ["Identity proof of partners", "Address proof of designated partners", "Proof of registered office address", "NOC from property owner"]
          },
          {
            id: "opc-reg",
            name: "One Person Company (OPC)",
            tagline: "100% single-member ownership with corporate limited liability",
            process: [
              "DSC procurement & Form INC-3 nominee consent execution",
              "Name reservation via SPICe+ Part A portal",
              "Drafting MOA & AOA with mandatory nominee clause",
              "Filing SPICe+ Part B form with MCA for Certificate of Incorporation"
            ],
            turnaround: "7 - 10 Business Days",
            documentsNeeded: ["PAN Card of sole member & nominee", "Identity proof of member & nominee", "Address proof of sole member & nominee", "Registered office premises proof"]
          },
          {
            id: "sec8-ngo",
            name: "Section 8 Company (NGO)",
            tagline: "For non-profit, educational, or social cause organizations",
            process: [
              "Name reservation for non-profit objectives",
              "License application under Section 8(1) of Companies Act 2013",
              "Drafting MOA & AOA with charitable objects clause",
              "Filing form SPICe+ for registration certificate and 12A / 80G tax exemptions"
            ],
            turnaround: "12 - 15 Business Days",
            documentsNeeded: ["PAN/Aadhaar of promoters & directors", "3-year projected income & expenditure statement", "Statement of work & social objectives", "Registered office address proof"]
          },
          {
            id: "startup-msme",
            name: "Startup India & MSME",
            tagline: "Unlock DPIIT startup recognition, tax holidays & MSME Udyam benefits",
            process: [
              "Udyam Registration on government portal for MSME classification",
              "DPIIT Startup India profile creation & pitch write-up filing",
              "Application for Section 80-IAC tax holiday and Angel Tax waiver",
              "Issuance of official Startup India & MSME Certificates"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Incorporation Certificate", "Brief pitch deck / business summary", "Entity PAN Card", "Aadhaar of authorized representative"]
          },
          {
            id: "business-structuring",
            name: "Business Structuring & Entity Selection",
            tagline: "Evaluate legal risk, tax impact, ownership, and funding options before registering",
            process: [
              "Analysis of co-founder relationships, equity split, and management roles",
              "Comparison of tax rates, profit withdrawal mechanisms, and compliance costs",
              "Assessment of liability risks and external equity funding requirements",
              "Customized recommendation of legal entity form (Pvt Ltd / LLP / OPC / Proprietorship)"
            ],
            turnaround: "1 - 2 Business Days",
            documentsNeeded: ["Proposed business activity overview", "Number of founders/partners", "Expected initial turnover & funding plans"]
          },
          {
            id: "export-setup",
            name: "Export Business Setup",
            tagline: "End-to-end setup for international trade, DGFT code & export licensing",
            process: [
              "Business entity registration for cross-border trade",
              "Import Export Code (IEC) application on DGFT portal",
              "Authorized Dealer (AD) Code registration with customs port",
              "Registration-cum-Membership Certificate (RCMC) with Export Promotion Council"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Entity PAN & Incorporation Certificate", "Bank Account Cancelled Cheque", "AD Code Authorization letter from bank", "Premises address proof"]
          },
          {
            id: "food-franchisee",
            name: "Food and Franchisee Business Setup",
            tagline: "Legal framework for restaurants, cloud kitchens & franchisee networks",
            process: [
              "Business entity registration (Pvt Ltd / LLP / OPC)",
              "FSSAI Food Safety License application (Basic / State / Central)",
              "Franchisee Agreement & Trademark licensing documentation drafting",
              "Shop & Establishment municipal license and Health NOC setup"
            ],
            turnaround: "7 - 12 Business Days",
            documentsNeeded: ["Promoter ID & address proof", "Kitchen/Premise blueprint & layout plan", "Rent agreement & NOC from landlord", "List of food categories & equipment"]
          },
          {
            id: "ecommerce-setup",
            name: "E-Commerce Business Setup",
            tagline: "Legal, brand, tax, and marketplace infrastructure for online sellers",
            process: [
              "Business entity selection & GST registration for online marketplace selling",
              "Trademark application filing within 24 hours for brand protection",
              "Product-specific licensing (FSSAI, Legal Metrology, BIS, IEC)",
              "Marketplace seller portal setup & accounting integration"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Promoter PAN & Aadhaar", "Business registration proof", "Bank account cancelled cheque", "Product brand details & logo"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "Government statutory fees are subject to portal revisions and actual state stamp duty variations.",
          "Turnaround times depend on MCA/ROC approval speeds and prompt submission of accurate documentation by the client.",
          "Digital Signature Certificates (DSC) require video verification from mandatory authorized signatories.",
          "All documents provided must be clear, legible, and legally valid under current regulatory norms."
        ]
      }
    }
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property",
    title: "Intellectual Property",
    iconName: "LuBrain",
    shortDescription: "Protect your brand name, trade secrets, inventions, copyrights, and design patents.",
    accordionData: {
      about: {
        title: "About Intellectual Property",
        content: `Intellectual Property (IP) safeguards your unique creations, brand names, trade secrets, artistic works, and technological innovations. Securing IP rights prevents unauthorized usage, counterfeiting, and brand infringement by competitors.

Our IP legal services empower startups and corporations to build enterprise valuation through strong portfolio defense, trademark registration, copyright filings, and IP advisory.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "tm-reg", name: "Trademark Registration", desc: "Comprehensive brand name, logo, and slogan protection across global classes." },
          { id: "tm-objection", name: "Trademark Objection & Hearing", desc: "Drafting replies to Section 9 & 11 examination reports and hearing representation." },
          { id: "tm-litigation", name: "Trademark Litigation", desc: "Expert legal representation in trademark hearings, oppositions, and infringement suits." },
          { id: "tm-renewal", name: "Trademark Renewal", desc: "Maintain active ® registration status every 10 years without losing brand protection." },
          { id: "tm-assignment", name: "Trademark Assignment", desc: "Legal transfer of trademark ownership with or without business goodwill." },
          { id: "brand-registry", name: "Brand Registry (Amazon & E-commerce)", desc: "Protect your products from counterfeiters and unauthorized sellers online." },
          { id: "copyright-reg", name: "Copyright Registration", desc: "Legal ownership for software code, original literature, artwork, and creative media." },
          { id: "copyright-licensing", name: "Copyright Licensing & Assignment", desc: "Commercial licensing contracts, rights assignment, and software IP transfers." },
          { id: "ip-advisory", name: "IP Advisory", desc: "Strategic IP portfolio management, trade secrets protection, and technology transfer." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "tm-reg",
            name: "Trademark Registration",
            tagline: "Secure ™ and ® status for your brand name & symbol",
            process: [
              "Comprehensive Trademark Search across 45 classes to ensure uniqueness",
              "Class selection & drafting TM-A application form",
              "Instant issuance of TM Application Receipt (Allows ™ usage immediately)",
              "Monitoring registry examination report & publication in TM Journal"
            ],
            turnaround: "Same-Day Filing (Final Certificate in 6 - 12 Months)",
            documentsNeeded: ["Brand Logo image / Word Mark", "Incorporation Certificate or ID proof", "User Affidavit (if trademark is already in use)"]
          },
          {
            id: "tm-objection",
            name: "Trademark Objection & Hearing",
            tagline: "Overcome Section 9 & Section 11 examination reports and registry hearings",
            process: [
              "Analysis of Examination Report grounds raised by TM Examiner",
              "Legal & factual response drafting with supporting usage evidence",
              "Submission of Reply to Examination Report within 30 days",
              "Preparation and legal representation at Trademark Hearing"
            ],
            turnaround: "30-Day Deadline for Reply Submission",
            documentsNeeded: ["TM Application Number & Examination Report", "Prior usage evidence (Invoices, website links, social media proof)", "Power of Attorney (TM-48)"]
          },
          {
            id: "tm-litigation",
            name: "Trademark Litigation",
            tagline: "Legal defense against TM objections, oppositions & infringement suits",
            process: [
              "Analysis of official Examination Report or Third-party Notice",
              "Drafting formal Reply to TM Examination Report within 30 days",
              "Preparing Evidence Affidavit & Counter-Statement for TM-O Oppositions",
              "Representation by legal counsel before the Trademark Hearing Registrar"
            ],
            turnaround: "Case-dependent (Scheduled by TM Registry)",
            documentsNeeded: ["TM Application Number", "Examination Report / Opposition Notice copy", "Prior usage proof, invoices, promotional materials"]
          },
          {
            id: "tm-renewal",
            name: "Trademark Renewal",
            tagline: "Renew ® status every 10 years to maintain lifetime ownership",
            process: [
              "Verification of TM expiration date and class details",
              "Drafting and filing Form TM-R with official renewal fee",
              "Tracking issuance of Official Renewal Certificate by TM Registry"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Original Trademark Registration Certificate", "TM Application Number", "Power of Attorney (TM-48)"]
          },
          {
            id: "tm-assignment",
            name: "Trademark Assignment",
            tagline: "Transfer trademark ownership rights during business sale, merger or founder exit",
            process: [
              "Verification of current trademark ownership status",
              "Drafting Deed of Assignment (with or without goodwill)",
              "Execution of Assignment Deed on appropriate stamp paper",
              "Filing Form TM-P with Trademark Registry for recordal of ownership change"
            ],
            turnaround: "5 - 7 Business Days for Filing",
            documentsNeeded: ["TM Registration / Application Certificate", "Identity/Incorporation proofs of Assignor & Assignee", "Executed Assignment Deed"]
          },
          {
            id: "brand-registry",
            name: "Brand Registry (Amazon & E-commerce)",
            tagline: "Protect your brand from hijackers & counterfeiters on e-commerce platforms",
            process: [
              "Filing pending or registered Trademark application",
              "Enrolling in Amazon Brand Registry / Flipkart Brand Protection portal",
              "Verification of brand ownership code",
              "Unlocking A+ Content, Brand Storefront, and automated counterfeit removal tools"
            ],
            turnaround: "2 - 4 Business Days",
            documentsNeeded: ["Pending / Registered TM Serial Number", "Active E-commerce seller account details", "Sample product imagery with brand logo"]
          },
          {
            id: "copyright-reg",
            name: "Copyright Registration",
            tagline: "Lock copyright protection for software code & creative media",
            process: [
              "Categorization of work under Copyright Act (Literary, Artistic, Software Code)",
              "Filing Form XIV with Copyright Office portal",
              "30-day mandatory public objection waiting window",
              "Review by Copyright Examiner and issuance of Registration Certificate (ROC)"
            ],
            turnaround: "2 - 4 Months",
            documentsNeeded: ["Complete copy of work / Source code file", "Author & Owner details", "No Objection Certificate (NOC) if applicant is not the author"]
          },
          {
            id: "copyright-licensing",
            name: "Copyright Licensing & Assignment",
            tagline: "Structure commercial licensing agreements and software IP transfers",
            process: [
              "Review of underlying copyright work and ownership credentials",
              "Structuring commercial terms (Territory, Duration, Exclusivity, Royalty)",
              "Drafting Copyright License Agreement or Copyright Assignment Deed",
              "Execution & legal documentation"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Copyright registration details (if registered)", "Creator/Owner & Licensee details", "Commercial terms summary"]
          },
          {
            id: "ip-advisory",
            name: "IP Advisory",
            tagline: "IP portfolio valuation, licensing strategy & NDA documentation",
            process: [
              "Comprehensive IP Audit of business assets & trade secrets",
              "Formulating IP commercialization and licensing strategies",
              "Drafting Non-Disclosure Agreements (NDA), IP Transfer Deeds, and Licensing Agreements",
              "Valuation & advisory for intellectual property monetization"
            ],
            turnaround: "Consultation / Project-based",
            documentsNeeded: ["Existing IP documents", "Business model summary", "Proposed agreement drafts"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "Trademark application approval is subject to statutory examination by the Trademark Registry.",
          "In the event of third-party oppositions, separate hearing representation fees may apply.",
          "Immediate right to use ™ applies upon filing; ® symbol can only be used after formal registration certificate grant."
        ]
      }
    }
  },
  {
    id: "accounting-taxation",
    slug: "accounting-taxation",
    title: "Accounting & Taxation",
    iconName: "MdAttachMoney",
    shortDescription: "End-to-end bookkeeping, GST filing, Income Tax Returns, and corporate financial advisory.",
    accordionData: {
      about: {
        title: "About Accounting & Taxation",
        content: `Streamlined accounting and precise tax compliance form the backbone of a financially healthy enterprise. Navigating regulatory taxation rules requires timely filing, audited books, and optimized tax planning.

We provide comprehensive Virtual CFO services, automated bookkeeping, GST return filings, corporate income tax returns, statutory audits, and strategic business advisory.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "acc-bookkeeping", name: "Accounting & Bookkeeping", desc: "Monthly ledger maintenance, bank reconciliation, and automated cloud accounting." },
          { id: "financial-reporting", name: "Financial Reporting", desc: "Customized management MIS, P&L, balance sheet, and cash flow analysis." },
          { id: "virtual-cfo", name: "Virtual CFO", desc: "Strategic financial leadership, cash flow modeling, MIS reporting, and investor metrics." },
          { id: "gst-consultancy", name: "GST Consultancy", desc: "GST registration, monthly GSTR-1 & 3B return filing, ITC optimization, and notices." },
          { id: "it-consultancy", name: "Income Tax Consultancy", desc: "Corporate & individual ITR filing, advance tax planning, and tax assessment support." },
          { id: "tds-compliance", name: "TDS Filings & Compliance", desc: "Quarterly TDS returns, Section 194T partner remuneration TDS, and TRACES correction statements." },
          { id: "audit-assurance", name: "Audit & Assurance", desc: "Statutory audits, tax audits under Section 44AB, and internal financial controls." },
          { id: "financial-performance", name: "Financial Performance Review", desc: "In-depth margin analysis, working capital gap evaluation, and debt position review." },
          { id: "business-consulting", name: "Business Consulting", desc: "Cost optimization, financial restructuring, and operational growth advisory." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "acc-bookkeeping",
            name: "Accounting & Bookkeeping",
            tagline: "Accurate financial records & real-time business reports",
            process: [
              "Setup on cloud accounting platform (Tally Prime, Zoho Books, QuickBooks)",
              "Monthly categorization of bank feeds, sales invoices & vendor bills",
              "Bank reconciliation & accounts receivable/payable tracking",
              "Generation of monthly P&L, Balance Sheet, and MIS reports"
            ],
            turnaround: "Monthly / Quarterly retainer",
            documentsNeeded: ["Bank Statements", "Sales Invoices & Purchase Bills", "Expense vouchers & salary registers"]
          },
          {
            id: "financial-reporting",
            name: "Financial Reporting",
            tagline: "Convert raw financial accounting data into actionable business intelligence",
            process: [
              "Review of underlying accounting data & trial balance ledger scrutiny",
              "Preparation of P&L Statement, Balance Sheet & Cash Flow Statement",
              "Financial ratio analysis & budget vs actual variance reporting",
              "Segment, branch, and product-level profitability reporting"
            ],
            turnaround: "Monthly / Quarterly reporting cycle",
            documentsNeeded: ["Accounting books & trial balance", "Bank statements", "Budget projections"]
          },
          {
            id: "virtual-cfo",
            name: "Virtual CFO",
            tagline: "Senior CFO expertise for your business at a fraction of the cost",
            process: [
              "Designation of dedicated Chartered Accountant as Virtual CFO",
              "Financial modeling, budgeting, and unit economics optimization",
              "Cash flow monitoring & working capital management",
              "Board deck presentation preparation and investor reporting"
            ],
            turnaround: "Monthly retainer service",
            documentsNeeded: ["Historical financial records", "Budget expectations", "Current cap table & bank account details"]
          },
          {
            id: "gst-consultancy",
            name: "GST Consultancy",
            tagline: "Hassle-free GST filings & ITC maximization",
            process: [
              "GST Registration application & GSTIN allotment",
              "Monthly GSTR-1 (Outward Supplies) & GSTR-3B (Tax Payment) filing",
              "GSTR-2B reconciliation to maximize Input Tax Credit (ITC)",
              "Filing annual GSTR-9 returns and managing GST audit notices"
            ],
            turnaround: "Monthly filings / 3-5 days for registration",
            documentsNeeded: ["GST Portal credentials", "Sales & Purchase registers", "Bank statements & purchase invoices"]
          },
          {
            id: "it-consultancy",
            name: "Income Tax Consultancy",
            tagline: "Tax optimization, ITR filing & advance tax planning",
            process: [
              "Computation of total taxable income & allowable tax deductions",
              "Calculation and payment advisory for Advance Tax quarterly installments",
              "Filing Income Tax Returns (ITR-1 to ITR-7) on Income Tax Portal",
              "Handling Section 143(1) intimations & tax assessment notices"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Form 16 / 16A", "Audited Balance Sheet & P&L", "Form 26AS & Annual Information Statement (AIS)"]
          },
          {
            id: "tds-compliance",
            name: "TDS Filings & Compliance",
            tagline: "Timely TDS deduction, deposit, Form 24Q/26Q returns & Section 194T compliance",
            process: [
              "Monthly TDS liability working across vendor, rent, professional & Section 194T partner payments",
              "Timely deposit of deducted TDS via government challans",
              "Preparation and filing of quarterly TDS returns (Form 24Q, 26Q, 27Q)",
              "TDS reconciliation with TRACES and Form 16/16A certificate generation"
            ],
            turnaround: "Quarterly filing cycle / Monthly deposit",
            documentsNeeded: ["Vendor payment registers & salary sheets", "TDS Challan receipts", "Partner credit/remuneration details"]
          },
          {
            id: "audit-assurance",
            name: "Audit & Assurance",
            tagline: "Independent audit reports & statutory compliance assurance",
            process: [
              "Scope definition and audit planning execution",
              "Verification of transactional vouchers, ledgers, and compliance registers",
              "Drafting Audit Report under Companies Act & Tax Audit Form 3CA/3CB/3CD",
              "Signing of audited financial statements by practicing CA"
            ],
            turnaround: "7 - 14 Business Days",
            documentsNeeded: ["Complete books of accounts", "Bank statements & fixed asset register", "Statutory return filings"]
          },
          {
            id: "financial-performance",
            name: "Financial Performance Review",
            tagline: "Diagnostic review of revenue trends, gross margins, cash blockage & working capital",
            process: [
              "Comprehensive review of revenue growth vs net profitability",
              "Margin leakage identification across purchase, sales, and logistics",
              "Working capital cycle analysis (Debtor days, inventory days, creditor days)",
              "Debt service coverage ratio (DSCR) & financial health assessment"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["P&L & Balance Sheet records", "Debtor & Creditor aging schedules", "Loan sanction letters & EMI schedules"]
          },
          {
            id: "business-consulting",
            name: "Business Consulting",
            tagline: "Strategic advisory for profitability & operational excellence",
            process: [
              "In-depth diagnostic review of business operations & cost structures",
              "Designing key performance indicators (KPIs) and internal controls",
              "Financial restructuring & debt advisory",
              "Implementation support for sustainable business growth"
            ],
            turnaround: "Assignment / Project-based",
            documentsNeeded: ["Business operations summary", "Past 3 years financial statements", "Organizational structure chart"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "Clients are required to furnish bank statements and sales invoices by the 5th of every month for timely filing.",
          "Penalties levied by tax portals due to delayed client document submission are payable by the client.",
          "Virtual CFO packages operate under monthly retainer agreements."
        ]
      }
    }
  },
  {
    id: "corporate-compliance",
    slug: "corporate-compliance",
    title: "Corporate Compliance",
    iconName: "GrGroup",
    shortDescription: "Annual ROC filings, board resolutions, DIN updates, and statutory company secretarial support.",
    accordionData: {
      about: {
        title: "About Corporate Compliance",
        content: `Every registered company and partnership must adhere to periodic statutory compliance mandates issued by the Ministry of Corporate Affairs (MCA). Failing to file annual returns results in heavy daily penalties and director disqualification.

Our secretarial team manages your ROC filings, LLP returns, statutory registers, SEBI disclosures, IPO advisory, and labor compliance (PF & ESIC) effortlessly.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "company-annual-compliance", name: "Company Annual Compliance", desc: "Mandatory annual AOC-4 & MGT-7 return filings, board resolutions, DPT-3, and DIR-3 KYC." },
          { id: "llp-annual-compliance", name: "LLP Annual Compliance", desc: "Annual Form 11 returns, Form 8 insolvency statements, and partner updates." },
          { id: "roc-filings", name: "ROC Filings & Corporate Changes", desc: "DIR-12 director changes, PAS-3 share allotments, SH-7 capital increases, and office shifts." },
          { id: "corporate-law-compliance", name: "Corporate Law Compliance", desc: "Secretarial audits, statutory register maintenance, and AGM/EGM minutes books." },
          { id: "csr-compliance", name: "CSR Compliance", desc: "Section 135 CSR committee setup, 2% calculation, Form CSR-1, and CSR-2 filings." },
          { id: "sme-ipo", name: "SME IPO & Main Board Listing Advisory", desc: "End-to-end guidance for listing on BSE SME / NSE Emerge exchange platforms." },
          { id: "post-listing-compliance", name: "Post-Listing Compliance", desc: "SEBI LODR regulations, quarterly financial disclosures, and insider trading compliance." },
          { id: "corporate-governance", name: "Corporate Governance Advisory", desc: "Board committee framework, corporate governance policies, and stakeholder accountability." },
          { id: "investor-compliance", name: "Investor & Regulatory Compliance", desc: "Post-investment FEMA FC-GPR filings, cap table updates, and share certificate stamping." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "company-annual-compliance",
            name: "Company Annual Compliance",
            tagline: "Maintain active company status without MCA fines",
            process: [
              "Preparation of Financial Statements & Board Report",
              "Drafting Annual General Meeting (AGM) notice & minutes",
              "Filing Form AOC-4 (Financials) and Form MGT-7/7A (Annual Return)",
              "DIR-3 KYC verification and DPT-3 loan/deposit return filing"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Audited Financial Accounts", "Board Resolutions & AGM Minutes", "Director DIN & KYC details"]
          },
          {
            id: "llp-annual-compliance",
            name: "LLP Annual Compliance",
            tagline: "Mandatory Form 11 and Form 8 filings for LLPs",
            process: [
              "Compilation of annual revenue and expenditure details",
              "Filing Form 11 (Annual Return) by May 30th annually",
              "Filing Form 8 (Statement of Accounts & Solvency) by October 30th annually",
              "Updating partner changes via Form 3 / Form 4"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["LLP Financial Accounts", "Designated Partner DSC", "LLP Agreement copy"]
          },
          {
            id: "roc-filings",
            name: "ROC Filings & Corporate Changes",
            tagline: "File event-based ROC changes for directors, capital, shares, and registered office",
            process: [
              "Drafting Board & Shareholder Resolutions for corporate event",
              "Preparing statutory forms (DIR-12, PAS-3, SH-7, INC-22, MGT-14)",
              "Digital Signature authentication & submission on MCA V3 Portal",
              "Updating Statutory Registers & Master Data"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Board Resolutions & Notices", "Director/Shareholder consent forms", "Proof of address/capital change"]
          },
          {
            id: "corporate-law-compliance",
            name: "Corporate Law Compliance",
            tagline: "Corporate secretarial audits & statutory register maintenance",
            process: [
              "Maintenance of statutory registers (Members, Directors, Contracts)",
              "Drafting Board Meeting notices, agendas & minutes books",
              "Issuance of Secretarial Audit Report (Form MR-3)",
              "PAS-3 filing for share allotment & share certificate issuance"
            ],
            turnaround: "Ongoing secretarial support",
            documentsNeeded: ["Statutory Register books", "Shareholding details", "Past board meeting records"]
          },
          {
            id: "csr-compliance",
            name: "CSR Compliance",
            tagline: "Section 135 CSR Committee, CSR policy, 2% calculation & Form CSR-2 filing",
            process: [
              "CSR applicability determination & 2% average net profit calculation",
              "Formulating CSR Policy & Annual Action Plan",
              "Implementing agency due diligence & Form CSR-1 verification",
              "Filing Form CSR-2 and Board Report CSR disclosure"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Past 3 years audited financials", "CSR Committee details", "Implementing agency 12A/80G & CSR-1 details"]
          },
          {
            id: "sme-ipo",
            name: "SME IPO & Main Board Listing Advisory",
            tagline: "Listing advisory for BSE SME & NSE Emerge platforms",
            process: [
              "Financial & structural eligibility assessment for SME IPO",
              "Appointment of Merchant Bankers, Registrar, and Legal Counsel",
              "Drafting Draft Red Herring Prospectus (DRHP)",
              "In-principal approval from exchange, IPO opening & allotment"
            ],
            turnaround: "4 - 8 Months",
            documentsNeeded: ["3 years audited financial statements", "Promoter background documents", "Peer group comparisons & business plan"]
          },
          {
            id: "post-listing-compliance",
            name: "Post-Listing Compliance",
            tagline: "SEBI LODR regulations & quarterly corporate governance disclosures",
            process: [
              "Quarterly LODR compliance filings with BSE / NSE portals",
              "Prohibition of Insider Trading (PIT) regulation implementation",
              "Submission of Shareholding Pattern (Reg 31) & Financial Results (Reg 33)",
              "Conducting Postal Ballots & E-Voting for shareholder resolutions"
            ],
            turnaround: "Quarterly & Annual cycles",
            documentsNeeded: ["Quarterly financial numbers", "Board resolution approvals", "Compliance officer disclosures"]
          },
          {
            id: "corporate-governance",
            name: "Corporate Governance Advisory",
            tagline: "Establish robust board oversight, audit committees, and transparency policies",
            process: [
              "Review of existing board composition & independent director requirements",
              "Structuring mandatory Board Committees (Audit, NRC, SRC)",
              "Formulating Code of Conduct, Whistleblower & RPT policies",
              "Conducting annual governance review and reporting"
            ],
            turnaround: "Project-based / Retainer",
            documentsNeeded: ["Board composition records", "Company MOA/AOA", "Shareholding pattern"]
          },
          {
            id: "investor-compliance",
            name: "Investor & Regulatory Compliance",
            tagline: "Post-investment FEMA FC-GPR filings, share allotment & regulatory compliance",
            process: [
              "Board resolution & shareholder approval for share allotment",
              "Filing Return of Allotment Form PAS-3 with ROC",
              "Reporting foreign inward remittance & filing Form FC-GPR with RBI/FIRDS",
              "Share Certificate stamping & statutory register update"
            ],
            turnaround: "7 - 10 Business Days",
            documentsNeeded: ["FIRC & KYC report from bank", "Valuation Certificate", "Executed SSA / SHA agreements"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "Annual filings must be completed within 30 days of holding the Annual General Meeting (AGM).",
          "MCA imposes additional daily penalty fees of ₹100 per day for delayed filing beyond statutory due dates.",
          "Directors with deactivated DINs due to missed DIR-3 KYC must pay ₹5,000 government penalty to re-activate."
        ]
      }
    }
  },
  {
    id: "business-growth",
    slug: "business-growth",
    title: "Business Growth",
    iconName: "BsGraphUpArrow",
    shortDescription: "Pitch decks, valuation certificates, startup India registration, and fundraising legal support.",
    accordionData: {
      about: {
        title: "About Business Growth",
        content: `Scaling a modern enterprise requires capital, strategic partnerships, brand positioning, and legal readiness for fundraising.

We equip high-growth startups with Startup India DPIIT recognition, pitch deck creation, financial project reports, valuation certificates, investor agreements, and due diligence readiness.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "startup-funding", name: "Startup Funding", desc: "Angel & VC fundraising strategy, pitch deck creation, and cap table planning." },
          { id: "dpiit-recognition", name: "DPIIT Recognition", desc: "Startup India recognition unlocking 80-IAC tax holidays and angel tax exemptions." },
          { id: "project-cma", name: "Project Report & CMA", desc: "Detailed project reports and CMA data for bank loans and credit facilities." },
          { id: "business-valuation", name: "Business Valuation", desc: "Registered Valuer & CA valuation reports required for share allotment & investments." },
          { id: "investor-docs", name: "Investor Documentation", desc: "Term sheet drafting, Shareholders Agreements (SHA), SPA, and founder vesting schedules." },
          { id: "llp-to-company", name: "LLP to Company Conversion", desc: "Convert existing LLP into a Private Limited Company under Section 366 for equity funding." },
          { id: "firm-to-company", name: "Firm to Company Conversion", desc: "Transform traditional partnership firm into a Private Limited Company." },
          { id: "company-to-llp", name: "Company to LLP Conversion", desc: "Convert Private Limited Company to LLP for flexible management and lower compliance." },
          { id: "due-diligence", name: "Due Diligence Support", desc: "Comprehensive financial, legal, and tax due diligence for M&A and fundraising." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "startup-funding",
            name: "Startup Funding",
            tagline: "Investor pitch decks, cap table modeling & fundraising strategy",
            process: [
              "Designing high-impact investor Pitch Deck & financial model",
              "Valuation estimation and Capitalization Table (Cap Table) planning",
              "Term sheet negotiation and structuring Convertible Notes / CCPS / SAFE",
              "Virtual Data Room (VDR) setup for Angel / VC investor due diligence"
            ],
            turnaround: "2 - 6 Weeks",
            documentsNeeded: ["Business overview summary", "Financial projections", "Current cap table & founder bios"]
          },
          {
            id: "dpiit-recognition",
            name: "DPIIT Recognition",
            tagline: "Get government recognized startup status & tax perks",
            process: [
              "Evaluating eligibility under Startup India framework",
              "Drafting innovation summary & scalability write-up",
              "Submitting application on Startup India portal",
              "Issuance of official DPIIT Recognition Certificate"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Certificate of Incorporation / Registration", "Pitch Deck or product demonstration link", "Brief write-up on innovation"]
          },
          {
            id: "project-cma",
            name: "Project Report & CMA",
            tagline: "Bank loan project reports & CMA data for credit approvals",
            process: [
              "Financial analysis of proposed project costs & working capital requirements",
              "Preparation of CMA Data (Form I to Form VI) for bank credit approval",
              "Detailed Project Report (DPR) creation with sensitivity & ratio analysis",
              "Bank presentation & query resolution support"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Past 3 years audited financials (if existing)", "Proposed project cost break-up", "Sanction letter / Bank requirement guidelines"]
          },
          {
            id: "business-valuation",
            name: "Business Valuation",
            tagline: "Valuation report by IBBI Registered Valuer & Chartered Accountant",
            process: [
              "Selection of valuation methodology (DCF, NAV, Comparable Companies)",
              "Verification of financial projections & growth assumptions",
              "Computation of fair market value of shares",
              "Issuance of Valuer Report required under Companies Act & Income Tax Rule 11UA"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["5-year projected financial statements", "Audited financial statements", "Current shareholding pattern"]
          },
          {
            id: "investor-docs",
            name: "Investor Documentation",
            tagline: "Legal drafting of Term Sheets, SHA, SPA & Founder Agreements",
            process: [
              "Drafting or reviewing Term Sheet & Letter of Intent (LOI)",
              "Preparing Share Subscription Agreement (SSA) and Shareholders Agreement (SHA)",
              "Formulating Founder Vesting Schedules & ESOP Scheme documents",
              "Execution and stamp duty payment management"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Commercial terms agreed upon", "Cap table details", "Company constitutional documents"]
          },
          {
            id: "llp-to-company",
            name: "LLP to Company Conversion",
            tagline: "Convert LLP to Private Limited Company under Section 366 for equity fundraising",
            process: [
              "Eligibility check & advertisement of conversion in Form URC-2",
              "Preparation of statement of accounts certified by Chartered Accountant",
              "Filing Form URC-1 along with SPICe+ Part B incorporation form",
              "Certificate of Incorporation allotment as Private Limited Company"
            ],
            turnaround: "15 - 20 Business Days",
            documentsNeeded: ["LLP Financial Accounts & Partner Consent", "LLP Agreement copy", "No Objection Certificate from creditors"]
          },
          {
            id: "firm-to-company",
            name: "Firm to Company Conversion",
            tagline: "Transform partnership firm into Private Limited Company for limited liability and growth",
            process: [
              "Partnership firm registration check & publishing newspaper advertisement",
              "Drafting partner consent & asset transfer statement",
              "Filing Form URC-1 linked with SPICe+ incorporation form",
              "Issuance of COI and post-conversion asset vesting"
            ],
            turnaround: "15 - 20 Business Days",
            documentsNeeded: ["Partnership Deed & Firm Registration Certificate", "Audited statement of accounts", "Creditors NOC & partner consent"]
          },
          {
            id: "company-to-llp",
            name: "Company to LLP Conversion",
            tagline: "Convert Private Limited Company to LLP for flexible management and lower compliance",
            process: [
              "Checking company eligibility & verifying no open unsatisfied charges exist",
              "Filing Form 18 with linked FiLLiP incorporation form",
              "MCA approval & Certificate of Registration as LLP",
              "Execution & filing of Form 3 LLP Agreement"
            ],
            turnaround: "15 - 20 Business Days",
            documentsNeeded: ["Audited financial statements", "Shareholder & Creditor NOCs", "Tax clearance declaration"]
          },
          {
            id: "due-diligence",
            name: "Due Diligence Support",
            tagline: "Financial, legal & tax audit readiness for M&A and funding",
            process: [
              "Scope agreement and Data Room information checklist dispatch",
              "Audit of financial books, tax filings, legal contracts & corporate registers",
              "Identification of red flags, contingent liabilities & legal risks",
              "Submission of detailed Due Diligence Report (DDR) to investors/buyers"
            ],
            turnaround: "1 - 3 Weeks",
            documentsNeeded: ["All historical corporate, legal, tax & financial records", "Employee contracts", "Material customer/vendor agreements"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "DPIIT recognition is granted to entities incorporated for less than 10 years with turnover below ₹200 Crores.",
          "Valuation reports are generated based on management-certified financial projections provided by the company.",
          "80-IAC tax holiday approval requires a separate presentation before the Inter-Ministerial Board."
        ]
      }
    }
  },
  {
    id: "licenses-certifications",
    slug: "licenses-certifications",
    title: "Licenses & Certifications",
    iconName: "RiCertificate2Line",
    shortDescription: "FSSAI, ISO certification, MSME Udyam, Import Export Code (IEC), and trade licenses.",
    accordionData: {
      about: {
        title: "About Licenses & Certifications",
        content: `Operating a business legally often requires sector-specific licenses, quality standard certifications, and state trade permits. Operating without mandatory regulatory licenses can lead to closure notices and administrative fines.

We streamline FSSAI food safety licenses, Import Export Code (IEC), ISO quality certifications, drug licenses, cosmetic licenses, factory permits, and APEDA / Spices Board export registrations.`
      },
      servicesWeProvide: {
        title: "Services We Provide",
        items: [
          { id: "fssai-lic", name: "FSSAI-basic to central", desc: "Basic, State, or Central food safety license for restaurants, cloud kitchens & manufacturers." },
          { id: "iso-cert", name: "ISO Certification Assistance", desc: "International quality management accreditation (ISO 9001, 27001, 22000)." },
          { id: "drug-license", name: "Drug License", desc: "Retail & Wholesale drug license for pharmacy stores and pharmaceutical distributors." },
          { id: "cosmetic-license", name: "Cosmetic License", desc: "Manufacturing, loan license & import registration under Cosmetics Rules 2020." },
          { id: "iec-code", name: "Import Export Code (IEC)", desc: "Lifetime valid Import Export Code (IEC) issued by DGFT for international commerce." },
          { id: "apeda-reg", name: "APEDA Registration", desc: "Mandatory export registration (RCMC) for agricultural & processed food products." },
          { id: "spices-board", name: "Spices Board Registration", desc: "CRES exporter registration for spice products, masalas, and spice traders." },
          { id: "factory-license", name: "Factory License", desc: "Factory plan approval and licensing under Factories Act & Gujarat Factory Rules." },
          { id: "trust-society", name: "Trust and Society Registration", desc: "Charitable trust deed registration, Section 12AB tax exemption & 80G donor benefits." }
        ]
      },
      onClickServices: {
        title: "About Services",
        subServices: [
          {
            id: "fssai-lic",
            name: "FSSAI-basic to central",
            tagline: "Food safety registration & licensing for basic, state & central categories",
            process: [
              "Determining tier eligibility (Basic: <1.5Cr, State: 1.5Cr-50Cr, Central: >50Cr / Importers / E-Commerce)",
              "FoSCoS portal application drafting & supporting layout diagram attachment",
              "Liaison with Food Safety Officer for inspection if mandated",
              "Generation of 14-digit FSSAI Registration / License Certificate"
            ],
            turnaround: "5 - 10 Business Days",
            documentsNeeded: ["Applicant ID & address proof", "Premises rent agreement / electricity bill", "List of food categories & equipment", "Water test report (for manufacturing)"]
          },
          {
            id: "iso-cert",
            name: "ISO Certification Assistance",
            tagline: "International quality management accreditation for tender eligibility",
            process: [
              "Gap analysis of operational quality management systems",
              "Drafting Quality Manual & SOPs aligned with ISO standards",
              "Stage 1 & Stage 2 certification audit by accredited Registrar",
              "Issuance of official ISO Audit Certificate valid for 3 years"
            ],
            turnaround: "3 - 5 Business Days",
            documentsNeeded: ["Business Registration Certificate", "Scope of business activities", "Company invoice / letterhead sample"]
          },
          {
            id: "drug-license",
            name: "Drug License",
            tagline: "Retail & Wholesale drug license for pharmacy stores & pharma distributors",
            process: [
              "Inspection of premises for minimum square footage & refrigeration requirements",
              "Application filing on State Licensing Authority / CDSCO portal",
              "Appointment of Registered Pharmacist (for retail) or competent person (for wholesale)",
              "Physical site inspection by Drug Inspector & License grant"
            ],
            turnaround: "15 - 25 Business Days",
            documentsNeeded: ["Qualified Pharmacist registration certificate & degree", "Premises blueprint & minimum area proof", "Refrigerator purchase invoice", "Rent agreement & NOC"]
          },
          {
            id: "cosmetic-license",
            name: "Cosmetic License",
            tagline: "Manufacturing, loan license & import registration under Cosmetics Rules 2020",
            process: [
              "Identification of manufacturing model (Own manufacturing / Third-party / Import)",
              "Application filing on State Licensing Authority or CDSCO portal",
              "Premises layout & product testing report review",
              "Issuance of Cosmetic License / Import Registration"
            ],
            turnaround: "15 - 30 Business Days",
            documentsNeeded: ["Product ingredient list & test reports", "Premises layout & machinery details", "Applicant ID & business registration"]
          },
          {
            id: "iec-code",
            name: "Import Export Code (IEC)",
            tagline: "Lifetime valid 10-digit Import Export Code issued by DGFT",
            process: [
              "DGFT portal profile creation & digital key registration",
              "Online filing of IEC application form",
              "Automatic bank details validation & instant IEC e-Certificate allotment"
            ],
            turnaround: "1 - 2 Business Days",
            documentsNeeded: ["Entity PAN Card", "Cancelled Cheque or Bank Certificate", "Registered Office Premises Proof"]
          },
          {
            id: "apeda-reg",
            name: "APEDA Registration",
            tagline: "Mandatory export registration (RCMC) for agricultural & processed food products",
            process: [
              "Verification of IEC & scheduled agricultural product classification",
              "Online application on APEDA / DGFT portal",
              "Fee payment and document submission",
              "Issuance of APEDA Registration-cum-Membership Certificate (RCMC)"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Import Export Code (IEC)", "Bank Certificate / Cancelled Cheque", "Entity PAN & Premises Address Proof"]
          },
          {
            id: "spices-board",
            name: "Spices Board Registration",
            tagline: "CRES registration for spice exporters, processors & masala brands",
            process: [
              "Verification of IEC details and spice product portfolio",
              "Application filing for CRES (Certificate of Registration as Exporter of Spices)",
              "Submission through DGFT-linked digital portal",
              "Issuance of CRES certificate & quarterly export return setup"
            ],
            turnaround: "5 - 7 Business Days",
            documentsNeeded: ["Import Export Code (IEC)", "Entity PAN & Address Proof", "Bank Cheque & GST Certificate"]
          },
          {
            id: "factory-license",
            name: "Factory License",
            tagline: "Factory plan approval and licensing under Factories Act & Gujarat Factory Rules",
            process: [
              "Review of manufacturing process, worker strength (10+/20+) & power usage",
              "Preparation and submission of factory building layout plan for approval",
              "Filing Factory License registration application with Industrial Safety Directorate",
              "Site inspection by Factory Inspector and license grant"
            ],
            turnaround: "15 - 30 Business Days",
            documentsNeeded: ["Factory layout building plan", "Machinery list & power load sanction", "Occupier & Factory Manager details", "Land ownership deed / rent agreement"]
          },
          {
            id: "trust-society",
            name: "Trust and Society Registration",
            tagline: "Charitable trust deed registration, Section 12AB tax exemption & 80G donor benefits",
            process: [
              "Drafting Trust Deed with charitable objects (Education, Healthcare, Relief)",
              "Trust Deed execution and registration with Sub-Registrar / Charity Commissioner",
              "Application for Section 12AB income tax exemption certificate",
              "Application for Section 80G donor tax deduction approval & Form CSR-1"
            ],
            turnaround: "15 - 25 Business Days",
            documentsNeeded: ["Trustee ID & address proofs", "Trust Deed document on stamp paper", "Registered office address proof", "3-year projected income & expenditure statement"]
          }
        ]
      },
      termsAndConditions: {
        title: "Term and Conditions",
        items: [
          "FSSAI license validity ranges from 1 to 5 years; renewal must be applied 30 days prior to expiry.",
          "Import Export Code requires mandatory annual online update on the DGFT portal between April and June.",
          "Municipal shop license guidelines vary depending on state and local municipal corporation rules."
        ]
      }
    }
  }
];
