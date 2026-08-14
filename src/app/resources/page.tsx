import type { Metadata } from "next";
import Link from "next/link";
import { KIT_PDF_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download the Mini Village Kit—a free starter guide to strengthening support around families—and find other Village360 tools as they become available.",
};

const kitIncludes = [
  "What a village is—and is not",
  "Five signs a community needs a stronger village",
  "What healthy support includes",
  "A simple first 30 days",
  "Community mapping questions",
];

const later = [
  {
    status: "Available now",
    body: "Mini Village Kit (PDF)",
  },
  {
    status: "In development",
    body: "Conversation cards, language guide, and additional public worksheets",
  },
  {
    status: "Partner resource",
    body: "Curricula, SOPs, and implementation materials for communities in an active launch",
  },
];

export default function ResourcesPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Tools for the movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          You can begin building the village{" "}
          <span className="text-forest">before you have a formal launch.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Start conversations, recognize local strengths, and support families
          thoughtfully. The movement begins when the conversation changes—and
          continues when people act.
        </p>
      </section>

      <section
        id="kit"
        className="relative scroll-mt-28 border-y border-navy/8 bg-navy text-ivory"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Your first act of village-building
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Mini Village Kit
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/75">
            A free starter guide. Most communities care. The problem is often
            that care is disconnected, inconsistent, reactive, and exhausting.
            This kit helps take good intentions into a clearer first step.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/75">
            A village is not just a group of caring people. It is a connected
            support system: belonging, consistency, shared responsibility,
            practical support, emotional safety, and sustainable rhythms of
            care.
          </p>
          <ul className="mt-8 max-w-xl space-y-2 text-sm text-ivory/70">
            {kitIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={KIT_PDF_HREF}
            download
            className="mt-10 inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Download the Mini Village Kit (PDF)
          </a>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Library
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          What is ready—and what is not.
        </h2>
        <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {later.map((item) => (
            <li
              key={item.status}
              className="grid gap-2 py-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)] sm:items-baseline sm:gap-8"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">
                {item.status}
              </p>
              <p className="text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
          We will not list guides, reports, or partner materials as if they
          already exist. When they are real, they will live here.
        </p>
      </section>

      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            After the kit.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            If you are a local leader, learn how the model works—or begin a
            readiness conversation. If you are looking for family connection,
            that path is separate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/the-model"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Explore the Model
            </Link>
            <Link
              href="/bring-village360-here"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
            >
              Bring Village360 Here
            </Link>
            <Link
              href="/join#families"
              className="inline-flex items-center justify-center px-2 py-3 text-base text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline sm:ml-1"
            >
              Family support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
