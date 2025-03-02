import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock rank data (in a real app, this would come from a database)
const ranks = [
  {
    "id": "1",
    "name": "Placeholder",
    "rank": 1,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder"],
    "color": "bg-blue-100 text-blue-800"
  },
  {
    "id": "2",
    "name": "Placeholder",
    "rank": 2,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-green-100 text-green-800"
  },
  {
    "id": "3",
    "name": "Placeholder",
    "rank": 3,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-yellow-100 text-yellow-800"
  },
  {
    "id": "4",
    "name": "Placeholder",
    "rank": 4,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-orange-100 text-orange-800"
  },
  {
    "id": "5",
    "name": "Placeholder",
    "rank": 5,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-red-100 text-red-800"
  },
  {
    "id": "6",
    "name": "Placeholder",
    "rank": 6,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-purple-100 text-purple-800"
  },
  {
    "id": "7",
    "name": "Placeholder",
    "rank": 7,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-pink-100 text-pink-800"
  },
  {
    "id": "8",
    "name": "Placeholder",
    "rank": 8,
    "description": "Placeholder",
    "requirements": ["Placeholder"],
    "color": "bg-teal-100 text-teal-800"
  },
  {
    "id": "9",
    "name": "Placeholder",
    "rank": 9,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder"],
    "color": "bg-cyan-100 text-cyan-800"
  },
  {
    "id": "10",
    "name": "Placeholder",
    "rank": 10,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-lime-100 text-lime-800"
  },
  {
    "id": "11",
    "name": "Placeholder",
    "rank": 11,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder"],
    "color": "bg-indigo-100 text-indigo-800"
  },
  {
    "id": "12",
    "name": "Placeholder",
    "rank": 12,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder", "Placeholder"],
    "color": "bg-amber-100 text-amber-800"
  },
  {
    "id": "13",
    "name": "Placeholder",
    "rank": 13,
    "description": "Placeholder",
    "requirements": ["Placeholder", "Placeholder"],
    "color": "bg-fuchsia-100 text-fuchsia-800"
  },
  {
    "id": "14",
    "name": "Headquarters",
    "rank": 14,
    "description": "Highest rank within a department",
    "requirements": ["Been a active member of that department for atleast 3 months", "Handpicked and chosen by Federal Management+", "Professional", "Deemed fit for the rank", "Haven't been fired or forced leave before as headquarters"],
    "color": "bg-rose-100 text-rose-800"
  },
  {
    "id": "15",
    "name": "Federal Management",
    "rank": 15,
    "description": "Oversee departments",
    "requirements": ["Be headquarters", "Atleast 3 months of being headquarters", "Handpicked by Management Overseer+", "Professional and fit for the rank"],
    "color": "bg-violet-100 text-violet-800"
  },
  {
    "id": "16",
    "name": "Management Overseer",
    "rank": 16,
    "description": "Oversees the whole group, makes sure the Federal Management are doing their job.",
    "requirements": ["Handpicked by co-owner + owner", "Have a good reputation"],
    "color": "bg-gray-100 text-gray-800"
  },
  {
    "id": "17",
    "name": "Co-Owner",
    "rank": 17,
    "description": "Oversees the whole group",
    "requirements": ["Handpicked by the owner"],
    "color": "bg-blue-200 text-blue-900"
  },
  {
    "id": "18",
    "name": "Owner",
    "rank": 18,
    "description": "Be the owner and chill",
    "requirements": ["Own the group"],
    "color": "bg-green-200 text-green-900"
  }
]



export default function RanksPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rank Structure</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Learn about our group's ranks and how to get promoted.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        {ranks.map((rank) => (
          <Card key={rank.id} className="overflow-hidden">
            <div className={`h-2 w-full ${rank.color}`} />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{rank.name}</CardTitle>
                <Badge className={rank.color}>Rank {rank.rank}</Badge>
              </div>
              <CardDescription>{rank.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="mb-2 font-medium">Requirements for Promotion:</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                {rank.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

