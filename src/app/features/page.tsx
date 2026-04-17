import Section, {
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";
import { PrimaryButton, Chip, BentoCard } from "@/components/ui";
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
  "Short Answer",
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
    desc: "Give CuePoint a topic, a PDF, or even voice notes and get a complete quiz draft in under 60 seconds. Choose difficulty, types, and count. Review and tweak before publishing.",
  },
  {
    icon: BrainCircuit,
    title: "AI grading with rationale",
    desc: "Claude scores essays, short answers, and file uploads against your rubric. Every score comes with a written explanation — instructors can override with one click.",
  },
  {
    icon: BarChart3,
    title: "Natural-language analytics",
    desc: "Ask questions like \"which topics did my class struggle with on midterm 2?\" and get a written answer — not a dashboard to decipher.",
  },
  {
    icon: Mic,
    title: "Voice-to-LaTeX",
    desc: "Instructors dictate math formulas instead of typing them. Claude converts speech to LaTeX in real time, rendered instantly in the STEM editor.",
  },
];

const PLATFORM_FEATURES = [
  { icon: Puzzle, title: "14 question types", desc: "From basic MCQ to layered follow-ups, math expressions, and file uploads." },
  { icon: BookOpen, title: "STEM content editor", desc: "MathLive WYSIWYG with LaTeX, chemistry, matrices. CodeMirror for code questions." },
  { icon: Zap, title: "Question bank", desc: "Centralized library with search, tags, duplication. Bulk import from CSV, Excel, or QTI 2.1." },
  { icon: Layers, title: "Assessment groups", desc: "Bundle assessments into a single gradebook column with per-assessment weights." },
  { icon: Target, title: "Mastery learning", desc: "Tag questions to learning objectives and Bloom's taxonomy levels. Track per-student mastery." },
  { icon: ListChecks, title: "Flexible grading modes", desc: "Accuracy, completion, or attempted. Partial credit with tolerance ranges." },
  { icon: FileUp, title: "File upload questions", desc: "Configurable file types, size limits, multi-file. AI-graded against rubric." },
  { icon: GraduationCap, title: "Canvas grade passback", desc: "Scores sync to the Canvas gradebook via LTI Advantage AGS. No exports, no delays." },
  { icon: Users, title: "Roster sync", desc: "Student roster pulled from Canvas via NRPS. Always current, course-scoped." },
  { icon: PenLine, title: "Deep linking", desc: "Instructors embed specific assessments into Canvas pages from the assignment picker." },
  { icon: Calculator, title: "Auto-grading engine", desc: "Deterministic grading for MCQ, numeric, matching, ordering, FIB. Partial credit built in." },
  { icon: MessageSquareText, title: "Analytics dashboard", desc: "Score distributions, question-level performance, at-risk student identification." },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-24 pt-32 text-center text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Chip icon={Sparkles} variant="dark">
              Features
            </Chip>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Everything your assessment tool
            <br />
            <span className="text-gradient">should do.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            14 question types, a STEM-native editor, AI authoring and grading,
            mastery tracking, and seamless Canvas integration. All in one tool.
          </p>
        </div>
      </section>

      {/* AI-Powered */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>AI-powered</SectionLabel>
          <SectionTitle>
            AI that&apos;s the workflow, <br />
            <span className="text-gradient">not a side panel.</span>
          </SectionTitle>
          <SectionDescription className="mx-auto">
            CuePoint was built in the LLM era. AI isn&apos;t a feature we added
            last quarter — it&apos;s the foundation every instructor workflow
            sits on.
          </SectionDescription>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {AI_FEATURES.map((f) => (
            <BentoCard key={f.title}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-soft-lg">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {f.desc}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 text-center text-sm text-brand-900">
          <strong>Instructor control is non-negotiable.</strong> AI drafts —
          instructors approve. AI grades — instructors override. Every AI output
          includes rationale. Nothing is auto-published.
        </div>
      </Section>

      {/* Question types */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Question types</SectionLabel>
          <SectionTitle>
            14 types, each with depth —<br />
            not just breadth.
          </SectionTitle>
          <SectionDescription className="mx-auto">
            We built fewer types and made each one excellent — with partial
            credit, auto-grading, AI grading, and STEM support where it counts.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {QUESTION_TYPES.map((qt) => (
            <div
              key={qt}
              className="group flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft-lg"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <span className="font-medium">{qt}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform grid */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Platform</SectionLabel>
          <SectionTitle>
            A complete assessment platform,
            <br />
            not just a quiz maker.
          </SectionTitle>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* STEM callout */}
      <Section dark>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionLabel dark>Built for STEM</SectionLabel>
          <SectionTitle>
            The assessment tool
            <br />
            <span className="text-gradient">that understands math.</span>
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Most tools treat math as an afterthought — a LaTeX text box you
            paste into. CuePoint has a full WYSIWYG STEM editor with MathLive,
            CodeMirror, chemistry notation, and voice dictation built in.
          </p>
          <div className="mx-auto mt-14 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            {[
              { icon: Calculator, label: "MathLive WYSIWYG with live LaTeX rendering" },
              { icon: Code, label: "CodeMirror for code-based questions" },
              { icon: Mic, label: "Voice dictation to LaTeX via Claude" },
              { icon: BookOpen, label: "Chemistry, matrices, scientific notation" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 backdrop-blur"
              >
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>See it in action.</SectionTitle>
          <p className="mt-6 text-lg text-text-muted">
            Book a live demo and we&apos;ll generate a quiz from your syllabus
            on the call.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Request a Demo</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
