import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/portfolio-data";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Ivan Conanta" },
      {
        name: "description",
        content:
          "Get in touch with Ivan Conanta. Available for mobile engineering and applied machine learning roles.",
      },
      { property: "og:title", content: "Contact — Ivan Conanta" },
      {
        property: "og:description",
        content:
          "Fresh graduate open to mobile engineering and applied ML roles. Based in Tegal, Indonesia.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  { label: "GitHub", value: "github.com/Ivan8Conan", href: profile.github },
  { label: "Location", value: profile.location, href: undefined as string | undefined },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <SectionHeading
        index="09"
        title="Contact"
        description={
          <>
            Available for mobile engineering and applied machine learning
            roles — full-time, remote, or hybrid.
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-12">
        <ul className="flex flex-col lg:col-span-8">
          {channels.map((c) => (
            <li
              key={c.label}
              className="grid gap-2 border-t border-border py-6 sm:grid-cols-12"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground sm:col-span-3">
                {c.label}
              </div>
              <div className="sm:col-span-9">
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-base text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-base text-foreground">{c.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <aside className="flex flex-col gap-4 border-t border-border pt-6 lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Résumé
          </span>
          <p className="text-sm leading-relaxed text-foreground">
            Full CV with detailed metrics, tech stack, and project outcomes.
          </p>
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noreferrer"
            download="Ivan_Conanta_CV.pdf"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-foreground px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-90"
          >
            Download CV (PDF) ↓
          </a>
        </aside>
      </div>
    </div>
  );
}