import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { 
      href: '#services', 
      label: 'SERVICES',
      submenu: [
        { href: '/mat-pilates', label: 'Mat Pilates Courses' },
        { href: '/studio-pilates', label: '1-2-1 Studio Pilates' },
        { href: '/equestrian-pilates', label: 'Equestrian Pilates' },
        { href: '/sports-therapy', label: 'Sports Therapy' }
      ]
    },
    { href: '#book', label: 'BOOK ONLINE' },
    { href: '#shop', label: 'SHOP' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
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
              <div key={link.label} className="relative">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`font-medium text-sm tracking-wide transition-colors flex items-center gap-1 ${
                        isScrolled ? 'text-pilates-dark hover:text-pilates-rose' : 'text-white hover:text-pilates-beige'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 bg-transparent">
                        <div className="bg-white rounded-xl shadow-xl py-2 min-w-[220px]">
                          {link.submenu.map((sublink) => (
                            <a
                              key={sublink.href}
                              href={sublink.href}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(sublink.href)
                              }}
                              className="block px-4 py-2 text-pilates-dark hover:bg-pilates-rose/10 hover:text-pilates-rose transition-colors"
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`font-medium text-sm tracking-wide transition-colors ${
                      isScrolled ? 'text-pilates-dark hover:text-pilates-rose' : 'text-white hover:text-pilates-beige'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-2.5 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all transform hover:scale-105 text-sm font-medium"
            >
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
                <div key={link.label}>
                  {link.submenu ? (
                    <>
                      <div className="py-2 text-pilates-dark font-medium">
                        {link.label}
                      </div>
                      <div className="pl-4 space-y-2">
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.href}
                            href={sublink.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(sublink.href)
                            }}
                            className="block py-2 text-pilates-brown hover:text-pilates-rose transition-colors"
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="block py-2 text-pilates-dark hover:text-pilates-rose transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="w-full px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all text-sm font-medium"
              >
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