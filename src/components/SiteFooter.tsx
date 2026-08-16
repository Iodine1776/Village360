import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/the-movement", label: "The Movement" },
      { href: "/the-model", label: "The Model" },
      { href: "/programs", label: "Programs" },
      { href: "/impact", label: "Impact" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Participate",
    links: [
      { href: "/join", label: "Join the Movement" },
      { href: "/bring-village360-here", label: "Bring Village360 Here" },
      { href: "/launch-a-village", label: "Launch a Village" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Connect" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo href="/" variant="onDark" />
          <SocialLinks className="pt-2" />
          <p className="text-sm text-ivory/55">joinvillage360.com</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-ivory/50 uppercase">
              {column.title}
            </p>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Village360. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-ivory/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory/70">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-ivory/70">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
