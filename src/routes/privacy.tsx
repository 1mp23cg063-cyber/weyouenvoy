import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/site/Legal";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy: weYou enVoy | WeYouX",
      description:
        "How WeYouX, operating weYou enVoy, collects, uses and safeguards information under DPDPA 2023, the IT Act, 2000, and Indian data protection regulations.",
      path: "/privacy",
    }),
  component: () => (
    <Legal
      title="Privacy Policy."
      sections={[
        {
          h: "1. Overview and Scope",
          body: (
            <p>
              This Privacy Policy describes how <strong>WeYouX</strong> ("WeYouX", "we", "us", or
              "our"), operating the <strong>weYou enVoy</strong> brand ("enVoy"), collects, uses,
              and safeguards information when organizations and their patients or customers interact
              with our website (weyouenvoy.com) and our WhatsApp and omnichannel communication
              orchestration software.
            </p>
          ),
        },
        {
          h: "2. Data Processing Roles and Compliance",
          body: (
            <>
              <p>
                We comply with the{" "}
                <strong>Digital Personal Data Protection Act, 2023 (DPDPA 2023)</strong>, the
                Information Technology Act, 2000, and applicable Indian data protection frameworks.
                In the context of hospital and clinical deployments:
              </p>
              <p>
                <strong>Healthcare Provider as Data Fiduciary:</strong> The hospital, clinic, or
                enterprise client remains the primary Data Fiduciary determining the purpose and
                means of patient communication.
              </p>
              <p>
                <strong>enVoy as Data Processor:</strong> enVoy operates strictly as a Data
                Processor, routing appointments, reminders, and patient inquiries on behalf of the
                healthcare institution without claiming ownership of patient medical data.
              </p>
            </>
          ),
        },
        {
          h: "3. Categories of Information Processed",
          body: (
            <>
              <p>
                We process only data required to deliver patient communication and appointment
                management:
              </p>
              <p>
                <strong>Contact Information:</strong> Patient name, phone number (WhatsApp MSISDN),
                and email address.
              </p>
              <p>
                <strong>Scheduling Metadata:</strong> Department preference, consulting doctor,
                preferred consultation slot, and appointment confirmation tokens.
              </p>
              <p>
                <strong>Business Inquiry Information:</strong> Name, work email, organization, and
                communication preferences submitted through our website contact forms.
              </p>
              <p>
                <strong>Technical Metadata:</strong> IP address, browser type, and interaction
                timestamps captured for security, audit logging, and SSRF prevention.
              </p>
            </>
          ),
        },
        {
          h: "4. Zero Sale and Model Training Prohibition",
          body: (
            <p>
              We enforce a strict confidentiality guarantee: We{" "}
              <strong>never sell, lease, or monetize</strong> personal data, patient health
              information, or corporate inquiries. Patient communication data is{" "}
              <strong>never used to train public third-party foundation models</strong>.
            </p>
          ),
        },
        {
          h: "5. Data Security and Infrastructure Isolation",
          body: (
            <p>
              All data in transit is encrypted using modern TLS 1.3 cryptographic protocols. All
              communications across the WhatsApp Business API run on Meta-verified, end-to-end
              encrypted networks. Databases and lead stores operate with AES-256 encryption at rest
              and strict tenant-level row segregation.
            </p>
          ),
        },
        {
          h: "6. Data Subject Rights (DPDPA 2023)",
          body: (
            <p>
              Under DPDPA 2023, data principals retain the right to access their information,
              request correction or erasure, withdraw communication consent, and nominate
              representatives. To exercise these rights, email our Grievance Redressal Officer at{" "}
              <a className="underline" href="mailto:privacy@weyoux.com">
                privacy@weyoux.com
              </a>
              .
            </p>
          ),
        },
        {
          h: "7. Corporate Structure",
          body: (
            <p>
              weYou enVoy is an independent product brand operated by parent company{" "}
              <strong>WeYouX</strong> (India). Sibling brands in the WeYouX ecosystem include{" "}
              <strong>LegalIndia.ai</strong> and <strong>WeYou World</strong>, each operating with
              separate data environments and tenant pipelines.
            </p>
          ),
        },
        {
          h: "8. Contact Our Privacy Office",
          body: (
            <p>
              WeYouX: enVoy Division, India · Email: privacy@weyoux.com / sales@weyoux.com ·
              WhatsApp Grievance Desk: +91 90369 92826
            </p>
          ),
        },
      ]}
    />
  ),
});
