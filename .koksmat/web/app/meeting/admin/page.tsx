import MeetingInsightsGallery from "@/components/meeting-insights-dashboard";
import React from "react";

export default function ResourceReport() {
  return (
    <div>
      <MeetingInsightsGallery
        departmentMeetings={[]}
        averageDuration={0}
        shortestMeeting={0}
        longestMeeting={0}
        globalDistribution={[]}
        peakMeetingTime={""}
        activeParticipants={[]}
        topicTrends={[]}
        satisfactionRatings={[]}
        resourceUtilization={[]}
        peakUtilizationTimes={""}
      />{" "}
    </div>
  );
}
