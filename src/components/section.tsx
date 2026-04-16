interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 ${dark ? "bg-surface-dark text-white" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
  );
}

export function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-lg text-text-muted">{children}</p>
  );
}
