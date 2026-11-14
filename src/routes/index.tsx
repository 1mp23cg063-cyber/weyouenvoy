import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import {
  CHANNELS,
  CLIENTS,
  HOME_FAQ,
  STATS,
  PILLARS,
  CAPABILITIES,
  faqLd,
  industryBySlug,
  pageHead,
} from "@/lib/site";
import { ButtonLink, Pill, Reveal, SectionHead, Wordmark } from "@/components/site/primitives";
import { CTA, FAQ, IndustryGrid } from "@/components/site/Sections";
import { ChatMockup } from "@/components/site/ChatMockup";
import { LiveDemo } from "@/components/site/LiveDemo";
import { HomePhotoSection } from "@/components/site/HomePhotoSection";
import evening from "@/assets/home-evening-enquiry.jpg";
import reception from "@/assets/home-connected-reception.jpg";
import family from "@/assets/home-family-message.jpg";
import hotel from "@/assets/home-hotel-welcome.jpg";
import care from "@/assets/home-care-followup.jpg";
import team from "@/assets/home-coordinated-team.jpg";

const ORIGINAL_LOGOS: Record<string, string> = {
  cutis: "/cutis-logo.png",
  annveshan: "/annveshan-logo.png",
  chipdesigner: "/chipdesigner-logo.png",
};

const JOURNEY = [
  {
    stage: "Enquiry",
    img: evening,
    time: "11:52 PM",
    text: "Hi, can I book a skin consult this Saturday?",
    alt: "Customer checking her phone at home in the evening",
  },
  {
    stage: "Engagement",
    img: family,
    time: "11:52 PM",
    text: "Of course. Saturday has 10:30 and 12:00 open. Which suits you?",
    alt: "Parent and daughter checking a message together",
  },
  {
    stage: "Confirmation",
    img: reception,
    time: "11:53 PM · answered in 4s",
    text: "Booked: Saturday 10:30. Confirmation sent.",
    alt: "Patient welcomed by a clinic receptionist",
  },
  {
    stage: "Reminder",
    img: evening,
    time: "Fri 6:00 PM",
    text: "Reminder: your appointment is tomorrow, Saturday 10:30. Reply here to reschedule.",
    alt: "Customer checking an appointment message at home",
  },
  {
    stage: "Service",
    img: care,
    time: "Sat 10:34 AM",
    text: "Please go to X-ray, Room 12. The technician is expecting you.",
    alt: "Doctor and patient discussing care",
  },
  {
    stage: "Follow-up",
    img: care,
    time: "Sat 11:40 AM · conversation complete",
    text: "Your report is ready and shared with your doctor. Your invoice is paid: thank you.",
    alt: "Doctor discussing follow-up care with a patient",
  },
];

const PROBLEMS = [
  ["Missed enquiries", "The 11:52 PM message nobody sees until morning."],
  ["Delayed responses", "Three people message at once; two wait."],
  ["Disconnected communication", "WhatsApp, phone and email live in different places."],
  ["Manual follow-ups", "Reminders depend on someone remembering."],
  ["Repeated questions", "Prices, timings and policies, asked a hundred times."],
  ["Fragmented experiences", "Every hand-off resets the conversation."],
];

const INBOX = [
  ["PR", "Priya Rao", "Sat 10:30 · Dr. Rao · via WhatsApp", "Booked", "4s"],
  ["AK", "Arjun K.", "Asked for MRI pricing · via WhatsApp", "Replied", "3s"],
  ["SM", "Sunita M.", "Reminder sent for Friday 6 PM", "Follow-up", "auto"],
  ["RV", "Rahul V.", "Insurance query · handed to Meera", "Escalated", "11s"],
  ["NJ", "Nisha J.", "Rescheduled to Mon 9:00 · via WhatsApp", "Updated", "5s"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "enVoy: AI Customer & Patient Communication on WhatsApp | weYou X",
      description:
        "enVoy is the AI communication system connecting WhatsApp, email, chatbot, app and voice to your CRM: live in 7 days across India.",
      path: "/",
    }),
    scripts: [
      faqLd(HOME_FAQ),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "weYou enVoy",
          applicationCategory: "BusinessApplication",
          operatingSystem: "All",
          description:
            "AI communication layer connecting WhatsApp, email, web chat, and voice directly to your enterprise CRM.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
          },
          author: {
            "@type": "Organization",
            name: "WeYouX",
            url: "https://weyoux.com",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const med = industryBySlug("medical");
  return (
    <section ref={ref} className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="container-x relative grid items-center gap-12 pb-16 pt-12 md:gap-16 md:pb-24 md:pt-24 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Pill className="border-ink-foreground/15 bg-ink-foreground/5 text-ink-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" /> AI Communication
            System · The Patient Journey
          </Pill>
          <h1 className="mt-8 text-4xl leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            The appointment is only <em className="text-gold">the beginning.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-ink-muted">
            Every customer who messages your business gets a response like your best person would
            give. enVoy connects WhatsApp, Email, Chatbot, App and Voice to your CRM: one connected
            journey.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink to="#demo" variant="accent">
              Try Now
            </ButtonLink>
            <ButtonLink to="/contact" variant="outlineLight">
              Book a Demo
            </ButtonLink>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-2 gap-4 border-t border-ink-foreground/10 pt-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl text-ink-foreground">{s.value}</dd>
                <p className="mt-1 text-[11px] leading-tight text-ink-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
        <motion.div
          style={{ y }}
          className="relative mx-auto flex w-full max-w-[320px] sm:max-w-[340px] flex-col items-center"
        >
          {/* Live Inbox Companion Card - cleanly positioned directly above the phone mockup.
              NEVER covers the headline on the left side.
              NEVER covers the phone on the right side.
              Neither side affects the other! */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-4 w-full rounded-2xl border border-white/15 bg-[#121417]/95 p-3.5 text-xs shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <p className="eyebrow font-semibold tracking-wider text-white">Live Inbox</p>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-medium">
                5 open · 0 waiting
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5">
              {INBOX.slice(0, 3).map((r) => (
                <div
                  key={r[1]}
                  className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.04] px-2.5 py-1.5 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[9px] font-bold text-white">
                      {r[0]}
                    </span>
                    <span className="truncate text-ink-foreground/90 font-medium text-xs">
                      {r[1]}
                    </span>
                  </div>
                  <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-medium text-gold shrink-0">
                    {r[3]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <ChatMockup contact="Your Business" messages={med.chat.messages} label="" />
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            Illustrative conversation
          </p>
        </motion.div>
      </div>
      <div className="relative border-t border-ink-foreground/10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-5 text-sm text-ink-muted">
          <span className="eyebrow text-ink-muted">Delivered via</span>
          {["WhatsApp", "Email", "Chatbot", "App", "Voice"].map((c) => (
            <span key={c}>{c}</span>
          ))}
          <span className="text-gold">: connected to your CRM</span>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />

      {/* Requirement 3: LiveDemo chatbot in 2nd section of Home */}
      <LiveDemo />

      {/* Requirement 4: Animated Problem Cards */}
      <HomePhotoSection image={evening} className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow="The communication problem"
            title="Disconnected communication creates disconnected experiences."
            lead="Most businesses answer well when someone is at the desk. The question is what happens the rest of the time: late evening, Sunday, the fifteen minutes when three people message at once."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map(([t, b], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:border-accent/50 hover:shadow-lift"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-muted-foreground transition-colors group-hover:text-accent">
                      0{i + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-accent/20 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </HomePhotoSection>

      <Transformation />

      {/* Requirement 5: Connect diagram with separate lines from every point */}
      <HomePhotoSection image={reception} className="bg-paper py-24 md:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="How enVoy works"
              title="Your systems stay connected. Your customers stay informed."
              lead="Most businesses already run a CRM, a calendar, billing. Nothing changes. enVoy connects to what you have, reads live availability and writes every customer detail back, and talks to your customers on WhatsApp."
            />
            <Reveal className="mt-8 rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">WhatsApp integration.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Official WhatsApp Business API on your own number. The customer says "Hi". One tap.
                Booked. Confirmations, reminders and follow-ups happen on their own. We work
                directly with Meta: faster, more reliable, more secure.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative mx-auto grid max-w-xl grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 md:gap-6">
              {/* Left Systems */}
              <div className="relative z-10 space-y-2 sm:space-y-3">
                {["CRM", "Calendar", "Billing", "HMS / PMS"].map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ scale: 1.04, x: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg sm:rounded-xl border border-border bg-card/95 px-2.5 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium shadow-soft backdrop-blur transition-colors hover:border-accent text-center sm:text-left"
                  >
                    {s}
                  </motion.div>
                ))}
              </div>

              {/* Center enVoy Circle */}
              <div className="relative z-10 grid h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 place-items-center rounded-full bg-[#121417] text-xl sm:text-2xl md:text-3xl text-white shadow-2xl border border-white/15 transition-transform duration-300 hover:scale-105">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                <span className="absolute -inset-1 rounded-full bg-accent/15 blur-sm" />
                <Wordmark className="relative z-10 text-base sm:text-xl md:text-2xl" />
              </div>

              {/* Right Channels */}
              <div className="relative z-10 space-y-2 sm:space-y-2.5">
                {CHANNELS.slice(0, 5).map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ scale: 1.04, x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg sm:rounded-xl border border-border bg-card/95 px-2.5 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium shadow-soft backdrop-blur transition-colors hover:border-accent text-center sm:text-left"
                  >
                    {s}
                  </motion.div>
                ))}
              </div>

              {/* Highlighted dynamic animated connection lines from every point */}
              <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="highlightFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#FBBF24" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Glowing underlay conduit aura for high visibility */}
                <g
                  stroke="#F59E0B"
                  strokeWidth="5"
                  strokeOpacity="0.35"
                  fill="none"
                  filter="url(#lineGlow)"
                  vectorEffect="non-scaling-stroke"
                >
                  <path d="M 27 13 C 33 13, 33 50, 38 50" />
                  <path d="M 27 38 C 33 38, 34 50, 38 50" />
                  <path d="M 27 63 C 33 63, 34 50, 38 50" />
                  <path d="M 27 88 C 33 88, 33 50, 38 50" />
                  <path d="M 62 50 C 67 50, 67 10, 73 10" />
                  <path d="M 62 50 C 67 50, 68 30, 73 30" />
                  <path d="M 62 50 L 73 50" />
                  <path d="M 62 50 C 67 50, 68 70, 73 70" />
                  <path d="M 62 50 C 67 50, 67 90, 73 90" />
                </g>

                {/* Bright, prominent highlighted flowing golden conduits */}
                <g
                  stroke="url(#highlightFlow)"
                  strokeWidth="2.8"
                  strokeOpacity="1"
                  fill="none"
                  strokeDasharray="6 4"
                  className="flow-line"
                  vectorEffect="non-scaling-stroke"
                >
                  {/* Left 4 distinct lines connecting each system into enVoy */}
                  <path d="M 27 13 C 33 13, 33 50, 38 50" />
                  <path d="M 27 38 C 33 38, 34 50, 38 50" />
                  <path d="M 27 63 C 33 63, 34 50, 38 50" />
                  <path d="M 27 88 C 33 88, 33 50, 38 50" />

                  {/* Right 5 distinct lines connecting enVoy to each channel */}
                  <path d="M 62 50 C 67 50, 67 10, 73 10" />
                  <path d="M 62 50 C 67 50, 68 30, 73 30" />
                  <path d="M 62 50 L 73 50" />
                  <path d="M 62 50 C 67 50, 68 70, 73 70" />
                  <path d="M 62 50 C 67 50, 67 90, 73 90" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </HomePhotoSection>

      <HomePhotoSection
        image={team}
        dark
        className="bg-ink-gradient py-24 text-ink-foreground md:py-32"
      >
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <SectionHead
            dark
            eyebrow="Clean user interface"
            title="One calm inbox for your team."
            lead="Who asked what, what enVoy did, how fast, and the one conversation that needs a human. Full history already open."
          />
          <Reveal className="overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 backdrop-blur">
            <div className="flex items-center justify-between border-b border-ink-foreground/10 px-5 py-4">
              <p className="font-semibold">Inbox</p>
              <p className="text-xs text-ink-muted">5 open · 0 waiting</p>
            </div>
            {INBOX.map((r, i) => (
              <motion.div
                key={r[1]}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 border-b border-ink-foreground/5 px-5 py-4 last:border-0"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink-foreground/10 text-xs font-bold">
                  {r[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{r[1]}</p>
                  <p className="truncate text-xs text-ink-muted">{r[2]}</p>
                </div>
                <span
                  className={
                    r[3] === "Escalated"
                      ? "rounded-full bg-destructive/25 px-2.5 py-1 text-[11px]"
                      : "rounded-full bg-gold/20 px-2.5 py-1 text-[11px] text-gold"
                  }
                >
                  {r[3]}
                </span>
                <span className="w-8 text-right font-mono text-[11px] text-ink-muted">{r[4]}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </HomePhotoSection>

      <HomePhotoSection image={hotel} className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow="Industry solutions"
            title="One platform. Multiple customer journeys."
            lead="Absorbs, handles & communicates for you: 24/7."
          />
          <div className="mt-14">
            <IndustryGrid />
          </div>
        </div>
      </HomePhotoSection>

      <section className="bg-paper py-24 md:py-32 border-t border-border/40">
        <div className="container-x">
          <SectionHead
            eyebrow="Capabilities"
            title="Every enquiry and detail, handled to your standards."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="rounded-3xl bg-ink p-8 text-ink-foreground"
              >
                <p className="font-mono text-xs text-gold">0{i + 1}</p>
                <h3 className="mt-10 text-3xl">{p.title}</h3>
                <p className="mt-3 text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.05}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <h3 className="font-sans text-base font-semibold tracking-normal text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement 6: Animated Client Logos with No Broken Images */}
      <section className="py-24 bg-card/30 border-y border-border/40">
        <div className="container-x">
          <SectionHead
            eyebrow="Clients"
            title={
              <>
                Businesses already running on <Wordmark />.
              </>
            }
            lead="Live systems handling real customers, across skin care, wellness and manufacturing."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CLIENTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:border-accent/50 hover:shadow-lift"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div>
                  <div className="flex h-14 items-center">
                    <img
                      src={ORIGINAL_LOGOS[c.logo] ?? `/${c.logo}-logo.png`}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      width={180}
                      height={48}
                      className="h-10 max-h-12 w-auto max-w-[190px] object-contain object-left transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-6 text-lg font-semibold text-foreground">{c.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Impact />
      <FAQ items={HOME_FAQ} />
      <CTA
        title="Let's make every interaction count."
        lead="Discover how enVoy can connect your customer journey."
        cta="Book a Demo"
      />
    </>
  );
}

const BEFORE = [
  "Manual calls",
  "Separate communication channels",
  "Repeated data entry",
  "Missed follow-ups",
];
const AFTER = [
  "Connected WhatsApp communication",
  "Automated journey updates",
  "Better coordination",
  "Consistent customer engagement",
];

function Transformation() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "center 45%"] });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["inset(0 0% 0 0)", "inset(0 0% 0 0)"] : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  return (
    <section className="py-24 md:py-32 bg-paper/60 border-y border-border/50">
      <div className="container-x">
        <SectionHead
          eyebrow="The transformation"
          title="One connected journey. Every important interaction."
          lead="Scroll to see the same business before and after enVoy. Illustrative comparison."
        />
        <div
          ref={ref}
          className="relative mt-14 overflow-hidden rounded-3xl border border-border shadow-soft"
        >
          <div className="grid gap-3 bg-card p-8 md:grid-cols-4 md:p-12">
            <p className="eyebrow md:col-span-4">Before</p>
            {BEFORE.map((b, i) => (
              <div
                key={b}
                className="rounded-xl border border-dashed border-border bg-background/60 p-5 text-muted-foreground line-through decoration-destructive/50"
                style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 1.5}deg)` }}
              >
                {b}
              </div>
            ))}
          </div>
          <motion.div
            style={{ clipPath: clip }}
            className="absolute inset-0 grid content-start gap-3 bg-ink-gradient p-8 text-ink-foreground md:grid-cols-4 md:p-12"
          >
            <p className="eyebrow text-gold md:col-span-4">After: with enVoy</p>
            {AFTER.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 font-medium"
              >
                ✓ {b}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const IMPACT = [
  [
    "Reduced manual communication",
    "Routine questions, confirmations and reminders no longer need a person.",
  ],
  ["Improved customer visibility", "Every conversation and status in one place for your team."],
  ["More consistent follow-ups", "Follow-ups go out on schedule instead of depending on memory."],
  [
    "Better operational coordination",
    "The right desk is looped in automatically with full history.",
  ],
  ["A more connected experience", "Customers never have to repeat themselves between hand-offs."],
];

function Impact() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHead
          eyebrow="Business impact"
          title="Better communication. Better-coordinated operations."
        />
        <ol className="divide-y divide-border border-y border-border">
          {IMPACT.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <li className="group grid grid-cols-[3rem_1fr] gap-4 py-6 transition-colors hover:bg-paper">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <div>
                  <p className="text-xl font-semibold text-foreground">{t}</p>
                  <p className="mt-1 text-muted-foreground">{b}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
