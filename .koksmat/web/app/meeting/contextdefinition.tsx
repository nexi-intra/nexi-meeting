"use client";
import { createContext } from "react";

export type MeetingContextType = {
  version: number;
  useFixeddate: boolean;
  setUseFixeddate: (useFixeddate: boolean) => void;
  now: Date;
  setFixeddate: (date: Date) => void;
};
export const MeetingContext = createContext<MeetingContextType>({
  useFixeddate: false,
  setUseFixeddate: function (useFixeddate: boolean): void {
    throw new Error("Function not implemented.");
  },

  setFixeddate: function (date: Date): void {
    throw new Error("Function not implemented.");
  },
  version: 1,
  now: new Date(),
});
