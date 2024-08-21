"use client";

import { useEffect, useState, useCallback } from "react";
import { MeetingContext, MeetingContextType } from "./contextdefinition";
import { set } from "date-fns";

type Props = {
  children?: React.ReactNode;
};

export const MeetingProvider = ({ children }: Props) => {
  const [version, setVersion] = useState(0);
  const [useFixeddate, setUseFixeddate] = useState(false);
  const [fixeddate, setFixeddate] = useState<Date | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      if (fixeddate) return;
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [fixeddate]);

  const handleSetUseFixeddate = useCallback((useFixeddate: boolean) => {
    setUseFixeddate(useFixeddate);
    setVersion((prevVersion) => prevVersion + 1);
  }, []);

  const handleSetFixeddate = useCallback((date: Date) => {
    setFixeddate(
      set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
    );
    setVersion((prevVersion) => prevVersion + 1);
  }, []);

  const meetingContext: MeetingContextType = {
    useFixeddate,
    setUseFixeddate: handleSetUseFixeddate,
    version,
    now,
    setFixeddate: handleSetFixeddate,
  };

  useEffect(() => {
    //console.log("Meeting context updated:", meetingContext);
  }, [meetingContext]);

  return (
    <MeetingContext.Provider value={meetingContext}>
      {children}
    </MeetingContext.Provider>
  );
};
