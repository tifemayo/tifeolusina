import { createFileRoute, Link } from "@tanstack/react-router";
import unifeedHome from "../assets/unifeed-home.png.asset.json";
import belearnHero from "../assets/belearn-hero.png.asset.json";

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
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8 animate-reveal">
          File 001 · Updated June 2026
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
                See the projects
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
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">1,100+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  BELEARN waitlist · 28 countries
                </div>
              </div>
              <div className="animate-reveal" style={{ animationDelay: "220ms" }}>
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">75</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Users tested Unifeed end-to-end
                </div>
              </div>
              <div className="animate-reveal" style={{ animationDelay: "290ms" }}>
                <div className="text-4xl md:text-5xl font-bold tabular-nums tracking-tighter">
                  4.5<span className="text-2xl text-muted-foreground">/5</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  Avg. user satisfaction (Unifeed)
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
        <div className="flex items-baseline justify-between border-b border-foreground/20 pb-4 mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest">Projects (01—02)</h2>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Sort: Impact / Status
          </span>
        </div>

        <div className="space-y-16">
          <FeaturedCase
            num="01"
            slug="/work/unifeed"
            title="Unifeed"
            tagline="A unified social media platform that cut platform-switching time roughly in half — built end to end and tested with 75 real users."
            role="Product Lead — End to End"
            status="Shipped"
            statusTone="accent"
            timeline="Jan 2024 — Mar 2025"
            image={unifeedHome.url}
            imageAlt="Unifeed unified feed across desktop and mobile."
            metrics={[
              { value: "75", label: "Users tested" },
              { value: "−50%", label: "Switching time" },
              { value: "4.5/5", label: "Satisfaction" },
            ]}
          />
          <FeaturedCase
            num="02"
            slug="/work/welearn"
            title="BELEARN"
            tagline="An inclusive tutoring marketplace covering SEN learners and African languages — 1,100+ waitlist signups across 28 countries, pre any paid acquisition."
            role="Founder & Product Lead"
            status="Pre-launch"
            statusTone="muted"
            timeline="2025 — Present"
            image={belearnHero.url}
            imageAlt="BELEARN landing page with waitlist signup."
            metrics={[
              { value: "1,100+", label: "Waitlist users" },
              { value: "28", label: "Countries" },
              { value: "£0", label: "Ad spend" },
            ]}
            reverse
          />
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
              File · About
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
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCase({
  num,
  slug,
  title,
  tagline,
  role,
  status,
  statusTone,
  timeline,
  image,
  imageAlt,
  metrics,
  reverse = false,
}: {
  num: string;
  slug: "/work/unifeed" | "/work/welearn";
  title: string;
  tagline: string;
  role: string;
  status: string;
  statusTone: "accent" | "muted";
  timeline: string;
  image: string;
  imageAlt: string;
  metrics: { value: string; label: string }[];
  reverse?: boolean;
}) {
  return (
    <Link
      to={slug}
      className="folder group block p-6 md:p-10"
    >
      <span
        className={
          statusTone === "accent"
            ? "folder-stamp"
            : "folder-stamp !text-muted-foreground"
        }
        style={statusTone === "muted" ? { borderColor: "var(--color-muted-foreground)" } : undefined}
      >
        {status}
      </span>
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-7">
          <div className="border border-border bg-secondary/40 overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center justify-between bg-paper">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {title} · Preview
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">{num}</span>
            </div>
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="w-full block transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            File {num} · {timeline}
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {tagline}
          </p>
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border">
            {metrics.map((m) => (
              <div key={m.label} className="pt-4">
                <div className="text-xl md:text-2xl font-bold tabular-nums tracking-tight">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {role}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform">
              Open case →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
