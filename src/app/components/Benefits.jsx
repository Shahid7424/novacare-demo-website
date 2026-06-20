"use client";

import { Reveal } from "./Revel";

const cards = [
  {
    title: "Healthier, happier patients",
    body: "Timely follow-ups make sure every patient gets the care they need — no one is overlooked, and outcomes improve.",
    icon: HeartIcon,
  },
  {
    title: "A front office that can breathe",
    body: "Repetitive outreach comes off your team's plate, so staff can focus on the patients in front of them.",
    icon: WindIcon,
  },
  {
    title: "More appointments, automatically",
    body: "Automated outreach and booking keep your schedule full — no phone tag, no extra headcount.",
    icon: CalendarIcon,
  },
];

export default function Benefits() {
  return (
    <section id="solutions" className="bg-cream grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-forest/60">
              Why practices choose NovaCare
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl text-forest leading-[1.08] text-balance">
              Better outcomes, less burnout, stronger growth — with far less
              effort.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group h-full rounded-4xl border border-line  p-7 shadow-soft transition-all hover:shadow-lift hover:-translate-y-1">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-forest text-spring transition-transform group-hover:scale-110">
                  <c.icon />
                </span>
                <h3 className="mt-6 font-display text-2xl text-forest">
                  {c.title}
                </h3>
                <p className="mt-3 text-mute leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}
function WindIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 16h14a2.5 2.5 0 1 1-2.5 2.5M3 12h7" strokeLinecap="round" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}