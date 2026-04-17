import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ───── Buttons ───── */

interface BtnProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ href, children, className = "" }: BtnProps) {
  return (
    <Link
      href={href}
      className={`btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-electric-600 px-7 py-3.5 text-sm font-semibold text-white shadow-soft-lg transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  className = "",
  dark = false,
}: BtnProps & { dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all ${
        dark
          ? "border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
          : "border-border bg-white text-text hover:border-brand-300 hover:bg-brand-50"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

/* ───── Chip / Label ───── */

export function Chip({
  children,
  icon: Icon,
  variant = "light",
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "light" | "dark" | "brand";
}) {
  const styles = {
    light:
      "border-brand-200 bg-white text-brand-700",
    dark: "border-white/10 bg-white/5 text-white/80",
    brand: "border-brand-500/30 bg-brand-500/10 text-brand-700",
  }[variant];
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </div>
  );
}

/* ───── Stat ───── */

export function Stat({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={`font-display text-6xl font-semibold leading-none md:text-7xl ${
          accent ? "text-gradient" : ""
        }`}
      >
        {value}
      </p>
      <p className="mt-4 text-sm text-text-muted">{label}</p>
    </div>
  );
}

/* ───── Bento Card ───── */

export function BentoCard({
  children,
  className = "",
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "gradient";
}) {
  const base =
    "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all";
  const tones = {
    light:
      "border border-border bg-white hover:-translate-y-1 shadow-soft hover:shadow-soft-lg",
    dark:
      "border border-white/10 bg-surface-dark-alt text-white hover:-translate-y-1",
    gradient:
      "text-white border border-white/10 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 hover:-translate-y-1 shadow-soft-lg",
  }[tone];
  return <div className={`${base} ${tones} ${className}`}>{children}</div>;
}

/* ───── Step indicator ───── */

export function StepDot({
  n,
  active = false,
  dark = false,
}: {
  n: number;
  active?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-medium ${
        active
          ? "bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft-lg"
          : dark
            ? "border border-white/15 bg-white/5 text-white/70"
            : "border border-border bg-white text-text-muted"
      }`}
    >
      {n.toString().padStart(2, "0")}
    </div>
  );
}

/* ───── Divider label (between sections) ───── */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-mono font-medium uppercase tracking-[0.3em] text-brand-600">
      {children}
    </p>
  );
}
