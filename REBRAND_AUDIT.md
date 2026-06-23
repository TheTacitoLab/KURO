# REBRAND AUDIT: KURO → OBRA

**Date:** 2026-06-23  
**Audited by:** Claude Code  
**Status:** Pre-rebrand snapshot. No code has been changed.

---

## 1. Stack and Structure

### Framework and Build Tools

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.3.2 |
| Language | TypeScript | 5.x |
| UI library | React | 19.0.0 |
| Styling | Tailwind CSS | 3.4.17 |
| Animation | Framer Motion | 12.38.0 |
| CSS post-processing | PostCSS + Autoprefixer | 8.4.49 |
| Linting | ESLint (next/core-web-vitals) | 9.x |
| Output mode | Static export (`output: 'export'`) | — |

Next.js is configured for static export (`next.config.ts`: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`). The site deploys as flat HTML/CSS/JS with no server-side runtime.

### Folder Tree

```
KURO/
├── app/                          # Next.js App Router pages and root layout
│   ├── layout.tsx                # Root layout — fonts, header, footer, analytics
│   ├── page.tsx                  # Homepage (7 sections)
│   ├── not-found.tsx             # 404 page
│   ├── brief/
│   │   └── page.tsx              # Brief form page
│   ├── packages/
│   │   └── page.tsx              # Packages / pricing page
│   ├── process/
│   │   └── page.tsx              # Process / timeline page
│   ├── studio/
│   │   └── page.tsx              # Studio / about page
│   └── privacy/
│       └── page.tsx              # Privacy policy
│
├── components/
│   ├── forms/
│   │   └── BriefForm.tsx         # Multi-field contact/brief form
│   ├── layout/
│   │   ├── SiteHeader.tsx        # Fixed nav with mobile overlay
│   │   └── SiteFooter.tsx        # Footer with contact + social links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Full-screen animated hero
│   │   ├── CTASection.tsx        # Configurable call-to-action block
│   │   ├── PackageCard.tsx       # Individual package detail card
│   │   ├── ComparisonTable.tsx   # 11-feature × 3-package comparison table
│   │   └── ProcessTimeline.tsx   # 6-stage project timeline list
│   └── ui/
│       ├── AnimatedReveal.tsx    # Scroll-triggered fade-in (Framer Motion)
│       ├── Button.tsx            # 3-variant button (primary / secondary / ghost)
│       ├── Container.tsx         # Max-width 1440px layout wrapper
│       ├── ImagePlaceholder.tsx  # Grid-pattern placeholder (no real images yet)
│       ├── MetadataLine.tsx      # Slash-separated metadata label row
│       ├── Rule.tsx              # Horizontal rule (hair / heavy weight, light / dark theme)
│       ├── Section.tsx           # Section wrapper with vertical padding
│       ├── SectionLabel.tsx      # Small uppercase eyebrow label
│       ├── SpecList.tsx          # Key–value list display
│       └── StatusTag.tsx         # "Available now" / "Coming soon" badge
│
├── lib/
│   ├── metadata.ts               # Central SEO / Open Graph configuration
│   └── utils.ts                  # cx() class-name utility
│
├── public/
│   └── images/
│       └── placeholders/
│           └── .gitkeep          # No real image assets committed yet
│
├── styles/
│   └── globals.css               # Tailwind base + CSS custom properties + typography utilities
│
├── tailwind.config.ts            # Design tokens and theme extension
├── next.config.ts                # Static export config
├── tsconfig.json                 # TypeScript config (strict, path alias @/*)
├── postcss.config.mjs            # PostCSS (tailwindcss + autoprefixer)
├── .eslintrc.json                # ESLint config
└── .env.example                  # Environment variable template
```

---

## 2. Design Tokens

All tokens are defined in two places and are identical — **change both when rebranding**.

### Tailwind config (`tailwind.config.ts`)

```ts
colors: {
  black:    '#000000',
  carbon:   '#050505',
  ink:      '#0B0B0B',   // default body background
  graphite: '#111111',
  steel:    '#1A1A1A',
  ash:      '#2A2A2A',   // primary border colour
  mid:      '#4A4A4A',
  mute:     '#777777',   // secondary text
  hair:     '#D8D8D8',
  soft:     '#F2F2F2',
  paper:    '#FAFAFA',   // light section background
  white:    '#FFFFFF',   // primary text
}

fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}

spacing: {
  'side-desktop': '80px',
  'side-mobile':  '32px',
}

maxWidth: {
  site: '1440px',
}
```

### CSS custom properties (`styles/globals.css`, lines 5–18)

Mirrors the Tailwind palette exactly as CSS variables:

```css
:root {
  --black:    #000000;
  --carbon:   #050505;
  --ink:      #0B0B0B;
  --graphite: #111111;
  --steel:    #1A1A1A;
  --ash:      #2A2A2A;
  --mid:      #4A4A4A;
  --mute:     #777777;
  --hair:     #D8D8D8;
  --soft:     #F2F2F2;
  --paper:    #FAFAFA;
  --white:    #FFFFFF;
}
```

### Typography scale (`styles/globals.css`, lines 61–103)

Five Tailwind utility classes define the full type hierarchy:

| Class | Size | Weight | Transform | Line-height | Tracking |
|---|---|---|---|---|---|
| `.type-display` | clamp(3rem, 9vw, 8.5rem) | 800 | uppercase | 0.9 | −0.025em |
| `.type-chapter` | clamp(1.75rem, 4vw, 3.5rem) | 700 | — | 1.05 | −0.03em |
| `.type-lede` | clamp(1.125rem, 2.5vw, 1.5rem) | 400 | — | 1.35 | −0.01em |
| `.type-body` | 1rem | 400 | — | 1.65 | 0em |
| `.type-label` | 0.6875rem (11px) | 700 | uppercase | 1 | 0.12em |

**Note:** The body background colour (`bg-ink`, `#0B0B0B`) and default text colour (`text-white`, `#FFFFFF`) are set globally in `app/layout.tsx` via Tailwind classes, not in CSS. Update both the Tailwind config and globals.css `:root` block if the palette changes.

---

## 3. Fonts

### In use

Only one typeface is used across the entire site: **Inter**.

### Loading method

Loaded via Next.js font optimisation (`next/font/google`) in `app/layout.tsx`:

```ts
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
```

Applied to the `<html>` element as `className={inter.className}`.

Next.js automatically downloads and self-hosts the font at build time — there is **no Google Fonts `<link>` tag in the HTML**. No `.woff2` or `.ttf` files are committed to the repo.

### Fallback stack

Declared in `tailwind.config.ts` and `styles/globals.css`:

```
'Inter', system-ui, -apple-system, sans-serif
```

### ⚑ Rebrand note

If OBRA uses a different typeface, update:
1. `app/layout.tsx` — swap the `next/font/google` import
2. `tailwind.config.ts` → `theme.extend.fontFamily.sans`
3. `styles/globals.css` → `body { font-family: ... }` (line 34)

---

## 4. Colours in Use

The palette is entirely monochromatic (black → white). There are **no accent colours** anywhere in the codebase.

### Background colours (Tailwind classes)

| Class | Hex | Used on |
|---|---|---|
| `bg-black` | #000000 | Hero, footer, packages section, 404, CTA block |
| `bg-ink` | #0B0B0B | Default body, brief page, privacy page, most page sections |
| `bg-graphite` | #111111 | Packages preview section, package detail cards, process spec section |
| `bg-paper` | #FAFAFA | Positioning section on homepage (light contrast break) |

### Text colours (Tailwind classes)

| Class | Hex | Used for |
|---|---|---|
| `text-white` | #FFFFFF | Primary headings, active nav links, CTA text |
| `text-hair` | #D8D8D8 | Hero headline accent, body copy on dark backgrounds |
| `text-mute` | #777777 | Secondary/supporting body copy, inactive nav links |
| `text-ash` | #2A2A2A | Tertiary labels, metadata, footer copyright |
| `text-mid` | #4A4A4A | Body text on light (`bg-paper`) sections |
| `text-steel` | #1A1A1A | 404 numeral |
| `text-ink` | #0B0B0B | Text on light backgrounds (button label, skip link) |

### Border / divider colours

| Class | Hex | Used for |
|---|---|---|
| `border-ash` | #2A2A2A | All section borders, dividers, table rows |
| `border-white` | #FFFFFF | Focus states, active form fields, selected volume option |
| `border-transparent` | — | Header when not scrolled |

### Fill / indicator colours

| Class | Hex | Used for |
|---|---|---|
| `bg-white` | #FFFFFF | Primary button, "included" indicator in comparison table |
| `bg-ash` | #2A2A2A | "Not included" indicator in comparison table |
| `bg-mute` | #777777 | Bullet point in process requirements list |
| `bg-steel/30` | #1A1A1A at 30% | Alternating row tint in comparison table |

### Hardcoded hex and style values (⚑ rebrand risk)

These are not using the design token system and must be found and updated manually:

| File | Location | Value | Context |
|---|---|---|---|
| `components/sections/HeroSection.tsx` | line 37–39 | `linear-gradient(to right, #fff 1px, transparent 1px), ...` | Background grid lines in hero |
| `components/sections/HeroSection.tsx` | line 40 | `backgroundSize: '80px 80px'` | Grid spacing |
| `app/page.tsx` | line 83–84 | `style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}` | "WHAT KURO MAKES" heading — inline style, not a type class |
| `app/page.tsx` | line 210 | `border-l-[3px]` | Arbitrary Tailwind value for accent border |

---

## 5. Every KURO Reference

Complete case-insensitive audit. Files listed with every line that contains "kuro".

### `package.json`
- **Line 2:** `"name": "kuro-website"`

### `lib/metadata.ts`
- **Line 3:** `process.env.NEXT_PUBLIC_SITE_URL || 'https://deptkuro.com'`
- **Line 6:** `siteName: 'KURO'`
- **Line 8:** `defaultTitle: 'KURO — Black Label Jersey Studio'`
- **Line 12:** `twitter: '@deptkuro'`
- **Line 20:** `template: \`%s — KURO\``
- **Line 26:** `title: 'KURO — Black Label Jersey Studio'`
- **Line 33:** `alt: 'KURO — Black Label Jersey Studio'`
- **Line 40:** `title: 'KURO — Black Label Jersey Studio'`

### `.env.example`
- **Line 2:** `NEXT_PUBLIC_SITE_URL=https://deptkuro.com`

### `components/layout/SiteHeader.tsx`
- **Line 64:** `aria-label="KURO — home"`
- **Line 67:** `KURO` (visible nav logo text)
- **Line 164:** `hello@deptkuro.com` (email link in mobile menu)
- **Line 169:** `@deptkuro` (social handle in mobile menu)

### `components/layout/SiteFooter.tsx`
- **Line 15:** `KURO` (footer logo text)
- **Line 48:** `Department KURO. A dedicated department for limited edition jerseys.`
- **Line 58:** `KURO. 黒.` (bottom attribution line)
- **Line 22:** `hello@deptkuro.com` (email link)
- **Line 29:** `https://instagram.com/deptkuro` (Instagram URL)
- **Line 41:** `LinkedIn. KURO Studio` (LinkedIn display text)

### `components/sections/HeroSection.tsx`
- **Line 46:** `DEPARTMENT KURO` (hero metadata line, uppercase)

### `components/sections/CTASection.tsx`
- **Line 13:** `headline = 'Tell KURO about the event.'` (default prop)
- **Line 38:** `hello@deptkuro.com` (email link)

### `components/forms/BriefForm.tsx`
- **Line 91:** `KURO will reply within two working days.` (success message)
- **Line 96:** `hello@deptkuro.com` (email link in success state)
- **Line 255:** `Anything else KURO should know` (form field label)
- **Line 275:** `hello@deptkuro.com` (email link in error state)

### `app/page.tsx`
- **Line 12:** `title: 'KURO — Black Label Jersey Studio'` (metadata)
- **Line 53:** `<p className="type-label text-mid mb-5">Department KURO</p>`
- **Line 55:** `Department KURO is the operating model.`
- **Line 86–87:** `KURO` / `MAKES.` (section heading: "WHAT KURO MAKES.")
- **Line 191:** `Why KURO.` (section heading)
- **Line 211:** `KURO removes the chain.`
- **Line 227:** `Department KURO`
- **Line 229:** `Department KURO exists for the teams...`
- **Line 251:** `Three ways to work with KURO.` (section heading)
- **Line 260:** `Designed and manufactured by KURO. Delivered to the client.`
- **Line 274:** `KURO designs, makes, sells and ships.`

### `app/packages/page.tsx`
- **Line 12:** `title: 'Packages'` / **Line 14:** `Three ways to work with KURO.` (metadata description)
- **Line 72:** `Three ways to work with KURO.` (h1)
- **Line 82:** `Department KURO`
- **Line 83:** `Department KURO can sit beside...`
- **Line 121:** `Design and manufacture. KURO delivers finished jerseys.`
- **Line 193:** `Not sure where the project fits? Tell KURO about the event. KURO will point to the package.`

### `app/process/page.tsx`
- **Line 13:** metadata description: `How KURO runs a project from discovery to close.`
- **Line 50:** `How KURO runs a project.` (h1)
- **Line 61:** `Department KURO`
- **Line 62:** `Department KURO gives the client a dedicated operating unit...`
- **Line 107:** `What KURO needs to start.`

### `components/sections/ProcessTimeline.tsx`
- **Line 16:** `KURO writes a one-page brief.` (Discovery step description)

### `app/studio/page.tsx`
- **Line 12:** metadata description: `KURO is a black label jersey studio.`
- **Line 35:** `KURO is a black label jersey studio.`
- **Line 45:** `KURO runs lean by design.`
- **Line 62:** `Department KURO`
- **Line 64:** `Department KURO is the working model.`
- **Line 90:** `hello@deptkuro.com`
- **Line 96:** `https://instagram.com/deptkuro`
- **Line 109:** `LinkedIn. KURO Studio`

### `app/brief/page.tsx`
- **Line 12:** metadata description: `Tell KURO about the event.`
- **Line 29:** `Tell KURO about the event.` (h1)
- **Line 39:** `Department KURO starts here.`

### `app/privacy/page.tsx`
- **Line 9:** metadata description: `How KURO handles your information.`
- **Line 27:** `KURO collects the information you provide...`
- **Line 36:** `KURO uses your email to reply to your brief.`
- **Line 45:** `KURO may use Plausible Analytics...`
- **Line 65:** `hello@deptkuro.com`

### `app/not-found.tsx`
- **Line 26:** `Return to KURO` (button label)

### Summary counts

| Category | Count |
|---|---|
| Source files containing "kuro" | 14 |
| Visible UI copy instances | ~35 |
| Email address (`hello@deptkuro.com`) | 7 (in 5 files) |
| Social handle (`@deptkuro`) | 4 (in 3 files) |
| Domain in env/config | 1 |
| Package name (`kuro-website`) | 1 |

**⚑ Most awkward to rebrand:** `hello@deptkuro.com` and `@deptkuro` are hardcoded in five separate files (header, footer, CTA, form, studio page). There is no single constant — each must be found and updated individually. The domain `deptkuro.com` is set via `NEXT_PUBLIC_SITE_URL` in `.env.example` and read in `lib/metadata.ts` — the env var itself is clean, but the default fallback string `'https://deptkuro.com'` is hardcoded on line 3 of `metadata.ts`.

---

## 6. Brand Assets

### Current state

**No real brand assets are committed.** The `public/` directory contains only:

```
public/
└── images/
    └── placeholders/
        └── .gitkeep
```

### Referenced but missing assets

| Path | Referenced in | Notes |
|---|---|---|
| `/images/og-image.jpg` | `lib/metadata.ts` line 11 | Expected 1200×630px OG image — does not exist |

### Image placeholder system

`components/ui/ImagePlaceholder.tsx` renders a CSS grid-line pattern in place of real images. It is used on the homepage (`app/page.tsx` line 123) for a 16:7 aspect-ratio "jersey lab" image.

### The 黒 glyph

The Japanese character **黒** (meaning "black") is used as a logo mark in two places:
- `SiteHeader.tsx` line 66: `<span className="text-mute mr-2" aria-hidden="true">黒 ·</span>`
- `SiteFooter.tsx` line 13–14 and line 58: `黒 ·` / `黒.`

It is inline Unicode text, not an SVG or image file. This character is deliberately brand-specific and will need a decision: remove, replace with an OBRA equivalent, or swap for a different mark.

### No favicon

There is no `favicon.ico`, `icon.png`, `apple-touch-icon.png`, or `site.webmanifest` in the `public/` directory. Next.js App Router auto-serves a default favicon. **OBRA will need a favicon created.**

---

## 7. Meta and SEO

All SEO metadata is centralised in **`lib/metadata.ts`**. Page-level overrides use `buildMetadata()` with partial `Metadata` objects.

### Site-wide defaults

| Field | Current value |
|---|---|
| Site name | `KURO` |
| Base URL | `https://deptkuro.com` (via `NEXT_PUBLIC_SITE_URL`, fallback hardcoded) |
| Default title | `KURO — Black Label Jersey Studio` |
| Title template | `%s — KURO` |
| Default description | `Limited edition football jerseys made to remember. Designed and manufactured for festivals, tours, brand activations and live events.` |
| OG type | `website` |
| OG image | `{BASE_URL}/images/og-image.jpg` (1200×630) — **file does not exist yet** |
| OG alt text | `KURO — Black Label Jersey Studio` |
| Twitter card | `summary_large_image` |
| Twitter site | `@deptkuro` |
| Twitter title | `KURO — Black Label Jersey Studio` |
| Robots | index: true, follow: true |

### Page-level titles

| Route | `<title>` rendered |
|---|---|
| `/` | `KURO — Black Label Jersey Studio` |
| `/packages` | `Packages — KURO` |
| `/process` | `Process — KURO` |
| `/studio` | `Studio — KURO` |
| `/brief` | `Start a brief — KURO` |
| `/privacy` | `Privacy — KURO` |
| `/404` | `404 — KURO` |

### Page-level descriptions

| Route | Meta description |
|---|---|
| `/` | `Limited edition football jerseys made to remember...` |
| `/packages` | `Three ways to work with KURO. Start with the jersey. Add as much of the chain as needed.` |
| `/process` | `Six stages. Brief to ship. Always the same. How KURO runs a project from discovery to close.` |
| `/studio` | `KURO is a black label jersey studio. Two operators. One studio. Specialists added per project.` |
| `/brief` | `Tell KURO about the event. One short form. Reply within two working days.` |
| `/privacy` | `How KURO handles your information.` |
| `/404` | `The page is not here. The studio is.` |

### Structured data / schema.org

None implemented.

### Web manifest / PWA

None. No `site.webmanifest` or `manifest.json`.

### Favicon

None committed. Next.js serves its default.

### Analytics

Plausible Analytics is supported but currently disabled. It loads only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set in the environment (`app/layout.tsx` lines 28–34).

### `lang` attribute

Set to `"en"` on `<html>` in `app/layout.tsx` line 21.

---

## 8. Pages and Components

### Pages

| Route | File | What it does |
|---|---|---|
| `/` | `app/page.tsx` | 7-section homepage: hero → positioning → what it makes → who it is for → why KURO → packages preview → CTA |
| `/packages` | `app/packages/page.tsx` | Full packages page: intro → comparison table → 3 package cards → "how to choose" → CTA |
| `/process` | `app/process/page.tsx` | Process page: intro → 6-stage timeline → timeline spec + requirements → CTA |
| `/studio` | `app/studio/page.tsx` | Studio/about page: intro → operating model + contact details → CTA |
| `/brief` | `app/brief/page.tsx` | Brief intake page: intro copy → BriefForm |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy: 5 sections (collect, use, analytics, cookies, contact) |
| `404` | `app/not-found.tsx` | 404 page: numeral + headline + two buttons |

### Layout components

| Component | File | What it does |
|---|---|---|
| `SiteHeader` | `components/layout/SiteHeader.tsx` | Fixed top nav: logo link, desktop nav links, mobile full-screen overlay with animated stagger |
| `SiteFooter` | `components/layout/SiteFooter.tsx` | Footer: logo, email, Instagram, LinkedIn, copyright, privacy link |

### Section components

| Component | File | What it does |
|---|---|---|
| `HeroSection` | `components/sections/HeroSection.tsx` | Full-screen hero with animated word-reveal headline and background grid |
| `CTASection` | `components/sections/CTASection.tsx` | Reusable CTA block; headline, subline, and email link are props with defaults |
| `PackageCard` | `components/sections/PackageCard.tsx` | Package card with number, name, tagline, description, status badge, feature list, CTA button |
| `ComparisonTable` | `components/sections/ComparisonTable.tsx` | Table of 11 features across 3 packages with square included/excluded indicators |
| `ProcessTimeline` | `components/sections/ProcessTimeline.tsx` | Ordered list of 6 project stages (number, title, timeframe, description) |

### UI primitives

| Component | File | What it does |
|---|---|---|
| `AnimatedReveal` | `components/ui/AnimatedReveal.tsx` | Scroll-triggered fade+rise wrapper using Framer Motion InView |
| `Button` | `components/ui/Button.tsx` | Polymorphic button (renders `<a>` or `<button>`); variants: primary (white fill), secondary (white border), ghost |
| `Container` | `components/ui/Container.tsx` | `max-w-site` centred wrapper with `px-side-mobile` / `px-side-desktop` |
| `Rule` | `components/ui/Rule.tsx` | `<hr>`-style divider; props: `weight` (hair/heavy), `theme` (dark/light) |
| `Section` | `components/ui/Section.tsx` | `<section>` wrapper with `py-20 md:py-28` vertical rhythm |
| `SectionLabel` | `components/ui/SectionLabel.tsx` | `.type-label` eyebrow text above headings |
| `MetadataLine` | `components/ui/MetadataLine.tsx` | Slash-separated inline metadata (used in hero) |
| `StatusTag` | `components/ui/StatusTag.tsx` | "Available now" / "Coming soon" label badge |
| `SpecList` | `components/ui/SpecList.tsx` | Key–value list for timeline specs |
| `ImagePlaceholder` | `components/ui/ImagePlaceholder.tsx` | CSS grid-pattern placeholder div with label/sublabel text |

### Forms

| Component | File | What it does |
|---|---|---|
| `BriefForm` | `components/forms/BriefForm.tsx` | 7-field form (name*, role, email*, event/brand*, volume* radio, date, message); client-side validation; POSTs to `NEXT_PUBLIC_FORM_ENDPOINT` |

---

## 9. Copy Inventory

**All written content is hardcoded directly in component JSX.** There is no CMS, no Markdown files, no JSON data files, no i18n layer.

### Where each category of copy lives

| Content type | Location | File(s) |
|---|---|---|
| Site name, tagline, descriptions | Central constants | `lib/metadata.ts` |
| Page titles and meta descriptions | Per-page `buildMetadata()` calls | Each `app/*/page.tsx` |
| Hero headline and sub-copy | Hardcoded JSX | `components/sections/HeroSection.tsx` |
| Homepage section headings + body | Hardcoded JSX | `app/page.tsx` |
| Package names, features, taglines | JavaScript arrays + JSX | `app/packages/page.tsx`, `components/sections/ComparisonTable.tsx`, `components/sections/PackageCard.tsx` |
| Process stage titles, timeframes, descriptions | JavaScript array | `components/sections/ProcessTimeline.tsx` (lines 10–53) |
| Timeline spec table | JavaScript array | `app/process/page.tsx` (lines 18–25) |
| Requirements list | JavaScript array | `app/process/page.tsx` (lines 27–33) |
| Studio about copy | Hardcoded JSX | `app/studio/page.tsx` |
| Contact details (email, handles, location) | Hardcoded JSX | `components/layout/SiteHeader.tsx`, `components/layout/SiteFooter.tsx`, `components/sections/CTASection.tsx`, `app/studio/page.tsx`, `components/forms/BriefForm.tsx` |
| Brief form labels and success/error messages | Hardcoded JSX | `components/forms/BriefForm.tsx` |
| Privacy policy text | Hardcoded JSX | `app/privacy/page.tsx` |
| 404 message | Hardcoded JSX | `app/not-found.tsx` |
| Navigation link labels | JavaScript array | `components/layout/SiteHeader.tsx` (lines 10–14) |
| Footer tagline and copyright | Hardcoded JSX | `components/layout/SiteFooter.tsx` |
| CTA defaults (headline, subline) | Default prop values | `components/sections/CTASection.tsx` (lines 13–14) |

### ⚑ Rebrand risk: distributed contact details

The email address `hello@deptkuro.com` and the Instagram/social handle `@deptkuro` appear hardcoded in **5 separate files**:

1. `components/layout/SiteHeader.tsx` (mobile menu)
2. `components/layout/SiteFooter.tsx`
3. `components/sections/CTASection.tsx`
4. `components/forms/BriefForm.tsx` (success state and error state)
5. `app/studio/page.tsx`

There is no shared constant for these. Recommend extracting them to `lib/siteConfig.ts` before doing the rebrand so there is one place to change.

---

## Rebrand Checklist Summary

The following is a complete inventory of **what must change** for KURO → OBRA. Nothing is inherently difficult — the codebase is clean — but nothing is centralised either. Most brand text is scattered across JSX.

### High priority (affects every page render)

- [ ] `lib/metadata.ts` — `siteName`, `defaultTitle`, title template, OG title/alt, Twitter handle, fallback domain
- [ ] `components/layout/SiteHeader.tsx` — logo text "KURO", `aria-label`, mobile menu email + handle
- [ ] `components/layout/SiteFooter.tsx` — logo text, tagline, email, Instagram URL + handle, LinkedIn display name, bottom attribution
- [ ] `.env.example` (and actual `.env`) — `NEXT_PUBLIC_SITE_URL`

### Per-page copy

- [ ] `app/page.tsx` — section headings ("Why KURO", "What KURO Makes", "Three ways to work with KURO", "Department KURO" paragraphs)
- [ ] `app/packages/page.tsx` — h1, subheadline, package descriptions, "Tell KURO" copy
- [ ] `app/process/page.tsx` — h1 ("How KURO runs a project"), section labels, requirements heading
- [ ] `app/studio/page.tsx` — all body copy, contact details, email + Instagram URLs
- [ ] `app/brief/page.tsx` — h1, subline, tagline
- [ ] `app/privacy/page.tsx` — all body copy, contact email
- [ ] `app/not-found.tsx` — "Return to KURO" button label

### Component copy

- [ ] `components/sections/HeroSection.tsx` — "DEPARTMENT KURO" metadata line
- [ ] `components/sections/CTASection.tsx` — default `headline` prop, hardcoded email
- [ ] `components/forms/BriefForm.tsx` — form field label, success message ("KURO will reply"), error message email
- [ ] `components/sections/ProcessTimeline.tsx` — Discovery step: "KURO writes a one-page brief"

### Infrastructure / config

- [ ] `package.json` — `"name": "kuro-website"`
- [ ] Create OBRA favicon + OG image (nothing committed yet)
- [ ] Decide what to do with the **黒** (Japanese for "black") glyph used as a logo mark
- [ ] Register new domain and social handles; update all hardcoded URLs and handles
- [ ] Consider extracting email + social handles to a shared `lib/siteConfig.ts` constant before doing a find-and-replace

### Nice to have

- [ ] Consider whether the monochromatic black/white palette stays the same for OBRA or changes — if it changes, update both `tailwind.config.ts` and `:root` in `globals.css`
- [ ] Fix the one hardcoded inline style (`app/page.tsx` line 83) — replace with a `.type-*` class
- [ ] Add a `site.webmanifest` with the OBRA brand name
- [ ] Add `schema.org` structured data appropriate for OBRA
