import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/primitives";
import { PageIntro } from "@/components/site/Sections";
import { POSTS, breadcrumb, pageHead } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageHead({
      title: "enVoy Blog: Customer Communication, WhatsApp & Standards",
      description:
        "Notes from the enVoy team on customer communication, WhatsApp and holding one standard for every customer, every hour.",
      path: "/blog",
    }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  }),
  component: Blog,
});

function TypewriterBlogHeadline() {
  const reduce = useReducedMotion();
  const text1 = "Tell less, ";
  const text2 = "deliver more.";
  const fullText = text1 + text2;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (index >= fullText.length) return;

    const timeout = setTimeout(
      () => {
        setIndex((i) => i + 1);
      },
      75 + Math.random() * 35,
    );

    return () => clearTimeout(timeout);
  }, [index, fullText.length, reduce]);

  if (reduce) {
    return (
      <>
        Tell less, <em className="text-accent not-italic">deliver more.</em>
      </>
    );
  }

  const current1 = text1.slice(0, Math.min(index, text1.length));
  const current2 = index > text1.length ? text2.slice(0, index - text1.length) : "";
  const isDone = index >= fullText.length;

  return (
    <span className="inline-block">
      <span>{current1}</span>
      {current2 && <span className="text-accent font-display italic">{current2}</span>}
      <motion.span
        className="ml-1 inline-block h-8 w-1 bg-accent align-middle md:h-14"
        animate={{ opacity: isDone ? [1, 0, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      />
    </span>
  );
}

function Blog() {
  return (
    <>
      <PageIntro eyebrow="Blog" title={<TypewriterBlogHeadline />} />
      <section className="pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <Reveal key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block h-full rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="eyebrow">
                  {new Date(p.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {p.tags.join(" · ")}
                </p>
                <h2 className="mt-6 text-3xl text-foreground">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.summary}</p>
                <span className="mt-8 inline-block text-sm font-semibold text-accent">
                  Read article →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
