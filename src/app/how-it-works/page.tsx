import Link from "next/link";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  ArrowRight,
  Settings,
  Sparkles,
  PenLine,
  GraduationCap,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>How it works</SectionLabel>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            From install to insights in{" "}
            <span className="text-brand-600">one afternoon</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            CuePoint drops into Canvas via LTI 1.3. No infrastructure, no
            training sessions, no months of change management.
          </p>
        </div>
      </section>

      {/* Steps */}
      <Section>
        <div className="mx-auto max-w-4xl space-y-16">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col gap-8 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex shrink-0 flex-col items-center md:w-48">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                  <step.icon className="h-7 w-7 text-brand-600" />
                </div>
                <span className="mt-3 text-4xl font-extrabold text-brand-200">{step.number}</span>
              </div>
              <div className="flex-1 rounded-xl border border-border bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                    {step.audience}
                  </span>
                  <span className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-text-muted">
                    {step.time}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture summary */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Under the hood</SectionLabel>
          <SectionTitle>Simple deployment, serious architecture</SectionTitle>
          <SectionDescription>
            CuePoint runs on Vercel serverless functions backed by a managed
            PostgreSQL database. Your institution gets its own isolated
            database schema. AI calls go to Anthropic Claude via rate-limited,
            metered endpoints.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              className="rounded-lg border border-border bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                {item.label}
              </p>
              <p className="mt-1 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>See it live</SectionTitle>
          <p className="mt-4 text-lg text-slate-400">
            We&apos;ll generate a quiz from your syllabus on the demo call.
            30 minutes, live, personalized to your discipline.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-400"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
