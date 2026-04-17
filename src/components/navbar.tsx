"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/70" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-sm font-semibold text-white shadow-soft-lg">
            C
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-lime-400" />
          </span>
          CuePoint
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-text-muted hover:text-text"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft-lg transition-transform hover:-translate-y-0.5"
          >
            Request Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-text-muted"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Request Demo
          </Link>
        </div>
      )}
    </header>
  );
}
