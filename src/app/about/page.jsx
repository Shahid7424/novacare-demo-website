import Link from "next/link";
import { Reveal } from "../components/Revel";

export const metadata = {
  title: "Our Story — NovaCare",
  description:
    "Why NovaCare was built: to close care gaps and ease front-office workload through agentic AI.",
};

const values = [
  { t: "Patients first", d: "Every decision starts with whether it helps a patient get timely care." },
  { t: "Quietly powerful", d: "The best automation is invisible — it just works in the background." },
  { t: "Built with clinicians", d: "Designed alongside the practices who use it every day." },
];

export default function About() {
  return (
    <div className="bg-cream grain">
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-spring/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-20 pb-12 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-forest/60">
              Our story
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl text-forest leading-[1.05] text-balance">
              Built so no patient slips through the cracks.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">
              NovaCare was born from a simple, painful truth: too many patients
              miss timely care — not because they don&apos;t want it, but because
              the system makes it hard to stay on track. Life is busy. Front
              office teams are stretched thin. The reminders, the follow-ups, the
              re-bookings — they fall to the bottom of an endless list.
            </p>
          </Reveal>
        </div>
      </section>

      {/* narrative */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl text-forest">The problem</h2>
              <p className="mt-3 text-mute leading-relaxed">
                Staff spend hours each week pulling reports, leaving voicemails,
                and chasing no-shows. Meanwhile, patients overdue for care quietly
                disappear — leading to late diagnoses and preventable visits.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-2xl text-forest">Our answer</h2>
              <p className="mt-3 text-mute leading-relaxed">
                Specialty-trained AI agents that run continuously in the
                background — mining practice data, reaching the right patients,
                and booking them automatically. Care stays on track, and the
                front office finally gets to breathe.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1}>
              <div className="h-full rounded-4xl border border-line p-7 shadow-soft">
                <span className="font-display text-3xl text-spring">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-forest">{v.t}</h3>
                <p className="mt-2 text-mute leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="rounded-[2.5rem] bg-forest text-cream px-8 py-14 sm:px-14 text-center">
            <h2 className="font-display text-3xl sm:text-5xl">
              Come build the future of patient care with us.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-spring px-7 py-3.5 text-forest-deep font-semibold hover:bg-spring-bright transition"
            >
              Get in touch →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}