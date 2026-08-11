import Link from "next/link";

type PlaceholderProps = {
  title: string;
  eyebrow: string;
  summary: string;
};

export function PlaceholderPage({ title, eyebrow, summary }: PlaceholderProps) {
  return (
    <div className="atmosphere">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl text-navy sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{summary}</p>
        <p className="mt-8 text-sm text-ink-muted/80">
          This page is a quiet placeholder while we build out accurate Village360
          content—no invented metrics or partner claims.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex text-sm font-medium text-forest hover:text-forest-deep"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
