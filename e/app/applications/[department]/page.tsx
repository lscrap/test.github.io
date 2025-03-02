import { notFound } from "next/navigation"
import Link from "next/link"
import { getDepartmentById } from "@/lib/application-config"
import { ApplicationForm } from "@/components/application-form"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

export default function DepartmentApplicationPage({
  params,
}: {
  params: { department: string }
}) {
  const department = getDepartmentById(params.department)

  // If department doesn't exist or is closed, show 404
  if (!department || !department.isOpen) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/applications" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Applications
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tighter">{department.name} Application</h1>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              Open
            </Badge>
          </div>
          <p className="mt-2 text-muted-foreground">{department.description}</p>
        </div>

        <div className="mb-8 rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-medium">Requirements</h2>
          <ul className="list-inside list-disc space-y-1 text-muted-foreground">
            {department.requirements?.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <ApplicationForm department={department} />
      </div>
    </div>
  )
}

