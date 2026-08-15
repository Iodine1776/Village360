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
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
            Coordination
          </p>
          <h2 className="font-display max-w-3xl text-3xl text-navy sm:text-4xl">
            Most communities don&apos;t lack caring people. They lack
            coordination.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Schools, congregations, nonprofits, courts, agencies, health
            providers, and businesses already show up. Village360 helps them
            work as one village—with the family at the center, not lost between
            systems.
          </p>
          <div className="mt-12">
            <Image
              src="/home-graphic-1.png"
              alt="Community partners—schools, faith communities, nonprofits, courts, local agencies, health providers, and businesses—coordinating around the family at the center."
              width={2048}
              height={1318}
              className="mx-auto h-auto w-full max-w-5xl object-contain"
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 3. Short model teaser */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
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

      {/* 5. Snowball */}
      <section className="relative overflow-hidden bg-navy text-ivory">
        <BrandDots
          orientation="horizontal"
          className="absolute top-8 right-8 hidden opacity-80 lg:flex"
        />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            The snowball
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            Multiplying impact across communities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            One village is a beginning, not a ceiling. When a community learns
            how to coordinate—what helped, what did not, what to try next—that
            learning can travel. The movement grows like a snowball: each honest
            launch gives the next place more to work with than the last.
          </p>

          <ol className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-center sm:gap-4">
            {[
              { label: "Your village", size: "h-24 w-24", text: "text-sm" },
              { label: "Shared learning", size: "h-32 w-32", text: "text-base" },
              {
                label: "The next community",
                size: "h-40 w-40",
                text: "text-base",
              },
            ].map((item, index) => (
              <li key={item.label} className="flex items-end gap-4">
                {index > 0 ? (
                  <span
                    className="mb-16 hidden w-8 border-t border-dotted border-ivory/35 sm:block"
                    aria-hidden
                  />
                ) : null}
                <div className="flex flex-col items-center gap-3">
                  <span
                    className={`inline-flex ${item.size} items-center justify-center rounded-full border border-ivory/25 bg-ivory/8 text-center ${item.text} leading-tight text-ivory/90`}
                  >
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ol>
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
