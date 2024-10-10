import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Video, Building2, DollarSign, Briefcase, Shield, Scale, Globe } from "lucide-react"
import { ReactNode } from "react"

type StakeholderCardProps = {
  title: string
  description: string
  icon: ReactNode
}

type RegionCardProps = {
  region: string
  considerations: string[]
}

export default function EnhancedStakeholderDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CAVA: Comprehensive Hybrid Workplace Management</h1>
      <Tabs defaultValue="stakeholders" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="security">Security & Compliance</TabsTrigger>
          <TabsTrigger value="regions">Regional Considerations</TabsTrigger>
        </TabsList>
        <TabsContent value="stakeholders" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StakeholderCard
              title="IT Department"
              description="Responsible for technical implementation and support"
              icon={<Briefcase className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Human Resources"
              description="Manages policies and employee experience"
              icon={<Users className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Facilities Management"
              description="Oversees physical office spaces and equipment"
              icon={<Building2 className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Finance Department"
              description="Handles budgeting and cost analysis"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Department Managers"
              description="Ensure team productivity and collaboration"
              icon={<Users className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Executive Leadership"
              description="Sets strategic direction for hybrid work"
              icon={<Briefcase className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Security Team"
              description="Manages physical and digital security measures"
              icon={<Shield className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Legal & Compliance"
              description="Ensures adherence to regulations and policies"
              icon={<Scale className="h-4 w-4" />}
            />
            <StakeholderCard
              title="Regional Managers"
              description="Adapt global strategies to local needs"
              icon={<Globe className="h-4 w-4" />}
            />
          </div>
        </TabsContent>
        <TabsContent value="meetings" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Virtual Meetings</CardTitle>
                <CardDescription>Managed through Microsoft Teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integration with Outlook for scheduling</li>
                  <li>Screen sharing and collaborative features</li>
                  <li>Recording and transcription capabilities</li>
                  <li>Virtual breakout rooms for small group discussions</li>
                  <li>End-to-end encryption for sensitive meetings</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Physical Meetings</CardTitle>
                <CardDescription>Managed through Microsoft Spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Room booking system integrated with Exchange</li>
                  <li>Occupancy tracking and management</li>
                  <li>Equipment reservation (projectors, whiteboards, etc.)</li>
                  <li>Hybrid meeting room setups for mixed attendance</li>
                  <li>Physical access control integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="financials" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>CAPEX (Capital Expenditures)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Video conferencing equipment for meeting rooms</li>
                  <li>Workstation upgrades for remote work</li>
                  <li>Network infrastructure improvements</li>
                  <li>Office space reconfiguration for hybrid use</li>
                  <li>Physical security systems (access control, surveillance)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>OPEX (Operational Expenditures)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Microsoft 365 licensing costs</li>
                  <li>IT support and maintenance</li>
                  <li>Employee training programs</li>
                  <li>Utilities and cleaning services for office spaces</li>
                  <li>Ongoing security monitoring and compliance audits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Physical Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access control systems for office spaces</li>
                  <li>Surveillance cameras in common areas</li>
                  <li>Secure document disposal procedures</li>
                  <li>Visitor management system</li>
                  <li>Emergency response protocols</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Data protection regulations (GDPR, CCPA, etc.)</li>
                  <li>Industry-specific compliance (HIPAA, SOX, etc.)</li>
                  <li>Regular security audits and assessments</li>
                  <li>Employee training on compliance policies</li>
                  <li>Incident response and reporting procedures</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="regions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <RegionCard
              region="North America"
              considerations={[
                "Flexible work hours across time zones",
                "Data residency requirements in Canada",
                "ADA compliance for office spaces"
              ]}
            />
            <RegionCard
              region="Europe"
              considerations={[
                "Strict GDPR compliance",
                "Works council consultations",
                "Multilingual support for collaboration tools"
              ]}
            />
            <RegionCard
              region="Asia-Pacific"
              considerations={[
                "Diverse data protection laws by country",
                "Cultural considerations for remote work",
                "Infrastructure variations in developing markets"
              ]}
            />
            <RegionCard
              region="Latin America"
              considerations={[
                "Varying labor laws by country",
                "Infrastructure challenges in remote areas",
                "Emphasis on in-person collaboration"
              ]}
            />
            <RegionCard
              region="Middle East & Africa"
              considerations={[
                "Compliance with local data sovereignty laws",
                "Adaptation to diverse work week schedules",
                "Consideration of cultural norms in office design"
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StakeholderCard({ title, description, icon }: StakeholderCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function RegionCard({ region, considerations }: RegionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {region}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {considerations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
