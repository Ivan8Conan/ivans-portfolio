import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { TechPill } from "@/components/tech-pill";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  activities,
  certifications,
  competencies,
  education,
  profile,
} from "@/lib/portfolio-data";
import type { Certification } from "@/lib/portfolio-data";

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
  const [openCert, setOpenCert] = useState<Certification | null>(null);
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
            <li key={c.title} className="border-t border-border">
              <button
                type="button"
                onClick={() => setOpenCert(c)}
                className="group flex w-full items-start gap-3 py-4 text-left text-sm leading-relaxed text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
                aria-label={`View certificate: ${c.title}`}
              >
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                <span className="flex-1 underline-offset-4 group-hover:underline">
                  {c.title}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent"
                >
                  View →
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Dialog open={!!openCert} onOpenChange={(o) => !o && setOpenCert(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold leading-snug">
              {openCert?.title}
            </DialogTitle>
            <DialogDescription className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Certificate preview
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 flex min-h-[320px] items-center justify-center rounded-md border border-dashed border-border bg-muted/30 p-8">
            {openCert?.file ? (
              openCert.file.type === "image" ? (
                <img
                  src={openCert.file.url}
                  alt={openCert.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    PDF document
                  </p>
                  <a
                    href={openCert.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Open certificate in new tab →
                  </a>
                  <a
                    href={openCert.file.url}
                    download
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-accent"
                  >
                    Download PDF
                  </a>
                </div>
              )
            ) : (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Certificate coming soon
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

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