import { APPNAME } from "../app/global";
import { AppLeftRailProps } from "@/components/appleftrail";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  Map,
  LineChart,
  ListFilter,
  MessageCircleQuestion,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Pyramid,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  FileText,
  Calendar,
} from "lucide-react";
export const leftRailApps: AppLeftRailProps = {
  topApps: [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Dashboard",
      href: `/${APPNAME}`,
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Order Catering",
      href: `/${APPNAME}/shop/new`,
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Plan",
      href: `/${APPNAME}/plan`,
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Deliver",
      href: `/${APPNAME}/deliver`,
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Invoices",
      href: `/${APPNAME}/invoices`,
    },
  ],
  bottomApps: [
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Settings",
      href: "/settings",
    },
  ],
};
