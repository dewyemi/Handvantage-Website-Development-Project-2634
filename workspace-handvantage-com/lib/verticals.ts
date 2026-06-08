// Per-vertical content config for the five vertical landing pages.
// All copy derives from Website-Content-Canon.md §6 (vertical page conventions) and
// HANDOFF-manus/03-product-knowledge.md (S129, 2026-06-07).
//
// Hard rules baked into every entry:
//  - No individual AI Worker names (Lena / Marcus / David / Priya / Sofia).
//  - No specific EU AI Act enforcement dates.
//  - No dollar pricing.
//  - No city / "BC-based" framing.

export type VerticalConfig = {
  slug: "healthcare" | "fintech" | "government" | "legal" | "biotech";
  title: string;
  description: string;
  eyebrow: string;
  h1Lead: string;
  h1Emphasis: string;
  heroSubhead: string;
  shiftEyebrow: string;
  shiftHeadline: string;
  shiftHeadlineCont?: string;
  shiftBody: string[];
  featureTiles: { eyebrow: string; headline: string; body: string }[];
  whyNowHeadline: string;
  whyNowBody: string[];
  complianceFrameworks: string[];
  complianceNemoClawHeadline: string;
  complianceNemoClawBody: string;
  providerHeadline: string;
  providerBody: string;
  closingInsight: string;
  ctaHeadline: string;
  ctaBody: string;
};

const RECORDS_ROOM_PARAGRAPH =
  "Connecting an AI Worker to your data is like handing a sharp new hire a key to the records room. The question was never whether they're capable. It's whether they know which drawers to leave shut.";

export const VERTICALS: Record<VerticalConfig["slug"], VerticalConfig> = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare — Vantage Workspace for clinical and payor organisations",
    description:
      "The records room used to have a door. Your AI has the keys. Vantage Workspace gives healthcare organisations a sovereign workspace where AI Workers handle PHI-touching workflows under HIPAA-grade audit, with NemoClaw redaction at the AI ingress.",
    eyebrow: "FOR HEALTHCARE LEADERS",
    h1Lead: "The records room used to have a door.",
    h1Emphasis: "Your AI has the keys.",
    heroSubhead:
      "Vantage Workspace is the sovereign workspace where your AI workforce handles patient-data-touching workflows under the same governance every human teammate already has. Self-hosted on your infrastructure. Every AI tool call attributed to a named user. PHI redacted at the ingress before any model ever sees it.",
    shiftEyebrow: "The shift",
    shiftHeadline: "The compliance question for a payor used to be policy.",
    shiftHeadlineCont: "Now it's evidence.",
    shiftBody: [
      RECORDS_ROOM_PARAGRAPH,
      "Eighteen months ago, a payor security questionnaire asked whether your data was encrypted at rest and whether you held a SOC 2 report. That conversation is now table stakes. The questionnaire landing this quarter asks something different — what controls do you have on the AI's access to PHI, and where is the audit trail by named user for the last ninety days.",
      "Most healthcare organisations don't fail that question on policy. They fail it on evidence. The policy exists; the named-user audit trail does not. The platform's job is to produce the evidence in the shape a regulator and a payor both already understand.",
    ],
    featureTiles: [
      {
        eyebrow: "NAMED-USER AUDIT",
        headline: "Every AI tool call attributed to a named identity.",
        body: "Each AI Worker on the platform operates under their own Keycloak identity, their own Nextcloud account, their own mailbox. When an AI Worker reads a chart, drafts a discharge summary, or pulls an FHIR resource, the audit log records the named identity that did it — not 'admin acting for X.' The auditor's first question is the question the platform answers.",
      },
      {
        eyebrow: "PHI REDACTION AT THE INGRESS",
        headline: "NemoClaw redacts PHI before any model sees it.",
        body: "NemoClaw is the security layer at the AI ingress — a PHI redaction firewall that scans every prompt before it touches a model. Deterministic redaction, not statistical. Per-data-source allowlists, configured per care setting. The model only sees what it was authorised to see.",
      },
      {
        eyebrow: "NATIVE FHIR ACCESS",
        headline: "FHIR-compliant data access for the AI workforce.",
        body: "AI Workers in the healthcare archetype read from Epic via FHIR (seven read-only tools, no writes by default). Writes are confirmation-gated. The patient-data access pattern matches what a junior clinician's read access looks like — except the audit trail is automatic.",
      },
      {
        eyebrow: "HIPAA-READY TEMPLATE",
        headline: "Pre-built HIPAA assessment, audit-ready.",
        body: "The platform's assessment module ships with the HIPAA template active out of the box, alongside NIST AI RMF, ISO 42001, SOC 2 Type II, and the other frameworks a regulated healthcare organisation typically carries. The trust report regenerates on every deployment — the same report a payor's security team asks for during procurement.",
      },
    ],
    whyNowHeadline: "Regulators are now asking for evidence by named user.",
    whyNowBody: [
      "The compliance posture questions of 2024 were policy questions: do you have a policy, have your engineers read it, is there a training programme. Policies survive that conversation easily because policies are documents and documents are easy to produce.",
      "The questions of 2026 are evidence questions: show me the audit trail, show me the named user, show me which PHI the AI fetched as context and which it returned. Evidence is harder. Evidence is either there or it isn't. Evidence breaks deals when it isn't.",
      "The platform's assessment module covers HIPAA alongside the EU AI Act, NIST AI RMF, ISO 42001, and the other frameworks a healthcare organisation typically carries. Templates update as the enforcement schedule advances, so the report a regulator asks for is the report the platform already produces.",
    ],
    complianceFrameworks: [
      "HIPAA",
      "NIST AI RMF",
      "ISO 42001",
      "EU AI Act (assessment templates)",
      "SOC 2 Type II",
      "PIPEDA",
      "GDPR",
      "21 CFR Part 11 (where in scope)",
    ],
    complianceNemoClawHeadline: "NemoClaw redacts PHI at the AI ingress.",
    complianceNemoClawBody:
      "Deterministic redaction. Per-data-source allowlists. Mechanism is NDA-private; the outcome — PHI never leaves the customer's perimeter en route to a model — is what's on the trust report.",
    providerHeadline: "Native FHIR-compliant data access.",
    providerBody:
      "Epic FHIR read-only (seven tools, no writes). Compose Word, Excel, PDF, and PowerPoint discharge summaries, payor responses, and audit-trail exports in the AI Worker's own identity. Save them straight into the right shared folder. Send them from their own mailbox.",
    closingInsight:
      "The healthcare buyer's procurement question for AI isn't 'does it work.' It's 'who saw the PHI, when, and can you prove it.' The platform's job is to make the proof the default output, not the special request.",
    ctaHeadline: "Twenty minutes on what your payor questionnaire actually asks for.",
    ctaBody:
      "Bring your last vendor security questionnaire. We'll walk the platform live against the questions on it, and answer honestly where the platform's evidence covers the answer and where the policy still has to.",
  },

  fintech: {
    slug: "fintech",
    title: "Fintech — Vantage Workspace for regulated financial services",
    description:
      "When the AI in your KYC flow gets the same key as a junior banker — but without the supervision, the chain of command, or the audit trail every junior banker is trained to leave behind. Vantage Workspace gives fintechs the named-user audit trail and PII redaction the regulator now asks for.",
    eyebrow: "FOR FINTECH AND REGULATED FINANCIAL SERVICES",
    h1Lead: "When the AI in your KYC flow",
    h1Emphasis: "gets the same key as a junior banker.",
    heroSubhead:
      "Vantage Workspace is the sovereign workspace where your AI workforce runs KYC, AML triage, dispute review, and reconciliation under the same identity model, the same audit trail, and the same governance every junior banker is trained to leave behind. Self-hosted. Per-AI-Worker activity attribution. PII redacted at the ingress before any model call.",
    shiftEyebrow: "The shift",
    shiftHeadline: "The model risk question used to be about the model.",
    shiftHeadlineCont: "Now it's about the access.",
    shiftBody: [
      RECORDS_ROOM_PARAGRAPH,
      "A junior banker on day one gets a supervisor, a chain of command, and an audit trail every keystroke leaves behind. Most AI in KYC flows today gets none of that. The model has the same database access the senior team does, no per-action attribution, and a log trail that names a service account.",
      "The model risk conversation in 2024 was about explainability. The model risk conversation in 2026 is about authorisation — which records the AI fetched, on whose authority, and whether the audit log can prove it. Most teams find out their evidence trail can't answer the question only after the regulator asks it.",
    ],
    featureTiles: [
      {
        eyebrow: "NAMED-USER AUDIT",
        headline: "Every AI tool call attributed to a named identity.",
        body: "AI Workers on the platform operate under their own Keycloak identity, their own mailbox, their own SMTP credentials. When an AI Worker pulls a customer record for a KYC check, the audit log records the named identity that did it — and which records they fetched as context, not just which the user requested.",
      },
      {
        eyebrow: "PII REDACTION AT THE INGRESS",
        headline: "NemoClaw redacts PII before any model sees it.",
        body: "NemoClaw is the security layer at the AI ingress — a PII redaction firewall that scans every prompt before it touches a model. Deterministic redaction, not statistical. Per-data-source allowlists. The model only sees the fields it was authorised to see, regardless of what's available in the source.",
      },
      {
        eyebrow: "DISPUTE WATCH, CONFIRMATION-GATED",
        headline: "Stripe and Paystack read access with refund gating.",
        body: "AI Workers in the fintech archetype read from Stripe and Paystack with dispute watch enabled by default. Refunds and any state-changing call require human confirmation at the wire — not as a notification, as an enforcement gate. The AI cannot bypass approval even where the API would allow it.",
      },
      {
        eyebrow: "MULTI-FRAMEWORK COMPLIANCE TEMPLATE",
        headline: "SOC 2 + PCI DSS + ISO 27001 in one assessment.",
        body: "The platform's assessment module ships with the SOC 2 Type II, PCI DSS v4.0, ISO 27001, and EU AI Act templates active, alongside OSFI E-23 and FFIEC where in scope. The trust report regenerates on every deployment — the same report a banking partner's vendor security team asks for during onboarding.",
      },
    ],
    whyNowHeadline: "Model risk is now an access question, not a model question.",
    whyNowBody: [
      "OSFI E-23, SR 11-7, and the FCA's SYSC 3.2 all converged on the same idea in the past eighteen months: model risk includes the access surface the model operates against, not just the model itself. The board-level question changed shape.",
      "Most fintech teams don't fail their model risk review on the model. They fail it on the audit trail around the model. The platform's job is to produce per-tool-call, per-named-user evidence by default — the kind of evidence an examiner can read in fifteen minutes.",
      "The platform's assessment module covers SOC 2 Type II, PCI DSS v4.0, ISO 27001, the EU AI Act, and the other frameworks a fintech typically carries. Templates update as the enforcement schedule advances, so the report an examiner asks for is the report the platform already produces.",
    ],
    complianceFrameworks: [
      "SOC 2 Type II",
      "PCI DSS v4.0",
      "ISO 27001",
      "EU AI Act (assessment templates)",
      "GDPR",
      "PIPEDA",
      "OSFI E-23",
      "FFIEC, FINRA, NYDFS Part 500 (where in scope)",
    ],
    complianceNemoClawHeadline: "NemoClaw redacts PII at the AI ingress.",
    complianceNemoClawBody:
      "Card numbers, account numbers, and personally identifying fields are redacted deterministically before any model call. Per-data-source allowlists configured to the fields a particular workflow actually needs.",
    providerHeadline: "Native payment-network and ledger integration.",
    providerBody:
      "Stripe and Paystack read with dispute watch (refunds confirmation-gated). ACH, SWIFT, ISO 20022, and major card-network message formats handled. Compose disclosures, reconciliation reports, and KYC summaries in the AI Worker's own identity and save them straight into the right shared folder.",
    closingInsight:
      "The examiner's question for AI in a regulated fintech isn't 'is the model accurate.' It's 'who authorised the access, who attributed the action, and can you prove it without stitching three systems together.' The platform's job is to make that proof the default output.",
    ctaHeadline: "Twenty minutes on your next model risk review.",
    ctaBody:
      "Bring your last examiner question on AI access. We'll walk the platform live against that question, and answer honestly where the platform's audit trail covers the evidence and where policy still has to.",
  },

  government: {
    slug: "government",
    title: "Government — Vantage Workspace for federal, provincial, and municipal teams",
    description:
      "Citizen data does not leave the perimeter — and neither should the AI. Vantage Workspace gives public-sector teams a sovereign workspace where AI Workers operate inside the jurisdiction, under TBSDADM, FedRAMP-aligned patterns, and named-user audit.",
    eyebrow: "FOR FEDERAL, PROVINCIAL, AND MUNICIPAL TEAMS",
    h1Lead: "Citizen data does not leave the perimeter —",
    h1Emphasis: "and neither should the AI.",
    heroSubhead:
      "Vantage Workspace is the sovereign workspace where your AI workforce handles citizen-data-touching workflows inside the jurisdiction the data already lives in. Self-hosted on infrastructure the agency owns or controls. Air-gap-capable. Every AI tool call attributed to a named identity that maps to the agency's existing directory.",
    shiftEyebrow: "The shift",
    shiftHeadline: "The procurement question used to be about the model vendor.",
    shiftHeadlineCont: "Now it's about where the work runs.",
    shiftBody: [
      RECORDS_ROOM_PARAGRAPH,
      "TBSDADM in Canada, OMB M-24-10 in the United States, and the EU AI Act in Europe converged on the same idea in the past two years: AI in the public sector has to be auditable, attributable to a named operator, and deployable inside the jurisdiction the data was collected in. Cross-border SaaS routing fails that test before the model is even discussed.",
      "Most public-sector teams don't fail the AI procurement question on the model. They fail it on the deployment model — the vendor cannot prove the data stays inside the perimeter, the audit log cannot prove who triggered which inference, and the off-boarding story for an AI agent doesn't exist. The platform's job is to make 'sovereign by default' the deployment shape, not a configuration option.",
    ],
    featureTiles: [
      {
        eyebrow: "SOVEREIGN BY DEFAULT",
        headline: "Runs in the customer's jurisdiction, on customer-owned infrastructure.",
        body: "The platform deploys on bare metal, a VM in a sovereign cloud region, an air-gapped appliance, or an MSSP-managed rack the agency rents. No SaaS dependency. No 'we'll add your region next quarter.' The deployment is one shell script and one configuration file — and it stays inside the perimeter.",
      },
      {
        eyebrow: "NAMED-USER AUDIT",
        headline: "Every AI tool call attributed to a named identity.",
        body: "AI Workers operate under their own Keycloak identity, federated to the agency's existing directory. When an AI Worker drafts a briefing note, pulls a citizen record, or sends a notification, the audit log records the named identity that did it — not a service account. The off-boarding story is the same as for a human employee.",
      },
      {
        eyebrow: "NEMOCLAW AT THE DATA PLANE",
        headline: "Citizen PII redacted at the AI ingress.",
        body: "NemoClaw is the security layer at the AI ingress — a PII redaction firewall that scans every prompt before it touches a model. Per-data-source allowlists configured per programme. The model only sees the fields the programme's authorising legislation allows it to see.",
      },
      {
        eyebrow: "TBSDADM + NIST AI RMF + FEDRAMP",
        headline: "Public-sector framework templates, audit-ready.",
        body: "The platform's assessment module ships with TBSDADM, NIST AI RMF, FedRAMP Moderate alignment, and EU AI Act templates active. The trust report regenerates on every deployment — the same report a deputy minister, an inspector general, or a privacy commissioner asks for.",
      },
    ],
    whyNowHeadline: "Public-sector procurement now reads 'sovereign by default.'",
    whyNowBody: [
      "The directives shifted before the products did. TBSDADM, FedRAMP, FISMA, and the EU AI Act all now expect that AI used against citizen data is deployable inside the jurisdiction, attributable to a named operator, and auditable end-to-end. Vendors who can't meet those three conditions are excluded before evaluation begins.",
      "The platform was designed around those three conditions, not retrofitted to them. The deployment shape, the identity model, and the audit trail are the same in production as they are in the demo — because the demo is the production architecture, not a SaaS variant.",
      "Templates update as the enforcement schedule advances, so the evidence a deputy minister or an inspector general asks for is the evidence the platform already produces.",
    ],
    complianceFrameworks: [
      "TBSDADM (Canada)",
      "NIST AI RMF",
      "FedRAMP Moderate (alignment)",
      "FISMA",
      "EU AI Act (assessment templates)",
      "PIPEDA",
      "GDPR",
    ],
    complianceNemoClawHeadline: "NemoClaw redacts citizen PII at the AI ingress.",
    complianceNemoClawBody:
      "Deterministic redaction. Per-programme allowlists configured to the fields the authorising legislation allows. The model only sees what it was authorised to see, regardless of what's available in the source system.",
    providerHeadline: "FedRAMP-aligned deployment patterns, air-gap-capable.",
    providerBody:
      "Bare-metal, sovereign cloud regions, on-prem rack, air-gapped appliance with no outbound network calls. Federation to the agency's existing directory (Active Directory, Entra, or any OIDC/SAML IdP). Compose briefing notes, citizen responses, and audit-trail exports in the AI Worker's own identity.",
    closingInsight:
      "The procurement question for AI in the public sector isn't 'is it state-of-the-art.' It's 'can you prove it stayed inside our perimeter, and can you name the operator behind every inference.' The platform's job is to make that proof the default output, not the special request.",
    ctaHeadline: "Twenty minutes on your next AI procurement review.",
    ctaBody:
      "Bring the directive your AI deployment has to meet — TBSDADM, FedRAMP, the EU AI Act, your provincial privacy commissioner's standing guidance. We'll walk the platform live against the directive and answer honestly where the deployment shape covers the requirement and where policy still has to.",
  },

  legal: {
    slug: "legal",
    title: "Legal — Vantage Workspace for law firms and corporate legal departments",
    description:
      "Your AI just got privileged information. Does the bar know? Vantage Workspace gives law firms a sovereign workspace where AI Workers handle privileged matter content under named-user audit, per-matter access controls, and the bar's evolving guidance on AI use.",
    eyebrow: "FOR LAW FIRMS AND CORPORATE LEGAL DEPARTMENTS",
    h1Lead: "Your AI just got privileged information.",
    h1Emphasis: "Does the bar know?",
    heroSubhead:
      "Vantage Workspace is the sovereign workspace where your AI workforce handles privileged matter content, eDiscovery review, contract drafting, and conflicts checks under per-matter access controls and the same audit trail every associate's keystroke already leaves behind. Self-hosted on the firm's infrastructure. PII redacted at the AI ingress.",
    shiftEyebrow: "The shift",
    shiftHeadline: "The bar's question used to be 'should you use AI in your practice.'",
    shiftHeadlineCont: "Now it's 'show me how.'",
    shiftBody: [
      RECORDS_ROOM_PARAGRAPH,
      "ABA Formal Opinion 512, the SRA's evolving guidance, and the law-society standards across most provinces all converged in the past eighteen months on the same idea: AI use in legal practice is permitted, but the duty of competence, confidentiality, and supervision still applies — and the partner is on the hook for proving it.",
      "Most firms don't fail the bar's question on policy. They fail it on supervision. The AI was used; nobody can show under whose authority, against which matter's data, with what redactions in place. The platform's job is to make the supervision trail the default output, not the policy document the firm hopes nobody asks for.",
    ],
    featureTiles: [
      {
        eyebrow: "PER-MATTER ACCESS",
        headline: "AI Workers scoped to the matter they were authorised on.",
        body: "Each AI Worker on the platform operates under their own Keycloak identity with matter-level access scoping. The compose-and-save pipeline lands artifacts in the matter folder under the named worker's identity — the supervision trail a partner needs in order to certify the work is the platform's default output.",
      },
      {
        eyebrow: "PRIVILEGED-CONTENT REDACTION",
        headline: "NemoClaw redacts privileged content at the AI ingress.",
        body: "NemoClaw scans every prompt before it touches a model. Per-matter allowlists, per-jurisdiction redaction rules. The model only sees the privileged content the worker was authorised to fetch — and the audit log records what was redacted and why, queryable by matter for the duration of the engagement.",
      },
      {
        eyebrow: "NATIVE DMS + EDISCOVERY",
        headline: "Relativity, iManage, NetDocuments, eDiscovery in band.",
        body: "AI Workers in the legal archetype read from Relativity, iManage, NetDocuments, and the major eDiscovery platforms through the provider catalogue. Writes are confirmation-gated. The artifact pipeline ends where the firm's matter workflow already ends — not in a chat window.",
      },
      {
        eyebrow: "BAR-OPINION ASSESSMENT",
        headline: "ABA 512 + SRA + GDPR mapping out of the box.",
        body: "The platform's assessment module ships with templates for ABA Formal Opinion 512, the SRA Code of Conduct, GDPR, PIPEDA, SOC 2 Type II, and ISO 27001 active. The trust report regenerates on every deployment — the supervision evidence a managing partner or a general counsel asks for during a competence review.",
      },
    ],
    whyNowHeadline: "The duty of supervision now extends to the AI.",
    whyNowBody: [
      "ABA Formal Opinion 512 was the moment the conversation changed in North America. The opinion did not prohibit AI use — it extended the existing duty of competence, confidentiality, and supervision to cover it. The SRA's guidance in the UK and most provincial law-society standing guidance landed in the same place.",
      "Most firms don't fail the supervision standard on policy. They fail it on the evidence trail — the audit log that would let the supervising partner certify the work cannot reconstruct who triggered which inference, against which matter's data, with what redactions in place. The platform's job is to make that reconstruction trivial.",
      "Templates update as the bar's guidance evolves, so the evidence a competence reviewer asks for is the evidence the platform already produces.",
    ],
    complianceFrameworks: [
      "ABA Formal Opinion 512",
      "SRA Code of Conduct",
      "GDPR",
      "PIPEDA",
      "SOC 2 Type II",
      "ISO 27001",
      "EU AI Act (assessment templates)",
    ],
    complianceNemoClawHeadline: "NemoClaw redacts privileged content at the AI ingress.",
    complianceNemoClawBody:
      "Per-matter allowlists. Per-jurisdiction redaction rules. The model only sees the privileged content the worker was authorised to fetch, and the audit log records what was redacted and why — queryable by matter for the duration of the engagement.",
    providerHeadline: "Native DMS and eDiscovery integration.",
    providerBody:
      "Relativity, iManage, NetDocuments, and the major eDiscovery platforms read in-band. Compose Word, Excel, and PDF documents — contracts, opinions, deposition summaries — in the AI Worker's own identity, save them straight into the matter folder, and email them from the worker's own mailbox.",
    closingInsight:
      "The bar's question for AI in legal practice isn't 'are you using it.' It's 'can the supervising partner reconstruct, by matter, who used which AI against which data with what redactions in place.' The platform's job is to make that reconstruction trivial.",
    ctaHeadline: "Twenty minutes on supervision evidence for AI in your practice.",
    ctaBody:
      "Bring the bar opinion or law-society guidance your firm operates under. We'll walk the platform live against it and answer honestly where the platform's per-matter audit trail covers the supervision duty and where firm policy still has to.",
  },

  biotech: {
    slug: "biotech",
    title: "Biotech — Vantage Workspace for clinical research and pharmaceutical development",
    description:
      "Your AI just touched a clinical-trial dataset. Is that in your TMF? Vantage Workspace gives biotech and clinical-research organisations a sovereign workspace where AI Workers handle trial data under 21 CFR Part 11 audit, GxP discipline, and named-user attribution.",
    eyebrow: "FOR BIOTECH AND CLINICAL RESEARCH",
    h1Lead: "Your AI just touched a clinical-trial dataset.",
    h1Emphasis: "Is that in your TMF?",
    heroSubhead:
      "Vantage Workspace is the sovereign workspace where your AI workforce handles clinical-trial data, regulatory submissions, and protocol authoring under 21 CFR Part 11 discipline, GxP audit, and named-user attribution. Self-hosted on the sponsor's infrastructure. Every AI tool call recorded in a shape your TMF can ingest.",
    shiftEyebrow: "The shift",
    shiftHeadline: "The TMF used to record the humans who touched the trial.",
    shiftHeadlineCont: "Now it has to record the AI too.",
    shiftBody: [
      RECORDS_ROOM_PARAGRAPH,
      "21 CFR Part 11, ICH E6(R3), and the EMA's evolving reflection paper on AI in medicines regulation all converged on the same idea in the past two years: a clinical-trial system that uses AI has to record the AI's actions in the same audit shape it records the humans' — by named operator, by timestamp, by data source, by intent.",
      "Most clinical-research organisations don't fail the inspector's question on policy. They fail it on the TMF. The AI was used; the trial master file cannot show under whose authority, against which dataset, with what version of which prompt. The platform's job is to produce that evidence in the shape the TMF already ingests.",
    ],
    featureTiles: [
      {
        eyebrow: "21 CFR PART 11 AUDIT",
        headline: "Every AI tool call recorded for the TMF.",
        body: "AI Workers on the platform operate under their own Keycloak identity, their own credentials, their own audit signature. Every tool call against trial data is recorded with the named identity, the dataset, the timestamp, and the prompt version — in a shape an eTMF system can ingest as a standard activity record.",
      },
      {
        eyebrow: "PHI + STUDY-DATA REDACTION",
        headline: "NemoClaw redacts subject identifiers at the AI ingress.",
        body: "NemoClaw scans every prompt before it touches a model. Per-study allowlists. Subject identifiers, investigator notes, and source-data fields are redacted deterministically before the model call. The model sees the trial data the protocol allowed it to see — nothing more.",
      },
      {
        eyebrow: "NATIVE REDCAP + ELN + ETMF",
        headline: "REDCap, electronic lab notebook, and eTMF integration.",
        body: "AI Workers in the biotech archetype read from REDCap, the major electronic lab notebook platforms, and eTMF systems through the provider catalogue. Writes are confirmation-gated. CDISC-compliant exports for regulatory submission compose in the AI Worker's own identity and save into the right study folder.",
      },
      {
        eyebrow: "GXP-READY ASSESSMENT",
        headline: "21 CFR Part 11 + GxP + ICH E6(R3) templates active.",
        body: "The platform's assessment module ships with 21 CFR Part 11, GxP, ICH E6(R3), and HIPAA templates active. The trust report regenerates on every deployment — the audit evidence an FDA inspector, an EMA reviewer, or a sponsor's quality assurance team asks for during a system inspection.",
      },
    ],
    whyNowHeadline: "The TMF question now includes the AI.",
    whyNowBody: [
      "ICH E6(R3) and the EMA's reflection paper on AI in medicines regulation made it explicit: a clinical-trial system that uses AI has to treat the AI as a named operator in the trial's activity record. 21 CFR Part 11 already required the per-action audit shape. The conversation that changed in the past two years is that the inspector now expects to see AI in that record.",
      "Most clinical-research organisations don't fail the inspector on the policy. They fail it on the TMF — the AI was used but the trial master file cannot reconstruct under whose authority, against which dataset, with what redactions in place. The platform's job is to produce that reconstruction in the shape the TMF already ingests.",
      "Templates update as the regulatory schedule advances, so the audit evidence an inspector asks for is the evidence the platform already produces.",
    ],
    complianceFrameworks: [
      "21 CFR Part 11",
      "GxP",
      "ICH E6(R3)",
      "HIPAA",
      "GDPR",
      "EU AI Act (assessment templates)",
      "SOC 2 Type II",
    ],
    complianceNemoClawHeadline: "NemoClaw redacts subject identifiers at the AI ingress.",
    complianceNemoClawBody:
      "Deterministic redaction. Per-study allowlists. Subject identifiers, investigator notes, and source-data fields configured to what the protocol authorises. The model sees the trial data the protocol allowed — nothing more.",
    providerHeadline: "Native clinical-research integration.",
    providerBody:
      "REDCap, electronic lab notebook platforms, and eTMF systems read in-band. CDISC-compliant exports for regulatory submission. Compose protocol amendments, regulatory submissions, and TMF activity records in the AI Worker's own identity and save them into the study folder.",
    closingInsight:
      "The inspector's question for AI in a clinical trial isn't 'is the model validated.' It's 'is the AI's activity in the TMF in the shape Part 11 expects, attributed to a named operator, traceable to the dataset and the prompt version.' The platform's job is to make that record the default output.",
    ctaHeadline: "Twenty minutes on AI activity in your next TMF.",
    ctaBody:
      "Bring the inspector question or sponsor QA question your AI use has to answer. We'll walk the platform live against it and answer honestly where the platform's Part 11 audit covers the evidence and where SOP still has to.",
  },
};
