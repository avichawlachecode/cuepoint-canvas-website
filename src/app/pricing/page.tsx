import Link from "next/link";
import Section, {
  SectionLabel,
  SectionTitle,
} from "@/components/section";
import { PrimaryButton, Chip } from "@/components/ui";
import { CheckCircle2, HelpCircle, Sparkles } from "lucide-react";

const TIERS = [
  {
    name: "Pilot",
    price: "Free",
    period: "one semester",
    description: "Try CuePoint risk-free with a small group of instructors.",
    highlight: false,
    features: [
      "Up to 10 instructors",
      "All 14 question types",
      "AI question generation",
      "AI grading",
      "Canvas grade passback",
      "Email support",
      "Onboarding session included",
    ],
    cta: "Start a Pilot",
  },
  {
    name: "Institution",
    price: "Custom",
    period: "per year",
    description:
      "Flat annual pricing for your entire institution. No per-student or per-attempt fees.",
    highlight: true,
    features: [
      "Unlimited instructors",
      "Unlimited students",
      "Unlimited assessments and AI calls",
      "Per-institution data isolation",
      "Analytics dashboard + AI insights",
      "Mastery learning & Bloom's tracking",
      "Assessment groups (composite scoring)",
      "Question bank with CSV/Excel/QTI import",
      "Priority support + dedicated CSM",
      "Custom DPA",
      "Security review support for your CISO",
    ],
    cta: "Request a Quote",
  },
  {
    name: "Multi-year",
    price: "Custom",
    period: "2-3 year contract",
    description:
      "Lock in the best rate and secure roadmap input as a design partner.",
    highlight: false,
    features: [
      "Everything in Institution",
      "Discounted multi-year rate",
      "Roadmap input as a design partner",
      "Early access to new features",
      "Annual business review",
      "White-glove onboarding for all departments",
    ],
    cta: "Let's Talk",
  },
];

const FAQ = [
  {
    q: "Do you charge per student or per quiz attempt?",
    a: "No. CuePoint uses flat annual pricing. Your cost doesn't go up when your faculty use it more — we reward adoption, not penalize it.",
  },
  {
    q: "Are AI features included or extra?",
    a: "Included. AI costs are built into the subscription. We rate-limit at the infrastructure level so usage stays predictable.",
  },
  {
    q: "What happens after the pilot?",
    a: "At the end of the pilot, we present a readout with usage data, faculty feedback, and time-savings metrics. If results are strong, we propose an institution or multi-year plan. If not, your data is exportable in CSV and QTI 2.1.",
  },
  {
    q: "Can we start with one department and expand later?",
    a: "Absolutely. Most institutions start with a STEM or large-enrollment department, prove the value, then expand institution-wide at renewal.",
  },
  {
    q: "How does your pricing compare to Atomic Assessments / Learnosity?",
    a: "Atomic Assessments often meters by item, attempt, or student via the underlying Learnosity engine. CuePoint is flat. For large-enrollment institutions, the difference is significant.",
  },
  {
    q: "Do you offer a DPA (Data Processing Agreement)?",
    a: "Yes. We have a standard DPA template ready and can accommodate institution-specific amendments.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-24 pt-32 text-center text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Chip icon={Sparkles} variant="dark">
              Pricing
            </Chip>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Flat pricing.{" "}
            <span className="text-gradient">No per-student fees.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            Start with a free pilot. Expand to a flat annual site license. AI
            included. Your bill doesn&apos;t grow when your faculty use it more.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <Section>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                tier.highlight
                  ? "bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 p-[1px] shadow-soft-lg"
                  : "border border-border bg-white shadow-soft hover:-translate-y-1 hover:shadow-soft-lg"
              }`}
            >
              <div
                className={`flex h-full flex-col ${
                  tier.highlight
                    ? "rounded-[calc(1.5rem-1px)] bg-surface-dark p-8 text-white"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="mb-6 flex justify-between">
                    <Chip icon={Sparkles} variant="dark">
                      Most popular
                    </Chip>
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold">
                    {tier.price}
                  </span>
                  <span
                    className={
                      tier.highlight ? "text-sm text-white/60" : "text-sm text-text-muted"
                    }
                  >
                    / {tier.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    tier.highlight ? "text-white/70" : "text-text-muted"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          tier.highlight
                            ? "bg-gradient-to-br from-brand-400 to-accent-400 text-white"
                            : "bg-gradient-to-br from-brand-500 to-accent-500 text-white"
                        }`}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                      <span
                        className={
                          tier.highlight ? "text-white/85" : "text-text"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "btn-shine bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-soft-lg hover:-translate-y-0.5"
                      : "border border-border bg-surface-alt text-text hover:border-brand-300 hover:bg-brand-50"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Common pricing questions.</SectionTitle>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all open:shadow-soft-lg"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold">
                <span className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {item.q}
                </span>
                <span className="mt-1 text-text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pl-8 text-sm leading-relaxed text-text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionTitle className="text-white">Ready to start?</SectionTitle>
          <p className="mt-6 text-lg text-white/70">
            The pilot is free, setup takes an afternoon, and you&apos;ll have
            data within weeks. No risk, no commitment.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Request a Demo</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
