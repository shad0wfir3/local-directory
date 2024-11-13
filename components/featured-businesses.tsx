"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FEATURED_BUSINESSES = [
  {
    id: 1,
    name: "The Coffee House",
    category: "Café",
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60",
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    website: "www.thecoffeehouse.com",
    description: "Artisanal coffee and fresh pastries in a cozy atmosphere",
    premium: true
  },
  {
    id: 2,
    name: "Fitness Plus",
    category: "Gym",
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
    address: "456 Fitness Ave",
    phone: "(555) 234-5678",
    website: "www.fitnessplus.com",
    description: "State-of-the-art equipment and expert personal trainers",
    premium: true
  },
  {
    id: 3,
    name: "Green Garden Restaurant",
    category: "Restaurant",
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
    address: "789 Garden Road",
    phone: "(555) 345-6789",
    website: "www.greengardenrest.com",
    description: "Farm-to-table dining with organic ingredients",
    premium: true
  }
]

export function FeaturedBusinesses() {
  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {FEATURED_BUSINESSES.map((business) => (
        <Card key={business.id} className="overflow-hidden group">
          <div className="relative h-48">
            <Image
              src={business.image}
              alt={business.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Premium
            </Badge>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{business.name}</h3>
              <Badge variant="secondary">{business.category}</Badge>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{business.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({business.reviews} reviews)
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{business.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>{business.website}</span>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" asChild>
                <Link href={`/businesses/${business.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}