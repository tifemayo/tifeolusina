import { createFileRoute, Link } from "@tanstack/react-router";
import coffeeSwirl from "../assets/coffee-swirl.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tife Boluwatife — Product Lead & APM Candidate" },
      {
        name: "description",
        content:
          "Portfolio of Olusina Boluwatife: CS First Class, Forensic Tech Analyst at Deloitte. Building Unifeed (75 users validated) and BELEARN. Open to APM & Junior PM roles.",
      },
      { property: "og:title", content: "Tife Boluwatife — Product Lead & APM Candidate" },
      {
        property: "og:description",
        content: "Product Lead & CS graduate turning real user problems into shipped, validated solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-20 overflow-hidden">
        <img
          src={coffeeSwirl.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 -top-10 w-[520px] max-w-[60%] opacity-[0.18] mix-blend-multiply hidden md:block"
        />
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8 animate-reveal">
          File 001 / Personal Record · Updated June 2026
        </div>
        <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 animate-reveal">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-8 leading-[0.95]">
              Hi, I&apos;m Tife. I build products people actually use.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[44ch] mb-10 text-pretty">
              Product Lead and Computer Science graduate turning complex user friction into shipped, validated solutions.
              Currently a Forensic Technology Analyst at Deloitte. Open to APM &amp; Junior PM roles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
              >
                See my work
              </a>
              <a
                href="/Tife_Boluwatife_CV.pdf"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 border border-border font-mono text-xs uppercase tracking-widest hover:border-foreground hover:text-accent transition-colors"
              >
                Download CV ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-8 border-l border-border pl-8">
              <div className="animate-reveal" style={{ animationDelay: "150ms" }}>
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">75</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Users tested Unifeed end-to-end
                </div>
              </div>
              <div className="animate-reveal" style={{ animationDelay: "220ms" }}>
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">~50%</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Reduction in platform-switching time
                </div>
              </div>
              <div className="animate-reveal" style={{ animationDelay: "290ms" }}>
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">
                  4.5<span className="text-2xl text-muted-foreground">/5</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Average user satisfaction score
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>
            <div className="text-foreground font-semibold">Deloitte</div>
            <div>Forensic Tech Analyst</div>
          </div>
          <div>
            <div className="text-foreground font-semibold">Aston University</div>
            <div>BSc CS, First Class</div>
          </div>
          <div>
            <div className="text-foreground font-semibold">Unifeed</div>
            <div>Founder & Product Lead</div>
          </div>
          <div>
            <div className="text-foreground font-semibold">BELEARN</div>
            <div>Founder · belearn.org</div>
          </div>
        </div>
      </section>

      {/* Work Index */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="flex items-baseline justify-between border-b border-foreground/20 pb-4 mb-2">
          <h2 className="font-mono text-xs uppercase tracking-widest">Selected Records (01—02)</h2>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Sort: Impact / Status
          </span>
        </div>

        <div className="divide-y divide-border">
          <CaseRow
            num="01"
            slug="/work/unifeed"
            title="Unifeed"
            tagline="Unified social media platform"
            role="Product Lead — End to End"
            status="Shipped"
            statusTone="accent"
            timeline="Jan 2024 — Mar 2025"
          />
          <CaseRow
            num="02"
            slug="/work/welearn"
            title="BELEARN"
            tagline="Inclusive tutoring marketplace"
            role="Founder & Product Lead"
            status="Pre-launch"
            statusTone="muted"
            timeline="2025 — Present · 100+ waitlist, 28 countries"
          />
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
              File 002 / Operator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              An analyst&apos;s rigor. A builder&apos;s instinct.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I&apos;m more interested in <em className="italic text-accent not-italic font-medium">why</em> something
              gets built than how — though I can do both.
            </p>
            <p>
              At Deloitte I do forensic data analysis on financial crime cases, which taught me how to make sense of
              complexity and communicate it clearly. Before that I spent three years tutoring students from age 6 to
              university level — which is where BELEARN came from. Unifeed came from a problem I lived with daily.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
              >
                Read the full file →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseRow({
  num,
  slug,
  title,
  tagline,
  role,
  status,
  statusTone,
  timeline,
}: {
  num: string;
  slug: "/work/unifeed" | "/work/welearn";
  title: string;
  tagline: string;
  role: string;
  status: string;
  statusTone: "accent" | "muted";
  timeline: string;
}) {
  return (
    <Link
      to={slug}
      className="group block py-8 transition-colors hover:bg-secondary/50 -mx-4 px-4 rounded-sm"
    >
      <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        <div className="lg:col-span-1 font-mono text-xs text-muted-foreground">{num}</div>
        <div className="lg:col-span-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
        </div>
        <div className="lg:col-span-3 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          {role}
          <div className="text-foreground/70 normal-case tracking-normal text-xs mt-1 font-sans">{timeline}</div>
        </div>
        <div className="lg:col-span-2">
          <span
            className={
              statusTone === "accent"
                ? "px-2 py-1 bg-accent/10 text-accent font-mono text-[10px] uppercase font-bold tracking-wider"
                : "px-2 py-1 bg-foreground/5 text-muted-foreground font-mono text-[10px] uppercase font-bold tracking-wider"
            }
          >
            {status}
          </span>
        </div>
        <div className="lg:col-span-2 text-right">
          <span className="font-mono text-xs group-hover:text-accent transition-colors">Read file →</span>
        </div>
      </div>
    </Link>
  );
}
