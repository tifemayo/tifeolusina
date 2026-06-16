import { createFileRoute } from "@tanstack/react-router";
import {
  CaseSection,
  CaseStudyShell,
} from "../components/CaseStudyShell";
import belearnHero from "../assets/belearn-hero.png.asset.json";
import belearnFeature from "../assets/belearn-feature.png.asset.json";

export const Route = createFileRoute("/work/welearn")({
  head: () => ({
    meta: [
      { title: "BELEARN — Inclusive tutoring marketplace · Tife Boluwatife" },
      {
        name: "description",
        content:
          "Case study: building BELEARN, an inclusive tutoring marketplace covering SEN learners and African languages. 1,100+ waitlist signups across 28 countries, pre-launch at belearn.org.",
      },
      { property: "og:title", content: "BELEARN — Case Study · Tife Boluwatife" },
      {
        property: "og:description",
        content: "The tutoring platform I wish had existed when I was teaching.",
      },
    ],
  }),
  component: WeLearnCase,
});

function WeLearnCase() {
  return (
    <CaseStudyShell
      fileNumber="02 / BELEARN"
      status="Pre-launch · 1,100+ waitlist"
      statusTone="muted"
      title="BELEARN: an inclusive tutoring marketplace I had to build."
      subtitle="The tutoring platform I wish had existed when I was teaching — for SEN learners and underrepresented subjects like African languages."
      meta={[
        { label: "Role", value: "Founder & Product Lead" },
        { label: "Status", value: "Pre-launch · website live at belearn.org" },
        { label: "Early Traction", value: "1,100+ waitlist signups across 28 countries", emphasis: true },
        {
          label: "Scope",
          value: "Discovery, two-sided PRD, brand, marketplace strategy, accessibility model",
        },
      ]}
      annotation={{
        note: "Note 02 / Why",
        quote:
          "I watched students light up when the right person explained something the right way. BELEARN is about making that match happen.",
      }}
      nextHref="/work/unifeed"
      nextLabel="01 — Unifeed"
    >
      <figure className="border border-border bg-paper overflow-hidden">
        <div className="border-b border-border px-4 py-2 flex items-center justify-between bg-secondary/40">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            belearn.org · Landing
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">Live</span>
        </div>
        <img
          src={belearnHero.url}
          alt="BELEARN landing page — 'Tutoring that sees everyone' with waitlist signup form."
          className="w-full block"
          loading="lazy"
        />
        <figcaption className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border">
          Live at belearn.org — 1,100+ waitlist signups across 28 countries, pre paid acquisition.
        </figcaption>
      </figure>

      <CaseSection num="01" title="The Problem">
        <p>
          Finding a good tutor is hard — especially if you&apos;re a student with SEN needs, or if you want to learn
          something outside the mainstream curriculum like an African language. Existing platforms don&apos;t serve
          those users well.
        </p>
        <p>
          I know this firsthand: I spent three years tutoring students aged 6–18 in coding and computer science, and
          saw exactly where discovery and matching break down.
        </p>
      </CaseSection>

      <CaseSection num="02" title="Three Core Bets">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mt-2">
          {[
            {
              n: "01",
              title: "Breadth of subjects",
              body: "Mainstream (Maths, English, Sciences) alongside African languages — which no mainstream platform covers.",
            },
            {
              n: "02",
              title: "SEN inclusion",
              body: "Students with special educational needs are matched to tutors with relevant specialist training, not just whoever's available.",
            },
            {
              n: "03",
              title: "Accessibility-first",
              body: "The platform is designed so that no learner feels like an afterthought — from search to session.",
            },
          ].map((b) => (
            <div key={b.n} className="bg-background p-6 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Bet {b.n}
              </div>
              <div className="font-semibold">{b.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection num="03" title="Where I am now">
        <p>
          Core user journeys are defined across two user types (learners and tutors). PRD written. Website live at{" "}
          <a
            href="https://belearn.org"
            target="_blank"
            rel="noopener"
            className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
          >
            belearn.org
          </a>{" "}
          with 1,100+ waitlist signups across 28 countries before any paid acquisition. Booking flow and tutor onboarding
          are the next milestones.
        </p>
      </CaseSection>

      <CaseSection num="04" title="Why this matters to me">
        <p>
          I didn&apos;t come up with BELEARN in a vacuum. I taught coding to kids who struggled in traditional
          classroom environments. I watched students light up when the right person explained something the right
          way.{" "}
          <span className="text-accent font-medium">
            BELEARN is about making that match happen — for every learner, not just the easy ones to serve.
          </span>
        </p>
      </CaseSection>

      <figure className="border border-border bg-paper overflow-hidden">
        <img
          src={belearnFeature.url}
          alt="BELEARN — Learn anything Be anything section showing global relatable tutors and smart matching."
          className="w-full block"
          loading="lazy"
        />
        <figcaption className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border">
          Positioning · global, relatable tutors paired by how each learner learns best.
        </figcaption>
      </figure>

      <div className="border border-border bg-paper/60 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            Live preview
          </div>
          <div className="font-semibold">belearn.org</div>
        </div>
        <a
          href="https://belearn.org"
          target="_blank"
          rel="noopener"
          className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
        >
          Visit site ↗
        </a>
      </div>
    </CaseStudyShell>
  );
}