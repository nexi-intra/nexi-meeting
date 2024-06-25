"use client";
import { Button } from "@/components/ui/button";

import { use, useContext, useEffect, useState } from "react";

import Link from "next/link";

export default function MeetingPlanning() {
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");

  useEffect(() => {
    // get the ISO date time for today
    setfromDate(new Date().toISOString());
    // get the ISO date time for the next 7 days
    settoDate(
      new Date(new Date().setDate(new Date().getDate() + 7)).toISOString()
    );
  }, []);

  return (
    <div className="space-x-2">
      <div>
        order
        <Link href={"./meeting-servicing/salesorder"}>
          <Button>Order</Button>
        </Link>
      </div>
    </div>
  );
}
