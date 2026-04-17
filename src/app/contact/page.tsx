"use client";

import { useState } from "react";
import Section from "@/components/section";
import { Chip } from "@/components/ui";
import {
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const INTEREST_OPTIONS = [
  { value: "demo", label: "Live demo" },
  { value: "pilot", label: "Free pilot" },
  { value: "pricing", label: "Institution pricing" },
  { value: "security", label: "Security / DPA" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("demo");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-24 pt-32 text-center text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Chip icon={Rocket} variant="dark">
              Contact
            </Chip>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Let&apos;s get you{" "}
            <span className="text-gradient">up and running.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            Request a live demo, start a free pilot, or just ask a question.
            We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <Section>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          {/* Left sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold">
                What happens next
              </h3>
              <ol className="mt-6 space-y-5">
                {[
                  "We respond within one business day",
                  "20-minute discovery call — we mostly listen",
                  "45-minute tailored demo — quiz generated from your syllabus live",
                  "Free pilot with 5-10 instructors",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-mono text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-border bg-white p-4 text-center shadow-soft">
                <Clock className="mx-auto h-5 w-5 text-brand-500" />
                <p className="mt-2 font-mono text-xs text-text-muted">Setup</p>
                <p className="font-semibold">&lt; 1 hr</p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4 text-center shadow-soft">
                <Sparkles className="mx-auto h-5 w-5 text-brand-500" />
                <p className="mt-2 font-mono text-xs text-text-muted">Pilot</p>
                <p className="font-semibold">Free</p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4 text-center shadow-soft">
                <ShieldCheck className="mx-auto h-5 w-5 text-brand-500" />
                <p className="mt-2 font-mono text-xs text-text-muted">DPA</p>
                <p className="font-semibold">Ready</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-display font-semibold">Contact directly</h3>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="mailto:hello@cuepoint.app"
                  className="flex items-center gap-3 text-text-muted hover:text-brand-600"
                >
                  <Mail className="h-4 w-4 text-brand-500" />
                  hello@cuepoint.app
                </a>
                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  United States
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white px-8 py-20 text-center shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold">
                  Thank you!
                </h2>
                <p className="mt-3 max-w-sm text-text-muted">
                  We&apos;ve received your request and will be in touch within
                  one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="card-hairline p-8 shadow-soft"
              >
                <div className="relative space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FloatingInput label="First name" required />
                    <FloatingInput label="Last name" required />
                  </div>

                  <FloatingInput label="Work email" type="email" required />
                  <FloatingInput label="Institution name" required />

                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-muted">
                      Your role
                    </label>
                    <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
                      <option value="">Select one</option>
                      <option>Faculty / Instructor</option>
                      <option>Department Chair</option>
                      <option>Director of Teaching &amp; Learning</option>
                      <option>Director of Online Learning</option>
                      <option>CIO / IT Director</option>
                      <option>Provost / VP Academic Affairs</option>
                      <option>Procurement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-muted">
                      What are you interested in?
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                      {INTEREST_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setInterest(opt.value)}
                          className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                            interest === opt.value
                              ? "border-brand-500 bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-700"
                              : "border-border bg-white text-text-muted hover:border-brand-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-muted">
                      Anything else?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shine w-full rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-soft-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function FloatingInput({
  label,
  type = "text",
  required = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-muted">
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </label>
      <input
        required={required}
        type={type}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm transition-all focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
