"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");





  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try{
      const res = await fetch("/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          subject,
          message
        })
      })
      if(res.ok){
        setIsSubmitting(false)
        setIsSubmitted(true)
      }
    }catch(err){
      console.log(err)
    }
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    
  }

  return (
    <motion.div
      className="rounded-xl bg-white p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <motion.div
          className="flex h-full flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Message Sent!</h3>
          <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              onChange={(e)=>{setSubject(e.target.value)}}
              placeholder="How can we help you?"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              onChange={(e)=>{setMessage(e.target.value)}}
              placeholder="Your message..."
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </motion.div>
  )
}
