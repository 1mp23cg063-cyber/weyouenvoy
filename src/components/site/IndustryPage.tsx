import { motion } from "motion/react";
import type { Industry } from "@/lib/site";
import { ChatMockup } from "./ChatMockup";
import { ButtonLink, Pill, Reveal, SectionHead, Wordmark } from "./primitives";
import { CTA, FAQ, IndustryGrid } from "./Sections";
import { ProblemThread, ScrollStory } from "./ScrollStory";
import { RelatedReading } from "./RelatedReading";
import { SCENES } from "@/lib/scenes";

const COMPLIANCE = [
  ["DPDPA 2023", "Consent, access & erasure controls"],
  ["ISO/IEC 27001", "Information security controls"],
  ["HIPAA-grade", "Encryption in transit & at rest"],
  ["IT Act & SPDI", "Sensitive personal data safeguards"],
  ["CEA 2010", "Records & grievance compliance"],
  ["ABDM / ABHA-ready", "Aligned with Indian digital health and data stack"],
];

export function IndustryPage({ ind }: { ind: Industry }) {
  return (
    <div data-theme={ind.slug} className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-accent-soft to-transparent" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Pill>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {ind.short} · {ind.segments}
            </Pill>
            <h1 className="mt-7 text-5xl leading-[1.02] text-foreground md:text-7xl">
              {ind.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {ind.heroLead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink
                to="/contact"
                variant="accent"
                className="shadow-md hover:shadow-accent/20"
              >
                {ind.cta}
              </ButtonLink>
              <ButtonLink to="#journey" variant="ghost">
                See the journey
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ChatMockup contact={ind.chat.contact} messages={ind.chat.messages} />
          </Reveal>
        </div>
      </section>

      {/* Problem: scattered cards pull into one thread */}
      <ProblemThread problems={ind.problems} />

      {/* Solution Section with Animated Cards & Background Flow */}
      <section className="relative overflow-hidden bg-ink-gradient py-24 text-ink-foreground md:py-32">
        {/* Dynamic Background Animated Flow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, 30, -30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-gold/15 blur-[100px]"
            animate={{
              x: [0, -30, 30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-40"
            viewBox="0 0 1200 800"
            fill="none"
          >
            <motion.path
              d="M -100 220 C 220 120, 480 480, 800 240 C 1100 100, 1180 440, 1400 300"
              stroke="url(#solFlowGradient)"
              strokeWidth="2.8"
              strokeDasharray="9 13"
              animate={{ strokeDashoffset: [0, -260] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="solFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <SectionHead
            dark
            eyebrow="The enVoy solution"
            title={ind.solutionTitle}
            lead={ind.solution}
          />
          <div className="grid gap-4">
            {ind.moments.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-ink-foreground/10"
                >
                  <p className="text-xl font-display text-gold group-hover:text-amber-300 transition-colors">
                    {m.title}
                  </p>
                  <p className="mt-2 text-ink-muted leading-relaxed">{m.body}</p>
                  <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-gold/10 blur-xl transition-transform duration-500 group-hover:scale-150" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey: pinned scroll story of one visitor */}
      <ScrollStory ind={ind} scenes={SCENES[ind.slug]} />

      {/* How it connects */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <SectionHead
            eyebrow="How it works"
            title={
              <>
                Every desk, <em className="text-accent">one thread.</em>
              </>
            }
            lead={`Every task for ${ind.short.toLowerCase()}: one conversation. enVoy connects WhatsApp with the systems you already run and loops in the right team automatically.`}
          />
          <Reveal className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" aria-hidden>
                {ind.tasks.map((_, i) => {
                  const a = (i / ind.tasks.length) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={200 + Math.cos(a) * 160}
                      y2={200 + Math.sin(a) * 160}
                      stroke="var(--accent)"
                      strokeOpacity="0.5"
                      className="flow-line"
                    />
                  );
                })}
              </svg>
              <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-3xl text-ink-foreground shadow-lift">
                <Wordmark />
              </div>
              {ind.tasks.map((t, i) => {
                const a = (i / ind.tasks.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-soft"
                    style={{ left: `${50 + Math.cos(a) * 40}%`, top: `${50 + Math.sin(a) * 40}%` }}
                  >
                    {t}
                  </motion.span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust & Compliance: in every industry with animated cards and background animated flow */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background Animated Flow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute top-1/2 -left-24 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
            animate={{
              scale: [1, 1.2, 0.9, 1],
              x: [0, 25, -20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
            animate={{
              scale: [0.95, 1.15, 1, 0.95],
              y: [0, 30, -25, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-35"
            viewBox="0 0 1200 600"
            fill="none"
          >
            <motion.path
              d="M -100 300 C 250 150, 600 450, 950 200 C 1150 100, 1250 350, 1400 250"
              stroke="url(#complianceFlowGradient)"
              strokeWidth="2.5"
              strokeDasharray="8 12"
              animate={{ strokeDashoffset: [0, -200] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="complianceFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-x relative z-10">
          <SectionHead
            eyebrow="Trust & compliance"
            title={
              ind.slug === "medical"
                ? "Built for regulated patient communication."
                : `Built for regulated ${ind.short.toLowerCase()} communication.`
            }
            lead="Enterprise-grade compliance, security guarantees, and strict data governance built into every conversation."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLIANCE.map(([t, b], idx) => (
              <Reveal key={t} delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-accent hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {t}
                    </p>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-soft text-accent text-xs">
                      ✓
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={ind.faq}
        title={
          ind.slug === "medical"
            ? "Healthcare & Hospital Communication AI."
            : `${ind.name}, answered.`
        }
        eyebrow="Frequently answered questions"
      />

      <RelatedReading
        slugs={
          ind.slug === "medical"
            ? [
                "reduce-opd-no-shows-whatsapp-hospitals",
                "whatsapp-automation-guide-hospitals-india",
              ]
            : [
                "ai-communication-system-vs-rule-based-chatbot",
                "why-every-enquiry-deserves-the-same-answer",
              ]
        }
      />

      <section className="pb-24">
        <div className="container-x">
          <p className="eyebrow mb-6">Other industries</p>
          <IndustryGrid exclude={ind.slug} />
        </div>
      </section>

      <CTA title={ind.closing} cta={ind.cta} />
    </div>
  );
}
