import Link from "next/link"
import { getOpenDepartments, getAllDepartments } from "@/lib/application-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ApplicationsPage() {
  const openDepartments = getOpenDepartments()
  const departments = getAllDepartments()

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We're looking for dedicated individuals to help our group grow and improve. Check out our open positions
            below.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {openDepartments.map((department) => (
          <Card key={department.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{department.name}</CardTitle>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                >
                  Open
                </Badge>
              </div>
              <CardDescription>{department.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Requirements:</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {department.requirements?.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/applications/${department.id}`}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Closed Departments */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Closed Positions</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments
            .filter((dept) => !dept.isOpen)
            .map((department) => (
              <Card key={department.id} className="flex flex-col opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{department.name}</CardTitle>
                    <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                      Closed
                    </Badge>
                  </div>
                  <CardDescription>{department.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Requirements:</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {department.requirements?.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full">
                    Applications Closed
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

