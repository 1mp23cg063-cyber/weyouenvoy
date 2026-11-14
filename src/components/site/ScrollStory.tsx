import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import type { Industry } from "@/lib/site";
import type { Scene } from "@/lib/scenes";
import { cn } from "@/lib/utils";
import { Wordmark } from "./primitives";

/* ------------------------------------------------------------------ */
/* 1. Scroll story: a person moves through each stage of the journey. */
/*    Pinned while you scroll; each stage connects the visitor's real  */
/*    moment → enVoy → the desk/system that handles it.                */
/* ------------------------------------------------------------------ */

function FlowLine({ delay }: { delay: number }) {
  return (
    <div className="relative h-px min-w-6 flex-1 bg-border">
      <motion.div
        className="absolute inset-0 origin-left bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
      />
      <motion.span
        className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_25%,transparent)]"
        initial={{ left: "0%", opacity: 0 }}
        animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
        transition={{ delay, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}

export function ScrollStory({ ind, scenes }: { ind: Industry; scenes: Scene[] }) {
  const ref = useRef<HTMLElement>(null);
  const n = ind.stages.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const stage = ind.stages[active] ?? ind.stages[0]!;
  const scene = scenes[active] ?? scenes[0]!;

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / n) * total, behavior: "smooth" });
  };

  const title =
    ind.slug === "medical"
      ? "The complete patient journey: from first inquiry to full recovery."
      : "One person. One conversation. Every stage.";

  return (
    <section
      ref={ref}
      id="journey"
      aria-label={ind.stageLabel}
      className="relative scroll-mt-16 bg-paper"
      style={{ height: `${n * 70 + 40}vh` }}
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
        {/* Oversized time-of-day, drifting behind the scene */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.p
            key={scene.when}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6 }}
            aria-hidden
            className="pointer-events-none absolute -right-4 bottom-[-2vw] select-none whitespace-nowrap font-display text-[16vw] leading-none text-foreground/[0.045]"
          >
            {scene.when}
          </motion.p>
        </AnimatePresence>

        <div className="container-x relative flex h-full flex-col py-6 md:py-10">
          {/* Header + progress rail */}
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">{ind.stageLabel}</p>
              <h2 className="mt-2 max-w-2xl text-2xl leading-tight text-foreground md:text-4xl">
                {title}
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Illustrative scenario
            </p>
          </div>

          <div className="relative mt-6 md:mt-8">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
            <motion.div
              style={{ scaleX: bar }}
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 origin-left bg-accent"
            />
            <ol className="relative flex justify-between">
              {ind.stages.map((s, i) => (
                <li key={s.title}>
                  <button
                    onClick={() => goTo(i)}
                    aria-label={`Stage ${i + 1}: ${s.title}`}
                    aria-current={active === i ? "step" : undefined}
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full border font-mono text-[10px] transition-all duration-300 md:h-8 md:w-8",
                      active === i
                        ? "scale-110 border-accent bg-accent text-accent-foreground"
                        : i < active
                          ? "border-accent bg-paper text-accent"
                          : "border-border bg-paper text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* The scene */}
          <div className="grid min-h-0 flex-1 items-center gap-6 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={`l${active}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow text-accent">
                  Stage {String(active + 1).padStart(2, "0")} · {stage.title}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-semibold text-ink-foreground">
                    {scene.who.replace(/^(Mrs?\.|The)\s/, "")[0]}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{scene.who}</p>
                    <p className="text-sm text-muted-foreground">
                      {scene.where} · {scene.when}
                    </p>
                  </div>
                </div>
                <h3 className="mt-5 text-3xl leading-[1.08] text-foreground md:text-5xl">
                  {scene.moment}
                </h3>
                <p className="mt-5 hidden max-w-lg leading-relaxed text-muted-foreground md:block">
                  {stage.body}
                </p>
                {stage.proof && (
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-foreground">
                    ✓ {stage.proof}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`r${active}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Person → enVoy → desk */}
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft">
                    {scene.who}
                  </span>
                  <FlowLine delay={0.15} />
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-base text-ink-foreground shadow-lift md:h-14 md:w-14 md:text-lg">
                    <Wordmark />
                  </span>
                  <FlowLine delay={1.1} />
                  <motion.span
                    initial={{ opacity: 0.4, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                    className="shrink-0 rounded-full border border-accent bg-accent-soft px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {scene.desk}
                  </motion.span>
                </div>

                {/* The conversation for this moment */}
                <div className="mt-5 rounded-3xl bg-chat p-4 shadow-lift md:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-[85%] rounded-xl rounded-tl-sm bg-chat-in px-4 py-2.5 text-sm text-foreground shadow-sm"
                  >
                    {scene.ask}
                    <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                      {scene.when}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 0.5, duration: 0.7, times: [0, 0.2, 0.8, 1] }}
                    className="ml-auto mt-2 flex w-14 gap-1 rounded-xl bg-chat-out px-3 py-3"
                    aria-hidden
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.15 }}
                    className="-mt-9 ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-chat-out px-4 py-2.5 text-sm text-foreground shadow-sm"
                  >
                    {scene.reply}
                    <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                      enVoy · ✓✓
                    </span>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="mt-3 text-right text-xs text-muted-foreground"
                >
                  Handed to <span className="font-semibold text-foreground">{scene.desk}</span>,
                  written back automatically
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="hidden pb-1 text-center text-xs text-muted-foreground md:block">
            Scroll to follow {scene.who.startsWith("The") ? "their" : "the"} journey ↓
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Problem thread: scattered situations pull together into one     */
/*    connected line as you scroll.                                     */
/* ------------------------------------------------------------------ */

const SCATTER = [
  { x: -50, y: 70, r: -9 },
  { x: 40, y: -60, r: 7 },
  { x: -25, y: 110, r: 5 },
  { x: 60, y: -35, r: -7 },
  { x: -40, y: 50, r: 10 },
  { x: 30, y: 90, r: -5 },
];

function ScatterCard({
  i,
  text,
  progress,
}: {
  i: number;
  text: string;
  progress: MotionValue<number>;
}) {
  const s = SCATTER[i % SCATTER.length]!;
  const x = useTransform(progress, [0, 1], [s.x, 0]);
  const y = useTransform(progress, [0, 1], [s.y, 0]);
  const rotate = useTransform(progress, [0, 1], [s.r, 0]);
  const opacity = useTransform(progress, [0, 0.35], [0.35, 1]);
  const knot = useTransform(progress, [0.75, 1], [0, 1]);
  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      className="relative z-10 h-full rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      <motion.span
        style={{ opacity: knot, scale: knot }}
        className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent lg:-left-1.5 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
        aria-hidden
      />
      <span className="font-mono text-xs text-accent">0{i + 1}</span>
      <p className="mt-6 font-medium leading-snug text-foreground">{text}</p>
    </motion.div>
  );
}

export function ProblemThread({ problems }: { problems: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "center 0.5"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const line = useTransform(p, [0.6, 1], [0, 1]);
  const before = useTransform(p, [0.55, 0.8], [1, 0]);
  const after = useTransform(p, [0.75, 1], [0, 1]);

  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <p className="eyebrow">The challenge</p>
        <h2 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-foreground md:text-5xl">
          Where the conversation breaks today.
        </h2>
        <div className="mt-5 grid text-lg text-muted-foreground">
          <motion.p style={{ opacity: before }} className="[grid-area:1/1]">
            Scattered across desks, phones and hours.
          </motion.p>
          <motion.p style={{ opacity: after }} className="[grid-area:1/1] text-foreground">
            enVoy threads every moment into{" "}
            <em className="font-display text-accent">one conversation.</em>
          </motion.p>
        </div>
        <div ref={ref} className="relative mt-16">
          <motion.div
            style={{ scaleX: line }}
            className="absolute left-0 right-0 top-1/2 hidden h-0.5 origin-left bg-accent lg:block"
            aria-hidden
          />
          <motion.div
            style={{ scaleY: line }}
            className="absolute bottom-0 left-1/2 top-0 w-0.5 origin-top bg-accent lg:hidden"
            aria-hidden
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {problems.map((t, i) => (
              <ScatterCard key={t} i={i} text={t} progress={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
