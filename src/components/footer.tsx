import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Security", href: "/security" },
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-dark bg-surface-dark text-white">
      {/* dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-60" />
      {/* soft glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Newsletter strip */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight">
              Get Canvas + AI updates monthly
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Product notes, LTI tips, and the occasional deep dive. No spam.
            </p>
          </div>
          <form className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              placeholder="you@university.edu"
              className="w-full min-w-[260px] rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-semibold text-white">
                C
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-lime-400" />
              </span>
              CuePoint
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              The AI-native assessment tool built for Canvas LMS. Smart
              assessments, right on cue.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="link-underline text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 overflow-hidden text-center">
          <p
            className="font-display text-[18vw] font-semibold leading-none tracking-tighter text-transparent md:text-[14rem]"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            }}
          >
            CuePoint
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} CuePoint. All rights reserved.
          </span>
          <span className="font-mono">
            Built for Canvas · Powered by Claude
          </span>
        </div>
      </div>
    </footer>
  );
}
