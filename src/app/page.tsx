import Link from "next/link";

const pathways = [
  {
    audience: "Community leaders",
    title: "Build the Movement",
    body: "Care feels disconnected and reactive. Bring Village360 structure, training, and tools to your church, school, court, nonprofit, or coalition.",
    href: "/bring-village360-here",
    label: "Bring Village360 Here",
  },
  {
    audience: "Funders & partners",
    title: "Strengthen the Movement",
    body: "You need a credible, scalable prevention story—not inflated claims. Partner, sponsor, or contribute expertise so communities launch with integrity.",
    href: "/join#partners",
    label: "Explore Partnerships",
  },
  {
    audience: "Families & volunteers",
    title: "Join the Movement",
    body: "Feel isolated, or ready to help with clear roles? Find support, volunteer locally, or stay connected—without a sales funnel.",
    href: "/join",
    label: "Find Your Place",
  },
];

const stages = [
  {
    name: "Listen & Assess",
    detail: "Understand families, partners, gaps, and local capacity before designing solutions.",
  },
  {
    name: "Equip Leaders",
    detail: "Train coaches, volunteers, and partner organizations to work with shared clarity.",
  },
  {
    name: "Connect the Village",
    detail: "Create coordinated pathways of practical, emotional, and relational support.",
  },
  {
    name: "Measure & Multiply",
    detail: "Track what matters, learn together, and help the next community begin well.",
  },
];

export default function HomePage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      {/* Hero — one composition: brand, headline, support, CTAs */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <svg
          className="pointer-events-none absolute top-10 right-0 hidden h-64 w-72 text-forest/25 lg:block"
          viewBox="0 0 280 240"
          fill="none"
          aria-hidden
        >
          <circle cx="210" cy="48" r="4" fill="currentColor" className="text-ember/50" />
          <circle cx="120" cy="90" r="3.5" fill="currentColor" className="text-forest/40" />
          <circle cx="180" cy="150" r="3" fill="currentColor" className="text-navy/30" />
          <path
            className="connection-line"
            d="M210 48 C170 70, 140 70, 120 90 C150 115, 170 130, 180 150"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>

        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          The Village360 Movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Every family needs a village.{" "}
          <span className="text-forest">
            We&apos;re building a movement to help communities become one.
          </span>
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Village360 equips churches, nonprofits, schools, courts, and local leaders
          with the structure, training, and tools to surround families before crisis
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
            href="/bring-village360-here"
            className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-ivory/60 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40 hover:bg-ivory"
          >
            Bring Village360 Here
          </Link>
          <Link
            href="/the-model"
            className="inline-flex items-center justify-center px-2 py-3 text-base text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline sm:ml-1"
          >
            Explore the Model
          </Link>
        </div>
      </section>

      {/* Declaration */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display max-w-3xl text-2xl leading-snug text-navy sm:text-3xl">
            We believe the foster care crisis cannot be answered by the foster care
            system alone.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Families do not live inside systems. They live inside communities.
            Village360 helps those communities recognize their shared
            responsibility—and build the structure to carry it together.
          </p>
        </div>
      </section>

      {/* Pathways — one job: help visitors choose a door */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          Find your place
        </p>
        <h2 className="font-display max-w-xl text-3xl text-navy sm:text-4xl">
          Three ways to begin.
        </h2>
        <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {pathways.map((item) => (
            <li
              key={item.title}
              className="grid gap-3 py-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-forest/80 uppercase">
                  {item.audience}
                </p>
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-ink-muted">{item.body}</p>
              <Link
                href={item.href}
                className="text-sm font-medium text-forest transition-colors hover:text-forest-deep sm:justify-self-end"
              >
                {item.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Model bridge — quiet process, no dashboard clutter */}
      <section className="relative bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist/80 uppercase">
            The model behind the movement
          </p>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl">
            A movement needs more than momentum. It needs a way to work.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70">
            The Village360 Model turns shared concern into coordinated local
            action—aligning people, programs, relationships, and infrastructure
            around families.
          </p>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <li key={stage.name} className="relative">
                <span className="text-xs font-semibold tracking-[0.16em] text-mist/60 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl">{stage.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/the-model"
            className="mt-10 inline-flex text-sm font-medium text-mist transition-colors hover:text-ivory"
          >
            Learn how the model works →
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            What could a stronger village make possible in your community?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Start with a conversation, a readiness check, or a free starter kit.
            You do not need a finished village—only a responsible place to begin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/bring-village360-here"
              className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Schedule a Conversation
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 px-5 py-3 text-base font-medium text-navy transition-colors hover:border-forest/40"
            >
              Download the Mini Village Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
