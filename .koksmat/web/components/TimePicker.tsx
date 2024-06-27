"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import {
  getRoundedMinutes,
  gettimestringFromMinutes,
  timestring,
} from "@/lib/dates";
import { get } from "http";
import { use, useEffect, useState } from "react";

interface TimePickerItem {
  value: string;
  label: string;
}
export function TimePicker(props: {
  minutesFromMidnight: number;
  onChange: (minutesFromMidnight: number) => void;
}) {
  const [currentTime, setcurrentTime] = useState<string>();

  useEffect(() => {
    const minutes = getRoundedMinutes(props.minutesFromMidnight);
    const timestring: string = gettimestringFromMinutes(minutes);
    setcurrentTime(timestring);
  }, [props.minutesFromMidnight]);

  let possibleTimes: TimePickerItem[] = [];
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      const date = new Date();
      date.setHours(hour);
      date.setMinutes(minute);
      date.setSeconds(0); // Setting seconds to 0 for simplicity
      const timeString = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      possibleTimes.push({
        value: timestring(hour, minute),
        label: timeString,
      });
    }
  }
  useEffect(() => {
    setcurrentTime(gettimestringFromMinutes(props.minutesFromMidnight));
  }, [props.minutesFromMidnight]);

  return (
    <div>
      <Select
        value={currentTime}
        onValueChange={(valueString) => {
          setcurrentTime;
          props.onChange(parseInt(valueString));
        }}
      >
        <SelectTrigger id="time">
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          {possibleTimes.map((item, key) => (
            <SelectItem key={key} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
