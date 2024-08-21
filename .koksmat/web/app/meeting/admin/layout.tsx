"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChartIcon,
  BuildingIcon,
  CarIcon,
  DoorOpenIcon,
  GlobeIcon,
  LayersIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MenuIcon,
} from "lucide-react";
import { APPNAME } from "@/app/global";

// import {
//   LayoutDashboardIcon,
//   GlobeIcon,
//   MapPinIcon,
//   BuildingIcon,
//   LayersIcon,
//   DoorOpenIcon,
//   CarIcon,
//   BarChartIcon,
//   MenuIcon,
// } from "your-icon-library"; // Replace with your actual icon imports

interface NavItem {
  name: string;
  icon: JSX.Element;
  href?: string;
}

export default function Layout(props: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("Dashboard");
  const { children } = props;
  const router = useRouter();
  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      href: "/" + APPNAME + "/admin",
      icon: <LayoutDashboardIcon className="w-4 h-4 mr-2" />,
    },
    {
      name: "Countries",
      href: "/" + APPNAME + "/admin/table/country",

      icon: <GlobeIcon className="w-4 h-4 mr-2" />,
    },
    {
      name: "Sites",
      href: "/" + APPNAME + "/admin/table/site",

      icon: <MapPinIcon className="w-4 h-4 mr-2" />,
    },
    { name: "Buildings", icon: <BuildingIcon className="w-4 h-4 mr-2" /> },
    { name: "Floors", icon: <LayersIcon className="w-4 h-4 mr-2" /> },
    { name: "Rooms", icon: <DoorOpenIcon className="w-4 h-4 mr-2" /> },
    { name: "Parking Spaces", icon: <CarIcon className="w-4 h-4 mr-2" /> },
    {
      name: "Reports",
      href: "/" + APPNAME + "/admin/report/resources",
      icon: <BarChartIcon className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Admin Dashboard
          </span>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="mt-5">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeSection === item.name ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveSection(item.name);
                  if (item.href) {
                    router.push(item.href);
                  }
                }}
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-4" />
            <Input type="search" placeholder="Search..." className="w-64" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <img
                  className="rounded-full"
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
              {activeSection}
            </h3>
            <div className="mt-8">
              {/* Placeholder content */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
