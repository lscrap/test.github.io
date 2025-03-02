"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Users, CalendarDays, FileText, MessageSquare } from "lucide-react";
import { getNewsItems } from "@/lib/news";
import { NewsCard } from "@/components/news-card";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const items = await getNewsItems();
      setNewsItems(items.slice(0, 3)); // Get the 3 most recent news items
    }
    fetchNews();
  }, []);

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Our Roblox Group
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our community and be part of an exciting gaming experience. We're dedicated to creating fun and
                  engaging content for all players.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="transition-all duration-300 ease-in-out hover:scale-105">
                  <Link href="/applications">Join Our Team</Link>
                </Button>
                <div className="ml-4">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <Link href="https://www.roblox.com/groups/" target="_blank" rel="noopener noreferrer">
                      Visit Our Roblox Group
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Game Screenshot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest News</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with the latest announcements and game updates.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild className="transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

