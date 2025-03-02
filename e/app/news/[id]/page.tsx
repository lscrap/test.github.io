import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getNewsItem } from "@/lib/news"

export default function NewsItemPage({ params }: { params: { id: string } }) {
  const newsItem = getNewsItem(params.id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/news" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to News
        </Link>
      </Button>

      <article className="mx-auto max-w-3xl">
        <Image
          src={newsItem.image || "/placeholder.svg"}
          alt={newsItem.title}
          width={800}
          height={400}
          className="mb-8 rounded-lg object-cover"
        />
        <h1 className="mb-4 text-3xl font-bold">{newsItem.title}</h1>
        <p className="mb-6 text-muted-foreground">{newsItem.date}</p>
        <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
      </article>
    </div>
  )
}

