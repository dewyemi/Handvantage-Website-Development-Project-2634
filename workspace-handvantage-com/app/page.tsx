import type { Metadata } from "next";
import Link from "next/link";
import { ProofStrip } from "@/components/ProofStrip";
import { CTABlock } from "@/components/CTABlock";
import { HomeArchitectureSection } from "@/components/HomeArchitectureSection";
import { FounderPortraitSection } from "@/components/FounderPortraitSection";
import { ArticleCard } from "@/components/ArticleCard";
import { FactStack } from "@/components/FactStack";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { COMPLIANCE, SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — The Sovereign Capability Partner for Agentic AI` },
  description:
    "Handvantage builds Vantage Workspace: a 7-Layer Defence Architecture for agentic AI, with continuous compliance assessment across 11 regulatory frameworks. Deployed in your infrastructure, audited every build.",
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: `${SITE.name} — The Sovereign Capability Partner for Agentic AI`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="pt-20 md:pt-32 pb-24 md:pb-40">
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-default">
            <SectionEyebrow>HANDVANTAGE — TORONTO</SectionEyebrow>
            <h1 className="font-display text-display-1 text-ink leading-[1.05] max-w-[880px]">
              Your team will use agentic AI. The question is whether the platform underneath them
              is yours — or whether you&apos;re explaining to your auditor why nobody was.
            </h1>
            <p className="font-display text-body-lg text-ink leading-relaxed mt-12 max-w-[720px]">
              Handvantage is the Sovereign Capability Partner for organisations building with
              agentic AI. We build Vantage Workspace — a single platform combining your
              productivity stack and your AI on the same identity, audit trail, and infrastructure.
              Twenty containers, one SSO, deployed in ten minutes.
            </p>
            <p className="font-display text-body text-ink-soft mt-6 max-w-[720px]">
              {COMPLIANCE.grade} grade across {COMPLIANCE.frameworkCount} regulatory frameworks.{" "}
              {COMPLIANCE.sprintCount} sprints shipped, zero rollbacks. The 7-Layer Defence
              Architecture is documented in full on this site, including the parts we&apos;re still
              improving.
            </p>
            <div className="mt-12">
              <Link
                href="/contact"
                className="font-display text-body-lg text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
              >
                Talk to us about your platform&nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 — The shift */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>THE SHIFT</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            Most AI platforms were built for the demo, not the audit.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              The first wave of enterprise AI looked like a chatbot in a browser tab. Buy a
              license, point it at your data, hope for the best. The proof of value was a
              screenshot of a useful response. The proof of safety was an acceptable-use policy in
              the employee handbook.
            </p>
            <p>That model is finishing. Three forces are pulling it apart:</p>
            <p>
              The first is the regulatory shift. The EU AI Act high-risk obligations begin on
              August 2, 2026, and the audit window — the period where contemporaneous evidence has
              to exist — is already open. The question regulators are asking is not &ldquo;did your
              platform do anything wrong?&rdquo; but &ldquo;show us the evidence of every decision
              it made.&rdquo;
            </p>
            <p>
              The second is the architectural shift. Agentic AI doesn&apos;t just answer questions.
              It takes actions on behalf of a user — sends emails, modifies files, queries
              databases, provisions resources. Each of those actions needs an identity, a
              permission boundary, an audit log, and a way to roll back. None of that is in the
              chatbot. All of it has to be in the platform around the chatbot.
            </p>
            <p>
              The third is the supplier shift. The vendors selling &ldquo;AI for the
              enterprise&rdquo; right now are mostly selling a product layer. They&apos;re not
              selling the identity layer, the audit layer, or the compliance evidence layer. Those
              layers are still up to you to assemble — and assembling them yourself is a project,
              not a purchase.
            </p>
            <p>
              Vantage Workspace exists because we needed those three layers ourselves, and the
              alternative was twelve vendors in three time zones each owning a piece of the stack.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — What Vantage Workspace is */}
      <section className="py-16 md:py-24">
        <div className="max-w-default mx-auto px-6 md:px-12">
          <SectionEyebrow>THE PLATFORM</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-12">Vantage Workspace.</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="font-display text-body text-ink space-y-6 leading-relaxed">
                <p>
                  One platform: email, files, chat, meetings, docs, plus an AI that does the work
                  across all of them. Twenty containers, one SSO, one audit trail, deployed in ten
                  minutes on infrastructure you control.
                </p>
                <p>
                  Underneath the user-facing applications sits the part that makes this category
                  work: a 7-Layer Defence Architecture that mediates every prompt, every tool call,
                  every action the agent takes. Every interaction is logged, attributed to a real
                  human, scanned by an inline firewall, graded by a post-response checker, and
                  exportable to your SIEM in a format your auditor recognises.
                </p>
                <p>
                  The platform is built to be inherited, not customised. You don&apos;t write a
                  regex to catch prompt injection — the firewall (NemoClaw) ships with twenty-eight
                  ATLAS rules that cover the OWASP Top 10 for Agentic Applications at 10/10
                  coverage. You don&apos;t build a per-user OAuth vault — the platform ships with a
                  Fernet-encrypted vault that handles key rotation. Your engineers spend their
                  cycles shipping the features your business needs, not maintaining the
                  load-bearing primitives every AI deployment is going to need.
                </p>
                <p>
                  Sixty-eight sprints have shipped. Zero rollbacks. The full sprint log and
                  rollback policy is published on the{" "}
                  <Link
                    href="/philosophy"
                    className="text-oxblood hover:underline underline-offset-4"
                  >
                    philosophy page
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <FactStack
                facts={[
                  {
                    eyebrow: "DEPLOYMENT",
                    value: "10 minutes",
                    subline: "On your infrastructure, your VPC.",
                  },
                  {
                    eyebrow: "COMPLIANCE GRADE",
                    value: "A at 100%",
                    subline: "Across 11 regulatory frameworks.",
                    valueAsMono: true,
                  },
                  {
                    eyebrow: "OWASP COVERAGE",
                    value: "10/10",
                    subline: "Full OWASP Top 10 for Agentic Applications.",
                    valueAsMono: true,
                  },
                  {
                    eyebrow: "SHIP CADENCE",
                    value: "68 sprints",
                    subline: "Zero rollbacks since v0.1.",
                    valueAsMono: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 — Proof strip */}
      <ProofStrip />

      <SectionDivider />

      {/* Section 5 — Architecture preview */}
      <HomeArchitectureSection />

      <SectionDivider />

      {/* Section 6 — Audit window */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>THE AUDIT WINDOW</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            August 2, 2026 is when the obligations begin. The audit window started this quarter.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              Most legal teams reading the EU AI Act focus on the deadline. The smarter ones focus
              on the audit window — the period leading up to the deadline during which
              contemporaneous evidence of operating controls has to exist. Article 99 makes the
              point precisely: penalties of the larger of EUR 35 million or 7% of global annual
              turnover apply where evidence of compliance is absent, not just where the system
              fails on the day.
            </p>
            <p>
              The technical controls are not the bottleneck. They exist. Identity attribution,
              inline firewall, post-response checker, tool guardrails, supply-chain verification,
              SIEM integration — every primitive in the AI Act Annex IV technical documentation
              requirements has a published reference architecture. The bottleneck is provable
              evidence, generated continuously, in a format an auditor recognises.
            </p>
            <p>
              Vantage Workspace generates that evidence on every prompt. Trust Reports —
              exportable as HTML and PDF, mapped to NIST AI RMF, ISO 42001, the EU AI Act, SOC 2,
              PCI DSS v4.0, HIPAA, FINRA, FedRAMP, PIPEDA, the Privacy Act (Canada), and AIDA
              (proposed). The compliance grade is computed from runtime evidence, not from a
              quarterly attestation document. The evidence is contemporaneous because the platform
              makes it so.
            </p>
            <p>
              We&apos;ve published the full compliance posture — the eleven frameworks, the
              controls covered, the evidence types produced, the timestamps of the most recent
              assessments — on the{" "}
              <Link href="/compliance" className="text-oxblood hover:underline underline-offset-4">
                compliance page
              </Link>
              . We&apos;ve also published the parts we&apos;re still improving. We think the
              discipline of publishing where you&apos;re not yet at A is the part that survives the
              next regulatory generation.
            </p>
          </div>
          <div className="mt-12">
            <Link
              href="/compliance"
              className="font-display text-body-lg text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
            >
              See the compliance posture&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 7 — From a founder */}
      <FounderPortraitSection variant="home" />

      <SectionDivider />

      {/* Section 8 — Recent thinking */}
      <section className="py-16 md:py-24">
        <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>RECENT THINKING</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            Three pieces from the editorial archive.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
            <ArticleCard
              category="RETROSPECTIVE"
              headline="From B to A: the discipline behind the upgrade"
              dek="What changed between February and May to move the compliance posture three letter grades. Less novel methodology than you'd expect."
              date="May 5, 2026"
              readingTime="6 min read"
              href="/insights/from-b-to-a-the-discipline-behind-the-upgrade"
              size="compact"
            />
            <ArticleCard
              category="BRIEFING"
              headline="The EU AI Act deadline your CISO is ignoring"
              dek="August 2, 2026 is the high-risk obligations deadline. The audit window opened in Q1. Most security leaders are still treating it as a Q4 problem."
              date="May 2, 2026"
              readingTime="5 min read"
              href="/insights/eu-ai-act-deadline-ciso-ignoring"
              size="compact"
            />
            <ArticleCard
              category="BRIEFING"
              headline="Why 40% of agentic AI projects fail (and the governance answer)"
              dek="Gartner's number, our reading. The pattern in cancelled projects is the same one in cancelled compliance reviews: missing evidence, not missing controls."
              date="May 2, 2026"
              readingTime="7 min read"
              href="/insights/why-40-percent-ai-projects-fail"
              size="compact"
            />
          </div>
          <div className="mt-12 text-right">
            <Link
              href="/insights"
              className="font-display text-body text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
            >
              See all insights&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 9 — CTA */}
      <CTABlock
        emphasised
        headline="This is the part where most marketing pages would push for a demo. We'd rather start with a conversation."
        body="Tell us what you're working on. We'll respond within a business day with either a thirty-minute conversation, a written response, or a polite 'this isn't quite our shape — here's a better fit'. We don't run a high-pressure pipeline."
        ctaLabel="Talk to us about your platform"
      />
    </>
  );
}
