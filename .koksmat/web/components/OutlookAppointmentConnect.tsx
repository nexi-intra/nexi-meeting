"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ELyzHIrM9FO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SVGProps } from "react";

export default function OutlookAppointmentConnect() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>New Catering Order</CardTitle>
        <CardDescription>
          Follow these steps to place a catering order for your meeting.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="outlook-appointment">Outlook Appointment</Label>
          <Button variant="outline" size="sm" id="outlook-appointment">
            Select Appointment
            <CalendarIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="outlook-connect">Connect to Outlook</Label>
          <Button variant="outline" size="sm" id="outlook-connect">
            Connect to Outlook
            <LinkIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="catering-order">Place Catering Order</Label>
          <Link href="#" className="w-full" prefetch={false}>
            <Button className="w-full">
              Go to Catering Order
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
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
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
