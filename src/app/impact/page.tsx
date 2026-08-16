import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Village360 is early and pilot-stage. This page holds an honest outcomes framework—not fabricated statistics, charts, or partner logos.",
};

const growth = [
  "People finding a place in the movement",
  "Communities exploring a local village",
  "Champions and coaches identified",
  "Partners contributing expertise or resources",
  "Starter tools shared, including the Mini Village Kit",
];

const modelImpact = [
  "Delivery: whether intended support actually happened",
  "Completion and follow-through—not attendance theater",
  "Participant growth in skills, confidence, and connection",
  "Caregiver connection and referral quality",
  "Local collaboration and implementation quality",
];

const levels = [
  {
    name: "Participant",
    body: "Knowledge, confidence, self-awareness, practical skills.",
  },
  {
    name: "Family",
    body: "Connection, stability, caregiver confidence, access to support.",
  },
  {
    name: "Community",
    body: "Collaboration, partner engagement, local capacity.",
  },
  {
    name: "System",
    body: "Learning, sustainability, responsible replication, prevention.",
  },
];

export default function ImpactPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Movement impact & learning
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Good intentions matter.{" "}
          <span className="text-forest">Measured implementation makes them sustainable.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Village360 measures how shared principles become local practices—and
          how those practices strengthen participants, families, communities,
          and systems. We do not claim to have ended a crisis, and we do not
          invent proof.
        </p>
      </section>

      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">
            Pilot · In development
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy">
            Village360 is early. We are building and piloting how we will
            learn—not publishing decorative dashboards. Until results are
            verified, this page is a framework. What one community discovers
            should be able to strengthen the next.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Two kinds of evidence
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Movement growth is not the same as family outcomes.
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl text-navy">Movement growth</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Reach and participation. Useful—and easy to confuse with impact.
            </p>
            <ul className="mt-5 space-y-3 border-t border-navy/10 pt-5">
              {growth.map((item) => (
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
            <h3 className="font-display text-xl text-forest">Model impact</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Whether the work changed anything that matters for people.
            </p>
            <ul className="mt-5 space-y-3 border-t border-forest/20 pt-5">
              {modelImpact.map((item) => (
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
            Outputs and outcomes
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Counting activity is not the same as contributing to change.
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">Outputs</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Sessions held, kits downloaded, leaders trained, referrals
                made. Necessary to know the work happened. Not proof that
                families are stronger.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Outcomes</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Changes in connection, skill, stability, and local capacity.
                Harder to claim. We will label results as pilot, illustrative,
                or verified—and we will not imply sole causation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Outcomes framework
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Impact happens at more than one level.
        </h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((item) => (
            <li key={item.name}>
              <h3 className="font-display text-xl text-navy">{item.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
          No single number can tell the whole story. Reports, evaluation
          partners, and verified figures will appear here when they exist—not
          as placeholder stars, charts, or logos.
        </p>
      </section>

      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Help us learn with integrity.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Funders and evaluation partners who want a credible prevention
            story—not inflated claims—are welcome. Families seeking support
            should not have to walk through an impact page to be heard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/join#partners"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Partner on evaluation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
            >
              About stewardship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
