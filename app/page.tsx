import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, Search, Star, TrendingUp, MapPin, Phone, Globe, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CategoryDirectory } from "@/components/category-directory"
import { FeaturedBusinesses } from "@/components/featured-businesses"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3540&auto=format&fit=crop"
              alt="Community gathering"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 dark:from-primary/20 dark:to-primary/5" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                  Discover Your Local Community
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with the best local businesses in your area. Find, review, and support your neighborhood favorites.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/businesses">Explore Businesses</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10" asChild>
                  <Link href="/list-business">List Your Business</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Premium Businesses */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Featured Businesses</h2>
                <p className="text-muted-foreground">Discover our premium local businesses</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/businesses/premium">View All Premium Listings</Link>
              </Button>
            </div>
            <FeaturedBusinesses />
          </div>
        </section>

        {/* Category Directory */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Browse by Category</h2>
                <p className="text-muted-foreground">Find local businesses by category</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/categories">View All Categories</Link>
              </Button>
            </div>
            <CategoryDirectory />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center space-y-4 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Easy Discovery</h3>
                  <p className="text-center text-muted-foreground">
                    Find exactly what you're looking for with our powerful search and filtering system.
                  </p>
                </div>
              </Card>
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center space-y-4 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Verified Reviews</h3>
                  <p className="text-center text-muted-foreground">
                    Read authentic reviews from real customers to make informed decisions.
                  </p>
                </div>
              </Card>
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center space-y-4 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Business Growth</h3>
                  <p className="text-center text-muted-foreground">
                    Boost your visibility and connect with more customers in your area.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3474&auto=format&fit=crop"
              alt="Business community"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <p className="text-sm text-muted-foreground">Active Businesses</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <p className="text-sm text-muted-foreground">Customer Reviews</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Monthly Searches</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}