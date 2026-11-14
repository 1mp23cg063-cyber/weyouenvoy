import type { ReactNode } from "react";

export function Legal({
  title,
  sections,
}: {
  title: string;
  sections: { h: string; body: ReactNode }[];
}) {
  return (
    <article className="container-x max-w-3xl py-20 md:py-28">
      <p className="eyebrow">Legal · Effective Date: November 4, 2026 · WeYouX</p>
      <h1 className="mt-5 text-5xl md:text-6xl">{title}</h1>
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl text-foreground">{s.h}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground [&_strong]:text-foreground">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
