import TeamMember from "@/components/team-member"
import ScrollAnimation from "@/components/scroll-animation"

/*
 Lead Developer
 Specializes in full-stack systems, performance optimization, and delivering scalable solutions that power our core platforms.
Naveen Kumar S
 Research Analyst
 Focuses on research, insights, and product validation to ensure Sprintxplore’s offerings are data-backed and future-aligned.


*/
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Umamaheswaran S K",
      position: "Senior Executive Advisor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "A senior professor at Sri Sairam Engineering College with over 20 years of professional experience, he serves as our advisor to guide academic integration and educational impact.",
    },
    {
      name: "Sakthivel",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Passionate about accessible tech and AI-powered solutions, he leads the mission to enable youth and businesses through smart innovation.",
    },
    {
      name: " Sunil Selvaraj",
      position: " Vice President – Marketing",
      image: "/placeholder.svg?height=400&width=400",
      bio: " A growth-driven storyteller who blends strategy, branding, and outreach to expand Sprintxplore’s presence and community impact.",
    },
    {
      name: "Akshaya Saravanavaithy",
      position: " AVP – Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: " She ensures our operational flows run smoothly while maintaining quality, timelines, and coordination across projects and partnerships.",
    },
    {
      name: "Pragadeeswari Gurunathan",
      position: "AVP – Product & Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: " Drives innovation in our tech platforms, bridging code with usability through system architecture, feature design, and product R&D.",
    },
    {
      name: "Logadeepak Kandasamy",
      position: " Head of GenAI & Applications",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Architects our GenAI capabilities, enabling users to interact with complex AI systems through simplified and educational interfaces.",
    },{
      name: "Revanth Kanna M",
      position: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in full-stack systems, performance optimization, and delivering scalable solutions that power our core platforms.",
    },{
      name: "Naveen Kumar S",
      position: " Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on research, insights, and product validation to ensure Sprintxplore’s offerings are data-backed and future-aligned.",
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
