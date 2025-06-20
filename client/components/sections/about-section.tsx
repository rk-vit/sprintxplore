import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">About Us</h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-yellow-400 mx-auto"></div>
            </div>
          </ScrollAnimation>
          <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-base md:text-lg text-gray-600">
                  Sprintxplore Infotech Private Limited is a next-gen digital solutions and learning company empowering creators, learners, and businesses with innovative tech, AI, and automation. From building low-code/no-code full-stack platforms to simplifying the power of GenAI for real-world use, we are on a mission to make technology accessible, meaningful, and impactful.
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Founded with a passion to democratize software development and AI education, we blend practical learning with industry-grade products that are designed to empower both individuals and institutions. We also collaborate with academic and enterprise partners to build value-driven solutions.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="SprintXplore team collaboration"
                  className="object-cover"
                  fill
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
