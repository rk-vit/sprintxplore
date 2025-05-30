"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  level: string
  image: string
}

export default function CourseCard({ title, description, duration, level, image }: CourseCardProps) {
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
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">Popular</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BarChart className="mr-1 h-4 w-4" />
            {level}
          </div>
        </div>
        <Button className="w-full bg-red-600 hover:bg-red-700">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
