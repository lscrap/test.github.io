import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-24 text-center md:px-6">
      <div className="mx-auto max-w-md space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Application Submitted!</h1>
        <p className="text-muted-foreground">
          Thank you for applying to join our team. We've received your application and will review it as soon as
          possible.
        </p>
        <p className="text-muted-foreground">You'll be contacted through Discord if your application is successful.</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/applications">View Other Positions</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

