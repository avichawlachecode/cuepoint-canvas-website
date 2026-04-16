import Link from "next/link";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  Sparkles,
  BrainCircuit,
  BarChart3,
  GraduationCap,
  Puzzle,
  BookOpen,
  Zap,
  FileUp,
  Mic,
  Code,
  Layers,
  CheckCircle2,
  ArrowRight,
  PenLine,
  Calculator,
  MessageSquareText,
  ListChecks,
  Target,
  Users,
} from "lucide-react";

const QUESTION_TYPES = [
  "Multiple Choice",
  "Multiple Select",
  "True / False",
  "Short Answer (Submit & Compare)",
  "Numerical",
  "Matching",
  "Ordering",
  "Open-Ended",
  "File Upload",
  "Fill in the Blank",
  "Essay",
  "Categorization",
  "Math Expression",
  "Layered (MCQ + Follow-up)",
];

const AI_FEATURES = [
  {
    icon: Sparkles,
    title: "Question generation",
    desc: "Give CuePoint a topic, a PDF, or even voice notes and get a complete quiz draft in under 60 seconds. Choose difficulty, question types, and count. Review and tweak before publishing.",
  },
  {
    icon: BrainCircuit,
    title: "AI grading with rationale",
    desc: "Claude scores essays, short answers, and file uploads against your rubric. Every score comes with a written explanation so students know why they earned what they got — and instructors can override with one click.",
  },
  {
    icon: BarChart3,
    title: "Natural-language analytics",
    desc: "Ask questions like \"which topics did my class struggle with on midterm 2?\" or \"who's at risk of failing?\" and get a written answer, not a dashboard to decipher.",
  },
  {
    icon: Mic,
    title: "Voice-to-LaTeX",
    desc: "Instructors dictate math formulas instead of typing them. CuePoint converts speech to LaTeX in real time via Claude, rendered instantly in the STEM editor.",
  },
];

const PLATFORM_FEATURES = [
  {
    icon: Puzzle,
    title: "14 question types",
    desc: "From basic MCQ to layered follow-ups, math expressions, and file uploads with configurable restrictions.",
  },
  {
    icon: BookOpen,
    title: "STEM content editor",
    desc: "MathLive WYSIWYG with LaTeX, chemistry, matrices, scientific notation. CodeMirror for code questions. All inline.",
  },
  {
    icon: Zap,
    title: "Question bank",
    desc: "Centralized library with search, filtering, tags, duplication. Bulk import from CSV, Excel, or QTI 2.1.",
  },
  {
    icon: Layers,
    title: "Assessment groups",
    desc: "Bundle assessments into a single gradebook column. Set per-assessment weights. Canvas sees one composite score.",
  },
  {
    icon: Target,
    title: "Mastery learning",
    desc: "Tag questions to learning objectives and Bloom's taxonomy levels. Track per-student mastery with configurable thresholds.",
  },
  {
    icon: ListChecks,
    title: "Flexible grading modes",
    desc: "Accuracy, completion, or attempted. Optional Check Answer for self-verification. Partial credit with tolerance ranges.",
  },
  {
    icon: FileUp,
    title: "File upload questions",
    desc: "Configurable file types, size limits, multi-file support, and preview rendering. AI-graded against rubric.",
  },
  {
    icon: GraduationCap,
    title: "Canvas grade passback",
    desc: "Scores sync to the Canvas gradebook via LTI Advantage AGS. No exports, no imports, no delays.",
  },
  {
    icon: Users,
    title: "Roster sync",
    desc: "Student roster pulled from Canvas via NRPS. Always current, always course-scoped.",
  },
  {
    icon: PenLine,
    title: "Deep linking",
    desc: "Instructors embed specific assessments into Canvas pages from the Canvas assignment picker. One click.",
  },
  {
    icon: Calculator,
    title: "Auto-grading engine",
    desc: "Deterministic grading for MCQ, numeric (with tolerance), matching, ordering, FIB, and more. Partial credit built in.",
  },
  {
    icon: MessageSquareText,
    title: "Analytics dashboard",
    desc: "Score distributions, question-level performance, completion rates, class averages, and at-risk student identification.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Features</SectionLabel>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything your assessment tool should do —{" "}
            <span className="text-brand-600">and the AI it shouldn&apos;t be missing</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            14 question types, a STEM-native editor, AI authoring and grading,
            mastery tracking, and seamless Canvas integration. All in one tool.
          </p>
        </div>
      </section>

      {/* ───── AI-Powered ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>AI-powered</SectionLabel>
          <SectionTitle>AI that&apos;s the workflow, not a side panel</SectionTitle>
          <SectionDescription>
            CuePoint was built in the LLM era. AI isn&apos;t a feature we added
            last quarter — it&apos;s the foundation every instructor workflow
            sits on.
          </SectionDescription>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {AI_FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600/10">
                <f.icon className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-brand-200 bg-brand-50 p-6 text-center text-sm text-brand-800">
          <strong>Instructor control is non-negotiable.</strong> AI drafts —
          instructors approve. AI grades — instructors override. Every AI
          output includes rationale. Nothing is auto-published.
        </div>
      </Section>

      {/* ───── Question types ───── */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Question types</SectionLabel>
          <SectionTitle>14 types, each with depth — not just breadth</SectionTitle>
          <SectionDescription>
            We built fewer types and made each one excellent — with partial credit,
            auto-grading, AI grading, and STEM support where it counts.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {QUESTION_TYPES.map((qt) => (
            <div
              key={qt}
              className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 text-sm shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
              {qt}
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Platform features grid ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Platform</SectionLabel>
          <SectionTitle>A complete assessment platform, not just a quiz maker</SectionTitle>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100">
                <f.icon className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── STEM callout ───── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Built for STEM</SectionLabel>
          <SectionTitle>The assessment tool that understands math</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Most assessment tools treat math as an afterthought — a LaTeX text
            box you paste into. CuePoint has a full WYSIWYG STEM editor with
            MathLive, CodeMirror, chemistry notation, and voice dictation built
            in.
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            {[
              { icon: Calculator, label: "MathLive WYSIWYG with live LaTeX rendering" },
              { icon: Code, label: "CodeMirror for code-based questions" },
              { icon: Mic, label: "Voice dictation to LaTeX via Claude" },
              { icon: BookOpen, label: "Chemistry notation, matrices, scientific notation" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-sm text-slate-300">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───── CTA ───── */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>See it in action</SectionTitle>
          <p className="mt-4 text-lg text-text-muted">
            Book a live demo and we&apos;ll generate a quiz from your syllabus
            on the call.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-700"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
