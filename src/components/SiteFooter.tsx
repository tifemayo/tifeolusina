import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-16 border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Contact
            </div>
            <a
              href="mailto:tifemayo25@gmail.com"
              className="block text-sm font-medium hover:text-accent transition-colors"
            >
              tifemayo25@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/tifemayo"
              target="_blank"
              rel="noopener"
              className="block text-sm font-medium hover:text-accent transition-colors"
            >
              linkedin.com/in/tifemayo
            </a>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Navigate
            </div>
            <Link to="/" className="block text-sm font-medium hover:text-accent transition-colors">
              Index
            </Link>
            <Link to="/about" className="block text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="block text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Records
            </div>
            <Link to="/work/unifeed" className="block text-sm font-medium hover:text-accent transition-colors">
              01 — Unifeed
            </Link>
            <Link to="/work/welearn" className="block text-sm font-medium hover:text-accent transition-colors">
              02 — WeLearn
            </Link>
            <a
              href="/Tife_Boluwatife_CV.pdf"
              target="_blank"
              rel="noopener"
              className="block text-sm font-medium hover:text-accent transition-colors"
            >
              Curriculum Vitae ↗
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
            © 2026 Olusina Boluwatife — First Class Honours, Computer Science (Aston)
          </div>
          <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
            Forensic Tech Analyst, Deloitte
          </div>
        </div>
      </div>
    </footer>
  );
}