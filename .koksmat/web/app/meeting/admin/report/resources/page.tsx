"use client";
import BookingUtilization from "@/components/booking-utilization";
import React from "react";

export default function ResourceReport(props: { params: { slug: string[] } }) {
  const { slug } = props.params;
  return (
    <div>
      <BookingUtilization />
    </div>
  );
}
