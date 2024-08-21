import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ExternalLinkIcon } from "lucide-react";

type StatusType =
  | "proposed"
  | "wireframed"
  | "mockup"
  | "alpha"
  | "beta"
  | "preview";

interface ComponentStatusProps {
  status: StatusType;
  details: string;
  taskLink?: string;
}

const statusColors: Record<StatusType, string> = {
  proposed: "bg-slate-500",
  wireframed: "bg-blue-500",
  mockup: "bg-purple-500",
  alpha: "bg-yellow-500",
  beta: "bg-orange-500",
  preview: "bg-green-500",
};

export default function DevelopmentStatus(
  props: ComponentStatusProps
): JSX.Element {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Demo Component</h2>
      <p className="mb-4">
        This is a sample component to demonstrate the ComponentStatus badge.
      </p>
      <ComponentStatus {...props} />
    </div>
  );
}

function ComponentStatus({
  status,
  details,
  taskLink,
}: ComponentStatusProps): JSX.Element {
  return (
    <div className="absolute top-2 right-2">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Badge className={`${statusColors[status]} text-white cursor-help`}>
            {status}
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">
                Component Status: {status}
              </h4>
              <p className="text-sm">{details}</p>
              {taskLink && (
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={taskLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View Task <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
