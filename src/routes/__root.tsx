import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportYashError } from "../lib/yash-error-reporting";
import { SiteFooter, SiteHeader } from "@/components/site/Layout";
import { SITE, jsonLd } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404: Resource Missing</p>
        <h1 className="mt-4 text-6xl text-foreground">Page not found.</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Go to the enVoy home page
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportYashError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "enVoy | WhatsApp AI Assistant for Businesses" },
      {
        name: "description",
        content:
          "enVoy delivers intelligent WhatsApp AI assistants for Indian hospitals, hotels, and businesses. Automate inquiries, bookings, and support with zero wait.",
      },
      { name: "author", content: "WeYouX" },
      { property: "og:site_name", content: "weYou enVoy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#040c16" },
      { name: "application-name", content: "enVoy" },
      { name: "apple-mobile-web-app-title", content: "enVoy" },
      { name: "msapplication-TileColor", content: "#040c16" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300..800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://weyoux.com/#organization",
            name: "weYou X",
            url: SITE.parentUrl,
            email: SITE.email,
            telephone: SITE.telephone,
            logo: {
              "@type": "ImageObject",
              url: `${SITE.domain}/og-image.png`,
            },
            ...(SITE.socials && SITE.socials.length > 0 ? { sameAs: SITE.socials } : {}),
          },
          {
            "@type": "WebSite",
            "@id": `${SITE.domain}/#website`,
            name: "enVoy",
            url: SITE.domain,
            description:
              "enVoy delivers intelligent WhatsApp AI assistants for Indian hospitals, hotels, and businesses. Automate inquiries, bookings, and support with zero wait.",
            publisher: { "@id": "https://weyoux.com/#organization" },
            inLanguage: "en-IN",
          },
          {
            "@type": "SoftwareApplication",
            "@id": `${SITE.domain}/#software`,
            name: "enVoy",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            url: SITE.domain,
            publisher: { "@id": "https://weyoux.com/#organization" },
            provider: { "@id": "https://weyoux.com/#organization" },
            description:
              "enVoy delivers intelligent WhatsApp AI assistants for Indian hospitals, hotels, and businesses. Automate inquiries, bookings, and support with zero wait.",
          },
        ],
      }),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <noscript>
          <style>{`
            [style*="opacity: 0"], [style*="opacity:0"] {
              opacity: 1 !important;
              transform: none !important;
              visibility: visible !important;
            }
          `}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
