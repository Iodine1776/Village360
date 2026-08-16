import Image from "next/image";
import Link from "next/link";
import { BRAND_COLORS } from "@/lib/brand";

const stages = [
  {
    name: "Listen & Assess",
    color: BRAND_COLORS[0].hex,
    detail:
      "Map what already exists. Understand families, partners, and gaps before designing anything new.",
  },
  {
    name: "Equip Leaders",
    color: BRAND_COLORS[1].hex,
    detail:
      "Train the people already willing to help—shared language, clear roles, sustainable rhythms.",
  },
  {
    name: "Connect the Village",
    color: BRAND_COLORS[2].hex,
    detail:
      "Coordinate practical, emotional, and relational support so families are not handed between disconnected helpers.",
  },
  {
    name: "Measure & Multiply",
    color: BRAND_COLORS[4].hex,
    detail:
      "Track what matters, learn out loud, and help the next community begin further along.",
  },
] as const;

export function ModelTeaser() {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
        The model, in brief
      </p>

      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            How Village360 Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            A way to work—not another disconnected program. The model is how a
            community puts the movement into practice: listen first, equip the
            people already willing to help, connect the village around families,
            and learn out loud so the next place can begin further along.
          </p>
          <Link
            href="/the-model"
            className="mt-6 inline-flex text-sm font-medium text-forest transition-colors hover:text-forest-deep"
          >
            See the Model in Action →
          </Link>
        </div>

        <div className="lg:col-span-8">
          <Image
            src="/how-v360-works.png"
            alt=""
            width={4096}
            height={1760}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 42rem, 100vw"
          />
          <ol className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {stages.map((stage, index) => (
              <li key={stage.name}>
                <span
                  className="text-xs font-semibold tracking-[0.16em] uppercase"
                  style={{ color: stage.color }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-1 text-lg text-navy">
                  {stage.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
