import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-xs tracking-tight uppercase font-bold hover:text-accent transition-colors"
        >
          Boluwatife (Tife) <span className="text-muted-foreground">/ Portfolio 2026</span>
        </Link>
        <div className="flex gap-6 md:gap-8 font-mono text-[11px] uppercase tracking-wider">
          <Link
            to="/"
            hash="work"
            className="hover:text-accent transition-colors text-foreground"
            activeOptions={{ exact: true }}
          >
            Projects
          </Link>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            About
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
            Contact
          </Link>
          <a
            href="/Tife_Boluwatife_CV.pdf"
            target="_blank"
            rel="noopener"
            className="hidden md:inline-block hover:text-accent transition-colors"
          >
            CV ↗
          </a>
        </div>
      </div>
    </nav>
  );
}