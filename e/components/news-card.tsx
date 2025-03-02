import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { NewsItem } from "@/lib/news"

interface NewsCardProps {
  item: NewsItem
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={300}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{item.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/news/${item.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

