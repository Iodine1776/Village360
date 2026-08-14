import Link from "next/link";
import { Logo } from "@/components/Logo";

const nav = [
  { href: "/the-movement", label: "The Movement" },
  { href: "/the-model", label: "The Model" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-navy/8 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-visible px-5 py-2.5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-7 text-sm text-navy-soft lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/join"
            className="hidden text-sm text-navy-soft transition-colors hover:text-forest sm:inline"
          >
            Join the Movement
          </Link>
          <Link
            href="/bring-village360-here"
            className="rounded-md bg-forest px-3.5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Bring Village360 Here
          </Link>
        </div>
      </div>
    </header>
  );
}
