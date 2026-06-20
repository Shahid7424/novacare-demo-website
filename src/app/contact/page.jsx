"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", practice: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name || !form.email) return;
    // To go live: POST `form` to your backend / Resend / Formspree.
    setSent(true);
  };

  return (
    <div className="bg-cream grain min-h-screen">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-10 h-80 w-80 rounded-full bg-spring/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24 sm:pt-28">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* left copy */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-forest/60">
                Get a demo
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl text-forest leading-[1.05] text-balance">
                See your calendar fill itself.
              </h1>
              <p className="mt-6 max-w-md text-lg text-mute leading-relaxed">
                Book a 15-minute walkthrough. We&apos;ll show you exactly how
                NovaCare identifies, engages, and schedules patients for a
                practice like yours.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  ["No setup work", "We handle the EHR connection for you."],
                  ["See real numbers", "Walk through projected appointments and revenue."],
                  ["Zero commitment", "It's a conversation, not a contract."],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-3">
                    <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-spring/20 text-forest text-sm">
                      ✓
                    </span>
                    <p className="text-sm text-ink">
                      <span className="font-semibold text-forest">{t}.</span>{" "}
                      <span className="text-mute">{d}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* form card */}
            <div className="rounded-4xl border border-line  p-7 sm:p-8 shadow-lift">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full grid place-items-center text-center py-16"
                >
                  <div>
                    <div className="mx-auto grid place-items-center h-14 w-14 rounded-full bg-spring/20 text-forest text-2xl">
                      ✓
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-forest">
                      Thanks, {form.name.split(" ")[0]}!
                    </h3>
                    <p className="mt-2 text-mute max-w-xs">
                      Our team will reach out within one business day to schedule
                      your demo.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <Field label="Full name" value={form.name} onChange={update("name")} placeholder="Dr. Jane Smith" />
                  <Field label="Work email" type="email" value={form.email} onChange={update("email")} placeholder="jane@practice.com" />
                  <Field label="Practice name" value={form.practice} onChange={update("practice")} placeholder="Smith Dermatology" />
                  <div>
                    <label className="text-sm font-medium text-forest">
                      What would you like to improve?
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={3}
                      placeholder="No-shows, reactivations, overdue follow-ups…"
                      className="mt-1.5 w-full rounded-2xl border border-line bg-cream/40 px-4 py-3 text-sm outline-none focus:border-forest resize-none"
                    />
                  </div>
                  <button
                    onClick={submit}
                    className="w-full rounded-full bg-forest px-6 py-3.5 text-cream font-medium hover:bg-forest-soft transition-colors"
                  >
                    Request my demo →
                  </button>
                  <p className="text-center text-xs text-mute">
                    We&apos;ll never share your information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-forest">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-line bg-cream/40 px-4 py-3 text-sm outline-none focus:border-forest"
      />
    </div>
  );
}