"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Revel";

const cases = [
  {
    key: "overdue",
    title: "Overdue treatments",
    body: "Automatically re-engage patients who are overdue for routine or follow-up care, before small issues become big ones.",
    stat: "38%",
    statLabel: "of overdue patients re-booked",
  },
  {
    key: "reactivation",
    title: "Reactivations",
    body: "Bring long-lapsed patients back into care with intelligent, personalized outreach that feels human, not automated.",
    stat: "1.4k",
    statLabel: "lapsed patients recovered / mo",
  },
  {
    key: "noshow",
    title: "No-shows",
    body: "Fill your schedule by recovering missed visits — without your team making a single phone call.",
    stat: "−27%",
    statLabel: "drop in no-show rate",
  },
  {
    key: "cancel",
    title: "Cancellations",
    body: "Automatically rebook cancellations and backfill openings so gaps in the calendar close themselves.",
    stat: "9 min",
    statLabel: "avg. time to rebook",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-cream grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.2em] text-forest/60">
                NovaCare in action
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl text-forest leading-[1.08] text-balance">
                Every gap in your calendar, quietly closed.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-2">
              {cases.map((c, i) => (
                <button
                  key={c.key}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl border px-5 py-4 transition-all ${
                    active === i
                      ? "border-forest shadow-soft"
                      : "border-line bg-transparent hover:bg-white/50"
                  }`}
                >
                  <span
                    className={`font-display text-xl ${
                      active === i ? "text-forest" : "text-ink/60"
                    }`}
                  >
                    {c.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="relative rounded-4xl bg-forest text-cream p-8 sm:p-10 min-h-[340px] shadow-lift overflow-hidden">
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-spring/15 blur-2xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <span className="inline-block rounded-full bg-cream/10 px-3 py-1 text-xs uppercase tracking-wide text-spring">
                  Use case
                </span>
                <h3 className="mt-5 font-display text-3xl">
                  {cases[active].title}
                </h3>
                <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
                  {cases[active].body}
                </p>
                <div className="mt-10 flex items-end gap-4">
                  <span className="font-display text-5xl text-spring">
                    {cases[active].stat}
                  </span>
                  <span className="pb-2 text-sm text-cream/60 max-w-[10rem]">
                    {cases[active].statLabel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}