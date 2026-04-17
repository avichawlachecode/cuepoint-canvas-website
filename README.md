# CuePoint Marketing Website

Business/marketing site for **CuePoint** — an AI-native assessment tool that embeds inside Canvas LMS via LTI 1.3.

Live at: [cuepoint-canvas-website](https://github.com/avichawlachecode/cuepoint-canvas-website) (deployed on Vercel from `main`).

## Tech stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Lucide React** for icons
- **next/font** — Inter, Inter Tight (display), JetBrains Mono (mono)
- **TypeScript**

No backend, no database, no auth — purely a static marketing site.

## Local development

```bash
npm install
npm run dev
```

Dev server runs on [http://localhost:3001](http://localhost:3001).

## Build

```bash
npm run build
```

Produces a static export in `out/`.

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home — hero, bento features, comparison, stepper, stats, testimonial, CTA
│   ├── layout.tsx            # Root layout (fonts, Navbar + Footer)
│   ├── globals.css           # Tailwind + theme tokens + utility classes (aurora, dot-grid, gradient, etc.)
│   ├── features/page.tsx     # AI features, question types, platform grid, STEM callout
│   ├── how-it-works/page.tsx # Stepper + detailed walkthrough + rollout timeline
│   ├── security/page.tsx     # 6 pillars, controls table, FERPA list, architecture
│   ├── pricing/page.tsx      # 3 tiers (Institution highlighted), FAQ accordion
│   └── contact/page.tsx      # Demo form with floating labels + segmented interest picker
├── components/
│   ├── navbar.tsx            # Sticky glass nav, logo dot, Sign in + gradient Request Demo CTA
│   ├── footer.tsx            # Newsletter strip, 4 columns, socials, oversized wordmark
│   ├── section.tsx           # Section / SectionLabel (chip) / SectionTitle / SectionDescription
│   ├── ui.tsx                # PrimaryButton, GhostButton, Chip, Stat, BentoCard, StepDot, Eyebrow
│   └── product-mock.tsx      # EditorMock + bento mini UIs (question, analytics, STEM, gradebook, security)
└── content/                  # Reference docs
```

## Navigation

- **Navbar**: Features, How It Works, Pricing · Sign in · Request Demo (gradient CTA)
- **Footer**
  - Product: Features, How It Works, Pricing
  - Resources: Security, Documentation, Case Studies, Blog, FAQ
  - Company: About, Contact, Privacy Policy, Terms of Service
  - Newsletter signup strip + social icons + oversized wordmark at bottom

## Design system

Defined in `src/app/globals.css` via `@theme`. Aesthetic reference: Linear, Notion, Framer, Vercel, Arc Browser.

### Colors

| Token | Value | Notes |
| --- | --- | --- |
| `brand-600` | `#4f46e5` | Primary indigo |
| `brand-500` | `#6366f1` | |
| `accent-500` | `#8b5cf6` | Violet accent |
| `electric-600` | `#2563eb` | Paired with indigo in gradients |
| `lime-400` | `#a3e635` | AI/active highlights |
| `surface` | `#fafaf9` | Warm off-white |
| `surface-alt` | `#f4f4f2` | Section alternation |
| `surface-dark` | `#0a0a0f` | Near-black w/ blue tint |
| `surface-dark-alt` | `#12131a` | Nested dark surfaces |
| `text` | `#0f172a` | |
| `text-muted` | `#64748b` | |
| `border` | `#e4e4e7` | |

### Typography

- **Display**: `Inter Tight` (weights 500–800), tight tracking (-0.03em) — headlines, section titles
- **Body**: `Inter` — default sans-serif
- **Mono**: `JetBrains Mono` — chips, stats, code, eyebrow labels

### Utility classes (globals.css)

- `.text-gradient` — indigo → violet → electric blue text gradient
- `.font-display`, `.font-mono`
- `.aurora` — animated gradient blob background for hero sections
- `.dot-grid`, `.dot-grid-light` — 24px dotted grid background
- `.card-hairline` — gradient 1px border card
- `.glass` — backdrop-blur + transparency (sticky navbar when scrolled)
- `.btn-shine` — gradient buttons with hover shine sweep
- `.shadow-soft`, `.shadow-soft-lg` — layered elevation shadows
- `.link-underline` — animated underline
- `.marquee` — infinite horizontal scroll (logo strip)

### Section rhythm

Sections alternate between `surface` (default), `surface-alt`, and `surface-dark` for dark sections. Set via `<Section alt>` or `<Section dark>`.

## Reusable components (`components/ui.tsx`)

- `<PrimaryButton href>` — gradient pill button with shine sweep
- `<GhostButton href dark?>` — bordered pill
- `<Chip icon variant="light|dark|brand">` — small rounded label
- `<Stat value label accent?>` — oversized numeral for ROI strip
- `<BentoCard tone="light|dark|gradient">` — feature bento cell
- `<StepDot n active dark?>` — numbered step indicator (01 → 05)
- `<Eyebrow>` — mono uppercase label

Home page bento grid uses small product-mock components (`components/product-mock.tsx`): `EditorMock`, `MiniQuestion`, `MiniAIChat`, `MiniGradeSync`, `MiniSTEM`, `MiniSecurity`.

## Deployment

- Hosted on **Vercel** as a separate project from the CuePoint product tool.
- Pushes to `main` trigger a production deploy.
- Root directory in Vercel is set to repo root (this directory).
- Fonts are loaded via `next/font/google` and self-hosted at build time.

## Git workflow

- Feature branch: `claude/cuepoint-website-setup-PnCFi`
- Production branch: `main`
- Both branches are kept in sync during active development.

## Contributing

Whenever you change the site (nav, pages, styles, structure), **update this README** in the same commit so it stays accurate.

## TODO

- [ ] Real logos and brand assets in `public/`
- [ ] Replace `EditorMock` with real product screenshots / demo GIFs
- [ ] "Trusted by" institution logos (marquee placeholder in hero)
- [ ] Wire up contact form (currently client-side only)
- [ ] Blog / case studies pages
- [ ] Per-page SEO metadata
- [ ] Analytics (Plausible, PostHog, or similar)
- [ ] Favicon and Open Graph images
- [ ] Privacy Policy and Terms of Service pages
