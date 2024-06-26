/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CjlakxL8Jxo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, ChangeEvent } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { SelectContent, SelectItem } from "@radix-ui/react-select";

interface Order {
  id: number;
  customer: string;
  details: string;
  deliveryOption: string;
  room: string;
  accepted?: boolean;
}

export default function FutureOrders() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer: "Acme Inc.",
      details: "20 Lunch Boxes, 10 Vegetarian, Delivery at 11:30 AM",
      deliveryOption: "delivery",
      room: "",
    },
    {
      id: 2,
      customer: "Globex Corp.",
      details: "30 Breakfast Platters, Delivery at 8:00 AM",
      deliveryOption: "delivery",
      room: "",
    },
    {
      id: 3,
      customer: "Stark Industries",
      details: "15 Dinner Meals, 5 Vegan, Pickup at 6:00 PM",
      deliveryOption: "pickup",
      room: "",
    },
    {
      id: 4,
      customer: "Wayne Enterprises",
      details: "25 Lunch Boxes, Delivery at 12:00 PM",
      deliveryOption: "delivery",
      room: "",
    },
    {
      id: 5,
      customer: "Cyberdyne Systems",
      details: "40 Breakfast Platters, Delivery at 7:30 AM",
      deliveryOption: "delivery",
      room: "",
    },
  ]);
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [newOrder, setNewOrder] = useState<Omit<Order, "id">>({
    customer: "",
    details: "",
    deliveryOption: "delivery",
    room: "",
  });

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleOrderAccept = () => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id) ? { ...order, accepted: true } : order
      )
    );
    setSelectedOrders([]);
  };

  const handleOrderDecline = () => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id)
          ? { ...order, accepted: false }
          : order
      )
    );
    setSelectedOrders([]);
  };

  const handleOrderSelection = (orderId: number) => {
    setSelectedOrders((prevSelectedOrders) =>
      prevSelectedOrders.includes(orderId)
        ? prevSelectedOrders.filter((id) => id !== orderId)
        : [...prevSelectedOrders, orderId]
    );
  };

  const handleDeliveryOptionChange = (orderId: number, option: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, deliveryOption: option } : order
      )
    );
  };

  const handleRoomChange = (orderId: number, room: string) => {
    setOrders(
      orders.map((order) => (order.id === orderId ? { ...order, room } : order))
    );
  };

  const handleNewOrderChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleAddNewOrder = () => {
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
    setNewOrder({
      customer: "",
      details: "",
      deliveryOption: "delivery",
      room: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Catering Orders</h1>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                {selectedDate.toDateString()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                initialFocus
                selected={selectedDate}
                onSelect={(date) => {}}
              />
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <div className="border rounded-lg w-full">
        <div className="relative w-full overflow-auto">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={handleOrderAccept}
                disabled={selectedOrders.length === 0}
              >
                Accept
              </Button>
              <Button
                variant="destructive"
                onClick={handleOrderDecline}
                disabled={selectedOrders.length === 0}
              >
                Decline
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                name="customer"
                placeholder="Customer Name"
                value={newOrder.customer}
                onChange={handleNewOrderChange}
              />
              <Input
                type="text"
                name="details"
                placeholder="Order Details"
                value={newOrder.details}
                onChange={handleNewOrderChange}
              />
              <Select
                name="deliveryOption"
                value={newOrder.deliveryOption}
                onValueChange={(value) =>
                  setNewOrder({ ...newOrder, deliveryOption: value })
                }
              >
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
              {newOrder.deliveryOption === "delivery" && (
                <Input
                  type="text"
                  name="room"
                  placeholder="Room Number"
                  value={newOrder.room}
                  onChange={handleNewOrderChange}
                />
              )}
              <Button onClick={handleAddNewOrder}>Add Order</Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    checked={
                      selectedOrders.length === orders.length &&
                      orders.length > 0
                    }
                    // indeterminate={
                    //   selectedOrders.length > 0 &&
                    //   selectedOrders.length < orders.length
                    // }
                    onCheckedChange={() =>
                      setSelectedOrders(
                        selectedOrders.length === orders.length
                          ? []
                          : orders.map((order) => order.id)
                      )
                    }
                  />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Order Details</TableHead>
                <TableHead>Delivery Option</TableHead>
                <TableHead>Room</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedOrders.includes(order.id)}
                      onCheckedChange={() => handleOrderSelection(order.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {order.customer}
                  </TableCell>
                  <TableCell>{order.details}</TableCell>
                  <TableCell>
                    <Select
                      value={order.deliveryOption}
                      onValueChange={(value) =>
                        handleDeliveryOptionChange(order.id, value)
                      }
                    >
                      <SelectContent>
                        <SelectItem value="delivery">Delivery</SelectItem>
                        <SelectItem value="pickup">Pickup</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {order.deliveryOption === "delivery" && (
                      <Input
                        type="text"
                        value={order.room}
                        onChange={(e) =>
                          handleRoomChange(order.id, e.target.value)
                        }
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant={order.accepted ? "default" : "outline"}
                        onClick={() => handleOrderAccept()}
                        disabled={order.accepted}
                      >
                        {order.accepted ? "Accepted" : "Accept"}
                      </Button>
                      <Button
                        variant={!order.accepted ? "destructive" : "outline"}
                        onClick={() => handleOrderDecline()}
                        disabled={!order.accepted}
                      >
                        {!order.accepted ? "Decline" : "Declined"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
