import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { CONTACT_EMAIL, GO_LIVE, LANGUAGES, POSTS, SITE } from "@/lib/site";
import { Route as rootRoute } from "@/routes/__root";
import { Route as indexRoute } from "@/routes/index";
import { Route as medicalRoute } from "@/routes/medical";
import { Route as schoolsRoute } from "@/routes/schools";
import { Route as spasRoute } from "@/routes/spas";
import { Route as hotelsRoute } from "@/routes/hotels";
import { Route as realestateRoute } from "@/routes/realestate";
import { Route as othersRoute } from "@/routes/others";
import { Route as platformRoute } from "@/routes/platform";
import { Route as aboutRoute } from "@/routes/about";
import { Route as contactRoute } from "@/routes/contact";
import { Route as blogIndexRoute } from "@/routes/blog.index";
import { Route as blogSlugRoute } from "@/routes/blog.$slug";
import { Route as privacyRoute } from "@/routes/privacy";
import { Route as termsRoute } from "@/routes/terms";

interface RouteHeadResult {
  meta?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
  scripts?: Array<{ type?: string; children?: string }>;
}

type HeadFn = (ctx?: unknown) => RouteHeadResult;

const rootHead = (rootRoute.options.head as HeadFn)();

interface RouteDescriptor {
  path: string;
  head: RouteHeadResult;
}

const staticRoutes: RouteDescriptor[] = [
  { path: "/", head: (indexRoute.options.head as HeadFn)() },
  { path: "/medical", head: (medicalRoute.options.head as HeadFn)() },
  { path: "/schools", head: (schoolsRoute.options.head as HeadFn)() },
  { path: "/spas", head: (spasRoute.options.head as HeadFn)() },
  { path: "/hotels", head: (hotelsRoute.options.head as HeadFn)() },
  { path: "/realestate", head: (realestateRoute.options.head as HeadFn)() },
  { path: "/others", head: (othersRoute.options.head as HeadFn)() },
  { path: "/platform", head: (platformRoute.options.head as HeadFn)() },
  { path: "/about", head: (aboutRoute.options.head as HeadFn)() },
  { path: "/contact", head: (contactRoute.options.head as HeadFn)() },
  { path: "/blog", head: (blogIndexRoute.options.head as HeadFn)() },
  { path: "/privacy", head: (privacyRoute.options.head as HeadFn)() },
  { path: "/terms", head: (termsRoute.options.head as HeadFn)() },
];

const blogRoutes: RouteDescriptor[] = POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  head: (blogSlugRoute.options.head as HeadFn)({
    loaderData: { post },
    params: { slug: post.slug },
  }),
}));

const allIndexableRoutes: RouteDescriptor[] = [...staticRoutes, ...blogRoutes];

function getMeta(head: RouteHeadResult, key: string, value: string): string | undefined {
  const item = head.meta?.find((m) => m[key] === value);
  return item ? (item.content ?? item[key]) : undefined;
}

function getTitle(head: RouteHeadResult): string | undefined {
  const titleObj = head.meta?.find((m) => "title" in m);
  return titleObj ? titleObj.title : undefined;
}

function getDescription(head: RouteHeadResult): string | undefined {
  return getMeta(head, "name", "description");
}

function getCanonical(head: RouteHeadResult): string | undefined {
  const canonicalLink = head.links?.find((l) => l.rel === "canonical");
  return canonicalLink?.href;
}

type JsonLdNode = Record<string, unknown>;

function parseJsonLdScripts(scripts?: Array<{ type?: string; children?: string }>): JsonLdNode[] {
  if (!scripts) return [];
  const results: JsonLdNode[] = [];
  for (const s of scripts) {
    if (s.type === "application/ld+json" && s.children) {
      results.push(JSON.parse(s.children) as JsonLdNode);
    }
  }
  return results;
}

const rootJsonLd = parseJsonLdScripts(rootHead.scripts);

describe("Root Head and Defaults", () => {
  it("has a title between 30 and 60 characters", () => {
    const title = getTitle(rootHead);
    expect(title).toBeDefined();
    expect(title!.length).toBeGreaterThanOrEqual(30);
    expect(title!.length).toBeLessThanOrEqual(60);
  });

  it("has a description between 140 and 160 characters", () => {
    const desc = getDescription(rootHead);
    expect(desc).toBeDefined();
    expect(desc!.length).toBeGreaterThanOrEqual(140);
    expect(desc!.length).toBeLessThanOrEqual(160);
  });

  it("defines the unified root @graph entities", () => {
    expect(rootJsonLd).toHaveLength(1);
    const graph = rootJsonLd[0]["@graph"] as JsonLdNode[] | undefined;
    expect(graph).toBeDefined();
    expect(Array.isArray(graph)).toBe(true);

    const org = graph!.find((n) => n["@type"] === "Organization");
    expect(org).toBeDefined();
    expect(org!["@id"]).toBe("https://weyoux.com/#organization");
    expect(org!.email).toBe(CONTACT_EMAIL);
    expect(org!.telephone).toBe("+919036992826");

    const site = graph!.find((n) => n["@type"] === "WebSite");
    expect(site).toBeDefined();
    expect(site!["@id"]).toBe(`${SITE.domain}/#website`);
    expect((site!.publisher as JsonLdNode)["@id"]).toBe("https://weyoux.com/#organization");

    const software = graph!.find((n) => n["@type"] === "SoftwareApplication");
    expect(software).toBeDefined();
    expect(software!["@id"]).toBe(`${SITE.domain}/#software`);
    expect((software!.publisher as JsonLdNode)["@id"]).toBe("https://weyoux.com/#organization");
    expect((software!.provider as JsonLdNode)["@id"]).toBe("https://weyoux.com/#organization");
  });
});

describe("Meta Tag Length Bounds Across All Routes", () => {
  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has title between 30 and 60 characters",
    (_, route) => {
      const title = getTitle(route.head);
      expect(title, `Title missing for ${route.path}`).toBeDefined();
      expect(
        title!.length,
        `Title "${title}" length ${title!.length} outside 30-60`,
      ).toBeGreaterThanOrEqual(30);
      expect(
        title!.length,
        `Title "${title}" length ${title!.length} outside 30-60`,
      ).toBeLessThanOrEqual(60);
    },
  );

  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has description between 140 and 160 characters",
    (_, route) => {
      const desc = getDescription(route.head);
      expect(desc, `Description missing for ${route.path}`).toBeDefined();
      expect(
        desc!.length,
        `Description "${desc}" length ${desc!.length} outside 140-160`,
      ).toBeGreaterThanOrEqual(140);
      expect(
        desc!.length,
        `Description "${desc}" length ${desc!.length} outside 140-160`,
      ).toBeLessThanOrEqual(160);
    },
  );

  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has exactly one canonical matching SITE.domain + path",
    (_, route) => {
      const canonical = getCanonical(route.head);
      expect(canonical).toBe(`${SITE.domain}${route.path}`);
      const canonicalLinks = route.head.links?.filter((l) => l.rel === "canonical");
      expect(canonicalLinks).toHaveLength(1);
    },
  );

  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has og:url matching canonical and valid og:locale",
    (_, route) => {
      const ogUrl = getMeta(route.head, "property", "og:url");
      const canonical = getCanonical(route.head);
      expect(ogUrl).toBe(canonical);

      const ogLocale = getMeta(route.head, "property", "og:locale");
      expect(ogLocale).toBe("en_IN");
    },
  );
});

describe("Structured Data (JSON-LD) Integrity", () => {
  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has valid JSON-LD scripts",
    (_, route) => {
      expect(() => parseJsonLdScripts(route.head.scripts)).not.toThrow();
    },
  );

  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s has exactly one SoftwareApplication across merged graph and no price 0 offers",
    (_, route) => {
      const pageJsonLd = parseJsonLdScripts(route.head.scripts);
      const allObjects: JsonLdNode[] = [];

      for (const item of [...rootJsonLd, ...pageJsonLd]) {
        if (item["@graph"] && Array.isArray(item["@graph"])) {
          allObjects.push(...(item["@graph"] as JsonLdNode[]));
        } else {
          allObjects.push(item);
        }
      }

      const softwareApps = allObjects.filter((o) => o["@type"] === "SoftwareApplication");
      expect(softwareApps).toHaveLength(1);
      expect(softwareApps[0]["@id"]).toBe(`${SITE.domain}/#software`);

      const offers: JsonLdNode[] = allObjects.flatMap((o) =>
        o.offers
          ? Array.isArray(o.offers)
            ? (o.offers as JsonLdNode[])
            : [o.offers as JsonLdNode]
          : [],
      );
      for (const off of offers) {
        expect(off.price).not.toBe("0");
        expect(off.price).not.toBe(0);
      }
    },
  );

  it.each(allIndexableRoutes.map((r) => [r.path, r]))(
    "%s resolves all internal @id references",
    (_, route) => {
      const pageJsonLd = parseJsonLdScripts(route.head.scripts);
      const allNodes: JsonLdNode[] = [];

      for (const item of [...rootJsonLd, ...pageJsonLd]) {
        if (item["@graph"] && Array.isArray(item["@graph"])) {
          allNodes.push(...(item["@graph"] as JsonLdNode[]));
        } else {
          allNodes.push(item);
        }
      }

      const definedIds = new Set<string>();
      for (const node of allNodes) {
        if (typeof node["@id"] === "string") definedIds.add(node["@id"]);
      }

      function checkRefs(obj: unknown) {
        if (!obj || typeof obj !== "object") return;
        const record = obj as Record<string, unknown>;
        for (const [k, v] of Object.entries(record)) {
          if (k === "@id" && typeof v === "string") {
            continue;
          }
          if (
            v &&
            typeof v === "object" &&
            "@id" in v &&
            typeof (v as Record<string, unknown>)["@id"] === "string"
          ) {
            const refId = (v as Record<string, unknown>)["@id"] as string;
            if (
              refId.startsWith("https://weyoux.com/") ||
              refId.startsWith("https://weyouenvoy.com/")
            ) {
              expect(
                definedIds.has(refId),
                `Reference ${refId} in route ${route.path} could not be resolved in defined nodes: ${Array.from(definedIds).join(", ")}`,
              ).toBe(true);
            }
          } else {
            checkRefs(v);
          }
        }
      }

      for (const node of allNodes) {
        checkRefs(node);
      }
    },
  );
});

describe("Fact Consistency Across site.ts, llms.txt and llms-full.txt", () => {
  const rootDir = path.resolve(__dirname, "../..");
  const llmsTxt = fs.readFileSync(path.join(rootDir, "public/llms.txt"), "utf-8");
  const llmsFullTxt = fs.readFileSync(path.join(rootDir, "public/llms-full.txt"), "utf-8");

  it("synchronizes go-live timeline identically", () => {
    expect(GO_LIVE).toBe("7 business days from onboarding");
    expect(llmsTxt).toContain(GO_LIVE);
    expect(llmsFullTxt).toContain(GO_LIVE);
  });

  it("synchronizes languages statement identically", () => {
    expect(LANGUAGES).toBe(
      "Kannada, Hindi, and English out of the box (additional Indian languages on request)",
    );
    expect(llmsTxt).toContain(LANGUAGES);
    expect(llmsFullTxt).toContain(LANGUAGES);
  });

  it("synchronizes contact email identically", () => {
    expect(CONTACT_EMAIL).toBe("sales@weyoux.com");
    expect(llmsTxt).toContain(CONTACT_EMAIL);
    expect(llmsFullTxt).toContain(CONTACT_EMAIL);
  });
});

describe("Sitemap Integrity", () => {
  const rootDir = path.resolve(__dirname, "../..");
  const sitemapXml = fs.readFileSync(path.join(rootDir, "public/sitemap.xml"), "utf-8");

  it("contains all static routes and blog post slugs without missing any", () => {
    for (const route of allIndexableRoutes) {
      const expectedUrl = `${SITE.domain}${route.path === "/" ? "/" : route.path}`;
      expect(
        sitemapXml.includes(`<loc>${expectedUrl}</loc>`),
        `Sitemap missing ${expectedUrl}`,
      ).toBe(true);
    }
  });

  it("contains no /pricing route", () => {
    expect(sitemapXml).not.toContain("/pricing");
  });

  it("requires every sitemap URL to have a valid ISO <lastmod>", () => {
    const urlBlocks = sitemapXml.match(/<url>[\s\S]*?<\/url>/g) || [];
    expect(urlBlocks.length).toBe(allIndexableRoutes.length);

    for (const block of urlBlocks) {
      const locMatch = block.match(/<loc>(.*?)<\/loc>/);
      const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);

      expect(locMatch, "Missing <loc> in sitemap entry").toBeDefined();
      expect(lastmodMatch, `Missing <lastmod> for ${locMatch?.[1]}`).toBeDefined();

      const lastmod = lastmodMatch![1];
      expect(
        /^\d{4}-\d{2}-\d{2}$/.test(lastmod),
        `lastmod "${lastmod}" for ${locMatch?.[1]} is not in YYYY-MM-DD format`,
      ).toBe(true);
    }
  });
});

describe("Phase 2 Blog Posts and AEO Contracts", () => {
  function countWords(str: string): number {
    return str.trim().split(/\s+/).filter(Boolean).length;
  }

  const newPostSlugs = [
    "reduce-opd-no-shows-whatsapp-hospitals",
    "whatsapp-automation-guide-hospitals-india",
    "ai-communication-system-vs-rule-based-chatbot",
  ];

  it("verifies all expected blog slugs exist in POSTS", () => {
    const slugs = POSTS.map((p) => p.slug);
    expect(slugs).toContain("why-every-enquiry-deserves-the-same-answer");
    for (const slug of newPostSlugs) {
      expect(slugs).toContain(slug);
    }
  });

  it("verifies every blog post title is unique and between 30 and 60 characters", () => {
    const titles = POSTS.map((p) => p.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
    for (const title of titles) {
      expect(title.length).toBeGreaterThanOrEqual(30);
      expect(title.length).toBeLessThanOrEqual(60);
    }
  });

  it("verifies every blog post summary/description is unique and between 140 and 160 characters", () => {
    const summaries = POSTS.map((p) => p.summary);
    const uniqueSummaries = new Set(summaries);
    expect(uniqueSummaries.size).toBe(summaries.length);
    for (const summary of summaries) {
      expect(summary.length).toBeGreaterThanOrEqual(140);
      expect(summary.length).toBeLessThanOrEqual(160);
    }
  });

  it("verifies each of the 3 new blog posts is between 600 and 900 words", () => {
    for (const slug of newPostSlugs) {
      const post = POSTS.find((p) => p.slug === slug);
      expect(post).toBeDefined();
      const fullText = post!.body.map((b) => b.text).join(" ");
      const words = countWords(fullText);
      expect(words, `Post ${slug} has word count ${words} outside 600-900`).toBeGreaterThanOrEqual(
        600,
      );
      expect(words, `Post ${slug} has word count ${words} outside 600-900`).toBeLessThanOrEqual(
        900,
      );
    }
  });

  it("verifies each H2 is followed by a direct answer of 40 to 60 words in the 3 new posts", () => {
    for (const slug of newPostSlugs) {
      const post = POSTS.find((p) => p.slug === slug);
      expect(post).toBeDefined();
      post!.body.forEach((b, idx) => {
        if (b.type === "h2") {
          expect(b.text.endsWith("?"), `H2 "${b.text}" in ${slug} should be a question`).toBe(true);
          const nextBlock = post!.body[idx + 1];
          expect(nextBlock).toBeDefined();
          expect(nextBlock.type).toBe("p");
          const ansWords = countWords(nextBlock.text);
          expect(
            ansWords,
            `Direct answer under "${b.text}" in ${slug} has ${ansWords} words (must be 40-60)`,
          ).toBeGreaterThanOrEqual(40);
          expect(
            ansWords,
            `Direct answer under "${b.text}" in ${slug} has ${ansWords} words (must be 40-60)`,
          ).toBeLessThanOrEqual(60);
        }
      });
    }
  });

  it("verifies no blog post contains '%'", () => {
    for (const post of POSTS) {
      const fullText = post.body.map((b) => b.text).join(" ");
      expect(fullText.includes("%"), `Post ${post.slug} contains forbidden '%'`).toBe(false);
    }
  });
});
