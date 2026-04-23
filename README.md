# CuePoint Marketing Website

Business/marketing site for **CuePoint** — an AI-native assessment tool that embeds inside Canvas LMS via LTI 1.3.

Live at: [cuepoint-canvas-website](https://github.com/avichawlachecode/cuepoint-canvas-website) (deployed on Vercel from `main`).

## Tech stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Lucide React** for icons
- **next/font** — Plus Jakarta Sans (display + body), JetBrains Mono (mono)
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
│   ├── page.tsx              # Home wrapper (server)
│   ├── home-client.tsx       # Home sections: Hero, Research, Video Tour, Features, Question Types, Why It Works (3 illustrated cards), FAQ, CTA
│   ├── layout.tsx            # Root layout (fonts, Navbar + Footer)
│   ├── globals.css           # Tailwind + theme tokens + utility classes (aurora, dot-grid, gradient, etc.)
│   ├── features/page.tsx     # AI features, question types, platform grid, STEM callout
│   ├── how-it-works/page.tsx # Stepper + detailed walkthrough + rollout timeline
│   ├── security/page.tsx     # 6 pillars, controls table, FERPA list, architecture
│   ├── pricing/page.tsx      # 3 tiers (Institution highlighted), FAQ accordion
│   └── contact/page.tsx      # Demo form with segmented interest picker
├── components/
│   ├── navbar.tsx            # Sticky glass nav with gradient logo + Request Demo CTA
│   ├── footer.tsx            # 4 columns, socials, minimalist bottom bar
│   ├── section.tsx           # Section / SectionLabel (chip) / SectionTitle / SectionDescription
│   ├── ui.tsx                # PrimaryButton, GhostButton, Chip, Stat, BentoCard, StepDot, Eyebrow
│   └── product-mock.tsx      # EditorMock + mini UI snippets (unused on home since redesign, kept for reuse)
└── content/                  # Reference docs
```

## Navigation

- **Navbar**: Features, Who It's For, Pricing · Request Demo (gradient CTA)
- **Footer**
  - Product: Features, Who It's For, Pricing
  - Resources: Documentation, Research, Security, API Reference, Support
  - Company: About, Contact, Privacy, Terms
  - Socials (Twitter, LinkedIn, GitHub) + dot-grid background

## Design system

Defined in `src/app/globals.css` via `@theme`. Aesthetic reference: Linear, Notion, Framer, Vercel, Arc Browser.

### Colors

| Token | Value | Notes |
| --- | --- | --- |
| `brand-600` | `#00687a` | Primary teal |
| `brand-500` | `#06b6d4` | Mid-cyan |
| `brand-700` | `#055561` | Deep teal |
| `accent-500` | `#57dffe` | Bright cyan accent (pairs with brand-600 in gradients) |
| `lime-400` | `#a3e635` | AI highlight |
| `surface` | `#faf8ff` | Warm purple-tinted off-white |
| `surface-alt` | `#f2f3ff` | Section alternation |
| `surface-container` | `#eaedff` | |
| `surface-dark` | `#131b2e` | Deep navy-purple |
| `surface-dark-alt` | `#1a2540` | Nested dark surfaces |
| `text` | `#131b2e` | |
| `text-muted` | `#45464d` | |
| `border` | `#c6c6cd` | |
| `border-soft` | `#e0e1e8` | |

### Typography

- **Display + Body**: `Plus Jakarta Sans` (weights 300–800), tracking -0.02em
- **Mono**: `JetBrains Mono` — chips, stats, citations, eyebrow labels

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
