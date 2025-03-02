import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Roblox Group</h3>
            <p className="text-sm text-muted-foreground">
              Join our community and be part of something amazing. We're dedicated to creating fun and engaging
              experiences for all players.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/leadership" className="text-sm text-muted-foreground hover:text-foreground">
                Leadership
              </Link>
              <Link href="/applications" className="text-sm text-muted-foreground hover:text-foreground">
                Applications
              </Link>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">
                News
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://discord.gg/Uq8GRGjsRU" target="_blank" rel="noopener noreferrer">
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.youtube.com/channel/UCBiFdbOrVQyIlOSvjroXQQg" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/LScriptz3" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Roblox Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

