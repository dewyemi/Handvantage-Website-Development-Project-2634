import { ARCHITECTURE } from "@/lib/data-tokens";

interface Props {
  mode?: "preview" | "interactive";
  className?: string;
}

// Inline SVG 7-Layer Defence diagram. Editorial palette (paper / ink / oxblood).
// "preview" mode: static, no hover. "interactive": :hover-driven CSS expansion (CSS-only, no JS).
export function ArchitectureDiagram({ mode = "preview", className = "" }: Props) {
  const layers = ARCHITECTURE.layers;
  const rowH = 70;
  const totalH = rowH * layers.length + 40;

  return (
    <figure className={className}>
      <svg
        role="img"
        aria-labelledby="arch-title arch-desc"
        viewBox={`0 0 1000 ${totalH}`}
        width="100%"
        className="block"
      >
        <title id="arch-title">7-Layer Defence Architecture</title>
        <desc id="arch-desc">
          A vertical stack of seven structural layers, numbered 1 through 7 from top (Policy
          Engine) to bottom (Supply Chain). Each layer is labelled with the OWASP Top 10 for
          Agentic Applications categories it covers. Requests enter at the top, are processed
          through all seven layers, and the audit log is emitted at the bottom.
        </desc>

        {/* Hairline frame */}
        <rect
          x="0.5"
          y="0.5"
          width="999"
          height={totalH - 1}
          fill="none"
          stroke="#D2C9B7"
          strokeWidth="1"
        />

        {/* Layers */}
        {layers.map((layer, i) => {
          const y = 20 + i * rowH;
          return (
            <g key={layer.n} className={mode === "interactive" ? "arch-layer" : undefined}>
              {/* Layer separator line (top of each except first) */}
              {i > 0 && (
                <line x1="0" y1={y} x2="1000" y2={y} stroke="#D2C9B7" strokeWidth="0.5" />
              )}
              {/* Layer number block (left) */}
              <text
                x="40"
                y={y + rowH / 2 + 5}
                fontFamily="IBM Plex Mono, monospace"
                fontSize="12"
                fill="#722F37"
                letterSpacing="2"
              >
                {String(layer.n).padStart(2, "0")}
              </text>
              {/* Layer name */}
              <text
                x="100"
                y={y + rowH / 2 - 4}
                fontFamily="Source Serif 4, Georgia, serif"
                fontSize="20"
                fontWeight="600"
                fill="#1A1F1B"
              >
                {layer.name}
              </text>
              {/* Layer summary */}
              <text
                x="100"
                y={y + rowH / 2 + 18}
                fontFamily="Inter Tight, Inter, sans-serif"
                fontSize="13"
                fill="#4A4F4B"
              >
                {layer.summary}
              </text>
              {/* OWASP IDs (right) */}
              <text
                x="960"
                y={y + rowH / 2 + 5}
                fontFamily="IBM Plex Mono, monospace"
                fontSize="11"
                fill="#4A4F4B"
                textAnchor="end"
                letterSpacing="1.5"
              >
                {layer.owaspIds.join(" · ")}
              </text>
            </g>
          );
        })}

        {/* Top arrow indicator */}
        <text
          x="500"
          y="14"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="10"
          fill="#722F37"
          textAnchor="middle"
          letterSpacing="2"
        >
          REQUEST IN ↓
        </text>
      </svg>
      <figcaption className="font-ui text-byline text-ink-soft mt-4 text-center">
        The 7-Layer Defence Architecture. Each layer maps to OWASP Top 10 for Agentic Applications
        categories.
      </figcaption>

      {/* Text-equivalent (always rendered, screen-reader friendly) */}
      <details className="mt-4 max-w-[720px] mx-auto text-byline font-ui text-ink-soft">
        <summary className="cursor-pointer hover:text-oxblood">
          Text equivalent of the diagram
        </summary>
        <ol className="mt-4 list-decimal list-inside space-y-2">
          {layers.map((l) => (
            <li key={l.n}>
              <span className="font-display text-ink font-semibold">{l.name}</span> — {l.summary}{" "}
              <span className="font-mono">({l.owaspIds.join(", ")})</span>
            </li>
          ))}
        </ol>
      </details>
    </figure>
  );
}
