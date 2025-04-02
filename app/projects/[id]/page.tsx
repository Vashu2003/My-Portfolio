// app/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

async function getProject(id: string) {
  return projects.find((p) => p.id === Number(id));
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = await getProject(params.id);
  if (!project) return {};
  
  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
    openGraph: {
      images: project.images[0]?.url,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}