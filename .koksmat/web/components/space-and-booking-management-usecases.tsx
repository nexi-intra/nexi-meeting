import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const useCases = [
  {
    id: "SBM01",
    userStory: "As an employee, I want to perform a simple search for a free desk area using my personal device",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: "Does the system allow booking (even multiple) in a pre-defined booking window (x days, weeks..)? Does the system guide the user to book an asset even through a map?"
  },
  {
    id: "SBM02",
    userStory: "As an employee, I want to advance search for a free desk area from my device using my preferred criteria, i.e. environmental status, colleagues, proximity to a area type, windows, equipment, nearby lockers, occupation, home-office...",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: "Does the solution provide team/table booking from a single user?"
  },
  {
    id: "SBM03",
    userStory: "As an employee, I want to see a search result with multiple options to choose from when searching for a desk area",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: "Does the system impede multiple bookings of the same asset from the same user?"
  },
  {
    id: "SBM04",
    userStory: "As an employee, I want to save my desk area preferences to facilitate my future searches",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM05",
    userStory: "As an employee, I want to change my saved desk area preferences",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM06",
    userStory: "As an employee, I want to receive a desk recommendation for the day based on my saved search preferences",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: "Does the solution let the admin to enable/block areas to specific user categories/business? Does the system visualize different functionalities based on user profile?"
  },
  {
    id: "SBM07",
    userStory: "As an employee, I want to receive desk advice for the day based on my daily agenda (Microsoft 365 Calendar)",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM08",
    userStory: "As an employee, I want to receive a push notification about desk recommendations on my personal device when I enter the building",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: "Does the solution notify booking confirmation/changes to all the users?"
  },
  {
    id: "SBM09",
    userStory: "As an employee/visitor, I want to search for a free workstation using a public device",
    dependencies: "Device (Digital Signage)",
    user: "Employee/Visitor",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM10",
    userStory: "As an employee/visitor, I want to see a search result containing multiple options to choose from, with travel time and distance displayed",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM11",
    userStory: "As an employee, I want to see the estimated elevator wait time on screens or enabled devices, such as mobile devices, anywhere in the building",
    dependencies: "Device (Digital Signage)/Smart elevators",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM12",
    userStory: "As an employee, I want to check in at a desk/space",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: "Is there a limited check in time slot?"
  },
  {
    id: "SBM13",
    userStory: "As an employee I would like to ask for the adjustment of environmental parameters while working at the desk, ie temperature, fresh air",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM17",
    userStory: "As an employee/visitor, I want my status to be automatically set to Do Not Disturb/Away/Concentration Assist if I use a desk/quiet space",
    dependencies: "",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM18",
    userStory: "As an employee, I want to share the location of my desk/space for a specific time",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM19",
    userStory: "As an employee, I want to see other people's check-ins (if they have allowed this information to be shared)",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM20",
    userStory: "As an employee/visitor, I want to set a reminder to get up, exercise or hydrate",
    dependencies: "",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM21",
    userStory: "As an employee (and a visiting employee, if tracking is allowed), I want to see where I've been during the day",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM22",
    userStory: "As an employee/visitor, I want to report to the system if a desk was shown to be free but doesn't seem to be. Along with that I also want to explain why I think the system couldn't identify that",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM23",
    userStory: "As an employee, I want to submit an issue related to the current location (without knowing what the location is) if I have an issue with a device or the environment around and need immediate support",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM25",
    userStory: "As an employee/visitor, I want to report a problem with a public display",
    dependencies: "Device (Digital Signage)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM26",
    userStory: "As an employee/visitor, I would like to be given another best available desk space if my desk was already occupied",
    dependencies: "",
    user: "Employee/Visitor",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM27",
    userStory: "As an employee, I want to create a service request for desk/space cleaning",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM29",
    userStory: "As an employee, I want to provide feedback on the quality of desk usage",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM30",
    userStory: "As an employee, I want to create a service request directly from the meeting room device in case of problems or if additional services are required",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM31",
    userStory: "As an employee, I want to provide feedback on the quality of computer equipment for meetings, conference rooms and rooms",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM32",
    userStory: "As an employee, I want to check out from a desk/space if I have checked in previously",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM33",
    userStory: "As an employee, I want to be asked to be checked-out automatically from a desk/space if I leave the building at a usual time (based on my history of leaving the building) or if I check-in at another desk/space",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM37",
    userStory: "As an employee, I want to set up a meeting request with recommendations (list of choices) for the meeting time and location based on various criteria when organizing a meeting: Duration of the meeting, Room capacity, Location and availability of participants, Last date for the meeting to take place, Types of rooms, Proximity to location, Computer equipment",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM38",
    userStory: "As an employee, I want the AI to regularly check whether the specified meeting room criteria is still valid and the meeting is possible",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM39",
    userStory: "As an employee, I would like to have the ability to change the criteria if a suitable room is not found",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM40",
    userStory: "As an employee, I want to ask for an updated recommendation based on participants' responses to the meeting request",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM41",
    userStory: "As an employee, I want to receive a recommendation for an online meeting and the meeting room canceled if there is no participant on site",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM42",
    userStory: "As an employee, I want to choose the additional services to be provided during the meeting (food and drinks, stationery and equipment) as part of the meeting request",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM43",
    userStory: "As an employee, I want the request for additional services to be updated automatically, if the meeting is moved to another time or location or canceled",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM44",
    userStory: "As an employee, I want to receive a reminder to get to a meeting on time based on the calculated time for walking and using the elevator",
    dependencies: "Office 365/Device (Wifi/Beacon)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM45",
    userStory: "As an employee, I want to remotely join the meeting if I dismiss the reminder",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM46",
    userStory: "As an employee, I want to ask about facilities close to the route when I receive the meeting reminder",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM47",
    userStory: "As an employee, I want the system to use me (the organizer) as the host for the meeting but I should be able to override it and define someone else as the host",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM48",
    userStory: "As an employee, I want to provide the meeting agenda",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM51",
    userStory: "As an employee, I want to customize the meeting room (before the meeting) (set display and environment preferences)",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM52",
    userStory: "As an employee, I want the building to identify when I as the organizer have entered the room and adjust the room according to the defined presets",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM53",
    userStory: "As an employee, I want to change the room settings during the meeting (overriding the host's presets)",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM54",
    userStory: "As an employee, I want to connect wirelessly to AV equipment in the room",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM55",
    userStory: "As an employee, I would like to request ad hoc ventilation of the room",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM56",
    userStory: "As an employee, I want to be reminded via digital/displayed information that the meeting time will end soon, just before the end of the meeting",
    dependencies: "Device (Room display)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM56",
    userStory: "As an employee, I want to be reminded via bright/displayed information that the meeting time will end soon, just before the end of the meeting",
    dependencies: "Device (Room display)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM57",
    userStory: "As an employee, I want to receive all digital content (including attendee list, digital whiteboard content, and transcript) after the meeting",
    dependencies: "Device (Digital Whiteboard)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM58",
    userStory: "As an employee, I want to ask the AI with voice to extend the meeting if we need more time, and book the meeting room or suggest another one if the current room is no longer available",
    dependencies: "Artificial Intelligence",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: "Does the system allow booking extension/postpone based on room/desk availability?"
  },
  {
    id: "SBM59",
    userStory: "As an employee, I want to ask the AI with voice to book a follow-up meeting",
    dependencies: "Artificial Intelligence",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM60",
    userStory: "As an employee, I want to see instructions/suggestions for leaving the room",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM61",
    userStory: "As an employee, I want to have the ability to save data from digital whiteboards",
    dependencies: "Device (Digital Whiteboard)",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM62",
    userStory: "As an employee, I want the contents of meeting devices to be automatically deleted when the meeting ends/participants leave the room",
    dependencies: "Device (Digital Whiteboard)",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM63",
    userStory: "As an employee, I want to receive a reminder not to forget items and clean the room (after leaving the room)",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM64",
    userStory: "As a service manager, I would like to receive a notification that the room can be cleaned",
    dependencies: "",
    user: "Service Manager",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM65",
    userStory: "As an employee, I want to request to end a meeting early if necessary if I am the organizer and want the reservation and room status to be set accordingly",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM66",
    userStory: "As a system, I want to do quick and intense ventilation of the room if the meeting room gets empty",
    dependencies: "Device (Smart room control)",
    user: "Facility Manager",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM67",
    userStory: "As an employee/visitor, I want to use my badge or smartphone to lock or open a locker",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM68",
    userStory: "As an employee, I would like to receive a notification/email about the locker I am using when I close a locker",
    dependencies: "Device (Smart lockers)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM69",
    userStory: "As an employee, I want to share my locker with other selected users for a predefined duration",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM70",
    userStory: "As an employee/visitor, I would like to receive a reminder when the permitted period for using a locker is approaching",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM71",
    userStory: "As an employee/visitor, I would like to request to extend the use of the lockers and provide the reason",
    dependencies: "Device (Smart lockers)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM72",
    userStory: "As an employee, I would like to receive a reminder when the locker has not been opened for a longer period (2-3 weeks for long-term lockers)",
    dependencies: "Device (Smart lockers)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM73",
    userStory: "As an employee, I want to clear out the locker when I no longer need it",
    dependencies: "Device (Smart lockers)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM74",
    userStory: "As an employee, I want users with whom I have shared my locker to be notified that the locker is no longer being used",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM75",
    userStory: "As an employee/visitor, I want to check which locker I use by scanning my badge on the locker display or in the 'app'",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM76",
    userStory: "As an employee/visitor, I would like to deposit found items in a locker",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM77",
    userStory: "As a service manager, I want to be notified if an item has been placed in a locker",
    dependencies: "Device (Smart lockers)",
    user: "Service Manager",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM78",
    userStory: "As an employee/visitor, I want to get notified about deposited items for the locations that I've been to during the day",
    dependencies: "Device (Smart lockers)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM79",
    userStory: "As an employee, I want to be able to organize a lunch",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM80",
    userStory: "As an employee, I want to be able to order food",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM81",
    userStory: "As an employee, I want to be able to reserve a table in the restaurant area",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM82",
    userStory: "As an employee, I want to receive advice on meals to eat",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM83",
    userStory: "As an employee, I want to receive analysis on my eating style",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM84",
    userStory: "As an employee, I want to receive advice on how to improve my diet",
    dependencies: "",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM85",
    userStory: "As an employee, I want to be able to pay cashless for meals",
    dependencies: "Device (Digital Signage)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM87",
    userStory: "As an employee, I want to view notes from the previous meeting",
    dependencies: "Device (Digital Signage)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM88",
    userStory: "As an employee, I want to see notifications about meeting end time",
    dependencies: "Device (Digital Signage)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM89",
    userStory: "As an employee, I want to see instructions/tips for leaving the room",
    dependencies: "Device (Smart room control)",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM90",
    userStory: "As an employee, I want to be able to control the lighting in the room",
    dependencies: "Device (Smart tables)",
    user: "Service Manager",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM92",
    userStory: "As a service manager, I would like to receive desk occupancy data",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM93",
    userStory: "As an employee, I want to view/edit the meeting organization",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM94",
    userStory: "As an employee, I want the system to fetch the organizer user's calendar data with meeting room information",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },

  {
    id: "SBM95",
    userStory: "As an employee, I want the employee status (e.g. away, do not disturb) to be set automatically",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM96",
    userStory: "As an employee, I want to set up a meeting request",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM97",
    userStory: "As an employee, I want to update my meeting room reservation information",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM98",
    userStory: "As an employee, I want to set the meeting agenda",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM99",
    userStory: "As an employee, I want to send meeting content to the organizer",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM100",
    userStory: "As an employee, I want to release reservation if not necessary",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: "Does the system notify that a reservation has been cancelled? Does the system embed a waiting list with automatic reassigning in case of a cancelled reservation?"
  },
  {
    id: "SBM101",
    userStory: "As an administrator, I want to manage all backoffice activities related to space and booking management, such as: -Manage booking procedures on behalf of employees, in case of special needs or specific issues, overriding the defined preferences if needed -Manage autonomously the configuration of company assets mapped on the booking management solution (e.g. adding or removing building/desks/areas) and the related features (e.g. typology, linked multi-media devices, number of seats, ecc.) -Manage autonomously the configuration of roles and related permissions to view/manage company assets (e.g. defining visibility rules on specific assets only for defined category of users) -Manage autonomously the configuration of time availability / status of company assets",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM102",
    userStory: "As an employee, I would like to find the services provided by the building",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM103",
    userStory: "As an employee, I would like to know the hours of availability of the service",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM104",
    userStory: "As an employee, I would like to know what time slots are open for appointment services",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM105",
    userStory: "As an employee, I would like to know the waiting times for service",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM106",
    userStory: "As an employee, I would like to get in touch with the service provider via phone or chat",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 2",
    additionalRequests: ""
  },
  {
    id: "SBM107",
    userStory: "As an employee, I would like to see the availability times of services compared to my personal calendar",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM108",
    userStory: "As a visitor, I would like to find the services available for my use and have information about these services",
    dependencies: "",
    user: "Visitor",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM109",
    userStory: "As an employee, I want to request an appointment with a service provider",
    dependencies: "",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM110",
    userStory: "As an employee, I want a calendar appointment to be created for me when the service provider approves my request",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM111",
    userStory: "As a service provider, I want to see all requests",
    dependencies: "",
    user: "Service Provider",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM112",
    userStory: "As a service provider, I want to approve/reject appointment requests",
    dependencies: "",
    user: "Service Provider",
    priority: "Must Have Prio 1",
    additionalRequests: ""
  },
  {
    id: "SBM114",
    userStory: "As a service provider, I want to be notified of the employee's arrival when they check in",
    dependencies: "",
    user: "Service Provider",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM115",
    userStory: "As an employee, I want my status changed to unavailable when I check in to a service",
    dependencies: "Office 365",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM116",
    userStory: "As an employee, I want to pay for the service at the service provider's area via digital means, such as Apple Pay, Google Pay or debit cards",
    dependencies: "Digital payments",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM117",
    userStory: "As an employee, I want my service usage to be tracked by scanning my badge",
    dependencies: "Device (Badge reader)",
    user: "Employee",
    priority: "Nice to have",
    additionalRequests: ""
  },
  {
    id: "SBM118",
    userStory: "As an employee/visitor, I can opt-in or opt-out for location services that would allow other employees to find me in the building",
    dependencies: "Device (Wifi/Beacon)",
    user: "Employee/Visitor",
    priority: "Nice to have",
    additionalRequests: "Does the system allow employees to enable/disable the visibility of their location in the office? (referring to the reserved desk/space and not GPS location)"
  }

]

export default function SpaceBookingUseCases() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Space and Booking Management Use Cases</h1>
      <Table>
        <TableCaption>A list of space and booking management use cases for CAVA2</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>User Story</TableHead>
            <TableHead>Dependencies</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Additional Requests</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useCases.map((useCase) => (
            <TableRow key={useCase.id}>
              <TableCell className="font-medium">{useCase.id}</TableCell>
              <TableCell>{useCase.userStory}</TableCell>
              <TableCell>{useCase.dependencies || 'N/A'}</TableCell>
              <TableCell>{useCase.user}</TableCell>
              <TableCell>
                <Badge variant={useCase.priority.includes('Must Have') ? 'default' : 'secondary'}>
                  {useCase.priority}
                </Badge>
              </TableCell>
              <TableCell>{useCase.additionalRequests || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}