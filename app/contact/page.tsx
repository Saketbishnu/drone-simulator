"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-50"></div>
          <h1 className="text-4xl font-bold text-center mb-2 relative z-10 text-gray-100">CONTACT COMMAND CENTER</h1>
          <p className="text-center mb-8 text-gray-400 relative z-10">Secure communication channel for mission-critical inquiries</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-xl text-gray-100">ESTABLISH SECURE CONNECTION</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">OPERATOR IDENTIFICATION</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter operator name"
                      required
                      className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">COMMUNICATION CHANNEL</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter secure email"
                      required
                      className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">MISSION CLASSIFICATION</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter mission subject"
                    required
                    className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">MISSION BRIEFING</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter mission details"
                    className="min-h-[150px] bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "ESTABLISHING CONNECTION..." : "INITIATE TRANSMISSION"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-xl text-gray-100">COMMAND CENTER DETAILS</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="font-semibold text-gray-100">SECURE CHANNEL:</span>
                    <a href="mailto:support@dronesimulator.com" className="text-blue-400 hover:text-blue-300">
                      command@dronesimulator.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="font-semibold text-gray-100">COMMUNICATION LINE:</span>
                    <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <span className="font-semibold text-gray-100">BASE LOCATION:</span>
                    <span>123 Drone Street, Tech City, TC 12345</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-xl text-gray-100">OPERATIONAL HOURS</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2 text-gray-300">
                  <p>PRIMARY SHIFT: 0900 - 1800 HOURS</p>
                  <p>SECONDARY SHIFT: 1000 - 1600 HOURS</p>
                  <p>MAINTENANCE WINDOW: 0000 - 0800 HOURS</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
