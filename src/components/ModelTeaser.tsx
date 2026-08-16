import Image from "next/image";
import Link from "next/link";

const stages = [
  {
    name: "Listen & Assess",
    detail:
      "Map what already exists. Understand families, partners, and gaps before designing anything new.",
  },
  {
    name: "Equip Leaders",
    detail:
      "Train the people already willing to help—shared language, clear roles, sustainable rhythms.",
  },
  {
    name: "Connect the Village",
    detail:
      "Coordinate practical, emotional, and relational support so families are not handed between disconnected helpers.",
  },
  {
    name: "Measure & Multiply",
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

      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:pt-2">
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

        <div className="mx-auto w-full max-w-3xl lg:col-span-8 lg:max-w-none">
          <Image
            src="/how-v360-works.png"
            alt=""
            width={3519}
            height={1110}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 42rem, 100vw"
          />
          <ol className="mt-1 grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4 sm:gap-x-4">
            {stages.map((stage) => (
              <li key={stage.name} className="text-center">
                <h3 className="font-display text-base text-navy sm:text-lg">
                  {stage.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
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
