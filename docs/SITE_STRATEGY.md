# Village360 Website Build Strategy

**Domain:** [joinvillage360.com](https://joinvillage360.com)  
**Stack:** Next.js (App Router) + Tailwind — project already scaffolded  
**Sources:** `Village360_Movement_Website_Roadmap.docx`, Mini Village Kit, Website Needs, user positioning notes  
**Design constraint:** Simple, calm, not busy (wife preference). Prefer whitespace, clear hierarchy, few competing CTAs.

This document is the working brief for designers and developers. It aligns the Word roadmap with three primary audiences and a **movement-front / replicable-model-back** architecture (franchise-style operations without franchise-speak in public copy).

---

## 1. Positioning

### Master statement (public)

> Village360 is a growing movement of communities choosing collaborative, relationship-centered support before families reach crisis. The Village360 Model gives local leaders the structure, training, programs, and tools to put that conviction into practice.

### Dual architecture (critical)

| Layer | Public voice | Internal / conversion reality |
| --- | --- | --- |
| **Movement** | Belonging, conviction, shared responsibility | Brand umbrella; acquisition of believers and participants |
| **Model** | “How communities put the movement into practice” | Licensed, teachable, fidelity-protected operating system — *movement in a box* |
| **Programs** | Practical pathways for youth, caregivers, leaders | Packaged curricula / delivery SKUs |
| **Local Village** | Community expression of the movement | Site / chapter-style implementation under shared principles |
| **Impact** | Honest learning and accountability | Evaluation, reporting for funders/partners, model iteration |

**Internal truth (do not lead with this publicly):** Village360 operates like a franchise-style replication business — churches and nonprofits receive a template, training, brand/identity guidance, SOPs, digital infrastructure, and ongoing movement support so they do not reinvent care systems from scratch.

**Public truth (always lead with this):** It is a **movement** with a **model**. Communities keep local ownership; Village360 provides structure so compassion becomes collaborative, sustainable action.

### Language: public vs internal

| Use publicly | Prefer instead of | Keep internal / ops-only |
| --- | --- | --- |
| Movement, local Village, model, launch, readiness | Franchise, franchisee, territory | License terms, fee schedule, territory maps |
| Bring Village360 Here / Launch a Village | Buy a package / open a location | CRM stage names, discount/scholarship rules |
| Movement Partner | Franchise partner | Royalty, unit economics decks |
| Shared principles + local adaptation with integrity | White-label anything | Fidelity checklist, brand enforcement |
| Movement in a box *(sparingly, metaphorically)* | Turnkey franchise | “Box” contents = kit + training + hub access |

### Brand hierarchy (from roadmap)

**Village360** = the movement  
**Village360 Model** = how communities practice it  
**Programs** = the tools  
**Local Village** = the expression  
**Stronger families & communities** = intended impact  

North star journey: **Believe differently → Belong together → Build locally → Learn collectively → Multiply responsibly.**

After any visit, someone should answer: *What is the movement? What does it believe? How does the model work? Where do I belong? What’s my next step?*

---

## 2. Three audiences — pain points, pathways, CTAs

Map every major page and form to at least one audience. Do not force one CTA for everyone.

### A. Community leaders
*(pastors, nonprofit directors, school/court partners, coalition builders)*

| Pain (from Kit + roadmap) | Site must answer | Primary pathway | Primary CTAs |
| --- | --- | --- | --- |
| Care is disconnected, reactive, exhausting | What is the Model? What does launch include? | `/the-model` → `/bring-village360-here` (+ later `/launch-a-village`) | Bring Village360 Here; Assess readiness; Schedule conversation |
| Orgs are in silos; don’t know how to start | First 30 days / readiness without pressure | Resources → Mini Village Kit → readiness | Download Kit; Begin readiness check |
| Fear of another program that fades | Fidelity, training, network, measurement | Impact + About stewardship | Explore outcomes framework |

**Homepage door:** “Build the Movement” → Bring Village360 Here.

### B. Funders & partners
*(sponsors, foundations, institutions, aligned orgs)*

| Pain | Site must answer | Primary pathway | Primary CTAs |
| --- | --- | --- | --- |
| Need credible, scalable prevention story | Replicable model + learning system | `/impact` + `/about` + partner path on `/join` | Partner / Strengthen the Movement; Partner on evaluation |
| Hate inflated nonprofit claims | Pilot vs verified labels; no sole causation | Impact taxonomy | View reports & research *(when real)* |
| Want clear use of funds / role | Distinct partnership pathways, not vague “donate” only | Join → Help Fund / Movement Partner | Partner With Village360 |

**Homepage door:** “Strengthen the Movement” → Explore Partnerships (`/join` partner segment).

### C. Families & volunteers
*(caregivers, kinship, foster/adoptive, mentors, local helpers)*

| Pain | Site must answer | Primary pathway | Primary CTAs |
| --- | --- | --- | --- |
| Feel isolated / only get help in crisis | Dignity-first support routing (not a sales funnel) | Contact → Family Support *(separate form)* | Find support; Join locally |
| Want to help but lack structure/boundaries | Clear roles, screening honesty, pledge | `/join` volunteer/coach paths | Find Your Place; Show Up Locally |
| Need practical first step | Free tools, not a hard sell | `/resources` | Mini Village Kit; Share the Movement |

**Homepage door:** “Join the Movement” → Find Your Place.

### Form routing rule (non-negotiable)

| Intent | Form / workflow | Must not mix with |
| --- | --- | --- |
| Organizational launch | Bring Village360 Here / readiness | Family crisis support |
| Partner / funder | Partnership inquiry | Volunteer signup |
| Coach / volunteer | Role + screening path | Sales pipeline |
| Family support | Support / referral path | Marketing nurture by default |
| Media | Press path | Launch qualification |

Marketing consent: **optional, unchecked by default.** Do not say “Welcome to the movement” until explicit opt-in.

---

## 3. Information architecture

### Recommended primary nav

| Nav item | Purpose | Status in codebase today |
| --- | --- | --- |
| **The Movement** | Belief, principles, invitation | **Missing** — add `/the-movement` |
| The Model | Replicable framework | Placeholder `/the-model` |
| Programs | Offerings as movement expressions | Placeholder `/programs` |
| Impact | Growth vs outcomes; credibility | Placeholder `/impact` |
| Resources | Free tools + authority content hub | Placeholder `/resources` |
| About | Origin, stewardship, governance | Placeholder `/about` |
| **Join the Movement** | Individual/org participation (text link) | Exists `/join` |
| **Bring Village360 Here** | Primary institutional CTA (button) | Exists `/bring-village360-here` |

Secondary (footer / later): Contact hub, Launch a Village (detail sales page), Privacy, Accessibility, Village Hub (private — out of public MVP).

### Audience → URL pathways

```text
Community leaders
  Home → The Model → Launch a Village (detail) → Bring Village360 Here (apply)
  Home → Resources / Mini Village Kit → Readiness

Funders & partners
  Home → Impact → About → Join (Partner / Fund)
  Home → Strengthen pathway → Partnership form

Families & volunteers
  Home → Join the Movement → role cards → Volunteer/Coach/Family forms
  Home → Resources → practical guides
  Contact → Family Support (isolated workflow)
```

### CTA priority (sitewide)

1. **Bring Village360 Here** — institutional conversion  
2. **Join the Movement** — belonging / role find  
3. **Explore the Model** / **Download Mini Village Kit** — education / soft entry  

Avoid stacking more than two strong buttons + one text link in a single band (calm design).

### Immediate homepage note (tiny, optional)

Current homepage already matches roadmap hero + three pathways. When convenient:

- Label the three pathway audiences more explicitly *(Leaders / Partners / Families & volunteers)* in body copy — without adding cards or clutter.  
- Ensure “Strengthen the Movement” lands on a **partner-focused** section of `/join`, not a generic duplicate of volunteer copy.  
- Add **The Movement** to nav when that page exists; until then, About or Model can carry belief content.

No full redesign required for strategy alignment.

---

## 4. Phased build roadmap

### Phase 0 — Foundation (now / Sprint 1)

- [ ] Lock vocabulary (this doc + roadmap language system)  
- [ ] Nav update: Join the Movement; prominent Bring CTA; plan The Movement page  
- [ ] Evidence labels: `Pilot` · `Illustrative` · `In development` · `Verified`  
- [ ] Metadata baseline (`layout.tsx` already has title/description/domain)  
- [ ] Deploy path: GitHub → Vercel → DNS (see README); keep design simple  

### Phase 1 — MVP conversion shell (Sprints 1–3)

**Goal:** Belief + clarity + one institutional conversion path + one participation path.

| Priority | Page / work | Done when |
| --- | --- | --- |
| P0 | Homepage polish (pathways audience-clear) | Three doors map to A/B/C |
| P0 | `/the-model` real content | Stages + movement vs model + CTAs |
| P0 | `/bring-village360-here` form + readiness narrative | Submission → email/CRM; no “guaranteed launch” |
| P0 | `/join` role routing | Separate partner vs volunteer vs family |
| P1 | `/the-movement` | Principles + pledge + five ways to act |
| P1 | `/about` origin + stewardship | Founder as steward, not sole hero |
| P1 | Contact paths | Family support isolated |
| P1 | Mini Village Kit download (gated lightly or free) | Lead optional; kit available |

**Out of MVP:** Private Village Hub, full program catalog depth, fabricated stats, CRM sophistication beyond email routing.

### Phase 2 — Authority content engine (Sprints 3–6)

- [ ] `/resources` as library + **Learn** topic hub (see §5)  
- [ ] First 8–12 cornerstone articles / explainers with citations  
- [ ] FAQ pages per cluster + sitewide FAQ schema  
- [ ] Impact page structure (Movement Growth vs Model Impact) with empty/honest states  
- [ ] Programs framing page (even if 1–2 programs detailed)  

### Phase 3 — Conversion systems (Sprints 5–8)

- [ ] `/launch-a-village` education page (separate from short Apply page)  
- [ ] Readiness assessment (multi-step)  
- [ ] Email nurture segments: Leaders / Partners / Volunteers / General  
- [ ] Scholarship nomination form (from Website Needs)  
- [ ] Newsletter of progress & awareness (Website Needs)  
- [ ] Partner one-pager PDF + media kit  
- [ ] Idea board / improvement tickets (Website Needs) — low priority; can be Typeform/Linear later  

### Phase 4 — Optimization & scale

- [ ] Full SEO technical pass (§6)  
- [ ] AEO/GEO pack (§7)  
- [ ] Analytics + conversion events (§9)  
- [ ] Accessibility QA  
- [ ] Village Hub preview (authenticated) — after public site is stable  

---

## 5. Authority content strategy (become the go-to source)

**Strategic purpose:** Make joinvillage360.com a recognized internet authority on facts and challenges related to foster care, kinship/tenuous home situations, adoption, and community-based prevention — while increasing brand awareness and earning citations from search and answer engines.

### Topic clusters (pillar → spokes)

| Pillar page (own these URLs) | Spoke topics (examples) | Audience skew |
| --- | --- | --- |
| **Community-based foster care prevention** | What “prevention” means locally; why systems alone can’t stabilize families; collaborative support vs one-off charity | Leaders, funders |
| **Kinship & tenuous home situations** | Kinship caregiver isolation; informal care; what communities can offer without overstepping | Families, leaders |
| **Adoption & post-adoption support** | Belonging after placement; volunteer roles that help (and hurt); continuity of relationships | Families, volunteers |
| **Volunteer & church readiness** | Burnout; boundaries; trauma-informed basics; screening; sustainable rhythms | Volunteers, leaders |
| **Building a local village (model explainers)** | Village definition; 5 signs you need a stronger village; first 30 days; mapping exercise | Leaders |
| **Measuring what matters** | Movement growth vs family outcomes; ethics of storytelling; pilot vs verified | Funders |

### Content rules

1. **No fabricated stats.** Use public data (AFCARS, HHS, state reports, peer-reviewed summaries) with links and dates.  
2. Every claim block: statement → source → “as of [year]”.  
3. Separate **problem education** (neutral authority) from **Village360 offer** (soft CTA at end).  
4. Prefer quotable 2–3 sentence definitions AI systems can cite.  
5. Update cadence: 1 cornerstone/month early; refresh stats annually.  
6. Label Village360 outcomes: pilot / illustrative / verified only.

### Resource library filters (roadmap)

Understand · Start a Conversation · Support a Family · Organize · Equip Volunteers · Prepare to Launch · Measure and Learn  

Statuses: **Available now** · **In development** · **Partner resource**.

---

## 6. SEO — technical + on-page

### Technical (Next.js)

- [ ] Unique `<title>` + meta description per route (use `metadata` / `generateMetadata`)  
- [ ] Canonical URLs via existing `metadataBase`  
- [ ] `app/sitemap.ts` + `app/robots.ts`  
- [ ] OG/Twitter images (calm brand frame; logo correct crop)  
- [ ] Semantic HTML: one `h1`, logical heading order  
- [ ] Fast LCP: optimize logo/images; avoid heavy hero video on MVP  
- [ ] Internal links: Movement ↔ Model ↔ Programs ↔ Impact ↔ Bring Here  
- [ ] 404 + redirects when renaming routes  
- [ ] JSON-LD on key templates (§7)  
- [ ] Accessible forms (labels, errors) — also SEO-adjacent UX  

### On-page

- Primary entity name consistent: **Village360** (not Village 360 / V360 in titles except brand-approved short form in body).  
- Target phrases naturally: *community-based foster care prevention*, *kinship caregiver support*, *local village model*, *before families reach crisis*.  
- Pillar pages ≥ substantive depth; spokes 800–1500+ words only when sourced — quality over fluff.  
- FAQ sections on Movement, Model, Bring Here, and Learn pillars.  
- Downloadable Kit as indexed landing page + PDF with identical core definitions.

### Local / brand SERP

- About + Organization schema → sitelinks over time.  
- Consistent NAP/email: hello@joinvillage360.com; Facebook/social same entity name.

---

## 7. LLM / AEO / GEO optimization

Goal: When someone asks an AI about community approaches to foster-care prevention, kinship support, or “how churches can help families before crisis,” Village360 should be **accurately citeable**.

### Implementations

| Tactic | Implementation |
| --- | --- |
| Clear definitions | Dedicated “What is Village360?” / “What is a Village?” blocks (Kit language) |
| Quotable facts | Short factual callouts with visible sources |
| FAQ | Visible FAQ + `FAQPage` JSON-LD |
| Organization entity | `Organization` + `NGO`/`NonprofitOrganization` schema; same description sitewide |
| WebSite + SearchAction | Optional when site search exists |
| Article schema | On Learn posts: author, datePublished, dateModified, citations |
| `llms.txt` | `/llms.txt` summarizing mission, model, key pages, citation policy |
| `/.well-known` or root summary | Optional `llms-full.txt` later for deeper model description |
| Entity consistency | One official description paragraph reused in About, schema, press, Kit |
| Cite policy | Page: “How we use data” — pilot vs verified; link sources; invite corrections |
| Avoid | Keyword stuffing, fake reviews, unverifiable outcome numbers |

### Suggested official definition (entity string)

> Village360 is a movement and practical model that helps churches, nonprofits, schools, courts, and community leaders build collaborative, relationship-centered support so families are known and strengthened before crisis leads to separation.

### `llms.txt` (draft outline)

```text
# Village360
> Community movement and model for collaborative family support before crisis.

Mission: ...
Model: Listen & Assess → Equip Leaders → Connect the Village → Measure & Multiply
Key pages: /the-movement /the-model /programs /impact /resources /bring-village360-here
Citation policy: Do not invent Village360 outcome statistics; use only labeled pilot or verified figures from joinvillage360.com.
Contact: hello@joinvillage360.com
```

---

## 8. Branding tactics (calm, not growth-hacky)

Fit a quiet nonprofit/movement site — **no** spammy popups, fake urgency, dark patterns, or engagement-bait carousels.

| Do | Don’t |
| --- | --- |
| Hero: brand + one headline + one support line + CTA group | Stats strips, logo clouds, badge clutter in first viewport |
| Reusable movement lines from roadmap | Overuse “movement” on every widget |
| Photography of real community context when rights allow | Stock “sad child” tropes; AI collage heroes |
| Soft motion (2–3 intentional cues already in scaffold) | Autoplays, parallax noise |
| Evidence labels and honest empty states | Decorative impact counters |
| Mini Village Kit as generous first gift | Hard gate every PDF behind a 12-field form |
| Shareable language guide + conversation cards (later) | Viral challenges, giveaway spam |
| Consistent forest/navy/ivory system | Purple gradients, neon CTAs, emoji showers |

**Public metaphor:** “knitting a village” / “movement in a box” only where it clarifies *structure without reinventing the wheel* — never as corporate franchise swagger.

---

## 9. Measurement

### Product analytics (privacy-respecting)

| Event | Why |
| --- | --- |
| `cta_bring_here_click` | Institutional intent |
| `cta_join_click` | Participation intent |
| `kit_download` | Soft conversion |
| `form_submit` + `form_type` | Funnel by audience |
| `readiness_started` / `completed` | Leader qualification |
| `outbound_partner` | Funder path |
| Scroll depth on Model + Learn pillars | Authority engagement |

Tools: Vercel Analytics and/or Plausible/Fathom (prefer privacy-friendly). GA4 only if required by a funder — configure consent.

### SEO / AEO KPIs

- Impressions/clicks for cluster queries  
- Branded search: Village360, join village 360  
- Referring domains to Learn content  
- Manual checks: ChatGPT/Perplexity/Gemini answers for 5 fixed prompts (monthly) — note if cited; **do not** game with spam  

### Business KPIs (CRM)

- Qualified Bring Here conversations / month  
- Partner inquiries  
- Volunteer applications that pass screening  
- Family support requests handled outside sales SLA  
- Kit downloads → conversation rate (leaders)

### Guardrail metric

Track **content accuracy incidents** (wrong stat published) as a quality KPI — fix within 48 hours.

---

## 10. Guardrails

From roadmap voice rules + user ethics:

1. **No fabricated or decorative statistics.**  
2. **Distinguish** illustrative mockups, pilot results, and verified outcomes — in UI and copy.  
3. **No sole causation** (“we ended the foster care crisis”). Prefer “contributes,” “helps communities,” “supports.”  
4. **Families are not leads.** Support forms ≠ sales.  
5. **Don’t hero Village360**; strengthen family and community agency.  
6. **Avoid save/rescue/fix families** language.  
7. **Submission ≠ acceptance** for launches; say so on Bring Here.  
8. **Faith partnership with open access** — no denominational gatekeeping in public positioning.  
9. **Local adaptation with integrity** — not unrestricted white-label.  
10. Mockup partner logos / photos in design files are **not** proof — README already notes this; keep that discipline in production.

---

## 11. Next.js implementation checklist (prioritized sprints)

### Sprint A — Structure & trust

- [ ] Add `docs/SITE_STRATEGY.md` as source of truth (this file)  
- [ ] Create `/the-movement` route (can start from `PlaceholderPage` then real copy)  
- [ ] Update `SiteHeader` nav: The Movement · Model · Programs · Impact · Resources · About  
- [ ] Split `/join` into clear audience sections (anchors: `#partners`, `#volunteer`, `#families`)  
- [ ] Implement shared `EvidenceLabel` component  
- [ ] Contact routing plan (even mailto: segments before full forms)  

### Sprint B — Conversion MVP

- [ ] Real copy: Model, Bring Here, Join, About  
- [ ] Bring Here form → email or Formspark/Getform/Basin + thank-you state  
- [ ] Family support form endpoint (separate)  
- [ ] Mini Village Kit PDF in `/public` + Resources landing  
- [ ] Confirm every CTA has destination + owner + follow-up  

### Sprint C — SEO/AEO baseline

- [ ] `sitemap.ts`, `robots.ts`  
- [ ] Organization + WebPage JSON-LD helpers  
- [ ] `/llms.txt`  
- [ ] OG image template  
- [ ] First 3 Learn articles (prevention, kinship, “what is a village”)  

### Sprint D — Authority & partners

- [ ] Impact framework page (honest structure)  
- [ ] Programs page with movement framing  
- [ ] Launch a Village long-form page  
- [ ] Newsletter signup (progress & awareness)  
- [ ] Scholarship nomination form  

### Sprint E — Systems

- [ ] CRM/email segmentation  
- [ ] Readiness assessment  
- [ ] Analytics events  
- [ ] A11y pass  
- [ ] Idea board (lightweight)  

---

## 12. Copy snippets ready to reuse

**Movement declaration:** We believe the foster care crisis cannot be answered by the foster care system alone.

**Village definition (Kit):** A village is not just a group of caring people. A village is a connected support system — belonging, consistency, shared responsibility, practical support, emotional safety, and sustainable rhythms of care.

**Pledge (posture, not legal):** See families through dignity rather than deficit; support prevention rather than wait for crisis; share responsibility without trying to control; show up consistently and honestly; listen to local and lived wisdom; learn from what works and what does not.

**Closing institutional line:** You do not need to build the whole movement. You only need to begin building your part of the village.

---

## 13. Asset map (Desktop Website folder)

| Asset | Use |
| --- | --- |
| `Village360_Movement_Website_Roadmap.docx` | Messaging + page briefs (primary) |
| `Mini Village Kit.docx/.pdf` | Lead magnet + definitions + 30-day plan |
| `Village360 Website Needs.docx` | Newsletter, scholarship form, idea board |
| Pathway / Model / Impact PNGs | Visual reference only — simplify for production; do not paste busy mockups wholesale |

---

*Last updated: 2026-08-11 — align code and copy to this doc; revise when pilot metrics or legal/licensing language is finalized.*
