interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  alt?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark,
  alt,
}: SectionProps) {
  const bg = dark
    ? "bg-surface-dark text-white"
    : alt
      ? "bg-surface-alt"
      : "bg-surface";
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionLabel({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest ${
        dark
          ? "border-white/10 bg-white/5 text-white/70"
          : "border-brand-200/80 bg-brand-50 text-brand-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          dark ? "bg-brand-400" : "bg-brand-600"
        }`}
      />
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-text-muted ${className}`}>
      {children}
    </p>
  );
}
