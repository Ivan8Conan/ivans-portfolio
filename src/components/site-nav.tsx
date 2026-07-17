import { Link } from "@tanstack/react-router";

type NavLink = { to: string; label: string; exact?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          ivan.conanta<span className="text-accent">_</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to as "/"}
              activeOptions={{ exact: l.exact }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100",
              }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative px-3 py-2 transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}