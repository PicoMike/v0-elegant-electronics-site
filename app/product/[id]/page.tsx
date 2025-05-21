import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailPage() {
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
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pr-10 py-2 px-4 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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

      {/* Breadcrumb */}
      <div className="bg-zinc-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-zinc-600">
            <Link href="/" className="hover:text-rose-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-rose-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products/smartphones" className="hover:text-rose-600">
              Smartphones
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-zinc-900">Premium Smartphone X1</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border border-zinc-200">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Premium Smartphone X1"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((img) => (
                  <div
                    key={img}
                    className="border border-zinc-200 rounded-lg overflow-hidden cursor-pointer hover:border-rose-500 transition-colors"
                  >
                    <Image
                      src={`/placeholder.svg?height=150&width=150`}
                      alt={`Product image ${img}`}
                      width={150}
                      height={150}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-zinc-900 mb-2">Premium Smartphone X1</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`}
                        />
                      ))}
                  </div>
                  <span className="text-zinc-600">128 Reviews</span>
                </div>
                <div className="text-3xl font-bold text-rose-600 mb-4">₹89,999</div>
                <p className="text-zinc-600 mb-6">
                  Experience the future of mobile technology with the Premium Smartphone X1. Featuring a stunning
                  6.7-inch AMOLED display, powerful octa-core processor, and an advanced camera system that captures
                  every detail.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Color</h3>
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-rose-500 cursor-pointer"></div>
                    <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-transparent cursor-pointer hover:border-rose-500"></div>
                    <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-transparent cursor-pointer hover:border-rose-500"></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Storage</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 border border-zinc-300 rounded-md cursor-pointer hover:border-rose-500 hover:bg-rose-50">
                      128GB
                    </div>
                    <div className="px-4 py-2 border border-rose-500 bg-rose-50 rounded-md cursor-pointer">256GB</div>
                    <div className="px-4 py-2 border border-zinc-300 rounded-md cursor-pointer hover:border-rose-500 hover:bg-rose-50">
                      512GB
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" className="rounded-r-none">
                      -
                    </Button>
                    <input
                      type="number"
                      value="1"
                      className="w-16 text-center border-y border-x-0 border-zinc-300 py-2"
                    />
                    <Button variant="outline" size="icon" className="rounded-l-none">
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-zinc-300 hover:bg-zinc-100">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-rose-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Free Delivery in Mumbai</h4>
                    <p className="text-sm text-zinc-600">2-3 day shipping across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-rose-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-zinc-900">1 Year Warranty</h4>
                    <p className="text-sm text-zinc-600">Manufacturer warranty included</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw className="h-5 w-5 text-rose-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Easy Returns</h4>
                    <p className="text-sm text-zinc-600">10-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Product Description</h3>
                <div className="prose text-zinc-700">
                  <p className="mb-4">
                    The Premium Smartphone X1 represents the pinnacle of mobile technology, combining cutting-edge
                    features with elegant design. This flagship device is crafted for those who demand the very best in
                    performance, camera capabilities, and user experience.
                  </p>
                  <p className="mb-4">
                    Featuring a stunning 6.7-inch AMOLED display with 120Hz refresh rate, the X1 delivers vibrant colors
                    and smooth scrolling that brings content to life. The display is protected by the latest Corning®
                    Gorilla® Glass Victus™, offering superior drop and scratch resistance.
                  </p>
                  <p className="mb-4">
                    Powered by the latest octa-core processor and 8GB of RAM, the X1 handles everything from everyday
                    tasks to intensive gaming with ease. The 256GB of storage provides ample space for your apps,
                    photos, videos, and more.
                  </p>
                  <p className="mb-4">
                    The professional-grade camera system includes a 108MP main sensor, 12MP ultra-wide lens, and 8MP
                    telephoto lens with 3x optical zoom. The advanced night mode captures stunning low-light photos,
                    while the 4K video recording at 60fps ensures smooth, detailed videos.
                  </p>
                  <p>
                    With a 5000mAh battery and 65W fast charging, the X1 keeps you powered throughout the day and
                    beyond. The device also supports 15W wireless charging for added convenience.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h4 className="font-medium text-zinc-900 mb-2">Display</h4>
                      <ul className="space-y-2 text-zinc-700 text-sm">
                        <li>6.7-inch AMOLED</li>
                        <li>2400 x 1080 resolution</li>
                        <li>120Hz refresh rate</li>
                        <li>HDR10+ certified</li>
                        <li>Corning® Gorilla® Glass Victus™</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h4 className="font-medium text-zinc-900 mb-2">Performance</h4>
                      <ul className="space-y-2 text-zinc-700 text-sm">
                        <li>Octa-core processor</li>
                        <li>8GB LPDDR5 RAM</li>
                        <li>256GB UFS 3.1 storage</li>
                        <li>Advanced cooling system</li>
                        <li>Android 13</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h4 className="font-medium text-zinc-900 mb-2">Camera</h4>
                      <ul className="space-y-2 text-zinc-700 text-sm">
                        <li>108MP main camera (f/1.8)</li>
                        <li>12MP ultra-wide (f/2.2)</li>
                        <li>8MP telephoto (3x optical zoom)</li>
                        <li>32MP front camera</li>
                        <li>4K video at 60fps</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h4 className="font-medium text-zinc-900 mb-2">Battery & Charging</h4>
                      <ul className="space-y-2 text-zinc-700 text-sm">
                        <li>5000mAh battery</li>
                        <li>65W wired fast charging</li>
                        <li>15W wireless charging</li>
                        <li>Reverse wireless charging</li>
                        <li>USB Type-C</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-zinc-900">Customer Reviews</h3>
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">Write a Review</Button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="text-zinc-900 font-medium">4.8 out of 5</span>
                  </div>
                  <div className="text-sm text-zinc-600">Based on 128 reviews</div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: "Rahul Mehta",
                      date: "2 weeks ago",
                      rating: 5,
                      review:
                        "Absolutely love this phone! The camera quality is outstanding and the battery life is impressive. I can easily get through a full day of heavy use without needing to recharge.",
                    },
                    {
                      name: "Priya Sharma",
                      date: "1 month ago",
                      rating: 4,
                      review:
                        "Great phone overall. The display is stunning and performance is top-notch. The only reason I'm giving 4 stars instead of 5 is that the fast charging isn't as fast as advertised.",
                    },
                    {
                      name: "Amit Patel",
                      date: "2 months ago",
                      rating: 5,
                      review:
                        "Best smartphone I've ever owned! The camera system is incredible - especially the night mode. I'm also impressed with how smooth and responsive the interface is.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b border-zinc-200 pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-zinc-900">{review.name}</h4>
                        <span className="text-sm text-zinc-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`}
                            />
                          ))}
                      </div>
                      <p className="text-zinc-700">{review.review}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">You May Also Like</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Related Product ${product}`}
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
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`}
                        />
                      ))}
                  </div>
                  <h3 className="font-medium text-zinc-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {
                      ["Wireless Earbuds Pro", "Smart Watch Series 5", "Bluetooth Speaker", "Power Bank 20000mAh"][
                        product - 1
                      ]
                    }
                  </h3>
                  <p className="text-rose-600 font-bold">₹{[12999, 24999, 8999, 3999][product - 1]}</p>
                </div>
              </div>
            ))}
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
