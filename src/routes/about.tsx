import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { CTA } from "@/components/site/Sections";
import { breadcrumb, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({
      title: "About enVoy: The Communication Layer for Business | WeYouX",
      description:
        "enVoy is the AI communication system enterprises give to their customers: WhatsApp, email, web chat, app and voice, connected to the CRM. Built by WeYouX.",
      path: "/about",
    }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  }),
  component: About,
});

function About() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Floating Animated Flow - Darker & Highlighted */}
      <FloatingAnimatedFlow />

      {/* Hero Intro Section - Aligned in Center */}
      <section className="relative z-10 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="container-x mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="eyebrow mx-auto mb-4 inline-block text-accent"
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            enVoy: the communication layer{" "}
            <span className="animated-word-gradient inline-block font-display italic">
              for business.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            enVoy is the AI communication system enterprises give to their customers: WhatsApp,
            email, web chat, app and voice, connected to the CRM. A weYou X product.
          </motion.p>
        </div>
      </section>

      {/* Linear narrative stream placed one by one (no boxed cards) - Centered */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <div className="space-y-12 text-center md:space-y-16">
            {/* Line 1: enVoy Name - Centered, Large, en/oy in white, V highlighted */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.65, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center"
            >
              <div className="relative inline-flex items-center justify-center rounded-3xl bg-[#121417] px-8 py-4 shadow-2xl border border-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:px-12 sm:py-6">
                <span className="pointer-events-none absolute -inset-2 rounded-3xl bg-accent/20 blur-xl animate-pulse" />
                <h2 className="relative font-display text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                  <span className="text-white">en</span>
                  <span className="font-extrabold text-accent drop-shadow-[0_0_24px_rgba(234,179,8,0.55)]">
                    V
                  </span>
                  <span className="text-white">oy</span>
                  <span className="ml-1 text-accent">.</span>
                </h2>
              </div>
            </motion.div>

            {/* Line 2: noun badge with kinetic shine - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-accent shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                noun
              </span>
            </motion.div>

            {/* Line 3: Definition with kinetic typography - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.55, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto max-w-2xl px-4"
            >
              <p className="font-display text-2xl italic leading-relaxed text-foreground md:text-3xl">
                "An ambassador sent to speak on another's behalf."
              </p>
            </motion.div>

            {/* Line 4: Built to speak for your business - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto pt-2"
            >
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Built to speak{" "}
                <span className="relative inline-block text-accent">
                  for your business.
                  <motion.span
                    className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent to-gold"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Line 5: Detailed Narrative - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.65, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              <p>
                Ours speaks for your business to every customer, in your voice. It reaches customers
                on WhatsApp, Email, Chatbot, App and Voice, replies in any written language
                (Kannada, Hindi and English out of the box) and goes live in 7 days.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA title="Every journey deserves better communication." />
    </div>
  );
}

/** Rich, high-contrast floating animated flow lines and darker ambient depths */
function FloatingAnimatedFlow() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Darker high-contrast dynamic ambient blobs */}
      <motion.div
        className="absolute -top-24 left-1/4 h-[28rem] w-[28rem] rounded-full bg-amber-800/25 blur-3xl"
        animate={{
          x: [0, 45, -35, 0],
          y: [0, 35, -25, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-stone-900/30 blur-3xl"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -45, 25, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-2/3 left-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 30, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Darker, highlighted vector flow ribbons */}
      <svg
        className="absolute left-0 top-0 h-full w-full opacity-70"
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M -100 240 C 240 130, 460 460, 800 270 C 1050 140, 1150 420, 1350 310"
          stroke="url(#flowDarkGradient)"
          strokeWidth="3.2"
          strokeDasharray="9 11"
          animate={{
            strokeDashoffset: [0, -200],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.path
          d="M -150 370 C 190 500, 520 180, 770 390 C 1010 540, 1120 230, 1380 410"
          stroke="url(#flowDarkGradient2)"
          strokeWidth="2.4"
          strokeDasharray="7 13"
          animate={{
            strokeDashoffset: [0, 200],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.path
          d="M -50 520 C 300 380, 600 680, 900 480 C 1100 350, 1200 580, 1400 460"
          stroke="url(#flowDarkGradient)"
          strokeWidth="1.8"
          strokeDasharray="5 15"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="flowDarkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451a03" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#78350f" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#b45309" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1c1917" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="flowDarkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1c1917" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#854d0e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
