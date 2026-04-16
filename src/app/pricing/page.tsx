import Link from "next/link";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

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
    description: "Flat annual pricing for your entire institution. No per-student or per-attempt fees.",
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
      "Priority support + dedicated success manager",
      "Custom DPA (Data Processing Agreement)",
      "Security review support for your CISO",
    ],
    cta: "Request a Quote",
  },
  {
    name: "Multi-year",
    price: "Custom",
    period: "2-3 year contract",
    description: "Lock in the best rate and secure roadmap input as a design partner.",
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
    q: "Are AI features (question generation, grading) included or extra?",
    a: "Included. AI costs are built into the subscription. We rate-limit at the infrastructure level so usage stays predictable and you get a flat bill.",
  },
  {
    q: "What happens after the pilot?",
    a: "At the end of the pilot, we present a readout with usage data, faculty feedback, and time-savings metrics. If the results are strong, we propose an institution or multi-year plan. If not, no hard feelings — your data is exportable in CSV and QTI 2.1.",
  },
  {
    q: "Can we start with one department and expand later?",
    a: "Absolutely. Most institutions start with a STEM or large-enrollment department, prove the value, then expand institution-wide at renewal.",
  },
  {
    q: "How does your pricing compare to Atomic Assessments / Learnosity?",
    a: "Atomic Assessments often meters by item, attempt, or student via the underlying Learnosity engine. CuePoint is flat. For large-enrollment institutions, the difference is significant — your bill doesn't grow with success.",
  },
  {
    q: "Do you offer a DPA (Data Processing Agreement)?",
    a: "Yes. We have a standard DPA template ready to go. We can also accommodate institution-specific amendments. Just ask during the sales process.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Flat pricing.{" "}
            <span className="text-brand-600">No per-student fees.</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Start with a free pilot. Expand to a flat annual site license.
            AI included. No usage metering. Your bill doesn&apos;t grow when
            your faculty use it more.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 shadow-sm ${
                tier.highlight
                  ? "border-brand-500 bg-white ring-2 ring-brand-500/20"
                  : "border-border bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="mb-4 inline-block self-start rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-3">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="ml-2 text-sm text-text-muted">/ {tier.period}</span>
              </div>
              <p className="mt-3 text-sm text-text-muted">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlight
                    ? "bg-brand-600 text-white shadow-lg hover:bg-brand-700"
                    : "border border-border bg-surface-alt text-text hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Common pricing questions</SectionTitle>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h3 className="flex items-start gap-3 font-semibold">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                {item.q}
              </h3>
              <p className="mt-3 pl-8 text-sm leading-relaxed text-text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Ready to start?</SectionTitle>
          <p className="mt-4 text-lg text-slate-400">
            The pilot is free, setup takes an afternoon, and you&apos;ll have
            data within weeks. No risk, no commitment.
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
