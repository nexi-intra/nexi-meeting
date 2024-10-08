import Image from 'next/image'
import { Shield, Lock, Server, Cloud } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">CAVA2: Private by Design</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Data, Your Control</h2>
        <p className="text-lg mb-4">
          At CAVA2, we understand that data privacy is paramount in today's digital landscape. That's why we've designed our solution to be private from the ground up, ensuring that your sensitive workplace data never leaves the secure perimeter of your business.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/undraw_safe_re_kiil.svg"
              alt="CAVA2 Security Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Hosted Within Your Azure Environment</h3>
            <p className="text-gray-700">
              CAVA2 is deployed entirely within your organization's Azure-hosted Kubernetes cluster. This means that all data processing, storage, and management occur within your own cloud infrastructure, giving you complete control over your data's location and access.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Privacy Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Data Isolation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your CAVA2 instance runs in isolation, ensuring that your data never mingles with that of other organizations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                End-to-End Encryption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>All data in transit and at rest is encrypted using industry-standard protocols, safeguarding against unauthorized access.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-primary" />
                On-Premises Option
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>For organizations with stricter data residency requirements, CAVA2 can be deployed on-premises within your own data centers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-primary" />
                Azure Kubernetes Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Leverage Azure Kubernetes Service (AKS) security features, including network policies, pod security policies, and Azure AD integration.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>CAVA2 is deployed as a set of containerized microservices within your Azure Kubernetes cluster.</li>
          <li>Only data storage used is Azure-managed PostGres.</li>
          <li>Integration with Microsoft 365 services is done securely using Azure AD and Microsoft Graph API.</li>
          <li>Access to CAVA2 is controlled through your existing Azure AD, allowing for seamless single sign-on (SSO) and multi-factor authentication (MFA).</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compliance and Auditing</h2>
        <p className="text-lg mb-4">
          CAVA2's deployment model ensures that you remain in full control of your data, making it easier to comply with regulations such as GDPR, CCPA, and industry-specific requirements. Our solution also provides comprehensive audit logs, allowing you to monitor all system activities and data access.
        </p>
        <Button size="lg">Learn More About Compliance</Button>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to take control of your workplace data?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Experience the peace of mind that comes with CAVA2's privacy-first approach.
        </p>
        <Link href="/"><Button size="lg">Try it</Button></Link>
      </section>
    </div>
  )
}