"use client";

import { useState } from "react";
import Section, { SectionLabel, SectionTitle } from "@/components/section";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Let&apos;s get you{" "}
            <span className="text-brand-600">up and running</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Request a live demo, start a free pilot, or just ask a question.
            We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center rounded-xl border border-green-200 bg-green-50 px-8 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <h2 className="mt-4 text-xl font-bold">Thank you!</h2>
                <p className="mt-2 text-text-muted">
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
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Institution name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">Your role</label>
                  <select className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
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
                  <label className="mb-1.5 block text-sm font-medium">
                    What are you interested in?
                  </label>
                  <select className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
                    <option value="">Select one</option>
                    <option>Live demo</option>
                    <option>Free pilot (5-10 instructors)</option>
                    <option>Institution pricing</option>
                    <option>Security review / DPA</option>
                    <option>General question</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Anything else you&apos;d like us to know?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-700 sm:w-auto"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-xl border border-border bg-surface-alt p-6">
              <h3 className="font-semibold">What happens next?</h3>
              <ol className="mt-4 space-y-3 text-sm text-text-muted">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    1
                  </span>
                  We respond within one business day to schedule a call.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    2
                  </span>
                  20-minute discovery call — we mostly listen.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    3
                  </span>
                  45-minute tailored demo — we generate a quiz from your syllabus live.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    4
                  </span>
                  Free pilot with 5-10 instructors if you want to try it.
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-border bg-surface-alt p-6">
              <h3 className="font-semibold">Contact directly</h3>
              <div className="mt-4 space-y-3 text-sm text-text-muted">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand-500" />
                  hello@cuepoint.app
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  United States
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
              <h3 className="font-semibold text-brand-800">
                Need a security review?
              </h3>
              <p className="mt-2 text-sm text-brand-700">
                Select &ldquo;Security review / DPA&rdquo; above and we&apos;ll
                send a one-page security brief and schedule a call with your
                CISO within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
