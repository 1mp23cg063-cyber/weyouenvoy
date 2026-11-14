import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/site/IndustryPage";
import { breadcrumb, faqLd, industryBySlug, jsonLd, pageHead, SITE } from "@/lib/site";

const ind = industryBySlug("others");

export const Route = createFileRoute("/others")({
  head: () => ({
    ...pageHead({ title: ind.title, description: ind.description, path: "/others" }),
    scripts: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: ind.name, path: "/others" },
      ]),
      faqLd(ind.faq),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `enVoy for ${ind.name}`,
        serviceType: "Customer communication automation",
        provider: { "@type": "Organization", name: "WeYouX", url: SITE.parentUrl },
        areaServed: "IN",
        description: ind.description,
      }),
    ],
  }),
  component: () => <IndustryPage ind={ind} />,
});
