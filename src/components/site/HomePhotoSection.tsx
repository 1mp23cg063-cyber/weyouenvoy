import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useState, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Homepage-only photography: the text remains in normal document flow. */
export function HomePhotoSection({
  image,
  children,
  className,
  dark = false,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [30, -30]);

  return (
    <section
      ref={ref}
      className={cn(
        "home-photo-section transition-colors duration-700",
        dark && "home-photo-section-dark",
        className,
      )}
    >
      <div className="home-photo-backdrop" aria-hidden="true">
        {/* Graceful fallback ambient backdrop */}
        <div
          className={cn(
            "home-photo-fallback",
            dark
              ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ink-muted/15 via-ink to-ink"
              : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-card/30 to-background",
          )}
        />

        {/* Ambient pulse shimmer during image load */}
        {!loaded && !error && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-40" />
        )}

        {/* High-res image with smooth fade and subtle parallax */}
        {!error && (
          <motion.img
            src={image}
            alt=""
            width={1536}
            height={1024}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={cn(
              "home-photo-image transition-all duration-1000 ease-out",
              loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105",
            )}
            style={{ y }}
          />
        )}

        {/* Cinematic wash and seamless edge feathering */}
        <div className="home-photo-shade" />
        <div className="home-photo-feather-top" />
        <div className="home-photo-feather-bottom" />
      </div>
      <div className="home-photo-content">{children}</div>
    </section>
  );
}
