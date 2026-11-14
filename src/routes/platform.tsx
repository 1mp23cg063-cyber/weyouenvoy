import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Reveal, SectionHead } from "@/components/site/primitives";
import { CTA, IndustryGrid, PageIntro } from "@/components/site/Sections";
import { LiveDemo } from "@/components/site/LiveDemo";
import {
  CAPABILITIES,
  CHANNELS,
  INTEGRATIONS,
  PILLARS,
  STATS,
  breadcrumb,
  pageHead,
} from "@/lib/site";

export const Route = createFileRoute("/platform")({
  head: () => ({
    ...pageHead({
      title: "The enVoy Platform: Channels, Integrations & Capabilities",
      description:
        "How enVoy connects WhatsApp, voice, email, web chat and app to your CRM, calendars and records: triage, booking, follow-ups, escalation and CRM sync.",
      path: "/platform",
    }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Platform", path: "/platform" },
      ]),
    ],
  }),
  component: Platform,
});

function Platform() {
  return (
    <>
      <PageIntro
        eyebrow="Platform"
        title={
          <>
            Chatbot? CRM? Call-centre replacement?{" "}
            <em className="text-accent">All of them at once.</em>
          </>
        }
        lead="enVoy is the engine behind every channel, reaching each customer through the best method for the moment, trained on your prices, products, common questions and tone."
      />
      <section className="pb-24">
        <div className="container-x grid gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-5xl text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-ink-gradient py-24 text-ink-foreground">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHead
            dark
            eyebrow="Connecting everything your customers use"
            title="Channels in. Systems out."
            lead={`enVoy integrates with ${INTEGRATIONS}.`}
          />
          <div className="flex flex-wrap content-start gap-2">
            {CHANNELS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink-foreground/15 px-4 py-2 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-x">
          <SectionHead
            eyebrow="How it works"
            title="Understands you. Understands your customers. Communicates for you."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="rounded-3xl border border-border bg-paper p-8"
              >
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-8 text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <Reveal key={c.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-sans text-base font-semibold tracking-normal">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/contact">Book a Demo</ButtonLink>
          </div>
        </div>
      </section>
      <LiveDemo />
      <section className="pb-24">
        <div className="container-x">
          <SectionHead eyebrow="Industries" title="Built for six industries." />
          <div className="mt-10">
            <IndustryGrid />
          </div>
        </div>
      </section>
      <CTA title="Every journey deserves better communication." />
    </>
  );
}
