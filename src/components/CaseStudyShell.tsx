import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export interface MetaItem {
  label: string;
  value: ReactNode;
  emphasis?: boolean;
}

export function CaseStudyShell({
  fileNumber,
  status,
  statusTone,
  title,
  subtitle,
  meta,
  annotation,
  children,
  nextHref,
  nextLabel,
}: {
  fileNumber: string;
  status: string;
  statusTone: "accent" | "muted";
  title: string;
  subtitle: string;
  meta: MetaItem[];
  annotation?: { note: string; quote: string };
  children: ReactNode;
  nextHref: "/work/unifeed" | "/work/welearn";
  nextLabel: string;
}) {
  return (
    <article className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
      {/* Header */}
      <header className="border-b border-border pb-12 mb-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            hash="work"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            ← Projects
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            File {fileNumber}
          </span>
          <span
            className={
              statusTone === "accent"
                ? "px-2 py-0.5 bg-accent/10 text-accent font-mono text-[10px] uppercase font-bold tracking-wider"
                : "px-2 py-0.5 bg-foreground/5 text-muted-foreground font-mono text-[10px] uppercase font-bold tracking-wider"
            }
          >
            {status}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-balance animate-reveal">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[52ch] text-pretty animate-reveal">
          {subtitle}
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-24">
        {/* Sidebar */}
        <aside className="lg:col-span-4 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24 space-y-10">
            <div className="border border-border bg-paper/60 p-6 space-y-5">
              {meta.map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                    {m.label}
                  </div>
                  <div
                    className={
                      m.emphasis
                        ? "text-sm font-semibold text-accent"
                        : "text-sm font-medium leading-relaxed"
                    }
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {annotation && (
              <div className="pl-4 border-l-2 border-accent/30">
                <div className="font-mono text-[10px] uppercase text-accent font-bold tracking-widest">
                  {annotation.note}
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed italic">
                  &ldquo;{annotation.quote}&rdquo;
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-8 order-1 lg:order-2 space-y-14">{children}</div>
      </div>

      {/* Next */}
      <div className="border-t border-border py-12 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Next project
        </span>
        <Link
          to={nextHref}
          className="text-2xl md:text-3xl font-bold tracking-tight hover:text-accent transition-colors"
        >
          {nextLabel} →
        </Link>
      </div>
    </article>
  );
}

export function CaseSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {num} / {title}
      </div>
      <div className="space-y-4 text-lg leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

export function DataPanel({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="bg-foreground text-background p-8 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-6">
        Validation Data
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label}>
            <div className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter tabular-nums">
              {it.value}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-background/60">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductMockCard({
  label,
  caption,
  rows,
}: {
  label: string;
  caption: string;
  rows: { tag: string; text: string }[];
}) {
  return (
    <div className="border border-border bg-paper">
      <div className="border-b border-border px-4 py-2 flex items-center justify-between bg-secondary/50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">v1.0</span>
      </div>
      <div className="p-6 md:p-8 space-y-3">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-start gap-4 py-3 border-b border-border last:border-0"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent w-16 shrink-0 pt-1">
              {r.tag}
            </span>
            <span className="text-sm text-foreground/80 leading-relaxed">{r.text}</span>
          </div>
        ))}
        <div className="pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {caption}
        </div>
      </div>
    </div>
  );
}