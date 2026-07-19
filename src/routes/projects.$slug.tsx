import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { TechPill } from "@/components/tech-pill";
import { Reveal } from "@/components/reveal";
import { Metric } from "@/components/metric";
import { projectDetails, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
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
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404 / Project
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">This case study doesn't exist.</h1>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground link-underline"
        aria-label="Return to projects listing"
      >
        <span aria-hidden>←</span> Back to projects
      </Link>
    </main>
  ),
});

function ProjectDetailPage() {
  const { detail: d } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === d.slug);
  const next = currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;
  const [showTopShortcut, setShowTopShortcut] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTopShortcut(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative flex flex-col gap-6">
      <div className="flex justify-end">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>
      </div>

      <header className="space-y-4 border-b border-border pb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Project detail</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {d.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{d.tagline}</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Status", value: d.status },
          { label: "Duration", value: d.duration },
          { label: "Team", value: d.team },
          { label: "Role", value: d.role },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-border bg-card p-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {d.metrics && d.metrics.length > 0 ? (
        <section className="rounded-3xl border border-border bg-card p-6">
          <SectionHeading
            index="01"
            title="Metrics"
            description={<>Numbers that define this project.</>}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </section>
      ) : null}

      <Section index="02" title="Problem">
        <BulletList items={d.problem} />
      </Section>

      <Section index="03" title="Solution">
        <BulletList items={d.solution} />
      </Section>

      <Section index="04" title="My Contributions">
        <BulletList items={d.contributions} />
      </Section>

      <Section index="05" title="System Design">
        <BulletList items={d.systemDesign} />
      </Section>

      <section className="rounded-3xl border border-border bg-card p-6">
        <SectionHeading
          index="06"
          title="Tech Stack"
          description={<>Tools and platforms used to build the solution.</>}
        />
        <div className="mt-6 flex flex-wrap gap-2">
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
      </section>

      <Section index="07" title="Key Features">
        <ul className="grid gap-4 sm:grid-cols-2">
          {d.features.map((f) => (
            <li
              key={f.name}
              className="lift group flex flex-col gap-2 rounded-3xl border border-border bg-card p-6 transition hover:border-accent/60"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Feature
              </span>
              <h3 className="text-base font-semibold text-foreground">{f.name}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{f.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {d.challenges && d.challenges.length > 0 ? (
        <Section index="08" title="Engineering Challenges">
          <div className="grid gap-6">
            {d.challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <article className="rounded-3xl border border-border bg-card p-6">
                  <div className="mb-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { k: "Problem", v: c.problem },
                      { k: "Cause", v: c.cause },
                      { k: "Solution", v: c.solution },
                      { k: "Trade-off", v: c.tradeoff },
                    ].map((row) => (
                      <div key={row.k} className="flex flex-col gap-2">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                          {row.k}
                        </dt>
                        <dd className="text-sm text-foreground">{row.v}</dd>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-border bg-background p-4">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">{c.outcome}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section index="09" title="Results">
        <BulletList items={d.results} />
      </Section>

      <Section index="10" title="Lessons Learned">
        <BulletList items={d.lessons} />
      </Section>

      {d.future.length > 0 ? (
        <Section index="11" title="Future Improvements">
          <BulletList items={d.future} />
        </Section>
      ) : null}

      {next && next.slug !== d.slug ? (
        <>
          {showTopShortcut ? (
            <div className="mt-16 flex justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-base text-foreground transition hover:border-accent hover:text-accent"
                aria-label="Scroll to top"
              >
                <span aria-hidden>↑</span>
              </button>
            </div>
          ) : null}
          <div className="mt-6 rounded-3xl border border-border bg-card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Next case study
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{next.title}</p>
              </div>
              <Link
                to="/projects/$slug"
                params={{ slug: next.slug }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground transition hover:border-accent hover:text-accent"
              >
                Continue
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </>
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
      <section className="mt-14" aria-label={title}>
        <SectionHeading index={index} title={title} />
        {children}
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-3 text-sm leading-relaxed text-foreground">
      {items.map((b, idx) => (
        <li key={idx} className="group flex gap-3">
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
