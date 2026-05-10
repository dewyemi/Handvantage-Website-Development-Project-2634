"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HMark } from "./HMark";

const NAV = [
  { label: "Product", href: "/product" },
  { label: "For Teams", href: "/for-teams" },
  { label: "Architecture", href: "/architecture" },
  { label: "Compliance", href: "/compliance" },
  { label: "Insights", href: "/insights" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-ink-hairline">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Handvantage home"
          className="flex items-center gap-2 text-ink hover:text-oxblood transition-colors"
        >
          <HMark className="h-5 md:h-6 text-oxblood" />
          <span className="font-ui font-semibold text-base md:text-lg tracking-[-0.01em]">
            Handvantage
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-ui font-medium text-[15px] text-ink hover:text-oxblood underline-offset-4 ${
                  active ? "underline decoration-oxblood" : "hover:underline"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 font-ui font-medium text-[15px] text-oxblood hover:text-oxblood-soft hover:underline decoration-2 underline-offset-4"
          >
            Talk to us&nbsp;→
          </Link>
        </nav>

        <button
          className="md:hidden h-11 w-11 flex items-center justify-center text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-16 bg-paper z-30 flex flex-col items-center pt-16 gap-8"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-[28px] text-ink hover:text-oxblood"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-display text-[28px] text-oxblood underline decoration-2 underline-offset-4 mt-4"
          >
            Talk to us&nbsp;→
          </Link>
        </div>
      )}
    </header>
  );
}
