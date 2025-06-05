import { useState, useEffect } from 'react'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

interface Product {
  id: string
  name: string
  description: string
  price: number
  sale_price?: number
  images: string[]
  category: string
  inventory: number
  active: boolean
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { cart, addToCart, removeFromCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample products for demonstration
  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Pilates Mat - Premium',
      description: 'High-quality, non-slip pilates mat perfect for all levels. Extra thick for comfort and durability.',
      price: 45.00,
      sale_price: 35.00,
      images: ['/client-content/Mat Pilates Courses.webp'],
      category: 'Equipment',
      inventory: 15,
      active: true
    },
    {
      id: '2',
      name: 'Resistance Bands Set',
      description: 'Complete set of resistance bands for strength training and rehabilitation exercises.',
      price: 25.00,
      images: ['/client-content/studio.webp'],
      category: 'Equipment',
      inventory: 8,
      active: true
    },
    {
      id: '3',
      name: '1-2-1 Studio Session',
      description: 'Personalised pilates session in our fully equipped studio. Perfect for beginners or focused training.',
      price: 65.00,
      images: ['/client-content/1-2-1- Studio Pilates.webp'],
      category: 'Sessions',
      inventory: 20,
      active: true
    },
    {
      id: '4',
      name: 'Mat Pilates Course (6 weeks)',
      description: 'Complete 6-week mat pilates course. Suitable for all levels with expert instruction.',
      price: 120.00,
      sale_price: 100.00,
      images: ['/client-content/Mat Pilates Courses2.webp'],
      category: 'Courses',
      inventory: 12,
      active: true
    },
    {
      id: '5',
      name: 'Sports Therapy Session',
      description: 'Targeted sports therapy session for injury recovery and performance enhancement.',
      price: 75.00,
      images: ['/client-content/ Sports Therapy Sessions .webp'],
      category: 'Therapy',
      inventory: 10,
      active: true
    },
    {
      id: '6',
      name: 'Equestrian Pilates Session',
      description: 'Specialised pilates session designed for horse riders to improve balance and core strength.',
      price: 70.00,
      images: ['/client-content/Equestrian Pilates Sessions .webp'],
      category: 'Specialised',
      inventory: 8,
      active: true
    },
    {
      id: '7',
      name: 'Wrest Park Day Retreat',
      description: 'Luxury 4-hour retreat at the beautiful Wrest Park Orangery. Includes 3 workshops, refreshments, goodie bag and park day pass.',
      price: 115.00,
      images: ['/client-content/Wrest Park Day Retreats.webp'],
      category: 'Retreats',
      inventory: 20,
      active: true
    },
    {
      id: '8',
      name: 'Center Parcs Woburn Day Retreat',
      description: 'Coming Soon! Relaxing day retreat at Center Parcs Woburn. Details to be announced.',
      price: 0.00,
      images: ['/client-content/Center Parcs Woburn Day Retreats.webp'],
      category: 'Retreats',
      inventory: 0,
      active: false
    }
  ]

  useEffect(() => {
    // Load products from database or use sample data
    setProducts(sampleProducts)
  }, [])

  const categories = ['all', 'Equipment', 'Sessions', 'Courses', 'Therapy', 'Specialised', 'Retreats']
  
  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(p => p.active) 
    : products.filter(p => p.category === selectedCategory && p.active)




  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      {/* Header */}
      <div className="bg-pilates-dark text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Shop</h1>
          <p className="text-xl text-pilates-beige max-w-3xl mx-auto">
            Premium pilates equipment, sessions, and courses. Everything you need for your wellness journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-pilates-rose text-white'
                  : 'bg-white text-pilates-dark hover:bg-pilates-rose/10'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-pilates-brown bg-pilates-beige/20 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.inventory < 5 && (
                    <span className="text-sm text-pilates-rose">
                      Only {product.inventory} left
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-pilates-dark mb-3">
                  {product.name}
                </h3>
                
                <p className="text-pilates-brown mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.sale_price ? (
                      <>
                        <span className="text-2xl font-bold text-pilates-rose">
                          £{product.sale_price.toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          £{product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-pilates-dark">
                        £{product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {cart[product.id] ? (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-8 h-8 rounded-full bg-pilates-rose/10 text-pilates-rose flex items-center justify-center hover:bg-pilates-rose hover:text-white transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-medium w-8 text-center">
                        {cart[product.id]}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-8 h-8 rounded-full bg-pilates-rose/10 text-pilates-rose flex items-center justify-center hover:bg-pilates-rose hover:text-white transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl text-pilates-brown mb-4">
              No products found in this category
            </h3>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Shop