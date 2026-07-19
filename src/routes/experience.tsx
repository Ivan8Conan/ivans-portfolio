import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { TechPill } from "@/components/tech-pill";
import { experience } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Ivan Conanta" },
      {
        name: "description",
        content:
          "Professional experience of Ivan Conanta — undergraduate research on on-device pose estimation and Android mobile development at MojadiApp.",
      },
      { property: "og:title", content: "Experience — Ivan Conanta" },
      {
        property: "og:description",
        content:
          "Shipped a real-time on-device ML app to the Play Store and built Firebase-backed mobile products during MSIB Batch 7.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <SectionHeading
        index="07"
        title="Professional Experience"
        description={<>Action-oriented engineering work with measurable production impact.</>}
      />

      <ul className="flex flex-col">
        {experience.map((e) => (
          <li
            key={`${e.role}-${e.org}`}
            className="grid gap-6 border-t border-border py-10 sm:grid-cols-12"
          >
            <div className="sm:col-span-3">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {e.timeframe}
              </div>
              {e.program ? (
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                  {e.program}
                </div>
              ) : null}
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{e.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              {e.subtitle ? (
                <p className="mt-3 border-l-2 border-accent pl-3 text-sm italic text-foreground">
                  {e.subtitle}
                </p>
              ) : null}
              <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <TechPill key={s}>{s}</TechPill>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
