import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image src="/logo-white.png" alt="SprintXplore Logo" fill className="object-contain" />
            </div>
            <p className="text-sm">
              Empowering the next generation through innovative tech education, software development, and digital
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-red-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-red-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-red-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-red-500">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="mt-1 h-4 w-4 text-red-500" />
                <span>reach@sprintxplore.com</span>
              </li>
              <li>
                <address className="not-italic">
                  MAHARAJ SHELTERS, 12A,
                  <br />
                  VEERAPANDIA KATTABOMMAN STREET,
                  <br />
                  CHITLAPAKKAM, CHENNAI - 600064
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} SprintXplore Infotech Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm hover:text-red-500">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-red-500">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-red-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
