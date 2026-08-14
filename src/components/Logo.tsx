import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  /** Kept for call-site compatibility; official lockup PNG has its own colors. */
  variant?: "default" | "onDark";
  className?: string;
};

export function Logo({
  href = "/",
  className = "",
}: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt={href ? "" : "Village360"}
      width={2000}
      height={1945}
      priority
      sizes="96px"
      className={`h-16 w-auto max-w-none object-contain object-left sm:h-[4.75rem] ${className}`}
      style={{ width: "auto" }}
    />
  );

  const inner = (
    <span className="inline-flex overflow-visible">{image}</span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 overflow-visible"
      aria-label="Village360 home"
    >
      {inner}
    </Link>
  );
}
