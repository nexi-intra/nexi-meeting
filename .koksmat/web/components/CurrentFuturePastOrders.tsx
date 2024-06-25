/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W0RKMEfDIsI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Order {
  id: number;
  name: string;
  date: string;
  status: "current" | "future" | "past";
  outlook: string | null;
}

export default function CurrentFuturePastOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"current" | "future" | "past">(
    "current"
  );
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      name: "Weekly Team Meeting",
      date: "2024-06-26",
      status: "current",
      outlook:
        "https://outlook.office.com/calendar/item?subject=Weekly%20Team%20Meeting&start=2024-06-26T10:00:00&end=2024-06-26T11:00:00",
    },
    {
      id: 2,
      name: "Monthly Sales Review",
      date: "2024-07-15",
      status: "future",
      outlook: null,
    },
    {
      id: 3,
      name: "Quarterly Business Review",
      date: "2024-04-01",
      status: "past",
      outlook:
        "https://outlook.office.com/calendar/item?subject=Quarterly%20Business%20Review&start=2024-04-01T14:00:00&end=2024-04-01T16:00:00",
    },
  ]);

  const handleAddOrder = () => {
    router.push(`/meeting/shop/new`);
    // const newOrder: Order = {
    //   id: orders.length + 1,
    //   name: "New Meeting",
    //   date: "2024-06-30",
    //   status: "future",
    //   outlook: null,
    // };
    // setOrders([...orders, newOrder]);
    // setActiveTab("future");
  };

  const handleEditOrder = (id: number) => {
    router.push(`/orders/${id}`);
  };

  const handleCancelOrder = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleConnectToOutlook = (id: number) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return {
          ...order,
          outlook:
            "https://outlook.office.com/calendar/item?subject=New%20Meeting&start=2024-06-30T10:00:00&end=2024-06-30T11:00:00",
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Meeting Planner</h1>
        <Button size="lg" onClick={handleAddOrder}>
          Add New Order
        </Button>
      </div>
      <Tabs
        defaultValue={activeTab}
        onValueChange={(value: string) =>
          setActiveTab(value as "current" | "future" | "past")
        }
        className="border-b"
      >
        <TabsList>
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="py-6">
          <div className="grid gap-4">
            {orders
              .filter((order) => order.status === "current")
              .map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <CardTitle>{order.name}</CardTitle>
                    <CardDescription>
                      {new Date(order.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        {order.outlook && (
                          <Link
                            href={order.outlook}
                            target="_blank"
                            prefetch={false}
                          >
                            View in Outlook
                          </Link>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handleEditOrder(order.id)}
                      >
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="future" className="py-6">
          <div className="grid gap-4">
            {orders
              .filter((order) => order.status === "future")
              .map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <CardTitle>{order.name}</CardTitle>
                    <CardDescription>
                      {new Date(order.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        {order.outlook ? (
                          <Link
                            href={order.outlook}
                            target="_blank"
                            prefetch={false}
                          >
                            View in Outlook
                          </Link>
                        ) : (
                          <Button
                            variant="outline"
                            onClick={() => handleConnectToOutlook(order.id)}
                          >
                            Connect to Outlook
                          </Button>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleEditOrder(order.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="py-6">
          <div className="grid gap-4">
            {orders
              .filter((order) => order.status === "past")
              .map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <CardTitle>{order.name}</CardTitle>
                    <CardDescription>
                      {new Date(order.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        {order.outlook && (
                          <Link
                            href={order.outlook}
                            target="_blank"
                            prefetch={false}
                          >
                            View in Outlook
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
