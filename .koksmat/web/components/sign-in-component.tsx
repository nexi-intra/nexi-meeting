import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MountainIcon, HelpCircle, ArrowRight } from "lucide-react"

interface SignInComponentProps {
  handleLogin: () => void;
}

export default function SignInComponent({ handleLogin }: SignInComponentProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSignIn = async () => {
    setIsLoading(true)
    try {
      await handleLogin()
    } catch (error) {
      console.error('Login failed:', error)
      // Here you could add error handling, such as displaying an error message to the user
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <MountainIcon className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Welcome to CAVA2</CardTitle>
          <CardDescription className="text-center">
            Sign in to access your hybrid workplace tools
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button
              className="w-full bg-[#0078D4] hover:bg-[#106EBE] text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onSignIn}
              disabled={isLoading}
            >
              <span className="flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In using Microsoft 365 account
                    {isHovered && <ArrowRight className="ml-2 h-4 w-4" />}
                  </>
                )}
              </span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">
            Powered by Nexi International
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
                <span className="sr-only">Help</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Need help?</h3>
                <p className="text-sm text-gray-500">
                  If you're having trouble signing in or need assistance, please contact:
                </p>
                <p className="text-sm font-medium">IT Support</p>
                <p className="text-sm">Email: support@nexiinternational.com</p>
                <p className="text-sm">Phone: +1 (555) 123-4567</p>
              </div>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </div>
  )
}