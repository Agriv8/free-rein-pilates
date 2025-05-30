import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#services', label: 'SERVICES' },
    { href: '#book', label: 'BOOK ONLINE' },
    { href: '#shop', label: 'SHOP' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/client-content/Main Logo-White-RGB.webp" 
              alt="Free Rein Pilates" 
              className={`h-12 md:h-16 transition-all duration-300 ${
                isScrolled ? 'brightness-0' : ''
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors ${
                  isScrolled ? 'text-pilates-dark hover:text-pilates-rose' : 'text-white hover:text-pilates-beige'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all transform hover:scale-105 text-sm font-medium">
              Book a Class
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-pilates-dark' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-pilates-dark hover:text-pilates-rose transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all text-sm font-medium">
                Book a Class
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation