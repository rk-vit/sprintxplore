"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const element = document.getElementById(targetId.replace("#", ""))
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-40">
                <Image src="/logo.svg" alt="SprintXplore Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#")}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#about")}
            >
              About
            </Link>
            <Link
              href="#vision-mission"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#vision-mission")}
            >
              Vision & Mission
            </Link>
            <Link
              href="#technologies"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#technologies")}
            >
              Technologies
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#team")}
            >
              Team
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#courses")}
            >
              Courses
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-red-600"
              onClick={(e) => smoothScroll(e, "#contact")}
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with improved visibility */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/" className="block py-2 text-base font-medium" onClick={(e) => smoothScroll(e, "#")}>
              Home
            </Link>
            <Link href="#about" className="block py-2 text-base font-medium" onClick={(e) => smoothScroll(e, "#about")}>
              About
            </Link>
            <Link
              href="#vision-mission"
              className="block py-2 text-base font-medium"
              onClick={(e) => smoothScroll(e, "#vision-mission")}
            >
              Vision & Mission
            </Link>
            <Link
              href="#technologies"
              className="block py-2 text-base font-medium"
              onClick={(e) => smoothScroll(e, "#technologies")}
            >
              Technologies
            </Link>
            <Link href="#team" className="block py-2 text-base font-medium" onClick={(e) => smoothScroll(e, "#team")}>
              Team
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-base font-medium"
              onClick={(e) => smoothScroll(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#courses"
              className="block py-2 text-base font-medium"
              onClick={(e) => smoothScroll(e, "#courses")}
            >
              Courses
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-base font-medium"
              onClick={(e) => smoothScroll(e, "#contact")}
            >
              Contact
            </Link>
            <Button className="mt-4 w-full bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
