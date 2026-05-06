/**
 * HomeArchitectureSection.tsx
 *
 * Replaces the existing Section 5 of the home page that currently renders
 * the architecture as a numbered text list with the labels "01 Policy
 * Engine 02 Prompt Defence ...".
 *
 * That text list was meant to be the screen-reader / fallback text
 * equivalent of an SVG diagram. The SVG was never rendered.
 *
 * This component does both:
 *   - Renders the actual SVG diagram (paper-background, oxblood/ink)
 *   - Keeps the prose lede + outbound link to /architecture
 */

import Link from "next/link";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function HomeArchitectureSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Eyebrow + H2 */}
        <div className="max-w-[720px] mb-12">
          <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-6">
            Architecture
          </p>
          <h2 className="font-display text-h2 text-ink leading-tight">
            Seven layers, each one mapped to a category of failure.
          </h2>
        </div>

        {/* Lede */}
        <div className="max-w-[720px] mb-16">
          <p className="font-display text-body-lg text-ink leading-relaxed">
            The 7-Layer Defence Architecture is the part of Vantage Workspace that makes the
            difference between a chatbot in a browser and a regulated platform. Each layer
            addresses a specific failure mode &mdash; and each failure mode shows up in the OWASP
            Top 10 for Agentic Applications, the NIST AI RMF function categories, or the EU AI Act
            high-risk technical requirements. Often all three.
          </p>
        </div>

        {/* The actual diagram */}
        <ArchitectureDiagram variant="full" />

        {/* Three short paragraphs below the diagram */}
        <div className="max-w-[720px] mt-16 flex flex-col gap-6">
          <p className="font-display text-body text-ink leading-relaxed">
            The architecture is not configurable. The layer ordering is structural. Skipping a
            layer or running them in the wrong sequence changes the behaviour of the whole stack
            &mdash; and the audit trail tells you which layer caught what.
          </p>
          <p className="font-display text-body text-ink leading-relaxed">
            We&rsquo;ve documented every layer in detail on the{" "}
            <Link href="/architecture" className="text-oxblood hover:underline underline-offset-4">
              architecture page
            </Link>
            , including the failure modes that show up when a layer is missing, the specific OWASP
            and NIST controls each one closes, and the runtime evidence each one produces.
          </p>
        </div>

        {/* Outbound link */}
        <div className="max-w-[720px] mt-12">
          <Link
            href="/architecture"
            className="font-display text-body text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
          >
            Read the full architecture page&nbsp;&rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeArchitectureSection;
