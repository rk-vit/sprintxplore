import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ScrollAnimation from "@/components/scroll-animation"

export default function ProjectsSection() {
  const projects = [
    {
      title: "EduTech Platform",
      description: "A comprehensive learning management system for educational institutions.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "HealthTrack App",
      description: "Mobile application for tracking health metrics and providing personalized insights.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Firebase", "TensorFlow"],
    },
    {
      title: "SmartRetail Solution",
      description: "AI-powered inventory management system for retail businesses.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
  ]

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
