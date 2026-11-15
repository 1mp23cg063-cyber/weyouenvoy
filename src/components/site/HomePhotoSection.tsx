import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Homepage-only photography: the text remains in normal document flow with performant native image loading. */
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

        {/* High-res image with smooth native async decode */}
        <img
          src={image}
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="home-photo-image opacity-90 transition-opacity duration-700 ease-out"
        />

        {/* Cinematic wash and seamless edge feathering */}
        <div className="home-photo-shade" />
        <div className="home-photo-feather-top" />
        <div className="home-photo-feather-bottom" />
      </div>
      <div className="home-photo-content">{children}</div>
    </section>
  );
}
