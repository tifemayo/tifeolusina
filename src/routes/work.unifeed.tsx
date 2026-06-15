import { createFileRoute } from "@tanstack/react-router";
import {
  CaseSection,
  CaseStudyShell,
  DataPanel,
  ProductMockCard,
} from "../components/CaseStudyShell";

export const Route = createFileRoute("/work/unifeed")({
  head: () => ({
    meta: [
      { title: "Unifeed — A unified social media platform · Tife Boluwatife" },
      {
        name: "description",
        content:
          "Case study: how I took Unifeed from a personal frustration to a validated MVP with 75 real users, a ~50% reduction in platform-switching time, and a 4.5+/5 satisfaction score.",
      },
      { property: "og:title", content: "Unifeed — Case Study · Tife Boluwatife" },
      {
        property: "og:description",
        content: "From a user frustration to a validated product with 75 real users.",
      },
    ],
  }),
  component: UnifeedCase,
});

function UnifeedCase() {
  return (
    <CaseStudyShell
      fileNumber="01 / Unifeed"
      status="Shipped & Validated"
      statusTone="accent"
      title="Unifeed: from a user frustration to a validated product."
      subtitle="A unified social media platform that cut platform-switching time roughly in half — built end to end, tested with 75 real users."
      meta={[
        { label: "Role", value: "Product Lead — End to End" },
        { label: "Timeline", value: "Jan 2024 — Mar 2025" },
        { label: "Scope", value: "Discovery, scoping, build, usability testing, validation" },
        { label: "Core Outcome", value: "~50% reduction in platform-switching time", emphasis: true },
      ]}
      annotation={{
        note: "Note 04 / Discovery",
        quote:
          "The MVP I shipped looked nothing like my original idea — and that's exactly how it should work.",
      }}
      nextHref="/work/welearn"
      nextLabel="02 — WeLearn"
    >
      <ProductMockCard
        label="Unifeed · Unified Feed"
        caption="Snapshot of the validated MVP — one inbox across platforms."
        rows={[
          { tag: "Twitter", text: "Replied to 3 mentions · cleared in-app notifications" },
          { tag: "Instagram", text: "DM thread: client follow-up — flagged for response" },
          { tag: "LinkedIn", text: "New connection request from a recruiter" },
          { tag: "Threads", text: "Mention in a thread about product portfolios" },
        ]}
      />

      <CaseSection num="01" title="The Problem">
        <p>
          People who use multiple social platforms lose significant time switching between apps, re-orienting, and
          managing fragmented content feeds. I kept seeing it — and experiencing it — and wanted to know if it was
          worth solving.
        </p>
      </CaseSection>

      <CaseSection num="02" title="Discovery">
        <p>
          Before writing a single line of code, I spoke to 25+ users. I wanted to understand their actual behaviour,
          not just validate my assumption. Two pain points came up consistently: constant platform-switching, and
          content overload. That became the north star for everything that followed.
        </p>
      </CaseSection>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-background p-6 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Assumption
          </div>
          <p className="text-sm">Users want more features to manage their feeds.</p>
        </div>
        <div className="bg-background p-6 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Reality
          </div>
          <p className="text-sm">
            Users wanted fewer interruptions and a single, calmer place to handle everything.
          </p>
        </div>
      </div>

      <CaseSection num="03" title="Defining the MVP">
        <p>
          I mapped every feature idea against two questions: how much does this reduce switching time, and how hard is
          it to build? Anything that didn&apos;t clearly address the core pain point got cut or pushed to v2.
        </p>
      </CaseSection>

      <CaseSection num="04" title="Building & Iterating">
        <p>
          I ran three Agile sprint cycles. Mid-build, usability testing flagged two planned features that users
          consistently ignored — I cut them rather than ship something bloated.{" "}
          <span className="text-accent font-medium">Scope discipline is a product skill.</span>
        </p>
      </CaseSection>

      <CaseSection num="05" title="Validation">
        <ul className="space-y-2 text-base list-none">
          <li className="flex gap-3">
            <span className="font-mono text-accent">→</span>
            <span>75 users tested the platform end-to-end</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent">→</span>
            <span>~50% reduction in platform-switching time</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent">→</span>
            <span>4.5+/5 average satisfaction score</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-accent">→</span>
            <span>Findings shaped the v2 roadmap directly</span>
          </li>
        </ul>
      </CaseSection>

      <DataPanel
        items={[
          { value: "75", label: "Active testers" },
          { value: "25+", label: "User interviews" },
          { value: "−50%", label: "Switching delay" },
          { value: "4.5/5", label: "Avg satisfaction" },
        ]}
      />

      <CaseSection num="06" title="What I learned">
        <p>
          The most important decision I made was doing discovery <em>before</em> building. The MVP I shipped looked
          nothing like my original idea — and that&apos;s exactly how it should work. The features I was most excited
          about turned out to matter least; the ones users quietly relied on were boring on a Notion page and obvious
          in usage data.
        </p>
      </CaseSection>
    </CaseStudyShell>
  );
}