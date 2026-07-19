import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <>
      <SectionHeading
        index="08"
        title="Projects"
        description={<>Systems built end-to-end — from data pipeline to shipped product.</>}
      />
      <div className="grid gap-12 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  );
}
