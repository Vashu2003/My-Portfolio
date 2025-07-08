"use client";
import { FiBriefcase, FiAward, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

type TimelineItem = {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  icon: "work" | "education" | "project";
};

export default function Timeline() {
  const items: TimelineItem[] = [
    {
      id: 1,
      date: "Feb 2025 - Mar 2025",
      title: "Web Developer Intern",
      organization: "Reignite Technologies",
      description: "Contributed to full-stack development using React.js, Node.js, Express, and MongoDB for real-world web applications.",
      icon: "work",
    },
    {
      id: 2,
      date: "2022 - 2025",
      title: "Bachelors in Computer Applications",
      organization: "Sambhram Academy Of Management Studies",
      description: "Current CGPA - 7.4.",
      icon: "education",
    },
    {
      id: 3,
      date: "2019 - 2021",
      title: "Computer Science",
      organization: "Seshadripuram Pre University College",
      description: "Completed with First Division.",
      icon: "education",
    },
    {
      id: 4,
      date: "2018 - 2019",
      title: "Secondary Education",
      organization: "Aditya National Public School",
      description: "Completed with First Division.",
      icon: "education",
    },
  ];

  const Icon = ({ type }: { type: TimelineItem["icon"] }) => {
    switch (type) {
      case "work":
        return <FiBriefcase className="text-blue-500" size={18} />;
      case "education":
        return <FiAward className="text-green-500" size={18} />;
      case "project":
        return <FiCode className="text-purple-500" size={18} />;
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-16">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 transform -translate-x-1/2"></div>

      {items.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="relative pl-16 mb-12 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Icon container */}
          <motion.div 
            className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:border-blue-500 transition-all z-10"
            whileHover={{ scale: 1.1 }}
          >
            <Icon type={item.icon} />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 group-hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/10"
            whileHover={{ y: -5 }}
          >
            <span className="text-sm text-gray-400">{item.date}</span>
            <h3 className="text-xl font-bold mt-1 text-white">{item.title}</h3>
            <h4 className="text-blue-400 mt-1">{item.organization}</h4>
            <p className="mt-3 text-gray-300 leading-relaxed">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}