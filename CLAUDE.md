# CuePoint Marketing Website

## What this is
Business/marketing website for **CuePoint** — an AI-native assessment tool that embeds inside Canvas LMS via LTI 1.3. This site lives under `website/` in the `avichawlachecode/cuepoint` repo on branch `claude/cuepoint-website-C1rEw`.

The **product codebase** (the actual CuePoint tool) lives at the repo root on the `main` branch. This website is a separate Next.js project — do NOT modify files outside `website/`.

## Deployment
- **Hosted on Vercel** as a separate project (`cuepoint_canvas_website`)
- **Deploy hook** triggers builds from branch `claude/cuepoint-website-C1rEw`
- Root directory in Vercel is set to `website`
- The product tool has its own separate Vercel project on `main`

## Tech stack
- **Next.js 15** (App Router, static export via `output: "export"`)
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Lucide React** for icons
- **TypeScript**
- No backend, no database, no auth — purely a static marketing site

## Project structure
```
website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home — hero, problem, solution, features, comparison table, ROI, CTA
│   │   ├── layout.tsx            # Root layout with Navbar + Footer
│   │   ├── globals.css           # Tailwind + custom theme (brand colors, surface, text)
│   │   ├── features/page.tsx     # AI features, 14 question types, STEM editor, platform grid
│   │   ├── how-it-works/page.tsx # 5-step walkthrough (Install → Author → Assess → Grade → Analyze)
│   │   ├── security/page.tsx     # 6 pillars, controls table, FERPA checklist, architecture
│   │   ├── pricing/page.tsx      # 3 tiers (Pilot free / Institution / Multi-year), FAQ
│   │   └── contact/page.tsx      # Demo request form with role/interest dropdowns
│   ├── components/
│   │   ├── navbar.tsx            # Sticky nav, mobile hamburger, Request Demo CTA
│   │   ├── footer.tsx            # 3-column footer (Product, Resources, Company)
│   │   └── section.tsx           # Reusable Section, SectionLabel, SectionTitle, SectionDescription
│   └── content/                  # Reference docs transferred from the product codebase
│       ├── architecture/         # Backend architecture diagrams (Mermaid) + leadership overview
│       └── CUEPOINT_DOCUMENTATION.md
├── public/                       # Static assets (empty — needs logos/screenshots)
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts                # Static export config
└── .gitignore
```

## Design system / theme
Defined in `globals.css` via `@theme`:
- **Brand:** blue scale (`brand-50` through `brand-900`), primary is `brand-600` (#2563eb)
- **Accent:** purple scale (`accent-400` through `accent-600`)
- **Surfaces:** `surface` (white), `surface-alt` (#f8fafc), `surface-dark` (#0f172a)
- **Text:** `text` (#0f172a), `text-muted` (#64748b)
- **Border:** `border` (#e2e8f0)

Sections alternate between white, `surface-alt`, and `surface-dark` (for dark sections).

## What CuePoint (the product) does — for content accuracy
- Canvas LMS-integrated assessment tool via LTI 1.3
- **14 question types**: MCQ, multiple select, T/F, short answer, numerical, matching, ordering, open-ended, file upload, FIB, essay, categorization, math expression, layered
- **AI-powered** via Anthropic Claude: question generation, open-ended grading with rationale, natural-language analytics Q&A, voice-to-LaTeX
- **STEM content editor**: MathLive WYSIWYG, CodeMirror, chemistry notation, matrices, voice dictation
- **Canvas integration**: LTI 1.3 OIDC, grade passback (AGS), roster sync (NRPS), deep linking
- **Multi-tenant**: per-institution PostgreSQL schema isolation
- **Mastery learning**: Bloom's taxonomy, learning objectives, configurable thresholds
- **Assessment groups**: composite scoring across multiple assessments
- **Auto-grading**: partial credit, tolerance ranges, deterministic + AI grading
- **Analytics dashboard**: score distributions, question-level performance, at-risk identification
- **Security**: rate limiting, Zod validation, HSTS, CSP, httpOnly cookies, nonce replay prevention

## Primary competitor
**Atomic Assessments (by Atomic Jolt)** — built on the Learnosity assessment engine. Pre-LLM era tool with AI retrofitted. CuePoint's positioning: "AI-native, not AI-retrofit." Key wedges: faster authoring, AI grading with rationale, flat pricing (no per-item/per-attempt metering), direct vendor relationship (Atomic is a reseller on Learnosity), voice-to-LaTeX, natural-language analytics.

## What's missing / TODO
- [ ] Real logos and brand assets in `public/`
- [ ] Product screenshots / demo GIFs for hero and feature sections
- [ ] "Trusted by" section — replace placeholder institution names with real ones
- [ ] Contact form backend (currently client-side only, shows a success message)
- [ ] Blog / case studies pages
- [ ] SEO metadata per page (only root layout has meta)
- [ ] Analytics (Plausible, PostHog, or similar)
- [ ] Favicon and Open Graph images
- [ ] Resources section links (Documentation, FAQ, Blog) currently point to `#`
- [ ] Privacy Policy and Terms of Service pages

## Git workflow
- Branch: `claude/cuepoint-website-C1rEw`
- Push to this branch to trigger Vercel deploy via deploy hook
- Do NOT merge to `main` — the product and website are separate Vercel projects
- Commit messages should be descriptive, focused on website changes
