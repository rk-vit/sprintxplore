"use client"
import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import VisionMissionSection from "@/components/sections/vision-mission-section"
import TechnologiesSection from "@/components/sections/technologies-section"
import TeamSection from "@/components/sections/team-section"
import ProjectsSection from "@/components/sections/projects-section"
import CoursesSection from "@/components/sections/courses-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <TechnologiesSection />
      <TeamSection />
      <ProjectsSection />
      <CoursesSection />
      <ContactSection />
    </div>
  )
}
