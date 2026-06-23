# KURO → OBRA Rebrand Audit

> Prepared: 2026-06-23  
> Scope: full codebase, no node_modules, no .next, no .git  
> Purpose: factual inventory before any code is touched

---

## 1. Stack and Structure

### Framework & tooling

| Item | Value |
|---|---|
| Framework | Next.js 15.3.2 (App Router) |
| Output mode | Static export (`output: 'export'`, `trailingSlash: true`) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3.4.17 + PostCSS / Autoprefixer |
| Animation | Framer Motion v12.38.0 |
| React | v19.0.0 |
| Images | `unoptimized: true` (static export constraint) |
| Analytics | Plausible (opt-in, env var) |
| Form backend | Configurable via env var (`NEXT_PUBLIC_FORM_ENDPOINT`) |

### Key folder/file tree

```
KURO/
├── app/
│   ├── layout.tsx              # Root layout: fonts, header, footer, analytics
│   ├── page.tsx                # Home page (7 sections, all content hardcoded)
│   ├── not-found.tsx           # 404 page
│   ├── brief/page.tsx          # Contact/brief form page
│   ├── packages/page.tsx       # Packages detail page
│   ├── process/page.tsx        # Process timeline page
│   ├── studio/page.tsx         # Studio / about page
│   └── privacy/page.tsx        # Privacy policy page
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx      # Fixed nav, mobile overlay, wordmark
│   │   └── SiteFooter.tsx      # Footer with marquee, links, copyright
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero poster with jersey card
│   │   ├── CTASection.tsx      # Reusable CTA block (used on 4 pages)
│   │   ├── ComparisonTable.tsx # Package feature comparison table
│   │   ├── PackageCard.tsx     # Individual package card
│   │   └── ProcessTimeline.tsx # 6-stage process list
│   ├── forms/
│   │   └── BriefForm.tsx       # Contact form with validation
│   └── ui/
│       ├── AnimatedReveal.tsx  # Scroll-triggered fade/rise wrapper
│       ├── Button.tsx          # Link/button with variant system
│       ├── Container.tsx       # Max-width wrapper (default 1440px, wide 1600px)
│       ├── GraphicTile.tsx     # Coloured tile with pattern options
│       ├── ImagePlaceholder.tsx# Placeholder for real jersey photos
│       ├── MarqueeStrip.tsx    # Scrolling ticker strip
│       ├── MetadataLine.tsx    # Inline metadata tags with separator
│       ├── Rule.tsx            # Styled <hr>
│       ├── Section.tsx         # Padded section wrapper
│       ├── SectionLabel.tsx    # Section eyebrow label
│       ├── SpecList.tsx        # Label/value list (used for timelines)
│       ├── StatementBlock.tsx  # Large coloured statement panel
│       ├── StatusTag.tsx       # "AVAILABLE NOW" / "COMING SOON" pill
│       └── TextureLayer.tsx    # Absolute noise/halftone/paper overlay
│
├── lib/
│   ├── metadata.ts             # All SEO/OG/Twitter metadata centrally defined
│   └── utils.ts                # Single `cx()` class-merge utility
│
├── styles/
│   └── globals.css             # Tailwind directives + :root vars + utility classes
│
├── public/
│   └── images/
│       └── placeholders/       # Empty (only .gitkeep) — NO real images exist yet
│
├── tailwind.config.ts          # Full design-token config
├── next.config.ts              # Static export, trailing slash, unoptimized images
├── package.json                # name: "kuro-website"
└── .env.example                # NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_FORM_ENDPOINT, NEXT_PUBLIC_PLAUSIBLE_DOMAIN
```

---

## 2. Design Tokens

Tokens are defined in **two places** that mirror each other exactly — `tailwind.config.ts` (for Tailwind utility classes) and `styles/globals.css` (as CSS custom properties on `:root`). They must both be updated.

### Colours

Defined in `tailwind.config.ts → theme.extend.colors` and mirrored as `--token` in `styles/globals.css :root`.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#161512` | Primary dark / text |
| `black` | `#0E0D0B` | Deepest black |
| `coal` | `#1D1C19` | Button hover dark |
| `soot` | `#2A2823` | Dark surface alt |
| `paper` | `#F3EBDD` | Warm off-white section bg |
| `cream` | `#F6F1E8` | Default page background |
| `bone` | `#FCFAF7` | Cards / form fields |
| `sand` | `#E4CFA8` | Warm mid-tone |
| `sun` | `#E7A93B` | Accent gold / CTA bg |
| `coral` | `#D96B57` | Primary brand accent |
| `terracotta` | `#B85C3A` | Deeper warm accent |
| `ember` | `#A9473A` | Hover/link accent |
| `sky` | `#8FB7C9` | Blue tone (defined, not heavily used) |
| `sea` | `#5F8F95` | Package 02 / teal accent |
| `mint` | `#A8C3AE` | Package 03 bg, studio "IS" panel |
| `olive` | `#7B8460` | Package 03 / earthy accent |
| `lilac` | `#C5B6D6` | Purple accent, stage 04 |
| `smoke` | `#5E574C` | Secondary text |
| `dust` | `#8B8174` | Tertiary text |
| `haze` | `#C9C0AF` | Muted label |
| `edge` | `#DCD2BD` | Borders / dividers |

### Font families

Defined in `tailwind.config.ts → theme.extend.fontFamily`:

| Token | Stack |
|---|---|
| `font-sans` | `var(--font-inter)`, Inter, system-ui, -apple-system, sans-serif |
| `font-serif` | `var(--font-serif)`, Instrument Serif, Georgia, serif |

### Spacing

Defined in `tailwind.config.ts → theme.extend.spacing`:

| Token | Value |
|---|---|
| `side-desktop` | `64px` |
| `side-mobile` | `24px` |

### Max widths

| Token | Value |
|---|---|
| `max-w-site` | `1600px` |

### Type-scale utilities

Defined in `styles/globals.css @layer utilities` as CSS classes (not Tailwind tokens):

| Class | Description |
|---|---|
| `.type-poster` | `clamp(3.75rem, 14vw, 13rem)`, weight 800, uppercase |
| `.type-display` | `clamp(2.75rem, 8.5vw, 7rem)`, weight 800, uppercase |
| `.type-chapter` | `clamp(1.875rem, 4.5vw, 4rem)`, weight 700 |
| `.type-headline` | `clamp(1.5rem, 3vw, 2.5rem)`, weight 700 |
| `.type-lede` | `clamp(1.125rem, 1.85vw, 1.5rem)`, weight 400 |
| `.type-body` | `1rem`, weight 400 |
| `.type-label` | `0.6875rem`, tracking `0.16em`, weight 700, uppercase |
| `.type-tag` | `0.625rem`, tracking `0.2em`, weight 700, uppercase |
| `.type-serif` | Instrument Serif, italic, weight 400 |

### Animations

Defined in `tailwind.config.ts`:

| Name | Duration | Use |
|---|---|---|
| `animate-marquee` | 38s linear | Ticker strips |
| `animate-drift` | 9s ease-in-out | Jersey card float |
| `animate-slow` | 11s ease-in-out | Slow float variation |

---

## 3. Fonts

| Font | Weights / Styles | Loaded via | CSS variable |
|---|---|---|---|
| **Inter** | All (variable font) | `next/font/google` in `app/layout.tsx` | `--font-inter` |
| **Instrument Serif** | 400 normal + 400 italic | `next/font/google` in `app/layout.tsx` | `--font-serif` |

**No local font files exist.** Both fonts are fetched from Google Fonts at build time via Next.js font optimisation (they are inlined/self-hosted by Next.js automatically).

The variables are injected on `<html>` via `className={`${inter.variable} ${instrumentSerif.variable}`}` and consumed by Tailwind's `font-sans` / `font-serif` utilities and the `var(--font-*)` references in `globals.css`.

---

## 4. Colours in Use

### Token-based (Tailwind classes) — the vast majority

Used as `bg-{token}`, `text-{token}`, `border-{token}` throughout all TSX files. The most frequently used:

| Colour | Primary uses |
|---|---|
| `cream` / `bg-cream` | Default page bg, header scroll state, section backgrounds |
| `ink` / `text-ink` | Body text, buttons (primary variant), dark sections |
| `paper` / `bg-paper` | Alternate warm section background |
| `bone` / `bg-bone` | Form fields, package card body, spec boxes |
| `coral` / `bg-coral` | CTA buttons, nav logo circle, package 01, 404 page, section accents |
| `sun` / `bg-sun` | CTA section, gold accents, sticker on hero jersey card |
| `ember` / `text-ember` | Hover states, serif accent colour |
| `sea` / `bg-sea` | Package 02, process stage 03, mobile nav on some pages |
| `olive` / `bg-olive` | Package 03, process stage 06 |
| `mint` / `bg-mint` | Studio "IS" panel, process stage 05, status tags |
| `smoke` / `text-smoke` | Secondary/muted copy throughout |
| `coal` | Button hover dark (`hover:bg-coal`) |

### Hardcoded colour values — two instances, both shadows

These are not token-driven and will not update if tokens change:

| File | Line | Value | Note |
|---|---|---|---|
| `components/sections/HeroSection.tsx` | 128 | `rgba(169,71,58,0.45)` | Box shadow on hero jersey card — matches `ember` |
| `components/sections/PackageCard.tsx` | 48 | `rgba(0,0,0,0.18)` | Hover shadow on package cards — pure black |

### In `globals.css` only

| Rule | Value |
|---|---|
| `::selection` background | `var(--ink)` |
| `::selection` colour | `var(--sun)` |
| `.tex-paper` gradient stop 1 | `rgba(231, 169, 59, 0.10)` — matches `sun` |
| `.tex-paper` gradient stop 2 | `rgba(184, 92, 58, 0.08)` — matches `terracotta` |
| `.tape::before` background | `rgba(231, 169, 59, 0.55)` — matches `sun` |
| `.tex-pitch` stripe | `rgba(0, 0, 0, 0.04)` — neutral |
| `.tex-grain` SVG `feColorMatrix` | `0 0 0 0.18 0` — neutral grain opacity |

---

## 5. Every KURO Reference

Grouped by type. Total files affected: **12**.

### Brand name as display text

| File | Line | Context |
|---|---|---|
| `components/layout/SiteHeader.tsx` | 73 | Wordmark in nav: `KURO` |
| `components/layout/SiteHeader.tsx` | 64 | `aria-label="KURO — home"` |
| `components/layout/SiteHeader.tsx` | 76 | Sub-label: `@deptkuro` |
| `components/layout/SiteFooter.tsx` | 33 | Footer wordmark: `KURO` |
| `components/layout/SiteFooter.tsx` | 12 | Marquee item: `'KURO'` |
| `components/layout/SiteFooter.tsx` | 110 | Copyright: `© 2026 KURO · DEPARTMENT KURO` |
| `components/layout/SiteFooter.tsx` | 39 | Tagline: `Department KURO — a dedicated jersey department for the event.` |
| `components/layout/SiteFooter.tsx` | 72 | Link label: `KURO Studio · LinkedIn` |
| `app/not-found.tsx` | 36 | Button label: `Return to KURO →` |

### In-copy brand mentions (body text / headings)

| File | Lines | Mentions |
|---|---|---|
| `app/page.tsx` | 63, 80, 90, 103, 246, 252, 272, 276, 309, 328, 348, 386, 387 | 13 instances — "KURO designs…", "WHAT KURO MAKES", "WHY KURO", "HOW TO WORK WITH KURO", "Tell KURO about the event", "Department KURO starts here" |
| `app/packages/page.tsx` | 14, 77, 90, 92, 114, 201 | 6 instances — "Three ways to work with KURO", "DEPARTMENT KURO", "KURO delivers…" |
| `app/process/page.tsx` | 14, 63, 124 | 3 instances — "How KURO runs…", "Department KURO runs the whole chain", "What KURO needs to start" |
| `app/studio/page.tsx` | 11, 42, 51, 57, 70, 88, 102, 112, 116, 167 | 10 instances — "KURO is…", "KURO IS NOT", "DEPARTMENT KURO", "KURO Studio" |
| `app/brief/page.tsx` | 10, 37, 52 | 3 instances — "Tell KURO about the event", "DEPARTMENT KURO" |
| `app/privacy/page.tsx` | 7, 13, 17, 21 | 4 instances — "How KURO handles…", "KURO collects…", "KURO uses…", "KURO may use…" |
| `components/sections/HeroSection.tsx` | 55, 100, 116, 130, 143 | 5 instances — "DEPARTMENT KURO · HAMPSHIRE", body copy, `aria-label`, `KURO · LTD` |
| `components/sections/CTASection.tsx` | 22 | Default prop: `headline = 'Tell KURO about the event.'` |
| `components/sections/ProcessTimeline.tsx` | 17, 103 | "KURO writes a one-page brief", `KURO · STAGE {n}` |
| `components/forms/BriefForm.tsx` | 94, 99, 102, 261, 284, 287 | "KURO will reply…", "Anything else KURO should know", email links |
| `components/ui/ImagePlaceholder.tsx` | 27, 82 | Default `label = 'KURO JERSEY'`, `KURO · LTD` stamp |

### Metadata / SEO

| File | Line | Value |
|---|---|---|
| `lib/metadata.ts` | 6 | `siteName: 'KURO'` |
| `lib/metadata.ts` | 8 | `defaultTitle: 'KURO — Limited Edition Football Jerseys'` |
| `lib/metadata.ts` | 12 | `twitter: '@deptkuro'` |
| `lib/metadata.ts` | 20 | Title template: `` `%s — KURO` `` |
| `lib/metadata.ts` | 33 | OG image alt: `'KURO — Limited Edition Football Jerseys'` |

### Email addresses (`deptkuro` domain)

All 6 emails/social handles point to `deptkuro.com` / `@deptkuro`. Files:

- `components/layout/SiteHeader.tsx` (lines 177, 180, 182)
- `components/layout/SiteFooter.tsx` (lines 49, 52, 57, 62)
- `components/sections/CTASection.tsx` (lines 64, 67)
- `components/forms/BriefForm.tsx` (lines 99, 102, 284, 287)
- `app/brief/page.tsx` (lines 62, 65, 68, 73)
- `app/studio/page.tsx` (lines 145, 149, 152, 158)
- `app/privacy/page.tsx` (lines 57, 60)

### Env vars / config

| File | Line | Value |
|---|---|---|
| `.env.example` | 2 | `NEXT_PUBLIC_SITE_URL=https://deptkuro.com` |
| `lib/metadata.ts` | 3 | Fallback: `'https://deptkuro.com'` hardcoded in source |

### `package.json` / `package-lock.json`

| File | Field | Value |
|---|---|---|
| `package.json` | `name` | `"kuro-website"` |
| `package-lock.json` | `name` (×2) | `"kuro-website"` |

### Working directory / folder name

The repository root directory is named **`KURO`**. The git repo is checked out at `/home/user/KURO`. This is not a code change but will need to be renamed or re-cloned.

---

## 6. Brand Assets

**⚠ No real image files exist.** The `public/` tree contains only:

```
public/
└── images/
    └── placeholders/
        └── .gitkeep   ← empty marker file
```

### What the code expects but is missing

| Expected path | Referenced in | Notes |
|---|---|---|
| `/images/og-image.jpg` | `lib/metadata.ts` line 11 | OG social share image — **does not exist** |
| Any jersey photos | `components/ui/ImagePlaceholder.tsx` | All jersey imagery is currently CSS-rendered placeholders |

### What serves as the "logo" today

The logo is entirely CSS — no SVG or image file:

**SiteHeader** (`SiteHeader.tsx` lines 67–76):
```tsx
<span className="w-7 h-7 rounded-full bg-coral grid place-items-center text-cream text-[11px] font-extrabold">
  K
</span>
<span className="font-extrabold tracking-tight text-lg">KURO</span>
```

**SiteFooter** (`SiteFooter.tsx` lines 29–33):
```tsx
<span className="w-9 h-9 rounded-full bg-coral grid place-items-center text-cream text-sm font-extrabold">
  K
</span>
<span className="font-extrabold text-2xl tracking-tight">KURO</span>
```

No favicon file exists in `public/`. Next.js will serve its default favicon. **A favicon must be created for the rebrand.**

---

## 7. Meta and SEO

All metadata is centralised in `lib/metadata.ts` and consumed via `buildMetadata()`. Individual pages call `buildMetadata({ title, description })` to override.

### Global defaults (`lib/metadata.ts`)

| Field | Value |
|---|---|
| `metadataBase` | `https://deptkuro.com` (env var, with hardcoded fallback) |
| `title.default` | `KURO — Limited Edition Football Jerseys` |
| `title.template` | `%s — KURO` |
| `description` | `KURO designs and manufactures limited edition football jerseys for festivals, tours, brand activations and live events. Made to remember.` |
| `openGraph.type` | `website` |
| `openGraph.siteName` | `KURO` |
| `openGraph.image.url` | `https://deptkuro.com/images/og-image.jpg` |
| `openGraph.image.dimensions` | 1200 × 630 |
| `openGraph.image.alt` | `KURO — Limited Edition Football Jerseys` |
| `twitter.card` | `summary_large_image` |
| `twitter.site` | `@deptkuro` |
| `robots` | `index: true`, `follow: true` |

### Per-page title overrides

| Page | `<title>` |
|---|---|
| Home | `KURO — Limited Edition Football Jerseys` (no template) |
| Packages | `Packages — KURO` |
| Process | `Process — KURO` |
| Studio | `Studio — KURO` |
| Brief | `Start a brief — KURO` |
| Privacy | `Privacy — KURO` |
| 404 | `404 — KURO` |

### Missing / not present

- No `<link rel="icon">` in layout (no favicon file)
- No `<link rel="manifest">` / `site.webmanifest`
- No structured data / JSON-LD
- No `<link rel="canonical">` explicitly set
- No `hreflang`
- Plausible script added only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` env var is set

---

## 8. Pages and Components

### Pages (App Router)

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — 7 sections: Hero, Marquee, Positioning, What KURO Makes, Who It Is For, Why KURO, Packages Preview, CTA |
| `/packages` | `app/packages/page.tsx` | Three-package detail page with cards, comparison table, "how to choose" Q&A blocks, CTA |
| `/process` | `app/process/page.tsx` | Six-stage process timeline, timing spec list, requirements list, CTA |
| `/studio` | `app/studio/page.tsx` | About / "KURO IS / IS NOT" panels, operating model, contact card, CTA |
| `/brief` | `app/brief/page.tsx` | Contact form page with sticky pitch copy and `BriefForm` |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy — 4 items hardcoded in page file |
| `/*` (404) | `app/not-found.tsx` | 404 — coral full-screen, large "404", return button |

### Layout components

| Component | File | Description |
|---|---|---|
| `SiteHeader` | `components/layout/SiteHeader.tsx` | Fixed top nav, scroll-aware bg, mobile full-screen overlay menu |
| `SiteFooter` | `components/layout/SiteFooter.tsx` | Dark footer with marquee, wordmark, contact, nav links, copyright |

### Section components

| Component | File | Description |
|---|---|---|
| `HeroSection` | `components/sections/HeroSection.tsx` | Poster headline, animated jersey card, sub-copy, CTA buttons |
| `CTASection` | `components/sections/CTASection.tsx` | Reusable full-width CTA block, configurable tone/headline/CTA |
| `ComparisonTable` | `components/sections/ComparisonTable.tsx` | Feature matrix for three packages |
| `PackageCard` | `components/sections/PackageCard.tsx` | Single package card with coloured header, feature list, CTA |
| `ProcessTimeline` | `components/sections/ProcessTimeline.tsx` | Six-step `<ol>`, each step coloured by tone |

### Form components

| Component | File | Description |
|---|---|---|
| `BriefForm` | `components/forms/BriefForm.tsx` | Controlled form: name, role, email, event, volume (radio), date, message. Client-side validation. Submits to `NEXT_PUBLIC_FORM_ENDPOINT`. |

### UI primitives

| Component | Description |
|---|---|
| `AnimatedReveal` | Scroll-triggered fade + rise, respects `prefers-reduced-motion` |
| `Button` | Polymorphic link/button with 5 variants: `primary`, `secondary`, `ghost`, `sun`, `coral` |
| `Container` | Responsive max-width wrapper (default 1440px, `wide` 1600px) |
| `GraphicTile` | Coloured panel with optional stripes / dots / pitch patterns |
| `ImagePlaceholder` | Temporary jersey image stand-in with number, label, edition mark |
| `MarqueeStrip` | Infinite scrolling ticker; tone-configurable |
| `MetadataLine` | Horizontal label row with separator glyphs |
| `Rule` | Styled `<hr>` in hair/heavy × dark/light variants |
| `Section` | Vertical-padded section wrapper |
| `SectionLabel` | Eyebrow label with optional accent chip |
| `SpecList` | Label/value row list with dividers |
| `StatementBlock` | Large coloured block with grain overlay |
| `StatusTag` | "AVAILABLE NOW" / "COMING SOON" pill with dot indicator |
| `TextureLayer` | Absolute noise/halftone/paper layer via CSS |

---

## 9. Copy Inventory

**All written content is hardcoded in TSX component/page files.** There is no CMS, no Markdown, no JSON data file, no i18n layer.

| Content area | Location |
|---|---|
| Taglines, hero copy | `app/page.tsx` (inline JSX) |
| Positioning and "Why" copy | `app/page.tsx` (inline JSX) |
| Package names, taglines, descriptions, feature lists | `app/packages/page.tsx` (arrays defined at top of file) |
| Process stage titles, descriptions | `components/sections/ProcessTimeline.tsx` (`steps` array) |
| Timeline spec (durations) | `app/process/page.tsx` (`timelineSpec` array) |
| Requirements list | `app/process/page.tsx` (`toStart` array) |
| Studio "IS / IS NOT" lists | `app/studio/page.tsx` (inline JSX `<ul>`) |
| Privacy policy copy | `app/privacy/page.tsx` (`items` array) |
| Brief form labels, placeholder text | `components/forms/BriefForm.tsx` |
| Form success/error messages | `components/forms/BriefForm.tsx` |
| Nav link labels | `components/layout/SiteHeader.tsx` (`navLinks` array) |
| Footer taglines, copyright | `components/layout/SiteFooter.tsx` (inline JSX) |
| Marquee strip items | Called inline at each use site (home, packages, process, studio, footer) |
| Default CTA headline | `components/sections/CTASection.tsx` (default prop) |
| Page metadata descriptions | `lib/metadata.ts` + each page's `buildMetadata()` call |
| 404 message | `app/not-found.tsx` (inline JSX) |

---

## Rebrand Flags

Items that will need special attention:

### 🔴 Hard — embedded in many files

1. **"KURO" and "Department KURO" appear in 12 files across ~70 lines** — mostly body copy, headings, and labels. All are hardcoded strings; there is no centralised brand-name constant to swap.

2. **`deptkuro.com` domain** is both a hardcoded fallback in `lib/metadata.ts` (line 3) and the sole value in `.env.example`. It appears as the base URL for all OG and metadata. A new domain must replace it in both places, and any deployed `.env` must be updated.

3. **Email `hello@deptkuro.com`** appears in 7 files across 14+ lines — all hardcoded. No single constant to update.

4. **`@deptkuro` social handle** appears in 5 files — header, footer, CTASection, brief page, studio page. All hardcoded.

### 🟡 Medium — structural / config

5. **`package.json` `name` field** is `"kuro-website"`. Low impact (not user-facing) but should be updated for consistency.

6. **Root directory named `KURO`**. The repo will need to be renamed or re-cloned to `/obra` or similar.

7. **Twitter metadata** (`twitter.site`) is hardcoded as `'@deptkuro'` in `lib/metadata.ts` — easy single-line fix once handle is confirmed.

8. **`lib/metadata.ts` hardcoded fallback URL** (`'https://deptkuro.com'`) — this is a secondary guard but will serve bad URLs if `NEXT_PUBLIC_SITE_URL` is not set in the new environment.

### 🟡 Medium — brand assets

9. **No real logo or favicon files exist.** The "K" logo circle is pure CSS in `SiteHeader` and `SiteFooter`. Swapping to "O" (or any other mark) is a small CSS change, but a proper SVG or image logo would need to be created and `<Image>` / `<img>` tags added.

10. **OG image `/images/og-image.jpg` is missing.** The metadata references it, but the file does not exist in `public/`. A new branded OG image needs to be created.

### 🟠 Watch — inline styles (not colour-related, but worth noting)

11. **Shadow values in `HeroSection.tsx` (line 128) and `PackageCard.tsx` (line 48)** use `rgba()` literals derived from `ember` and pure black respectively. If the colour palette changes substantially, these won't update automatically.

12. **Type scale, textures, and animation classes** in `globals.css` are brand-neutral — they have no KURO-specific content, but the `::selection` colours (`ink` / `sun`) and `.tex-paper` gradient stops will shift automatically when token values are changed.

### 🟢 Easy — single source of truth already

13. **All colour tokens** live in `tailwind.config.ts` + `globals.css :root`. Both files mirror each other and must be updated together. There is no other token file.

14. **All SEO metadata defaults** live in `lib/metadata.ts`. The `siteMetadata` object is the single place to update `siteName`, `defaultTitle`, `defaultDescription`, `ogImage`, and `twitter`.

15. **Title template** (`%s — KURO`) in `lib/metadata.ts` line 20 — one-line fix.
