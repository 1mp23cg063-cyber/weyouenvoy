import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { INDUSTRIES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./primitives";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [indMenu, setIndMenu] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-xl"
          : "bg-background/85 backdrop-blur-xl",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        {/* Enlarged weYou enVoy logo */}
        <Link
          to="/"
          className="group flex items-baseline gap-2 text-foreground transition-transform hover:scale-[1.02]"
          aria-label="weYou enVoy home"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors group-hover:text-foreground">
            weYou
          </span>
          <Wordmark className="text-3xl md:text-4xl" />
          <sup className="text-xs font-bold text-accent">™</sup>
        </Link>

        {/* Navigation: Home, Industries, Blog, About, Contact */}
        <nav className="hidden items-center gap-2 text-sm lg:flex" aria-label="Main">
          <Link
            to="/"
            className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Home
          </Link>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndMenu(true)}
            onMouseLeave={() => setIndMenu(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={indMenu}
              onClick={() => setIndMenu(!indMenu)}
            >
              Industries{" "}
              <span
                className="text-xs transition-transform duration-200"
                aria-hidden
                style={{ transform: indMenu ? "rotate(180deg)" : "none" }}
              >
                ▾
              </span>
            </button>
            <AnimatePresence>
              {indMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-1/2 top-full w-[min(36rem,90vw)] -translate-x-1/2 pt-2"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-2 shadow-lift">
                    {INDUSTRIES.map((i) => (
                      <Link
                        key={i.slug}
                        to={`/${i.slug}`}
                        onClick={() => setIndMenu(false)}
                        className="rounded-xl p-3 transition-colors hover:bg-muted"
                      >
                        <p className="text-sm font-semibold text-foreground">{i.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{i.cardLine}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/blog"
            className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Contact
          </Link>
        </nav>

        {/* Action: Animated Book a Demo */}
        <div className="flex items-center gap-3">
          <AnimatedDemoButton />

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="text-lg" aria-hidden>
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-x grid gap-1 py-4 text-base">
              <Link to="/" onClick={() => setOpen(false)} className="py-2">
                Home
              </Link>
              <p className="eyebrow mt-2">Industries</p>
              {INDUSTRIES.map((i) => (
                <Link
                  key={i.slug}
                  to={`/${i.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 pl-3 text-sm text-muted-foreground"
                >
                  {i.name}
                </Link>
              ))}
              <p className="eyebrow mt-3">Navigation</p>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="py-1.5 text-muted-foreground"
              >
                Blog
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="py-1.5 text-muted-foreground"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="py-1.5 text-muted-foreground"
              >
                Contact
              </Link>
              <div className="pt-3">
                <AnimatedDemoButton fullWidth onClick={() => setOpen(false)} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Animated high-end Book a Demo button with shimmering gradient and kinetic pulse */
function AnimatedDemoButton({
  fullWidth = false,
  onClick,
}: {
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={cn("relative inline-block", fullWidth ? "w-full" : "hidden sm:inline-block")}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Animated glowing backdrop ring */}
      <motion.span
        className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent via-gold to-accent opacity-75 blur-sm"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.55, 0.9, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <Link
        to="/contact"
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all",
          fullWidth && "w-full py-3",
        )}
      >
        {/* Shimmer light sweep */}
        <motion.span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ translateX: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Subtle pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>

        <span>Book a Demo</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </motion.div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="flex items-baseline gap-2 text-ink-foreground"
            aria-label="weYou enVoy home"
          >
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-ink-muted">
              weYou
            </span>
            <Wordmark className="text-3xl" />
            <sup className="text-xs font-bold text-gold">™</sup>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            The intelligent AI communication system built for modern enterprise.
          </p>
        </div>

        {/* Industries */}
        <div>
          <p className="eyebrow text-ink-muted">Industries</p>
          <ul className="mt-4 space-y-2 text-sm">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link to={`/${i.slug}`} className="text-ink-foreground/85 hover:text-gold">
                  {i.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* enVoy */}
        <div>
          <p className="eyebrow text-ink-muted">enVoy</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" hash="demo" className="text-ink-foreground/85 hover:text-gold">
                Live Demo
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-ink-foreground/85 hover:text-gold">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-ink-foreground/85 hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ink-foreground/85 hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* WeYouX Family */}
        <div>
          <p className="eyebrow text-ink-muted">WeYouX Family</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SITE.family.map((f) => (
              <li key={f.name}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-foreground/85 hover:text-gold"
                >
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow text-ink-muted">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/85">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp {SITE.whatsapp}
              </a>
            </li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© 2026 WeYouX. All rights reserved.</p>
          <p>
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:text-gold">
              Terms of Service
            </Link>{" "}
            · India
          </p>
        </div>
      </div>
    </footer>
  );
}
