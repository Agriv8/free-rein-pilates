import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Mat Pilates Courses', href: '#mat-pilates' },
      { label: '1-2-1 Studio Pilates', href: '#studio' },
      { label: 'Equestrian Pilates', href: '#equestrian' },
      { label: 'Day Retreats', href: '#retreats' },
      { label: 'Sports Therapy', href: '#therapy' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Book Online', href: '#book' },
      { label: 'Shop', href: '#shop' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' }
    ]
  }

  return (
    <footer className="bg-pilates-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/client-content/Main Logo-White-RGB.webp" 
              alt="Free Rein Pilates" 
              className="h-12 mb-4"
            />
            <p className="text-pilates-beige text-sm leading-relaxed">
              Enabling all to access Pilates through personalised instruction 
              and a variety of services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4 text-pilates-sand">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-pilates-beige hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-4 text-pilates-sand">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-pilates-beige hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg mb-4 text-pilates-sand">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-pilates-beige hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pilates-brown/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pilates-beige text-sm">
              © {currentYear} Free Rein Pilates Ltd. All rights reserved.
            </p>
            <p className="text-pilates-beige text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pilates-rose" fill="currentColor" /> by AiDan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer