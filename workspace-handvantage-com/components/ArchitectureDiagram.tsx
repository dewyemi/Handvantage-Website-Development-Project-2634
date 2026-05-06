/**
 * ArchitectureDiagram.tsx
 *
 * The 7-Layer Defence Architecture as a real SVG diagram, NOT a numbered list.
 *
 * This component replaces the existing "01 Policy Engine 02 Prompt Defence ..."
 * text-list rendering on the home page Section 5 (architecture preview) and
 * on the /architecture page Section 3 (full architecture).
 *
 * Drop-in: place the SVG file at /public/images/diagrams/7-layer-defence.svg
 * and import this component anywhere that previously rendered the text list.
 *
 * Accessibility: the SVG has <title> and <desc> elements rooted at the
 * accessibility tree. The <details> block below the SVG provides a text
 * equivalent for screen readers and for print. Both are always present;
 * the <details> is collapsed by default so it doesn't visually duplicate
 * the diagram for sighted readers.
 */

import Image from "next/image";

const LAYERS = [
  { n: "01", name: "Policy Engine",      blurb: "Pre-prompt policy resolution. Identity-tagged.",                owasp: "LLM01 · LLM06"          },
  { n: "02", name: "Prompt Defence",     blurb: "Inline firewall (NemoClaw). 28 ATLAS rules. Canary tokens.",   owasp: "LLM01 · LLM02 · LLM05"  },
  { n: "03", name: "Tool Guardrails",    blurb: "Pre-execution validation. Per-tool permission scope.",          owasp: "LLM02 · LLM07"          },
  { n: "04", name: "Memory Safety",      blurb: "Conversation isolation. Cross-session leakage prevention.",     owasp: "LLM03 · LLM06 · LLM10"  },
  { n: "05", name: "Trust Boundaries",   blurb: "Inter-agent message validation. Role isolation.",               owasp: "LLM04 · LLM08"          },
  { n: "06", name: "Inter-Service Auth", blurb: "Mutual TLS. Certificate-rooted. Zero shared secrets.",          owasp: "LLM04 · LLM09"          },
  { n: "07", name: "Supply Chain",       blurb: "Cryptographic manifest verification. Load-time check.",         owasp: "LLM05 · LLM09"          },
];

interface ArchitectureDiagramProps {
  /** "preview" = used on home page (smaller, no text equivalent shown). "full" = used on /architecture page (with text equivalent details). */
  variant?: "preview" | "full";
  className?: string;
}

export function ArchitectureDiagram({ variant = "full", className = "" }: ArchitectureDiagramProps) {
  return (
    <figure className={`architecture-diagram ${className}`}>
      <div className="relative w-full max-w-[720px] mx-auto">
        <Image
          src="/images/diagrams/7-layer-defence.svg"
          alt="The 7-Layer Defence Architecture, showing seven structural layers from Policy Engine to Supply Chain, each labelled with the OWASP Top 10 for Agentic Applications categories it covers."
          width={720}
          height={720}
          priority={variant === "preview"}
          className="w-full h-auto"
          unoptimized
        />
      </div>

      <figcaption className="mt-6 text-center font-ui text-[13px] text-ink-soft max-w-[640px] mx-auto leading-relaxed">
        Each request enters at Layer 1 and is processed through Layers 2&ndash;7 in sequence.
        Every layer produces an audit event. The events aggregate into the Trust Report at request completion.
      </figcaption>

      {variant === "full" && (
        <details className="mt-8 max-w-[640px] mx-auto text-body-sm">
          <summary className="cursor-pointer font-ui font-medium text-[13px] text-ink-soft uppercase tracking-[0.08em] hover:text-oxblood">
            Text equivalent of the diagram
          </summary>
          <ol className="mt-6 flex flex-col gap-4 list-none pl-0">
            {LAYERS.map((layer) => (
              <li key={layer.n} className="flex flex-col gap-1">
                <span className="font-display font-semibold text-ink">
                  Layer {layer.n} &mdash; {layer.name}
                </span>
                <span className="font-display text-ink leading-relaxed">{layer.blurb}</span>
                <span className="font-mono text-[12px] text-ink-soft tracking-wide">
                  Maps to {layer.owasp}
                </span>
              </li>
            ))}
          </ol>
        </details>
      )}
    </figure>
  );
}

export default ArchitectureDiagram;
