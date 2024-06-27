"use client";

import { MeetingContext } from "@/app/meeting/contextdefinition";
import { useContext } from "react";
import { Checkbox } from "./ui/checkbox";

export default function ControlSystemTime() {
  const meetingContext = useContext(MeetingContext);
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onCheckedChange={(checked) => {
          if (typeof checked.valueOf === "boolean")
            meetingContext.setUseFixeddate(checked.valueOf);
        }}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Use fixeddate
      </label>
    </div>
  );
}
