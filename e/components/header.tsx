"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Roblox Group</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/leadership" className="text-sm font-medium transition-colors hover:text-primary">
            Leadership
          </Link>
          <Link href="/applications" className="text-sm font-medium transition-colors hover:text-primary">
            Applications
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            News
          </Link>
          <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/ranks" className="text-sm font-medium transition-colors hover:text-primary">
            Ranks
          </Link>
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/leadership"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Leadership
            </Link>
            <Link
              href="/applications"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Applications
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/ranks"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Ranks
            </Link>
            <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

