"use client";

import { MeetingContext } from "@/app/meeting/contextdefinition";
import { useContext, useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";

export default function SystemTime() {
  const meetingContext = useContext(MeetingContext);
  const [minutesFromMidnight, setMinutesFromMidnight] = useState<number>(0);
  const { useFixeddate, now, version } = meetingContext;
  useEffect(() => {
    console.log("Context updated in MyComponent:", version, useFixeddate, now);
  }, [version, useFixeddate, now]);
  return (
    <div>
      <div className="flex space-x-2 text-xs">
        {version}
        {useFixeddate ? (
          <div className="text-red-400 flex">
            <DatePicker
              date={now}
              setDate={(date) => {
                if (date === undefined) return;
                meetingContext.setFixeddate(date);
              }}
            />
            <div className="max-w-32">
              <TimePicker
                minutesFromMidnight={minutesFromMidnight}
                onChange={setMinutesFromMidnight}
              />
            </div>
          </div>
        ) : (
          <div className="">{now.toLocaleString()}</div>
        )}
        {/*  */}
      </div>
    </div>
  );
}
