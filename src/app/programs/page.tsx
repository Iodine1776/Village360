import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Village360 programs are how people practice the movement—coordinated offerings for youth, caregivers, and community leaders, not a buffet of disconnected products.",
};

const programs = [
  {
    name: "Insight for Life",
    audience: "Youth",
    body: "Emotional intelligence, mindfulness, self-mastery, decision-making, healthy relationships, and confidence for navigating adulthood.",
  },
  {
    name: "Clarity Catalyst",
    audience: "Adults, caregivers, and leaders",
    body: "Mindfulness, self-awareness, purpose, and communication—so the people holding the village can manage stress and stay intentional.",
  },
  {
    name: "Grown-Up Basics",
    audience: "Teens and emerging adults",
    body: "Practical life skills for independence: housing, money, healthcare, transportation, employment, communication, and everyday systems.",
  },
  {
    name: "Workforce Development",
    audience: "Youth and emerging professionals",
    body: "Workplace readiness through communication, reliability, adaptability, teamwork, boundaries, responsibility, and initiative.",
  },
  {
    name: "Caregiver Support",
    audience: "Kinship, foster, adoptive, and reunifying families",
    body: "Practical tools, community connection, and trauma-informed support so caregivers can navigate resources without carrying everything alone.",
  },
];

const starts = [
  {
    name: "Single program",
    body: "One focused offering when a community has a clear first need.",
  },
  {
    name: "Paired pathway",
    body: "Youth and caregiver learning offered in parallel, so the family is not split across disconnected tracks.",
  },
  {
    name: "Village integration",
    body: "Multiple programs connected through a broader local launch—people, practice, and infrastructure together.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Programs of the movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Different needs.{" "}
          <span className="text-forest">One connected movement.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Programs are not the movement. They are how people begin practicing
          it—skills, relationships, and rhythms that bring coordinated support
          to life.
        </p>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="max-w-3xl text-base leading-relaxed text-ink-muted">
            Village360 programs can be offered on their own. They create deeper
            change when they are coordinated as part of a local village—not
            chosen like a buffet of unrelated products.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Coordinated offerings
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Five ways people practice the work.
        </h2>
        <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {programs.map((item) => (
            <li
              key={item.name}
              className="grid gap-2 py-7 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] sm:gap-8"
            >
              <div>
                <h3 className="font-display text-xl text-navy">{item.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-forest/80 uppercase">
                  {item.audience}
                </p>
              </div>
              <p className="text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Delivery details, duration, and investment are scoped with each
          community. We will not invent session counts or prices on this page.
        </p>
      </section>

      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            How programs land locally
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Start with one offering—or weave several into a village.
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {starts.map((item) => (
              <li key={item.name}>
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            Which offering belongs in your village?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            If you are exploring a local launch, begin with the model and a
            readiness conversation. If you are looking for family support,
            that path lives with Join—not here.
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
