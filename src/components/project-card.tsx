import { TechPill } from "./tech-pill";

export type Project = {
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
    <article className="group flex flex-col gap-4 border-t border-border pt-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
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
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
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
          className="font-mono text-xs uppercase tracking-wider text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
        >
          {project.link.label} →
        </a>
      ) : null}
    </article>
  );
}