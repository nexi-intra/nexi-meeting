import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"

export default function NexiRoomSignageStatic() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const [currentDate, setCurrentDate] = useState(getCurrentDate())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime())
      setCurrentDate(getCurrentDate())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="flex flex-col h-screen bg-[#F4F4F4]">
      <Card className="flex-grow m-4 overflow-hidden shadow-lg">
        <CardContent className="h-full flex flex-col bg-[#00C389] transition-colors duration-300">
          <div className="flex justify-between items-start p-4 text-white">
            <div>
              <img src="/Nexi_Logo.svg" alt="Nexi Logo" className="h-8 mb-2" />
              <div className="text-2xl font-bold">Meeting room is available</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{currentTime}</div>
              <div>{currentDate}</div>
            </div>
          </div>
          <div className="flex-grow bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl font-bold mb-2">Meeting Room 12</div>
              <div className="mt-4">
                <img src="/placeholder.svg?height=200&width=200" alt="QR Code" className="mx-auto" />
                <div className="mt-2 text-sm">Scan for room assistant</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}