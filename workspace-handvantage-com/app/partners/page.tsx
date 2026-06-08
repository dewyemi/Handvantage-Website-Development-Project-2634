import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: { absolute: "Partners — Vantage Workspace for MSSPs, MSPs, and vCISO practices" },
  description:
    "Microsoft Scout is a feature you resell. Vantage Workspace is a business you own. White-label deployment, per-customer attribution, three platform tiers, and a partner channel built for the MSSPs and MSPs serving regulated clients.",
  alternates: { canonical: `${SITE.baseUrl}/partners` },
  openGraph: {
    title: "Partners — Vantage Workspace for MSSPs, MSPs, and vCISO practices",
    description:
      "Microsoft Scout is a feature you resell. Vantage Workspace is a business you own.",
  },
};

const TIERS = [
  {
    name: "Workspace Starter",
    audience: "Small regulated SMB",
    seats: "Designed for the smallest regulated clients in a partner book — single-site teams, light compliance posture, one operator on the engagement.",
    included: [
      "Full Vantage Workspace platform — files, mail, chat, meetings, documents, identity",
      "AI Workers with named identity, audit trail, and approval gates",
      "OpenClaw on Zero-Trust Infrastructure",
      "NemoClaw redaction firewall at the AI ingress",
      "Assessment templates for the baseline compliance frameworks",
      "Standard partner branding configuration",
    ],
  },
  {
    name: "Workspace Compliance",
    audience: "Mid-market regulated, multi-framework",
    seats: "For clients carrying multiple framework obligations at once — SOC 2 plus HIPAA, or ISO 42001 plus PCI DSS, or the EU AI Act layered on top of a domestic regulator.",
    included: [
      "Everything in Starter, plus —",
      "All eleven framework templates active and continuously assessed",
      "Quarterly auto-generated trust reports per client",
      "Per-AI-Worker audit trail mapped to framework controls",
      "Provider-agnostic LLM routing with per-Worker spend ceilings",
      "Co-branded sales materials (landing-page section, deck, one-pager)",
    ],
  },
  {
    name: "Workspace Sovereign",
    audience: "Enterprise, self-hosted, jurisdictional",
    seats: "For clients with hard data-residency rules — EU, Canada, African public sector, air-gapped environments, on-prem MSSP-managed racks.",
    included: [
      "Everything in Compliance, plus —",
      "Sovereign deployment in customer-chosen jurisdiction or on-prem rack",
      "Air-gap-capable configuration with no outbound network calls",
      "Full white-label across UI, PDF reports, and partner branding",
      "Dedicated partner-channel support",
      "Custom vertical kits where the client's regulator requires them",
    ],
  },
];

const WHAT_MSPS_GET = [
  {
    headline: "A high-margin add-on without building software.",
    body: "Stand the platform up for a client and bill them directly. The platform is designed for resale by an MSSP without a Handvantage-branded touchpoint anywhere in the customer experience.",
  },
  {
    headline: "Compliance positioning that converts in regulated SMB.",
    body: "Eleven frameworks, A-grade posture, audit-mapped evidence by named user. The pitch a regulated client actually responds to — not the generic AI security story.",
  },
  {
    headline: "Co-branded sales materials under the partner's brand.",
    body: "Landing-page section, deck, one-pager. Use them in client conversations without rewriting them. Update them as the canon updates.",
  },
  {
    headline: "Dedicated partner-channel support.",
    body: "A single point of contact for technical questions, deployment escalations, and pricing conversations. Not a queue.",
  },
  {
    headline: "White-label at the Sovereign tier.",
    body: "Every UI surface honours partner branding — logo, name, colours, PDF report styling. Customers experience the partner's brand, not Handvantage's.",
  },
  {
    headline: "A compliance assessment as a wedge service.",
    body: "Lead with the SecVantages assessment most regulated clients haven't done. Convert the gap report into a six-month engagement that ends with Vantage Workspace deployed.",
  },
];

const ONBOARDING_STEPS = [
  {
    n: "01",
    headline: "Apply.",
    body: "A short partner-fit conversation about the clients you serve, the frameworks they carry, and where Vantage Workspace would slot into your existing book of business.",
  },
  {
    n: "02",
    headline: "Thirty-minute intro call.",
    body: "Walk through the platform live. The hire flow, the audit trail, the trust report, the white-label surfaces — concrete, not slideware.",
  },
  {
    n: "03",
    headline: "Trial deployment.",
    body: "Stand the platform up against a representative client environment. Run the OWASP red-team suite. Generate a trust report. Verify the audit trail tells the truth.",
  },
  {
    n: "04",
    headline: "First paid client.",
    body: "Onboard the first regulated client on a partner agreement. From here, the playbook is replication — each additional client uses the same deployment script, the same trust-report template, the same operator workflow.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO (paper, editorial)                          */}
      {/* ============================================================ */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16 md:pb-28">
          <div className="max-w-[920px]">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.18em] mb-8">
              <span className="text-oxblood">●</span>
              <span className="ml-2">FOR MSSPs, MSPs, AND vCISO PRACTICES</span>
            </p>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw+1rem,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-10">
              Microsoft Scout is a feature you resell.
              <br />
              <span className="text-oxblood">Vantage Workspace is a business you own.</span>
            </h1>
            <p className="font-display text-body-lg text-ink leading-relaxed max-w-[680px] mb-10">
              The platform was designed for partner-margin from day one. White-label everywhere,
              per-customer attribution, no Microsoft-style &ldquo;you must have a Microsoft
              contract&rdquo; gate. Three platform tiers cover the small-to-enterprise client
              book. Your clients deploy AI Workers with or without you — this is the one you
              can stand up for them and keep the margin on.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={SITE.consultingUrl}
                className="inline-flex items-center gap-2 bg-ink text-paper font-ui font-medium text-[15px] px-8 py-4 hover:bg-oxblood transition-colors"
              >
                Book a partner conversation
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/architecture"
                className="font-ui font-medium text-[15px] text-ink hover:text-oxblood underline decoration-[1.5px] underline-offset-4"
              >
                See the architecture →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-ink-hairline"></div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — THE PARTNERSHIP STORY (paper, three short paras)  */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                The partnership story
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink">
                Built for the partner&rsquo;s margin, not against it.
              </h2>
            </div>
            <div className="lg:col-span-8 max-w-[680px]">
              <div className="font-display text-body-lg text-ink leading-relaxed space-y-6">
                <p>
                  <span className="font-semibold">White-label everywhere.</span> Logo, name,
                  colour palette, PDF report styling — every UI surface honours partner branding.
                  Customers experience the partner&rsquo;s brand on every touchpoint, not
                  Handvantage&rsquo;s. There is no Handvantage-branded surface in the customer
                  experience unless the partner wants one.
                </p>
                <p>
                  <span className="font-semibold">Per-customer attribution.</span> Every customer
                  organisation is a first-class object on the platform. Activity is attributable
                  per-customer for per-customer P&amp;L. The Handvantage Operational Kit ships
                  licence tracking, renewal pipeline, and per-customer cost rollup — so the
                  partner&rsquo;s ops team can run their book of business the way they already do.
                </p>
                <p>
                  <span className="font-semibold">No Microsoft-style contract gate.</span>{" "}
                  Microsoft 365 Copilot is fundamentally not designed to be resold by a managed
                  service partner without a Microsoft contract in the customer&rsquo;s name.
                  Vantage Workspace is. The licence model lets a partner stand the platform up
                  for their own client and bill them directly — without a back-channel to
                  Handvantage for normal operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — THE THREE TIERS (paper-deep, comparison)         */}
      {/* No dollar amounts. Tier names + included capabilities only.   */}
      {/* ============================================================ */}
      <section className="bg-paper-deep border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              The three platform tiers
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              Three tiers. One distribution.
              <br />
              <span className="text-ink-soft">Match the client to the shape of their compliance load.</span>
            </h2>
            <p className="font-display text-body-lg text-ink leading-relaxed">
              The same platform ships in every tier. The difference is which assessment templates
              are active, which compliance scope is in play, and which deployment model the
              client&rsquo;s jurisdiction requires.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-hairline border border-ink-hairline">
            {TIERS.map((tier) => (
              <li key={tier.name} className="bg-paper p-8 md:p-10 flex flex-col">
                <p className="font-mono text-byline text-oxblood uppercase tracking-[0.16em] mb-4">
                  {tier.audience}
                </p>
                <h3 className="font-display text-[clamp(1.5rem,1.75vw+0.5rem,2rem)] leading-[1.1] text-ink mb-4">
                  {tier.name}
                </h3>
                <p className="font-display text-body text-ink-soft leading-relaxed mb-8">
                  {tier.seats}
                </p>
                <p className="font-ui text-[12px] text-ink uppercase tracking-[0.14em] mb-4 mt-auto">
                  What&rsquo;s included
                </p>
                <ul className="space-y-3 font-display text-[15px] text-ink leading-relaxed">
                  {tier.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-oxblood mt-1.5 shrink-0" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <circle cx="5" cy="5" r="2.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-l-2 border-oxblood pl-6 max-w-[680px]">
            <p className="font-display text-body-lg text-ink leading-relaxed">
              Partner pricing is shared in a twenty-minute conversation — book a strategy session
              to discuss the right fit for your client book.
            </p>
            <a
              href={SITE.consultingUrl}
              className="mt-4 inline-flex items-center gap-2 font-ui font-medium text-[15px] text-ink hover:text-oxblood border-b border-ink hover:border-oxblood pb-1 transition-colors"
            >
              Book a strategy session
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WHAT AN MSP GETS (paper, 6 outcome blocks)        */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              What an MSP gets from the partnership
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              The platform was designed for the partner&rsquo;s book of business.
            </h2>
            <p className="font-display text-body-lg text-ink leading-relaxed">
              Your clients will deploy AI Workers in the next twelve months whether or not you
              bring the platform. The question is whether the deployment runs through your
              relationship — with your brand, your operator, your margin — or someone
              else&rsquo;s.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-hairline border border-ink-hairline">
            {WHAT_MSPS_GET.map((item) => (
              <li key={item.headline} className="bg-paper p-8 md:p-10">
                <h3 className="font-display text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] leading-[1.15] text-ink mb-4">
                  {item.headline}
                </h3>
                <p className="font-display text-body text-ink-soft leading-relaxed max-w-[560px]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — HOW TO BECOME A PARTNER (paper-deep, 4 steps)    */}
      {/* ============================================================ */}
      <section className="bg-paper-deep border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              How to become a partner
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              Four steps. About six weeks from first call to first paid client.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-hairline border border-ink-hairline">
            {ONBOARDING_STEPS.map((step) => (
              <li key={step.n} className="bg-paper p-8 md:p-10">
                <p className="font-mono text-[24px] text-oxblood leading-none mb-6">{step.n}</p>
                <h3 className="font-display text-[clamp(1.25rem,1.5vw+0.5rem,1.5rem)] leading-[1.15] text-ink mb-4">
                  {step.headline}
                </h3>
                <p className="font-display text-body text-ink-soft leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — STRATEGY SESSION CTA (midnight)                  */}
      {/* ============================================================ */}
      <section className="bg-midnight border-t border-midnight-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                Start the conversation
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.05] tracking-[-0.01em] text-paper mb-8 max-w-[720px]">
                Twenty minutes to map your client book against the three tiers.
              </h2>
              <p className="font-display text-body-lg text-paper/80 leading-relaxed max-w-[600px]">
                Bring your top three regulated clients and the frameworks they carry. We&rsquo;ll
                walk the platform live, talk through which tier fits each client, and answer the
                partner-margin question with real numbers — in conversation, not on a landing page.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <a
                href={SITE.consultingUrl}
                className="inline-flex items-center justify-between gap-3 bg-paper text-ink hover:bg-gold hover:text-paper transition-colors px-6 py-4 font-ui font-medium text-[15px]"
              >
                <span>Book a strategy session</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="font-ui text-body-sm text-paper/60 hover:text-gold-soft transition-colors"
              >
                Or write to {SITE.email} directly.
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
