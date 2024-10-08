import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CAVA2 - Revolutionizing Hybrid Workplaces',
  description: 'Seamlessly manage your office space with Microsoft 365 integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">

              <Link className="flex items-center justify-center mr-4" href="#">
                <Image
                  src="/CAVA2.svg"
                  alt="CAVA2 Logo"
                  width={68}
                  height={24}
                  className="dark:invert"
                />
                <span className="sr-only">CAVA2</span>
              </Link>
              <Links />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/about" className="flex items-center">
                  <span className="font-bold">CAVA2</span>
                </Link>
                <Links />
              </SheetContent>
            </Sheet>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <Button className="w-full md:w-auto">Get Started</Button>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-left">
                Built by CAVA2. The source code is available on GitHub.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

function Links() {
  return <nav className=" lg:flex items-center space-x-6 text-sm font-medium">
    <Link href="/about/features">Features</Link>
    <Link href="/about/compliance">Compliance</Link>
    <Link href="/about/privacy">Privacy</Link>
    <Link href="/about/open-source">Open Source</Link>
  </nav>
}
