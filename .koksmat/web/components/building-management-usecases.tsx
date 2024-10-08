import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const useCases = [
  {
    id: "BM01",
    description: "Visualize list of building services",
    details: "As a building manager, I want to see a list of all building services available to employees. It refers to the possibility the view list and availability status of services such as: healthcare, cafeteria, IT service desk, post office, laundry service, insurance advisor, catering, etc",
    role: "Building Manager"
  },
  {
    id: "BM02",
    description: "Manage building services hours",
    details: "As a service manager, I want to manage service hours for building services. The services includes: healthcare, cafeteria, IT service desk, post office, laundry service, insurance advisor, catering, etc.",
    role: "Service Manager"
  },
  {
    id: "BM03",
    description: "Visualize building services status",
    details: "As a service manager, I want to manage the availability status of the service (available, paused, unavailable)",
    role: "Service Manager"
  },
  {
    id: "BM04",
    description: "Read/Write data from field (ticketing)",
    details: "As a service manager, I want to read/write data from field service (such as creating service tickets, reading the status of open tickets). The maintainer will have his own platform to plan activities the id ticketing system should serve to collect user reports",
    role: "Service Manager"
  },
  {
    id: "BM05",
    description: "Create a ticket automatically with image recognition",
    details: "As a service manager, I want the system to create a ticket if an issue is rated critical by image recognition",
    role: "Service Manager"
  },
  {
    id: "BM06",
    description: "Monitor company assets",
    details: "As a service manager, I want to be able to monitor company assets to maximize their value and efficiency",
    role: "Service Manager"
  },
  {
    id: "BM07",
    description: "Visualize building serious problems",
    details: "As a service manager, I want to see information about serious problems in the building. It refers to emergency situations (e.g., breakdown, fire, building structural problems, facilities, etc.) detectable by the BMS system",
    role: "Service Manager"
  },
  {
    id: "BM08",
    description: "Read HVAC data",
    details: "As a service manager, I want to read data for HVAC (such as room temperature, air conditioning, ventilation, depending on the capabilities of the BMS)",
    role: "Service Manager"
  },
  {
    id: "BM09",
    description: "Read lighting data",
    details: "As a service manager, I want to read data for lighting (such as light level, cumulative operating hours of the luminaire, depending on the capabilities of the BMS)",
    role: "Service Manager"
  },
  {
    id: "BM10",
    description: "Read curtain data",
    details: "As a service manager, I want to read data for curtain (such as overriding the automatic setting (down/up/preset), depending on the capabilities of the BMS)",
    role: "Service Manager"
  },
  {
    id: "BM11",
    description: "Access to digital twin",
    details: "As a building manager, I want access to a digital model representing physical assets, including their properties and relationships with other assets and environments, with data from sensors to reflect the current state of the assets",
    role: "Building Manager"
  },
  {
    id: "BM13",
    description: "Predict failures and optimize performance with AI",
    details: "As a building manager, I want to use advanced analytics and artificial intelligence tools to predict failures, optimize operations and improve asset performance",
    role: "Building Manager"
  },
  {
    id: "BM14",
    description: "Run building simulations and What if analysis",
    details: "As a building manager, I want to run simulations and \"what-if\" analyzes to evaluate the impact of different operational decisions. Digital modeling of buildings (Digital Twin) allows simulating building response dynamics based on the selected scenario (i.e., based on the variability of environmental conditions, it tests how energy efficiency changes)",
    role: "Building Manager"
  },
  {
    id: "BM20",
    description: "Manage cleaning service",
    details: "As a facility manager, I want to manage cleaning and hygiene activities",
    role: "Facility Manager"
  },
  {
    id: "BM21",
    description: "Manage security service",
    details: "As a facility manager, I want to manage security and surveillance activities",
    role: "Facility Manager"
  },
  {
    id: "BM22",
    description: "Track emergencies",
    details: "As a facility manager, I want the ability to track emergencies in the app through a push-to-talk solution",
    role: "Facility Manager"
  },
  {
    id: "BM23",
    description: "Create reports related to facility management",
    details: "As a facility manager, I want to create reports and analyze data related to facility management activities",
    role: "Facility Manager"
  },
  {
    id: "BM24",
    description: "Read building sustainability data",
    details: "As a facility manager, I want to be able to access monitoring data of the building's sustainability performance",
    role: "Facility Manager"
  }
]

export default function BuildingManagementUseCases() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Building Management Use Cases</h1>
      <Table>
        <TableCaption>A list of building management use cases for CAVA2</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useCases.map((useCase) => (
            <TableRow key={useCase.id}>
              <TableCell className="font-medium">{useCase.id}</TableCell>
              <TableCell>{useCase.description}</TableCell>
              <TableCell>{useCase.details}</TableCell>
              <TableCell>{useCase.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}