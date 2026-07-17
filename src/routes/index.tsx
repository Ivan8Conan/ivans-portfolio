import { createFileRoute, Link } from "@tanstack/react-router";
import { Metric } from "@/components/metric";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { metrics, profile, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ivan Conanta — Mobile & Applied Computer Vision Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ivan Conanta. Real-time on-device pose estimation, Flutter mobile apps, and full-stack systems shipped to production.",
      },
      { property: "og:title", content: "Ivan Conanta — Mobile & Applied CV Engineer" },
      {
        property: "og:description",
        content:
          "Shipped a real-time pose-estimation Android app to the Play Store — 86.7% accuracy, 3–7 ms on-device inference.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featured = projects[0];
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
            00 / Portfolio · {new Date().getFullYear()}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.role} — {profile.positioning}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-90"
            >
              View projects →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-foreground"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <aside className="flex flex-col justify-end gap-3 lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Currently
          </span>
          <p className="text-sm leading-relaxed text-foreground">
            Fresh graduate open to mobile engineering and applied ML roles.
            Based in {profile.location}.
          </p>
          <div className="mt-2 font-mono text-xs text-muted-foreground">
            <div>{profile.email}</div>
            <div>{profile.phone}</div>
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-2 gap-6 border-t border-border py-10 sm:grid-cols-4">
        {metrics.map((m) => (
          <Metric key={m.label} value={m.value} label={m.label} />
        ))}
      </section>

      <section className="py-16">
        <SectionHeading
          index="01"
          title="Featured"
          description={
            <>
              Real-time deadlift form correction shipped to the Google Play
              Store — on-device pose estimation at millisecond latency.
            </>
          }
        />
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ProjectCard project={featured} />
          </div>
          <div className="lg:col-span-4">
            <Link
              to="/projects"
              className="block border-t border-border pt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              See all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
