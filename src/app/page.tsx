import Image from "next/image";
import Link from "next/link";
import { BrandDots } from "@/components/BrandDots";
import { ModelTeaser } from "@/components/ModelTeaser";
import { KIT_PDF_HREF } from "@/lib/site";
import { NEED_SOURCES, NEED_STATS } from "@/lib/need-stats";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative isolate min-h-[32rem] overflow-hidden sm:min-h-[38rem] lg:min-h-[44rem]">
        <Image
          src="/hero.png"
          alt="A family and neighbors gathered outdoors in warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/82 via-navy/55 to-navy/10 sm:via-navy/48 sm:to-transparent"
          aria-hidden
        />
        <BrandDots className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 sm:left-6 lg:flex" />

        <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-center px-5 py-20 sm:min-h-[38rem] sm:px-8 lg:min-h-[44rem]">
          <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-mist uppercase">
            The Village360 Movement
          </p>
          <h1 className="animate-rise font-display max-w-xl text-4xl leading-[1.12] font-medium tracking-tight text-ivory sm:text-5xl lg:text-[3.35rem]">
            Every family <span className="italic">needs</span> a village.
          </h1>
          <p className="animate-rise-delay mt-6 max-w-md text-lg leading-relaxed text-ivory/88 sm:text-xl">
            Village360 equips communities with structure, tools, and
            relationships to support vulnerable families before crisis—so every
            child has what they need to thrive.
          </p>
          <div className="animate-rise-late mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Join the Movement
            </Link>
            <Link
              href="/the-model"
              className="inline-flex items-center justify-center rounded-md border border-ivory/45 bg-ivory/10 px-5 py-3 text-base font-medium text-ivory backdrop-blur-sm transition-colors hover:border-ivory hover:bg-ivory/20"
            >
              Explore the Model
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Coordination */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute top-16 right-10 hidden lg:block" aria-hidden>
          <BrandDots orientation="horizontal" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                Coordination
              </p>
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                Most communities don&apos;t lack caring people. They lack
                coordination.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                Schools, congregations, nonprofits, courts, agencies, health
                providers, and businesses already show up. Village360 helps them
                work as one village—with the family at the center, not lost
                between systems.
              </p>
              <Link
                href="/the-model"
                className="mt-6 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
              >
                Explore the Model →
              </Link>
            </div>
            <div className="lg:col-span-7">
              <Image
                src="/home-graphic-1.png"
                alt="Community partners—schools, faith communities, nonprofits, courts, local agencies, health providers, and businesses—coordinating around the family at the center."
                width={2048}
                height={1318}
                className="mx-auto h-auto w-full max-w-lg object-contain lg:max-w-xl"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Village360 Works */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <BrandDots className="absolute top-16 left-4 hidden opacity-60 lg:flex" />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <ModelTeaser />
        </div>
      </section>

      {/* 4. Impact / needs */}
      <section className="relative bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Why a village matters
          </p>
          <blockquote className="font-display max-w-3xl text-3xl leading-snug text-navy sm:text-4xl">
            “Good intentions matter. Measured implementation makes them
            sustainable.”
          </blockquote>
          <Link
            href="/impact"
            className="mt-5 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
          >
            How we intend to measure impact →
          </Link>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted">
            These are need figures—not Village360 results. We will not invent
            outcome dashboards. The scale of the work is already large enough.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {NEED_STATS.map((stat) => {
              const sources = stat.sourceIds
                .map((id) => NEED_SOURCES.find((source) => source.id === id))
                .filter((source) => source != null);

              return (
                <li
                  key={stat.id}
                  className="relative overflow-hidden rounded-xl border border-navy/8 bg-ivory-deep/50 p-6"
                >
                  <span
                    className="absolute top-0 left-0 h-full w-1.5"
                    style={{ backgroundColor: stat.color }}
                    aria-hidden
                  />
                  <p className="text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
                    {stat.kicker}
                  </p>
                  <p className="font-display mt-3 text-4xl tracking-tight text-navy sm:text-5xl">
                    {stat.display}
                    {"secondary" in stat && stat.secondary ? (
                      <span className="mt-1 block text-2xl text-navy-soft sm:text-3xl">
                        {stat.secondary.display}
                        <span className="ml-2 text-base font-sans font-normal text-ink-muted">
                          {stat.secondary.detail}
                        </span>
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {stat.detail}
                  </p>
                  <p className="mt-3 text-xs text-ink-muted/80">
                    Source{sources.length > 1 ? "s" : ""}:{" "}
                    {sources.map((source, index) => (
                      <span key={source.id}>
                        {index > 0 ? "; " : null}
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline-offset-2 hover:text-forest hover:underline"
                        >
                          {source.shortLabel}
                        </a>
                      </span>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Official counts understate the need. Informal kinship, unreported
            harm, and unstable homes that never open a child-welfare case are
            largely missing from these numbers.
          </p>

          <ol className="mt-6 max-w-3xl space-y-2 text-xs leading-relaxed text-ink-muted/85">
            {NEED_SOURCES.map((source, index) => (
              <li key={source.id}>
                <span className="font-medium text-navy-soft">{index + 1}. </span>
                <a
                  href={source.href}
                  className="underline-offset-2 hover:text-forest hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Multiplying impact */}
      <section className="relative overflow-hidden bg-ivory">
        <BrandDots
          orientation="horizontal"
          className="absolute top-8 right-8 hidden opacity-50 lg:flex"
        />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-3 lg:pt-1">
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                Multiplying Impact Across Communities
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                When one community launches a Village, it helps open doors for
                another.
              </p>
              <Link
                href="/the-model"
                className="mt-6 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
              >
                See How It Scales →
              </Link>
            </div>

            <figure className="mx-auto w-full max-w-2xl lg:col-span-6 lg:max-w-none">
              <div className="relative aspect-[19/5] w-full overflow-hidden">
                <Image
                  src="/snowball.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                />
              </div>
              <figcaption className="sr-only">
                A local village launch shares learning and funding that help
                another community open.
              </figcaption>
              <ol className="mt-1 grid grid-cols-3 gap-x-2 sm:gap-x-4">
                <li className="text-center">
                  <h3 className="font-display text-sm text-forest sm:text-base">
                    Your Village Launch
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    Local leaders come together. Systems align. Families get
                    support.
                  </p>
                </li>
                <li className="text-center">
                  <h3 className="font-display text-sm text-navy sm:text-base">
                    Shared Learning &amp; Funding
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    Open doors and provide launch support.
                  </p>
                </li>
                <li className="text-center">
                  <h3 className="font-display text-sm text-navy sm:text-base">
                    Another Community
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    A new Village launches with resources and relationships that
                    accelerate impact.
                  </p>
                </li>
              </ol>
            </figure>

            <p className="font-display text-xl leading-snug text-navy sm:text-2xl lg:col-span-3 lg:self-center lg:text-right">
              Strengthen the village.
              <br />
              Stabilize the family.
              <br />
              Change the trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="relative overflow-hidden bg-ivory">
        <BrandDots className="absolute top-1/2 right-6 hidden -translate-y-1/2 lg:flex" />
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-navy sm:text-4xl">
              What could a stronger village make possible in your community?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Start with a conversation, a readiness check, or a free starter
              kit. You do not need a finished village—only a responsible place
              to begin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bring-village360-here"
                className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
              >
                Schedule a Conversation
              </Link>
              <a
                href={KIT_PDF_HREF}
                download
                className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
              >
                Download the Mini Village Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
