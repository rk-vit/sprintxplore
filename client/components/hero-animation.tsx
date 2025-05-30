"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

export default function ImprovedHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative h-[400px] w-full max-w-md md:h-[500px] md:max-w-lg" ref={containerRef}>
      <motion.div className="relative h-full w-full" variants={containerVariants} initial="hidden" animate={controls}>
        {/* Main Logo/Brand Circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <Image src="/logo.svg" alt="SprintXplore Logo" width={100} height={32} className="object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Tech Icons - Mobile Optimized */}
        <motion.div
          className="absolute left-4 top-12 md:left-8 md:top-16 z-10"
          variants={itemVariants}
          animate={floatingVariants}
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-lg md:text-2xl">⚛️</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-4 top-16 md:right-8 md:top-20 z-10"
          variants={itemVariants}
          animate={{
            y: [-20, 20, -20],
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-lg md:text-2xl">🚀</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-8 bottom-16 md:left-12 md:bottom-20 z-10"
          variants={itemVariants}
          animate={{
            y: [-12, 18, -12],
            transition: {
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-lg md:text-2xl">💻</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-8 bottom-12 md:right-12 md:bottom-16 z-10"
          variants={itemVariants}
          animate={{
            y: [-18, 12, -18],
            transition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-lg md:text-2xl">🎯</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-4 md:top-8 z-10 -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [-15, 15, -15],
            transition: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        >
          <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-base md:text-xl">🧠</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 bottom-4 md:bottom-8 z-10 -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [-12, 12, -12],
            transition: {
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            },
          }}
        >
          <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100">
            <span className="text-base md:text-xl">📱</span>
          </div>
        </motion.div>

        {/* Connecting Lines */}
        <motion.svg
          className="absolute inset-0 h-full w-full"
          variants={itemVariants}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.path
            d="M 150 150 Q 200 100 250 150"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <motion.path
            d="M 100 250 Q 150 200 200 250"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Orbital Rings - Mobile Optimized */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="h-60 w-60 md:h-80 md:w-80 rounded-full border border-dashed border-red-200"></div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="h-72 w-72 md:h-96 md:w-96 rounded-full border border-dashed border-yellow-200"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}
