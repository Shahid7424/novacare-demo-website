"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "How it works", href: "/#how" },
  { label: "Results", href: "/#results" },
  { label: "Our story", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-forest-deep text-cream text-center text-[13px] py-2 px-4">
        <span className="opacity-80">New:</span> NovaCare now integrates with 40+
        EHR systems.{" "}
        <Link href="/contact" className="underline underline-offset-2 hover:text-spring">
          See what&apos;s new →
        </Link>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-line shadow-soft"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative grid place-items-center w-8 h-8 rounded-xl bg-forest text-cream">
              <Leaf />
            </span>
            <span className="font-display text-xl tracking-tight text-forest">
              NovaCare
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-ink/70 hover:text-forest transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-forest font-medium hover:opacity-70 transition"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium px-4 py-2 rounded-full bg-forest text-cream hover:bg-forest-soft transition-colors"
            >
              Get a demo
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-forest"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-forest transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-forest transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-forest transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-cream border-t border-line px-5 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-ink/80 hover:text-forest"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center font-medium px-4 py-2.5 rounded-full bg-forest text-cream"
            >
              Get a demo
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

function Leaf() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21c0-6 3-11 9-13-1 8-4 12-9 13Z"
        fill="#34D399"
        opacity="0.9"
      />
      <path
        d="M12 21C12 13 8 6 3 4c1 9 4 15 9 17Z"
        fill="#F7F6F1"
      />
    </svg>
  );
}