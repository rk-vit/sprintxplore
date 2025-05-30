"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
}

export default function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-red-600 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-red-600 hover:text-white"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-red-600 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mb-3 text-sm font-medium text-red-600">{position}</p>
        <p className="text-sm text-gray-600">{bio}</p>
      </div>
    </motion.div>
  )
}
