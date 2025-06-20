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
  title: "Sprintxplore | Fast-track your digital transformation journey!",
  description: "Sprintxplore offers intelligent digital ecosystems that empower creators, teams, and businesses to explore, design, and deploy innovative solutions.",
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
