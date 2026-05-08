import Link from "next/link";
import { SITE } from "@/lib/data-tokens";

interface Props {
  eyebrow?: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  emphasised?: boolean;
}

export function CTABlock({
  eyebrow = "CONTINUE THE CONVERSATION",
  headline,
  body,
  ctaLabel,
  ctaHref = "/contact",
  emphasised = false,
}: Props) {
  return (
    <section className={`cta-block ${emphasised ? "bg-paper-deep" : "bg-paper"} py-16 md:py-24`}>
      <div className="max-w-[720px] mx-auto px-6 md:px-12 text-center">
        <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-6">
          {eyebrow}
        </p>
        <h2 className="font-display text-h2 text-ink leading-tight mb-8">{headline}</h2>
        <p className="font-display text-body-lg text-ink leading-relaxed mb-12 max-w-[600px] mx-auto">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="font-display text-body-lg text-oxblood hover:text-oxblood-soft underline decoration-[1.5px] underline-offset-4 hover:decoration-2"
        >
          {ctaLabel}&nbsp;→
        </Link>
        <p className="mt-8 font-ui text-body-sm text-ink-soft">
          Or write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-oxblood hover:underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          directly.
        </p>
      </div>
    </section>
  );
}
