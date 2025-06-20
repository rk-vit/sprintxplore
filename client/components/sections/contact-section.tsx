import ContactForm from "@/components/contact-form"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: (
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      bgColor: "bg-red-100",
      title: "Phone",
      content: "+91 63852 80525",
    },
    {
      icon: (
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      bgColor: "bg-yellow-100",
      title: "Email",
      content: "reach@sprintxplore.com",
    },
    {
      icon: (
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
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      bgColor: "bg-red-100",
      title: "Address",
      content: "MAHARAJ SHELTERS, 12A, VEERAPANDIA KATTABOMMAN STREET, CHITLAPAKKAM, CHENNAI - 600064",
    },
    {
      icon: (
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
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      bgColor: "bg-yellow-100",
      title: "LinkedIn",
      content: "@sprintxplore infotech Pvt Ltd",
    },
  ]

  return (
    <section id="contact" className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Contact Us</h2>
              <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 bg-yellow-400 mx-auto"></div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">Get in touch with our team</p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div
                      className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full ${info.bgColor}`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-medium">{info.title}</h3>
                      <p className="mt-1 text-sm md:text-base text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.4}>
              <ContactForm />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
