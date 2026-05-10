import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { PullQuote } from "@/components/PullQuote";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "For business teams",
  description:
    "What Vantage Workspace looks like to the people whose teams will actually use it: CEO, CFO, COO, VP Sales, and department leads. Outcome-led, persona-by-persona, no marketing voice.",
  alternates: { canonical: `${SITE.baseUrl}/for-teams` },
};

const Persona = ({
  role,
  monogram,
  question,
  body,
  outcomes,
}: {
  role: string;
  monogram: string;
  question: string;
  body: React.ReactNode;
  outcomes: { label: string; value: string }[];
}) => (
  <div className="border-t border-ink-hairline pt-12 md:pt-16 pb-4">
    {/* Persona header — monogram + role label on a single line */}
    <div className="flex items-center gap-5 md:gap-6 mb-8 md:mb-10">
      <span
        aria-hidden="true"
        className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-ink-hairline bg-paper-deep font-display italic text-oxblood text-[40px] md:text-[52px] leading-none"
      >
        {monogram}
      </span>
      <p className="font-mono text-byline text-oxblood uppercase tracking-[0.18em]">
        For the {role}
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-7">
        <h3 className="font-display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
          {question}
        </h3>
        <div className="font-display text-body text-ink leading-relaxed space-y-5 max-w-[640px]">
          {body}
        </div>
      </div>
      <div className="lg:col-span-5">
        <ul className="border-t border-ink-hairline">
          {outcomes.map((o) => (
            <li key={o.label} className="border-b border-ink-hairline py-4">
              <p className="font-mono text-[11px] tracking-[0.18em] text-ink-soft uppercase mb-1">
                {o.label}
              </p>
              <p className="font-display text-body-lg text-ink leading-snug">{o.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ForTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-20 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>FOR THE WHOLE PROCUREMENT COMMITTEE</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-10 max-w-[1100px]">
            Five people in the room.
            <br />
            <span className="text-ink-soft italic">
              Five different reads of the same platform.
            </span>
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[760px] mb-6">
            Most agentic AI procurement decisions stall not because anyone in the room is wrong,
            but because the people in the room are answering five different questions. The CEO is
            asking whether the strategy is defensible to a board. The CFO is asking whether the
            line item consolidates. The COO is asking what changes for throughput. The CISO is
            asking whether the security and compliance posture holds. The VP Sales is asking
            whether the cycle gets faster. The department lead is asking what their team does on
            Monday morning.
          </p>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[760px] mb-10">
            All five answers are good ones. The platform delivers all five — but in different
            vocabularies, with different proofs, on different timelines. This page is the
            translation layer: each role&rsquo;s reading of the same platform, in the language
            that role actually uses. The numbers below are real or absent; we don&rsquo;t invent
            ROI figures.
          </p>

          {/* Hard-to-miss CISO callout — directs the security read straight to /for-ciso */}
          <Link
            href="/for-ciso"
            className="group block border-l-4 border-oxblood bg-paper-deep px-6 md:px-8 py-6 md:py-8 max-w-[760px] hover:bg-paper transition-colors no-underline hover:no-underline"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-mono text-byline text-oxblood uppercase tracking-[0.18em] mb-3">
                  IF YOU&rsquo;RE THE CISO ON THE COMMITTEE
                </p>
                <p className="font-display text-h4 text-ink leading-tight group-hover:text-oxblood transition-colors mb-1">
                  We wrote a 90-second brief specifically for you.
                </p>
                <p className="font-display text-body text-ink-soft leading-relaxed">
                  Print it, forward it, attach it to your committee deck — the language to use
                  when the CFO asks about consolidation, the CEO asks about board-readiness, and
                  the auditor asks for evidence.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="font-display text-h2 text-oxblood group-hover:translate-x-1 transition-transform flex-shrink-0"
              >
                →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* The consolidation strip */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
            The shape of the change
          </p>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] text-paper mb-12 max-w-[920px]">
            Eight productivity tools become one.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-display text-body-lg text-paper/85 leading-relaxed mb-6 max-w-[640px]">
                The typical knowledge-work organisation runs eight to twelve productivity SaaS
                vendors: a mail provider, a chat tool, a video tool, a docs platform, a file store,
                an AI assistant subscription, and a separate audit/SIEM pipeline. Each is a
                contract, a DPA, a security review, a budget line, and an attack surface.
              </p>
              <p className="font-display text-body text-paper/70 leading-relaxed max-w-[640px] mb-6">
                Vantage Workspace consolidates the productivity layer and ships with the identity
                layer included (Keycloak, preconfigured). Email, files, chat, meetings, documents,
                the AI agent layer, and identity become one platform under one signed audit trail.
                Customers who already operate Okta, Microsoft Entra ID, Auth0, or Google Workspace
                federate to those via OIDC and keep them as the source of truth — Keycloak handles
                either model.
              </p>
              <p className="font-display text-body text-paper/70 leading-relaxed max-w-[640px]">
                The SIEM is the only piece that stays separate: the platform feeds your SIEM
                rather than replacing it. Specialised security observability is a different
                category, and your security operations team owns it.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ul className="border-t border-midnight-hairline">
                {[
                  ["Mail provider", "Email pillar"],
                  ["Team chat (Slack, Teams)", "Chat pillar"],
                  ["Video conferencing", "Meetings pillar"],
                  ["Docs / Notion / Confluence", "Documents pillar"],
                  ["File store / Drive / SharePoint", "Files pillar"],
                  ["AI assistant (Claude, ChatGPT, Copilot)", "AI agents (Pilot + Fleet)"],
                  ["Identity (or federate to your own)", "Keycloak — included, preconfigured"],
                  ["Standalone audit log / SIEM glue", "Native, signed, exported"],
                ].map(([from, to]) => (
                  <li
                    key={from}
                    className="border-b border-midnight-hairline py-3 grid grid-cols-12 gap-3 items-center"
                  >
                    <span className="col-span-6 font-display text-[14px] text-paper/55 line-through">
                      {from}
                    </span>
                    <span className="col-span-1 font-mono text-[11px] text-gold-soft text-center">
                      →
                    </span>
                    <span className="col-span-5 font-display text-[14px] text-paper">{to}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* The five personas */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>FIVE READINGS OF THE SAME PLATFORM</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] text-ink mb-16 max-w-[820px]">
            What each role gets in their own language.
          </h2>

          <Persona
            role="CEO / Founder"
            monogram="C"
            question="Can I describe our AI strategy in one sentence the board will accept?"
            body={
              <>
                <p>The version of the sentence that holds:</p>
                <PullQuote audience="THE SENTENCE THAT HOLDS" size="lg">
                  We deployed a sovereign AI platform on infrastructure we control, graded
                  continuously across eleven regulatory frameworks, with one identity for the
                  team and one signed audit trail for the auditor.
                </PullQuote>
                <p>
                  Every clause in that sentence is something the platform actually delivers; none
                  of it requires you to apologise for vendor sprawl, missing controls, or the
                  absence of evidence.
                </p>
                <p>
                  This matters because the alternative — &ldquo;we&apos;re evaluating several AI
                  assistants and hope to have a recommendation by Q4&rdquo; — is increasingly read
                  by boards as a governance failure rather than a capability decision. The August
                  2026 EU AI Act high-risk obligations deadline made the timing structural; firms
                  with Q4 plans are firms whose audit window is already half over.
                </p>
                <p>
                  What the board wants to hear, in priority order: (1) the AI capability is
                  strategically deployed, not bolted on; (2) the regulatory exposure is bounded and
                  documented; (3) the operating cost is one line, not eight; (4) the data stays
                  inside the firm&apos;s perimeter. Vantage Workspace lets you say all four
                  truthfully.
                </p>
              </>
            }
            outcomes={[
              { label: "FRAMEWORKS", value: "11, graded continuously" },
              { label: "DATA RESIDENCY", value: "Your infrastructure" },
              { label: "VENDOR COUNT", value: "1 (productivity layer)" },
              { label: "BOARD READINESS", value: "Trust Report at any time" },
            ]}
          />

          <Persona
            role="CFO"
            monogram="F"
            question="Does this consolidate vendors, and what's the contract surface?"
            body={
              <>
                <p>
                  Yes on consolidation, including identity. The platform ships with Keycloak (the
                  open-source identity provider) preconfigured into the deployment — so an
                  organisation without an existing identity provider gets one as part of the
                  platform. An organisation that already operates Okta, Microsoft Entra ID,
                  Auth0, or Google Workspace federates to that provider via OIDC and keeps it as
                  the source of truth. The SIEM is the only piece that genuinely stays separate
                  (the platform feeds your SIEM rather than replacing it). Everything else in the
                  productivity stack becomes one contract, one DPA, one security review, one
                  renewal cycle.
                </p>
                <p>
                  The contract surface that matters: a single MSA covering data processing,
                  retention, sub-processors, deletion, and audit access. A single data residency
                  decision (the platform runs on your infrastructure, so the residency answer is
                  &ldquo;wherever you operate&rdquo; without further negotiation). A single
                  third-party risk assessment instead of eight. A single annual renewal
                  conversation instead of eight.
                </p>
                <p>
                  The cost story is honest: per-deployment pricing scoped to the customer&apos;s
                  size and use case, discussed in the first conversation. We don&apos;t publish a
                  per-seat price card because the deployments aren&apos;t per-seat — they&apos;re
                  per-organisation, sized to the workload. What we will tell you on the call: the
                  comparison vs. the eight-vendor stack you&apos;re running today, with the math.
                </p>
              </>
            }
            outcomes={[
              { label: "CONTRACTS", value: "1 MSA replaces ~8" },
              { label: "IDENTITY", value: "Keycloak included; federate if you have one" },
              { label: "RENEWAL CYCLES", value: "1 per year, predictable" },
              { label: "PRICING", value: "Per-deployment, on application" },
            ]}
          />

          <Persona
            role="COO / VP Operations"
            monogram="O"
            question="Where does throughput go up without headcount going up?"
            body={
              <>
                <p>
                  The five named agents (Pilot, Hunter, Sentry, Concierge, Analyst) handle work
                  that previously needed junior-staff time. The Pilot triages inboxes and
                  delegates; the Hunter does first-pass research and brief-writing; the Sentry
                  reviews vendors before procurement; the Concierge handles scheduling and
                  coordination; the Analyst pulls data summaries on demand. None of this is
                  net-new capability — it&apos;s the work that&apos;s currently spread across
                  twelve people&apos;s afternoons, done by software with audit attribution.
                </p>
                <p>
                  The capacity model that matters: agents add throughput at the per-task level
                  while humans stay accountable at the per-decision level. A team of ten people
                  does the work of fifteen because the agents handle the prep, the drafting, and
                  the coordination. The team isn&apos;t replaced. The team&apos;s
                  attention-budget moves to the work that genuinely needs human judgment.
                </p>
                <p>
                  The honest caveat: agents are not a headcount substitute on the day of
                  deployment. The capacity gain shows up over the second and third quarters of
                  use, as workflows are tuned and the team learns which decisions to delegate.
                  Vendors who promise a headcount cut on day one are selling something we
                  don&apos;t.
                </p>
              </>
            }
            outcomes={[
              { label: "AGENTS", value: "5 named, scope-checked" },
              { label: "ATTRIBUTION", value: "3-level (human, Pilot, specialist)" },
              { label: "FAILURE MODE", value: "Contained per agent" },
              { label: "TIMELINE", value: "Q2–Q3 capacity gain" },
            ]}
          />

          <Persona
            role="VP Sales"
            monogram="S"
            question="What changes about the time from inquiry to proposal?"
            body={
              <>
                <p>
                  The time-to-first-draft compresses because the work that used to be sequential
                  becomes parallel. The Hunter agent pulls the customer&apos;s history, the open
                  RFP if there is one, and the relevant case studies into a one-page brief while
                  the rep is on the qualifying call. The Analyst agent cross-references the
                  customer&apos;s tech stack against the deployment options. The Documents pillar
                  drafts the proposal against your template, populated with the brief&apos;s
                  facts.
                </p>
                <p>
                  What this looks like in the team&apos;s week: the rep spends the call listening,
                  not taking notes (the meeting transcribes itself, action items posted to chat
                  before they hang up). The proposal&apos;s first draft is ready for the
                  rep&apos;s review the same afternoon, not three days later. The
                  procurement-friendly attachments — security questionnaire response, SOC 2
                  reference, DPA template — are pulled from the Files pillar by the Concierge
                  agent, not assembled by hand.
                </p>
                <p>
                  The compounding effect: the rep&apos;s time goes from 30% selling / 70%
                  paperwork to roughly 60% selling / 40% review. The proposals are more accurate
                  (fewer stale figures from last quarter&apos;s deck) and faster (the cycle time
                  matters in competitive deals).
                </p>
              </>
            }
            outcomes={[
              { label: "FIRST DRAFT", value: "Same-day, not three-day" },
              { label: "PROCUREMENT KIT", value: "Pulled, not assembled" },
              { label: "MEETING NOTES", value: "Auto-transcribed, action-itemised" },
              { label: "DATA FRESHNESS", value: "This quarter, not last" },
            ]}
          />

          <Persona
            role="Department lead"
            monogram="D"
            question="What does my team actually do on Monday morning that's different?"
            body={
              <>
                <p>
                  They open one tab. The mail is there. The team chat is there. The day&apos;s
                  meetings are there with the prep brief already attached. The docs they&apos;re
                  working on are there with the AI&apos;s suggested edits visible as suggestions
                  (not direct writes). The agent that handled their overnight inbox has flagged
                  three things for human attention; everything else has a draft reply already
                  waiting for one click of approval.
                </p>
                <p>
                  The work the agents take off your team&apos;s plate is the work nobody enjoys:
                  triaging routine messages, scheduling across calendars, pulling data into a
                  draft, summarising what was decided in yesterday&apos;s meeting. The work that
                  stays human is the work humans actually want to do — the calls that need
                  judgment, the decisions that have stakes, the messages where tone matters.
                </p>
                <p>
                  The transition cost is real and worth naming. The first two weeks, your team is
                  learning what to delegate and what to keep. The agents need feedback to improve;
                  the workflows need tuning. By the end of week three, the team usually
                  doesn&apos;t want to go back. By the end of the quarter, the conversation has
                  moved from &ldquo;will this work?&rdquo; to &ldquo;can we extend it to the next
                  team?&rdquo;.
                </p>
              </>
            }
            outcomes={[
              { label: "TABS PER DAY", value: "1, not 8" },
              { label: "MORNING TRIAGE", value: "15 min, not 90" },
              { label: "MEETING PREP", value: "Auto, not your evening" },
              { label: "ADOPTION CURVE", value: "~3 weeks to settled" },
            ]}
          />
        </div>
      </section>

      <SectionDivider />

      {/* Compounding effect */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>WHAT HAPPENS WHEN ALL FIVE ARE ALIGNED</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            The compounding effect.
          </h2>
          <div className="font-display text-body text-ink leading-relaxed space-y-6">
            <p>
              The reason agentic AI deployments stall is rarely that any single persona has a
              veto. It&apos;s that the personas are arguing past each other. The CISO sees a
              control gap; the CFO sees a vendor with no procurement leverage; the COO sees a
              capability without a deployment plan; the CEO sees a strategic question that&apos;s
              been deferred to next quarter for the third time.
            </p>
            <p>
              When the five readings of the platform line up — the CEO has a defensible board
              narrative, the CFO has a single contract, the COO has a phased capacity plan, the
              VP Sales has cycle-time savings, and the department leads have a usable workspace —
              the procurement decision moves from &ldquo;maybe in Q4&rdquo; to &ldquo;let&apos;s
              start with the pilot deployment.&rdquo; This is the difference between platforms
              that ship and platforms that get cancelled.
            </p>
            <p>
              The CISO is in this conversation too. The{" "}
              <Link href="/for-ciso" className="text-oxblood hover:underline underline-offset-4">
                companion brief for the CISO
              </Link>{" "}
              translates the security and compliance posture into the language the rest of the
              committee needs to hear. Both documents are designed to be shared with the people
              they&apos;re written for — print, forward, attach to the procurement deck.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        eyebrow="THE NEXT STEP"
        headline="The first conversation is exploratory, not a sales pitch."
        body="If two or three of the personas above are real for your organisation today, the next conversation is worth having. We'll listen to your situation and tell you whether the platform's shape fits — including, sometimes, that it doesn't."
        ctaLabel="Talk to us"
      />
    </>
  );
}
