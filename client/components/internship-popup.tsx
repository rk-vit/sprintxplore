"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function InternshipPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show popup after 3 seconds delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
  }

  const handleApplyNow = () => {
    closePopup()
    router.push("/internship")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          />

          {/* Popup Content */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Internship Poster */}
            <div className="relative">
              <Image
                src="/internship_poster.jpg?height=600&width=400"
                alt="SprintXplore Internship Program"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay with gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Optional: Add text overlay on the image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Join Our Internship Program!</h3>
                <p className="text-sm opacity-90">Gain real-world experience with industry experts</p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="p-6 bg-gradient-to-r from-red-50 to-yellow-50">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Start Your Journey?</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Apply now for our comprehensive internship program and kickstart your tech career.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleApplyNow}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={closePopup}
                    className="flex-1 border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
