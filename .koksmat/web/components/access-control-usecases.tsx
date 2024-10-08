import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const useCases = [
  {
    id: "ACVM01",
    description: "Advanced Outlook meeting functionalities",
    userStory: "As an employee, when I host a meeting with external participants, I want to be provided with additional functionalities from an Outlook add-in for the following: select which employees should receive an invitation to come to the office, send invitations only to those who have accepted the meeting, select whether catering will be provided during the meeting, select whether visitors should be registered for multiple days, select the areas to which visitors will have access",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM02",
    description: "Additional visitors preferences selection",
    userStory: "As an employee, I want to invite a visitor or group of visitors, with the ability to define additional preferences. Additional preferences can also be entered such as: in reference to catering it will be possible to indicate subpreferences such as food intolerances; in reference to the choice of meeting room it will be possible to indicate the type of room (e.g. round table, room with whiteboard for brainstorming); in reference to the issue of accessibility it will be possible to indicate additional needs (e.g. wheelchair)",
    userRole: "Employee",
    priority: "Nice to have"
  },
  {
    id: "ACVM04",
    description: "Track visitors invitation and status",
    userStory: "As an employee, I want to track all visitor invitations and registration status: invitation status (email sent; email opened), registration status (started, paused, completed), keep track of appointment changes",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM05",
    description: "Send a Campus invitation once the meeting has been accepted",
    userStory: "As an employee, I want to create a Campus invitation and send it to a recipient once the meeting request is accepted. It is a two-step procedure: 1) the employee organize the meeting in the Campus 2) Only after the meeting acceptance, the system will send a Campus invitation with meeting details (registration link, security link, wayfinding...)",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 2"
  },
  {
    id: "ACVM08",
    description: "Provide guest Wi-Fi credentials",
    userStory: "As a business visitor, I would like to have access to guest Wi-Fi (SSID and password)",
    userRole: "Visitor",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM09",
    description: "Provide visitors welcome page",
    userStory: "As a business visitor, I want to be presented with a welcome page when connected to Wi-Fi, showing: The meeting I am invited to, Option to show coffee/food, Services that can be used, Emergency plans, Wayfinding",
    userRole: "Visitor",
    priority: "Must Have Prio 2"
  },
  {
    id: "ACVM11",
    description: "Check visitors badge status",
    userStory: "As a system administrator (kiosk) or receptionist, I want to check the badge returned by a visitor",
    system: "Device (Kiosk)",
    userRole: "Receptionist",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM28",
    description: "Print badges for visitors",
    userStory: "As a receptionist I want to print badges for checked-in visitors",
    system: "Badge Printers",
    userRole: "Receptionist",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM30",
    description: "Virtual badge",
    userStory: "As a visiting employee, I want to pair my smartphone via NFC to use it instead of the badge/wearable",
    system: "Access control",
    userRole: "Visiting Employee",
    priority: "Nice to have"
  },
  {
    id: "ACVM31",
    description: "Change visitors badge permissions",
    userStory: "As a receptionist, I want to check/change physical badge permissions",
    system: "Access control",
    userRole: "Receptionist",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM35",
    description: "Verify staff about guest check-out",
    userStory: "As an employee, I want to be notified if my guest has returned the badge and everything was OK",
    system: "Access control",
    userRole: "Employee",
    priority: "Must Have Prio 2"
  },
  {
    id: "ACVM36",
    description: "Change staff badge permissions",
    userStory: "As a facility manager, I want to specify the areas of the building that a staff employee should have access to",
    system: "Access control",
    userRole: "Facility Manager",
    priority: "Must Have Prio 2"
  },
  {
    id: "ACVM39",
    description: "Extract recipient and data from Outlook invitation",
    userStory: "As an employee, I want to be able to extract recipient and meeting room data from the meeting invitation",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM40",
    description: "Send registration emails",
    userStory: "As an employee, I want to be able to send registration emails",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM41",
    description: "Track status of invitation emails",
    userStory: "As an employee, I want to track the opening/reading status of invitation emails",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM42",
    description: "Track appointment changes",
    userStory: "As an employee, I want to track appointment changes",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM43",
    description: "Verify room capacity based on meeting",
    userStory: "As an employee, I want to be able to control meeting request and location acceptance (remote, campus,...) in order to verify if the meeting room has the capacity needed and, if necessary, propose a room change",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM44",
    description: "Track forwarded meeting requests",
    userStory: "As an employee, I want to be able to track forwarded meeting requests",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  },
  {
    id: "ACVM45",
    description: "Send invitations emails",
    userStory: "As an employee, I want to be able to send invitation emails",
    system: "Office 365",
    userRole: "Employee",
    priority: "Must Have Prio 1"
  }
]

export default function AccessControlUseCases() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Access Control Use Cases</h1>
      <Table>
        <TableCaption>A list of access control use cases for CAVA2</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>User Story</TableHead>
            <TableHead>System</TableHead>
            <TableHead>User Role</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useCases.map((useCase) => (
            <TableRow key={useCase.id}>
              <TableCell className="font-medium">{useCase.id}</TableCell>
              <TableCell>{useCase.description}</TableCell>
              <TableCell>{useCase.userStory}</TableCell>
              <TableCell>{useCase.system || 'N/A'}</TableCell>
              <TableCell>{useCase.userRole}</TableCell>
              <TableCell>{useCase.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}