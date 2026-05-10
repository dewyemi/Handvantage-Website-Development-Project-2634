/**
 * PullQuote — editorial display treatment for high-leverage statements.
 *
 * Use when a sentence carries weight and deserves visual separation
 * from surrounding body copy. Examples: a thesis sentence, a
 * board-ready summary, a key positioning claim, an attribution-worthy
 * declaration.
 *
 * Don't overuse — three pull-quotes on a page dilutes each. One per
 * section, at most.
 */

interface Props {
  children: React.ReactNode;
  attribution?: string;       // optional small-caps attribution under the quote
  audience?: string;          // optional eyebrow (e.g. "TO THE CFO")
  tone?: "paper" | "midnight";
  size?: "default" | "lg";
  className?: string;
}

export function PullQuote({
  children,
  attribution,
  audience,
  tone = "paper",
  size = "default",
  className = "",
}: Props) {
  const dark = tone === "midnight";

  const accentColor = dark ? "border-gold-soft" : "border-oxblood";
  const accentText = dark ? "text-gold-soft" : "text-oxblood";
  const bodyText = dark ? "text-paper" : "text-ink";
  const subtleText = dark ? "text-paper/65" : "text-ink-soft";

  const sizeClass =
    size === "lg"
      ? "text-[clamp(1.625rem,2vw+1rem,2.25rem)] leading-[1.25]"
      : "text-[clamp(1.25rem,1.5vw+0.5rem,1.625rem)] leading-[1.3]";

  return (
    <figure
      className={`relative my-10 md:my-14 max-w-[820px] ${className}`}
    >
      <div className={`border-l-4 ${accentColor} pl-6 md:pl-8 py-2 md:py-3`}>
        {audience && (
          <p
            className={`font-mono text-byline ${accentText} uppercase tracking-[0.18em] mb-4`}
          >
            {audience}
          </p>
        )}
        <blockquote
          className={`font-display ${sizeClass} ${bodyText} tracking-[-0.005em]`}
        >
          {/* Decorative open-quote glyph in accent colour */}
          <span aria-hidden="true" className={`${accentText} mr-1`}>
            &ldquo;
          </span>
          {children}
          <span aria-hidden="true" className={accentText}>
            &rdquo;
          </span>
        </blockquote>
        {attribution && (
          <figcaption
            className={`font-mono text-byline ${subtleText} uppercase tracking-[0.16em] mt-4`}
          >
            — {attribution}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
