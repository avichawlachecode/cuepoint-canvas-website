import Link from "next/link";
import Section, {
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";
import {
  PrimaryButton,
  GhostButton,
  Chip,
  Stat,
  BentoCard,
  StepDot,
} from "@/components/ui";
import {
  EditorMock,
  MiniQuestion,
  MiniAIChat,
  MiniGradeSync,
  MiniSTEM,
  MiniSecurity,
} from "@/components/product-mock";
import {
  Sparkles,
  GraduationCap,
  ShieldCheck,
  BarChart3,
  Puzzle,
  BookOpen,
  ArrowRight,
  BrainCircuit,
  Play,
  X,
  Check,
  Minus,
  Clock,
  Settings,
  PenLine,
  Rocket,
  TrendingUp,
} from "lucide-react";

const LOGOS = [
  "University A",
  "State College B",
  "Research U",
  "Polytechnic Inst.",
  "Community College C",
  "School District D",
  "Liberal Arts College",
  "Online University",
];

const COMPARISON = [
  ["Authoring speed (blank → published)", "~60 seconds with AI", "Several minutes, manual"],
  ["AI grading with written rationale", true, false],
  ["Natural-language analytics Q&A", true, false],
  ["Voice-to-LaTeX dictation", true, false],
  ["Direct vendor relationship", true, "Reseller of Learnosity"],
  ["Flat pricing (no per-item fees)", true, false],
  ["Canvas LTI 1.3 grade passback", true, true],
  ["STEM-native WYSIWYG editor", true, "LaTeX text box only"],
] as const;

const STEPS = [
  {
    n: 1,
    icon: Settings,
    title: "Install",
    desc: "One LTI 1.3 key exchange with your Canvas admin. Under an hour.",
  },
  {
    n: 2,
    icon: Sparkles,
    title: "Author",
    desc: "AI drafts a full quiz from a topic, PDF, or voice note in 60 seconds.",
  },
  {
    n: 3,
    icon: PenLine,
    title: "Assess",
    desc: "Students take assessments inline in Canvas. 14 question types.",
  },
  {
    n: 4,
    icon: BrainCircuit,
    title: "Grade",
    desc: "Auto-grade deterministic questions, AI-grade the rest with rationale.",
  },
  {
    n: 5,
    icon: BarChart3,
    title: "Analyze",
    desc: "Ask plain-English questions about class performance. Get real answers.",
  },
];

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-32 pt-32 text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-7 flex justify-center">
            <Chip icon={Sparkles} variant="dark">
              AI-native assessment for Canvas LMS
            </Chip>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[6rem]">
            Smart assessments,
            <br />
            <span className="text-gradient">right on cue.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Create a full quiz in 60 seconds. AI grades the essays. Scores flow
            straight to Canvas. Students never leave the course page.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/contact">Request a Demo</PrimaryButton>
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-surface-dark">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch demo
              <span className="font-mono text-xs text-white/40">2:14</span>
            </Link>
          </div>

          {/* Logo strip */}
          <div className="mt-20">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              Built for institutions running Canvas LMS
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
              <div className="marquee flex gap-16 whitespace-nowrap">
                {[...LOGOS, ...LOGOS].map((name, i) => (
                  <span
                    key={i}
                    className="font-display text-xl font-medium text-white/40"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Product shot ───── */}
      <section className="relative -mt-20 px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <EditorMock />
        </div>
      </section>

      {/* ───── Problem → Solution ───── */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>The shift</SectionLabel>
          <SectionTitle>
            Assessment got stuck in 2012.
            <br />
            <span className="text-gradient">The AI era arrived.</span>
          </SectionTitle>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Old way */}
          <div className="rounded-3xl border border-border bg-white/50 p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-text-subtle" />
              The old way
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-text-muted">
              Legacy assessment tools
            </h3>
            <ul className="mt-8 space-y-4">
              {[
                "30-60 min to author a single quiz manually",
                "8+ hours per week grading short answers & essays",
                "Math lives in a LaTeX text box you paste into",
                "Analytics is a static dashboard you decipher",
                "AI is a side panel added last quarter",
                "Pricing meters per item, per attempt, per student",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-text-subtle" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-white to-brand-50/40 p-8 shadow-soft-lg">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                The CuePoint way
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                AI-native from day one
              </h3>
              <ul className="mt-8 space-y-4">
                {[
                  "60 seconds from topic to full quiz draft",
                  "AI grades open-ended with written rationale",
                  "MathLive WYSIWYG + voice-to-LaTeX built in",
                  "Ask plain-English questions, get real answers",
                  "AI is the workflow, not a side panel",
                  "Flat pricing. Use it more — pay the same.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-text"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ───── Feature bento ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Features</SectionLabel>
          <SectionTitle>
            Everything your assessment tool
            <br />
            should do — in one place.
          </SectionTitle>
          <SectionDescription className="mx-auto">
            Six capabilities. Each one deep enough to replace a separate tool.
            Together, the assessment workflow you always wanted.
          </SectionDescription>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Large AI card */}
          <BentoCard tone="gradient" className="md:col-span-2 md:row-span-1">
            <div>
              <Chip icon={Sparkles} variant="dark">
                AI
              </Chip>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">
                Generate a full quiz
                <br />
                from a topic or PDF.
              </h3>
              <p className="mt-4 max-w-md text-sm text-white/75">
                Claude drafts MCQs, short answers, numericals, and layered
                follow-ups. You review, tweak, publish. Under 60 seconds.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Avg. time: 47s · 12 questions
            </div>
          </BentoCard>

          <BentoCard>
            <div>
              <Chip icon={Puzzle}>14 types</Chip>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Question types with depth
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                MCQ to math expressions to file upload — each with partial
                credit and auto-grading.
              </p>
            </div>
            <MiniQuestion />
          </BentoCard>

          <BentoCard>
            <div>
              <Chip icon={BookOpen}>STEM</Chip>
              <h3 className="mt-5 font-display text-xl font-semibold">
                MathLive + voice dictation
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Full WYSIWYG math editor. Dictate formulas. Claude converts
                speech to LaTeX in real time.
              </p>
            </div>
            <MiniSTEM />
          </BentoCard>

          <BentoCard>
            <div>
              <Chip icon={BarChart3}>Analytics</Chip>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Ask your data, get answers
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Natural-language Q&A over every assessment you&apos;ve run.
              </p>
            </div>
            <MiniAIChat />
          </BentoCard>

          <BentoCard>
            <div>
              <Chip icon={GraduationCap}>Canvas</Chip>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Grade passback, instantly
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                LTI Advantage AGS pushes scores to the gradebook the moment
                grading finishes.
              </p>
            </div>
            <MiniGradeSync />
          </BentoCard>

          <BentoCard>
            <div>
              <Chip icon={ShieldCheck}>Security</Chip>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Per-institution isolation
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                PostgreSQL schema per tenant. FERPA-aligned. Signed LTI JWTs.
              </p>
            </div>
            <MiniSecurity />
          </BentoCard>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 font-medium text-brand-600 hover:text-brand-700"
          >
            Explore all features <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ───── Comparison table ───── */}
      <Section dark>
        <div className="relative">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel dark>CuePoint vs legacy</SectionLabel>
            <SectionTitle>
              Built in the AI era,
              <br />
              not retrofitted for it.
            </SectionTitle>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Atomic Assessments is a Learnosity reseller from the pre-LLM era.
              Here&apos;s what that means in practice.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-surface-dark-alt/80 backdrop-blur">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-white/10 bg-white/[0.02] px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              <span>Capability</span>
              <span className="text-brand-400">CuePoint</span>
              <span>Atomic / Legacy</span>
            </div>
            {COMPARISON.map(([cap, us, them]) => (
              <div
                key={cap as string}
                className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-white/5 px-8 py-4 text-sm transition-colors last:border-0 hover:bg-white/[0.02]"
              >
                <span className="text-white/80">{cap}</span>
                <span className="flex items-center gap-2 text-brand-400">
                  {typeof us === "boolean" ? (
                    us ? (
                      <>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20">
                          <Check className="h-3 w-3" />
                        </span>
                        Yes
                      </>
                    ) : (
                      <Minus className="h-4 w-4 text-white/30" />
                    )
                  ) : (
                    <span className="font-medium">{us}</span>
                  )}
                </span>
                <span className="flex items-center gap-2 text-white/50">
                  {typeof them === "boolean" ? (
                    them ? (
                      <>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                          <Check className="h-3 w-3" />
                        </span>
                        Yes
                      </>
                    ) : (
                      <>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10">
                          <X className="h-3 w-3 text-red-400/80" />
                        </span>
                        No
                      </>
                    )
                  ) : (
                    <span>{them}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───── How it works stepper ───── */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <SectionTitle>Up and running in an afternoon.</SectionTitle>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* gradient connector */}
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-brand-200 via-brand-500 to-accent-500 md:block" />

          <div className="grid gap-8 md:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <StepDot n={s.n} active />
                <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white">
                  <s.icon className="h-4 w-4 text-brand-600" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <GhostButton href="/how-it-works">
            See the full walkthrough
          </GhostButton>
        </div>
      </Section>

      {/* ───── ROI stats strip ───── */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Impact</SectionLabel>
          <SectionTitle>Real numbers, real time saved.</SectionTitle>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          <div className="relative rounded-3xl border border-border bg-white p-10 text-center shadow-soft">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs text-text-muted">
              <Clock className="mr-1 inline h-3 w-3" />
              Authoring
            </div>
            <Stat value="10×" label="faster authoring with AI drafts" accent />
          </div>
          <div className="relative rounded-3xl border border-border bg-white p-10 text-center shadow-soft">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs text-text-muted">
              <BrainCircuit className="mr-1 inline h-3 w-3" />
              Grading
            </div>
            <Stat value="80%" label="reduction in grading time for essays" accent />
          </div>
          <div className="relative rounded-3xl border border-border bg-white p-10 text-center shadow-soft">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs text-text-muted">
              <TrendingUp className="mr-1 inline h-3 w-3" />
              Pricing
            </div>
            <Stat value="0" label="per-attempt, per-item, per-student fees" accent />
          </div>
        </div>
      </Section>

      {/* ───── Testimonial ───── */}
      <Section alt>
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-12 shadow-soft-lg md:p-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl" />
            <span className="font-display text-8xl leading-none text-brand-200">
              &ldquo;
            </span>
            <p className="-mt-12 font-display text-2xl font-medium leading-snug text-text md:text-3xl">
              We replaced three tools with CuePoint — and our STEM faculty got
              back about six hours a week. The AI grading with rationale was the
              unlock. Instructors trust it.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-semibold text-white">
                JM
              </div>
              <div>
                <p className="font-semibold">Dr. Jordan Mathers</p>
                <p className="text-sm text-text-muted">
                  Director of Teaching &amp; Learning · Research University
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───── CTA ───── */}
      <Section dark>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Chip icon={Rocket} variant="dark">
              Free pilot · 5 instructors · one semester
            </Chip>
          </div>
          <SectionTitle className="text-white">
            See CuePoint live in
            <br />
            <span className="text-gradient">your Canvas sandbox.</span>
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            30-minute call. We generate a quiz from your syllabus on screen.
            Bring your toughest question type — we&apos;ll build it live.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/contact">Request a Demo</PrimaryButton>
            <GhostButton href="/pricing" dark>
              View Pricing
            </GhostButton>
          </div>
        </div>
      </Section>
    </>
  );
}
