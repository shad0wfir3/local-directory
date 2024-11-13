"use client"

import { Card } from "@/components/ui/card"
import { LucideIcon, 
  Utensils, 
  ShoppingBag, 
  Briefcase, 
  Heart, 
  Scissors, 
  Dumbbell, 
  Palette, 
  GraduationCap,
  Car,
  Home,
  Wine,
  Music
} from "lucide-react"
import Link from "next/link"

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

const CATEGORIES: Category[] = [
  {
    name: "Restaurants & Dining",
    icon: Utensils,
    count: 450,
    color: "text-orange-500"
  },
  {
    name: "Retail & Shopping",
    icon: ShoppingBag,
    count: 380,
    color: "text-blue-500"
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    count: 320,
    color: "text-purple-500"
  },
  {
    name: "Health & Medical",
    icon: Heart,
    count: 280,
    color: "text-red-500"
  },
  {
    name: "Beauty & Spa",
    icon: Scissors,
    count: 260,
    color: "text-pink-500"
  },
  {
    name: "Fitness & Wellness",
    icon: Dumbbell,
    count: 240,
    color: "text-green-500"
  },
  {
    name: "Arts & Entertainment",
    icon: Palette,
    count: 220,
    color: "text-yellow-500"
  },
  {
    name: "Education & Learning",
    icon: GraduationCap,
    count: 200,
    color: "text-cyan-500"
  },
  {
    name: "Automotive",
    icon: Car,
    count: 180,
    color: "text-slate-500"
  },
  {
    name: "Home Services",
    icon: Home,
    count: 160,
    color: "text-emerald-500"
  },
  {
    name: "Nightlife",
    icon: Wine,
    count: 140,
    color: "text-violet-500"
  },
  {
    name: "Events & Entertainment",
    icon: Music,
    count: 120,
    color: "text-rose-500"
  }
]

export function CategoryDirectory() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {CATEGORIES.map((category) => {
        const Icon = category.icon
        return (
          <Link 
            key={category.name} 
            href={`/categories/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          >
            <Card className="p-4 hover:bg-muted/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full bg-background ${category.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} businesses</p>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}