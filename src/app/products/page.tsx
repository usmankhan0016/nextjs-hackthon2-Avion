'use client'

import { Navbar } from "@/components/Navbar"
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"
import News from "@/components/newsletter"
export default function ProductPage() {
  const [amount, setAmount] = useState(1)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setAmount(value)
    }
  }

  const addToCart = () => {
    console.log(`Added ${amount} of The Dandy Chair to cart`)
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Section */}
          <div className="bg-gray-100">
            <Image
              src="/product-chair.png"
              alt="The Product Chair"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="self-start mt-6">
            <h1 className="font-clash text-4xl font-medium mb-2">The Dandy Chair</h1>
            <p className="text-2xl font-medium mb-6">£250</p>
            <div className="mb-6">
              <h2 className="font-medium mb-2">Description</h2>
              <p className="text-gray-600">
                A timeless design, with premium materials features as one of our most
                popular and iconic pieces. The dandy chair is perfect for any stylish
                living space with beech legs and lambskin leather upholstery.
              </p>
            </div>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            <div className="mb-6">
              <h2 className="font-medium mb-2">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4 text-gray-600">
                <div>
                  <p className="font-medium">Height</p>
                  <p>110cm</p>
                </div>
                <div>
                  <p className="font-medium">Width</p>
                  <p>75cm</p>
                </div>
                <div>
                  <p className="font-medium">Depth</p>
                  <p>50cm</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="amount" className="font-medium">Amount:</label>
              <Input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-20"
                min="1"
              />
            </div>
            <Button
              onClick={addToCart}
              className="w-auto bg-[#2A254B] hover:bg-[#2A254B]/90 text-white"
            >
              Add to cart
            </Button>
          </div>
        </div>

        <div>
          <h2 className="font-clash text-2xl font-medium mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-gray-600">£{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="font-clash">
            View collection
          </Button>
        </div>
      </div>
      <News/>
      <Footer />
    </>
  )
}

const relatedProducts = [
  { id: 1, name: "The Dandy chair", price: "250", image: "/chair.png" },
  { id: 2, name: "Rustic Vase Set", price: "155", image: "/rustic-vase-set.png" },
  { id: 3, name: "The Silky Vase", price: "125", image: "/the-silky-vase.png" },
  { id: 4, name: "The Lucy Lamp", price: "399", image: "/the-lucy-lamp.png" },
]
