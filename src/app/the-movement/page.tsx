import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Movement",
  description:
    "Village360 is a movement to rebuild shared responsibility around families—before crisis becomes separation.",
};

const awayFrom = [
  "Waiting for crisis before help arrives",
  "Fragmented, one-off acts of charity",
  "Professional-only responsibility",
  "Short-term rescue without continuity",
  "Family-deficit narratives",
];

const toward = [
  "Prevention and early support",
  "Coordinated pathways of care",
  "Shared community responsibility",
  "Relational continuity over time",
  "Family agency and dignity",
  "Sustainable local capacity",
];

const principles = [
  {
    title: "Dignity over deficit",
    body: "Families are not problems to solve. They are neighbors to know, honor, and walk with.",
  },
  {
    title: "Prevention over reaction",
    body: "The strongest village shows up before crisis forces separation.",
  },
  {
    title: "Shared responsibility",
    body: "No single agency, church, or volunteer can carry this alone—and none should have to.",
  },
  {
    title: "Local ownership with integrity",
    body: "Communities keep leadership. Shared principles protect fidelity without erasing place.",
  },
  {
    title: "Consistency and honesty",
    body: "Showing up matters more than intensity. Boundaries and screening protect everyone.",
  },
  {
    title: "Learn together",
    body: "We measure what we can, label what we cannot yet prove, and keep improving the work.",
  },
];

const waysToAct = [
  {
    title: "Learn",
    body: "Understand the crisis as a village problem—and what coordinated support can look like.",
    href: "/resources",
    label: "Explore resources",
  },
  {
    title: "Share",
    body: "Change the conversation where you live, work, and worship.",
    href: "/join#families",
    label: "Share the movement",
  },
  {
    title: "Participate",
    body: "Coach, volunteer, mentor, or support with clear roles and sustainable rhythms.",
    href: "/join#volunteer",
    label: "Find your place",
  },
  {
    title: "Partner",
    body: "Fund, sponsor, or contribute expertise so more communities can launch well.",
    href: "/join#partners",
    label: "Explore partnerships",
  },
  {
    title: "Launch",
    body: "Bring the Village360 Model to your church, school, court, nonprofit, or coalition.",
    href: "/launch-a-village",
    label: "Learn about launching",
  },
];

export default function TheMovementPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      {/* Hero — belief, not sales */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          The Movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          The foster care crisis is a{" "}
          <span className="text-forest">village crisis.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Families do not live inside systems. They live inside communities.
          Village360 is a movement to rebuild shared responsibility around
          them—so care is coordinated, relational, and present before crisis
          becomes separation.
        </p>
        <div className="animate-rise-late mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Join the Movement
          </Link>
          <Link
            href="/join#families"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
          >
            Find Your Place
          </Link>
          <Link
            href="/bring-village360-here"
            className="inline-flex items-center justify-center px-2 py-3 text-base text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline sm:ml-1"
          >
            Bring the Movement Home
          </Link>
        </div>
      </section>

      {/* Declaration */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display max-w-3xl text-2xl leading-snug text-navy sm:text-3xl">
            We believe the foster care crisis cannot be answered by the foster
            care system alone.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Systems matter. Professionals matter. But belonging, consistency,
            and practical support happen in neighborhoods, congregations,
            schools, and everyday relationships. The movement grows wherever
            people choose shared responsibility.
          </p>
        </div>
      </section>

      {/* Away / Toward */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          A cultural shift
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          What we are moving away from—and toward.
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl text-navy">Away from</h3>
            <ul className="mt-5 space-y-3 border-t border-navy/10 pt-5">
              {awayFrom.map((item) => (
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
            <h3 className="font-display text-xl text-forest">Toward</h3>
            <ul className="mt-5 space-y-3 border-t border-forest/20 pt-5">
              {toward.map((item) => (
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

      {/* Principles */}
      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Shared principles
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Local villages. Shared principles. Collective learning.
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pledge */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          A shared posture
        </p>
        <h2 className="font-display max-w-xl text-3xl text-navy sm:text-4xl">
          The movement pledge
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Not a legal agreement—a way of showing up. When you join the Village360
          movement, you choose to:
        </p>
        <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-navy-soft">
          <li>See families through dignity rather than deficit.</li>
          <li>Support prevention rather than wait for crisis.</li>
          <li>Share responsibility without trying to control.</li>
          <li>Show up consistently and honestly.</li>
          <li>Listen to local and lived wisdom.</li>
          <li>Learn from what works and what does not.</li>
        </ul>
      </section>

      {/* Five ways */}
      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Invitation
          </p>
          <h2 className="font-display max-w-xl text-3xl text-navy sm:text-4xl">
            Five ways to act
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            The movement does not need everyone to do everything. It needs people
            to begin where they are.
          </p>
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {waysToAct.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 py-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)_auto] sm:items-center sm:gap-8"
              >
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-forest transition-colors hover:text-forest-deep sm:justify-self-end"
                >
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Model bridge — light implementation pointer */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Belief into practice
          </p>
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            Conviction needs a way to work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            The Village360 Model is how communities put this movement into
            practice—with structure, training, programs, and tools so compassion
            becomes coordinated, sustainable action. Local villages keep
            ownership; shared principles protect integrity.
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
          </div>
          <p className="mt-10 font-display text-xl leading-snug text-navy sm:text-2xl">
            You do not need to build the whole movement. You only need to begin
            building your part of the village.
          </p>
        </div>
      </section>
    </div>
  );
}
