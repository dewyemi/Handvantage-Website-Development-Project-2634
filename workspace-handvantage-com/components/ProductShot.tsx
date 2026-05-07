import Image from "next/image";

type Theme = "light" | "dark";
type Tone = "paper" | "midnight";

interface ProductShotProps {
  src: string;
  alt: string;
  ratio: number;
  caption?: string;
  url?: string;
  tone?: Tone;
  priority?: boolean;
  className?: string;
  /** Maximum width in pixels for the inner image area. Defaults to no cap. */
  maxWidth?: number;
}

const TRAFFIC = [
  { color: "#FF5F57" },
  { color: "#FEBC2E" },
  { color: "#28C840" },
];

export function ProductShot({
  src,
  alt,
  ratio,
  caption,
  url,
  tone = "paper",
  priority = false,
  className = "",
  maxWidth,
}: ProductShotProps) {
  const theme: Theme = tone === "midnight" ? "dark" : "light";
  const chromeBg = theme === "dark" ? "bg-[#1F2A2F]" : "bg-[#E8E1D2]";
  const chromeBorder = theme === "dark" ? "border-[#2A363C]" : "border-ink-hairline";
  const urlPillBg = theme === "dark" ? "bg-[#2A363C] text-paper/55" : "bg-paper text-ink-soft";
  const captionColor = theme === "dark" ? "text-paper/55" : "text-ink-soft";
  const ringColor = theme === "dark" ? "ring-midnight-hairline" : "ring-ink-hairline";
  const innerBg = theme === "dark" ? "bg-[#0B1216]" : "bg-paper";

  return (
    <figure className={`relative ${className}`} style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}>
      <div
        className={`relative rounded-[6px] overflow-hidden ring-1 ${ringColor} shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]`}
      >
        <div className={`flex items-center gap-2 px-4 py-2.5 ${chromeBg} border-b ${chromeBorder}`}>
          <div className="flex items-center gap-1.5">
            {TRAFFIC.map((t) => (
              <span
                key={t.color}
                className="block w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: t.color }}
              />
            ))}
          </div>
          {url && (
            <div className={`ml-3 px-3 py-0.5 rounded-sm font-mono text-[11px] ${urlPillBg} truncate max-w-[420px]`}>
              {url}
            </div>
          )}
        </div>
        <div className={`relative ${innerBg}`} style={{ aspectRatio: ratio.toFixed(3) }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(max-width: 1024px) 92vw, 1100px"
            className="object-contain"
          />
        </div>
      </div>
      {caption && (
        <figcaption className={`font-mono text-[11px] ${captionColor} tracking-[0.04em] mt-3`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
