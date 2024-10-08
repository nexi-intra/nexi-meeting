import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Github } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Hybrid Workplace
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  CAVA2: The open-source solution for seamless workspace management. Boost productivity, enhance collaboration, and optimize your office space.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/cava2-project">
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Smart Booking", description: "Effortlessly book desks, rooms, and resources", icon: "/undraw_booking.svg" },
                { title: "Wayfinding", description: "Navigate your workplace with ease", icon: "/undraw_navigation.svg" },
                { title: "Analytics", description: "Gain insights into space utilization", icon: "/undraw_analytics.svg" },
                { title: "Integration", description: "Seamless integration with Microsoft 365", icon: "/undraw_integration.svg" },
                { title: "Mobile Apps", description: "Access CAVA2 on the go", icon: "/undraw_mobile.svg" },
                { title: "Open Source", description: "Customizable and community-driven", icon: "/undraw_open_source.svg" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image src={feature.icon} alt={feature.title} width={150} height={150} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "Office Manager", quote: "CAVA2 has transformed how we manage our hybrid workplace. It's intuitive and powerful!" },
                { name: "Michael Chen", role: "IT Director", quote: "The open-source nature of CAVA2 allowed us to customize it to our specific needs. Brilliant!" },
                { name: "Emma Rodriguez", role: "Facilities Coordinator", quote: "From room booking to wayfinding, CAVA2 has streamlined our entire office experience." },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                  <cite className="font-bold">{testimonial.name}</cite>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "Free", features: ["Up to 50 users", "Core booking features", "Community support"] },
                { name: "Pro", price: "$5/user/month", features: ["Unlimited users", "Advanced analytics", "Priority support", "Custom integrations"] },
                { name: "Enterprise", price: "Custom", features: ["All Pro features", "On-premises deployment", "Dedicated account manager", "Custom development"] },
              ].map((plan, index) => (
                <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Workplace?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join the CAVA2 community today and experience the future of hybrid work management.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CAVA2. All rights reserved.</p>
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