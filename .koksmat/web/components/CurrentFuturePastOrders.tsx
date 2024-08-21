/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W0RKMEfDIsI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useEffect, useState } from "react";
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
import { useGraph2 } from "@/app/koksmat/usegraph2";
import { Badge } from "./ui/badge";
import { convertUtcToLocal } from "@/lib/dates";

interface Order {
  id: number;
  name: string;
  date: string;
  status: "current" | "future" | "past";
  outlook: string | null;
}

export interface Event {
  "@odata.etag": string;
  id: string;
  createdDateTime: string;
  lastModifiedDateTime: string;
  changeKey: string;
  categories: any[];
  transactionId?: string;
  originalStartTimeZone: string;
  originalEndTimeZone: string;
  iCalUId: string;
  uid: string;
  reminderMinutesBeforeStart: number;
  isReminderOn: boolean;
  hasAttachments: boolean;
  subject: string;
  bodyPreview: string;
  importance: string;
  sensitivity: string;
  isAllDay: boolean;
  isCancelled: boolean;
  isOrganizer: boolean;
  responseRequested: boolean;
  seriesMasterId?: string;
  showAs: string;
  type: string;
  webLink: string;
  onlineMeetingUrl?: string;
  isOnlineMeeting: boolean;
  onlineMeetingProvider: string;
  allowNewTimeProposals: boolean;
  occurrenceId?: string;
  isDraft: boolean;
  hideAttendees: boolean;
  responseStatus: ResponseStatus;
  body: Body;
  start: Start;
  end: End;
  location: Location;
  locations: Location2[];
  recurrence: any;
  attendees: Attendee[];
  organizer: Organizer;
  onlineMeeting?: OnlineMeeting;
}

export interface ResponseStatus {
  response: string;
  time: string;
}

export interface Body {
  contentType: string;
  content: string;
}

export interface Start {
  dateTime: string;
  timeZone: string;
}

export interface End {
  dateTime: string;
  timeZone: string;
}

export interface Location {
  displayName: string;
  locationType: string;
  uniqueId?: string;
  uniqueIdType: string;
  address?: Address;
  coordinates?: Coordinates;
}

export interface Address {}

export interface Coordinates {}

export interface Location2 {
  displayName: string;
  locationType: string;
  uniqueId: string;
  uniqueIdType: string;
  locationUri?: string;
  address?: Address2;
  coordinates?: Coordinates2;
}

export interface Address2 {
  street: string;
  city: string;
  state: string;
  countryOrRegion: string;
  postalCode: string;
}

export interface Coordinates2 {}

export interface Attendee {
  type: string;
  status: Status;
  emailAddress: EmailAddress;
}

export interface Status {
  response: string;
  time: string;
}

export interface EmailAddress {
  name: string;
  address: string;
}

export interface Organizer {
  emailAddress: EmailAddress2;
}

export interface EmailAddress2 {
  name: string;
  address: string;
}

export interface OnlineMeeting {
  joinUrl: string;
  conferenceId?: string;
  tollNumber?: string;
}
function GetEndpointFor7nextdays(deltaDays: number) {
  // Setting startDateTime to today at 00:00
  const now = new Date();
  const futureDate = new Date(now.getTime() + deltaDays * 24 * 3600 * 1000);

  futureDate.setHours(0, 0, 0, 0); // Resets to midnight
  const startDateTime = futureDate.toISOString();

  // Setting endDateTime to 7 days   from startDateTime
  const endDateTime = new Date(
    futureDate.getTime() + 7 * 24 * 3600 * 1000
  ).toISOString();

  return `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${encodeURIComponent(
    startDateTime
  )}&endDateTime=${encodeURIComponent(endDateTime)}&$orderby=start/dateTime`;
}
function GetEndpointForToDayAndTomorrow() {
  // Setting startDateTime to today at 00:00
  const now = new Date();
  //now.setHours(0, 0, 0, 0); // Resets to midnight
  const startDateTime = now.toISOString();

  // Setting endDateTime to 48 hours from startDateTime
  const endDateTime = new Date(now.getTime() + 48 * 3600 * 1000).toISOString();

  return `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${encodeURIComponent(
    startDateTime
  )}&endDateTime=${encodeURIComponent(endDateTime)}&$orderby=start/dateTime`;
}
function GetEndpointForPrev7Days() {
  // Setting startDateTime to today at 00:00
  const now = new Date();
  //now.setHours(0, 0, 0, 0); // Resets to midnight
  const startDateTime = new Date(
    now.getTime() - 24 * 7 * 3600 * 1000
  ).toISOString();

  // Setting endDateTime to 48 hours from startDateTime
  const endDateTime = now.toISOString();

  return `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${encodeURIComponent(
    startDateTime
  )}&endDateTime=${encodeURIComponent(endDateTime)}&$orderby=start/dateTime`;
}
export default function CurrentFuturePastOrders() {
  const router = useRouter();
  const todayAndTomorrow = useGraph2<Event[]>(
    GetEndpointForToDayAndTomorrow(),
    ["Calendars.Read"],
    3
  );
  const [deltaDays, setdeltaDays] = useState(0);
  const next7days = useGraph2<Event[]>(
    GetEndpointFor7nextdays(2),
    ["Calendars.Read"],
    3
  );
  const prev7days = useGraph2<Event[]>(
    GetEndpointForPrev7Days(),
    ["Calendars.Read"],
    3
  );
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
        "https://outlook.office.com/calendar/item?subject=Quarterly%20Business%20Review&start=2024-04-01T14:00:00&end=2024-04-01T16:00:00 desc",
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
        <h1 className="text-2xl font-bold">Your Meetings</h1>
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
            {todayAndTomorrow.result?.map((event) => (
              <EventItemCard
                key={event.id}
                event={event}
                convertUtcToLocal={convertUtcToLocal}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="future" className="py-6">
          <div className="grid gap-4">
            <div className="grid gap-4">
              {next7days.result?.map((event) => (
                <EventItemCard
                  key={event.id}
                  event={event}
                  convertUtcToLocal={convertUtcToLocal}
                />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="past" className="py-6">
          <div className="grid gap-4">
            <div className="grid gap-4">
              {prev7days.result?.map((event) => (
                <EventItemCard
                  key={event.id}
                  event={event}
                  convertUtcToLocal={convertUtcToLocal}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
function EventItemCard(props: {
  event: Event;
  convertUtcToLocal: (utcDateTime: string, utcTimeZone: string) => string;
}) {
  const { event, convertUtcToLocal } = props;
  return (
    <Card key={event.id}>
      <CardHeader>
        <CardTitle>{event.subject}</CardTitle>
        <CardDescription>
          {convertUtcToLocal(event.start.dateTime, event.start.timeZone)}
          <ShowLocation locations={event.locations} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <Link href={event.webLink} target="_blank" prefetch={false}>
              View in Outlook
            </Link>
          </div>
          {event.isOrganizer && (
            <Badge color="blue" className="text-xs">
              Organizer
            </Badge>
          )}
          {/* <Button disabled variant="outline">
            View
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

function ShowLocation(props: { locations: Location2[] }) {
  const { locations } = props;
  return (
    <div>
      {locations.map((location) => (
        <div key={location.uniqueId}>{location.displayName}</div>
      ))}
    </div>
  );
}
