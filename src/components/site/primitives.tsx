import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display tracking-tight", className)} aria-label="enVoy">
      en<span className="text-accent">V</span>oy
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  dark,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow mb-4", dark && "text-ink-muted")}>{eyebrow}</p>}
      <h2
        className={cn(
          "text-4xl leading-[1.05] md:text-5xl",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

const btn = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:brightness-105",
  ghost: "border border-border bg-card/60 text-foreground hover:bg-card",
  light: "bg-ink-foreground text-ink hover:bg-gold",
  outlineLight: "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm hover:shadow-lift",
    btn[variant],
    className,
  );
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5"
      >
        →
      </span>
      {/* Subtle shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
    </>
  );

  const wrapperProps: HTMLMotionProps<"div"> = reduce
    ? {}
    : {
        whileHover: { scale: 1.04, y: -2 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 420, damping: 22 },
      };

  if (to.startsWith("http") || to.startsWith("#"))
    return (
      <motion.div className="inline-block" {...wrapperProps}>
        <a
          href={to}
          className={cls}
          {...(to.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
        >
          {inner}
        </a>
      </motion.div>
    );
  return (
    <motion.div className="inline-block" {...wrapperProps}>
      <Link to={to} className={cls}>
        {inner}
      </Link>
    </motion.div>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
