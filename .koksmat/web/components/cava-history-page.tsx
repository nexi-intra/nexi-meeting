import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MonitorIcon, BuildingIcon, CarIcon, CloudIcon, DatabaseIcon, LayoutIcon, ServerIcon } from "lucide-react"

// Custom Timeline components
const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative border-l border-gray-200 dark:border-gray-700">
    {children}
  </div>
)

const TimelineItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-10 ml-4">{children}</div>
)

const TimelineIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="absolute w-8 h-8 bg-white rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
    {children}
  </div>
)

const TimelineContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="ml-4">{children}</div>
)

export default function CAVAHistory() {
  const milestones = [
    {
      year: 2020,
      title: "CAVA Inception",
      description: "Started as a replacement for a 3rd party solution.",
      icon: <CalendarIcon className="h-4 w-4" />,
      badges: ["Initial Development"]
    },
    {
      year: 2020,
      title: "Signage Solution",
      description: "Introduced signage solution used across the group.",
      icon: <MonitorIcon className="h-4 w-4" />,
      badges: ["Signage"]
    },
    {
      year: 2022,
      title: "Receptionist Interface",
      description: "Implemented receptionist interface using PowerApps.",
      icon: <BuildingIcon className="h-4 w-4" />,
      badges: ["PowerApps", "Receptionist"]
    },
    {
      year: 2022,
      title: "Desktop Booking v1",
      description: "Built in PowerApps, supporting over 800 desks in Denmark.",
      icon: <LayoutIcon className="h-4 w-4" />,
      badges: ["PowerApps", "Desk Booking"]
    },
    {
      year: 2022,
      title: "Cloud Native Transition Begins",
      description: "Started rebuilding everything to be Cloud Native.",
      icon: <CloudIcon className="h-4 w-4" />,
      badges: ["Kubernetes", "Microservices", "Go"]
    },
    {
      year: 2023,
      title: "Exchange Management Microservice",
      description: "Added microservice to manage Exchange using PowerShell from self-service applications.",
      icon: <ServerIcon className="h-4 w-4" />,
      badges: ["Microservice", "PowerShell", "Exchange"]
    },
    {
      year: 2024,
      title: "New Booking Solution",
      description: "Modern stack supporting both parking and desk booking in Croatia.",
      icon: <CarIcon className="h-4 w-4" />,
      badges: ["Parking", "Desk Booking", "Croatia"]
    },
    {
      year: 2024,
      title: "Full Stack Modernization",
      description: "Completed transition to a modern, cloud-native architecture.",
      icon: <DatabaseIcon className="h-4 w-4" />,
      badges: ["PostgreSQL", "Superset", "Next.js", "TypeScript"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">The Evolution of CAVA</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Journey</CardTitle>
          <CardDescription>From 3rd party replacement to cloud-native powerhouse</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineIcon>
                  {milestone.icon}
                </TimelineIcon>
                <TimelineContent>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <span className="text-sm text-gray-500">{milestone.year}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{milestone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {milestone.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </div>
  )
}