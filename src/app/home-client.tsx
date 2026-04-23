"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import {
  ArrowRight,
  Play,
  Check,
  Sparkles,
  CheckCircle,
  ChevronRight,
  Timer,
  GitBranch,
  Target,
  Radar,
  CircleDot,
  SquareCheckBig,
  FlipHorizontal,
  MessageSquare,
  Calculator,
  ArrowLeftRight,
  ListOrdered,
  Pencil,
  Paperclip,
  Type,
  NotebookPen,
  LayoutGrid,
  FunctionSquare,
  GitFork,
  Plus,
  Minus,
} from "lucide-react";

/* ─────────────────────────── HERO ─────────────────────────── */

const LOGOS = [
  { abbr: "S", name: "Stanford University", color: "#8C1515" },
  { abbr: "M", name: "MIT", color: "#A31F34" },
  { abbr: "UC", name: "UC Berkeley", color: "#003262" },
  { abbr: "H", name: "Harvard", color: "#A51C30" },
  { abbr: "Y", name: "Yale", color: "#00356B" },
  { abbr: "P", name: "Princeton", color: "#E77500" },
  { abbr: "C", name: "Columbia", color: "#B9D9EB" },
  { abbr: "Ω", name: "Cornell", color: "#B31B1B" },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-6 pb-28 pt-32 text-white md:pt-40">
      <div className="aurora" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[6rem]">
          Assessment isn&apos;t the
          <br />
          end of learning.
          <br />
          <span className="text-gradient">It IS the learning.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
          Embed AI-generated questions directly inside your LMS pages — where
          students are already reading. Instant feedback. Mastery tracked per
          objective. Essays graded with written rationale.{" "}
          <strong className="font-semibold text-white/90">
            No separate portal. No extra tab. Right on cue.
          </strong>
        </p>

        {/* Logo marquee */}
        <div className="mt-20">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Trusted by leading institutions
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <div className="marquee flex items-center gap-12 whitespace-nowrap">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 opacity-50"
                >
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path
                      d="M11 1L21 5V13C21 18.5 16.5 23.5 11 25C5.5 23.5 1 18.5 1 13V5L11 1Z"
                      fill={logo.color}
                      fillOpacity="0.9"
                      stroke="white"
                      strokeOpacity="0.2"
                      strokeWidth="0.75"
                    />
                    <text
                      x="11"
                      y="16"
                      textAnchor="middle"
                      fontFamily="serif"
                      fontWeight="700"
                      fontSize={logo.abbr.length > 1 ? "7" : "10"}
                      fill="white"
                    >
                      {logo.abbr}
                    </text>
                  </svg>
                  <span className="font-display text-base font-semibold tracking-tight text-white">
                    {logo.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── RESEARCH STRIP ─────────────────────────── */

const RESEARCH_STATS = [
  { value: "55%", label: "failure rate reduction", citation: "Freeman et al., 2014" },
  { value: "2×", label: "learning gains", citation: "Hake, 1998" },
  { value: "33%", label: "achievement gap closed", citation: "Theobald et al., 2020" },
  { value: "+33%", label: "test performance", citation: "Deslauriers et al., 2019" },
];

function ResearchSection() {
  return (
    <section className="bg-surface-alt px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid items-center gap-8 sm:grid-cols-[1fr_auto]">
          <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-text md:text-4xl">
            Active learning is the most evidence-backed
            <br className="hidden md:block" /> approach in higher education.
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-border/50 bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Read the research
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {RESEARCH_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border/30 bg-white p-6 shadow-soft"
            >
              <div className="font-display text-4xl font-extrabold leading-none tracking-tight text-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-text">
                {s.label}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] text-text-muted">
                {s.citation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── VIDEO TOUR ─────────────────────────── */

function VideoTourSection() {
  const [, setPlaying] = useState(false);
  return (
    <section className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text md:text-6xl">
            See it in 2 minutes
          </h2>
        </div>

        <div
          onClick={() => setPlaying(true)}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-surface-dark shadow-soft-lg"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="aurora" />
          <div className="dot-grid absolute inset-0 opacity-50" />

          {/* Browser chrome */}
          <div className="absolute left-0 right-0 top-0 flex h-10 items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span
                key={c}
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: c }}
              />
            ))}
            <div className="mx-4 flex h-5 flex-1 items-center justify-center rounded-full bg-white/[0.06]">
              <span className="font-mono text-[0.65rem] text-white/30">
                canvas.university.edu › courses › intro-physics › pages ›
                week-3
              </span>
            </div>
          </div>

          {/* Inline question mock */}
          <div className="absolute left-1/2 top-14 w-[min(480px,80%)] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-brand-600">
              <Sparkles className="h-2.5 w-2.5" />
              Check-in · Week 3
            </div>
            <p className="mb-3.5 font-display text-sm font-semibold leading-snug text-text">
              A 2kg block slides down a frictionless incline at 30°. What is
              its acceleration?
            </p>
            {["1.2 m/s²", "4.9 m/s²", "9.8 m/s²", "7.8 m/s²"].map((opt, i) => (
              <div
                key={opt}
                className={`mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2 ${
                  i === 1
                    ? "border-[1.5px] border-brand-600/30 bg-gradient-to-r from-brand-600/[0.08] to-accent-500/[0.08]"
                    : "border border-border/20 bg-surface-alt"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                    i === 1
                      ? "bg-gradient-to-br from-brand-600 to-accent-500"
                      : "border-[1.5px] border-border/40"
                  }`}
                >
                  {i === 1 && <Check className="h-2.5 w-2.5 text-white" />}
                </span>
                <span
                  className={`text-xs text-text ${i === 1 ? "font-semibold" : ""}`}
                >
                  {opt}
                </span>
              </div>
            ))}
          </div>

          {/* Play overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-10 [background:linear-gradient(to_top,rgba(19,27,46,0.7)_0%,transparent_50%)]">
            <div className="flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500">
                <Play className="ml-0.5 h-3 w-3 fill-white text-white" />
              </span>
              <span className="font-display text-sm font-bold text-text">
                Watch 2-min tour
              </span>
              <span className="font-mono text-xs text-text-muted">2:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FEATURES ─────────────────────────── */

const FEATURES = [
  {
    icon: Timer,
    label: "Immediate Feedback Loops",
    title: "Feedback in seconds, not weeks",
    description:
      "Check Answer mode, instant auto-grading, AI rubric rationale on essays. Students find out they misunderstood Newton's Third Law now — before they build wrong mental models all week.",
  },
  {
    icon: GitBranch,
    label: "Scaffolded Questioning",
    title: "Tells you WHY, not just IF",
    description:
      "Layered questions present a primary MCQ, then surface an authored follow-up based on the student's answer. Bloom's taxonomy in action — from recall to analysis in a single question.",
  },
  {
    icon: Target,
    label: "Mastery-Based Progression",
    title: "Per-student, per-objective, per-Bloom's level",
    description:
      "Map questions to learning objectives and taxonomy levels. Track who has mastered what. Get the accreditation evidence your next review demands — without manual analysis.",
  },
  {
    icon: Radar,
    label: "At-Risk Identification",
    title: "Notice who's struggling before the midterm",
    description:
      "AI surfaces at-risk students from engagement and mastery signals — not just scores. Ask \"who hasn't mastered momentum yet?\" in plain English. The most important intervention is the early one.",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text md:text-6xl">
            Everything you need.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Each capability maps directly to a finding from the active learning
            literature. AI authors. AI grades. You decide what ships.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-border/30 bg-white p-8 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
                {f.label}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-text">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── QUESTION TYPES ─────────────────────────── */

const QUESTION_TYPES = [
  { icon: CircleDot, label: "Multiple Choice" },
  { icon: SquareCheckBig, label: "Multiple Select" },
  { icon: FlipHorizontal, label: "True / False" },
  { icon: MessageSquare, label: "Short Answer" },
  { icon: Calculator, label: "Numerical" },
  { icon: ArrowLeftRight, label: "Matching" },
  { icon: ListOrdered, label: "Ordering" },
  { icon: Pencil, label: "Open-Ended" },
  { icon: Paperclip, label: "File Upload" },
  { icon: Type, label: "Fill in the Blank" },
  { icon: NotebookPen, label: "Essay" },
  { icon: LayoutGrid, label: "Categorization" },
  { icon: FunctionSquare, label: "Math Expression" },
  { icon: GitFork, label: "Layered" },
];

function QuestionTypesSection() {
  return (
    <section className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
              14 question types.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
              From true/false check-ins to STEM math expressions and layered
              follow-up questions — every type generates from a prompt in
              seconds. Atomic Assessments offers more types. CuePoint has AI
              behind every single one of them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5" />
                AI generates any type
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border/30 bg-white px-4 py-2.5 text-sm font-semibold text-text">
                <CheckCircle className="h-3.5 w-3.5 text-brand-600" />
                AI grades open-ended
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {QUESTION_TYPES.map((t) => (
              <div
                key={t.label}
                className="group flex cursor-default flex-col items-center justify-center gap-2 rounded-2xl border border-border/20 bg-white p-4 shadow-soft transition-all hover:border-transparent hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-500 hover:text-white"
              >
                <t.icon className="h-[18px] w-[18px]" />
                <span className="text-center text-xs font-semibold leading-tight">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HOW IT FLOWS ─────────────────────────── */

/* Reusable browser window chrome */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 280 200"
      className="h-auto w-full max-w-[320px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="18"
        width="260"
        height="160"
        rx="12"
        fill="white"
        stroke="#E4E7EF"
        strokeWidth="1.5"
      />
      <line x1="10" y1="46" x2="270" y2="46" stroke="#E4E7EF" strokeWidth="1.5" />
      <circle cx="28" cy="32" r="4" fill="#FF5F57" />
      <circle cx="42" cy="32" r="4" fill="#FEBC2E" />
      <circle cx="56" cy="32" r="4" fill="#28C840" />
      {children}
    </svg>
  );
}

/* Step 1 — Create with AI: two document cards side-by-side */
function IllustrationCreate() {
  return (
    <BrowserFrame>
      {/* Left card (source) */}
      <rect x="78" y="72" width="58" height="80" rx="8" fill="white" stroke="#E4E7EF" strokeWidth="1.2" />
      <rect x="90" y="88" width="34" height="5" rx="2.5" fill="#131B2E" />
      <rect x="90" y="102" width="28" height="3.5" rx="1.75" fill="#131B2E" fillOpacity="0.2" />
      <rect x="90" y="112" width="32" height="3.5" rx="1.75" fill="#131B2E" fillOpacity="0.2" />

      {/* Right card (generated) */}
      <rect x="144" y="72" width="58" height="80" rx="8" fill="white" stroke="#E4E7EF" strokeWidth="1.2" />
      <rect x="156" y="88" width="34" height="5" rx="2.5" fill="#131B2E" />
      <rect x="156" y="102" width="34" height="3.5" rx="1.75" fill="#131B2E" fillOpacity="0.45" />
      <rect x="156" y="112" width="34" height="3.5" rx="1.75" fill="#131B2E" fillOpacity="0.45" />
      <rect x="156" y="122" width="26" height="3.5" rx="1.75" fill="#131B2E" fillOpacity="0.45" />
      <circle cx="192" cy="142" r="3" fill="#131B2E" fillOpacity="0.2" />
    </BrowserFrame>
  );
}

/* Step 2 — Embed inside LMS: question card with options + check badge */
function IllustrationEmbed() {
  return (
    <BrowserFrame>
      {/* Question card */}
      <rect
        x="68"
        y="62"
        width="144"
        height="100"
        rx="10"
        fill="white"
        stroke="#57DFFE"
        strokeWidth="2"
      />
      {/* 4 option rows */}
      <circle cx="82" cy="80" r="4" stroke="#131B2E" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      <rect x="92" y="77" width="72" height="6" rx="3" fill="#131B2E" fillOpacity="0.12" />

      <circle cx="82" cy="96" r="4" fill="#00687A" />
      <rect x="92" y="93" width="58" height="6" rx="3" fill="#131B2E" fillOpacity="0.22" />

      <circle cx="82" cy="112" r="4" stroke="#131B2E" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      <rect x="92" y="109" width="66" height="6" rx="3" fill="#131B2E" fillOpacity="0.12" />

      <circle cx="82" cy="128" r="4" stroke="#131B2E" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      <rect x="92" y="125" width="54" height="6" rx="3" fill="#131B2E" fillOpacity="0.12" />

      {/* Check badge */}
      <circle cx="196" cy="148" r="13" fill="#00687A" />
      <path
        d="M190 148 l4 4 l8 -9"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BrowserFrame>
  );
}

/* Step 3 — Analyze & Improve: dashboard with 4 mastery rows */
function IllustrationAnalyze() {
  const rows = [
    { pct: 0.88, checked: true },
    { pct: 0.0, checked: false },
    { pct: 0.86, checked: true },
    { pct: 0.0, checked: false },
  ];
  return (
    <BrowserFrame>
      {rows.map((r, i) => {
        const y = 74 + i * 22;
        return (
          <g key={i}>
            {/* Avatar dot */}
            <circle cx="36" cy={y} r="4.5" fill="#00687A" />
            {/* Name line */}
            <rect x="48" y={y - 3} width="54" height="6" rx="3" fill="#131B2E" fillOpacity="0.1" />
            {/* Progress bar track */}
            <rect x="116" y={y - 4} width="110" height="8" rx="4" fill="#131B2E" fillOpacity="0.08" />
            {/* Progress bar fill (teal gradient via layered rects) */}
            {r.pct > 0 && (
              <>
                <rect
                  x="116"
                  y={y - 4}
                  width={110 * r.pct}
                  height="8"
                  rx="4"
                  fill="#00687A"
                />
              </>
            )}
            {/* Status icon */}
            {r.checked ? (
              <>
                <circle cx="240" cy={y} r="7" fill="#00687A" />
                <path
                  d={`M236 ${y} l3 3 l5 -6`}
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <circle
                cx="240"
                cy={y}
                r="6"
                stroke="#131B2E"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                fill="none"
              />
            )}
          </g>
        );
      })}
    </BrowserFrame>
  );
}

const STEPS = [
  {
    title: "Create with AI",
    caption: "Paste topic or PDF",
    body: "Claude drafts 14 question types from your topic, PDF, or lecture notes in under 60 seconds. Review, tweak, publish — instructor fully in control at every step.",
    illo: <IllustrationCreate />,
  },
  {
    title: "Embed inside LMS",
    caption: "Questions appear inline",
    body: "LTI 1.3 deep-linking drops questions directly on any Canvas page. Students never leave the course view. Scores sync to the gradebook automatically.",
    illo: <IllustrationEmbed />,
  },
  {
    title: "Analyze & Improve",
    caption: "Track mastery per objective",
    body: "Per-student, per-objective, per-Bloom's-level dashboards update in real time. Ask plain-English questions about your data. Spot at-risk students early.",
    illo: <IllustrationAnalyze />,
  },
];

function WhyItWorksSection() {
  return (
    <section className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text md:text-6xl">
            Built for how teaching
            <br />
            actually works.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Three steps, one workflow: meet instructors and students where they
            already are — inside Canvas, today.
          </p>
        </div>

        <div className="flex flex-col items-center gap-14 md:flex-row md:items-start md:justify-between md:gap-2">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && (
                <div className="hidden shrink-0 items-center justify-center pt-24 md:flex">
                  <ChevronRight className="h-7 w-7 text-text-muted/40" />
                </div>
              )}
              <div className="flex max-w-sm flex-1 flex-col items-center text-center">
                <div className="w-full max-w-[320px]">{step.illo}</div>
                <h3 className="mt-8 font-display text-xl font-bold text-text">
                  {step.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-brand-600">
                  {step.caption}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {step.body}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

const FAQS = [
  {
    q: "How is CuePoint different from traditional assessment tools?",
    a: "Three structural differences. First, architecture: most legacy tools were built before AI existed — any AI they add is retrofitted onto a pre-LLM system. CuePoint was built ground-up with Claude at the center. Second, authoring: legacy tools require manual question writing that can take hours. CuePoint generates a full assessment in under 60 seconds from a topic or PDF. Third, pricing: most competitors charge per student or per attempt. CuePoint is a flat institutional fee — your cost doesn't grow as adoption does.",
  },
  {
    q: 'What does "inline embedding" actually mean?',
    a: "Using LTI deep linking, you place a CuePoint question block anywhere inside a Canvas page — between paragraphs, after a diagram, mid-lecture slide. Students see and answer the question without opening a new tab or navigating to a quiz portal. Scores still flow back to the Canvas gradebook automatically.",
  },
  {
    q: "Does CuePoint work with any LMS or only Canvas?",
    a: "The current version is purpose-built for Canvas LMS via LTI 1.3 Advantage. This means full grade passback, deep linking, roster sync via NRPS, and a single sign-on experience. Support for Brightspace and other LTI 1.3-compliant platforms is on the roadmap.",
  },
  {
    q: "How does AI grading work for essays?",
    a: "You write a rubric and an optional sample answer. When a student submits, Claude scores the response against the rubric and returns a numeric score, written strengths, and areas for improvement — all visible to the instructor before anything is finalized. You can override any score with one click. Nothing is published to the gradebook without instructor review.",
  },
  {
    q: "What are your security and compliance posture?",
    a: "CuePoint uses schema-per-tenant isolation in PostgreSQL — each institution's data is fully separated. All API routes enforce rate limiting, session validation, and Zod-validated inputs. HTTP headers include HSTS, CSP with frame-ancestors locked to your Canvas domain, and X-Content-Type-Options. FERPA-aligned data handling is standard.",
  },
  {
    q: "Is there a per-student fee?",
    a: "No. CuePoint charges a flat annual fee per institution. You can run unlimited assessments, generate unlimited questions with AI, and grade unlimited submissions without your costs going up as adoption grows. This is by design — per-student pricing punishes exactly the active learning behavior you want to encourage.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            Common questions
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl bg-white shadow-soft transition-colors ${
                  isOpen ? "border border-brand-600/30" : "border border-border/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold leading-snug text-text">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-gradient-to-br from-brand-600 to-accent-500 text-white"
                        : "bg-surface-container text-text-muted"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-6 py-24 text-white">
      <div className="aurora" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Ready to bring active learning to your students?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Request a 30-minute live demo. We&apos;ll load a real Canvas course,
          embed questions mid-page, trigger AI grading on an essay, and walk
          through the analytics dashboard.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-soft-lg transition-transform hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <ResearchSection />
      <VideoTourSection />
      <FeaturesSection />
      <QuestionTypesSection />
      <WhyItWorksSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
