import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tife Boluwatife" },
      {
        name: "description",
        content:
          "Olusina Boluwatife (Tife): First Class CS graduate from Aston, Forensic Tech Analyst at Deloitte, founder of Unifeed and BELEARN. Moving into APM / Junior PM roles.",
      },
      { property: "og:title", content: "About — Tife Boluwatife" },
      {
        property: "og:description",
        content: "Nice to meet you — I'm Tife. Builder, analyst, future PM.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8 animate-reveal">
        File 002 / Operator Record
      </div>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 animate-reveal">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-10 text-balance">
            Nice to meet you — I&apos;m Tife.
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              I&apos;m a Computer Science graduate (First Class, Aston University), currently working as a Forensic
              Technology Analyst at Deloitte. I&apos;m making the move into product management.
            </p>
            <p className="text-muted-foreground">
              I&apos;ve always been more interested in <em className="text-accent not-italic font-medium">why</em>{" "}
              something gets built than how — though I can do both. I started building Unifeed because I was genuinely
              frustrated by the problem. I&apos;m building BELEARN because I&apos;ve seen the gap it fills with my own
              eyes.
            </p>
            <p className="text-muted-foreground">
              Outside of product, I&apos;ve tutored students from age 6 to university level, contributed to product
              strategy inside Deloitte, and spent time doing forensic data analysis on financial crime cases — which
              taught me how to make sense of complexity and communicate it clearly. Both useful skills for a PM.
            </p>
            <p>
              I&apos;m currently looking for <span className="font-semibold">APM or Junior PM roles</span> where I can
              bring structure, empathy, and a builder&apos;s mindset to a team working on something that matters.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="/Tife_Boluwatife_CV.pdf"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Download my CV ↓
            </a>
            <a
              href="https://linkedin.com/in/tifemayo"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 border border-border font-mono text-xs uppercase tracking-widest hover:border-foreground hover:text-accent transition-colors"
            >
              Connect on LinkedIn ↗
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 border border-border font-mono text-xs uppercase tracking-widest hover:border-foreground hover:text-accent transition-colors"
            >
              Say hello →
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-10">
            <FactBlock
              label="Currently"
              items={[
                ["Role", "Forensic Tech Analyst, Deloitte"],
                ["Building", "Unifeed · BELEARN"],
                ["Location", "United Kingdom"],
                ["Open to", "APM / Junior PM"],
              ]}
            />
            <FactBlock
              label="Education"
              items={[
                ["Degree", "BSc Computer Science"],
                ["University", "Aston University"],
                ["Result", "First Class Honours"],
              ]}
            />
            <FactBlock
              label="What I bring"
              items={[
                ["Discovery", "25+ interviews before code"],
                ["Scope", "Cuts features that don't earn it"],
                ["Analysis", "Financial crime data, daily"],
                ["Empathy", "3 yrs tutoring, ages 6–18"],
              ]}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function FactBlock({ label, items }: { label: string; items: [string, string][] }) {
  return (
    <div className="border border-border bg-paper/60 p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-5">
        {label}
      </div>
      <dl className="space-y-3">
        {items.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 text-sm border-b border-border last:border-0 pb-3 last:pb-0">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
            <dd className="font-medium text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}