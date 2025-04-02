import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold md:text-left">MyPortfolio</h3>
            <p className="text-gray-400">
              A showcase of my projects, skills, and professional journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/vashu2003" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vashu-singh" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:rajputvashusingh@gmail.com" className="text-gray-400 hover:text-white">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 lg:text-center md:text-left">Quick Links</h4>
            <ul className="space-y-2 lg:text-center md:text-left">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 lg:text-right md:text-left">Contact</h4>
            <ul className="space-y-2 text-gray-400 lg:text-right md:text-left">
              <li>rajputvashusingh@gmail.com</li>
              <li>+91 9380892737</li>
              <li>Bangalore, KA</li>
            </ul>
          </div>
        </div>        
      </div>
    </footer>
  );
}