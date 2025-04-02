"use client";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const coreSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js Fundamentals", level: 70 },
    { name: "Git Version Control", level: 85 },
    { name: "Responsive Design", level: 90 }
  ];

  const learningSkills = [
    "TypeScript",
    "Next.js",
    "Java",
    "Express",
    "MongoDB",
    "Tailwind CSS"
  ];

  return (
    <section className="py-16 bg-gray-800" id="skills">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills Journey
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Core Proficiencies</h3>
            <div className="space-y-4">
              {coreSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              {learningSkills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              I&apos;m actively expanding my knowledge through courses and personal projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}