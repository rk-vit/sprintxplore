"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import { Analytics } from "@vercel/analytics/next"
export default function InternshipPage() {
  const [showContact, setShowContact] = useState(false)

  // Google Form URL - replace with your actual form URL
  const gformUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeDtNCI-17v5y8HvuBNmH9kwHVHhqKid9JjgNOe24oU1Tas_A/viewform"

  // Phone number to display
  const phoneNumber = "+91 9677217450"

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Poster Column */}
          <ScrollAnimation direction="up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/internship_poster.jpg?height=800&width=600"
                alt="SprintXplore Internship Program"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </ScrollAnimation>

          {/* Content Column */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                    Internship Program
                  </span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Gain real-world experience working with industry experts on cutting-edge projects. Our internship
                  program is designed to give you practical skills and knowledge that will accelerate your tech career.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-bold">Program Highlights</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    </div>
                    <span>Hands-on experience with real-world projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    </div>
                    <span>Mentorship from industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    </div>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    </div>
                    <span>Opportunity for full-time roles for top performers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Ready to Apply?</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open(gformUrl, "_blank")}
                  >
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 hover:border-red-600 hover:text-red-600 px-6 py-6 text-base font-semibold transition-all duration-300"
                    onClick={() => setShowContact(!showContact)}
                  >
                    Contact Us
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Phone number reveal */}
                {showContact && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 text-center animate-fade-in">
                    <p className="text-sm text-gray-500 mb-1">Call us at:</p>
                    <p className="text-xl font-bold text-gray-800">{phoneNumber}</p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-2">Application Deadline</h2>
                <p className="text-red-600 font-semibold">June 30, 2025</p>
                <p className="text-sm text-gray-600 mt-2">
                  Limited seats available. Apply early to secure your spot in our internship program.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
