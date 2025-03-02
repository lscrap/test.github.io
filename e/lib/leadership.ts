export interface LeadershipMember {
  id: number
  name: string
  role: string
  robloxId: string // Roblox user ID for avatar fetching
}

export const leadershipMembers: LeadershipMember[] = [
  {
    id: 1,
    name: "Catastrophic",
    role: "Founder/Owner/Supreme leader",
    robloxId: "239190061", // Replace with actual Roblox user ID
  },
  {
    id: 2,
    name: "LScriptz",
    role: "Co-Owner",
    robloxId: "1732138660", // Replace with actual Roblox user ID
  },
  {
    id: 3,
    name: "theodu2b201",
    role: "Co-Owner",
    robloxId: "1388155754", // Replace with actual Roblox user ID
  },
  {
    id: 4,
    name: "c4snakeyy",
    role: "Co-Owner",
    robloxId: "460957694", // Replace with actual Roblox user ID
  },
  {
    id: 5,
    name: "orangeslice794",
    role: "Management Overseer",
    robloxId: "659159902", // Replace with actual Roblox user ID
  },
    {
    id: 6,
    name: "c4lightnium",
    role: "Federal Manager",
    robloxId: "1791226266", // Replace with actual Roblox user ID
  },
]

export async function getRobloxAvatar(userId: string) {
  try {
    const response = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    )

    if (!response.ok) {
      throw new Error("Failed to fetch avatar")
    }

    const data = await response.json()
    return data.data[0]?.imageUrl || "/placeholder.svg"
  } catch (error) {
    console.error("Error fetching avatar:", error)
    return "/placeholder.svg"
  }
}

