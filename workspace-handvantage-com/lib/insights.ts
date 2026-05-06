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
