// The Vantage Pilot — monthly digest. Each issue lives as a TypeScript
// object here, rendered by app/vantage-pilot/[issue]/page.tsx.
// Distribution: web-first. When the subscribe form ships, issues are
// also sent via Resend Broadcasts to opted-in readers.

export interface PublishedThisMonth {
  slug: string;
  category: string;
  headline: string;
  note: string;
}

export interface WatchingItem {
  title: string;
  url?: string;
  source: string;
  note: string;
}

export interface NewsletterIssue {
  issue: string;          // e.g. "may-2026"
  number: number;         // sequential
  monthHuman: string;     // "May 2026"
  publishedISO: string;   // "2026-05-08"
  publishedHuman: string; // "May 8, 2026"
  founderNote: string[];  // paragraphs
  publishedThisMonth: PublishedThisMonth[];
  whatWeAreWatching: WatchingItem[];
  comingNextMonth: string;
}

export const NEWSLETTER_ISSUES: NewsletterIssue[] = [
  {
    issue: "may-2026",
    number: 1,
    monthHuman: "May 2026",
    publishedISO: "2026-05-08",
    publishedHuman: "May 8, 2026",
    founderNote: [
      "This is the first issue of The Vantage Pilot. The pretext is the May we just had: Vantage Workspace went live at workspace.handvantage.com on May 6 after eight months of build, and the editorial archive shipped with three pieces — the B-to-A retrospective, the EU AI Act deadline briefing, and the 40%-failure analysis. The intent of this digest is to be useful to one specific reader: someone responsible for evaluating, deploying, or governing agentic AI in a regulated environment, who has no budget for marketing-grade content and limited time for it either.",
      "What I want this digest to be, and not be. It is not a drip campaign — there is no funnel attached. It is not a republication of the articles — those live on the site. It is correspondence: one founder note, the month's articles in two sentences each, and a few links to primary sources that crossed my desk and shaped how the team thinks. Five minutes to read, monthly, no other email.",
      "The recurring theme this month is one I expect to keep returning to: the gap between platforms that produce contemporaneous evidence and platforms that produce documents about evidence. The first kind survives audits, regulator inquiries, and post-incident investigations. The second kind survives demos. The August 2 EU AI Act high-risk obligations deadline is going to make this distinction expensive for organisations that mistook the second kind for the first. The articles below get into the specifics.",
    ],
    publishedThisMonth: [
      {
        slug: "iso-42001-audit-checklist-2026",
        category: "BRIEFING",
        headline: "ISO/IEC 42001 audit checklist: what auditors will ask for in 2026.",
        note: "A walk through the standard's 38 controls, separating the policy-and-procedure controls from the operational ones. Closes with the three questions to ask an AI vendor before booking the audit.",
      },
      {
        slug: "eu-ai-act-annex-iv-technical-documentation",
        category: "BRIEFING",
        headline: "EU AI Act Annex IV: what your technical documentation actually has to show.",
        note: "Six of Annex IV's nine sections require contemporaneous evidence, not a static document. This is a line-by-line read of where the gap lives and how to ask vendors about it.",
      },
      {
        slug: "from-b-to-a-the-discipline-behind-the-upgrade",
        category: "RETROSPECTIVE",
        headline: "From B to A: the discipline behind the upgrade.",
        note: "Three months, nine sprints, three structural causes for the previous B grade — a control-mapping gap, a test gap, a methodology gap. The fixes were small. The discipline is what catches the next one.",
      },
      {
        slug: "eu-ai-act-deadline-ciso-ignoring",
        category: "BRIEFING",
        headline: "The EU AI Act deadline your CISO is ignoring.",
        note: "August 2, 2026 is the high-risk obligations deadline. The audit window opened in Q1. Most security leaders are still treating this as a Q4 problem; this briefing is why that read fails.",
      },
      {
        slug: "why-40-percent-ai-projects-fail",
        category: "BRIEFING",
        headline: "Why 40% of agentic AI projects fail (and the governance answer).",
        note: "Gartner's 40% number, our reading. The pattern in cancelled projects is governance-fit cancellation, not technology-fit cancellation. The platforms work. The evidence story does not.",
      },
    ],
    whatWeAreWatching: [
      {
        title: "EU AI Act — high-risk obligations deadline",
        url: "https://artificialintelligenceact.eu/the-act/",
        source: "EUR-Lex / artificialintelligenceact.eu",
        note: "Article 6–29 obligations begin August 2, 2026. The official text on EUR-Lex is the canonical source; the artificialintelligenceact.eu site is a usable reading guide. We expect the implementing acts to land in tranches over the summer.",
      },
      {
        title: "ISO/IEC 42001:2023 — AI management systems",
        url: "https://www.iso.org/standard/81230.html",
        source: "ISO",
        note: "The standard itself, published December 2023. The first wave of certified organisations is now appearing in the Notified Body registers. Surveillance audits on those certifications begin late 2026, which will be the first real read on what the audit programme actually demands.",
      },
      {
        title: "NIST AI Risk Management Framework — Generative AI Profile",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
        source: "NIST",
        note: "The Generative AI Profile (NIST AI 600-1, July 2024) extends the AI RMF to specifically address generative AI risks. We've seen it used as the structural reference for federal-adjacent procurement throughout Q1 2026 and expect that to accelerate.",
      },
      {
        title: "OWASP Top 10 for LLM Applications and Agentic AI",
        url: "https://genai.owasp.org/",
        source: "OWASP",
        note: "The 2026 Top 10 for Agentic Applications has been the structural reference our security reviews use this year. The OWASP GenAI Security Project page is the central index; the LLM Top 10 v3 update is in late draft as of this writing.",
      },
      {
        title: "Office of the Privacy Commissioner of Canada — AI guidance",
        url: "https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/",
        source: "OPC Canada",
        note: "The OPC's principles for responsible AI development are the operative reference for PIPEDA-covered organisations using AI. Worth re-reading in light of AIDA's continuing journey through Parliament.",
      },
    ],
    comingNextMonth: "June plan: a sector dossier on agentic AI in financial services (FINRA, the SEC, and the audit-trail problem); a retrospective on the decision to drop multi-tenant deployment; and the next briefing on AIDA's current shape. Newsletter cadence shifts to end-of-month — June's issue lands the last business day of June.",
  },
];

export const NEWSLETTER_BY_ISSUE = Object.fromEntries(
  NEWSLETTER_ISSUES.map((n) => [n.issue, n])
);
