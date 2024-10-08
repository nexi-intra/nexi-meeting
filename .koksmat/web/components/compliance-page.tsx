import Image from 'next/image'
import { Shield, CheckCircle, FileText, Lock, Building, Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">CAVA2: Compliance Made Easy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Navigating Regulatory Landscapes with Confidence</h2>
        <p className="text-lg mb-4">
          In today's complex regulatory environment, ensuring compliance is more critical than ever. CAVA2 is designed to help your organization meet and exceed compliance requirements across various frameworks and standards.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/undraw_gdpr.svg"
              alt="CAVA2 Compliance Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Built-in Compliance Features</h3>
            <p className="text-gray-700">
              CAVA2 incorporates compliance considerations at every level, from data handling and storage to access controls and audit trails. Our solution helps you maintain compliance without compromising on efficiency or user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Compliance Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>CAVA2 ensures data protection compliance with features like end-to-end encryption, access controls, and data minimization practices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Audit Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive audit logs and reporting features keep you prepared for internal and external audits at all times.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Automated documentation and policy management help you maintain up-to-date compliance records effortlessly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Access Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Granular access controls and role-based permissions ensure that data is accessed only by authorized personnel.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Data Residency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>CAVA2's flexible deployment options allow you to meet data residency requirements across different jurisdictions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Global Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Designed to meet global compliance standards, ensuring your workplace management aligns with international regulations.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compliance Frameworks</h2>
        <p className="text-lg mb-4">
          CAVA2 helps you meet requirements across various regulatory frameworks and industry standards:
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="gdpr">
            <AccordionTrigger>GDPR (General Data Protection Regulation)</AccordionTrigger>
            <AccordionContent>
              CAVA2 incorporates GDPR principles such as data minimization, purpose limitation, and the right to be forgotten. Our robust access controls and encryption methods help ensure GDPR compliance for EU data subjects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ccpa">
            <AccordionTrigger>CCPA (California Consumer Privacy Act)</AccordionTrigger>
            <AccordionContent>
              For businesses serving California residents, CAVA2 provides tools to manage consumer data rights, including data access requests and opt-out mechanisms for data sharing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="hipaa">
            <AccordionTrigger>HIPAA (Health Insurance Portability and Accountability Act)</AccordionTrigger>
            <AccordionContent>
              In healthcare settings, CAVA2 offers features to maintain the confidentiality, integrity, and availability of protected health information (PHI), helping organizations meet HIPAA requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="iso27001">
            <AccordionTrigger>ISO 27001</AccordionTrigger>
            <AccordionContent>
              CAVA2 aligns with ISO 27001 standards for information security management, providing tools for risk assessment, security controls, and continuous improvement of your information security practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sox">
            <AccordionTrigger>SOX (Sarbanes-Oxley Act)</AccordionTrigger>
            <AccordionContent>
              For publicly traded companies, CAVA2 supports SOX compliance by maintaining robust internal controls, ensuring data integrity, and providing comprehensive audit trails for financial reporting processes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compliance as a Continuous Process</h2>
        <p className="text-lg mb-4">
          At CAVA2, we understand that compliance is not a one-time achievement but a continuous process. Our solution is regularly updated to reflect the latest regulatory changes and best practices, ensuring your workplace management stays compliant in an ever-evolving landscape.
        </p>
        <div className="flex justify-center">
          <Button size="lg">Schedule a Compliance Consultation</Button>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to simplify your compliance journey?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Discover how CAVA2 can help your organization stay compliant while optimizing your hybrid workplace.
        </p>
        <Button size="lg">Get Started with CAVA2</Button>
      </section>
    </div>
  )
}