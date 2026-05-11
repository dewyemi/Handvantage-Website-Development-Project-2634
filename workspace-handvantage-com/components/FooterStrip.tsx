import Link from "next/link";
import { SITE } from "@/lib/data-tokens";

const SITE_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Architecture", href: "/architecture" },
  { label: "Compliance", href: "/compliance" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Insights", href: "/insights" },
  { label: "The Handbook", href: "/handbook" },
  { label: "The Vantage Pilot", href: "/vantage-pilot" },
  { label: "Talk to us", href: "/contact" },
];

const ROLE_LINKS = [
  { label: "For business teams", href: "/for-teams" },
  { label: "For the CISO", href: "/for-ciso" },
];

export function FooterStrip() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper border-t border-ink-hairline pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <div>
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.15em] mb-4">
              Handvantage
            </p>
            <p className="font-display text-body text-ink leading-relaxed max-w-xs">
              The Sovereign Capability Partner for organisations building with agentic AI. Founded {SITE.foundedYear}.
            </p>
          </div>

          <div>
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.15em] mb-4">
              Site
            </p>
            <ul className="flex flex-col gap-2">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui font-medium text-[15px] text-ink hover:text-oxblood hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.15em] mb-4">
              For your role
            </p>
            <ul className="flex flex-col gap-2">
              {ROLE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui font-medium text-[15px] text-ink hover:text-oxblood hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.15em] mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-ui font-medium text-[15px] text-oxblood hover:underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="font-ui font-medium text-[15px] text-ink">{SITE.city}, Canada</li>
              <li className="mt-2">
                <a
                  href={SITE.linkedInCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui font-medium text-[15px] text-oxblood hover:underline underline-offset-4"
                >
                  LinkedIn&nbsp;↗
                </a>
              </li>
              <li className="mt-2">
                <a
                  href={SITE.consultingUrl}
                  className="font-ui font-medium text-[15px] text-ink-soft hover:text-oxblood hover:underline underline-offset-4"
                >
                  Handvantage consulting&nbsp;↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-0 border-t border-ink-hairline" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-byline text-ink-soft font-ui">
          <p>© {year} Handvantage. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-3">
            <Link href="/privacy" className="hover:text-oxblood hover:underline underline-offset-4">
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-oxblood hover:underline underline-offset-4">
              Terms
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/colophon" className="hover:text-oxblood hover:underline underline-offset-4">
              Colophon
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
