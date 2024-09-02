"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { useSQLSelect3 } from "@/app/koksmat/usesqlselect3";
export interface Result {
  resource_id: string;
  hour: number;
  utilization_hours: number;
}
type HeatMapData = {
  room: string;
  "9AM": number;
  "10AM": number;
  "11AM": number;
  "12PM": number;
  "1PM": number;
  "2PM": number;
  "3PM": number;
  "4PM": number;
  "5PM": number;
};

type BookingData = {
  id: number;
  room: string;
  start: string;
  end: string;
  bookedBy: string;
};

export default function BookingUtilization() {
  const [country, setCountry] = useState<string>("");
  const [site, setSite] = useState<string>("");
  const [building, setBuilding] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [isDateOpen, setIsDateOpen] = useState<boolean>(false);
  const timeslots = useSQLSelect3(
    "mix",
    `WITH bookings AS (
    SELECT 
        resource_id, 
        start_date, 
        end_date, 
        hour,
        0.25 AS booked_hours -- each record represents 15 minutes (0.25 hours)
    FROM 
        booking.utilization
    WHERE 
        resource_id ILIKE 'room-dk%'
        AND hour > 7 AND hour < 17 
        --AND start_date >= '2024-01-01' AND end_date <= '2024-01-31'
)
SELECT 
    resource_id,
    --,start_date,
   hour,
    SUM(booked_hours) AS utilization_hours
FROM 
    bookings
GROUP BY 
    resource_id --, start_date, 
    ,hour
ORDER BY 
    resource_id
    --, start_date, 
    ,hour
--LIMIT 100;

`
  );

  // Mock data for the heat map
  const heatMapData: HeatMapData[] = [
    {
      room: "Conference Room A",
      "9AM": 30,
      "10AM": 50,
      "11AM": 80,
      "12PM": 40,
      "1PM": 60,
      "2PM": 70,
      "3PM": 90,
      "4PM": 55,
      "5PM": 30,
    },
    {
      room: "Meeting Room B",
      "9AM": 20,
      "10AM": 40,
      "11AM": 60,
      "12PM": 80,
      "1PM": 70,
      "2PM": 50,
      "3PM": 30,
      "4PM": 45,
      "5PM": 20,
    },
    {
      room: "Boardroom",
      "9AM": 10,
      "10AM": 30,
      "11AM": 50,
      "12PM": 70,
      "1PM": 90,
      "2PM": 80,
      "3PM": 60,
      "4PM": 40,
      "5PM": 10,
    },
    {
      room: "Huddle Space 1",
      "9AM": 40,
      "10AM": 60,
      "11AM": 70,
      "12PM": 50,
      "1PM": 30,
      "2PM": 40,
      "3PM": 80,
      "4PM": 90,
      "5PM": 50,
    },
    {
      room: "Huddle Space 2",
      "9AM": 50,
      "10AM": 70,
      "11AM": 90,
      "12PM": 60,
      "1PM": 40,
      "2PM": 30,
      "3PM": 50,
      "4PM": 70,
      "5PM": 40,
    },
  ];

  const timeSlots = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  const getColor = (value: number): string => {
    const colors = [
      "#E3F2FD",
      "#BBDEFB",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#2196F3",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
    ];
    const index = Math.min(Math.floor(value / 10), 9);
    return colors[index];
  };

  // Mock data for the booking table
  const bookingData: BookingData[] = [
    {
      id: 1,
      room: "Conference Room A",
      start: "2023-06-15 09:00",
      end: "2023-06-15 10:00",
      bookedBy: "John Doe",
    },
    {
      id: 2,
      room: "Meeting Room B",
      start: "2023-06-15 11:00",
      end: "2023-06-15 12:00",
      bookedBy: "Jane Smith",
    },
    {
      id: 3,
      room: "Boardroom",
      start: "2023-06-15 14:00",
      end: "2023-06-15 16:00",
      bookedBy: "Mike Johnson",
    },
  ];

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Meeting Room Utilization</h1>k
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="country">Country</Label>
          <Select onValueChange={setCountry}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="site">Site</Label>
          <Select onValueChange={setSite}>
            <SelectTrigger id="site">
              <SelectValue placeholder="Select site" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hq">Headquarters</SelectItem>
              <SelectItem value="branch1">Branch Office 1</SelectItem>
              <SelectItem value="branch2">Branch Office 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="building">Building</Label>
          <Select onValueChange={setBuilding}>
            <SelectTrigger id="building">
              <SelectValue placeholder="Select building" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Building A</SelectItem>
              <SelectItem value="b">Building B</SelectItem>
              <SelectItem value="c">Building C</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="room">Room</Label>
          <Select onValueChange={setRoom}>
            <SelectTrigger id="room">
              <SelectValue placeholder="Select room" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="conf1">Conference Room 1</SelectItem>
              <SelectItem value="conf2">Conference Room 2</SelectItem>
              <SelectItem value="meeting1">Meeting Room 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Collapsible open={isDateOpen} onOpenChange={setIsDateOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {startDate && endDate
              ? `${startDate.toDateString()} - ${endDate.toDateString()}`
              : "Select Date Range"}
            {isDateOpen ? (
              <ChevronUpIcon className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Start Date</Label>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                className="rounded-md border"
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                className="rounded-md border"
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Button>Apply Filters</Button>
      <Card>
        <CardHeader>
          <CardTitle>Room Utilization During Business Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Room</th>
                  {timeSlots.map((slot) => (
                    <th key={slot} className="px-4 py-2">
                      {slot}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {heatMapData.map((row: any, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 font-medium">{row.room}</td>
                    {timeSlots.map((slot) => (
                      <td key={slot} className="px-4 py-2">
                        <div
                          className="w-full h-8 rounded"
                          style={{ backgroundColor: getColor(row[slot]) }}
                          title={`${row[slot]}% utilization`}
                        ></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <span className="text-sm mr-2">Low</span>
            <div className="flex">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="w-6 h-4"
                  style={{ backgroundColor: getColor(i * 10) }}
                ></div>
              ))}
            </div>
            <span className="text-sm ml-2">High</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>Booked By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookingData.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.room}</TableCell>
                  <TableCell>{booking.start}</TableCell>
                  <TableCell>{booking.end}</TableCell>
                  <TableCell>{booking.bookedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
