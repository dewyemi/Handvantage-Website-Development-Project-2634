/**
 * FounderPortraitSection.tsx
 *
 * The "From a founder" section on the home page (Section 7) and the
 * portrait + caption block at the bottom of the /philosophy page.
 *
 * Replaces the existing rendering where the portrait area is an empty
 * paper-deep coloured block with the alt text rendered as a caption.
 * The actual photograph (josh-olayemi-bw-1500.jpg) was never wired in.
 *
 * The image lives at /public/images/portraits/josh-olayemi-bw-1500.jpg
 * (1500px on the long side, B&W treatment, 166 KB).
 *
 * Two sizes:
 *   - "home"        : right-column portrait beside the prose, square-ish
 *   - "philosophy"  : centered below the essay, larger
 */

import Image from "next/image";
import Link from "next/link";

interface FounderPortraitSectionProps {
  variant: "home" | "philosophy";
}

export function FounderPortraitSection({ variant }: FounderPortraitSectionProps) {
  if (variant === "home") {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-8">
            From a founder
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Portrait — left column on desktop, top on mobile */}
            <figure className="order-1 md:order-1">
              <div className="relative w-full max-w-[480px] aspect-square border border-ink-hairline overflow-hidden">
                <Image
                  src="/images/portraits/josh-olayemi-bw-1500.jpg"
                  alt="Josh Olayemi, founder of Handvantage, in his Toronto office."
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </figure>

            {/* Prose — right column on desktop, below on mobile */}
            <div className="order-2 md:order-2">
              <h2 className="font-display text-h2 text-ink leading-tight mb-8">
                We built Handvantage because the alternative was a project, not a purchase.
              </h2>

              <div className="font-display text-body text-ink leading-relaxed flex flex-col gap-6">
                <p>
                  I started Handvantage in 2024, in Toronto, after spending eighteen months trying to
                  assemble an &ldquo;agentic AI stack&rdquo; for clients out of the parts the major
                  vendors were shipping. The pattern I kept hitting was: every individual piece existed,
                  but the integration was the project. The identity layer was someone else&rsquo;s product.
                  The audit layer was something my engineers had to build. The compliance evidence layer
                  was three weeks of consultancy hours twice a year.
                </p>

                <p>
                  Vantage Workspace is the integration. The 7-Layer Defence Architecture is what we
                  needed before we could trust an agent to take an action on behalf of a real user.
                  The continuous compliance posture is what made it possible to ship sixty-eight sprints
                  without a regulator-blocking rollback.
                </p>

                <p>
                  We publish the parts we haven&rsquo;t finished. The engineering posts on the{" "}
                  <Link href="/insights" className="text-oxblood hover:underline underline-offset-4">
                    insights page
                  </Link>{" "}
                  name the failure modes we&rsquo;re still working on. The compliance page lists the
                  frameworks where we just moved from B to A. The architecture page links to the
                  trade-offs we made and the ones we&rsquo;re still making.
                </p>

                <p className="font-display italic text-ink-soft mt-2">
                  &mdash; Josh Olayemi, Founder
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/philosophy"
                  className="font-display text-body text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
                >
                  Read the full philosophy&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // variant === "philosophy" — large centered portrait below the essay
  return (
    <section className="py-16">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <figure className="flex flex-col items-center">
          <div className="relative w-full max-w-[720px] aspect-square border border-ink-hairline overflow-hidden">
            <Image
              src="/images/portraits/josh-olayemi-bw-1500.jpg"
              alt="Josh Olayemi, founder of Handvantage, in his Toronto office."
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 font-ui text-byline text-ink-soft text-center">
            Josh Olayemi, founder of Handvantage. Toronto, May 2026.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default FounderPortraitSection;
