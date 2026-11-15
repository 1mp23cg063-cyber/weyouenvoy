import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/site/IndustryPage";
import { breadcrumb, faqLd, industryBySlug, jsonLd, pageHead, SITE } from "@/lib/site";

const ind = industryBySlug("hotels");

export const Route = createFileRoute("/hotels")({
  head: () => ({
    ...pageHead({ title: ind.title, description: ind.description, path: "/hotels" }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: ind.name, path: "/hotels" },
      ]),
      faqLd(ind.faq),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `enVoy for ${ind.name}`,
        serviceType: "Customer communication automation",
        provider: { "@id": "https://weyoux.com/#organization" },
        areaServed: "IN",
        description: ind.description,
      }),
    ],
  }),
  component: () => <IndustryPage ind={ind} />,
});
