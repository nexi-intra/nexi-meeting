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

export default function InsightsDashboard() {
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
              <div className="flex justify-between items-center">
                <span>Marketing</span>
                <Badge variant="secondary">32</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Engineering</span>
                <Badge variant="secondary">28</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Sales</span>
                <Badge variant="secondary">24</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>HR</span>
                <Badge variant="secondary">18</Badge>
              </div>
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
              <span className="text-4xl font-bold">47 min</span>
              <p className="text-sm text-muted-foreground mt-2">
                Average meeting duration
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span>Shortest</span>
                <Badge variant="outline">15 min</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Longest</span>
                <Badge variant="outline">120 min</Badge>
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
              <div className="flex justify-between items-center">
                <span>Americas</span>
                <Badge variant="secondary">40%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Europe</span>
                <Badge variant="secondary">35%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Asia-Pacific</span>
                <Badge variant="secondary">25%</Badge>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Peak meeting time: 2 PM UTC
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
              <li>Sarah Johnson (Marketing)</li>
              <li>Michael Chen (Engineering)</li>
              <li>Emma Rodriguez (Sales)</li>
              <li>David Kim (Product)</li>
              <li>Lisa Patel (HR)</li>
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
              <Badge className="text-lg">Strategy</Badge>
              <Badge className="text-base">Innovation</Badge>
              <Badge className="text-xl">Product</Badge>
              <Badge className="text-sm">Marketing</Badge>
              <Badge className="text-lg">Sales</Badge>
              <Badge className="text-base">Customer</Badge>
              <Badge className="text-sm">Technology</Badge>
              <Badge className="text-lg">Growth</Badge>
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
              <div className="flex items-center">
                <span className="w-24">Excellent</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">40%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Good</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">35%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Average</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">15%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Poor</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">10%</span>
              </div>
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
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Meeting Rooms
                  </span>
                  <Badge variant="secondary">85% utilized</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Parking Spaces
                  </span>
                  <Badge variant="secondary">70% occupied</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Video Conferencing
                  </span>
                  <Badge variant="secondary">60% in use</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Peak utilization: Tuesdays and Thursdays, 10 AM - 2 PM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
