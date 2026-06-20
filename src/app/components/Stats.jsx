"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1.45, suffix: "M+", label: "Patients engaged", decimals: 2 },
  { value: 174, suffix: "K+", label: "Appointments scheduled", decimals: 0 },
  { value: 55.3, suffix: "M+", prefix: "$", label: "Revenue generated", decimals: 1 },
  { value: 100, suffix: "+", label: "Practices onboarded", decimals: 0 },
];

function Counter({ value, decimals }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}

export default function Stats() {
  return (
    <section id="results" className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-spring/80">
          Outcomes that compound
        </p>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl tracking-tight">
                {s.prefix}
                <Counter value={s.value} decimals={s.decimals} />
                {s.suffix}
              </div>
              <p className="mt-2 text-sm text-cream/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}