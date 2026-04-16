# CuePoint Marketing Website

Business/marketing site for **CuePoint** — an AI-native assessment tool that embeds inside Canvas LMS via LTI 1.3.

Live at: [cuepoint-canvas-website](https://github.com/avichawlachecode/cuepoint-canvas-website) (deployed on Vercel from `main`).

## Tech stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Lucide React** for icons
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
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── globals.css           # Tailwind + theme tokens
│   ├── features/page.tsx     # AI features, question types, STEM editor
│   ├── how-it-works/page.tsx # 5-step walkthrough
│   ├── security/page.tsx     # Pillars, controls, FERPA, architecture
│   ├── pricing/page.tsx      # Tiers + FAQ
│   └── contact/page.tsx      # Demo request form
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── section.tsx
└── content/                  # Reference docs
```

## Navigation

- **Navbar**: Features, How It Works, Pricing, Request Demo (CTA)
- **Footer**
  - Product: Features, How It Works, Pricing
  - Resources: Security, Documentation, Case Studies, Blog, FAQ
  - Company: About, Contact, Privacy Policy, Terms of Service

## Design system

Defined in `src/app/globals.css` via `@theme`:

| Token | Value |
| --- | --- |
| `brand-600` | `#2563eb` (primary) |
| `accent-*` | purple scale |
| `surface` | white |
| `surface-alt` | `#f8fafc` |
| `surface-dark` | `#0f172a` |
| `text` | `#0f172a` |
| `text-muted` | `#64748b` |
| `border` | `#e2e8f0` |

## Deployment

- Hosted on **Vercel** as a separate project from the CuePoint product tool.
- Pushes to `main` trigger a production deploy.
- Root directory in Vercel is set to repo root (this directory).

## Git workflow

- Feature branch: `claude/cuepoint-website-setup-PnCFi`
- Production branch: `main`
- Both branches are kept in sync during active development.

## Contributing

Whenever you change the site (nav, pages, styles, structure), **update this README** in the same commit so it stays accurate.

## TODO

- [ ] Real logos and brand assets in `public/`
- [ ] Product screenshots / demo GIFs
- [ ] "Trusted by" institution logos
- [ ] Wire up contact form (currently client-side only)
- [ ] Blog / case studies pages
- [ ] Per-page SEO metadata
- [ ] Analytics (Plausible, PostHog, or similar)
- [ ] Favicon and Open Graph images
- [ ] Privacy Policy and Terms of Service pages
