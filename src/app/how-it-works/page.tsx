import Section, {
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";
import { PrimaryButton, Chip, StepDot } from "@/components/ui";
import {
  Settings,
  Sparkles,
  PenLine,
  GraduationCap,
  BarChart3,
  CheckCircle2,
  Rocket,
  Clock,
} from "lucide-react";

const STEPS = [
  {
    number: 1,
    icon: Settings,
    title: "Install via LTI 1.3",
    audience: "Canvas Admin",
    time: "Under 1 hour",
    details: [
      "Your Canvas admin registers CuePoint as an external tool using a standard LTI 1.3 key exchange",
      "No infrastructure to set up on your side — CuePoint runs as a managed SaaS",
      "Your institution gets its own isolated database schema automatically",
      "A warmup endpoint keeps the launch path hot so the Canvas handshake never times out",
    ],
  },
  {
    number: 2,
    icon: Sparkles,
    title: "Author assessments with AI",
    audience: "Instructors",
    time: "~60 seconds per quiz",
    details: [
      "Open CuePoint from any Canvas course page — it appears as an embedded tool",
      "Enter a topic, upload a PDF or lecture notes, or pick from the question bank",
      "AI generates a complete quiz draft with the question types, count, and difficulty you choose",
      "Review every question, tweak wording, adjust points, then publish",
      "Or skip AI entirely and build manually using the STEM-native editor",
    ],
  },
  {
    number: 3,
    icon: PenLine,
    title: "Students take assessments inline",
    audience: "Students",
    time: "Inside Canvas",
    details: [
      "Students open the Canvas page and see the assessment embedded — no new logins, no redirects",
      "14 question types including math expressions, code, matching, ordering, and file uploads",
      "Optional Check Answer lets students self-verify before final submission",
      "Every interaction (focus changes, answer edits, timestamps) is logged for analytics",
    ],
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Auto-grade + AI grade",
    audience: "Automatic",
    time: "Instant",
    details: [
      "Deterministic questions (MCQ, numeric, matching, FIB, etc.) are graded instantly with partial credit",
      "Open-ended, essay, and file-upload questions are sent to Claude for rubric-based grading",
      "Every AI score includes a written rationale — instructors can review and override",
      "Scores push to the Canvas gradebook automatically via LTI Advantage grade passback",
    ],
  },
  {
    number: 5,
    icon: BarChart3,
    title: "Analyze and improve",
    audience: "Instructors",
    time: "Real-time",
    details: [
      "Score distributions, question-level performance, and completion rates update in real time",
      "AI surfaces at-risk students and identifies concepts the class struggled with",
      "Ask natural-language questions about your data and get written answers",
      "Mastery tracking shows per-student progress against learning objectives and Bloom's levels",
    ],
  },
];

const TIMELINE = [
  { when: "Day 1", what: "LTI key exchange with your Canvas admin" },
  { when: "Day 2", what: "First instructors generate their pilot quizzes" },
  { when: "Week 1", what: "Students take first assessments inline in Canvas" },
  { when: "Week 2", what: "Analytics & mastery reports start populating" },
  { when: "Semester 1", what: "Expansion across departments, CISO signoff" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-24 pt-32 text-center text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Chip icon={Rocket} variant="dark">
              How it works
            </Chip>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            From install to insights in{" "}
            <span className="text-gradient">one afternoon.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            CuePoint drops into Canvas via LTI 1.3. No infrastructure, no
            training sessions, no months of change management.
          </p>
        </div>
      </section>

      {/* Top stepper */}
      <Section>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-brand-200 via-brand-500 to-accent-500 md:block" />
          <div className="grid gap-8 md:grid-cols-5">
            {STEPS.map((s) => (
              <div
                key={s.number}
                className="flex flex-col items-center text-center"
              >
                <StepDot n={s.number} active />
                <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white">
                  <s.icon className="h-4 w-4 text-brand-600" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{s.title}</h3>
                <p className="mt-1 font-mono text-xs text-text-muted">
                  {s.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Detailed steps */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Walkthrough</SectionLabel>
          <SectionTitle>Every step, in detail.</SectionTitle>
        </div>
        <div className="mx-auto mt-20 max-w-5xl space-y-16">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex shrink-0 flex-col items-center md:w-56">
                <StepDot n={step.number} active />
                <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-soft-lg">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <span className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                  {step.audience}
                </span>
              </div>
              <div className="card-hairline flex-1 p-8 shadow-soft">
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <span className="flex items-center gap-1 rounded-full border border-border bg-surface-alt px-3 py-1 font-mono text-xs text-text-muted">
                      <Clock className="h-3 w-3" />
                      {step.time}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                          <CheckCircle2 className="h-3 w-3" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Rollout timeline */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Rollout timeline</SectionLabel>
          <SectionTitle>From afternoon to full semester.</SectionTitle>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-1 rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
            <div className="relative grid gap-4 md:grid-cols-5">
              {TIMELINE.map((t) => (
                <div key={t.when} className="text-center">
                  <div className="mx-auto mb-4 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-brand-500 to-accent-500 shadow-soft-lg" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
                    {t.when}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{t.what}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture summary */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Under the hood</SectionLabel>
          <SectionTitle>
            Simple deployment.
            <br />
            Serious architecture.
          </SectionTitle>
          <SectionDescription className="mx-auto">
            CuePoint runs on Vercel serverless functions backed by managed
            PostgreSQL. Each institution gets its own database schema. AI calls
            go to Anthropic Claude via rate-limited endpoints.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Compute", value: "Vercel serverless (Next.js)" },
            { label: "Database", value: "PostgreSQL, per-tenant schemas" },
            { label: "AI engine", value: "Anthropic Claude, rate-limited" },
            { label: "Auth", value: "LTI 1.3 OIDC + Canvas OAuth" },
            { label: "Grade sync", value: "LTI Advantage AGS" },
            { label: "Roster sync", value: "LTI Advantage NRPS" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-white p-5 shadow-soft"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
                {item.label}
              </p>
              <p className="mt-2 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionTitle className="text-white">See it live.</SectionTitle>
          <p className="mt-6 text-lg text-white/70">
            We&apos;ll generate a quiz from your syllabus on the demo call.
            30 minutes, personalized to your discipline.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Request a Demo</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
