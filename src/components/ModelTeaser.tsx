import Link from "next/link";
import { BRAND_COLORS } from "@/lib/brand";

const stages = [
  {
    name: "Listen & Assess",
    icon: "listen",
    color: BRAND_COLORS[0].hex,
  },
  {
    name: "Equip Leaders",
    icon: "equip",
    color: BRAND_COLORS[1].hex,
  },
  {
    name: "Connect the Village",
    icon: "connect",
    color: BRAND_COLORS[2].hex,
  },
  {
    name: "Measure & Multiply",
    icon: "measure",
    color: BRAND_COLORS[4].hex,
  },
] as const;

function StageIcon({ name }: { name: (typeof stages)[number]["icon"] }) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "listen") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <circle cx="16" cy="16" r="6" {...common} />
        <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
        <path d="M16 6v2.5M16 23.5V26M6 16h2.5M23.5 16H26" {...common} />
      </svg>
    );
  }

  if (name === "equip") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="12" r="3" {...common} />
        <circle cx="21" cy="12" r="3" {...common} />
        <path d="M7 23c.6-3.2 2.6-5 5-5s4.4 1.8 5 5M16 23c.5-2.6 2.2-4.2 4.2-4.2 2.2 0 4 1.5 4.6 4.2" {...common} />
      </svg>
    );
  }

  if (name === "connect") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <circle cx="8" cy="16" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="9" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="24" cy="16" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="23" r="2.4" fill="currentColor" stroke="none" />
        <path d="M10 15.2 14.2 10.8M18 10.8 22 15.2M22 17 18.2 21.2M14 21.2 10 17" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path d="M8 22h16M8 22V10M8 22l5-6 4 3 7-9" {...common} />
      <circle cx="24" cy="10" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ModelTeaser() {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
        The model, in brief
      </p>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-navy sm:text-4xl">
            A way to work—not another disconnected program.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            The Village360 Model is how a community puts the movement into
            practice: listen first, equip the people already willing to help,
            connect the village around families, and learn out loud so the next
            place can begin further along.
          </p>
        </div>
        <Link
          href="/the-model"
          className="inline-flex shrink-0 text-sm font-medium text-forest transition-colors hover:text-forest-deep"
        >
          Explore the Model →
        </Link>
      </div>

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <li key={stage.name} className="flex flex-col items-start gap-3">
            <span
              className="inline-flex size-14 items-center justify-center rounded-full text-navy"
              style={{
                backgroundColor: `${stage.color}2e`,
                boxShadow: `inset 0 0 0 2px ${stage.color}`,
              }}
            >
              <StageIcon name={stage.icon} />
            </span>
            <span className="text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl text-navy">{stage.name}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
}
