import ScrollAnimation from "@/components/scroll-animation"

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="bg-gray-50 py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                Vision & Mission
              </h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-red-600 mx-auto"></div>
            </div>
          </ScrollAnimation>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600 md:w-6 md:h-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg md:text-xl font-bold">Our Vision</h3>
                <p className="text-sm md:text-base text-gray-600">
                  To be the leading force in tech education, empowering individuals with the skills and knowledge to
                  innovate and excel in the rapidly evolving digital landscape. We envision a world where quality tech
                  education is accessible to all, fostering a generation of problem-solvers and creators.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500 md:w-6 md:h-6"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg md:text-xl font-bold">Our Mission</h3>
                <p className="text-sm md:text-base text-gray-600">
                  To deliver exceptional tech education and solutions that bridge the gap between academic learning and
                  industry requirements. We are committed to creating innovative learning experiences, developing
                  cutting-edge software, and building products that make a meaningful impact on businesses and
                  individuals alike.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
