import Link from "next/link";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  Sparkles,
  GraduationCap,
  Clock,
  ShieldCheck,
  BarChart3,
  Puzzle,
  BookOpen,
  Zap,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  FileText,
  PenLine,
  MessageSquareText,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-surface px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            AI-native assessment tool for Canvas LMS
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-surface-dark md:text-6xl lg:text-7xl">
            Smart assessments,
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              right on cue.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted md:text-xl">
            Create a full quiz in 60 seconds. AI grades the essays. Scores flow
            straight to Canvas. Students never leave the course page.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-8 py-3.5 text-base font-semibold text-text shadow-sm transition-all hover:border-brand-300 hover:bg-brand-50"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
      </section>

      {/* ───── Trusted by (placeholder) ───── */}
      <section className="border-b border-border bg-surface-alt px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
            Built for institutions running Canvas LMS
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["University A", "State College B", "Community College C", "School District D"].map(
              (name) => (
                <span key={name} className="text-lg font-bold text-text-muted">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ───── The Problem ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>
            Your instructors are spending hours on work AI can do in seconds
          </SectionTitle>
          <SectionDescription>
            Canvas native quizzes were built in 2012. They top out at basic
            multiple choice. STEM instructors can&apos;t write math. Humanities
            instructors grade essays by hand. Gradebook exports are manual.
            There&apos;s a better way.
          </SectionDescription>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Clock,
              stat: "8+ hours",
              label: "per week spent grading essays and short-answer responses",
            },
            {
              icon: PenLine,
              stat: "30-60 min",
              label: "to author a single quiz manually from scratch",
            },
            {
              icon: FileText,
              stat: "0",
              label: "native Canvas question types that understand math notation",
            },
          ].map((item) => (
            <div
              key={item.stat}
              className="rounded-xl border border-border bg-white p-8 text-center shadow-sm"
            >
              <item.icon className="mx-auto h-8 w-8 text-brand-500" />
              <p className="mt-4 text-3xl font-bold text-surface-dark">{item.stat}</p>
              <p className="mt-2 text-sm text-text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Solution overview ───── */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The solution</SectionLabel>
          <SectionTitle>
            One tool. Author, grade, analyze — all inside Canvas.
          </SectionTitle>
          <SectionDescription>
            CuePoint embeds directly into Canvas course pages via LTI 1.3.
            Instructors author assessments with AI, students take them without
            leaving Canvas, and scores sync to the gradebook automatically.
          </SectionDescription>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Sparkles,
              title: "AI-powered authoring",
              desc: "Generate a full quiz from a topic or uploaded PDF in under 60 seconds. Review, tweak, publish.",
            },
            {
              icon: BrainCircuit,
              title: "AI grading",
              desc: "Claude grades essays, short answers, and file uploads against your rubric — with written rationale for every score.",
            },
            {
              icon: BarChart3,
              title: "AI analytics",
              desc: 'Ask plain-English questions like "who\'s struggling with kinematics?" and get an instant written answer.',
            },
            {
              icon: GraduationCap,
              title: "Canvas grade sync",
              desc: "Scores flow to the Canvas gradebook automatically via LTI Advantage. No CSV exports, no copy-paste.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100">
                <card.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="mt-4 font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Key Features grid ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Features</SectionLabel>
          <SectionTitle>Everything your assessment tool should do</SectionTitle>
        </div>

        <div className="mt-16 grid gap-y-12 md:grid-cols-2 md:gap-x-16">
          {[
            {
              icon: Puzzle,
              title: "14 question types",
              desc: "Multiple choice, multiple select, true/false, short answer, numerical, matching, ordering, open-ended, file upload, fill-in-the-blank, essay, categorization, math expression, and layered follow-ups.",
            },
            {
              icon: BookOpen,
              title: "STEM content editor",
              desc: "MathLive WYSIWYG math editor with LaTeX, chemistry notation, matrices, scientific notation, voice dictation to LaTeX, and code editing via CodeMirror.",
            },
            {
              icon: Zap,
              title: "Question bank",
              desc: "Centralized reusable question library with search, filtering, duplication, and bulk CSV/Excel/QTI import with downloadable templates.",
            },
            {
              icon: BarChart3,
              title: "Analytics dashboard",
              desc: "Score distributions, question-level performance, completion rates, class averages, and AI-surfaced at-risk students.",
            },
            {
              icon: ShieldCheck,
              title: "Mastery learning",
              desc: "Standards-aligned learning objectives, Bloom's taxonomy tagging, per-student mastery tracking with configurable thresholds.",
            },
            {
              icon: MessageSquareText,
              title: "Assessment groups",
              desc: "Bundle multiple assessments into a single Canvas gradebook entry with configurable per-assessment weights and composite scoring.",
            },
          ].map((f) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Explore all features <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ───── Why CuePoint vs competitors ───── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Why CuePoint</SectionLabel>
          <SectionTitle>Built in the AI era, not retrofitted for it</SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Legacy assessment engines were built before LLMs existed. Their AI is
            a side panel. Ours is the core workflow.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl border border-slate-700">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-300">Capability</th>
                <th className="px-6 py-4 font-semibold text-brand-400">CuePoint</th>
                <th className="px-6 py-4 font-semibold text-slate-400">Legacy tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {[
                ["AI question generation from topic/PDF", "Native, core workflow", "Limited add-on"],
                ["AI grading with written rationale", "Native, core workflow", "Limited or manual"],
                ["Natural-language analytics Q&A", "Yes", "No"],
                ["Voice-to-LaTeX dictation", "Yes", "No"],
                ["Authoring speed (blank to published)", "~60 seconds with AI", "Several minutes"],
                ["Canvas grade passback (LTI AGS)", "Yes", "Yes"],
                ["Pricing model", "Flat per-seat or site license", "Often metered"],
                ["Faculty onboarding time", "One click, no training", "Workshops typical"],
              ].map(([cap, us, them]) => (
                <tr key={cap} className="hover:bg-slate-800/30">
                  <td className="px-6 py-3 text-slate-300">{cap}</td>
                  <td className="px-6 py-3 font-medium text-brand-400">{us}</td>
                  <td className="px-6 py-3 text-slate-500">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ───── How it works (brief) ───── */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <SectionTitle>Up and running in an afternoon</SectionTitle>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-0 md:grid-cols-4">
          {[
            { step: "1", title: "Install", desc: "One LTI 1.3 key exchange with your Canvas admin. Under an hour." },
            { step: "2", title: "Author", desc: "Instructors generate quizzes with AI or build from the question bank." },
            { step: "3", title: "Assess", desc: "Students take assessments inline in Canvas. 14 question types, STEM-ready." },
            { step: "4", title: "Grade & sync", desc: "Auto-grade + AI grading. Scores push to Canvas gradebook instantly." },
          ].map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center px-4 py-6 text-center">
              {i < 3 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full bg-brand-200 md:block" />
              )}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            See the full walkthrough <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ───── ROI / stats ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Impact</SectionLabel>
          <SectionTitle>Built to save real time</SectionTitle>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { stat: "60s", label: "from topic to full quiz draft with AI" },
            { stat: "80%", label: "reduction in grading time for open-ended questions" },
            { stat: "0", label: "CSV exports needed — grades sync to Canvas automatically" },
          ].map((s) => (
            <div key={s.stat} className="text-center">
              <p className="text-5xl font-extrabold text-brand-600">{s.stat}</p>
              <p className="mt-3 text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Security brief ───── */}
      <Section className="bg-surface-alt">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>Security &amp; compliance</SectionLabel>
            <SectionTitle>Institution-grade data handling</SectionTitle>
            <ul className="mt-8 space-y-4">
              {[
                "Per-institution database isolation — your data never mixes with another school's",
                "LTI 1.3 with signed JWTs — the industry standard Canvas mandates",
                "HTTPS everywhere, HSTS, CSP, rate limiting",
                "FERPA-aligned data practices with role-based access control",
                "Flat pricing — no metering on quiz attempts or AI calls",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/security"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Read the full security overview <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Architecture at a glance</h3>
            <div className="mt-6 space-y-3 text-sm">
              {[
                { label: "Compute", value: "Vercel serverless (Next.js)" },
                { label: "Database", value: "PostgreSQL with per-tenant schemas" },
                { label: "AI engine", value: "Anthropic Claude (rate-limited)" },
                { label: "Auth", value: "LTI 1.3 OIDC + Canvas OAuth" },
                { label: "Grade sync", value: "LTI Advantage AGS" },
                { label: "Roster", value: "LTI Advantage NRPS" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between border-b border-border pb-3 last:border-0">
                  <span className="text-text-muted">{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───── CTA ───── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Ready to give your instructors their time back?</SectionTitle>
          <p className="mt-4 text-lg text-slate-400">
            Start with a free pilot — 5 instructors, one semester, no commitment.
            We handle setup. You see the results.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-400"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-3.5 text-base font-semibold text-slate-300 transition-all hover:border-slate-400 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
