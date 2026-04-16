import Link from "next/link";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  ArrowRight,
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
    desc: "Every institution that installs CuePoint gets its own private section of our database (a separate PostgreSQL schema). A professor at University A literally cannot see or query data from University B — the isolation is enforced at the database layer, not just in application code.",
    detail: "This is what we tell procurement and security reviewers. It's also the foundation for FERPA conversations, enterprise contracts, and eventual SOC 2.",
  },
  {
    icon: KeyRound,
    title: "LTI 1.3 with signed JWTs",
    desc: "CuePoint uses the IMS Global LTI 1.3 standard — the same protocol Canvas mandates. The launch handshake includes OIDC login, JWT signature verification against Canvas's JWKS endpoint, and one-time nonce validation to prevent replay attacks.",
    detail: "This is not Canvas-specific glue code. It's the industry standard, which means CuePoint is portable to Blackboard, Moodle, and D2L with minimal work.",
  },
  {
    icon: Gauge,
    title: "AI cost control via rate limiting",
    desc: "Every AI endpoint runs through a stricter rate limit than the rest of the app. General API calls allow 100 requests per minute per IP. AI endpoints allow 20. This caps our Claude spend even if a customer misuses the product — and keeps your bill flat.",
    detail: "AI is our biggest differentiator and our biggest variable cost. The backend treats it as a controlled resource — metered, logged, and rate-limited — so we can forecast spend and avoid surprises.",
  },
  {
    icon: FileCheck,
    title: "Input validation on every request",
    desc: "Every API call is schema-validated before it touches the database. We use Zod schemas that enforce types, string lengths, enumerations, and format constraints on every field. Malformed or malicious input is rejected before it reaches any business logic.",
    detail: "This blocks common attack vectors including injection, malformed payloads, and parameter tampering.",
  },
  {
    icon: Lock,
    title: "HTTPS everywhere with security headers",
    desc: "All traffic is encrypted in transit. Our response headers include HSTS (2-year max-age with preload), Content-Security-Policy, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, and a locked-down Permissions-Policy.",
    detail: "The CSP is tuned for Canvas iframe embedding so the product works inside an LMS while still blocking unauthorized framing and script injection.",
  },
  {
    icon: Eye,
    title: "Role-based access control",
    desc: "Middleware enforces authentication on every API call. Individual route handlers enforce fine-grained role checks (instructor, student, TA, admin). Students see only their own submissions. Instructors see only their own courses. Admin endpoints require a separate bearer token.",
    detail: "This is a defense-in-depth model — centralized authentication plus per-route authorization — so a bug in one layer doesn't expose everything.",
  },
];

const SECURITY_TABLE = [
  { concern: "Authentication", approach: "LTI 1.3 OIDC (primary), Canvas OAuth (fallback), demo login (dev/sales)" },
  { concern: "Authorization", approach: "Middleware session validation + per-handler requireRole() guards" },
  { concern: "Input validation", approach: "Zod schemas on every request body, enforced before database access" },
  { concern: "Rate limiting", approach: "Dual-tier: general (100/min) and AI (20/min) via rate-limiter-flexible" },
  { concern: "Data isolation", approach: "PostgreSQL schema-per-tenant with SET search_path per connection" },
  { concern: "Transport security", approach: "HTTPS everywhere, HSTS with preload, secure cookies" },
  { concern: "Security headers", approach: "CSP, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy" },
  { concern: "Secrets management", approach: "Environment variables only — never in code, never in logs" },
  { concern: "Session cookies", approach: "httpOnly, Secure (production), scoped path, 24-hour max-age" },
  { concern: "LTI nonce replay", approach: "One-time nonces stored in DB, verified and deleted on use, expired nonces cleaned" },
  { concern: "Database resilience", approach: "Connection pooling tuned for serverless, automatic retry on transient errors" },
  { concern: "Admin protection", approach: "Separate bearer token required for all /api/admin/* endpoints" },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Security &amp; compliance</SectionLabel>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Built for the questions your{" "}
            <span className="text-brand-600">CISO will ask</span>
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Per-institution data isolation, LTI 1.3 signed launches, rate-limited
            AI, and FERPA-aligned data practices. Here&apos;s exactly how we
            protect your institution&apos;s data.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                  <p.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{p.desc}</p>
                  <p className="mt-3 text-sm font-medium text-brand-700">{p.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Full table */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>At a glance</SectionLabel>
          <SectionTitle>Security controls summary</SectionTitle>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th className="px-6 py-4 font-semibold">Concern</th>
                <th className="px-6 py-4 font-semibold">Our approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SECURITY_TABLE.map((row) => (
                <tr key={row.concern} className="hover:bg-brand-50/30">
                  <td className="px-6 py-3 font-medium">{row.concern}</td>
                  <td className="px-6 py-3 text-text-muted">{row.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FERPA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Compliance</SectionLabel>
          <SectionTitle>FERPA-aligned data practices</SectionTitle>
          <SectionDescription>
            CuePoint collects only the minimum data necessary from Canvas LTI
            launches, isolates it per institution, and restricts access by role.
          </SectionDescription>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {[
            "Minimum necessary data collection — only what Canvas sends at LTI launch",
            "Role-based access control — students see their data, instructors see their course",
            "Per-institution database isolation at the PostgreSQL schema level",
            "All traffic encrypted in transit (HTTPS + HSTS)",
            "Session cookies are httpOnly and Secure",
            "QTI 2.1 and CSV export so you always own your content",
            "We will provide a signed DPA (Data Processing Agreement) on request",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-white px-5 py-4 shadow-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture card */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Deployment</SectionLabel>
          <SectionTitle>Simple topology, serious isolation</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            CuePoint runs on Vercel serverless, backed by a managed PostgreSQL
            instance behind a connection pooler. Each institution gets its own
            database schema. AI calls go through Anthropic&apos;s API with a
            dedicated rate limit tier.
          </p>

          <div className="mx-auto mt-12 grid max-w-lg gap-4 text-left sm:grid-cols-2">
            {[
              { icon: Server, label: "Vercel serverless (Next.js, Node 22)" },
              { icon: Database, label: "PostgreSQL with per-tenant schemas" },
              { icon: ShieldCheck, label: "Anthropic Claude, rate-limited" },
              { icon: Lock, label: "Secrets via environment variables" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-sm text-slate-300">
                <item.icon className="h-5 w-5 shrink-0 text-brand-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Questions? Let&apos;s talk to your security team.</SectionTitle>
          <p className="mt-4 text-lg text-text-muted">
            We&apos;ll send a one-page security brief today, and our architect
            can do a 30-minute call with your CISO.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-700"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
