"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link:string
}

export default function ProjectCard({ title, description, image, technologies,link }: ProjectCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white p-2 shadow-lg">
            <a href= {link}  target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="h-5 w-5 text-red-600" />
            </a>
            
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
