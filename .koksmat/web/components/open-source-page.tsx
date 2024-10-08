import Image from 'next/image'
import { Github, Globe, Users, Lock, Zap, Gift } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function OpenSourcePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">CAVA2: Free and Open Source</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Empowering Hybrid Workplaces Through Open Collaboration</h2>
        <p className="text-lg mb-4">
          CAVA2 is not just a solution; it's a movement towards more transparent, collaborative, and innovative workplace management. We believe that by making CAVA2 free and open source, we can create a tool that truly serves the needs of modern businesses while fostering a community of contributors and users.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/undraw_open_source.svg"
              alt="CAVA2 Open Source Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Our Journey to CNCF</h3>
            <p className="text-gray-700">
              We are actively working towards making CAVA2 a Cloud Native Computing Foundation (CNCF) project. This move will ensure long-term sustainability, foster wider adoption, and align CAVA2 with other cutting-edge cloud-native technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Community-Driven Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Harness the collective intelligence of developers worldwide, leading to faster innovation and feature development.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Enhanced Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>With more eyes on the code, vulnerabilities are discovered and fixed quickly, resulting in a more secure product.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Customization and Flexibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tailor CAVA2 to your specific needs. The open-source nature allows for unlimited customization and integration possibilities.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Rapid Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Benefit from the fast-paced development cycle of open-source projects, with frequent updates and improvements.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why CNCF?</h2>
        <p className="text-lg mb-4">
          Joining the CNCF ecosystem will bring numerous advantages to CAVA2 and its users:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Increased visibility and adoption within the cloud-native community</li>
          <li>Access to CNCF's extensive resources and best practices</li>
          <li>Interoperability with other CNCF projects</li>
          <li>Long-term project sustainability</li>
          <li>Neutral governance model ensuring the project serves the community's best interests</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-4">
          CAVA2's success as an open-source project depends on community involvement. Here's how you can contribute:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            Star us on GitHub
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Contribute Code
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Join Our Community
          </Button>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to embrace the future of open-source workplace management?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us in shaping CAVA2 and revolutionizing hybrid workplaces together.
        </p>
        <Button size="lg">Get Started with CAVA2</Button>
      </section>
    </div>
  )
}