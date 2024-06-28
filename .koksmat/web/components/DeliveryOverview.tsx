/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gkk4FRgRNjV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DatePicker } from "./DatePicker";
import PickCostCentre from "./PickCostCentre";
import PickDeliveryPlace from "./PickDeliveryPlace";
import { TimePicker } from "./TimePicker";
import { ValidDateTime } from "./OrderForm";

interface Order {
  id: number;
  customer: string;
  items: string[];
  deliveryTime: string;
  status: string;
  pickupLocation: string;
  deliveryLocation: string;
  concurrentHandling: boolean;
}

export default function DeliveryOverview() {
  const [orderDate, setorderDate] = useState<Date>();
  const [minutesFromMidnight, setMinutesFromMidnight] = useState<number>(0);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer: "John Doe",
      items: ["Burger", "Fries", "Soda"],
      deliveryTime: "9:00 AM",
      status: "accepted",
      pickupLocation: "123 Main St",
      deliveryLocation: "456 Oak St",
      concurrentHandling: true,
    },
    {
      id: 2,
      customer: "Jane Smith",
      items: ["Salad", "Water"],
      deliveryTime: "9:15 AM",
      status: "in progress",
      pickupLocation: "789 Elm St",
      deliveryLocation: "321 Pine St",
      concurrentHandling: true,
    },
    {
      id: 3,
      customer: "Bob Johnson",
      items: ["Pizza", "Breadsticks", "Soda"],
      deliveryTime: "9:30 AM",
      status: "delivered",
      pickupLocation: "159 Maple St",
      deliveryLocation: "753 Oak St",
      concurrentHandling: false,
    },
    {
      id: 4,
      customer: "Emily Davis",
      items: ["Pasta", "Garlic Bread"],
      deliveryTime: "9:45 AM",
      status: "accepted",
      pickupLocation: "246 Cedar St",
      deliveryLocation: "468 Walnut St",
      concurrentHandling: true,
    },
    {
      id: 5,
      customer: "Michael Wilson",
      items: ["Sandwich", "Chips"],
      deliveryTime: "10:00 AM",
      status: "cancelled",
      pickupLocation: "369 Birch St",
      deliveryLocation: "147 Pine St",
      concurrentHandling: false,
    },
  ]);

  const totalOrders = orders.length;
  const concurrentOrders = orders.filter(
    (order) => order.concurrentHandling
  ).length;

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex space-x-2">
        <DatePicker date={orderDate} setDate={setorderDate} />
        <div className="max-w-32">
          <TimePicker
            minutesFromMidnight={minutesFromMidnight}
            onChange={setMinutesFromMidnight}
          />
        </div>
        <div>
          <ValidDateTime
            date={orderDate}
            minutesFromMidnight={minutesFromMidnight}
          />
        </div>
        <div>
          <PickDeliveryPlace />
        </div>
        {/* <div>
          <PickUser />
        </div> */}
        <div>
          <PickCostCentre />
        </div>
      </div>
      <main className="flex-1 overflow-y-auto">
        <div className="grid gap-4 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-muted-foreground mb-2 sm:mb-0">
              Total Orders: {totalOrders}
            </div>
            <div className="text-muted-foreground">
              Concurrent Orders: {concurrentOrders}
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Delivery Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pickup Location</TableHead>
                  <TableHead>Delivery Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders
                  .sort(
                    (a, b) =>
                      new Date(a.deliveryTime).getTime() -
                      new Date(b.deliveryTime).getTime()
                  )
                  .map((order) => (
                    <TableRow
                      key={order.id}
                      className={`${
                        !order.concurrentHandling ? "bg-red-100" : ""
                      }`}
                    >
                      <TableCell>
                        <div className="font-medium">{order.customer}</div>
                      </TableCell>
                      <TableCell>
                        <div>{order.items.join(", ")}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{order.deliveryTime}</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Select
                            value={order.status}
                            onValueChange={(value) =>
                              handleStatusChange(order.id, value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="accepted">Accepted</SelectItem>
                              <SelectItem value="in progress">
                                In Progress
                              </SelectItem>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>{order.pickupLocation}</div>
                      </TableCell>
                      <TableCell>
                        <div>{order.deliveryLocation}</div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
