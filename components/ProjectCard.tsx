"use client";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export default function ProjectCard({ 
  project, 
  className = "",
  priority = false 
}: ProjectCardProps) {
  return (
    <motion.div 
      className={`flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-transparent transition-all duration-300 h-full group shadow-lg hover:shadow-blue-500/20 ${className}`}
      whileHover={{ y: -2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.images[0].url}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-2 text-sm sm:text-base">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag} 
              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-600/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="px-4 py-2 border border-gray-600 rounded-lg font-medium text-sm sm:text-base
            transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent
            inline-flex items-center gap-2 hover:text-white group/link"
            aria-label={`View ${project.title} project details`}
          >
            View Project
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub repository"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Live demo"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}