import Link from "next/link";

const specialties = [
  "Dermatology",
  "Ophthalmology",
  "Medical Spas",
  "OBGYN",
  "Gastroenterology",
  "Urology",
  "Plastic Surgery",
  "Pain Management",
  "Podiatry",
  "ENT",
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-8 h-8 rounded-xl bg-spring text-forest-deep font-display">
                N
              </span>
              <span className="font-display text-xl">NovaCare</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-cream/60 leading-relaxed">
              Agentic AI that identifies, engages, and schedules patients —
              keeping care on track and practices growing sustainably.
            </p>
            <a
              href="mailto:hello@novacare.health"
              className="mt-5 inline-block text-sm text-spring hover:underline"
            >
              hello@novacare.health
            </a>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Specialties
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm text-cream/75">
              {specialties.map((s) => (
                <li key={s} className="hover:text-spring transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/75">
              <li>
                <Link href="/about" className="hover:text-spring transition-colors">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-spring transition-colors">
                  Get a demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-spring transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} NovaCare Health. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-cream">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}