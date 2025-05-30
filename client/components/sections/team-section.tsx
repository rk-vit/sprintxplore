import TeamMember from "@/components/team-member"
import ScrollAnimation from "@/components/scroll-animation"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in tech education and software development.",
    },
    {
      name: "John Smith",
      position: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Expert in cloud architecture and emerging technologies with a passion for teaching.",
    },
    {
      name: "Emily Johnson",
      position: "Head of Education",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Curriculum development specialist with a background in computer science education.",
    },
  ]

  return (
    <section id="team" className="bg-gray-50 py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Our Team</h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-red-600 mx-auto"></div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">Meet the experts behind SprintXplore</p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} direction="up" delay={0.2 * (index + 1)}>
                <TeamMember name={member.name} position={member.position} image={member.image} bio={member.bio} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
