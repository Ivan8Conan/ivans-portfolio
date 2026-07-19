import { Link } from "@tanstack/react-router";
import { TechPill } from "./tech-pill";

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  stack: string[];
  bullets: string[];
  outcome?: string;
  link?: { href: string; label: string };
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col gap-4 border-t border-border pt-6 transition-colors duration-300 hover:border-accent/60">
      <header className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="story-link outline-none focus-visible:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.role}</p>
      </header>

      <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent transition-[width] duration-300 group-hover:w-5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <TechPill key={s}>{s}</TechPill>
        ))}
      </div>

      {project.outcome ? (
        <p className="border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {project.outcome}
        </p>
      ) : null}

      {project.link ? (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-all duration-200 hover:underline-offset-[6px] hover:opacity-80 [&>span]:transition-transform [&>span]:duration-200 hover:[&>span]:translate-x-1"
        >
          {project.link.label} <span aria-hidden>→</span>
        </a>
      ) : null}

      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-all duration-200 hover:text-accent [&>span]:transition-transform [&>span]:duration-200 hover:[&>span]:translate-x-1"
      >
        View case study <span aria-hidden>→</span>
      </Link>
    </article>
  );
}