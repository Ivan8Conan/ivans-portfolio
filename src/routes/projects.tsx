import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Ivan Conanta" },
      {
        name: "description",
        content:
          "Selected engineering projects: MyDeadliftCoach on-device pose estimation, Tastivo F&B app, concert ticketing platform, and MEMBY subscription tracker.",
      },
      { property: "og:title", content: "Projects — Ivan Conanta" },
      {
        property: "og:description",
        content:
          "Mobile + ML + full-stack projects with measurable outcomes and canonical tech stacks.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Outlet />
    </div>
  );
}
