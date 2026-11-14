import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy /post?p=slug links from the original site.
export const Route = createFileRoute("/post")({
  validateSearch: (s: Record<string, unknown>) => ({ p: typeof s["p"] === "string" ? s["p"] : "" }),
  beforeLoad: ({ search }) => {
    if (search.p)
      throw redirect({ to: "/blog/$slug", params: { slug: search.p }, statusCode: 301 });
    throw redirect({ to: "/blog", statusCode: 301 });
  },
});
