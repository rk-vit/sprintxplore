"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImprovedHeroAnimation from "@/components/hero-animation"
import ScrollAnimation from "@/components/scroll-animation"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Background Elements - Keep gradient for all devices */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 md:top-20 md:left-10 bg-red-500/20 md:bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 md:bottom-20 md:right-10 bg-yellow-400/20 md:bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-gradient-to-r from-red-500/15 to-yellow-400/15 md:from-red-500/5 md:to-yellow-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 md:pt-20 w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center w-full">
          <ScrollAnimation direction="left">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 w-full">
              <div className="space-y-4 md:space-y-6">
                <ScrollAnimation delay={0.2} direction="down">
                  <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-red-700">
                    🚀 Welcome to the Future of Tech Education
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4}>
                  <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                    Empowering Innovation
                    <br />
                    <span className="relative">
                      <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                        Enabling Possibility.
                      </span>
                      <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_1s_forwards]"></div>
                    </span>
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation delay={0.6}>
                  <p className="max-w-[600px] text-lg md:text-xl text-gray-600 leading-relaxed">
                    Build smarter, faster, and with purpose. From GenAI to low-code/no-code development, we equip learners and creators with the tools to lead in tomorrow's digital world.
                  </p>
                </ScrollAnimation>
              </div>
              <ScrollAnimation delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                  >
                    Talk to Us
                    <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </ScrollAnimation>
              {/*
              <ScrollAnimation delay={1}>
              
                <div className="flex items-center justify-between sm:justify-start sm:space-x-8 pt-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-xs md:text-sm text-gray-600">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
                    <div className="text-xs md:text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">98%</div>
                    <div className="text-xs md:text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
                
              </ScrollAnimation>
              */}
            </div>
          </ScrollAnimation>
          {/* Hero animation - Only show on desktop */}
          {!isMobile && (
            <div className="hidden md:flex items-center justify-center">
              <ImprovedHeroAnimation />
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs text-gray-500 font-medium">Scroll Down</div>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
