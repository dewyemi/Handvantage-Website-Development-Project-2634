import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const FRAMEWORKS_TRUST = [
  "NIST AI RMF",
  "ISO 42001",
  "EU AI Act",
  "SOC 2",
  "PCI DSS v4",
  "HIPAA",
  "FINRA",
  "FedRAMP",
  "PIPEDA",
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                              */}
      {/* Paper bg. Split: editorial type left, 3D illustration right.  */}
      {/* ============================================================ */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-6">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.18em] mb-8">
                <span className="text-oxblood">●</span>
                <span className="ml-2">HANDVANTAGE — SOVEREIGN AGENTIC AI</span>
              </p>
              <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-10">
                Your team will use agentic AI.
                <br />
                <span className="text-ink-soft italic">The platform underneath them</span>
                <br />
                <span className="text-oxblood">should be yours.</span>
              </h1>
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[560px] mb-10">
                Vantage Workspace is one platform — email, files, chat, meetings, docs, plus
                governed AI — running on your infrastructure. Twenty containers, one SSO, one audit
                trail, deployed in ten minutes.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 bg-ink text-paper font-ui font-medium text-[15px] px-8 py-4 hover:bg-oxblood transition-colors"
                >
                  See the platform
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="font-ui font-medium text-[15px] text-ink hover:text-oxblood underline decoration-[1.5px] underline-offset-4"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative aspect-[16/9] max-w-[640px] mx-auto lg:ml-auto">
                {/*
                  Hero video — rendered with HyperFrames + GSAP. 8s loop, paper-bg,
                  subtle scale + caption reveal. Poster image renders instantly so
                  there's no layout shift while the MP4 streams; <video> autoplays
                  muted so most browsers permit it. Falls back gracefully to the
                  poster when JS or autoplay is disabled.
                */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/product/vantage-workspace-stack.png"
                  className="w-full h-full object-contain"
                  aria-label="Vantage Workspace, rendered as a stacked physical platform: NemoClaw firewall canopy, sovereign workspace shell, chat capsule, email server, document vault, compliance ring, audit console, AI skills cartridges, model provider dock, mission engine, vector database, local LLM core."
                >
                  <source src="/videos/hero-stack.mp4" type="video/mp4" />
                  {/* Fallback for browsers that can't play the video */}
                  <Image
                    src="/images/product/vantage-workspace-stack.png"
                    alt="Vantage Workspace platform stack"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 640px"
                    className="object-contain"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline rule into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-ink-hairline"></div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — FRAMEWORK TRUST STRIP (midnight)                 */}
      {/* ============================================================ */}
      <section className="bg-midnight">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <p className="md:col-span-3 font-ui text-[12px] tracking-[0.18em] text-paper/60 uppercase">
              Audit-mapped to
            </p>
            <ul className="md:col-span-9 grid grid-cols-3 md:grid-cols-9 gap-x-4 gap-y-3">
              {FRAMEWORKS_TRUST.map((f) => (
                <li
                  key={f}
                  className="font-display text-[15px] md:text-[16px] text-paper whitespace-nowrap"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — THE SHIFT (paper, type-only editorial)            */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] sticky top-32">
                The shift
              </p>
            </div>
            <div className="lg:col-span-9 max-w-[760px]">
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-12">
                Most AI platforms were built for the demo.
                <br />
                <span className="text-ink-soft">Yours has to survive the audit.</span>
              </h2>
              <div className="font-display text-body-lg text-ink leading-relaxed space-y-6 max-w-[640px]">
                <p>
                  The first wave of enterprise AI was a chatbot in a browser tab. Buy a license,
                  point it at your data, hope. The proof of value was a screenshot. The proof of
                  safety was an acceptable-use policy in the employee handbook.
                </p>
                <p>
                  That window is closing. The EU AI Act high-risk obligations begin August 2, 2026
                  — and the audit window, when contemporaneous evidence has to exist, is already
                  open. Article 99 specifies penalties up to €35M or 7% of global revenue when
                  evidence is absent, not just when systems fail.
                </p>
                <p>
                  Agentic AI doesn&apos;t just answer questions. It takes actions on behalf of a
                  user — sends emails, modifies files, queries databases, provisions resources.
                  Each action needs an identity, a permission boundary, an audit log, and a way to
                  roll back. None of that lives in the chatbot. All of it has to live in the
                  platform around it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — PRODUCT SHOWCASE (paper-deep, dashboard image)   */}
      {/* ============================================================ */}
      <section className="bg-paper-deep">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[760px] mb-12">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              Your team starts here
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              One workspace. One identity. Twenty containers behind it.
            </h2>
            <p className="font-display text-body-lg text-ink leading-relaxed">
              Email, files, chat, meetings, docs — and an AI that does the work across all of
              them. Every prompt scanned. Every action logged. Every byte under your roof.
            </p>
          </div>

          <figure className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-ink-hairline shadow-[0_30px_80px_-20px_rgba(15,26,31,0.25)] bg-paper">
              <Image
                src="/images/product/dashboard.jpg"
                alt="The Vantage Workspace dashboard, showing a personalised greeting, AI firewall status, memory count, incident count, and a workspace of files, team chat, video meetings, email, and a mobile app."
                fill
                sizes="(max-width: 1440px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 font-ui text-byline text-ink-soft">
              The home dashboard — private to your organisation, AI firewall on, every memory
              attributed.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — ARCHITECTURE PREVIEW (midnight, 3D illustration) */}
      {/* ============================================================ */}
      <section className="bg-midnight relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-[4/5] max-w-[560px] mx-auto">
                <Image
                  src="/images/product/vantage-workspace-rack.png"
                  alt="On-prem Agentic AI deployment rack — Governance & Compliance Crown at the top (SOC 2, ISO 42001, NIST AI RMF, EPA, EU AI Act, PIPEDA, AIDA), Observability & Incident Response Kit, Mission Engine Plane (guided AI workflows), Vector Index Cartridge, Local Model Pod (Ollama, vLLM), Secret Vault & Key Management (bring your own key), Network Segmentation Panel, Storage Array, Compute Blade Stack, Enterprise Rack Chassis."
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 80vw, 560px"
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                The 7-Layer Defence
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-paper mb-8">
                Seven layers. One stack. Every action mediated.
              </h2>
              <p className="font-display text-body-lg text-paper/85 leading-relaxed mb-10 max-w-[440px]">
                Each layer addresses a specific failure mode. Each failure mode shows up in OWASP
                Top 10 for Agentic Applications, in NIST AI RMF, in EU AI Act Annex IV — often all
                three. The architecture is structural, not configurable. The audit log is
                non-contestable on whether the layers were running.
              </p>

              <ul className="border-t border-midnight-hairline mb-10">
                {[
                  ["01", "Policy Engine", "LLM01 · LLM06"],
                  ["02", "Prompt Defence (NemoClaw)", "LLM01 · LLM02 · LLM05"],
                  ["03", "Tool Guardrails", "LLM02 · LLM07"],
                  ["04", "Memory Safety", "LLM03 · LLM06 · LLM10"],
                  ["05", "Trust Boundaries", "LLM04 · LLM08"],
                  ["06", "Inter-Service Auth", "LLM04 · LLM09"],
                  ["07", "Supply Chain", "LLM05 · LLM09"],
                ].map(([n, name, owasp]) => (
                  <li
                    key={n}
                    className="border-b border-midnight-hairline py-3 grid grid-cols-12 gap-3 items-center"
                  >
                    <span className="col-span-2 font-mono text-[12px] text-gold tracking-[0.1em]">
                      {n}
                    </span>
                    <span className="col-span-7 font-display text-[15px] text-paper">{name}</span>
                    <span className="col-span-3 font-mono text-[11px] text-paper/55 text-right tracking-[0.05em]">
                      {owasp}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/architecture"
                className="inline-flex items-center gap-2 font-ui font-medium text-[15px] text-gold-soft hover:text-gold border-b border-gold-soft hover:border-gold pb-1 transition-colors"
              >
                Read the architecture
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — COMPLIANCE PROOF (paper, real dashboard image)   */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                Continuous compliance
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-6">
                Graded every build.
                <br />
                <span className="text-ink-soft">Not annually. Not by attestation.</span>
              </h2>
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[560px]">
                The compliance grade you see here is computed from runtime evidence — the same
                audit log an auditor would review. {COMPLIANCE.testCount} automated tests pass on
                every build. The grade has moved over time and we publish the moves.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border-l-2 border-success-ink pl-6">
                <p className="font-mono text-[12px] text-ink-soft uppercase tracking-[0.18em] mb-2">
                  As of {COMPLIANCE.lastAssessedHuman}
                </p>
                <p className="font-display text-[clamp(4rem,8vw,7rem)] font-normal leading-none text-success-ink mb-4">
                  {COMPLIANCE.grade}
                </p>
                <p className="font-display text-body text-ink">
                  {COMPLIANCE.passRate} pass rate across {COMPLIANCE.frameworkCount} regulatory
                  frameworks.
                </p>
              </div>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-ink-hairline bg-midnight shadow-[0_30px_80px_-20px_rgba(15,26,31,0.4)]">
              <Image
                src="/images/product/compliance-dashboard.jpg"
                alt="The Compliance Dashboard inside Handvantage The Engine — a large green A grade across the top, with framework compliance scores at 100% for NIST AI RMF, ISO 42001, EU AI Act, SOC 2, PCI DSS v4.0, HIPAA, FINRA, FedRAMP, PIPEDA, Privacy Act (Canada), and AIDA (proposed)."
                fill
                loading="lazy"
                sizes="(max-width: 1440px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 font-ui text-byline text-ink-soft">
              The Compliance Dashboard inside The Engine. The grade is computed in real time;
              every framework has a satisfying-events trail behind it.
            </figcaption>
          </figure>

          <div className="mt-12">
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 font-ui font-medium text-[15px] text-ink hover:text-oxblood border-b border-ink hover:border-oxblood pb-1 transition-colors"
            >
              See the compliance posture
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — NEMOCLAW FIREWALL (midnight, screenshot + stats) */}
      {/* ============================================================ */}
      <section className="bg-midnight relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[760px] mb-12">
            <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
              NemoClaw — the inline firewall
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-paper mb-8">
              Caught before the model sees it.
            </h2>
            <p className="font-display text-body-lg text-paper/85 leading-relaxed">
              Twenty-eight ATLAS-aligned rules. Direct prompt injection, indirect injection through
              poisoned RAG, data exfiltration patterns, canary-token detection. Every rule fires
              against every prompt before the request reaches the model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <figure className="lg:col-span-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-midnight-hairline">
                <Image
                  src="/images/product/nemoclaw-firewall.jpg"
                  alt="NemoClaw AI Firewall product UI — showing detected prompts, rule matches, and the ATLAS rule library."
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            </figure>

            <ul className="lg:col-span-4 grid grid-cols-1 gap-px bg-midnight-hairline border border-midnight-hairline">
              {[
                ["28", "ATLAS rules", "Active rule set across the OWASP Top 10 for Agentic Applications."],
                ["10/10", "OWASP coverage", "First-pass coverage of every category in the 2026 standard."],
                ["RFC 3161", "Signed events", "Every firewall decision timestamped, sequenced, anchored."],
                ["0", "Bypass paths", "Structural — there is no way around the layer."],
              ].map(([num, label, body]) => (
                <li key={String(label)} className="bg-midnight p-6">
                  <p className="font-mono text-[28px] text-gold-soft leading-none mb-3">{num}</p>
                  <p className="font-ui text-[12px] text-paper uppercase tracking-[0.12em] mb-2">
                    {label}
                  </p>
                  <p className="font-display text-[15px] text-paper/70 leading-relaxed">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — FROM A FOUNDER (paper, demo photo + quote)        */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden border border-ink-hairline">
                <Image
                  src="/images/founder/josh-demo-straight-talk.jpg"
                  alt="Josh Olayemi, founder of Handvantage, mid-conversation."
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="lg:col-span-7">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                From the founder
              </p>
              <blockquote className="font-display text-[clamp(1.5rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink mb-10 max-w-[640px]">
                <span className="text-oxblood font-display text-[3.5em] leading-[0] align-text-bottom mr-1">
                  &ldquo;
                </span>
                We built Handvantage because the alternative was a project, not a purchase. The
                identity layer was someone else&apos;s. The audit layer was something my engineers
                had to build. The compliance evidence layer was three weeks of consultancy hours
                twice a year. Vantage Workspace is the integration.
              </blockquote>
              <p className="font-ui text-byline text-ink-soft mb-10">
                — {SITE.founderName}, Founder
              </p>
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 font-ui font-medium text-[15px] text-ink hover:text-oxblood border-b border-ink hover:border-oxblood pb-1 transition-colors"
              >
                Read the philosophy
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — RECENT THINKING (paper, featured + 2 secondary)   */}
      {/* Asymmetric editorial layout: 1 large featured card on the    */}
      {/* left (7 cols), 2 stacked cards on the right (5 cols).        */}
      {/* ============================================================ */}
      <section className="bg-paper border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-4">
            <div>
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-4">
                Recent thinking
              </p>
              <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink">
                Field notes from the build.
              </h2>
            </div>
            <Link
              href="/insights"
              className="font-ui font-medium text-[15px] text-ink hover:text-oxblood border-b border-ink hover:border-oxblood pb-1 transition-colors"
            >
              See all insights →
            </Link>
          </div>

          {/* Featured + two-stacked layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Featured card — large, left, 7 cols */}
            <Link
              href="/insights/from-b-to-a-the-discipline-behind-the-upgrade"
              className="lg:col-span-7 group block"
            >
              <div className="relative aspect-[16/10] mb-8 overflow-hidden border border-ink-hairline bg-midnight">
                <Image
                  src="/images/product/compliance-dashboard.jpg"
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent"></div>
                {/* Category tag — overlaid */}
                <span className="absolute top-6 left-6 inline-block bg-paper px-3 py-1.5 font-ui font-medium text-[11px] text-ink uppercase tracking-[0.18em]">
                  Retrospective
                </span>
                {/* Headline — overlaid bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <h3 className="font-display text-[clamp(1.5rem,2vw+0.5rem,2.25rem)] leading-[1.1] text-paper mb-4 group-hover:text-gold-soft transition-colors">
                    From B to A: the discipline behind the upgrade
                  </h3>
                  <p className="font-display text-body text-paper/80 leading-relaxed max-w-[520px] line-clamp-2 mb-3">
                    What changed between February and May to move the compliance posture three
                    letter grades. Less novel methodology than you&apos;d expect.
                  </p>
                  <p className="font-ui text-byline text-paper/60">
                    Josh Olayemi · May 5, 2026 · 6 min read
                  </p>
                </div>
              </div>
            </Link>

            {/* Two stacked cards on the right, 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              {[
                {
                  slug: "eu-ai-act-deadline-ciso-ignoring",
                  category: "Briefing",
                  date: "May 2, 2026",
                  read: "5 min read",
                  headline: "The EU AI Act deadline your CISO is ignoring",
                  dek: "August 2, 2026 is the high-risk obligations deadline. The audit window opened in Q1 and most security leaders are still treating it as Q4 work.",
                  img: "/images/product/owasp-coverage.jpg",
                },
                {
                  slug: "why-40-percent-ai-projects-fail",
                  category: "Briefing",
                  date: "May 2, 2026",
                  read: "7 min read",
                  headline: "Why 40% of agentic AI projects fail",
                  dek: "Gartner's number, our reading. The pattern in cancelled projects is the same as in cancelled compliance reviews: missing evidence, not missing controls.",
                  img: "/images/product/policy-management.jpg",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group grid grid-cols-12 gap-5 items-start"
                >
                  <div className="col-span-5 relative aspect-[4/3] overflow-hidden border border-ink-hairline bg-paper-deep">
                    <Image
                      src={article.img}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 40vw, 250px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="col-span-7">
                    <p className="font-ui font-medium text-[11px] text-ink-soft uppercase tracking-[0.18em] mb-2">
                      {article.category}
                    </p>
                    <h3 className="font-display text-[20px] leading-[1.2] text-ink group-hover:text-oxblood transition-colors mb-2">
                      {article.headline}
                    </h3>
                    <p className="font-display text-[14px] text-ink-soft leading-relaxed line-clamp-2 mb-2">
                      {article.dek}
                    </p>
                    <p className="font-ui text-byline text-ink-soft">
                      {article.date} · {article.read}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — CTA (midnight, single editorial line)            */}
      {/* ============================================================ */}
      <section className="bg-midnight border-t border-midnight-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                Continue the conversation
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.05] tracking-[-0.01em] text-paper mb-8 max-w-[720px]">
                If your audit window is open, talk to us.
              </h2>
              <p className="font-display text-body-lg text-paper/80 leading-relaxed max-w-[560px]">
                Tell us what you&apos;re working on. We&apos;ll respond within a business day with
                either a thirty-minute conversation, a written response, or an honest &ldquo;this
                isn&apos;t our shape — here&apos;s a better fit.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-3 bg-paper text-ink hover:bg-gold hover:text-paper transition-colors px-6 py-4 font-ui font-medium text-[15px]"
              >
                <span>Talk to us about your platform</span>
                <span aria-hidden="true">→</span>
              </Link>
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
