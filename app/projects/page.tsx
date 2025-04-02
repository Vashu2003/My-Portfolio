"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen py-16 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl animate-float"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-1/3 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={item}
              custom={index}
              className="h-full"
              whileHover={{ y: -5 }}
            >
              <ProjectCard 
                project={project} 
                className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                priority={index < 3}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#top"
            className="px-6 py-3 border border-gray-600 rounded-lg font-medium 
            transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent
            inline-flex items-center gap-2 hover:text-white"
          >
            Back to Top
          </a>
        </motion.div>
      </div>
    </main>
  );
}