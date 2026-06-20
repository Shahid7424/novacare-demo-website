"use client";

import { Reveal } from "./Revel";

const steps = [
  {
    n: "01",
    title: "Identify",
    body: "NovaCare ingests and normalizes raw EHR data, then surfaces overdue, lapsed, and at-risk patients using specialty-aware models.",
    icon: ScanIcon,
  },
  {
    n: "02",
    title: "Engage",
    body: "Agents reach each patient through tailored multi-channel cadences — SMS and email — with timely, personalized messages.",
    icon: MessageIcon,
  },
  {
    n: "03",
    title: "Schedule",
    body: "Patients are booked automatically using real-time availability, specialty logic, and direct write-back into your EHR.",
    icon: CalendarCheckIcon,
  },
  {
    n: "04",
    title: "Monitor",
    body: "Real-time dashboards track care gaps, engagement, and revenue — full oversight without a single manual report.",
    icon: ChartIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-forest-deep text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/3 h-96 w-96 rounded-full bg-spring/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-spring/80">
              How NovaCare works
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl leading-[1.08] text-balance">
              From raw data to booked appointments — automatically.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-4xl overflow-hidden border border-cream/10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full bg-forest-deep p-7 hover:bg-forest transition-colors">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-spring/10 text-spring">
                  <s.icon />
                </span>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-3xl text-spring">{s.n}</span>
                  <span className="h-px flex-1 bg-cream/15" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-cream/65 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Icons — matched 1:1 to each step's action */

function ScanIcon() {
  // Identify: scanning patient records for gaps
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4" width="12" height="15" rx="2" strokeLinejoin="round" />
      <path d="M7 8.5h5M7 12h5M7 15.5h2.5" strokeLinecap="round" />
      <circle cx="17.5" cy="16.5" r="3.2" />
      <path d="M19.8 18.8 21.5 20.5" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon() {
  // Engage: outgoing personalized message
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10A2.5 2.5 0 0 1 19.5 6.5v6A2.5 2.5 0 0 1 17 15H10l-4 3.2V15h-1A2.5 2.5 0 0 1 2.5 12.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M7.5 8.3h7M7.5 11h4" strokeLinecap="round" />
    </svg>
  );
}

function CalendarCheckIcon() {
  // Schedule: calendar with confirmed booking
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
      <path d="M9 14.2l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  // Monitor: live dashboard / revenue trend
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M7 15.5v-3M12 15.5v-6M17 15.5v-9" strokeLinecap="round" />
      <circle cx="17" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}