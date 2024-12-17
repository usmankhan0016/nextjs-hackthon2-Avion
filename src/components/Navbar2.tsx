"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  "All products",
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
]

export function Navbar2() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-[#2A254B] py-2 px-4 text-center text-white">
        <p className="text-sm">Free delivery on all orders over £50 with code easter checkout</p>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl">
            Avion
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About us
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <a href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
             </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link href="/about" className="text-sm" onClick={() => setIsOpen(false)}>
                    About us
                  </Link>
                  <Link href="/contact" className="text-sm" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  <Link href="/blog" className="text-sm" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                0
              </span>
            </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-b">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="hidden space-x-8 md:flex">
              {categories.map((category) => (
                <NavigationMenuItem key={category}>
                  <NavigationMenuLink
                    href="/products"
                    className={cn(
                      "group inline-flex h-14 w-max items-center justify-center text-sm font-medium transition-colors hover:text-gray-900",
                      "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {category}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Categories */}
          <div className="scrollbar-none flex overflow-x-auto py-4 md:hidden">
            {categories.map((category) => (
              <Link
                key={category}
                href="/products"
                className="whitespace-nowrap px-4 text-sm text-gray-600 hover:text-gray-900"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}