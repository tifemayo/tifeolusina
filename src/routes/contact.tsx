import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tife Boluwatife" },
      {
        name: "description",
        content:
          "Get in touch with Tife Boluwatife — APM / Junior PM candidate, builder of Unifeed and WeLearn.",
      },
      { property: "og:title", content: "Contact — Tife Boluwatife" },
      { property: "og:description", content: "Let's talk. My inbox is open." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell me a little more — at least 10 characters").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path.join(".")] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:tifemayo25@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8 animate-reveal">
        File 003 / Open Channel
      </div>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 animate-reveal">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8 text-balance">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md text-pretty">
            Whether you&apos;re hiring, building something interesting, or just want to connect — my inbox is open.
          </p>
          <div className="space-y-3 font-mono text-sm">
            <ContactRow label="Email" value="tifemayo25@gmail.com" href="mailto:tifemayo25@gmail.com" />
            <ContactRow label="LinkedIn" value="linkedin.com/in/tifemayo" href="https://linkedin.com/in/tifemayo" />
            <ContactRow label="CV" value="Download PDF ↗" href="/Tife_Boluwatife_CV.pdf" />
            <ContactRow label="WeLearn" value="belearn.org ↗" href="https://belearn.org" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-paper border border-border p-8 md:p-10 space-y-6"
            noValidate
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Transmission Form / 001
            </div>
            <Field
              label="Name"
              error={errors["name"]}
              input={
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-transparent border-b border-border py-2 px-0 focus:border-foreground outline-none transition-colors text-base"
                />
              }
            />
            <Field
              label="Email"
              error={errors["email"]}
              input={
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full bg-transparent border-b border-border py-2 px-0 focus:border-foreground outline-none transition-colors text-base"
                />
              }
            />
            <Field
              label="Message"
              error={errors["message"]}
              input={
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  className="w-full bg-transparent border-b border-border py-2 px-0 focus:border-foreground outline-none transition-colors resize-none text-base"
                />
              }
            />
            <button
              type="submit"
              className="w-full py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
            >
              {sent ? "Sent — check your mail client" : "Send transmission →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {input}
      {error && (
        <p className="text-xs text-accent font-mono uppercase tracking-wider">{error}</p>
      )}
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="flex justify-between items-baseline gap-4 border-b border-border pb-3 group"
    >
      <span className="text-muted-foreground uppercase text-[11px] tracking-widest">{label}</span>
      <span className="text-foreground group-hover:text-accent transition-colors">{value}</span>
    </a>
  );
}