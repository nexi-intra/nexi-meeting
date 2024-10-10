import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from 'lucide-react'
import NexiRoomSignageStatic from './room-signage-page'
import NexiMobileAssistant from './nexi-mobile-assistant-page'

export default function NexiRoomManagementDemoOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-[#00C389] hover:bg-[#00A372] text-white"
          onClick={() => setIsOpen(true)}
        >
          Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] w-[1200px] h-[90vh] p-0">
        <div className="relative h-full overflow-hidden">
          <Button
            className="absolute top-2 right-2 z-10"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex flex-col md:flex-row h-full overflow-auto">
            <div className="w-full md:w-1/2 border-b md:border-r border-gray-300">
              <h2 className="text-xl font-bold text-center py-4 bg-[#1E2339] text-white">Room Signage Display</h2>
              <div className="h-[calc(100%-4rem)] overflow-auto">
                <NexiRoomSignageStatic />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold text-center py-4 bg-[#1E2339] text-white">Mobile Assistant (After QR Scan)</h2>
              <div className="h-[calc(100%-4rem)] overflow-auto">
                <NexiMobileAssistant />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}