import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { TechPill } from "@/components/tech-pill";
import { Metric } from "@/components/metric";
import { Reveal } from "@/components/reveal";
import { projectDetails, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/")({
  loader: ({ params }) => {
    const detail = projectDetails[params.slug];
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Ivan Conanta" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const d = loaderData.detail;
    const title = `${d.title} — Case Study · Ivan Conanta`;
    return {
      meta: [
        { title },
        { name: "description", content: d.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: d.tagline },
      ],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404 / Project
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        This case study doesn't exist.
      </h1>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground link-underline"
      >
        <span aria-hidden>←</span> Back to projects
      </Link>
    </div>
  ),
});

function ProjectDetailPage() {
  const { detail: d } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === d.slug);
  const next = currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Breadcrumb */}
      <Reveal>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          Back to projects
        </Link>
      </Reveal>

      {/* Hero */}
      <Reveal delay={80}>
        <header className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case study / {d.year}
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {d.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{d.tagline}</p>
        </header>
      </Reveal>

      {/* Meta grid */}
      <Reveal delay={160}>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
          {[
            { k: "Status", v: d.status },
            { k: "Duration", v: d.duration },
            { k: "Team", v: d.team },
            { k: "Role", v: d.role },
          ].map((row) => (
            <div key={row.k} className="flex flex-col gap-1">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {row.k}
              </dt>
              <dd className="text-sm text-foreground">{row.v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Metrics */}
      {d.metrics && d.metrics.length > 0 ? (
        <Reveal delay={220}>
          <section className="mt-14">
            <SectionHeading index="01" title="Metrics" description={<>Numbers that define the system.</>} />
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {d.metrics.map((m) => (
                <Metric key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Problem */}
      <Section index="02" title="Problem">
        <BulletList items={d.problem} />
      </Section>

      {/* Solution */}
      <Section index="03" title="Solution">
        <BulletList items={d.solution} />
      </Section>

      {/* Contributions */}
      <Section index="04" title="My Contributions">
        <BulletList items={d.contributions} />
      </Section>

      {/* System Design */}
      <Section index="05" title="System Design">
        <BulletList items={d.systemDesign} />
      </Section>

      {/* Tech Stack */}
      <Section index="06" title="Tech Stack">
        <div className="flex flex-wrap gap-1.5">
          {d.techStack.map((t) => (
            <TechPill key={t.name}>{t.name}</TechPill>
          ))}
        </div>
        <ul className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-foreground">
          {d.techStack.map((t) => (
            <li key={t.name} className="flex gap-3">
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
              <span>
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground"> — {t.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Features */}
      <Section index="07" title="Key Features">
        <ul className="grid gap-4 sm:grid-cols-2">
          {d.features.map((f) => (
            <li
              key={f.name}
              className="lift group flex flex-col gap-1 rounded-md border border-border bg-card p-4 hover:border-accent/60"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent">
                Feature
              </span>
              <span className="text-sm font-semibold text-foreground">{f.name}</span>
              <span className="text-sm text-muted-foreground">{f.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Challenges */}
      <Section index="08" title="Engineering Challenges">
        <div className="flex flex-col gap-8">
          {d.challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="lift border-l-2 border-accent bg-card/50 p-5">
                <header className="mb-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </header>
                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  {[
                    { k: "Problem", v: c.problem },
                    { k: "Cause", v: c.cause },
                    { k: "Solution", v: c.solution },
                    { k: "Trade-off", v: c.tradeoff },
                  ].map((row) => (
                    <div key={row.k} className="flex flex-col gap-1">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {row.k}
                      </dt>
                      <dd className="text-foreground">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 border-t border-border pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-foreground/70">
                    Outcome
                  </span>
                  <p className="mt-1 text-sm font-medium text-foreground">{c.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section index="09" title="Results">
        <BulletList items={d.results} />
      </Section>

      {/* Lessons */}
      <Section index="10" title="Lessons Learned">
        <BulletList items={d.lessons} />
      </Section>

      {/* Future */}
      {d.future.length > 0 ? (
        <Section index="11" title="Future Improvements">
          <BulletList items={d.future} />
        </Section>
      ) : null}

      {/* Next project */}
      {next && next.slug !== d.slug ? (
        <Reveal>
          <nav className="mt-20 flex items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← All projects
            </Link>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-3 text-right"
            >
              <span className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next case study
                </span>
                <span className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                  {next.title}
                </span>
              </span>
              <span
                aria-hidden
                className="text-2xl text-foreground transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </nav>
        </Reveal>
      ) : null}
    </div>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="mt-14">
        <SectionHeading index={index} title={title} />
        {children}
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 text-sm leading-relaxed text-foreground">
      {items.map((b) => (
        <li key={b} className="group flex gap-3">
          <span
            aria-hidden
            className="mt-2 h-px w-3 shrink-0 bg-accent transition-[width] duration-300 group-hover:w-5"
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
