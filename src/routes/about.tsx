import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { TechPill } from "@/components/tech-pill";
import {
  activities,
  certifications,
  competencies,
  education,
  profile,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Ivan Conanta" },
      {
        name: "description",
        content:
          "Core competencies, education, and certifications of Ivan Conanta — mobile developer and applied computer vision engineer.",
      },
      { property: "og:title", content: "About — Ivan Conanta" },
      {
        property: "og:description",
        content:
          "Mobile developer and applied computer vision engineer. Flutter, MediaPipe, Firebase.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <SectionHeading
        index="02"
        title="About"
        description={
          <>
            Informatics graduate (UKDW, 2022–2026) specializing in mobile
            development and on-device machine learning. Focus on shipping
            measurable systems from data pipeline to production release.
          </>
        }
      />

      <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
        Hands-on across the mobile stack (Flutter, Dart, Android, Firebase)
        with additional full-stack experience in PHP/MySQL and Java desktop
        applications. Located in {profile.location}.
      </p>

      <section className="mt-20">
        <SectionHeading index="03" title="Core Competencies" />
        <div className="grid gap-8 sm:grid-cols-2">
          {competencies.map((c) => (
            <div key={c.group} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {c.group}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {c.items.map((i) => (
                  <TechPill key={i}>{i}</TechPill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading index="04" title="Education" />
        <ul className="flex flex-col">
          {education.map((e) => (
            <li
              key={e.school}
              className="grid gap-2 border-t border-border py-6 sm:grid-cols-12"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground sm:col-span-3">
                {e.timeframe}
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-base font-semibold text-foreground">
                  {e.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {e.detail}
                </p>
                {e.coursework ? (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    Coursework: {e.coursework}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <SectionHeading index="05" title="Certifications" />
        <ul className="flex flex-col">
          {certifications.map((c) => (
            <li
              key={c}
              className="flex gap-3 border-t border-border py-4 text-sm leading-relaxed text-foreground"
            >
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <SectionHeading index="06" title="Leadership & Activities" />
        <ul className="flex flex-col">
          {activities.map((a) => (
            <li
              key={a}
              className="flex gap-3 border-t border-border py-4 text-sm leading-relaxed text-foreground"
            >
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}