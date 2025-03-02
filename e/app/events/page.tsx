import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

// Mock events data (in a real app, this would come from a database)
const events = [
  {
    id: "1",
    title: "N/A",
    date: "N/A",
    time: "N/A",
    description: "N/A",
    location: "N/A",
  },
  {
    id: "2",
    title: "N/A",
    date: "N/A",
    time: "N/A",
    description: "N/A",
    location: "N/A",
  },
]

export default function EventsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated on training sessions, meetings, and special in-game events.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {event.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {event.time}
              </div>
              <p className="text-muted-foreground">{event.description}</p>
              <p className="mt-2 text-sm font-medium">Location: {event.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

