import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { PullQuote } from "@/components/PullQuote";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { COMPLIANCE, SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "The CISO brief",
  description:
    "A peer-to-peer briefing for security leaders evaluating Vantage Workspace. Translates the platform's compliance and architecture posture into language the CFO, CEO, and COO need to hear. Print, forward, attach to your committee deck.",
  alternates: { canonical: `${SITE.baseUrl}/for-ciso` },
};

export default function ForCisoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>FOR THE CISO</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-10">
            The 90-second brief
            <br />
            <span className="text-ink-soft italic">for your committee.</span>
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px] mb-6">
            You read the{" "}
            <Link
              href="/architecture"
              className="text-oxblood hover:underline underline-offset-4"
            >
              architecture page
            </Link>
            . You understand the seven layers, the OWASP coverage, the audit log. The rest of
            your committee doesn&rsquo;t. This page is the translation layer — the language to
            use when the CFO asks about consolidation, the CEO asks about board-readiness, and
            the COO asks what changes for their team.
          </p>
          <p className="font-display text-body text-ink-soft leading-relaxed max-w-[720px]">
            Print it. Forward it. Attach it to your procurement deck. Written by someone who has
            been on your side of the table.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 1 — One sentence per audience */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>ONE SENTENCE PER AUDIENCE</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.05] text-ink mb-12 max-w-[900px]">
            How to describe Vantage Workspace in one sentence — depending on who&rsquo;s asking.
          </h2>

          <div className="border-t border-ink-hairline">
            {[
              {
                audience: "TO THE CEO",
                sentence:
                  "We deployed a sovereign AI platform on infrastructure we control, graded continuously across eleven regulatory frameworks, with one identity for our team and one signed audit trail for the auditor.",
                why: "Frames the decision as strategic and complete, not as an evaluation in progress. Every clause is true and defensible.",
              },
              {
                audience: "TO THE CFO",
                sentence:
                  "We replaced eight productivity vendor contracts with one, got identity included (Keycloak — federate to our existing provider when we want to), kept the SIEM where it is, and moved the AI line item from ‘multiple subscriptions plus ungoverned spend’ to ‘one predictable contract.’",
                why: "Leads with consolidation (vendor count, contract surface) — the language a finance chief is fluent in. Names what's included (identity, with federation as an option) and what's not (SIEM).",
              },
              {
                audience: "TO THE COO",
                sentence:
                  "We deployed a workspace where the AI does the prep, the drafting, and the coordination — and the team's attention budget moves to the work that needs human judgment.",
                why: "Names the operational pattern (capacity gain at task level, accountability at decision level). Doesn't promise headcount cuts.",
              },
              {
                audience: "TO THE BOARD",
                sentence:
                  "We met the agentic AI governance question with a platform that produces contemporaneous audit evidence on every action, mapped to the eleven frameworks our regulators care about, before the EU AI Act high-risk obligations deadline.",
                why: "Times the decision against the regulatory calendar. Demonstrates strategic anticipation rather than reactive procurement.",
              },
            ].map(({ audience, sentence, why }) => (
              <div key={audience} className="border-b border-ink-hairline py-10 md:py-12">
                <PullQuote audience={audience} size="lg">
                  {sentence}
                </PullQuote>
                <p className="font-display text-body text-ink-soft leading-relaxed max-w-[720px] pl-6 md:pl-8">
                  <strong className="font-semibold text-ink">Why this lands:</strong> {why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 — Risk avoided */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
            The risk math
          </p>
          <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.05] text-paper mb-8 max-w-[900px]">
            What this platform helps you avoid — quantified.
          </h2>
          <p className="font-display text-body-lg text-paper/85 leading-relaxed max-w-[720px] mb-12">
            The procurement conversation goes faster when the risk is named in the units the CFO
            uses. Three exposure categories, each with the regulator&rsquo;s actual penalty
            framework — not vendor-marketing math.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight-hairline border border-midnight-hairline">
            <div className="bg-midnight p-8 md:p-10">
              <p className="font-mono text-byline text-gold-soft uppercase tracking-[0.18em] mb-4">
                EU AI Act · Article 99
              </p>
              <p className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none text-paper mb-4">
                €35M
                <span className="text-paper/55 text-[0.5em] align-middle ml-1">or 7%</span>
              </p>
              <p className="font-display text-body text-paper/75 leading-relaxed">
                The maximum administrative fine for non-compliance with the high-risk obligations.
                Applies where contemporaneous evidence of operating controls is absent —
                <strong className="text-paper"> not only where systems fail.</strong>
              </p>
            </div>

            <div className="bg-midnight p-8 md:p-10">
              <p className="font-mono text-byline text-gold-soft uppercase tracking-[0.18em] mb-4">
                SEC / FINRA
              </p>
              <p className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none text-paper mb-4">
                Disgorgement
                <span className="text-paper/55 text-[0.5em] align-middle ml-1">+ enhanced</span>
              </p>
              <p className="font-display text-body text-paper/75 leading-relaxed">
                For US financial-services deployments: SEC Rule 17a-4 records-retention failures
                and FINRA Rule 3110 supervision failures attract disgorgement, civil penalties, and
                enhanced supervisory undertakings. The audit trail is the operative defence.
              </p>
            </div>

            <div className="bg-midnight p-8 md:p-10">
              <p className="font-mono text-byline text-gold-soft uppercase tracking-[0.18em] mb-4">
                Loss of certification
              </p>
              <p className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none text-paper mb-4">
                Pipeline
                <span className="text-paper/55 text-[0.5em] align-middle ml-1">collapse</span>
              </p>
              <p className="font-display text-body text-paper/75 leading-relaxed">
                Where SOC 2 Type II or ISO 42001 status is contractually required, audit failure
                cuts the pipeline of deals requiring that evidence. The blast radius isn&rsquo;t
                the audit fee — it&rsquo;s the contracts that didn&rsquo;t close.
              </p>
            </div>
          </div>

          <p className="font-display text-body text-paper/65 leading-relaxed max-w-[720px] mt-10">
            None of these are speculative. All three are documented in the regulators&rsquo; own
            published guidance. The platform&rsquo;s value proposition isn&rsquo;t that it
            eliminates this exposure — nothing eliminates regulatory risk — but that it produces
            the evidence record that makes the exposure defensible.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — Talking points */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>TALKING POINTS</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.05] text-ink mb-12 max-w-[900px]">
            Five points to drop into the next committee meeting.
          </h2>

          <ol className="space-y-12 list-none counter-reset-points">
            {[
              {
                point:
                  "&ldquo;The platform is graded continuously, not annually — so the assessment your auditor would run is the assessment that has already been run.&rdquo;",
                gloss:
                  "Reframes audit as a feature of the platform, not an event in the calendar. Disarms the question 'when is the next audit?' before it's asked.",
                forWho: "CFO, CEO, audit committee",
              },
              {
                point:
                  "&ldquo;Eight productivity vendors become one, with identity included via Keycloak (preconfigured) — and we federate to our existing provider where one&rsquo;s in place. The SIEM stays where it is; specialised observability is its own job. The contract surface shrinks; the security review surface shrinks; the renewal cycle shrinks.&rdquo;",
                gloss:
                  "Names what consolidates (productivity + identity), names the federation option (Okta / Entra ID / Auth0 / Google Workspace), names what stays separate (SIEM). Shows operational discipline — we didn't try to replace the SIEM just to consolidate.",
                forWho: "CFO, procurement",
              },
              {
                point:
                  "&ldquo;Every action the AI takes has three-level attribution: the human who initiated it, the orchestrator that delegated it, the specialist that executed it. The audit log is not contestable on whether the controls were operating — they were, by construction.&rdquo;",
                gloss:
                  "The 'three-level attribution' phrase is specific enough to land with technical reviewers. The 'by construction' phrasing pre-empts the 'how do we verify?' follow-up.",
                forWho: "Internal audit, external auditor, CISO peers",
              },
              {
                point:
                  "&ldquo;Data residency is wherever we operate. The platform runs on our infrastructure; we control the data plane and the control plane; there is no telemetry phone-home from production to the vendor.&rdquo;",
                gloss:
                  "Pre-empts the 'where does our data go?' question with a structural answer. Particularly useful in EU/Canada/regulated-sector contexts where data residency is non-negotiable.",
                forWho: "DPO, legal, regulator-facing roles",
              },
              {
                point:
                  "&ldquo;The audit window for EU AI Act evidence opens the day each system enters service, regardless of where the enforcement schedule lands. Notified bodies have time to raise the conformity-assessment bar before the deadline binds.&rdquo;",
                gloss:
                  "Reframes the urgency around the architecture, not the calendar. The deadline moves; the audit window does not — and the conformity-assessment bar tends to rise with every additional month of guidance. Particularly effective with boards weighing &lsquo;why now?&rsquo; questions.",
                forWho: "CEO, board, executive committee",
              },
            ].map(({ point, gloss, forWho }, i) => (
              <li key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start border-t border-ink-hairline pt-8">
                <div className="md:col-span-1">
                  <p className="font-mono text-h3 text-oxblood">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <div className="md:col-span-11">
                  <blockquote
                    className="font-display text-[clamp(1.25rem,1.5vw+0.5rem,1.625rem)] leading-[1.3] text-ink mb-5 max-w-[820px]"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                  <p className="font-display text-body text-ink-soft leading-relaxed mb-3 max-w-[720px]">
                    <strong className="font-semibold text-ink">Why it works:</strong> {gloss}
                  </p>
                  <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.14em]">
                    Best for: {forWho}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 — Division of labour */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>DIVISION OF LABOUR</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.05] text-ink mb-8 max-w-[900px]">
            What the platform owns. What you still own.
          </h2>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px] mb-12">
            Vendors who claim a platform delivers compliance without customer effort are either
            lying or selling a managed service in disguise. The honest split:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-hairline border border-ink-hairline">
            <div className="bg-paper p-8">
              <p className="font-mono text-byline text-oxblood uppercase tracking-[0.16em] mb-4">
                THE PLATFORM OWNS
              </p>
              <ul className="font-display text-body text-ink leading-relaxed space-y-3">
                <li>— The runtime architecture (the seven defence layers, the agent model)</li>
                <li>— The audit log (events, signing, sequencing, anchoring)</li>
                <li>— The control-mapping export (which events satisfy which framework controls)</li>
                <li>— The Trust Report (the time-bounded evidence package for an auditor)</li>
                <li>— The deployment model (Docker, Kubernetes, air-gapped — your infrastructure)</li>
                <li>— The bring-your-own-model support (any model provider, your choice)</li>
              </ul>
            </div>
            <div className="bg-paper p-8">
              <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.16em] mb-4">
                YOU STILL OWN
              </p>
              <ul className="font-display text-body text-ink leading-relaxed space-y-3">
                <li>— The management system (the policy, the procedures, the WSPs)</li>
                <li>— The risk register and the residual-risk acceptance</li>
                <li>— The AI inventory and the supervisor-of-record assignments</li>
                <li>— The impact assessments (Article 27 of the EU AI Act, similar elsewhere)</li>
                <li>— The decision to onboard each AI use case (and which controls apply)</li>
                <li>— The annual management review and the competence training programme</li>
              </ul>
            </div>
          </div>

          <p className="font-display text-body text-ink-soft leading-relaxed max-w-[720px] mt-10">
            This division is honest. A platform that produces strong evidence reduces the
            management system&rsquo;s operational burden by a meaningful fraction; the management
            system itself is not something a platform can deliver, and you should be cautious of
            anyone who claims otherwise.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5 — Anticipated objections */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>QUESTIONS YOU&rsquo;LL BE ASKED</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-12">
            Six objections you&rsquo;ll hear, with prepared answers.
          </h2>

          <ol className="space-y-12">
            {[
              {
                q: "&ldquo;Why this vendor instead of Microsoft / Google / OpenAI?&rdquo;",
                a:
                  "Each of those is excellent within its operating model. Microsoft and Google are productivity suites with AI added; their data planes are theirs, the control planes are theirs, the audit telemetry goes back to them. OpenAI is a model provider; the productivity stack around it is the customer's problem to assemble. Vantage Workspace is the productivity stack and the agentic AI layer designed for single-tenant deployment on customer infrastructure. The trade is real: less optionality on identity, more control on data plane. The trade is right for organisations whose buyers (regulated industries, public-sector bodies, sovereignty-conscious enterprises) insist on the second.",
              },
              {
                q: "&ldquo;What happens if the vendor is acquired or shuts down?&rdquo;",
                a:
                  "The deployment model makes this materially safer than SaaS alternatives: the platform runs on your infrastructure, the data is yours by default, and the audit log is in your SIEM in real time. Your operational continuity does not depend on vendor uptime. Source escrow is contractually available where the customer's procurement requires it. No vendor can guarantee perpetual existence; vendors can architect deployments that survive their absence. We have done the second.",
              },
              {
                q: "&ldquo;How much customisation does this need?&rdquo;",
                a:
                  "Less than the equivalent assembled stack, more than a SaaS subscription. The platform ships configured for the most common deployment shape (single-tenant, OIDC SSO, Postgres + Redis + object store). Customisation lands at three places: identity-provider integration (typically 1–2 days), policy YAML for your specific tool catalogue (typically a sprint with our team), and SIEM export format (1 day). Beyond that, the customisation is editorial — your branding, your retention policies, your AI agent catalogue.",
              },
              {
                q: "&ldquo;Has anyone else deployed this in our sector?&rdquo;",
                a:
                  "Best answered concretely in the call rather than on the page. The platform's reference deployments span regulated-services contexts; specifics under NDA on request. The honest framing: agentic AI is early enough that &lsquo;has anyone else done this&rsquo; cuts both ways — most platforms can show one or two deployments in your sector and be technically accurate. The better question is &lsquo;does the platform's architecture map to my regulatory regime,&rsquo; which is answerable from the architecture page and the compliance posture without relying on a reference customer's permission to disclose.",
              },
              {
                q: "&ldquo;What's the lock-in?&rdquo;",
                a:
                  "Operational lock-in (you&rsquo;d retrain a workforce on whatever you switch to) is real and equivalent across every productivity platform — including the eight you currently run. Data lock-in is structurally lower than SaaS: your data is in your infrastructure already, in formats that export cleanly. Contract lock-in is what your MSA says; we negotiate exit terms upfront, not as an afterthought. The honest version: every platform has lock-in; this one is closer to &lsquo;your team learned a new workflow&rsquo; than to &lsquo;your data is in someone else&rsquo;s database.&rsquo;",
              },
              {
                q: "&ldquo;What if the AI says something we'd be liable for?&rdquo;",
                a:
                  "The platform's structural answer is: every AI output runs through a post-response checker before it&rsquo;s posted, sent, or written. If the checker flags a response as policy-violating, the response is held in moderation rather than delivered. Every AI output is attributed (the prompt, the model version, the checker grade) and rolled back-able. The legal answer is what your General Counsel constructs from the platform&rsquo;s evidence record — which is materially stronger than what they would construct from a chatbot transcript. Insurance coverage for AI liability is now available in the standard Tech E&amp;O markets; the platform&rsquo;s posture is what makes that coverage affordable.",
              },
            ].map(({ q, a }, i) => (
              <li key={i} className="border-t border-ink-hairline pt-8">
                <h3
                  className="font-display text-h4 text-ink leading-tight mb-4"
                  dangerouslySetInnerHTML={{ __html: q }}
                />
                <p className="font-display text-body text-ink leading-relaxed max-w-[720px]">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6 — Where to send people for depth */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
            Send them somewhere
          </p>
          <h2 className="font-display text-h2 text-paper mb-10 max-w-[820px]">
            Three pages, depending on what they need to see.
          </h2>
          <ul className="border-t border-midnight-hairline">
            {[
              {
                href: "/architecture",
                label: "Architecture",
                forWho: "Your peer CISO, your security architect, your external pen-tester.",
                what:
                  "The seven defence layers, the OWASP Top 10 for Agentic Apps mapping, the runtime evidence each layer produces. Where engineers go.",
              },
              {
                href: "/compliance",
                label: "Compliance",
                forWho: "Your compliance officer, your auditor, your DPO.",
                what: `${COMPLIANCE.grade} grade · ${COMPLIANCE.passRate} pass rate · ${COMPLIANCE.frameworkCount} frameworks · methodology + the published gaps. Where the audit committee goes.`,
              },
              {
                href: "/for-teams",
                label: "For business teams",
                forWho: "Your CEO, CFO, COO, VP Sales, department leads.",
                what:
                  "Five readings of the same platform in five vocabularies. The vendor consolidation table, the per-persona outcome mapping, and the compounding effect when all five align.",
              },
            ].map(({ href, label, forWho, what }) => (
              <li key={href} className="border-b border-midnight-hairline">
                <Link
                  href={href}
                  className="group block py-8 grid grid-cols-12 gap-4 hover:bg-midnight-deep transition-colors"
                >
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-display text-h3 text-paper group-hover:text-gold-soft transition-colors">
                      {label} →
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <p className="font-mono text-byline text-paper/55 uppercase tracking-[0.14em] mb-2">
                      For: {forWho}
                    </p>
                    <p className="font-display text-body text-paper/85 leading-relaxed">{what}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        eyebrow="THE NEXT STEP"
        headline="The first conversation answers your committee&rsquo;s questions, not your questions."
        body="Bring a colleague — the CFO who needs to see the contract surface, the COO who needs the deployment plan, the General Counsel who needs the data-residency answer. Thirty minutes. We listen first, talk second."
        ctaLabel="Book the conversation"
      />
    </>
  );
}
