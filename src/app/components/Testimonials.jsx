"use client";

import { Reveal } from "./Revel";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "In our first month, NovaCare scheduled over 40 appointments without us lifting a finger. It's like a full-time team working in the background.",
    name: "Izabelle S.",
    role: "Practice Manager · Moksha Aesthetics",
  },
  {
    text: "Our team no longer spends the day chasing patients. Outreach runs on its own, and appointments just appear on the schedule.",
    name: "Dr. Sadeghi",
    role: "Pure Dermatology & Skin Surgery",
  },
  {
    text: "We're spending less on marketing because we're reactivating patients we already know. It's a smarter way to grow.",
    name: "Dr. Behroozan",
    role: "Dermatology Institute of SoCal",
  },
  {
    text: "NovaCare resurfaces overdue skin checks for patients with a history of concern — making sure no one slips through the cracks.",
    name: "Dr. Elias",
    role: "Elias Dermatology",
  },
  {
    text: "After seeing how fast it drove ROI, I didn't just stay a customer — I became an investor. It delivers real results, fast.",
    name: "Dr. Potozkin",
    role: "Potozkin MD Skincare Center",
  },
  {
    text: "An almost effortless, revenue-generating addition. In the first weeks it had already paid for itself.",
    name: "Dr. Sullivan",
    role: "Sullivan Dermatology",
  },
];

export default function Testimonials() {
  const extendedQuotes = [...quotes, ...quotes];

  return (
    <section className="bg-cream grain border-y border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-forest/60">
              From the front office
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl text-forest leading-[1.08]">
              What practices say about NovaCare.
            </h2>
          </Reveal>
        </div>

        {/* Auto-scroll carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedQuotes.map((q, i) => (
              <div
                key={i}
                className="shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <figure className="h-full rounded-3xl border border-line bg-white p-6 shadow-soft">
                  <div className="text-spring text-3xl font-display leading-none">
                    &ldquo;
                  </div>
                  <blockquote className="mt-2 text-ink leading-relaxed">
                    {q.text}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-forest text-cream font-display text-sm shrink-0">
                      {q.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-forest truncate">
                        {q.name}
                      </div>
                      <div className="text-xs text-mute truncate">{q.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}