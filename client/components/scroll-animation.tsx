"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
  threshold?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
    rootMargin: "-50px 0px",
  })

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              ...directionOffset[direction],
            }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
