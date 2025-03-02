import { getNewsItems } from "@/lib/news"
import { NewsCard } from "@/components/news-card"

export default function NewsPage() {
  const newsItems = getNewsItems()

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Updates</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated with the latest announcements and game updates.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

