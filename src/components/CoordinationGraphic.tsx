import Image from "next/image";
import { BRAND_COLORS } from "@/lib/brand";

const sectors = [
  { name: "Schools", color: BRAND_COLORS[0].hex },
  { name: "Faith communities", color: BRAND_COLORS[1].hex },
  { name: "Nonprofits", color: BRAND_COLORS[2].hex },
  { name: "Courts", color: BRAND_COLORS[3].hex },
  { name: "Local agencies", color: BRAND_COLORS[4].hex },
  { name: "Health providers", color: BRAND_COLORS[5].hex },
  { name: "Businesses", color: "#2f5d4a" },
] as const;

const outcomes = [
  { name: "Stronger families", color: BRAND_COLORS[4].hex },
  { name: "Safer communities", color: BRAND_COLORS[5].hex },
  { name: "Better outcomes", color: BRAND_COLORS[2].hex },
] as const;

function FamilyGlyph() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 text-navy sm:h-9 sm:w-9" aria-hidden>
      <circle cx="16" cy="13" r="4.2" fill="currentColor" />
      <circle cx="32" cy="13" r="4.2" fill="currentColor" />
      <circle cx="24" cy="20" r="3.4" fill="currentColor" />
      <path
        d="M9.5 32.5c.6-5.4 3.6-8.5 6.5-8.5s5.4 2.4 6 5.2c.6-2.8 3.1-5.2 6-5.2s5.9 3.1 6.5 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CoordinationGraphic() {
  return (
    <figure className="relative">
      <figcaption className="sr-only">
        Schools, faith communities, nonprofits, courts, local agencies, health
        providers, and businesses coordinate through Village360 around the
        family, toward stronger families, safer communities, and better
        outcomes.
      </figcaption>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_13.5rem_minmax(0,1fr)] lg:gap-4">
        <ul className="space-y-2.5">
          {sectors.map((sector) => (
            <li key={sector.name} className="flex items-center gap-3">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: sector.color }}
                aria-hidden
              />
              <span className="text-sm font-medium text-navy sm:text-base">
                {sector.name}
              </span>
              <span
                className="hidden h-px flex-1 border-t border-dotted border-navy/25 lg:block"
                aria-hidden
              />
            </li>
          ))}
        </ul>

        <div className="relative mx-auto flex w-full max-w-[13.5rem] flex-col items-center">
          <svg
            className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[118%] w-[170%] -translate-x-1/2 -translate-y-1/2 text-navy/20 lg:block"
            viewBox="0 0 280 240"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 28 C70 40, 90 90, 140 120"
              stroke={BRAND_COLORS[0].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M8 70 C72 78, 95 100, 140 120"
              stroke={BRAND_COLORS[1].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M8 120 C80 120, 100 120, 140 120"
              stroke={BRAND_COLORS[2].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M8 170 C72 162, 95 140, 140 120"
              stroke={BRAND_COLORS[3].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M8 212 C70 200, 90 150, 140 120"
              stroke={BRAND_COLORS[5].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M140 120 C185 108, 210 70, 272 48"
              stroke={BRAND_COLORS[4].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M140 120 C190 120, 220 120, 272 120"
              stroke={BRAND_COLORS[5].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path
              d="M140 120 C185 132, 210 170, 272 192"
              stroke={BRAND_COLORS[2].hex}
              strokeWidth="1.4"
              strokeDasharray="3 5"
              opacity="0.7"
            />
          </svg>

          <div className="relative z-10 h-36 w-36 sm:h-40 sm:w-40">
            <Image
              src="/icon.png"
              alt=""
              width={2000}
              height={1815}
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FamilyGlyph />
            </div>
          </div>
          <p className="relative z-10 mt-2 text-center text-xs font-semibold tracking-[0.16em] text-forest uppercase">
            Village360
          </p>
          <p className="relative z-10 text-center text-xs text-ink-muted">
            Family at the center
          </p>
        </div>

        <ul className="space-y-4 lg:pl-6">
          {outcomes.map((outcome) => (
            <li key={outcome.name} className="flex items-center gap-3">
              <span
                className="hidden h-px flex-1 border-t border-dotted border-navy/25 lg:block"
                aria-hidden
              />
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: outcome.color }}
                aria-hidden
              />
              <span className="font-display text-lg text-navy sm:text-xl">
                {outcome.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
