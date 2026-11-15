import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "@/components/site/Legal";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service: weYou enVoy | WeYouX",
      description:
        "Terms governing use of the weYou enVoy communication platform, website and APIs, including our healthcare operational triage and non-medical service disclaimer.",
      path: "/terms",
    }),
  component: () => (
    <Legal
      title="Terms of Service."
      sections={[
        {
          h: "1. Agreement to Terms",
          body: (
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between your
              organization ("Client", "you") and <strong>WeYouX</strong> ("WeYouX", "we", "us"),
              governing access to and use of the <strong>weYou enVoy</strong> communication
              platform, website (weyouenvoy.com), and associated APIs.
            </p>
          ),
        },
        {
          h: "2. Healthcare and Clinical Disclaimer (Non-Medical Services)",
          body: (
            <>
              <p>
                <strong>IMPORTANT NOTICE:</strong> weYou enVoy is an operational communication,
                triage, and scheduling orchestration system.
              </p>
              <p>
                <strong>
                  enVoy does NOT provide medical advice, clinical diagnosis, prescription decisions,
                  or emergency medical treatment.
                </strong>
              </p>
              <p>
                All medical care, treatment instructions, and clinical judgments remain the
                exclusive professional responsibility of the licensed medical practitioners and
                healthcare institutions using the software.
              </p>
              <p>
                In the event of a medical emergency, patients must contact emergency medical
                services (such as 112 in India) or visit the nearest hospital emergency room
                immediately.
              </p>
            </>
          ),
        },
        {
          h: "3. WhatsApp Business API and Third-Party Policies",
          body: (
            <p>
              enVoy connects to third-party telecommunication networks and official Meta WhatsApp
              Business API channels. Client agrees to comply with all applicable WhatsApp Commerce
              and Business Messaging policies, ensuring all outbound patient notifications are sent
              with lawful opt-in consent under Indian law.
            </p>
          ),
        },
        {
          h: "4. Non-Replacement of Clinical Infrastructure (HIS/HMS)",
          body: (
            <p>
              enVoy functions as an omnichannel patient communication layer. Client acknowledges
              that enVoy bridges communication to patients and does not replace the hospital's core
              Hospital Information System (HIS), Hospital Management System (HMS), or Electronic
              Medical Record (EMR) databases.
            </p>
          ),
        },
        {
          h: "5. Intellectual Property and Multi-Brand Ecosystem",
          body: (
            <p>
              WeYouX retains all right, title, and interest in and to the enVoy software,
              algorithms, trademarks, and documentation. weYou enVoy, LegalIndia.ai, and WeYou World
              are distinct product and service brands under parent holding company WeYouX.
            </p>
          ),
        },
        {
          h: "6. Service Availability and Support",
          body: (
            <p>
              We target a 99.9% uptime SLA for core conversational API endpoints, excluding
              scheduled maintenance windows and third-party telecom carrier interruptions. Support
              is available via sales@weyoux.com and WhatsApp desk +91 90369 92826.
            </p>
          ),
        },
        {
          h: "7. Governing Law and Dispute Resolution",
          body: (
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any
              disputes arising out of or in connection with these Terms shall be subject to the
              exclusive jurisdiction of the competent courts of India.
            </p>
          ),
        },
        {
          h: "8. Contact Information",
          body: (
            <p>
              WeYouX: Legal Counsel & Corporate Desk, India · Email: corporate@weyoux.com /
              sales@weyoux.com · Corporate Website: weyoux.com
            </p>
          ),
        },
      ]}
    />
  ),
});
