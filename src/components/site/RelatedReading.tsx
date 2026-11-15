import { Link } from "@tanstack/react-router";
import { POSTS, type BlogPost } from "@/lib/site";
import { Reveal, SectionHead } from "./primitives";

interface RelatedReadingProps {
  title?: string;
  eyebrow?: string;
  lead?: string;
  slugs?: string[];
  excludeSlug?: string;
  limit?: number;
  className?: string;
}

export function RelatedReading({
  title = "Related reading",
  eyebrow = "Insights & Guides",
  lead = "Practical notes on WhatsApp automation, operational integration, and communication standards.",
  slugs,
  excludeSlug,
  limit = 3,
  className,
}: RelatedReadingProps) {
  let posts: BlogPost[] = [];

  if (slugs && slugs.length > 0) {
    posts = slugs
      .map((s) => POSTS.find((p) => p.slug === s))
      .filter((p): p is BlogPost => Boolean(p));
  } else {
    posts = POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
  }

  if (posts.length === 0) return null;

  return (
    <section className={`py-20 md:py-28 border-t border-border bg-card/40 ${className ?? ""}`}>
      <div className="container-x">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift"
              >
                <div>
                  <p className="eyebrow text-xs text-accent">
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    · {p.tags.join(" · ")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {p.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span>Read guide</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
