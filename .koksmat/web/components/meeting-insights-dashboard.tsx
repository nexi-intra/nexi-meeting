import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Clock,
  Globe,
  Users,
  MessageSquare,
  ThumbsUp,
  Building2,
  Car,
  Video,
} from "lucide-react";

// Define interfaces for our data structures
interface DepartmentMeeting {
  department: string;
  count: number;
}

interface GlobalDistribution {
  region: string;
  percentage: number;
}

interface Participant {
  name: string;
  department: string;
}

interface TopicTrend {
  topic: string;
  size: "sm" | "base" | "lg" | "xl";
}

interface SatisfactionRating {
  label: string;
  percentage: number;
  color: string;
}

interface ResourceUtilization {
  name: string;
  percentage: number;
  icon: React.ElementType;
  color: string;
}

// Props interface for our main component
interface MeetingInsightsGalleryProps {
  departmentMeetings: DepartmentMeeting[];
  averageDuration: number;
  shortestMeeting: number;
  longestMeeting: number;
  globalDistribution: GlobalDistribution[];
  peakMeetingTime: string;
  activeParticipants: Participant[];
  topicTrends: TopicTrend[];
  satisfactionRatings: SatisfactionRating[];
  resourceUtilization: ResourceUtilization[];
  peakUtilizationTimes: string;
}

// Reusable ProgressBar component
const ProgressBar: React.FC<{ percentage: number; color: string }> = ({
  percentage,
  color,
}) => (
  <div className="w-full bg-muted rounded-full h-2">
    <div
      className={`${color} h-2 rounded-full`}
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

export default function MeetingInsightsGallery({
  departmentMeetings,
  averageDuration,
  shortestMeeting,
  longestMeeting,
  globalDistribution,
  peakMeetingTime,
  activeParticipants,
  topicTrends,
  satisfactionRatings,
  resourceUtilization,
  peakUtilizationTimes,
}: MeetingInsightsGalleryProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Meeting Insights Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Meeting Frequency by Department */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Meeting Frequency
            </CardTitle>
            <CardDescription>Meetings per department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {departmentMeetings.map((dept, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{dept.department}</span>
                  <Badge variant="secondary">{dept.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Average Meeting Duration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Average Duration
            </CardTitle>
            <CardDescription>Meeting length statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <span className="text-4xl font-bold">{averageDuration} min</span>
              <p className="text-sm text-muted-foreground mt-2">
                Average meeting duration
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span>Shortest</span>
                <Badge variant="outline">{shortestMeeting} min</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Longest</span>
                <Badge variant="outline">{longestMeeting} min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Meeting Time Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Global Distribution
            </CardTitle>
            <CardDescription>Meeting times across time zones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {globalDistribution.map((region, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{region.region}</span>
                  <Badge variant="secondary">{region.percentage}%</Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Peak meeting time: {peakMeetingTime}
            </div>
          </CardContent>
        </Card>

        {/* Most Active Participants */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Active Participants
            </CardTitle>
            <CardDescription>Top contributors in meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 list-decimal list-inside">
              {activeParticipants.map((participant, index) => (
                <li key={index}>
                  {participant.name} ({participant.department})
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Meeting Topics Word Cloud */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Topic Trends
            </CardTitle>
            <CardDescription>Frequently discussed subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {topicTrends.map((topic, index) => (
                <Badge key={index} className={`text-${topic.size}`}>
                  {topic.topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meeting Satisfaction Ratings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5" />
              Satisfaction Ratings
            </CardTitle>
            <CardDescription>Participant feedback on meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {satisfactionRatings.map((rating, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-24">{rating.label}</span>
                  <ProgressBar
                    percentage={rating.percentage}
                    color={rating.color}
                  />
                  <span className="w-12 text-right">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resource Utilization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Resource Utilization
            </CardTitle>
            <CardDescription>
              Usage of meeting rooms and facilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resourceUtilization.map((resource, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-2">
                      <resource.icon className="h-4 w-4" />
                      {resource.name}
                    </span>
                    <Badge variant="secondary">
                      {resource.percentage}% utilized
                    </Badge>
                  </div>
                  <ProgressBar
                    percentage={resource.percentage}
                    color={resource.color}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Peak utilization: {peakUtilizationTimes}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
