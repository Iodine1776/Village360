import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Village360 handles information you share through this website and related inquiries.",
};

const sections = [
  {
    title: "Who we are",
    body: [
      "Village360 operates the website at joinvillage360.com. For privacy questions, contact us at the email below.",
    ],
  },
  {
    title: "What this site does today",
    body: [
      "This is primarily an informational website. You can read about the movement, download public resources such as the Mini Village Kit, and start a conversation by email.",
      "Inquiry forms on this site open a message in your own email application (mailto). We do not currently operate a hosted form backend that stores submissions on our servers.",
    ],
  },
  {
    title: "Information you may share with us",
    body: [
      "When you email us—or use a mailto form that prepares an email—you may choose to share details such as your name, email address, organization, role, location, and the content of your message.",
      "Please do not include private case details, health information, or identifying information about a child in website inquiries. Those details are not needed to start a conversation, and we ask you not to send them through these channels.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use inquiry information to respond to you, understand interest in Village360, and—only if you ask—share occasional updates about the movement.",
      "We do not sell personal information. We do not use inquiry content for advertising.",
    ],
  },
  {
    title: "Cookies, analytics, and hosting",
    body: [
      "We do not currently run third-party marketing or analytics trackers on this site.",
      "The site is hosted on infrastructure that may generate standard technical logs (for example, IP address, browser type, and requested pages) needed to deliver and secure the service. Those logs are controlled by our hosting provider under their own practices.",
    ],
  },
  {
    title: "Downloads and linked sites",
    body: [
      "Public PDFs and other downloadable files are provided for informational use. Downloading a file may be reflected in ordinary hosting logs.",
      "Links to other websites (including founder or partner sites) are governed by those sites’ own privacy practices—not this policy.",
    ],
  },
  {
    title: "Children",
    body: [
      "This website is intended for adults exploring community collaboration, leadership, partnership, or family support pathways. It is not directed at children under 13, and we do not knowingly collect personal information from children through this site.",
    ],
  },
  {
    title: "Retention and your choices",
    body: [
      "Email you send us is retained as needed to respond and maintain a responsible record of the conversation. You may ask us to update or delete contact information we hold by emailing us.",
      "If you previously opted into updates, you can ask to be removed at any time.",
    ],
  },
  {
    title: "Changes",
    body: [
      "As Village360 grows—especially if we add hosted forms, accounts, or analytics—we will update this policy and revise the date below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-3xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Legal
        </p>
        <h1 className="font-display text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          This page explains how Village360 handles information related to
          joinvillage360.com. It is written for the site as it works today—not
          for tools we have not launched yet.
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
            Privacy questions:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20question`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-6 text-sm text-ink-muted/80">
            See also our{" "}
            <Link
              href="/terms"
              className="text-forest underline-offset-2 hover:underline"
            >
              Terms of use
            </Link>{" "}
            and{" "}
            <Link
              href="/accessibility"
              className="text-forest underline-offset-2 hover:underline"
            >
              Accessibility statement
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
