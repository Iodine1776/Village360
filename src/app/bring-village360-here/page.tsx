import type { Metadata } from "next";
import Link from "next/link";
import { MailtoInquiryForm } from "@/components/MailtoInquiryForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bring Village360 Here",
  description:
    "Begin a readiness conversation to bring the Village360 Model to your church, nonprofit, school, court, or coalition. An inquiry is not acceptance.",
};

const needed = [
  "A committed local champion",
  "Willingness to collaborate across organizations",
  "A felt need among families in your community",
  "Enough capacity to follow through, even if the team is small",
  "Openness to learning—not a finished plan",
];

const notNeeded = [
  "Agreement from every partner on day one",
  "A perfect funding picture",
  "A new building or large staff",
  "A finished village already in place",
];

const startingPoints = [
  {
    name: "Program launch",
    body: "One focused offering to meet a clear need—and learn as you go.",
  },
  {
    name: "Collaborative pathway",
    body: "Connect youth, caregiver, or workforce supports so families are not navigating silos alone.",
  },
  {
    name: "Full village launch",
    body: "Broader cross-sector infrastructure around families, with shared language and local ownership.",
  },
];

const inquiryFields = [
  { name: "name", label: "Full name", type: "text" as const, required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "phone", label: "Phone", type: "tel" as const },
  {
    name: "organization",
    label: "Organization",
    type: "text" as const,
    required: true,
  },
  { name: "role", label: "Your role", type: "text" as const },
  { name: "city", label: "City", type: "text" as const },
  { name: "region", label: "State or region", type: "text" as const },
  {
    name: "communityType",
    label: "What kind of community are you representing?",
    type: "select" as const,
    required: true,
    options: [
      { value: "church", label: "Church or faith community" },
      { value: "nonprofit", label: "Nonprofit" },
      { value: "school", label: "School or college" },
      { value: "court", label: "Court or public agency" },
      { value: "coalition", label: "Coalition" },
      { value: "foundation", label: "Foundation or sponsor" },
      { value: "other", label: "Other institutional partner" },
    ],
  },
  {
    name: "interest",
    label: "What are you exploring?",
    type: "select" as const,
    options: [
      { value: "exploring", label: "Still exploring / not sure" },
      { value: "program", label: "Program launch" },
      { value: "pathway", label: "Collaborative pathway" },
      { value: "village", label: "Full village launch" },
    ],
  },
  {
    name: "hope",
    label: "What are you hoping to build?",
    type: "textarea" as const,
    required: true,
    hint: "Goals, opportunities, or challenges. Please do not include private case details, health information, or identifying information about a child.",
  },
  {
    name: "scholarship",
    label:
      "Cost may be a barrier for us. We want an honest conversation about scholarship or funding—not a price from this page.",
    type: "checkbox" as const,
  },
  {
    name: "updates",
    label: "I would like occasional updates about the Village360 movement.",
    type: "checkbox" as const,
  },
];

export default function BringHerePage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Bring the movement home
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          You do not need a finished village.{" "}
          <span className="text-forest">You need a responsible place to begin.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Village360 helps churches, nonprofits, schools, courts, and coalitions
          translate shared conviction into trained leadership, collaborative
          programs, reliable relationships, and honest learning.
        </p>
        <div className="animate-rise-late mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Begin a readiness conversation
          </a>
          <Link
            href="/launch-a-village"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
          >
            What a launch includes
          </Link>
        </div>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="max-w-3xl text-base leading-relaxed text-navy">
            <span className="font-medium">An inquiry is not acceptance.</span>{" "}
            Sending this form starts discernment. It does not guarantee a
            launch, a timeline, or a scholarship. Fit, readiness, and capacity
            are part of a conversation—not a checkout.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Readiness
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Strong starting conditions—not a finished system.
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl text-navy">Helpful to have</h3>
            <ul className="mt-5 space-y-3 border-t border-navy/10 pt-5">
              {needed.map((item) => (
                <li
                  key={item}
                  className="border-b border-navy/8 pb-3 text-base leading-relaxed text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-forest">You do not need</h3>
            <ul className="mt-5 space-y-3 border-t border-forest/20 pt-5">
              {notNeeded.map((item) => (
                <li
                  key={item}
                  className="border-b border-forest/15 pb-3 text-base leading-relaxed text-navy-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Starting points
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Communities begin at different scales.
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {startingPoints.map((item) => (
              <li key={item.name}>
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ivory/70">
            We do not publish a fee schedule here. If cost is a barrier, say so
            on the form. Scholarship conversations happen during
            discernment—never as a promise attached to a submission.
          </p>
        </div>
      </section>

      <section
        id="inquiry"
        className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Organizational inquiry
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Tell us about your community.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          This path is for churches, nonprofits, schools, courts, coalitions,
          and aligned institutions. Your email app will open with a draft to{" "}
          {CONTACT_EMAIL}.
        </p>
        <div className="mt-10 max-w-xl">
          <MailtoInquiryForm
            subject="Bring Village360 Here — organizational inquiry"
            fields={inquiryFields}
            submitLabel="Open inquiry email"
            confirmation="Your email app should open with a draft. Sending it starts a conversation. It is not acceptance into a launch, and it is not a welcome into a marketing list unless you asked for updates."
            footnote="Family or caregiver support is a separate path—not this form."
          />
        </div>
      </section>

      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-2xl text-navy sm:text-3xl">
            Looking for support for yourself or your family?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            That is not a launch inquiry. Village360 is not an emergency or
            crisis service. Family support stays off this form on purpose.
          </p>
          <Link
            href="/join#families"
            className="mt-6 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
          >
            Go to family support →
          </Link>
          <p className="mt-12 max-w-2xl font-display text-xl leading-snug text-navy sm:text-2xl">
            You do not need to build the whole movement. You only need to begin
            building your part of the village.
          </p>
        </div>
      </section>
    </div>
  );
}
