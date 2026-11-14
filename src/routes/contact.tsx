import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE, breadcrumb, pageHead } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.11C19.43 7.67 20.28 9.74 20.28 11.93C20.28 16.47 16.59 20.15 12.05 20.15ZM16.57 14.33C16.32 14.21 15.1 13.61 14.88 13.52C14.65 13.44 14.49 13.4 14.32 13.64C14.16 13.89 13.68 14.46 13.53 14.63C13.39 14.79 13.24 14.81 13 14.69C12.75 14.56 11.71 14.22 10.49 13.13C9.53 12.28 8.89 11.23 8.76 11.02C8.64 10.82 8.75 10.7 8.87 10.58C8.98 10.47 9.12 10.29 9.24 10.15C9.37 10.01 9.41 9.91 9.49 9.75C9.57 9.58 9.53 9.44 9.47 9.32C9.41 9.2 8.92 8.01 8.72 7.51C8.52 7.03 8.32 7.1 8.16 7.09C8.01 7.08 7.85 7.08 7.68 7.08C7.52 7.08 7.25 7.14 7.03 7.38C6.8 7.63 6.17 8.22 6.17 9.43C6.17 10.63 7.05 11.8 7.17 11.96C7.3 12.12 8.9 14.6 11.35 15.66C11.94 15.91 12.39 16.06 12.74 16.17C13.33 16.36 13.87 16.33 14.3 16.27C14.77 16.2 15.75 15.68 15.96 15.09C16.16 14.5 16.16 14 16.1 13.89C16.04 13.78 15.88 13.72 15.63 13.6L16.57 14.33Z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({
      title: "Contact enVoy: Book a Demo | WhatsApp +91 90369 92826",
      description:
        "Write to the enVoy team. Tell us your business and what your customers ask most. Send Hi on WhatsApp to +91 90369 92826 or email sales@weyoux.com.",
      path: "/contact",
    }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  }),
  component: Contact,
});

function Contact() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          {/* Animated Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            Contact
          </motion.p>

          {/* Typing Headline: "Write to us." */}
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl font-semibold text-foreground">
            {reduce ? (
              <>
                Write to <em className="text-accent not-italic">us.</em>
              </>
            ) : (
              <TypewriterHeadline />
            )}
          </h1>

          {/* Typing Subtitle / Message */}
          <div className="mt-6 max-w-md text-lg text-muted-foreground">
            {reduce ? (
              <p>
                Send us a message. Tell us your business and what your customers ask most, and we'll
                take it from there.
              </p>
            ) : (
              <TypewriterSubtitle />
            )}
          </div>

          {/* Contact Action Cards with Kinetic Hover Transitions */}
          <div className="mt-10 space-y-4">
            {/* WhatsApp Block with Official Logo */}
            <motion.a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-[#25D366] hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    <p className="eyebrow text-accent font-semibold">WhatsApp</p>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    send Hi to {SITE.whatsapp}
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>

            {/* Email Block with Official Logo */}
            <motion.a
              href={`mailto:${SITE.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-gold hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-soft text-accent">
                      <EmailIcon className="h-3.5 w-3.5" />
                    </span>
                    <p className="eyebrow text-muted-foreground font-semibold">Email</p>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {SITE.email}
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Contact Form with Entrance Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

/** Authentic kinetic typewriter animation for the "Write to us." headline */
function TypewriterHeadline() {
  const text1 = "Write to ";
  const text2 = "us.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const totalLength = text1.length + text2.length;
    if (index >= totalLength) return;

    const timeout = setTimeout(
      () => {
        setIndex((i) => i + 1);
      },
      70 + Math.random() * 40,
    );

    return () => clearTimeout(timeout);
  }, [index, text1.length, text2.length]);

  const current1 = text1.slice(0, Math.min(index, text1.length));
  const current2 = index > text1.length ? text2.slice(0, index - text1.length) : "";
  const isDone = index >= text1.length + text2.length;

  return (
    <span className="inline-block">
      <span>{current1}</span>
      {current2 && <span className="text-accent font-display italic">{current2}</span>}
      <motion.span
        className="ml-1 inline-block h-10 w-1 bg-accent align-middle md:h-14"
        animate={{ opacity: isDone ? [1, 0, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      />
    </span>
  );
}

/** Fluid typewriter animation for the subtitle message */
function TypewriterSubtitle() {
  const fullText =
    "Send us a message. Tell us your business and what your customers ask most, and we'll take it from there.";
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start subtitle typing right after headline starts
    const startTimer = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= fullText.length) return;

    const timeout = setTimeout(
      () => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      },
      18 + Math.random() * 12,
    );

    return () => clearTimeout(timeout);
  }, [displayed, started, fullText]);

  return (
    <p className="min-h-[3.5rem] leading-relaxed">
      {displayed}
      {displayed.length < fullText.length && started && (
        <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-muted-foreground align-middle" />
      )}
    </p>
  );
}
