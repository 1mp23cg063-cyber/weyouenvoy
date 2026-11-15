import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTA } from "@/components/site/Sections";
import { RelatedReading } from "@/components/site/RelatedReading";
import { POSTS, SITE, breadcrumb, jsonLd, pageHead } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Article not found: enVoy" }, { name: "robots", content: "noindex" }],
      };
    const p = loaderData.post;
    return {
      ...pageHead({
        title: `${p.title}: enVoy Blog`,
        description: p.summary,
        path: `/blog/${params.slug}`,
        type: "article",
      }),
      scripts: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path: `/blog/${params.slug}` },
        ]),
        jsonLd({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${SITE.domain}/blog#blog`,
              name: "enVoy Blog",
              url: `${SITE.domain}/blog`,
              publisher: { "@id": "https://weyoux.com/#organization" },
              inLanguage: "en-IN",
            },
            {
              "@type": "BlogPosting",
              "@id": `${SITE.domain}/blog/${params.slug}#article`,
              headline: p.title,
              datePublished: p.date,
              dateModified: p.modified ?? p.date,
              description: p.summary,
              inLanguage: "en-IN",
              image: `${SITE.domain}/og-image.png`,
              isPartOf: {
                "@id": `${SITE.domain}/blog#blog`,
              },
              author: {
                "@id": "https://weyoux.com/#organization",
              },
              publisher: {
                "@type": "Organization",
                "@id": "https://weyoux.com/#organization",
                name: "weYou X",
                url: SITE.parentUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE.domain}/og-image.png`,
                },
              },
              mainEntityOfPage: `${SITE.domain}/blog/${params.slug}`,
            },
          ],
        }),
      ],
    };
  },
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <article className="container-x max-w-3xl py-20 md:py-28">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Blog
        </Link>
        <p className="eyebrow mt-10">
          {post.date} · {post.tags.join(" · ")}
        </p>
        <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">{post.title}</h1>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {post.body.map((b, i) =>
            b.type === "h2" ? (
              <h2 key={i} className="pt-6 text-3xl text-foreground">
                {b.text}
              </h2>
            ) : b.type === "quote" ? (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-6 font-display text-3xl text-foreground"
              >
                {b.text}
              </blockquote>
            ) : b.type === "li" ? (
              <p
                key={i}
                className="pl-6 before:-ml-5 before:mr-3 before:text-accent before:content-['•']"
              >
                {b.text}
              </p>
            ) : (
              <p key={i}>{b.text}</p>
            ),
          )}
        </div>
      </article>
      <RelatedReading excludeSlug={post.slug} />
      <CTA title="One standard. Every customer. Every hour." />
    </>
  );
}
