import Image from "next/image"
import { leadershipMembers, getRobloxAvatar } from "@/lib/leadership"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function LeadershipPage() {
  // Fetch all avatars in parallel
  const avatarPromises = leadershipMembers.map((member) => getRobloxAvatar(member.robloxId))
  const avatarUrls = await Promise.all(avatarPromises)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Meet the dedicated team behind our Roblox group who work hard to create amazing experiences.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadershipMembers.map((member, index) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src={avatarUrls[index] || "/placeholder.svg"}
                alt={member.name}
                width={420}
                height={420}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

