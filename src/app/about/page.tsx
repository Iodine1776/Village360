import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Village360 was seeded by founder and model steward Kourtney Bolton—and designed to grow through local leaders, shared principles, and a teachable model.",
};

const themes = [
  {
    title: "Nursing & youth-centered systems",
    body: "Years of nursing—including youth-centered care and program development—shape a practical, calm approach to supporting people under pressure.",
  },
  {
    title: "Foster & adoptive family life",
    body: "Lived experience as a foster and adoptive mother grounds the work in dignity, continuity, and the real cost of carrying heavy stories alone.",
  },
  {
    title: "Caregiver & community education",
    body: "Coaching, speaking, retreats, and writing help caregivers and communities rebuild safer rhythms—without pretending transformation is solitary.",
  },
];

export default function AboutPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          About Village360
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Built to grow beyond{" "}
          <span className="text-forest">one founder.</span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Village360 began with a conviction: vulnerable families need
          collaborative, relationship-centered support before crisis becomes
          separation. The movement is stewarded carefully—and designed so local
          leaders can carry it forward with integrity.
        </p>
      </section>

      {/* Draft honesty */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-navy">Draft note:</span> This page
            is tentative. Founder details below are grounded in public sources
            and kept conservative where publication details are still forthcoming.
            We welcome corrections from Kourtney before treating this as final
            voice.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Origin
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          A movement with a model—not a personality cult.
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Village360 equips communities with the structure, tools, and
            relationships needed to support vulnerable families before crisis
            occurs. Publicly, it is a movement. In practice, it is also a
            teachable operating system—so churches, nonprofits, schools, courts,
            and coalitions do not have to reinvent care from scratch.
          </p>
          <p>
            The point is not to center a single story forever. The point is to
            give local villages a clear way to listen, equip, connect, and
            learn—together.
          </p>
        </div>
      </section>

      {/* Founder steward */}
      <section className="relative border-y border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            Founder & model steward
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Kourtney Bolton
          </h2>
          <p className="mt-2 text-base text-ivory/70">
            Also known publicly as Kourtney Lynn
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ivory/75">
            <p>
              Kourtney Bolton is the founder and model steward of Village360. She
              is a certified health and wellness coach, speaker, writer, and
              nonprofit consultant whose work sits at the intersection of nursing,
              foster and adoptive family life, and community systems that serve
              at-risk youth and their caregivers. She and her family are rooted in
              Tennessee.
            </p>
            <p>
              As a nurse, cycle-breaker, and foster/adoptive mom of three
              daughters, she has worked to turn chaos into steadier
              peacetime—both in systems serving youth and in her own home. She now
              helps fellow caregivers build trauma-informed tools, nervous-system
              care, and safer rhythms of family life.
            </p>
            <p>
              Village360 grows from that same conviction at community scale:
              belonging and practical support should happen through collaboration
              before families are alone in crisis.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {themes.map((item) => (
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

      {/* Personal brand boundary */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Personal coaching
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Village360 and Kourtney Lynn remain distinct.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Kourtney&apos;s personal coaching, retreats, and restorative storytelling
          live under her Kourtney Lynn brand. That work serves caregivers,
          cycle-breakers, and people rebuilding after dysfunction. Village360 is
          the community movement and model—not a rebrand of her coaching practice.
        </p>
        <a
          href="https://kourtneylynn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
        >
          Visit kourtneylynn.com →
        </a>
      </section>

      {/* Writing */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Writing
          </p>
          <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
            Story as stewardship—not spectacle.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              Kourtney is a published author. Public work includes community
              writing rooted in foster/adoptive family life, and a contributing
              chapter in{" "}
              <em>
                Heal to Lead Wellness: Stories to Rebuild Your Confidence and
                Resilience, Vol. 2
              </em>{" "}
              (Raven and Grace Press), published under Kourtney Lynn.
            </p>
            <p>
              Additional writing with Raven and Grace Press is forthcoming. We
              will share title, timing, and details here only when they are
              public—especially work aimed at practical adult skills for young
              people leaving care. Until then, this page stays intentionally quiet.
            </p>
          </div>
        </div>
      </section>

      {/* Stewardship beyond founder */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Stewardship
        </p>
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Founded by a person. Sustained by a village.
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Early movements need a steward. Healthy movements outgrow dependence
            on one voice. Village360 is structured around shared principles, a
            teachable model, training, and local ownership—so communities can
            adapt with integrity without waiting for a single founder to be in
            every room.
          </p>
          <p>
            Governance, partnership pathways, and impact reporting will deepen as
            the movement matures. We will not invent metrics, partner logos, or
            outcomes we cannot label honestly.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="relative border-t border-navy/8 bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Ready to build your part of the village?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70">
            You do not need to build the whole movement. Begin with belief, a
            local role, or a conversation about bringing the model home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/the-movement"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Explore the Movement
            </Link>
            <Link
              href="/bring-village360-here"
              className="inline-flex items-center justify-center rounded-md border border-ivory/25 px-5 py-3 text-base font-medium text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5"
            >
              Bring Village360 Here
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-2 py-3 text-base text-ivory/65 underline-offset-4 transition-colors hover:text-ivory hover:underline sm:ml-1"
            >
              Find your place
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
