"use client";

import Link from "next/link";
import { Reveal } from "./Revel";

export default function CTA() {
  return (
    <section className="bg-cream grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-16 sm:px-16 sm:py-24 text-center text-cream">
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-spring/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-spring/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] text-balance max-w-3xl mx-auto">
                Ready to grow your practice — without more work?
              </h2>
              <p className="mt-5 text-cream/70 max-w-xl mx-auto">
                See how NovaCare fills your calendar and closes care gaps in a
                15-minute walkthrough. No commitment.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-spring px-8 py-4 text-forest-deep font-semibold hover:bg-spring-bright transition-colors"
              >
                Book a free consult →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}