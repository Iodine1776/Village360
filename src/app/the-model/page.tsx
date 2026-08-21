import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandDots } from "@/components/BrandDots";
import { KIT_PDF_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Model",
  description:
    "The Village360 Model helps communities put shared concern into collaborative local practice—people, collaboration, and infrastructure around families.",
};

const layers = [
  {
    name: "People",
    summary: "leaders, coaches, volunteers, partners",
    detail:
      "Engaged community members who build relationships, guide strategy, and mobilize resources around families.",
    color: "#4F623F",
  },
  {
    name: "Collaboration",
    summary: "affiliates and partners already in your community",
    detail:
      "Shared ways of working so support is connected—not a piecemeal path families have to assemble alone.",
    color: "#2E4C7E",
  },
  {
    name: "Infrastructure",
    summary: "pathways, systems, data, accountability",
    detail:
      "Shared processes, data habits, and accountability that keep the village aligned and learning.",
    color: "#6C48A8",
  },
];

const shifts = [
  {
    id: "strategy",
    before: "Isolated efforts",
    beforeDetail: "Programs and people work in silos.",
    after: "Shared strategy",
    afterDetail: "Aligned priorities and collaborative action.",
    beforeIcon: "/changes/isolated-efforts.svg",
    afterIcon: "/changes/shared-strategy.svg",
  },
  {
    id: "timing",
    before: "Crisis response",
    beforeDetail: "Support begins after problems escalate.",
    after: "Earlier support",
    afterDetail: "Families get help before crisis points.",
    beforeIcon: "/changes/crisis-response.svg",
    afterIcon: "/changes/earlier-support.svg",
  },
  {
    id: "roles",
    before: "Unclear roles",
    beforeDetail: "Duplication, gaps, and confusion.",
    after: "Defined responsibilities",
    afterDetail: "Clear roles and trusted relationships.",
    beforeIcon: "/changes/unclear-roles.svg",
    afterIcon: "/changes/defined-responsibilities.svg",
  },
  {
    id: "continuity",
    before: "Inconsistent follow-through",
    beforeDetail: "Families fall through the cracks.",
    after: "Relational continuity",
    afterDetail: "Families have a consistent circle of support.",
    beforeIcon: "/changes/inconsistent-follow-through.svg",
    afterIcon: "/changes/relational-continuity.svg",
  },
  {
    id: "outcomes",
    before: "Activity counts",
    beforeDetail: "Outputs measured, outcomes unclear.",
    after: "Measurable outcomes",
    afterDetail: "Data shows what works and for whom.",
    beforeIcon: "/changes/activity-counts.svg",
    afterIcon: "/changes/measurable-outcomes.svg",
  },
];

const provides = [
  {
    title: "Community Assessment",
    detail:
      "Data and listening that reveal local strengths, needs, and opportunities.",
    icon: "/provides/mglass.svg",
  },
  {
    title: "Launch Strategy",
    detail:
      "A tailored plan to align leaders, define priorities, and set the village in motion.",
    icon: "/provides/flag.svg",
  },
  {
    title: "Training & Certification",
    detail:
      "Build capacity through leader development, coaching, and certification pathways.",
    icon: "/provides/train.svg",
  },
  {
    title: "Programs & Curricula",
    detail:
      "Evidence-informed programs for youth, caregivers, and practical community support.",
    icon: "/provides/program.svg",
  },
  {
    title: "SOP & Resource Library",
    detail:
      "Standard operating procedures and tools to support consistent, quality work.",
    icon: "/provides/sop.svg",
  },
  {
    title: "Data & Evaluation",
    detail:
      "Data systems and dashboards to track outcomes and drive continuous improvement.",
    icon: "/provides/data.svg",
  },
  {
    title: "Partnership Support",
    detail:
      "Guidance to engage partners, clarify roles, and strengthen collaboration.",
    icon: "/provides/partner.svg",
  },
  {
    title: "Ongoing Technical Assistance",
    detail:
      "Coaching and support to adapt, solve challenges, and sustain momentum over time.",
    icon: "/provides/tech.svg",
  },
];

const contexts = [
  {
    title: "Rural County",
    detail: "Mobilize local assets across towns and communities.",
    image: "/contexts/country.jpg",
    alt: "Dirt road through golden fields leading to a red barn at sunset",
  },
  {
    title: "Urban Neighborhood",
    detail: "Connect people and resources where needs are greatest.",
    image: "/contexts/city.jpg",
    alt: "Modern city plaza and streetscape at golden hour",
  },
  {
    title: "Faith-Centered Coalition",
    detail:
      "Unite congregations and agencies around shared values and action.",
    image: "/contexts/faith.jpg",
    alt: "Faith community campus and gardens at sunset",
  },
];

function ShiftCell({
  icon,
  title,
  detail,
  emphasize = false,
}: {
  icon: string;
  title: string;
  detail: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className="mt-0.5 size-9 shrink-0 object-contain sm:size-10"
        aria-hidden
      />
      <div>
        <p
          className={`text-base ${emphasize ? "font-semibold text-navy" : "font-medium text-ink-muted"}`}
        >
          {title}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{detail}</p>
      </div>
    </div>
  );
}

export default function TheModelPage() {
  return (
    <div className="atmosphere relative overflow-hidden">
      <div className="network-fade absolute inset-0" aria-hidden />

      {/* 1. Hero — text only */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <BrandDots className="absolute top-20 left-5 hidden lg:flex" />
        <p className="animate-rise mb-5 text-xs font-semibold tracking-[0.2em] text-forest uppercase">
          The Village360 Model
        </p>
        <h1 className="animate-rise font-display max-w-3xl text-4xl leading-[1.12] font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
          Good people are already showing up.
        </h1>
        <p className="animate-rise-delay mt-3 max-w-2xl font-display text-xl leading-snug text-forest sm:text-2xl">
          We help them work together.
        </p>
        <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          The Village360 Model is a teachable way for communities to support
          families before crisis—with structure, tools, and relationships. Local
          leaders keep ownership. Village360 provides the template and training;
          it does not become the community&apos;s caseworker or care hub.
        </p>
      </section>

      {/* 2. Movement vs model */}
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
                collaborative, relationship-centered support before families
                reach crisis. You can belong—raise awareness, volunteer,
                partner—without launching a local Village.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest">The model</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                The Village360 Model is how a community puts that conviction into
                practice. Adopting the model means using a shared template—not
                hiring Village360 to run care inside your town.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-2xl font-display text-xl leading-snug text-navy sm:text-2xl">
            The movement can spread widely because the model can be implemented
            locally.
          </p>
        </div>
      </section>

      {/* 3. Without / with the model */}
      <section className="relative border-t border-navy/8 bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                The Village360 Model—not another standalone program.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                The model helps communities weave people, collaboration, and
                systems together—so families are supported before crisis, instead
                of navigating disconnected helpers alone.
              </p>
            </div>

            <figure className="lg:col-span-8">
              <div className="mb-4 grid grid-cols-2 gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-[0.14em] text-navy uppercase">
                    Without a system
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    Disconnected programs. Missed opportunities.
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">
                    With the Village360 Model
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    One connected system. Stronger families.
                  </p>
                </div>
              </div>
              <Image
                src="/community-os.png"
                alt="Comparison showing community partners disconnected around a family without a system, then connected around the family with the Village360 Model"
                width={1600}
                height={800}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40rem, 100vw"
              />
              <figcaption className="sr-only">
                Without a system, schools, faith communities, nonprofits, local
                leaders, health providers, and courts sit around the family with
                weak connections. With the Village360 Model, those same partners
                form a connected village around the family.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4. Three layers of the village */}
      <section className="relative border-t border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                The Three Layers of the Village
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                A strong village has aligned people, collaboration, and the
                infrastructure to sustain real impact.
              </p>
            </div>

            <figure className="mx-auto flex w-full max-w-xs items-center justify-center rounded-2xl bg-navy p-4 lg:col-span-4 lg:max-w-none">
              <Image
                src="/3layer.png"
                alt="Three concentric layers representing people, collaboration, and infrastructure"
                width={1024}
                height={1024}
                className="h-auto w-full max-w-[17rem] object-contain sm:max-w-[19rem]"
                sizes="(min-width: 1024px) 17rem, 15rem"
              />
            </figure>

            <ul className="space-y-8 lg:col-span-5">
              {layers.map((layer) => (
                <li key={layer.name}>
                  <h3 className="text-base font-semibold sm:text-lg">
                    <span style={{ color: layer.color }}>{layer.name}:</span>{" "}
                    <span
                      className="font-medium"
                      style={{ color: layer.color, opacity: 0.85 }}
                    >
                      {layer.summary}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {layer.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. What Village360 provides */}
      <section className="relative border-t border-navy/8 bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-center text-3xl text-navy sm:text-4xl">
            What Village360 Provides
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {provides.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-navy/8 bg-ivory px-5 py-8 text-center shadow-[0_1px_0_rgba(27,42,65,0.04)]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={88}
                  height={88}
                  className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
                  aria-hidden
                />
                <h3 className="font-display mt-5 text-lg text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-navy">Also available if needed:</span>{" "}
            a branding guide, website, and social media launch support.
          </p>
        </div>
      </section>

      {/* 6. Changes you can expect */}
      <section className="relative border-t border-navy/8 bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3 lg:pt-2">
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                Changes you can expect
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Not because Village360 arrives to do the work—but because the
                model helps a community work as one village.
              </p>
            </div>

            <div className="overflow-x-auto lg:col-span-9">
              <table className="w-full min-w-[40rem] border-collapse text-left">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="rounded-tl-lg bg-navy/5 px-4 py-3 text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase"
                    >
                      Before the Village360 Model
                    </th>
                    <th
                      scope="col"
                      className="rounded-tr-lg bg-forest/10 px-4 py-3 text-xs font-semibold tracking-[0.14em] text-forest uppercase"
                    >
                      With the Village360 Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((row) => (
                    <tr key={row.id} className="border-b border-navy/10">
                      <td className="border-r border-navy/8 px-4 py-5 align-top">
                        <ShiftCell
                          icon={row.beforeIcon}
                          title={row.before}
                          detail={row.beforeDetail}
                        />
                      </td>
                      <td className="px-4 py-5 align-top">
                        <ShiftCell
                          icon={row.afterIcon}
                          title={row.after}
                          detail={row.afterDetail}
                          emphasize
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Adapt */}
      <section className="relative border-t border-navy/8 bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:pt-2">
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                Designed to Adapt Without Losing Its Integrity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                The framework stays consistent. The local village makes it its
                own.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
              {contexts.map((item) => (
                <li
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-navy/8 bg-ivory text-center shadow-[0_1px_0_rgba(27,42,65,0.04)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-deep">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      quality={90}
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <h3 className="font-display text-lg text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Accountability */}
      <section className="relative border-y border-navy/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-navy sm:text-4xl">
              Accountability is part of the model.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              We track what matters together so communities can improve what
              they do—and stay honest about what they are still learning.
            </p>
          </div>

          <figure className="mt-10">
            <Image
              src="/accountability.jpg"
              alt="Illustrative outcomes dashboard example showing sample participation, completion, connections, protective factors, caregiver confidence, and partner engagement metrics"
              width={1808}
              height={1024}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1024px) 72rem, 100vw"
              quality={90}
            />
            <figcaption className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-navy">Illustrative example only.</span>{" "}
              These figures are sample metrics that show how a village might
              learn over time—not Village360 results or live performance data.
              For how we intend to measure honestly, see{" "}
              <Link
                href="/impact"
                className="font-medium text-forest underline-offset-2 hover:underline"
              >
                Impact
              </Link>
              .
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display max-w-2xl text-3xl text-navy sm:text-4xl">
          Ready to see what a local launch involves?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Learn what adopting the model includes—then begin a readiness
          conversation. You do not need a finished village.
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
            download
            className="inline-flex items-center justify-center px-2 py-3 text-base text-ink-muted underline-offset-4 transition-colors hover:text-forest hover:underline sm:ml-1"
          >
            Download the Mini Village Kit
          </a>
        </div>
      </section>
    </div>
  );
}
