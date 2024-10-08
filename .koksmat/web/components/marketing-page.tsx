import Image from "next/image"
import { Calendar, CheckCircle, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CAVA2: Revolutionizing Hybrid Workplaces</h1>
        <p className="text-xl text-gray-600">Seamlessly manage your office space with Microsoft 365 integration</p>
      </header>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Reservation desk and room</h2>
            <p className="text-gray-600 mb-4">
              Offer your employees the ability to reserve shared resources such as desks and meeting rooms, integrated
              directly with Microsoft Teams and Outlook.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Desk reservation interface"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">A new way of experiencing the office</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Checking the availability of workstations and rooms, and reserving them in advance or in real time is an
              effective way to avoid overlaps and save valuable time in searching for vacant space.
            </p>
            <p className="text-gray-600">
              Reservation data enable you to manage office occupancy over time, optimizing work environments to meet
              people's needs and to improve efficiency in the management and use of energy resources.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Person working at a desk"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Book
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Easily book desks and meeting rooms through our intuitive interface, synced with Microsoft 365.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Confirm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Receive instant confirmations and reminders for your bookings, integrated with Teams and Outlook.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-6 w-6" />
                Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Collaborate effortlessly by sharing booking information and workspace details with colleagues.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to transform your workplace?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join the future of hybrid work management with CAVA2 and Microsoft 365.
        </p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  )
}