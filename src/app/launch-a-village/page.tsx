import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Launch a Village",
  description:
    "What a Village360 launch includes, who can lead one, and how local communities and Village360 share the work.",
};

const who = [
  "Churches and faith communities",
  "Nonprofits",
  "Schools and colleges",
  "Juvenile courts and public agencies",
  "Community coalitions",
  "Foundations and sponsors walking with a local anchor",
];

const includes = [
  {
    name: "Readiness and a launch roadmap",
    body: "A guided look at assets, gaps, partners, and a plan you can actually carry.",
  },
  {
    name: "Leadership and coach training",
    body: "Shared language, roles, and practices so local people are not inventing the work alone.",
  },
  {
    name: "Programs and participant materials",
    body: "Practical pathways for youth, caregivers, and leaders—connected to the village, not dropped in as one-offs.",
  },
  {
    name: "Guides, rhythms, and implementation support",
    body: "Onboarding, simple operating guidance, and ongoing help so the work can last past the first burst of energy.",
  },
];

const steps = [
  {
    name: "Discovery",
    detail: "A readiness conversation and an honest look at your community.",
  },
  {
    name: "Planning",
    detail: "Priorities, partners, programs, and a launch plan sized to capacity.",
  },
  {
    name: "Preparation",
    detail: "Train leaders, coaches, facilitators, and volunteers.",
  },
  {
    name: "Initial delivery",
    detail: "Begin coordinated programs and family-support pathways.",
  },
  {
    name: "Ongoing growth",
    detail: "Measure delivery, improve systems, and expand local capacity.",
  },
];

export default function LaunchAVillagePage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Launch the movement locally
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Turn shared concern into a village{" "}
          <span className="text-forest">that can act together.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          A local Village is where the movement becomes visible. A Village360
          launch gives your community the structure, training, programs, and
          support to become that expression—without losing what makes the place
          yours.
        </p>
        <div className="animate-rise-late mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/bring-village360-here"
            className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Begin a readiness conversation
          </Link>
          <Link
            href="/the-model"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
          >
            Explore the Model
          </Link>
        </div>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            What a launch includes
          </p>
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Structure so you are not reinventing care from scratch.
          </h2>
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {includes.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-8"
              >
                <h3 className="font-display text-xl text-navy">{item.name}</h3>
                <p className="text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Who can launch
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          One anchor organization—or a coalition of partners.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-navy-soft">
          {who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
          Faith partnership is welcome. Public access is not gated by
          denomination. You do not need to be large. You do need local
          leadership that can follow through.
        </p>
      </section>

      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Process
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            From movement interest to local implementation.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.name}>
                <span className="text-xs font-semibold tracking-[0.16em] text-mist/60 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Shared work
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Village360 brings the model. You keep the village.
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl text-navy">Village360 brings</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              The model, training, tools and curricula, simple learning
              practices, guidance, and implementation support. Shared principles
              protect fidelity without erasing place.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-forest">
              The local village brings
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Trusted local leadership, relationships with families, community
              knowledge, an implementation team, meeting space, and consistent
              follow-through. Families deserve reliability—not enthusiastic
              disappearing acts.
            </p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted">
          Become part of something larger without losing what makes your
          community local.
        </p>
      </section>

      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Ready to talk about fit?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            The next step is a readiness conversation—not a guaranteed launch.
            If you are still learning, start with the Model or the Mini Village
            Kit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/bring-village360-here"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Bring Village360 Here
            </Link>
            <Link
              href="/the-model"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
            >
              Explore the Model
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
