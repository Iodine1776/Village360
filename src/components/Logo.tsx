import Link from "next/link";

type LogoProps = {
  href?: string;
  variant?: "default" | "onDark";
  className?: string;
};

/** Six-person community ring with full outer heads (incl. left blue). */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6 -6 76 76"
      fill="none"
      aria-hidden="true"
      overflow="visible"
      className={`block shrink-0 overflow-visible ${className}`}
    >
      <path
        d="M 19.517 24.200 A 14.720 14.720 0 0 1 31.486 17.289"
        stroke="#F0C020"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="21.440" cy="13.710" r="3.712" fill="#F0C020" />
      <path
        d="M 32.514 17.289 A 14.720 14.720 0 0 1 44.483 24.200"
        stroke="#D02820"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="42.560" cy="13.710" r="3.712" fill="#D02820" />
      <path
        d="M 44.997 25.089 A 14.720 14.720 0 0 1 44.997 38.911"
        stroke="#5850A0"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="53.120" cy="32.000" r="3.712" fill="#5850A0" />
      <path
        d="M 44.483 39.800 A 14.720 14.720 0 0 1 32.514 46.711"
        stroke="#ED9700"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="42.560" cy="50.290" r="3.712" fill="#ED9700" />
      <path
        d="M 31.486 46.711 A 14.720 14.720 0 0 1 19.517 39.800"
        stroke="#488848"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="21.440" cy="50.290" r="3.712" fill="#488848" />
      <path
        d="M 19.003 38.911 A 14.720 14.720 0 0 1 19.003 25.089"
        stroke="#3858B0"
        strokeWidth="7.552"
        strokeLinecap="round"
      />
      <circle cx="10.880" cy="32.000" r="3.712" fill="#3858B0" />
    </svg>
  );
}

export function Logo({
  href = "/",
  variant = "default",
  className = "",
}: LogoProps) {
  const wordmark =
    variant === "onDark" ? (
      <span className="text-[0.95rem] font-bold tracking-[0.04em] text-ivory sm:text-base">
        VILLAGE<span className="text-ember">360</span>
      </span>
    ) : (
      <span className="text-[0.95rem] font-bold tracking-[0.04em] text-navy sm:text-base">
        VILLAGE<span className="text-ember">360</span>
      </span>
    );

  const inner = (
    <span
      className={`inline-flex items-center gap-2.5 overflow-visible ${className}`}
    >
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="sr-only">Village360</span>
      <span aria-hidden>{wordmark}</span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      className="shrink-0 overflow-visible"
      aria-label="Village360 home"
    >
      {inner}
    </Link>
  );
}
