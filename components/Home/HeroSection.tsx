"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-900 relative overflow-hidden px-4">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl animate-float"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-20 right-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay"
      />

      <motion.div
        className="text-center z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Vashu Singh
          </span>
        </motion.h1>

        <motion.div className="mb-8" variants={itemVariants}>
          <TypeAnimation
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4"
            sequence={[
              "A passionate Web Developer building modern web experiences.",
              2000,
              "Specializing in responsive and performant applications.",
              2000,
              "Creating seamless user experiences.",
              2000,
            ]}
            speed={30}
            deletionSpeed={50}
            repeat={Infinity}
            style={{
              display: "inline-block",
              whiteSpace: "normal",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          variants={itemVariants}
        >
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-600 rounded-lg font-medium 
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
            hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
            hover:border-transparent hover:text-white text-center"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-600 rounded-lg font-medium 
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
            hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
            hover:border-transparent hover:text-white text-center"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <svg
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-blue-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 animate-ping duration-1000" />
      </motion.div>
    </section>
  );
}
