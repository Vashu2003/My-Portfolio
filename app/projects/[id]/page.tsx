// app/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}