"use client";
import { Certification } from "@/data/certifications";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Image with subtle hover effect */}
      <motion.div 
        className="relative w-full md:w-2/5 aspect-video min-w-[300px] rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={cert.imageUrl}
          alt={`${cert.title} certification`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-white">{cert.title}</h3>
        <p className="text-blue-400 text-lg mb-4">{cert.issuer}</p>
        
        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cert.skills.map((skill) => (
            <motion.span 
              key={skill} 
              className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-600/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Date and credential info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-auto">
          <span>
            Issued: {new Date(cert.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long' 
            })}
          </span>
          {cert.credentialId && (
            <span className="font-mono bg-gray-700/50 px-3 py-1 rounded">
              ID: {cert.credentialId}
            </span>
          )}
        </div>

        {/* Verify link with icon */}
        {/* <Link
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors group"
        >
          <span>Verify Credential</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link> */}
      </div>
    </motion.div>
  );
}