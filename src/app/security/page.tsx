import Section, {
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";
import { PrimaryButton, Chip } from "@/components/ui";
import {
  CheckCircle2,
  ShieldCheck,
  Database,
  Lock,
  Eye,
  Server,
  KeyRound,
  Gauge,
  FileCheck,
} from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "Per-institution data isolation",
    desc: "Every institution that installs CuePoint gets its own private section of our database (a separate PostgreSQL schema). A professor at University A literally cannot see or query data from University B — enforced at the database layer.",
    detail: "This is what we tell procurement and security reviewers. It's also the foundation for FERPA, enterprise contracts, and eventual SOC 2.",
  },
  {
    icon: KeyRound,
    title: "LTI 1.3 with signed JWTs",
    desc: "CuePoint uses the IMS Global LTI 1.3 standard — the same protocol Canvas mandates. OIDC login, JWT signature verification against Canvas's JWKS endpoint, and one-time nonce validation to prevent replay attacks.",
    detail: "Not Canvas-specific glue code — the industry standard, portable to Blackboard, Moodle, D2L.",
  },
  {
    icon: Gauge,
    title: "AI cost control via rate limiting",
    desc: "AI endpoints run through a stricter rate limit than the rest of the app. General API: 100 requests/min per IP. AI endpoints: 20. This caps our Claude spend even if a customer misuses the product — and keeps your bill flat.",
    detail: "AI is our biggest differentiator and biggest variable cost. Treated as a controlled, metered, logged resource.",
  },
  {
    icon: FileCheck,
    title: "Input validation on every request",
    desc: "Every API call is schema-validated before it touches the database. Zod schemas enforce types, string lengths, enumerations, and format constraints. Malformed or malicious input is rejected before reaching business logic.",
    detail: "Blocks injection, malformed payloads, and parameter tampering.",
  },
  {
    icon: Lock,
    title: "HTTPS everywhere + security headers",
    desc: "All traffic encrypted in transit. Response headers include HSTS (2-year max-age with preload), CSP, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, and a locked-down Permissions-Policy.",
    detail: "CSP is tuned for Canvas iframe embedding — works inside the LMS while blocking unauthorized framing.",
  },
  {
    icon: Eye,
    title: "Role-based access control",
    desc: "Middleware enforces authentication on every API call. Route handlers enforce fine-grained role checks. Students see only their submissions. Instructors see only their courses. Admin endpoints require a separate bearer token.",
    detail: "Defense-in-depth — centralized auth plus per-route authorization, so a bug in one layer doesn't expose everything.",
  },
];

const SECURITY_TABLE = [
  { concern: "Authentication", approach: "LTI 1.3 OIDC (primary), Canvas OAuth (fallback)" },
  { concern: "Authorization", approach: "Middleware session validation + per-handler requireRole() guards" },
  { concern: "Input validation", approach: "Zod schemas on every request body, enforced before DB access" },
  { concern: "Rate limiting", approach: "Dual-tier: general (100/min) and AI (20/min)" },
  { concern: "Data isolation", approach: "PostgreSQL schema-per-tenant with SET search_path per connection" },
  { concern: "Transport security", approach: "HTTPS everywhere, HSTS with preload, secure cookies" },
  { concern: "Security headers", approach: "CSP, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy" },
  { concern: "Secrets management", approach: "Environment variables only — never in code, never in logs" },
  { concern: "Session cookies", approach: "httpOnly, Secure (production), scoped path, 24-hour max-age" },
  { concern: "LTI nonce replay", approach: "One-time nonces stored in DB, verified and deleted on use" },
  { concern: "Database resilience", approach: "Connection pooling tuned for serverless, automatic retry" },
  { concern: "Admin protection", approach: "Separate bearer token required for all /api/admin/* endpoints" },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark px-6 pb-24 pt-32 text-center text-white md:pt-40">
        <div className="aurora" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Chip icon={ShieldCheck} variant="dark">
              Security &amp; compliance
            </Chip>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Built for the questions
            <br />
            <span className="text-gradient">your CISO will ask.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            Per-institution data isolation, LTI 1.3 signed launches, rate-limited
            AI, and FERPA-aligned data practices. Exactly how we protect your
            institution&apos;s data.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Six pillars</SectionLabel>
          <SectionTitle>The controls, explained.</SectionTitle>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="card-hairline p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
            >
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-soft-lg">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {p.desc}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-700">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Controls table */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>At a glance</SectionLabel>
          <SectionTitle>Security controls summary.</SectionTitle>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <div className="grid grid-cols-[1fr_2fr] border-b border-border bg-surface-alt px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            <span>Concern</span>
            <span>Our approach</span>
          </div>
          {SECURITY_TABLE.map((row) => (
            <div
              key={row.concern}
              className="grid grid-cols-[1fr_2fr] border-b border-border px-8 py-4 text-sm transition-colors last:border-0 hover:bg-brand-50/30"
            >
              <span className="font-medium">{row.concern}</span>
              <span className="text-text-muted">{row.approach}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FERPA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Compliance</SectionLabel>
          <SectionTitle>FERPA-aligned data practices.</SectionTitle>
          <SectionDescription className="mx-auto">
            CuePoint collects only the minimum data necessary from Canvas LTI
            launches, isolates it per institution, and restricts access by role.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {[
            "Minimum necessary data collection — only what Canvas sends at LTI launch",
            "Role-based access control — students see their data, instructors see their course",
            "Per-institution database isolation at the PostgreSQL schema level",
            "All traffic encrypted in transit (HTTPS + HSTS)",
            "Session cookies are httpOnly and Secure",
            "QTI 2.1 and CSV export so you always own your content",
            "Signed DPA (Data Processing Agreement) on request",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft transition-all hover:border-brand-200"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <CheckCircle2 className="h-3 w-3" />
              </span>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture card */}
      <Section dark>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionLabel dark>Deployment</SectionLabel>
          <SectionTitle>Simple topology, serious isolation.</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Vercel serverless backed by managed PostgreSQL behind a pooler. Each
            institution gets its own schema. AI calls run through Anthropic
            with a dedicated rate-limit tier.
          </p>
          <div className="mx-auto mt-12 grid max-w-lg gap-3 text-left sm:grid-cols-2">
            {[
              { icon: Server, label: "Vercel serverless (Next.js, Node 22)" },
              { icon: Database, label: "PostgreSQL, per-tenant schemas" },
              { icon: ShieldCheck, label: "Anthropic Claude, rate-limited" },
              { icon: Lock, label: "Secrets via environment variables" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 backdrop-blur"
              >
                <item.icon className="h-5 w-5 shrink-0 text-brand-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Let&apos;s talk to your security team.</SectionTitle>
          <p className="mt-6 text-lg text-text-muted">
            We&apos;ll send a one-page security brief today and our architect
            can do a 30-minute call with your CISO.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
