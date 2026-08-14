import type { Metadata } from "next";
import Link from "next/link";
import { KIT_PDF_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Model",
  description:
    "The Village360 Model turns shared concern into coordinated local action—aligning people, programs, and infrastructure around families.",
};

const stages = [
  {
    name: "Listen & Assess",
    detail:
      "Understand families, partners, gaps, and local capacity before designing solutions. Map what already exists instead of starting from zero.",
  },
  {
    name: "Equip Leaders",
    detail:
      "Train coaches, volunteers, and partner organizations to work with shared language, clear roles, and sustainable rhythms.",
  },
  {
    name: "Connect the Village",
    detail:
      "Create coordinated pathways of practical, emotional, and relational support so families are not handed from one disconnected helper to another.",
  },
  {
    name: "Measure & Multiply",
    detail:
      "Track what matters, learn together, and help the next community begin well. Honesty is part of the model—not an afterthought.",
  },
];

const layers = [
  {
    name: "People",
    detail:
      "Local leaders, coaches, volunteers, and partners who already care—given structure so they can stay.",
  },
  {
    name: "Programs",
    detail:
      "Practical pathways for youth, caregivers, and community leaders. Tools for practicing the movement, not a menu of unrelated products.",
  },
  {
    name: "Infrastructure",
    detail:
      "Pathways, onboarding, shared language, and simple ways to learn. The quiet systems that keep compassion from burning out.",
  },
];

const shifts = [
  { from: "Isolated efforts", to: "Shared strategy" },
  { from: "Crisis-only response", to: "Earlier, coordinated support" },
  { from: "Unclear roles", to: "Defined responsibilities" },
  { from: "Short bursts of help", to: "Relational continuity" },
  { from: "Activity for its own sake", to: "Learning what actually helps" },
];

export default function TheModelPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          The model behind the movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          A movement needs more than momentum.{" "}
          <span className="text-forest">It needs a way to work.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          The Village360 Model turns shared concern into coordinated local
          action—aligning people, programs, relationships, and infrastructure
          around families.
        </p>
        <div className="animate-rise-late mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/launch-a-village"
            className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            What a launch includes
          </Link>
          <Link
            href="/bring-village360-here"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
          >
            Bring Village360 Here
          </Link>
        </div>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Movement and model
          </p>
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Belonging opens the door. Structure makes the work possible.
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="font-display text-xl text-navy">The movement</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Village360 is a growing movement of communities choosing
                coordinated, relationship-centered support before families reach
                crisis. It is a shared conviction: the foster care crisis cannot
                be answered by the foster care system alone.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest">The model</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                The Village360 Model is how communities put that conviction into
                practice. Local villages keep ownership. Village360 provides
                training, tools, and shared principles so compassion becomes
                coordinated, sustainable action—without reinventing care from
                scratch.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-2xl font-display text-xl leading-snug text-navy sm:text-2xl">
            The movement can spread widely because the model can be implemented
            locally.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          How communities put the movement into practice
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Four stages. One coordinated village.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {stages.map((stage, index) => (
            <li key={stage.name}>
              <span className="text-xs font-semibold tracking-[0.16em] text-forest/70 uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl text-navy">{stage.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">
                {stage.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Three layers
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            People, programs, and the quiet infrastructure that holds them.
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {layers.map((layer) => (
              <li key={layer.name}>
                <h3 className="font-display text-xl">{layer.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {layer.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          What changes
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          From scattered care to a village that can act together.
        </h2>
        <ul className="mt-10 max-w-2xl divide-y divide-navy/10 border-y border-navy/10">
          {shifts.map((item) => (
            <li
              key={item.from}
              className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-8"
            >
              <span className="text-base text-ink-muted">{item.from}</span>
              <span className="text-base text-navy">{item.to}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
          We will not decorate this page with sample dashboards or invented
          outcome numbers. Measurement belongs here as a practice—see{" "}
          <Link href="/impact" className="text-forest hover:text-forest-deep">
            Impact
          </Link>{" "}
          for how we intend to learn honestly.
        </p>
      </section>

      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Ready to see what a local launch involves?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Learn what Village360 brings and what your community keeps—then
            begin a readiness conversation. You do not need a finished village.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/launch-a-village"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Launch a Village
            </Link>
            <Link
              href="/bring-village360-here"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
            >
              Begin a readiness conversation
            </Link>
            <a
              href={KIT_PDF_HREF}
              className="inline-flex items-center justify-center px-2 py-3 text-base text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline sm:ml-1"
            >
              Download the Mini Village Kit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
