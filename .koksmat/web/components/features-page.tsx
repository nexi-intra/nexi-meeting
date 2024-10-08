"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar, Users, BarChart, MapPin, Monitor, Coffee, ShieldCheck, HeadphonesIcon, Cog, PieChart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    id: 'meeting-planning',
    title: 'Meeting Planning',
    icon: Calendar,
    description: 'Effortlessly plan and organize meetings with our intuitive planning tools.',
    illustration: '/undraw_schedule_meeting.svg',
  },
  {
    id: 'room-booking',
    title: 'Room Booking',
    icon: Users,
    description: 'Seamlessly book meeting rooms across your organization.',
    illustration: '/undraw_business_chat.svg',
  },
  {
    id: 'desk-booking',
    title: 'Desk Booking',
    icon: Monitor,
    description: 'Enable flexible work arrangements with our desk booking system.',
    illustration: '/undraw_laravel_and_vue.svg',
  },

  {
    id: 'townhall-meetings',
    title: 'Townhall Meetings',
    icon: Users,
    description: 'Organize and manage large-scale townhall meetings with ease.',
    illustration: '/undraw_fans.svg',
  },
  {
    id: 'wayfinding',
    title: 'Wayfinding',
    icon: MapPin,
    description: 'Help employees and visitors navigate your workplace effortlessly.',
    illustration: '/undraw_directions.svg',
  },
  {
    id: 'room-signage',
    title: 'Room Signage',
    icon: Monitor,
    description: 'Digital signage solutions for clear room status and booking information.',
    illustration: '/undraw_helpful_sign.svg',
  },
  {
    id: 'supporting-apps',
    title: 'Supporting Apps',
    icon: Coffee,
    description: 'Specialized apps for various roles within your organization.',
    illustration: '/undraw_apps.svg',
    subFeatures: [
      'Receptionist',
      'Physical Security',
      'Guests',
      'Facility Management',
      'Catering',
      'Admin',
      '1st Level Support'
    ]
  },
  {
    id: 'utilisation-reports',
    title: 'Utilisation Reports',
    icon: PieChart,
    description: 'Gain insights into space utilization and optimize your workplace.',
    illustration: '/undraw_analytics.svg',
  },
]

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    features.forEach((feature) => {
      const element = document.getElementById(feature.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex">
      {/* Table of Contents */}
      <aside className="w-64 h-screen overflow-y-auto p-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <nav>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature.id}>
                <a
                  href={`#${feature.id}`}
                  className={`text-sm transition-colors hover:text-primary ${activeSection === feature.id ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                >
                  {feature.title}
                </a>
                {feature.subFeatures && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {feature.subFeatures.map((subFeature) => (
                      <li key={subFeature}>
                        <a
                          href={`#${feature.id}-${subFeature.toLowerCase().replace(' ', '-')}`}
                          className="text-xs text-muted-foreground hover:text-primary"
                        >
                          {subFeature}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">CAVA2 Features</h1>

        <section className="mb-12">
          <p className="text-lg mb-4">
            Discover how CAVA2 revolutionizes hybrid workplace management with its powerful features.
          </p>
        </section>

        {features.map((feature) => (
          <section key={feature.id} id={feature.id} className="mb-16 scroll-mt-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <feature.icon className="h-8 w-8 text-primary" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <Image
                      src={feature.illustration}
                      alt={`${feature.title} illustration`}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Illustration: Open source from unDraw
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Key Benefits</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Streamlined {feature.title.toLowerCase()} process</li>
                      <li>Increased efficiency and productivity</li>
                      <li>Enhanced user experience for employees and visitors</li>
                    </ul>
                    {feature.subFeatures && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">Supporting Apps</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {feature.subFeatures.map((subFeature) => (
                            <li key={subFeature} id={`${feature.id}-${subFeature.toLowerCase().replace(' ', '-')}`} className="flex items-center">
                              <Coffee className="h-4 w-4 mr-2 text-primary" />
                              {subFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button className="mt-4">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        ))}

        <section className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Ready to transform your workplace?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the power of CAVA2 in your organization.
          </p>
          <Button size="lg">Get Started with CAVA2</Button>
        </section>
      </div>
    </div>
  )
}