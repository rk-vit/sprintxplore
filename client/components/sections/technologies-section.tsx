import TechStack from "@/components/tech-stack"
import ScrollAnimation from "@/components/scroll-animation"

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                Technologies We Use
              </h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-yellow-400 mx-auto"></div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
                We leverage cutting-edge technologies to deliver exceptional solutions and education
              </p>
            </div>
          </ScrollAnimation>
          <TechStack />
        </div>
      </div>
    </section>
  )
}
