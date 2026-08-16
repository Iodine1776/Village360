import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Village360’s commitment to accessible design and how to request accommodations.",
};

const commitments = [
  {
    title: "Readable structure",
    body: "Clear headings, consistent navigation, and copy written for calm scanning—not dense walls of text.",
  },
  {
    title: "Keyboard & focus",
    body: "Interactive elements are reachable by keyboard, with visible focus styles. A skip link lets you move past the header to main content.",
  },
  {
    title: "Color & contrast",
    body: "We aim for sufficient contrast between text and backgrounds across light brand surfaces and darker footer areas.",
  },
  {
    title: "Images & media",
    body: "Meaningful images include alternative text. Decorative icons are marked so assistive technology can ignore them.",
  },
  {
    title: "Motion",
    body: "Entrance animations respect prefers-reduced-motion so motion is reduced when your system asks for less of it.",
  },
  {
    title: "Forms",
    body: "Inquiry fields use labels and hints. Current forms prepare an email in your mail app; that flow depends on your device and email client.",
  },
];

export default function AccessibilityPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-3xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Inclusion
        </p>
        <h1 className="font-display text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl">
          Accessibility
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          Village360 should be usable by people with a wide range of abilities.
          We design for clarity first and treat accessibility as ongoing work—not
          a one-time checkbox.
        </p>
        <p className="mt-4 text-sm text-ink-muted/80">
          Last updated: August 16, 2026
        </p>
      </section>

      <section className="relative mx-auto max-w-3xl px-5 pb-12 sm:px-8">
        <h2 className="font-display text-2xl text-navy">Our standards</h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          We aim to align with the Web Content Accessibility Guidelines (WCAG)
          2.2 Level AA where practical for a marketing and inquiry site. We have
          not completed a formal third-party audit yet. If something blocks you,
          tell us—fixing it is part of how we improve.
        </p>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-2xl text-navy">What we build for</h2>
          <ul className="mt-8 space-y-6">
            {commitments.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-lg text-navy">{item.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl space-y-8 px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <h2 className="font-display text-2xl text-navy">Known limits</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Some content—such as complex diagrams, PDFs, or third-party links—may
            be less accessible than the core pages. We improve those assets as we
            revise them. Mailto forms require a working email client on your
            device.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-navy">
            Request an accommodation
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            If you need content in another format, run into a barrier, or want to
            discuss an accommodation for an event or conversation, email us. Include
            the page URL when you can, and describe what would help.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Accessibility:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Accessibility%20request`}
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <p className="text-sm text-ink-muted/80">
          Related:{" "}
          <Link
            href="/privacy"
            className="text-forest underline-offset-2 hover:underline"
          >
            Privacy policy
          </Link>{" "}
          ·{" "}
          <Link
            href="/terms"
            className="text-forest underline-offset-2 hover:underline"
          >
            Terms of use
          </Link>{" "}
          ·{" "}
          <Link
            href="/contact"
            className="text-forest underline-offset-2 hover:underline"
          >
            Connect
          </Link>
        </p>
      </section>
    </div>
  );
}
