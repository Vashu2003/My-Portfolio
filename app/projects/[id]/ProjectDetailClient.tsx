"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import Image from "next/image";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import ImageGallery from "@/components/ImageGallery";
import { markdownToHtml } from "@/app/utility/markdown";
import { motion } from "framer-motion";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (project.content) {
          const content = await markdownToHtml(project.content);
          setHtmlContent(content);
        }
      } catch (error) {
        console.error("Error converting markdown:", error);
        setHtmlContent("<p>Error loading content</p>");
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [project.content]);

  if (isLoading) {
    return (
      <main className="min-h-screen py-8 md:py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-20 bg-gray-700 rounded md:h-8 md:w-24"></div>
            <div className="h-48 w-full bg-gray-700 rounded-lg md:h-64"></div>
            <div className="h-3 w-full bg-gray-700 rounded md:h-4"></div>
            <div className="h-3 w-3/4 bg-gray-700 rounded md:h-4"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      className="min-h-screen py-8 md:py-16 bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          whileHover={{ x: -3 }}
          transition={{ duration: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white text-sm md:text-base"
          >
            <FiArrowLeft className="text-lg" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.article
          className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-xl border border-gray-700"
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>

          <motion.div
            className="relative aspect-video w-full mb-4 sm:mb-6 rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="absolute inset-0 w-full h-full focus:outline-none"
              aria-label="Open image gallery"
            >
              <Image
                src={project.images[0].url}
                alt={project.images[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm">
                  Click to view gallery
                </span>
              </div>
            </button>
          </motion.div>

          {isGalleryOpen && (
            <ImageGallery
              images={project.images}
              onClose={() => setIsGalleryOpen(false)}
            />
          )}

          <motion.div
            className="flex flex-wrap gap-2 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white text-sm sm:text-base group/button"
              >
                <FiExternalLink className="text-lg group-hover/button:animate-pulse" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 text-white text-sm sm:text-base group/button"
              >
                <FiGithub className="text-lg group-hover/button:animate-bounce" />
                View Code
              </a>
            )}
          </motion.div>

          <motion.div
            className="prose prose-invert max-w-none text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="markdown-content">
              {htmlContent && (
                <div
                  className="space-y-4 sm:space-y-6"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              )}
            </div>
          </motion.div>
        </motion.article>
      </div>

      <style jsx global>{`
        .markdown-content h1 {
          @apply text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400 border-b border-gray-700 pb-2;
        }
        .markdown-content h2 {
          @apply text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-300 mt-6 sm:mt-8;
        }
        .markdown-content p {
          @apply text-gray-300 mb-3 sm:mb-4 leading-relaxed;
        }
        .markdown-content ul,
        .markdown-content ol {
          @apply mb-4 sm:mb-6 pl-4 sm:pl-5 space-y-1 sm:space-y-2;
        }
        .markdown-content li {
          @apply text-gray-300;
        }
        .markdown-content strong {
          @apply text-white font-medium;
        }
        .markdown-content a {
          @apply text-blue-400 hover:underline;
        }
        .markdown-content code {
          @apply bg-gray-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm;
        }
        .markdown-content pre {
          @apply bg-gray-700 p-2 sm:p-4 rounded-lg overflow-x-auto mb-4 sm:mb-6 text-xs sm:text-sm;
        }
        .markdown-content blockquote {
          @apply border-l-2 sm:border-l-4 border-blue-500 pl-3 sm:pl-4 italic text-gray-400 my-4 sm:my-6 text-sm sm:text-base;
        }
        .markdown-content em {
          @apply text-gray-400;
        }
        .markdown-content img {
          @apply rounded-lg my-3 sm:my-4 max-w-full h-auto shadow-lg;
        }
      `}</style>
    </motion.main>
  );
}
