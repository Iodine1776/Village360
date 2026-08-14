import type { Metadata } from "next";
import Link from "next/link";
import { MailtoInquiryForm } from "@/components/MailtoInquiryForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find the right Village360 path: launch, partnership, volunteering, family support, or a general question.",
};

const paths = [
  {
    id: "launch",
    audience: "Churches, nonprofits, schools, courts, coalitions",
    title: "Launch or bring Village360 here",
    body: "Organizational readiness and implementation. An inquiry starts discernment—it does not guarantee a launch.",
    href: "/bring-village360-here",
    label: "Go to Bring Village360 Here",
  },
  {
    id: "partner",
    audience: "Funders, sponsors, aligned organizations",
    title: "Partner or strengthen the movement",
    body: "Funding, sponsorship, evaluation, or institutional partnership. Separate from volunteer signup.",
    href: "/join#partners",
    label: "Explore partnerships",
  },
  {
    id: "volunteer",
    audience: "Mentors, coaches, local helpers",
    title: "Volunteer or coach",
    body: "Clear roles, honest screening, and sustainable rhythms. This is participation—not a sales pipeline.",
    href: "/join#volunteer",
    label: "Find a volunteer path",
  },
];

const generalFields = [
  { name: "name", label: "Full name", type: "text" as const, required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  {
    name: "topic",
    label: "What is this about?",
    type: "select" as const,
    required: true,
    options: [
      { value: "general", label: "General question" },
      { value: "media", label: "Speaking, media, or press" },
      { value: "other", label: "Something else" },
    ],
  },
  {
    name: "message",
    label: "Your message",
    type: "textarea" as const,
    required: true,
    hint: "Please do not include private case details, health information, or identifying information about a child.",
  },
  {
    name: "updates",
    label: "I would like occasional updates about the Village360 movement.",
    type: "checkbox" as const,
  },
];

export default function ContactPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Start a conversation
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Every strong movement begins with{" "}
          <span className="text-forest">a real conversation.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Tell us what brought you here. We will help you find the right place
          to begin—without mixing family support into a launch funnel.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">
          What brings you here?
        </h2>
        <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {paths.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-28 grid gap-3 py-8 sm:grid-cols-[minmax(0,1.2fr)_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-forest/80 uppercase">
                  {item.audience}
                </p>
                <h3 className="mt-1 font-display text-xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
              <Link
                href={item.href}
                className="text-sm font-medium text-forest transition-colors hover:text-forest-deep sm:justify-self-end"
              >
                {item.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="families"
        className="relative scroll-mt-28 border-y border-navy/8 bg-ivory-deep/50"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">
            Family support — separate path
          </p>
          <h2 className="mt-3 font-display max-w-2xl text-2xl text-navy sm:text-3xl">
            Looking for support for yourself or your family?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            This is not a sales conversation and it does not enter the launch
            pipeline. Village360 is not an emergency or crisis service. If you
            or someone else is in immediate danger, contact local emergency
            services.
          </p>
          <Link
            href="/join#families"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
          >
            Go to family support
          </Link>
        </div>
      </section>

      <section
        id="general"
        className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          General
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Another kind of question.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Media, speaking, or something that does not fit the paths above. Your
          email app will open with a draft to {CONTACT_EMAIL}.
        </p>
        <div className="mt-10 max-w-xl">
          <MailtoInquiryForm
            subject="Village360 contact — general"
            fields={generalFields}
            submitLabel="Open message in email"
            confirmation="Your email app should open with a draft. Sending it is the first step—not an automatic opt-in to the movement."
          />
        </div>
      </section>
    </div>
  );
}
