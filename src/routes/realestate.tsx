import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/site/IndustryPage";
import { breadcrumb, faqLd, industryBySlug, jsonLd, pageHead, SITE } from "@/lib/site";

const ind = industryBySlug("realestate");

export const Route = createFileRoute("/realestate")({
  head: () => ({
    ...pageHead({ title: ind.title, description: ind.description, path: "/realestate" }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: ind.name, path: "/realestate" },
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
