"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream grain">
      {/* ambient gradient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-spring/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -left-32 h-[420px] w-[420px] rounded-full bg-forest/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs font-medium text-forest"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spring opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-spring" />
              </span>
              Agentic AI, working in the background
            </motion.div>

            <h1 className="mt-6 font-display text-[2.7rem] leading-[1.04] sm:text-6xl text-forest text-balance">
              <Word delay={0.1}>Patients</Word>{" "}
              <Word delay={0.16}>who</Word>{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <Word delay={0.24}>never</Word>{" "}
                <Word delay={0.3}>fall</Word>{" "}
                <Word delay={0.36}>through</Word>
                <span className="absolute -bottom-1 left-0 h-3 w-full -z-10 bg-spring/40 rounded" />
              </span>{" "}
              <Word delay={0.44}>the</Word>{" "}
              <Word delay={0.5}>cracks.</Word>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 max-w-md text-lg text-mute leading-relaxed"
            >
              NovaCare deploys specialty-trained AI agents that identify, engage,
              and schedule patients automatically — so your front office can
              breathe and your calendar stays full.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-cream font-medium hover:bg-forest-soft transition-colors shadow-lift"
              >
                Schedule a free demo
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/#how"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-6 py-3.5 text-forest font-medium hover:bg-white transition"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-xs text-mute"
            >
              Trusted by 100+ specialty practices · HIPAA-conscious by design
            </motion.p>
          </div>

          {/* Hero visual — live "agent" panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <AgentPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Word({ children, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: "0.4em" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

function AgentPanel() {
  const rows = [
    { t: "Identified", p: "Sarah M. — overdue skin check (14 mo)", c: "bg-spring" },
    { t: "Engaged", p: "Personalized SMS sent · reply received", c: "bg-emerald-400" },
    { t: "Scheduled", p: "Booked Thu 2:30 PM · synced to EHR", c: "bg-forest" },
  ];
  return (
    <div className="relative">
      <div className="rounded-4xl border border-line shadow-lift p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-spring" />
            <span className="text-sm font-medium text-forest">
              NovaCare Agent · live
            </span>
          </div>
          <span className="text-xs text-mute">Today</span>
        </div>

        <div className="mt-5 space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.4, duration: 0.5 }}
              className="flex items-start gap-3 rounded-2xl bg-cream/70 border border-line/70 px-4 py-3"
            >
              <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${r.c}`} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest/70">
                  {r.t}
                </p>
                <p className="text-sm text-ink">{r.p}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-forest px-4 py-3 text-cream">
          <span className="text-sm">Appointments booked today</span>
          <span className="font-display text-2xl">42</span>
        </div>
      </div>

      {/* floating chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 rounded-2xl border border-line shadow-lift px-4 py-2.5"
      >
        <span className="grid place-items-center h-7 w-7 rounded-full bg-spring/20 text-forest text-sm">
          ✓
        </span>
        <span className="text-xs text-ink">
          No phone calls. No staff effort.
        </span>
      </motion.div>
    </div>
  );
}