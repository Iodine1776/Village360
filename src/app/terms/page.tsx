import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using joinvillage360.com, Village360 materials, and related inquiries.",
};

const sections = [
  {
    title: "Agreement",
    body: [
      "By using joinvillage360.com (the “Site”), you agree to these Terms of Use. If you do not agree, please do not use the Site.",
      "These terms apply to the public website and materials offered through it. They do not create a partnership, employment, agency, or franchise relationship by themselves.",
    ],
  },
  {
    title: "What Village360 is—and is not",
    body: [
      "Village360 is a movement and model for collaborative, relationship-centered community support. Content on this Site is informational and educational.",
      "The Site is not a crisis line, emergency service, medical provider, legal advisor, or substitute for professional counsel. If you or someone else is in immediate danger, contact local emergency services.",
      "An inquiry, form submission, kit download, or conversation does not guarantee acceptance into a launch, partnership, volunteer role, or family-support pathway.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Use the Site lawfully and respectfully. Do not attempt to disrupt the Site, scrape it aggressively, misuse contact channels, or submit content that is harmful, deceptive, or unlawful.",
      "Do not send private case details, health information, or identifying information about a child through public inquiry forms or casual email threads started from this Site.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Village360 names, logos, graphics, copy, and downloadable kits on this Site are owned by Village360 or used with permission. You may share public pages and cited materials for personal or organizational learning with attribution.",
      "You may not sell, rebrand, or redistribute Village360 materials as your own product, or use the Village360 name or logo to imply endorsement, without prior written permission.",
    ],
  },
  {
    title: "Downloads and third-party links",
    body: [
      "Resources such as the Mini Village Kit are provided “as is” for informational use. We may update or withdraw materials at any time.",
      "Links to other sites (including founder or partner properties) are for convenience. We are not responsible for their content, policies, or practices.",
    ],
  },
  {
    title: "No warranties",
    body: [
      "The Site and materials are provided without warranties of any kind, express or implied, including fitness for a particular purpose or uninterrupted availability. Community outcomes depend on local leadership, context, and implementation—not website copy alone.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Village360 and its stewards are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on its content.",
      "Some jurisdictions do not allow certain limitations; in those places, our liability is limited to the maximum extent allowed.",
    ],
  },
  {
    title: "Privacy",
    body: [
      "How we handle information related to this Site is described in our Privacy Policy. By using the Site, you also acknowledge that policy.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms as the movement and Site evolve. The “Last updated” date will change when we do. Continued use after updates means you accept the revised terms.",
    ],
  },
  {
    title: "Governing considerations",
    body: [
      "These terms are intended for a U.S.-facing public website. If a dispute arises, we prefer to resolve it through direct conversation first. Formal venue and governing-law details can be confirmed in writing for specific agreements (for example, a launch or partnership contract), which may supersede these general website terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-3xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Legal
        </p>
        <h1 className="font-display text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl">
          Terms of use
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          Straightforward terms for using joinvillage360.com and related public
          materials. They are not a substitute for a signed launch or partnership
          agreement.
        </p>
        <p className="mt-4 text-sm text-ink-muted/80">
          Last updated: August 16, 2026
        </p>
      </section>

      <section className="relative mx-auto max-w-3xl space-y-10 px-5 pb-20 sm:px-8 sm:pb-28">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-2xl text-navy">{section.title}</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-ink-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="font-display text-2xl text-navy">Contact</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Questions about these terms:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Terms%20of%20use`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-6 text-sm text-ink-muted/80">
            See also{" "}
            <Link
              href="/privacy"
              className="text-forest underline-offset-2 hover:underline"
            >
              Privacy policy
            </Link>{" "}
            and{" "}
            <Link
              href="/accessibility"
              className="text-forest underline-offset-2 hover:underline"
            >
              Accessibility
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
