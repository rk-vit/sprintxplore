import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeInitializer from "@/components/ui/themeInitializer"
import { Head } from "react-day-picker"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "SprintXplore - Innovative EdTech Solutions",
  description: "SprintXplore offers cutting-edge tech education, software development, and digital solutions.",
  icons: {
    icon: "/favicon.svg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>  
        <Header/>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  )
}
