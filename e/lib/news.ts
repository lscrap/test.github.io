export interface NewsItem {
  id: string
  title: string
  date: string
  summary: string
  content: string
  image: string
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Release!",
    date: "March 1, 2025",
    summary: "We've just released the group and game.",
    content: `
      <p>We're excited to announce the official release of our group and game! This is just the beginning of an amazing journey, and we can't wait for everyone to experience what we've been working on.</p>
      
      <h2>What's Included in the Release</h2>
      <ul>
        <li>A fully functional game with a big map</li>
        <li>A robust group structure with various roles and responsibilities</li>
        <li>An engaging community platform for members to interact and collaborate</li>
      </ul>

      <h2>What's Next</h2>
      <p>This release is just the start. We have big plans for the future, including:</p>
      <ul>
        <li>Regular content updates and new features</li>
        <li>Community events and competitions</li>
        <li>Expanded roles and opportunities within the group</li>
      </ul>

      <p>We want to thank everyone who has supported us during the development process. Your feedback and enthusiasm have been invaluable.</p>

      <h2>How to Get Involved</h2>
      <p>If you're excited about our release and want to be part of our community:</p>
      <ol>
        <li>Join our Roblox group</li>
        <li>Play our game and share your feedback</li>
        <li>Participate in our Discord community</li>
        <li>Consider applying for a staff position</li>
      </ol>

      <p>Stay tuned for more updates, and we'll see you in the game!</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
  // Add more news items here as needed
]

export function getNewsItems(): NewsItem[] {
  return newsItems
}

export function getNewsItem(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id)
}

