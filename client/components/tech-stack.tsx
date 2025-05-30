"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const technologies = [
  {
    name: "React",
    icon: "⚛️",
    description: "Building interactive user interfaces",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Server-side JavaScript runtime",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Data science and machine learning",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    description: "Machine learning framework",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Flutter",
    icon: "📱",
    description: "Cross-platform mobile development",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "AWS",
    icon: "☁️",
    description: "Cloud infrastructure and services",
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "MongoDB",
    icon: "🗄️",
    description: "NoSQL database solution",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization platform",
    color: "from-blue-500 to-blue-700",
  },
]

export default function TechStack() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          ></div>
          <div className="relative z-10">
            <div className="mb-4 text-4xl">{tech.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">{tech.name}</h3>
            <p className="text-sm text-gray-600">{tech.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
