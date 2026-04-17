import { Sparkles, BrainCircuit, Mic, Check, BarChart3 } from "lucide-react";

/* ───── Hero product mock: assessment editor ───── */

export function EditorMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-dark-alt shadow-soft-lg">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-black/30 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-4 font-mono text-xs text-white/50">
          canvas.cuepoint.app / physics-101 / midterm-draft
        </span>
      </div>
      <div className="grid gap-0 md:grid-cols-[1fr_300px]">
        {/* left: question preview */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <span className="rounded bg-brand-500/20 px-2 py-0.5 text-brand-300">
              Q3 · Math expression
            </span>
            <span>·</span>
            <span>3 points</span>
          </div>
          <p className="mt-4 text-lg text-white/90">
            A projectile is launched at angle θ with initial velocity v₀. Derive
            the expression for maximum height reached.
          </p>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-white/80">
            h<sub>max</sub> ={" "}
            <span className="text-brand-300">
              (v₀² · sin²θ) / (2g)
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
            <Mic className="h-3.5 w-3.5 text-accent-400" />
            Dictated via voice-to-LaTeX · 1.2s
          </div>
        </div>
        {/* right: AI panel */}
        <div className="border-l border-white/5 bg-black/20 p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-medium text-white/80">
              CuePoint AI
            </span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            Suggested follow-ups:
          </p>
          <div className="mt-3 space-y-2">
            {[
              "Calculate range at θ = 45°",
              "Add numeric variant (v₀ = 30 m/s)",
              "Generate layered MCQ step",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-white/75"
              >
                <Check className="mt-0.5 h-3 w-3 text-brand-400" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-3 py-2 text-center text-xs font-semibold text-white">
            + Add all three
          </div>
        </div>
      </div>

      {/* floating annotations */}
      <div className="pointer-events-none absolute -left-4 top-32 hidden rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-200 backdrop-blur md:flex">
        <BrainCircuit className="mr-1.5 h-3.5 w-3.5" />
        AI grading with rationale
      </div>
      <div className="pointer-events-none absolute -right-4 bottom-20 hidden rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1.5 text-xs font-medium text-accent-200 backdrop-blur md:flex">
        <Mic className="mr-1.5 h-3.5 w-3.5" />
        Voice → LaTeX
      </div>
    </div>
  );
}

/* ───── Mini UI snippets for bento cells ───── */

export function MiniAnalytics() {
  const bars = [40, 62, 48, 85, 70, 90, 55];
  return (
    <div className="mt-6 flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-brand-200 to-brand-500"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function MiniQuestion() {
  return (
    <div className="mt-6 space-y-2 rounded-xl border border-border bg-surface-alt p-4 text-xs">
      <p className="font-medium text-text">
        Which best describes Newton&apos;s 2nd law?
      </p>
      {["F = ma (correct)", "E = mc²", "p = mv", "W = Fd"].map((o, i) => (
        <div
          key={o}
          className={`flex items-center gap-2 rounded-md border px-3 py-2 ${
            i === 0
              ? "border-brand-500 bg-brand-50 text-brand-800"
              : "border-border bg-white text-text-muted"
          }`}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${
              i === 0
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-border"
            }`}
          >
            {i === 0 && <Check className="h-3 w-3" />}
          </span>
          {o}
        </div>
      ))}
    </div>
  );
}

export function MiniAIChat() {
  return (
    <div className="mt-6 space-y-2">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-text px-3 py-2 text-xs text-white">
        Who&apos;s struggling with kinematics?
      </div>
      <div className="w-fit max-w-[90%] rounded-2xl rounded-tl-sm border border-border bg-white px-3 py-2 text-xs text-text">
        <span className="font-mono text-brand-600">4 students</span> scored
        below 60% on Q3-Q5 (projectile motion). Avg class: 78%.
      </div>
    </div>
  );
}

export function MiniGradeSync() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white">
      <div className="flex items-center justify-between border-b border-border px-3 py-2 text-xs font-mono text-text-muted">
        Canvas Gradebook
        <span className="flex items-center gap-1 text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> synced
        </span>
      </div>
      {[
        ["A. Chen", "94"],
        ["M. Patel", "88"],
        ["S. Tomo", "76"],
      ].map(([n, g]) => (
        <div
          key={n}
          className="flex items-center justify-between border-b border-border px-3 py-1.5 text-xs last:border-b-0"
        >
          <span className="text-text-muted">{n}</span>
          <span className="font-mono font-medium text-text">{g}</span>
        </div>
      ))}
    </div>
  );
}

export function MiniSTEM() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-white p-4 font-mono text-sm">
      <p className="text-text-muted">∫₀^π sin(x) dx = </p>
      <p className="mt-2 text-lg text-brand-700">2</p>
      <div className="mt-3 flex gap-1">
        {["√", "π", "∑", "∫", "θ"].map((s) => (
          <span
            key={s}
            className="flex h-7 w-7 items-center justify-center rounded border border-border bg-surface-alt text-xs"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MiniSecurity() {
  return (
    <div className="mt-6 space-y-2 font-mono text-xs">
      {[
        ["LTI 1.3 JWT", "verified"],
        ["Tenant schema", "isolated"],
        ["Rate limit", "20 req/min"],
        ["HSTS", "preload"],
      ].map(([k, v]) => (
        <div key={k} className="flex items-center justify-between">
          <span className="text-text-muted">{k}</span>
          <span className="flex items-center gap-1 text-green-600">
            <Check className="h-3 w-3" />
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}
