# Village360 — joinvillage360.com

Calm marketing site for the Village360 movement. Built with Next.js (App Router) and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design notes

- Official lockup is `public/logo.png` (six heart figures + VILLAGE360 wordmark). Header and footer render this file once via `Logo.tsx` — do not add a second wordmark.
- Isolated mark is `public/icon.png` (favicon / apple-touch). Do not use reconstructed SVG generators.
- Palette: warm ivory, forest green, navy; keep layouts quiet and uncluttered
- Mockup stats, partner logos, and photos are **not** treated as accurate content
- Interior routes are intentional placeholders until confirmed copy arrives

## Next: GitHub → Vercel → Wix DNS

1. **GitHub** — create an empty repo (e.g. `joinvillage360`), then:

   ```bash
   git add .
   git commit -m "Initial Village360 site scaffold"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/joinvillage360.git
   git push -u origin main
   ```

2. **Vercel** — import the GitHub repo at [vercel.com/new](https://vercel.com/new). Deploy defaults work for Next.js. Note the `*.vercel.app` preview URL.

3. **Custom domain** — in the Vercel project: Settings → Domains → add `joinvillage360.com` and `www.joinvillage360.com`. Use the DNS records Vercel shows.

4. **Wix DNS** — in Wix Domains for `joinvillage360.com`, update DNS to Vercel’s A/CNAME values. Keep the old Wix site until the new one resolves, then pause Wix hosting if desired. The domain can stay registered at Wix.

Do not transfer the domain unless you intentionally want a new registrar.
