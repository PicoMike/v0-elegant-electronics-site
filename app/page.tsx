import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search, Menu, Phone, MapPin, Clock, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 22 4567 8901</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Andheri West, Mumbai</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Sat: 10AM - 8PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
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
              <Link href="/products" className="text-zinc-900 hover:text-rose-600 font-medium transition-colors">
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
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Electronics in <span className="text-rose-500">Mumbai</span>
              </h1>
              <p className="text-lg text-zinc-300 max-w-lg">
                Discover the latest technology with our curated collection of premium electronics. Quality products with
                exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zinc-900"
                >
                  View Deals
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Latest Electronics"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -inset-4 bg-rose-500/20 rounded-lg blur-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Featured Categories</h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              Browse our most popular product categories and find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Smartphones", icon: "📱" },
              { name: "Laptops", icon: "💻" },
              { name: "Audio", icon: "🎧" },
              { name: "Smart Home", icon: "🏠" },
              { name: "Cameras", icon: "📷" },
              { name: "Accessories", icon: "⌚" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-medium text-zinc-900 group-hover:text-rose-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Featured Products</h2>
            <Link href="/products" className="text-rose-600 hover:text-rose-700 font-medium flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Premium Smartphone X1",
                price: "₹89,999",
                image: "/placeholder.svg?height=300&width=300",
                rating: 5,
              },
              {
                name: 'Ultra HD Smart TV 55"',
                price: "₹64,999",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4,
              },
              {
                name: "Wireless Noise Cancelling Headphones",
                price: "₹24,999",
                image: "/placeholder.svg?height=300&width=300",
                rating: 5,
              },
              {
                name: "Professional DSLR Camera",
                price: "₹1,24,999",
                image: "/placeholder.svg?height=300&width=300",
                rating: 4,
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="secondary" className="rounded-full h-8 w-8 bg-white/80 hover:bg-white">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {Array(product.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    {Array(5 - product.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-zinc-300" />
                      ))}
                  </div>
                  <h3 className="font-medium text-zinc-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-rose-600 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 bg-gradient-to-r from-rose-600 to-rose-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Special Monsoon Offer</h2>
              <p className="text-white/90 text-lg">
                Get up to 30% off on selected premium electronics. Limited time offer!
              </p>
              <Button size="lg" className="bg-white text-rose-600 hover:bg-zinc-100">
                Shop the Sale
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">15%</div>
                <div className="text-sm">Smartphones</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">20%</div>
                <div className="text-sm">Laptops</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm">Audio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Premium Brands</h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              We partner with the world's leading electronics brands to bring you the best products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["Apple", "Samsung", "Sony", "LG", "Bose", "Dell"].map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-zinc-50 rounded-lg">
                <span className="text-xl font-bold text-zinc-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Why Choose ElectroElegance</h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience for our customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Authentic Products</h3>
              <p className="text-zinc-600">
                All our products are 100% genuine with manufacturer warranty and after-sales support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Fast Delivery</h3>
              <p className="text-zinc-600">
                Same-day delivery in Mumbai and express shipping across India for your convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Expert Support</h3>
              <p className="text-zinc-600">
                Our knowledgeable team is always ready to help you choose the right products for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">What Our Customers Say</h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Bandra, Mumbai",
                text: "The customer service at ElectroElegance is exceptional. They helped me find the perfect laptop for my needs and even set it up for me!",
              },
              {
                name: "Raj Malhotra",
                location: "Juhu, Mumbai",
                text: "I've been shopping here for years. Their products are always authentic and their prices are competitive. Highly recommended!",
              },
              {
                name: "Ananya Patel",
                location: "Powai, Mumbai",
                text: "Same-day delivery in Mumbai is a game-changer! Ordered a new smartphone in the morning and was using it by evening. Amazing service!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <p className="text-zinc-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-zinc-300 mb-8">
              Subscribe to our newsletter for exclusive deals, new product announcements, and tech tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-zinc-400"
              />
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <MapPin className="h-5 w-5 mr-3 text-rose-500 mt-0.5" />
                  <span className="text-zinc-400">
                    123 Tech Plaza, Andheri West
                    <br />
                    Mumbai, Maharashtra 400053
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-rose-500" />
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
