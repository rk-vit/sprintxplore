import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ScrollAnimation from "@/components/scroll-animation"
import { title } from "process"
import React, { MouseEvent } from "react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Hacklido",
      description: "A community-powered platform for ethical hackers and cybersecurity enthusiasts to share, learn, and grow.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB"],
      link:"https://hacklido.com/"
    },
    {
      title: "Sri Ramanujar Illam",
      description: "A digital platform supporting humanitarian, cultural, and community service initiatives",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Firebase", "TensorFlow"],
      link:"https://sriramanujarillam.org/"
    },
    {
      title: "SmartRetail Solution",
      description: "A dermatology clinic website with intuitive booking, responsive design, and SEO-first performance",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "AWS"],
      link:"https://www.coimbatoredermalcenter.in"
    },
    {
      title: "Velammal TPO Automation Suite",
      description: " A tool that automates placement cell workflows, simplifying student-company mapping, reports, and communication.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "AWS"],
      link:""
    },
    {
      title: "DineXQ – Smart Canteen Management",
      description: " Our in-house SaaS product that digitizes institutional dining and food order management for real-time insights.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "AWS"],
      link:""
    }
  ]

  const smoothScroll = (e: React.MouseEvent<Element>, target: string) => {
  e.preventDefault(); // if you're preventing navigation
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <section id="projects" className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Our Projects</h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-yellow-400 mx-auto"></div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">Innovative solutions we've developed</p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} direction="up" delay={0.2 * (index + 1)}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  link={project.link}
                />
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation delay={0.8}>
            <div className="mt-8 md:mt-10 text-center">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
