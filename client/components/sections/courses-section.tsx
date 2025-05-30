import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/course-card"
import ScrollAnimation from "@/components/scroll-animation"

export default function CoursesSection() {
  const courses = [
    {
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB.",
      duration: "12 weeks",
      level: "Intermediate",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Data Science & Machine Learning",
      description: "Learn to analyze data and build predictive models using Python and TensorFlow.",
      duration: "16 weeks",
      level: "Advanced",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications using Flutter and Firebase.",
      duration: "10 weeks",
      level: "Intermediate",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="courses" className="bg-gray-50 py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Our Courses</h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-red-600 mx-auto"></div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
                Accelerate your career with our industry-focused courses
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <ScrollAnimation key={course.title} direction="up" delay={0.2 * (index + 1)}>
                <CourseCard
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  level={course.level}
                  image={course.image}
                />
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation delay={0.8}>
            <div className="mt-8 md:mt-10 text-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                Browse All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
