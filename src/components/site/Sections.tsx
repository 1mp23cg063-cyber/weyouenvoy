import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { INDUSTRIES, type Industry } from "@/lib/site";
import { SCENES } from "@/lib/scenes";
import { cn } from "@/lib/utils";
import { ButtonLink, Reveal, SectionHead } from "./primitives";

function WhatsAppSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.11C19.43 7.67 20.28 9.74 20.28 11.93C20.28 16.47 16.59 20.15 12.05 20.15ZM16.57 14.33C16.32 14.21 15.1 13.61 14.88 13.52C14.65 13.44 14.49 13.4 14.32 13.64C14.16 13.89 13.68 14.46 13.53 14.63C13.39 14.79 13.24 14.81 13 14.69C12.75 14.56 11.71 14.22 10.49 13.13C9.53 12.28 8.89 11.23 8.76 11.02C8.64 10.82 8.75 10.7 8.87 10.58C8.98 10.47 9.12 10.29 9.24 10.15C9.37 10.01 9.41 9.91 9.49 9.75C9.57 9.58 9.53 9.44 9.47 9.32C9.41 9.2 8.92 8.01 8.72 7.51C8.52 7.03 8.32 7.1 8.16 7.09C8.01 7.08 7.85 7.08 7.68 7.08C7.52 7.08 7.25 7.14 7.03 7.38C6.8 7.63 6.17 8.22 6.17 9.43C6.17 10.63 7.05 11.8 7.17 11.96C7.3 12.12 8.9 14.6 11.35 15.66C11.94 15.91 12.39 16.06 12.74 16.17C13.33 16.36 13.87 16.33 14.3 16.27C14.77 16.2 15.75 15.68 15.96 15.09C16.16 14.5 16.16 14 16.1 13.89C16.04 13.78 15.88 13.72 15.63 13.6L16.57 14.33Z" />
    </svg>
  );
}

export function FAQ({
  items,
  title = "What people usually ask.",
  eyebrow = "FAQ",
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}) {
  // Requirement 5: All FAQ items start closed, open only when clicked
  const [open, setOpen] = useState<number | null>(null);
  // Requirement 9: Max 7 FAQ items in every section type
  const displayedItems = items.slice(0, 7);

  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="divide-y divide-border border-y border-border">
          {displayedItems.map((f, i) => (
            <div key={f.q}>
              <h3 className="font-sans text-base font-semibold tracking-normal">
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-foreground transition-colors hover:text-accent"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border transition-all duration-300",
                      open === i
                        ? "rotate-45 border-accent bg-accent text-accent-foreground"
                        : "bg-card text-foreground",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA({
  title,
  cta = "Let's Talk",
  lead,
}: {
  title: string;
  cta?: string;
  lead?: string;
}) {
  return (
    <section className="px-4 pb-6">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-foreground/10 bg-ink-gradient px-6 py-24 text-center shadow-2xl md:py-32">
        {/* Dynamic ambient floating aurora glow blobs */}
        <motion.div
          className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-gold/15 blur-[100px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[90px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient subtle grid lines with slight motion */}
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

        {/* Inner perimeter ring */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />

        <Reveal className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-4xl font-medium tracking-tight leading-tight text-ink-foreground md:text-6xl">
              {title}
            </h2>
            {lead && <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">{lead}</p>}

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink
                to="/contact"
                variant="light"
                className="shadow-lg transition-transform hover:scale-105"
              >
                {cta}
              </ButtonLink>
              <ButtonLink
                to="https://wa.me/919036992826"
                variant="outlineLight"
                className="group transition-transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <WhatsAppSvg className="h-4 w-4 fill-[#25D366] text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                  <span>WhatsApp us</span>
                </span>
              </ButtonLink>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export function IndustryGrid({ exclude }: { exclude?: Industry["slug"] }) {
  const list = INDUSTRIES.filter((i) => i.slug !== exclude);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((i, idx) => (
        <Reveal key={i.slug} delay={idx * 0.06}>
          <Link
            to={`/${i.slug}`}
            data-theme={i.slug}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />
            <div className="relative">
              <p className="eyebrow">{i.segments}</p>
              <h3 className="mt-6 text-3xl text-foreground">{i.name}</h3>
              <p className="mt-3 text-muted-foreground">{i.cardLine}</p>
              {SCENES[i.slug][0] && (
                <div className="mt-6 space-y-1.5" aria-label="Example moment">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {SCENES[i.slug][0]!.when} · {SCENES[i.slug][0]!.who}
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.06 }}
                    className="w-fit max-w-[90%] rounded-xl rounded-tl-sm bg-card px-3 py-2 text-sm text-foreground shadow-sm"
                  >
                    {SCENES[i.slug][0]!.ask}
                  </motion.p>
                  <p className="ml-auto max-h-0 w-fit max-w-[90%] overflow-hidden rounded-xl rounded-tr-sm bg-chat-out px-3 text-sm text-foreground opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:py-2 group-hover:opacity-100">
                    {SCENES[i.slug][0]!.reply}
                  </p>
                </div>
              )}
            </div>
            <span className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Explore the journey{" "}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function Journey({
  stages,
  label,
}: {
  stages: { title: string; body: string; proof?: string }[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const s = stages[active] ?? stages[0]!;
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <ol className="relative space-y-1" aria-label={label}>
        <span className="absolute bottom-4 left-[19px] top-4 w-px bg-border" aria-hidden />
        <motion.span
          className="absolute left-[19px] top-4 w-px bg-accent"
          animate={{ height: `${(active / Math.max(stages.length - 1, 1)) * 100}%` }}
          style={{ maxHeight: "calc(100% - 2rem)" }}
          aria-hidden
        />
        {stages.map((st, i) => (
          <li key={st.title}>
            <button
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-current={active === i}
              className={cn(
                "relative flex w-full items-center gap-4 rounded-xl py-3 pr-3 text-left transition-colors",
                active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border font-mono text-xs transition-all",
                  active === i
                    ? "border-accent bg-accent text-accent-foreground"
                    : i < active
                      ? "border-accent bg-background text-accent"
                      : "border-border bg-background",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{st.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12"
          >
            <p className="eyebrow text-accent">
              Stage {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
            </p>
            <h3 className="mt-5 text-3xl leading-tight text-foreground md:text-4xl">{s.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
            {s.proof && (
              <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-sm font-medium text-foreground">
                ✓ {s.proof}
              </p>
            )}
            <div className="mt-10 flex gap-2">
              <button
                className="rounded-full border border-border px-4 py-2 text-sm disabled:opacity-40"
                disabled={active === 0}
                onClick={() => setActive(active - 1)}
              >
                ← Previous
              </button>
              <button
                className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-40"
                disabled={active === stages.length - 1}
                onClick={() => setActive(active + 1)}
              >
                Next stage →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="pb-16 pt-20 md:pt-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
