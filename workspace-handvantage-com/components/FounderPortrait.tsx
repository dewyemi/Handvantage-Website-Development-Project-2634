// Founder portrait container. Drop the actual image into /public/images/portraits/
// josh-olayemi-bw-1500.jpg and the <img> below will render it. While the image
// is missing, the broken-image icon renders behind the editorial placeholder
// label — visually acceptable for v1, replaced as soon as the file lands.
interface Props {
  size?: "default" | "large";
  alt?: string;
  className?: string;
}

export function FounderPortrait({
  size = "default",
  alt = "Josh Olayemi, founder of Handvantage, in his Toronto office.",
  className = "",
}: Props) {
  const dim = size === "large" ? 720 : 480;
  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className="relative bg-paper-deep border border-ink-hairline overflow-hidden"
        style={{ width: "100%", aspectRatio: "1 / 1", maxWidth: dim }}
      >
        {/* Editorial placeholder — sits behind the img so it shows through when img is missing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-ui text-eyebrow text-ink-soft uppercase tracking-[0.15em]">
            Portrait
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portraits/josh-olayemi-bw-1500.jpg"
          alt={alt}
          width={dim}
          height={dim}
          loading="lazy"
          className="relative w-full h-full object-cover"
        />
      </div>
      <figcaption className="font-ui text-byline text-ink-soft mt-3">{alt}</figcaption>
    </figure>
  );
}
