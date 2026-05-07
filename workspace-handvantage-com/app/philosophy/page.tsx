import type { Metadata } from "next";
import Image from "next/image";
import { CTABlock } from "@/components/CTABlock";
import { FounderPortraitSection } from "@/components/FounderPortraitSection";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Why We Built Handvantage",
  description:
    "An essay from Josh Olayemi, founder of Handvantage. The Sovereign Capability Partner thesis, the Pilot + Fleet model, and why the architecture had to be inherited rather than configured.",
  alternates: { canonical: `${SITE.baseUrl}/philosophy` },
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero — wide founder photo at native 16:9, headline below */}
      <section className="pt-12 md:pt-16 pb-12 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <figure className="mb-12 md:mb-16">
            <div
              className="relative w-full overflow-hidden rounded-sm ring-1 ring-ink-hairline"
              style={{ aspectRatio: "3446 / 1946" }}
            >
              <Image
                src="/images/founder/josh-demo-workspace.jpg"
                alt={`${SITE.founderName}, founder of Handvantage, walking through Vantage Workspace.`}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="font-mono text-[11px] text-ink-soft tracking-[0.04em] mt-3">
              {SITE.founderName} · founder · in-session
            </figcaption>
          </figure>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <SectionEyebrow>FROM A FOUNDER · MAY 2026</SectionEyebrow>
              <h1 className="font-display text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-2">
                Why we built Handvantage.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[480px] mb-4">
                An essay on the architecture choices behind Vantage Workspace — the Sovereign
                Capability Partner thesis, the Pilot + Fleet model, and why the audit window had
                to become structural rather than optional.
              </p>
              <p className="font-ui text-body-sm text-ink-soft italic">
                About 8 minutes. By {SITE.founderName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Essay */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p className="lede">
              I started Handvantage in 2024, in Toronto, after eighteen months of trying to assemble
              an &ldquo;agentic AI stack&rdquo; for clients out of the parts the major vendors were
              shipping. The work was honest and the clients were good. The pattern I kept hitting
              was less honest. Every individual piece of the stack existed. The integration was
              always the project.
            </p>
            <p>
              The identity layer was someone else&apos;s product. The audit layer was something my
              engineers had to build because the vendors had each implemented their own format and
              none of them reconciled. The compliance evidence layer was three weeks of consultancy
              hours, twice a year, and during the eleven-and-a-half months in between, the only
              artefacts were Slack messages.
            </p>
            <p>Two things happened in late 2024 that pushed me to start building rather than continue assembling.</p>
            <p>
              The first was a conversation with a CISO of a mid-cap financial services firm in
              London. We were three hours into a workshop about her firm&apos;s planned ChatGPT
              Enterprise rollout. She had read the OWASP Top 10 for Agentic Applications carefully —
              far more carefully than the vendor&apos;s account team had — and she had a list of
              fifteen questions about controls. Of those fifteen, the vendor could answer four. For
              the other eleven, the answer was &ldquo;you&apos;ll need to build that yourself, or
              your existing tooling will need to do it.&rdquo;
            </p>
            <p>
              I left the meeting realising she was being asked to take regulatory and reputational
              risk that the vendor had structurally externalised onto her. The vendor was selling
              her a product layer. Everything underneath the product layer — identity, audit,
              compliance evidence, supply chain provenance — was her problem to assemble. She would
              assemble it, of course; she&apos;s good at her job. But she would do so in a
              thirteen-month sprint, with consultants she&apos;d only met that week, against a
              regulatory deadline that was closing.
            </p>
            <p>
              The second thing was a regulatory note from the European Commission. The note clarified
              what &ldquo;high-risk&rdquo; AI systems would be required to evidence under the
              then-finalising AI Act. Reading the note carefully, I understood something I&apos;d
              been missing: the audit window was about to become a structural feature of every AI
              deployment in the EU&apos;s economic gravity well. Not a one-time check, not an
              annual attestation, not a quarterly review — a continuous evidence requirement,
              generated on every interaction, machine-verifiable, mapped to specific Annex IV
              technical-documentation requirements.
            </p>
            <p>
              The CISO&apos;s problem and the regulatory note&apos;s framing collided in my head.
              If the audit window was going to be continuous, the evidence had to be continuous. If
              the evidence had to be continuous, it had to be generated by the platform itself, in
              the moment, with cryptographic integrity. If it had to be generated by the platform
              itself, then the platform had to be architected for it from the first commit — not
              retrofitted via add-on monitoring.
            </p>
            <p>
              That was the moment Handvantage existed in concept. Vantage Workspace, the platform,
              took eight more months of building before the v0.1 release.
            </p>

            <hr className="section-divider my-12" />

            <p>
              The hardest decision in the early architecture was whether to be configurable or
              structural. The first version of the seven-layer defence architecture was
              configurable — operators could turn off layers, reorder them, run them in parallel.
              We rationalised this as flexibility, the standard rationalisation in enterprise
              software. We were wrong.
            </p>
            <p>
              The reason we were wrong became clear when we ran the first internal{" "}
              <code className="font-mono text-[14px]">/assess</code> mission against a configured
              deployment. The audit log was contestable. An auditor reviewing the log would
              reasonably ask: &ldquo;show us the evidence that Layer 4 was active for every event
              in the audit window.&rdquo; The configurability of the layer made that evidence
              harder to produce. We had created a system that could be made compliant but could not
              be proved compliant — which is, in the regulatory frame we were targeting, the same
              as not being compliant.
            </p>
            <p>
              We rebuilt the architecture as structural. The seven layers are present in every
              deployment. Their order is fixed. Their evidence outputs are continuous. Operators
              configure the policies <em>inside</em> a layer, but they do not configure the
              existence of a layer. The audit log is therefore non-contestable on the question of
              whether the layers were running — they were, by construction.
            </p>
            <p>
              This decision cost us a feature that several early prospects had asked for. We lost a
              few of those prospects. We kept the decision because the regulatory frame we were
              building for would not have permitted the alternative.
            </p>

            <hr className="section-divider my-12" />

            <p>
              The second hardest decision was whether to be multi-tenant SaaS or single-tenant
              deployment. Multi-tenant SaaS is the dominant business model in our category, for
              excellent reasons — it&apos;s faster to ship updates, easier to support, and the unit
              economics are better. Single-tenant deployment is operationally heavier, slower to
              update across the fleet, and harder to support.
            </p>
            <p>
              We chose single-tenant deployment for one reason: data sovereignty. Every
              customer&apos;s audit log, policy, evidence, and operating data stays in the
              customer&apos;s environment. We do not have a multi-tenant data lake. We never will.
              The reason isn&apos;t ideological; it&apos;s strategic — we are selling to customers
              (regulated institutions, public-sector bodies, sovereignty-conscious enterprises) for
              whom the multi-tenant model is a structural objection. The customers are choosing us
              in part because we made this trade.
            </p>
            <p>
              The trade-off is what it is. Each customer is a deployment. Each deployment is a
              thing we have to support. The product roadmap moves slower than it would in a SaaS
              model. We have accepted that.
            </p>

            <hr className="section-divider my-12" />

            <p>
              The Pilot + Fleet model is the structural answer to the question &ldquo;what does an
              agent&apos;s permission scope look like?&rdquo; The default in early agentic AI was:
              one general-purpose agent, with a permission scope wide enough to cover any action it
              might take. The failure mode was inevitable — the permission scope ended up being the
              union of every possible action, which means the agent had god-rights, which means the
              audit log was meaningless.
            </p>
            <p>
              We inverted the model. The Pilot orchestrates; it has no direct tool access. The
              specialists in the Fleet (Hunter, Sentry, Concierge, Analyst) each hold the narrow
              permission scope required for their specialism. The Pilot delegates; the specialist
              executes within scope; the audit log records both. Three-level attribution, every
              time.
            </p>
            <p>
              The Pilot + Fleet model is not new — academic agentic-AI papers have proposed similar
              decompositions for years. What&apos;s new is shipping it as the default, structurally,
              with the YAML schema for custom agents in production. The model survives contact with
              real customer requirements; the YAML is reviewed by the customer&apos;s security team
              before a custom agent is loaded; the runtime enforces the declared scope.
            </p>

            <figure className="my-16 -mx-6 md:-mx-12 lg:mx-0">
              <div
                className="relative w-full overflow-hidden rounded-sm ring-1 ring-ink-hairline"
                style={{ aspectRatio: "3392 / 1734" }}
              >
                <Image
                  src="/images/founder/josh-demo-engine.jpg"
                  alt={`${SITE.founderName} walking through The Engine — the operator pane where the platform's runtime architecture is observable.`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="font-mono text-[11px] text-ink-soft tracking-[0.04em] mt-3 text-center">
                Walking through The Engine.
              </figcaption>
            </figure>

            <p>
              The Sovereign Capability Partner thesis is what we say to customers when they ask
              &ldquo;what kind of company are you?&rdquo; We are not a SaaS vendor. We do not sell
              seats and roll out feature updates centrally. We are not a consultancy. We do not bill
              by the hour. We are not a systems integrator. We do not assemble third-party products
              and put a wrapper on them.
            </p>
            <p>
              We build a capability — Vantage Workspace — and we partner with customers to deploy
              and operate it inside their sovereignty. The capability is theirs to operate.
              We&apos;re the partner that ships the platform, maintains the architecture, runs the
              assessment cadence, and stays on the line when something needs to be reasoned about.
              The relationship is closer to &ldquo;structural engineer&rdquo; than to
              &ldquo;vendor&rdquo;.
            </p>
            <p>
              The Sovereign Capability Partner shape implies certain things about our business. We
              grow more slowly than a SaaS. We grow more reliably. The customers we work with are
              inside our long-arc roadmap discussions. The annual meeting cadence is closer to that
              of an audit firm than to that of a software vendor.
            </p>
            <p>
              It also implies certain things about how we publish. The compliance page lists not
              just the certifications but the gaps. The architecture page lists not just the
              features but the trade-offs. The insights archive includes engineering retrospectives
              where we describe failures we caught. The pattern is consistent: a Sovereign Capability
              Partner cannot survive on marketing-grade trust; it survives on engineer-grade trust.
              Which is harder to earn and worth more once earned.
            </p>

            <hr className="section-divider my-12" />

            <p>
              The last thing I want to name on this page is the work we have not finished yet. The
              compliance grade is A at 100% across eleven frameworks; that number is the best
              summary statistic of the platform&apos;s posture. It is also, mechanically, an
              underestimate of how much work remains. The frameworks update. The threat surface
              expands as agentic AI matures. The regulatory environment is in flux — AIDA in
              Canada, the AI Act&apos;s secondary legislation in the EU, the FTC&apos;s evolving
              guidance in the US.
            </p>
            <p>
              We will fail something. The discipline that produces the A grade today is the same
              discipline that will catch the failure when it happens, and the same discipline that
              will publish the failure transparently. The B-to-A retrospective on the insights
              archive is one example. There will be more.
            </p>
            <p>
              If you&apos;re reading this page, I hope what comes through is the seriousness of the
              project. We are not building &ldquo;AI for the enterprise&rdquo; in the marketing
              sense. We are building the structural primitives the next generation of regulated AI
              deployment is going to need, in a shape that can be inherited rather than
              re-invented. The customers we want to work with are the ones who recognise the
              difference.
            </p>
            <p className="font-ui text-body-sm text-ink-soft mt-12">
              — {SITE.founderName}, Founder
              <br />
              May 2026
            </p>
          </article>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — Portrait */}
      <FounderPortraitSection variant="philosophy" />

      <SectionDivider />

      <CTABlock
        headline="If something on this page resonates, talk to us."
        body="We don't run a 'schedule a demo' funnel. The most useful first conversation is the one where you describe what you're working on, and we describe whether the platform's shape fits. Sometimes the answer is yes. Sometimes the answer is 'not quite, but here's a better fit.' Both responses are honest."
        ctaLabel="Talk to us"
      />
    </>
  );
}
