import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Users, Tv } from 'lucide-react'

export default function NexiMobileAssistant() {
  const [roomStatus, setRoomStatus] = useState('available')
  const [bookingDuration, setBookingDuration] = useState(30)

  const getStatusColor = () => {
    switch (roomStatus) {
      case 'available':
        return 'bg-[#00C389] text-white'
      case 'occupied':
        return 'bg-[#FF4438] text-white'
      case 'reserved':
        return 'bg-[#FFC72C] text-[#1E2339]'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const getStatusText = () => {
    switch (roomStatus) {
      case 'available':
        return 'Available'
      case 'occupied':
        return 'Occupied'
      case 'reserved':
        return 'Reserved'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] p-4">
      <header className="flex items-center justify-between mb-6">
        <img src="/Nexi_Logo.svg" alt="Nexi Logo" className="h-8" />
        <h1 className="text-xl font-bold text-[#1E2339]">Room Assistant</h1>
      </header>

      <Card className="mb-6">
        <CardHeader className={`${getStatusColor()}`}>
          <CardTitle className="flex justify-between items-center">
            <span>Meeting Room 12</span>
            <span>{getStatusText()}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="flex items-center mb-2">
            <Clock className="mr-2 h-4 w-4 text-[#1E2339]" />
            <span>Current time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-[#1E2339]" />
            <span>Today: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Quick Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="duration">Duration (minutes):</Label>
              <Input
                id="duration"
                type="number"
                value={bookingDuration}
                onChange={(e) => setBookingDuration(parseInt(e.target.value))}
                className="w-20"
              />
            </div>
            <Button className="w-full bg-[#00C389] hover:bg-[#00A372] text-white" onClick={() => setRoomStatus('occupied')}>
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Room Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-[#1E2339]" />
              <span>Capacity: 8 people</span>
            </li>
            <li className="flex items-center">
              <Tv className="mr-2 h-4 w-4 text-[#1E2339]" />
              <span>Video conferencing equipment</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6 space-x-2 flex justify-center">
        <Button variant="outline" onClick={() => setRoomStatus('available')}>Set Available</Button>
        <Button variant="outline" onClick={() => setRoomStatus('reserved')}>Set Reserved</Button>
      </div>
    </div>
  )
}