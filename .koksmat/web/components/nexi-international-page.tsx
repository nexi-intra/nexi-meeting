import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Globe, Heart, Handshake, MountainIcon, Users } from "lucide-react"

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">CAVA2</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About CAVA2
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#values">
            Our Values
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tech">
            Tech Stack
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#join">
            Join Us
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CAVA2
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Building a better future for our employees, partners, communities we work in and customers
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#join">
                  <Button className="bg-white text-black hover:bg-gray-200">Join Our Team</Button>
                </Link>
                <Link href="#about">
                  <Button className=' text-black' variant="outline">Learn More</Button>
                </Link>
              </div>
              <p className="text-sm text-gray-400">An initiative of <Link target='_blank' href="https://christianiabpos.sharepoint.com/sites/nexiintra-home/SitePages/Multicultural-Diversity.aspx">Nexi International ERG</Link></p>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About CAVA2</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  Revolutionizing hybrid workplaces through continuous learning and AI-powered solutions, while promoting diversity, equity, and inclusion.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  Integrating Microsoft 365 tools with AI-driven insights to create a dynamic, inclusive work environment that fosters growth and collaboration.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  A diverse group of passionate learners and innovators from within the Nexi Group, dedicated to shaping the future of work and promoting cultural understanding.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Values</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <Handshake className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Improve ways of working</h3>
                <p>Continuously innovating our processes and tools to enhance productivity and collaboration.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Create a sense of belonging</h3>
                <p>Fostering an inclusive environment where every team member feels valued and respected.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Promote cultural understanding</h3>
                <p>Embracing diversity and encouraging cross-cultural learning and appreciation.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="tech" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Cutting-Edge Tech Stack</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    AI-Powered Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage AI to personalize learning paths, recommend relevant content, and optimize skill development for each team member, promoting inclusivity and diversity in learning opportunities.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    Modern Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Our tech stack includes the most advanced tools and frameworks, ensuring CAVA2 is at the forefront of innovation in hybrid workplace solutions while supporting our diversity and inclusion goals.
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Microsoft 365", "Exchange", "Teams", "Office Graph", "Outlook", "Microsoft Spaces", "AI", "Machine Learning", "React", "Node.js"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the CAVA2 Revolution</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're looking for passionate individuals within the Nexi Group to contribute to the future of inclusive, hybrid work environments.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your work email" type="email" />
                  <Button type="submit">
                    Join Us
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By submitting, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Workplace?</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in creating an inclusive future of hybrid work with CAVA2.
                </p>
              </div>
              <div
                className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="#join" className="flex items-center">
                  Get Involved {isHovered && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CAVA2 Project. An initiative of Nexi International ERG. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}