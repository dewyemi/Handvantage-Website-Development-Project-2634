// Editorial archive seed content. Each article will eventually move to /content/insights/*.mdx,
// but for v1 we keep them inline as TypeScript so the index ships without an MDX pipeline.

export type ArticleCategory = "BRIEFING" | "RETROSPECTIVE" | "DOSSIER" | "FIELD NOTE";

export interface Article {
  slug: string;
  category: ArticleCategory;
  headline: string;
  dek: string;
  date: string;       // ISO
  dateHuman: string;  // e.g. "May 5, 2026"
  readingTime: string;
  body: string[];     // Array of paragraphs (rendered as <p>)
  author?: string;
}

export const INSIGHTS: Article[] = [
  {
    slug: "eu-ai-act-annex-iv-technical-documentation",
    category: "BRIEFING",
    headline: "EU AI Act Annex IV: what your technical documentation actually has to show.",
    dek: "The regulation lists nine elements. Six of them require contemporaneous evidence, not a static document. Most platforms can produce the document. Few can produce the evidence.",
    date: "2026-05-07",
    dateHuman: "May 7, 2026",
    readingTime: "9 min read",
    author: "Josh Olayemi",
    body: [
      "When a CISO says \"we're working on EU AI Act compliance,\" the next question to ask is which document they're working on. The regulation refers to several. The one that matters for any system in the high-risk classification — and the one most teams underestimate — is the Annex IV technical documentation. Article 11 makes it the basis of conformity assessment. Article 47 makes it the basis of the declaration of conformity. Article 71 makes it the basis of the EU database registration. If the Annex IV dossier is incomplete or unverifiable, the system cannot legally be placed on the market in the EU. Everything else in the high-risk regime is downstream of this document.",
      "The interesting thing about Annex IV is that most teams reading it for the first time treat it as a paper exercise. The text reads like a procurement template: \"a general description,\" \"a detailed description,\" \"a list of harmonised standards.\" An organisation can plausibly produce all of that in a week of focused work, ship it to a Notified Body, and receive a conformity assessment. That read of the document misses what an auditor actually does with it. The dossier is not the assessment. The dossier is the index that the assessment uses to walk through the system's behaviour during the audit window. Six of the nine elements require contemporaneous, machine-verifiable evidence — not narrative — to survive that walk.",
      "Annex IV has nine numbered sections. Sections 1, 6, 7, and 8 are largely descriptive. Section 1 is a general description: intended purpose, identification of the provider, version of the system, hardware on which it runs, photographs or illustrations of the user interface, instructions for use. Section 6 is a description of relevant changes made through the system's lifecycle. Section 7 is the list of harmonised standards applied (ISO/IEC 42001, ISO/IEC 23894, and so on, where relevant). Section 8 is a copy of the EU declaration of conformity. These four sections are documents. They can be drafted, reviewed, and signed by a competent author in a focused effort. They are the parts most teams have under control.",
      "Sections 2, 3, 4, 5, and 9 are different. They are descriptions of system behaviour over time, and an auditor reads them with the audit log open. Section 2 — the detailed description of the system's elements and the development process — references the data sets used, the data labelling and curation practices, the methodology for training and validation, the system's architecture, the design specifications, and the rationale for design choices. Section 3 — monitoring, functioning, and control — describes how the system is monitored in operation and what mechanisms exist to detect malfunction. Section 4 — performance metrics — describes the appropriateness and validation of the metrics used. Section 5 — risk management — describes the system that implements Article 9's continuous risk management requirements, with the residual risks accepted by the provider. Section 9 — post-market monitoring — describes the system in place to evaluate AI performance after deployment, with the plan for collecting feedback and reporting incidents.",
      "Each of these five sections has a paper component (the description) and an evidence component (the proof that what's described is actually happening). The paper component is straightforward. The evidence component is where most platforms break. An auditor reading Section 3 doesn't only want to know \"what monitoring exists\"; they want to see the monitoring records for the audit window — the events the monitor produced, in sequence, with timestamps that survive third-party verification. An auditor reading Section 5 doesn't only want the risk register; they want to see, for each control declared in the risk register, the specific events in the audit log that demonstrate the control was operating during the window. An auditor reading Section 9 doesn't only want the post-market monitoring plan; they want the monitoring outputs for the period since deployment.",
      "The audit window is the interval during which the system has been placed on the market or put into service. For a system going live on 2 August 2026 — the high-risk obligations deadline — the audit window opens that day. For an existing system that crosses into high-risk classification at deadline, it opens at the moment the classification changes. In neither case is the audit window something that begins later. The Annex IV dossier needs to be complete on the day the system goes into service, with the evidence components covering the operational history the system has at that point.",
      "This is why retrofitted monitoring is structurally inferior. A monitoring tool installed two months before the deadline generates evidence covering those two months — and only those two months. Section 3 of the dossier reads as if the system had no contemporaneous monitoring before that. Sections 5 and 9 inherit the same gap. The Notified Body assessment may still pass on a narrow technical reading, but the dossier is fragile to challenge: any subsequent investigation, any post-market incident, any market-surveillance authority request will return to the same period and find an evidence gap.",
      "The architectural alternative is to produce the evidence at the moment of each system action, by the system itself, with cryptographic integrity. Each event is timestamped against an RFC 3161 trusted time source. Each event is signed and sequenced into a tamper-evident log (Merkle-tree-rooted, periodically anchored). Each event is mapped — at the moment it is produced, not retrospectively — to the specific Annex IV section and Article 9 control category it satisfies. The evidence components of Sections 2, 3, 4, 5, and 9 then become slices of that log scoped to the time window and the system in question. This is what Vantage Workspace produces; the broader claim is that this is what any platform shipping into the EU AI Act regime needs to produce, regardless of vendor. A platform that does not produce the evidence forces the deployer to assemble it after the fact, which is the same project we have watched cancel agentic AI proposals for the last twelve months.",
      "Even with a platform that produces complete Annex IV evidence, the deployer still owns specific responsibilities. The declaration of conformity (Section 8) is signed by the deployer, not the provider. The intended-purpose description (Section 1) reflects the deployer's chosen use case, which the provider does not know in advance. The post-market monitoring plan (Section 9) needs to reflect the deployer's actual deployment context — the user population, the data inputs, the operational environment. The harmonised-standards list (Section 7) reflects the deployer's compliance choices. A platform's evidence record provides the substrate; the deployer's compliance team is what assembles the dossier from the substrate.",
      "Three questions to ask any AI vendor this week. First: \"Show me the Annex IV evidence record for your platform's last 30 days of operation in your reference deployment.\" If the answer is \"we generate logs, you can build the mapping,\" the platform has not been architected for the regulation. Second: \"For each of Annex IV sections 2, 3, 4, 5, and 9, name the specific log event types that satisfy the section and show me an example.\" Vendors who can answer this will name three or four event types per section, with sample payloads. Vendors who cannot answer will redirect to a generic monitoring dashboard. Third: \"What does the platform do that an auditor cannot independently verify against the customer's SIEM?\" The right answer is \"nothing.\" Every event the platform produces should be mirrored in real time to the customer's logging infrastructure, where the auditor's review cannot be silently filtered or replayed.",
      "The 2 August 2026 deadline is fourteen weeks away as of this writing. The audit window for systems that need to comply is open today. The Annex IV dossier is what the high-risk regime is built around. If the technical documentation requirement still feels like a paper exercise, the conversation with the platform vendor — and with the compliance team — is about to get more difficult. The gap between platforms that produce contemporaneous evidence and those that don't will define which AI deployments survive the next twelve months in the EU and which will be retroactively reclassified, recalled, or quietly cancelled.",
    ],
  },
  {
    slug: "from-b-to-a-the-discipline-behind-the-upgrade",
    category: "RETROSPECTIVE",
    headline: "From B to A: the discipline behind the upgrade",
    dek: "What changed between February and May to move the compliance posture three letter grades. Less novel methodology than you'd expect.",
    date: "2026-05-05",
    dateHuman: "May 5, 2026",
    readingTime: "6 min read",
    author: "Josh Olayemi",
    body: [
      "Three months ago the published compliance grade was B at 84%. Today it is A at 100%. The gap was closed across nine sprints. The pattern in those sprints is more interesting than the resulting number, because the pattern is repeatable — and it is what we expect to repeat the next time the regulatory frame moves and a new B-grade gap opens.",
      "The B grade had three structural causes. The first was a control-mapping gap: PIPEDA Principle 7 (Safeguards) and Privacy Act (Canada) Section 4 had no satisfying events in the audit log because the relevant evidence path was wired only into a specific code path. The second was a test gap: the embedding-inversion detection in Layer 4 had an outdated probe library. The third was a methodology gap: the assessment was taking the average of per-framework grades, not the worst, which masked individual framework failures.",
      "We addressed all three across nine sprints. The methodology fix was the smallest change in code (a single line in the assess script) and the largest change in posture — switching from average to worst-of immediately moved several frameworks that had been silently dragging the grade down into visible focus. The control-mapping gap was a sprint of careful tracing, not invention; the platform was producing the right events, but the assess script wasn't recognising them as satisfying the right controls. The test gap was four sprints of probe-library research, refreshing the embedding-inversion patterns to current published research.",
      "The discipline is unglamorous. None of these fixes were novel cryptography or a new architectural primitive. They were the slow, careful work of looking at a specific failure, finding the smallest change that closes it, shipping that change with evidence, and re-running the assessment. The same discipline catches the next failure when it appears.",
      "We expect the next failure. Frameworks update. AIDA may change shape between proposed and enacted. NIST AI RMF 1.1 will land at some point. When the failure appears, the assessment will catch it within a sprint, the published grade will move, and we'll publish the methodology that closes it. That is the only marketing strategy a Sovereign Capability Partner can credibly run.",
    ],
  },
  {
    slug: "eu-ai-act-deadline-ciso-ignoring",
    category: "BRIEFING",
    headline: "The EU AI Act deadline your CISO is ignoring",
    dek: "August 2, 2026 is the high-risk obligations deadline. The audit window opened in Q1. Most security leaders are still treating it as a Q4 problem.",
    date: "2026-05-02",
    dateHuman: "May 2, 2026",
    readingTime: "5 min read",
    author: "Josh Olayemi",
    body: [
      "Most CISO calendars currently show the EU AI Act as a Q4 2026 task. The reasoning is reasonable: the high-risk obligations under Articles 6-29 don't begin until 2 August 2026, so a focused effort in Q3 is mathematically sufficient. The problem is that this read of the regulation misses the audit window.",
      "Article 99 specifies penalties up to the larger of EUR 35 million or 7% of global annual turnover for non-compliance. The penalties apply where the system fails on the day, certainly — but they also apply where contemporaneous evidence of operating controls is absent during the period leading up to the day. That period is the audit window. It opened the moment the regulation entered into force. It is open now.",
      "What this means in practical terms: an AI system going live on 1 August 2026 that produced no contemporaneous audit evidence between February and August is a system whose technical compliance posture is, in the regulator's eyes, unverified. The technical controls might be perfect on the day. The evidence that they were operating in the run-up is absent. Article 99 is structurally indifferent to which condition triggered the penalty.",
      "The implications for the work plan are immediate. Audit-evidence generation is not a Q3 task; it is a now task. Every prompt, tool call, and agent action that runs today against an AI system in scope of the high-risk classification needs contemporaneous evidence — identity attribution, policy version, decision record, signed timestamp — produced and retained. The platform has to do this; retrofitted monitoring against the platform's existing logs is structurally inferior because the retrofit can only cover the period from its installation forward.",
      "The CISOs we talk to who are ahead of this curve have done two things. First, they have moved their AI platform decision earlier — pulling it out of the late-2026 budget window and into the current quarter. Second, they have requested platform-level evidence demonstrations rather than control-level demonstrations. The question is no longer 'can your platform do prompt-injection defence?' but 'can your platform produce a contemporaneous evidence record of the prompt-injection defence having operated for every event in the last 60 days?'",
      "The answer to that question is the difference between a platform that survives the audit window and one that does not.",
    ],
  },
  {
    slug: "why-40-percent-ai-projects-fail",
    category: "BRIEFING",
    headline: "Why 40% of agentic AI projects fail (and the governance answer)",
    dek: "Gartner's number, our reading. The pattern in cancelled projects is the same one in cancelled compliance reviews: missing evidence, not missing controls.",
    date: "2026-05-02",
    dateHuman: "May 2, 2026",
    readingTime: "7 min read",
    author: "Josh Olayemi",
    body: [
      "Gartner's research recently put a number on something we'd been seeing in the field: roughly 40% of agentic AI projects are being cancelled or shelved, often after substantial investment. The headline reaction is to point at technology immaturity. The actual pattern, when we look at the cancelled projects we have visibility into, is consistently about governance — not about whether the technology works, but about whether the organisation can defend its use of the technology.",
      "Cancelled projects fall into three rough categories. The first is the technology-fit cancellation: the platform did not deliver what was promised on the demo. These are real, but rarer than the headline suggests. The second is the cost-fit cancellation: the platform delivered, but the unit economics didn't work at production scale. The third — and most common in our sample — is the governance-fit cancellation: the platform delivered, the costs penciled, but the security or compliance team could not approve a production rollout because the evidence story didn't exist.",
      "The governance-fit cancellation has a recurring shape. The technology team builds a proof of concept, demonstrates value, and submits a production-rollout proposal. The compliance team reviews the proposal and asks for evidence — not for whether the platform can do prompt-injection defence in a demo, but for whether the platform produces contemporaneous, machine-verifiable, framework-mapped evidence of every action it takes. The technology team turns to the vendor. The vendor says some version of 'we generate logs, you can build a compliance pipeline on top.' The compliance team responds: 'we don't have the budget, the people, or the time to build a compliance pipeline; the platform should produce the evidence directly.' The proposal stalls. After two or three revisions, the proposal is shelved.",
      "The shape is consistent enough that we treat it as the default failure mode for any agentic AI project where the buying organisation is in a regulated sector. The pattern is not a technology problem. The platforms work. The pattern is a structural mismatch between what vendors are selling (a product layer) and what regulated buyers need (a product layer plus an evidence layer plus a control-mapping layer plus a verification layer).",
      "The governance answer is to build the evidence layer into the platform from the architectural premise, not as an add-on. This is what the 7-Layer Defence Architecture is — every layer produces audit events, every event is signed, every event is mapped to specific framework controls, every assessment is run against the runtime evidence rather than against an attestation document. The architecture is structural; the evidence is contemporaneous; the assessment is continuous.",
      "This shape doesn't make the project's compliance review trivial. It makes the review possible. The conversation between the technology team and the compliance team becomes 'here is the Trust Report scoped to your frameworks, with your audit window' rather than 'we'll figure out how to prove this once we're in production'. The proposal moves forward. The project ships. The 40% failure rate moves the other way.",
      "We are not arguing that this is the only design pattern that works. We are arguing it is the design pattern that addresses the actual failure mode in cancelled agentic AI projects. The vendors who continue to ship a product layer alone will continue to lose deals to vendors who ship the evidence layer alongside it. The buyers who continue to evaluate platforms on demo behaviour alone will continue to cancel projects when the compliance review reaches the evidence question. The pattern is settled enough now that we expect it to continue.",
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(
  INSIGHTS.map((article) => [article.slug, article])
);
