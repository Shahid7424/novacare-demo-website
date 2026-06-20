"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Lightweight rule-based replies for the demo.
// To go live: swap `getReply` for a fetch() to your /api/chat route (Groq/OpenAI).
const FAQ = [
  {
    q: ["price", "cost", "pricing", "how much"],
    a: "NovaCare is priced per practice based on patient volume. Most practices see it pay for itself within the first month. Want me to set up a quick pricing call?",
  },
  {
    q: ["ehr", "integrate", "integration", "system"],
    a: "We integrate directly with 40+ EHR systems and write appointments back automatically — no manual exports needed.",
  },
  {
    q: ["demo", "trial", "try", "consult"],
    a: "I can book you a free 15-minute walkthrough. Just head to the Contact page or tell me your email and I'll arrange it.",
  },
  {
    q: ["hipaa", "secure", "security", "privacy", "data"],
    a: "Security is built in from day one — NovaCare is designed to be HIPAA-conscious, with encrypted data handling end to end.",
  },
  {
    q: ["specialt", "dermatology", "work with", "support"],
    a: "We support dermatology, ophthalmology, med spas, OBGYN, GI, urology, plastic surgery and more. Which specialty are you in?",
  },
];

function getReply(text) {
  const t = text.toLowerCase();
  const hit = FAQ.find((f) => f.q.some((k) => t.includes(k)));
  if (hit) return hit.a;
  if (/(hi|hello|hey)\b/.test(t))
    return "Hi! I'm Nova, your NovaCare assistant. Ask me about pricing, EHR integration, security, or booking a demo.";
  return "Great question — I'll connect you with our team for that. In the meantime, you can book a free demo on the Contact page. Anything else I can help with?";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      from: "bot",
      text: "Hi! I'm Nova 🌱 — ask me anything about NovaCare, or I can book you a demo.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [msgs, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text: getReply(text) }]);
    }, 700);
  };

  const quick = ["Pricing", "EHR integration", "Book a demo"];

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with NovaCare"
        className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-forest text-cream shadow-lift hover:bg-forest-soft transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              ✕
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-xl">
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm rounded-3xl border border-line bg-gray-300 shadow-lift overflow-hidden"
          >
            {/* header */}
            <div className="bg-forest text-cream px-5 py-4 flex items-center gap-3">
              <span className="relative grid place-items-center h-9 w-9 rounded-full bg-spring/20 text-spring">
                🌱
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-spring border-2 border-forest" />
              </span>
              <div>
                <div className="font-medium leading-tight">Nova Assistant</div>
                <div className="text-xs text-cream/60">Typically replies instantly</div>
              </div>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="h-80 overflow-y-auto px-4 py-4 space-y-3 bg-cream/40">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-forest text-cream rounded-br-sm"
                        : " border border-line text-ink rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-gray-700 border border-line px-4 py-3">
                    <span className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-forest/40"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* quick replies */}
            <div className="flex gap-2 px-4 pt-2 pb-1 flex-wrap">
              {quick.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(send, 0);
                  }}
                  className="text-xs rounded-full border border-line bg-white px-3 py-1.5 text-forest hover:bg-cream transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* input */}
            <div className="flex items-center gap-2 p-3 border-t border-line">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask Nova anything…"
                className="flex-1 rounded-full border border-line bg-cream/50 px-4 py-2.5 text-sm outline-none focus:border-forest"
              />
              <button
                onClick={send}
                className="grid place-items-center h-10 w-10 rounded-full bg-forest text-cream hover:bg-forest-soft transition shrink-0"
                aria-label="Send"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}