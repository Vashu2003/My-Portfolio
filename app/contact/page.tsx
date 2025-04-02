"use client";
import ContactForm from "@/components/ContactForm/ContactForm";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function ContactPage() {
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out!
          </p>
        </motion.section>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Form</h2>
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Other Ways to Connect</h2>
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                    <a 
                      href="mailto:rajputvashusingh@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      rajputvashusingh@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <FiLinkedin className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Social Media</h3>
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="https://github.com/Vashu2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <FiGithub />
                        GitHub
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/vashu-singh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <FiLinkedin />
                        LinkedIn
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/_vashu_singh_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <FiInstagram />
                        Instagram
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Location (optional) */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-blue-400" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
                    <p className="text-gray-300">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}