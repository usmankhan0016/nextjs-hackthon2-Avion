"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import {Navbar} from "@/components/Navbar"
import Footer from "@/components/footer"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: "£250",
    image: "/chair.png"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: "£155",
    image: "/rustic-vase-set.png"
  },
  {
    id: 3,
    name: "The Lucy Lamp",
    price: "£399",
    image: "/the-lucy-lamp.png"
  },
  {
    id: 4,
    name: "The Silky Vase",
    price: "£125",
    image: "/the-silky-vase.png"
  },
  // Repeat products for grid
  {
    id: 5,
    name: "Unique Lamps",
    price: "£250",
    image: "/lamps.png"
  },
  {
    id: 6,
    name: "whitevase",
    price: "£155",
    image: "/whitevase.png"
  },
  {
    id: 7,
    name: "Comfortable Stool",
    price: "£399",
    image: "/stool.png"
  },
  {
    id: 8,
    name: "white-plant",
    price: "£125",
    image: "/white-plant.png"
  },
  {
    id: 9,
    name: "The Dandy Chairs",
    price: "£125",
    image: "/2chair.png"
  },
]

const filters = {
  "Product type": ["Furniture", "Homeware", "Sofas", "Light fittings", "Accessories"],
  "Price": ["0 - 100", "101 - 250", "250 +"],
  "Designer": ["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"]
}

export default function ProductListing() {
  return (
<>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/product-banner.png"
          alt="All Products"
          fill
          className="object-cover brightness-75"
        />
        <h1 className="absolute bottom-8 left-4 text-3xl font-normal text-white sm:left-8 lg:left-12">
          All products
        </h1>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[240px,1fr] lg:gap-x-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <Accordion type="single" collapsible className="w-full">
              {Object.entries(filters).map(([category, options]) => (
                <AccordionItem key={category} value={category}>
                  <AccordionTrigger className="text-base font-normal">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox id={option} />
                          <label
                            htmlFor={option}
                            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Filters - Mobile */}
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  Filters
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(filters).map(([category, options]) => (
                    <AccordionItem key={category} value={category}>
                      <AccordionTrigger className="text-base font-normal">
                        {category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {options.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox id={`mobile-${option}`} />
                              <label
                                htmlFor={`mobile-${option}`}
                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  Sorting
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sort by</SheetTitle>
                </SheetHeader>
                {/* Add sorting options here */}
              </SheetContent>
            </Sheet>
          </div>

          {/* Product Grid */}
          <div className="mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-normal text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center lg:hidden">
              <Button variant="outline" className="w-full">
                View collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

