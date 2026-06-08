import Link from "next/link";
import { SITE } from "@/lib/data-tokens";
import type { VerticalConfig } from "@/lib/verticals";

type Props = { vertical: VerticalConfig };

export function VerticalLanding({ vertical: v }: Props) {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                              */}
      {/* ============================================================ */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16 md:pb-28">
          <div className="max-w-[920px]">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.18em] mb-8">
              <span className="text-oxblood">●</span>
              <span className="ml-2">{v.eyebrow}</span>
            </p>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw+1rem,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-10">
              {v.h1Lead}
              <br />
              <span className="text-oxblood">{v.h1Emphasis}</span>
            </h1>
            <p className="font-display text-body-lg text-ink leading-relaxed max-w-[680px] mb-10">
              {v.heroSubhead}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={SITE.consultingUrl}
                className="inline-flex items-center gap-2 bg-ink text-paper font-ui font-medium text-[15px] px-8 py-4 hover:bg-oxblood transition-colors"
              >
                Book a strategy session
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
      {/* SECTION 2 — THE SHIFT (editorial paragraphs)                 */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                {v.shiftEyebrow}
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink">
                {v.shiftHeadline}
                {v.shiftHeadlineCont ? (
                  <>
                    <br />
                    <span className="text-ink-soft">{v.shiftHeadlineCont}</span>
                  </>
                ) : null}
              </h2>
            </div>
            <div className="lg:col-span-8 max-w-[680px]">
              <div className="font-display text-body-lg text-ink leading-relaxed space-y-6">
                {v.shiftBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — FOUR CAPABILITY TILES                            */}
      {/* ============================================================ */}
      <section className="bg-paper-deep border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              What the platform does for {v.slug === "biotech" ? "your study" : "your team"}
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              Four capabilities. One platform.
            </h2>
            <p className="font-display text-body-lg text-ink leading-relaxed">
              The platform combines a sovereign workspace with an AI workforce that operates
              inside it under named identity, signed audit, and per-data-source allowlists. Four
              capabilities that matter most to a regulated{" "}
              {v.slug === "government" ? "agency" : v.slug === "legal" ? "practice" : v.slug === "biotech" ? "sponsor" : "organisation"}.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-hairline border border-ink-hairline">
            {v.featureTiles.map((tile) => (
              <li key={tile.headline} className="bg-paper p-8 md:p-10">
                <p className="font-mono text-byline text-oxblood uppercase tracking-[0.16em] mb-4">
                  {tile.eyebrow}
                </p>
                <h3 className="font-display text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)] leading-[1.15] text-ink mb-4">
                  {tile.headline}
                </h3>
                <p className="font-display text-body text-ink-soft leading-relaxed max-w-[560px]">
                  {tile.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WHY THIS MATTERS NOW                              */}
      {/* (no specific EU AI Act dates)                                 */}
      {/* ============================================================ */}
      <section className="bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 max-w-[760px]">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                Why this matters now
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-10">
                {v.whyNowHeadline}
              </h2>
              <div className="font-display text-body-lg text-ink leading-relaxed space-y-6">
                {v.whyNowBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 border-l-2 border-oxblood pl-6 max-w-[320px]">
                <p className="font-mono text-[12px] text-ink-soft uppercase tracking-[0.18em] mb-3">
                  The platform&apos;s assessment module
                </p>
                <p className="font-display text-[20px] leading-[1.3] text-ink mb-6">
                  Eleven framework templates plus vertical extensions, kept current as the
                  enforcement schedule advances.
                </p>
                <hr className="border-0 border-t border-ink-hairline mb-6" />
                <p className="font-mono text-[12px] text-ink-soft uppercase tracking-[0.18em] mb-3">
                  Frameworks active for {v.slug}
                </p>
                <ul className="space-y-1.5 font-display text-[14px] text-ink leading-snug">
                  {v.complianceFrameworks.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — ARCHITECTURE LINK BRIDGE (midnight)              */}
      {/* ============================================================ */}
      <section className="bg-midnight">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                The architecture behind the audit
              </p>
              <h2 className="font-display text-[clamp(1.75rem,2.5vw+0.5rem,2.75rem)] leading-[1.1] tracking-[-0.01em] text-paper mb-6 max-w-[640px]">
                Seven layers. One stack. Every action mediated.
              </h2>
              <p className="font-display text-body-lg text-paper/85 leading-relaxed max-w-[600px]">
                Each layer addresses a specific failure mode that shows up in OWASP Top 10 for
                Agentic Applications, in NIST AI RMF, in EU AI Act Annex IV — often all three.
                The architecture is structural, not configurable. The audit log is
                non-contestable on whether the layers were running.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
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
      {/* SECTION 6 — COMPLIANCE TILE (NemoClaw highlighted)           */}
      {/* ============================================================ */}
      <section className="bg-paper border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
                NemoClaw at the data plane
              </p>
              <h2 className="font-display text-[clamp(1.75rem,2.5vw+0.5rem,2.75rem)] leading-[1.1] tracking-[-0.01em] text-ink mb-6">
                {v.complianceNemoClawHeadline}
              </h2>
              <p className="font-display text-body-lg text-ink leading-relaxed mb-8">
                {v.complianceNemoClawBody}
              </p>
              <p className="font-display text-body text-ink-soft leading-relaxed">
                OpenClaw runs the AI Workers. NemoClaw locks down what those Workers can touch.
                The combination is what makes the same architecture deployable inside the
                perimeter regulators care about — Microsoft Scout runs OpenClaw inside Microsoft
                365; Vantage Workspace runs OpenClaw on Zero-Trust Infrastructure with NemoClaw
                at the data plane, on infrastructure you own.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-ink-hairline bg-paper-deep p-8 md:p-10">
                <p className="font-mono text-byline text-oxblood uppercase tracking-[0.16em] mb-4">
                  Frameworks covered
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-display text-[15px] text-ink leading-snug">
                  {v.complianceFrameworks.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-oxblood mt-1.5 shrink-0" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <circle cx="5" cy="5" r="2.5" />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 pt-8 border-t border-ink-hairline font-display text-body text-ink-soft leading-relaxed">
                  The trust report regenerates on every deployment — covering both the platform
                  controls and the AI workforce activity, mapped to the framework controls
                  auditors actually examine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — PROVIDER TILE (native integrations)              */}
      {/* ============================================================ */}
      <section className="bg-paper-deep">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px]">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              Native data access
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-8">
              {v.providerHeadline}
            </h2>
            <p className="font-display text-body-lg text-ink leading-relaxed">
              {v.providerBody}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — FROM THE FOUNDER (pattern statement)             */}
      {/* ============================================================ */}
      <section className="bg-paper border-t border-ink-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-[820px]">
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.12em] mb-6">
              The pattern
            </p>
            <blockquote className="font-display text-[clamp(1.5rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink mb-10 max-w-[760px]">
              <span className="text-oxblood font-display text-[3.5em] leading-[0] align-text-bottom mr-1">
                &ldquo;
              </span>
              {v.closingInsight}
            </blockquote>
            <p className="font-ui text-byline text-ink-soft">
              — {SITE.founderName}, Founder
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — STRATEGY SESSION CTA (midnight)                  */}
      {/* ============================================================ */}
      <section className="bg-midnight border-t border-midnight-hairline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                Continue the conversation
              </p>
              <h2 className="font-display text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.05] tracking-[-0.01em] text-paper mb-8 max-w-[720px]">
                {v.ctaHeadline}
              </h2>
              <p className="font-display text-body-lg text-paper/80 leading-relaxed max-w-[600px]">
                {v.ctaBody}
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
