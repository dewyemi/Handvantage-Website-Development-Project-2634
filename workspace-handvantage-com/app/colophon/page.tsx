import type { Metadata } from "next";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Colophon",
  description: "Editorial credits, typography, and source notes for workspace.handvantage.com.",
  alternates: { canonical: `${SITE.baseUrl}/colophon` },
};

export default function ColophonPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>COLOPHON</SectionEyebrow>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-6">Colophon.</h1>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            How this website was made, in case you&apos;re curious. This is a small page but a
            deliberate one — knowing the typography, the build stack, and the editorial discipline
            behind the site helps the reader read the rest of it.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            <h2 className="font-display text-h3 text-ink mt-4">Typography</h2>
            <p>
              <strong className="font-semibold">Source Serif 4</strong> by Frank Grießhammer
              (Adobe). Used for display and body type. Open-source under the SIL Open Font Licence.
            </p>
            <p>
              <strong className="font-semibold">Inter Tight</strong> by Rasmus Andersson (Inter
              Foundation). Used for UI and small-caps eyebrow labels. Open-source under the SIL
              Open Font Licence.
            </p>
            <p>
              <strong className="font-semibold">IBM Plex Mono</strong> by Mike Abbink and the IBM
              Brand Experience and Design team. Used for numerics, code, and technical detail.
              Open-source under the SIL Open Font Licence.
            </p>
            <p>
              All three families are self-hosted. There is no runtime request to a font CDN.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Palette</h2>
            <p>
              Three core tones — <strong className="font-semibold">paper</strong> (#F5F1EA, a warm
              cream), <strong className="font-semibold">ink</strong> (#1A1F1B, a near-black with a
              green-grey undertone), and <strong className="font-semibold">oxblood</strong>{" "}
              (#722F37, the single accent). The palette is deliberately not the SaaS-template blue.
              The visual reference is editorial print, not product UI.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Stack</h2>
            <p>
              Built with <strong className="font-semibold">Next.js 14</strong> (App Router),{" "}
              <strong className="font-semibold">TypeScript</strong>, and{" "}
              <strong className="font-semibold">Tailwind CSS</strong>. Deployed on{" "}
              <strong className="font-semibold">Netlify</strong>. Analytics via{" "}
              <strong className="font-semibold">Plausible</strong> (privacy-friendly, cookie-free).
              No JavaScript is required to read the site — every page is server-rendered, the
              architecture diagram is inline SVG, and the only client-side interactivity is the
              mobile-nav toggle and the contact form.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Editorial cadence</h2>
            <p>
              The insights archive aims for one new article every one to two weeks. The category
              shape — briefings, retrospectives, sector dossiers, field notes — is borrowed from
              the editorial lineage of the FT Long Read and Granta. The four operating principles
              for every page on this site are: recognition over persuasion, curiosity over urgency,
              value over capture, and the hero is the reader.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Authorship</h2>
            <p>
              Written and edited in {SITE.city} by {SITE.founderName} and the Handvantage team.
              Editorial review by an external reader who pushes back on jargon. Engineering review
              for any claim that touches the platform&apos;s technical posture.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">A note on what isn&apos;t here</h2>
            <p>
              No newsletter form. No social-share buttons. No exit-intent popups. No live chat. No
              tracking pixels. No &ldquo;trusted by&rdquo; logo strip. No testimonial carousel. No
              cookie banner. No generated stock photography. No bento grids. The absence is part
              of the editorial signal.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
