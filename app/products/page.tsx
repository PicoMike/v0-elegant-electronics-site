import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Reused from homepage */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
                  ELECTRO
                </span>
                <span className="text-2xl font-light text-rose-600">ELEGANCE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-rose-600 font-medium transition-colors">
                Products
              </Link>
              <Link href="/brands" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
                Brands
              </Link>
              <Link href="/deals" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
                Deals
              </Link>
              <Link href="/about" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search, Cart, and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pr-10 focus-visible:ring-rose-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-zinc-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-zinc-900">All Products</h1>
          <div className="flex items-center text-sm text-zinc-600 mt-2">
            <Link href="/" className="hover:text-rose-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900">Products</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-zinc-900">Filters</h3>
                  <Button variant="ghost" className="text-rose-600 text-sm h-auto p-0">
                    Clear All
                  </Button>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-zinc-900 font-medium">Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Smartphones", "Laptops", "Audio", "TVs", "Cameras", "Smart Home", "Accessories"].map(
                          (category, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Checkbox id={`category-${index}`} />
                              <label htmlFor={`category-${index}`} className="text-sm text-zinc-700 cursor-pointer">
                                {category}
                              </label>
                            </div>
                          ),
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="brand">
                    <AccordionTrigger className="text-zinc-900 font-medium">Brand</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {["Apple", "Samsung", "Sony", "LG", "Bose", "Dell", "HP", "Lenovo"].map((brand, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`brand-${index}`} />
                            <label htmlFor={`brand-${index}`} className="text-sm text-zinc-700 cursor-pointer">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price">
                    <AccordionTrigger className="text-zinc-900 font-medium">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[
                          "Under ₹10,000",
                          "₹10,000 - ₹25,000",
                          "₹25,000 - ₹50,000",
                          "₹50,000 - ₹100,000",
                          "Above ₹100,000",
                        ].map((price, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox id={`price-${index}`} />
                            <label htmlFor={`price-${index}`} className="text-sm text-zinc-700 cursor-pointer">
                              {price}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rating">
                    <AccordionTrigger className="text-zinc-900 font-medium">Rating</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="text-sm text-zinc-700 cursor-pointer flex items-center"
                            >
                              {Array(rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                              {Array(5 - rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-zinc-300" />
                                ))}
                              <span className="ml-1">& Up</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort and Filter Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="text-zinc-600">
                  Showing <span className="font-medium text-zinc-900">1-12</span> of{" "}
                  <span className="font-medium text-zinc-900">48</span> products
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-700 text-sm">Sort by:</span>
                    <Select defaultValue="featured">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(12)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                      <div className="relative overflow-hidden rounded-t-xl">
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={`Product ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full h-8 w-8 bg-white/80 hover:bg-white"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                        {index % 3 === 0 && (
                          <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
                            SALE
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`}
                              />
                            ))}
                          <span className="text-zinc-500 text-xs ml-2">(24)</span>
                        </div>
                        <h3 className="font-medium text-zinc-900 mb-2 group-hover:text-rose-600 transition-colors">
                          {
                            [
                              "Premium Smartphone",
                              "Ultra HD Smart TV",
                              "Wireless Headphones",
                              "Laptop Pro",
                              "Digital Camera",
                            ][index % 5]
                          }{" "}
                          {index + 1}
                        </h3>
                        <p className="text-rose-600 font-bold">₹{(Math.floor(Math.random() * 10) + 1) * 10000}</p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-rose-600 text-white hover:bg-rose-700 border-rose-600"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reused from homepage */}
      <footer className="bg-zinc-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white">ELECTRO</span>
                <span className="text-2xl font-light text-rose-500">ELEGANCE</span>
              </Link>
              <p className="text-zinc-400 mb-6">
                Mumbai's premier destination for premium electronics and tech accessories.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Laptops & Computers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Audio & Headphones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    TVs & Home Entertainment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Cameras & Photography
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Smart Home Devices
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Delivery Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-3 text-rose-500 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-zinc-400">
                    123 Tech Plaza, Andheri West
                    <br />
                    Mumbai, Maharashtra 400053
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-3 text-rose-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-zinc-400">+91 22 4567 8901</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-3 text-rose-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-zinc-400">info@electroelegance.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
            <p>© 2023 ElectroElegance. All rights reserved. Premium Electronics Store in Mumbai.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
