"use client";
import Timeline from "@/components/Timeline/Timeline";
import { motion } from "framer-motion";

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", level: 80, color: "from-blue-500 to-purple-600" },
    { name: "Backend Development", level: 85, color: "from-amber-500 to-orange-600" },
    { name: "UI/UX Design", level: 80, color: "from-emerald-500 to-teal-600" },
  ];

  return (
    <motion.main 
      className="min-h-screen py-16 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-300">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer creating solutions that matter.
          </p>
        </motion.section>

        {/* Bio + Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Who I Am</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hi! I&apos;m Vashu, a passionate web developer skilled in React.js and Node.js, 
                with experience building modern frontend applications. I have a strong foundation 
                in HTML, CSS, JavaScript, and responsive design.
              </p>
              <p>
                Committed to writing clean, efficient code and continuously expanding my skills. 
                Open to collaborations and new opportunities!
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me experimenting with new tech, contributing 
                to open-source projects, or diving into tutorials to expand my skills. 
                Let&apos;s connect and build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">My Skills</h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.section 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-300">
            My Journey
          </h2>
          <Timeline />
        </motion.section>

        {/* Resume Download */}
        <motion.section 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent rounded-lg transition-all duration-300 group"
          >
            <span>Download Resume</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.section>
      </div>
    </motion.main>
  );
}