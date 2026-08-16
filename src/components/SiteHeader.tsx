"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";

const nav = [
  { href: "/the-movement", label: "The Movement" },
  { href: "/the-model", label: "The Model" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

const utility = [
  { href: "/join", label: "Join the Movement" },
  { href: "/contact", label: "Connect" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
              className="rounded-sm transition-colors hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {utility.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-sm text-sm text-navy-soft transition-colors hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/bring-village360-here"
            className="rounded-md bg-forest px-3.5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            Bring Village360 Here
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-navy/15 text-navy transition-colors hover:border-forest/40 hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="border-t border-navy/8 bg-ivory lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {[...nav, ...utility].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base text-navy transition-colors hover:bg-ivory-deep hover:text-forest"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
