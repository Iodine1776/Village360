import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Movement",
  description:
    "Find your place in Village360—as a community leader, partner, volunteer, or family seeking connection.",
};

const pathways = [
  {
    id: "leaders",
    audience: "Community leaders",
    title: "Build with us",
    body: "Pastors, nonprofit directors, school and court partners, and coalition builders who want coordinated support instead of another disconnected program.",
    next: "Explore the Model, learn what a launch includes, then begin a readiness conversation. Submission starts discernment—it does not guarantee a launch.",
    primary: { href: "/bring-village360-here", label: "Bring Village360 Here" },
    secondary: { href: "/launch-a-village", label: "What a launch includes" },
  },
  {
    id: "partners",
    audience: "Funders & partners",
    title: "Strengthen the movement",
    body: "Foundations, sponsors, institutions, and aligned organizations who want a credible prevention story—replicable structure, honest learning, and clear partnership roles.",
    next: "We will not invent outcome numbers. When you partner, you help communities launch with integrity and measure what matters.",
    primary: { href: "mailto:hello@joinvillage360.com?subject=Partnership%20inquiry", label: "Partner With Village360" },
    secondary: { href: "/impact", label: "View impact framework" },
  },
  {
    id: "volunteer",
    audience: "Volunteers & coaches",
    title: "Show up locally",
    body: "Mentors, coaches, and helpers who want clear roles, honest screening, and sustainable rhythms—not burnout or vague calls to “just care.”",
    next: "Participation paths will include role clarity and screening. Until forms are live, tell us how you hope to serve.",
    primary: { href: "mailto:hello@joinvillage360.com?subject=Volunteer%20%2F%20coach%20interest", label: "Find Your Place" },
    secondary: { href: "/resources", label: "Start with resources" },
  },
  {
    id: "families",
    audience: "Families & caregivers",
    title: "Find support and connection",
    body: "Caregivers, kinship families, foster and adoptive parents, and anyone who feels isolated—or who simply wants to stay connected to a healthier village.",
    next: "This path is for dignity-first support and belonging. It is not a sales funnel for launching Village360.",
    primary: { href: "mailto:hello@joinvillage360.com?subject=Family%20support%20%2F%20connection", label: "Request family support" },
    secondary: { href: "/resources", label: "Practical tools" },
  },
];

export default function JoinPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          Join the Movement
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl">
          Every movement grows when people find their place in it.
        </h1>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Contribute leadership, time, skills, resources, relationships, lived
          wisdom, or a willingness to learn. The movement does not need everyone
          to do everything.
        </p>
        <nav
          className="animate-rise-late mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted"
          aria-label="Join pathways"
        >
          {pathways.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="underline-offset-4 transition-colors hover:text-forest hover:underline"
            >
              {item.audience}
            </a>
          ))}
        </nav>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {pathways.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-28 py-10 sm:py-12"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-forest uppercase">
                {item.audience}
              </p>
              <h2 className="mt-2 font-display text-2xl text-navy sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted/90">
                {item.next}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={item.primary.href}
                  className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-deep"
                >
                  {item.primary.label}
                </Link>
                <Link
                  href={item.secondary.href}
                  className="inline-flex items-center justify-center px-2 py-3 text-sm text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline"
                >
                  {item.secondary.label} →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-2xl border-t border-navy/10 pt-12">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">
            A shared posture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            When you join the Village360 movement, you choose to see families
            through dignity rather than deficit; support prevention rather than
            wait for crisis; share responsibility without trying to control; show
            up consistently and honestly; listen to local and lived wisdom; and
            learn from what works and what does not.
          </p>
          <Link
            href="/the-movement"
            className="mt-6 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
          >
            Read more about the movement →
          </Link>
        </div>
      </section>
    </div>
  );
}
