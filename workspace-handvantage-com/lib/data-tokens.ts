// Single source of truth for compliance numbers, framework list, and architecture data.
// When numbers change, edit here only — every page renders from these tokens.

export const COMPLIANCE = {
  grade: "A",
  passRate: "100%",
  testCount: 168,
  frameworkCount: 11,
  atlasRules: 28,
  sprintCount: 68,
  rollbackCount: 0,
  owaspCoverage: "10/10",
  lastAssessedISO: "2026-05-05",
  lastAssessedHuman: "May 5, 2026",
} as const;

export const FRAMEWORKS = [
  { id: "nist-ai-rmf", name: "NIST AI RMF", status: "A" },
  { id: "iso-42001", name: "ISO/IEC 42001", status: "A" },
  { id: "eu-ai-act", name: "EU AI Act", status: "A" },
  { id: "soc-2", name: "SOC 2", status: "A" },
  { id: "pci-dss", name: "PCI DSS v4.0", status: "A" },
  { id: "hipaa", name: "HIPAA", status: "A" },
  { id: "finra", name: "FINRA", status: "A" },
  { id: "fedramp", name: "FedRAMP", status: "A" },
  { id: "pipeda", name: "PIPEDA", status: "A" },
  { id: "privacy-act-ca", name: "Privacy Act (Canada)", status: "A" },
  { id: "aida", name: "AIDA (proposed)", status: "A" },
] as const;

export const ARCHITECTURE = {
  layers: [
    { n: 1, name: "Policy Engine",      summary: "Pre-prompt policy resolution. Identity-tagged.",                       owaspIds: ["LLM01", "LLM06"] },
    { n: 2, name: "Prompt Defence",     summary: "Inline firewall (NemoClaw). 28 ATLAS rules. Canary tokens.",           owaspIds: ["LLM01", "LLM02", "LLM05"] },
    { n: 3, name: "Tool Guardrails",    summary: "Pre-execution validation. Per-tool permission scope.",                 owaspIds: ["LLM02", "LLM07"] },
    { n: 4, name: "Memory Safety",      summary: "Conversation isolation. Cross-session leakage prevention.",            owaspIds: ["LLM03", "LLM06", "LLM10"] },
    { n: 5, name: "Trust Boundaries",   summary: "Subject-object permission resolution. Tenant isolation.",              owaspIds: ["LLM04", "LLM08"] },
    { n: 6, name: "Inter-Service Auth", summary: "mTLS between services. Per-call attestation.",                         owaspIds: ["LLM04", "LLM09"] },
    { n: 7, name: "Supply Chain",       summary: "SBOM verification. Sigstore-backed image attestation. Reproducible builds.", owaspIds: ["LLM05", "LLM09"] },
  ],
  containers: 20,
  oauthEncryption: "Fernet",
} as const;

export const SITE = {
  name: "Handvantage",
  tagline: "The Sovereign Capability Partner for Agentic AI",
  baseUrl: "https://workspace.handvantage.com",
  consultingUrl: "https://pages.handvantage.com",
  email: "josh@handvantage.com",
  city: "Toronto",
  founderName: "Josh Olayemi",
  linkedInCompany: "https://www.linkedin.com/company/handvantage",
  linkedInFounder: "https://www.linkedin.com/in/joshola",
  foundedYear: 2024,
} as const;
