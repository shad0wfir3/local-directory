import Link from "next/link"
import { MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandSearch } from "@/components/command-search"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <MapPin className="h-6 w-6" />
          <Link href="/" className="font-bold">LocalScope</Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearch />
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/businesses">Explore</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            <ThemeToggle />
            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}