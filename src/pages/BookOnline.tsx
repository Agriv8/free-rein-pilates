import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BookOnline = () => {
  const services = [
    {
      title: 'Mat Pilates Courses',
      duration: '6 week blocks',
      price: 'Contact for pricing',
      location: 'Shefford (SG17)',
      description: 'Mixed ability classes, beginners welcome'
    },
    {
      title: '1-2-1 Studio Pilates',
      duration: '60 minutes',
      price: 'Contact for pricing',
      location: 'Home Studio',
      description: 'Personal reformer sessions tailored to your goals'
    },
    {
      title: 'Equestrian Pilates',
      duration: 'Flexible',
      price: 'Contact for pricing',
      location: 'Various locations',
      description: 'Individual training plans for riders'
    },
    {
      title: 'Sports Therapy',
      duration: 'Varies',
      price: 'Contact for pricing',
      location: 'Home Studio',
      description: 'Initial consultation required'
    },
    {
      title: 'Wrest Park Day Retreat',
      duration: '4 hours',
      price: '£115 per person',
      location: 'Wrest Park, Silsoe',
      description: 'Luxury morning retreat with goodie bag'
    }
  ]

  const bookingSteps = [
    'Choose your preferred service',
    'Contact us via phone or email',
    'Discuss your goals and availability',
    'Book your session or course',
    'Receive confirmation and details'
  ]

  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pilates-rose/20 to-pilates-beige/20">
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display text-pilates-dark mb-4">
              Book Online
            </h1>
            <p className="text-xl text-pilates-brown">
              Start your Pilates journey today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-pilates-dark mb-4">
              Our Services & Booking
            </h2>
            <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
              Choose from our range of services below. Contact us directly to discuss 
              your needs and book your sessions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-display text-pilates-dark mb-4">
                  {service.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-pilates-brown">
                    <Clock className="w-5 h-5 text-pilates-rose flex-shrink-0" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-pilates-brown">
                    <MapPin className="w-5 h-5 text-pilates-rose flex-shrink-0" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-pilates-brown font-semibold">
                    <span className="text-pilates-rose">💷</span>
                    <span>{service.price}</span>
                  </div>
                </div>
                
                <p className="text-pilates-brown mb-6">
                  {service.description}
                </p>
                
                <button
                  onClick={() => document.getElementById('booking-contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-4 py-2 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-colors font-medium"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Booking Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-pilates-sand rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-8 text-center">
              How to Book
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {bookingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-pilates-rose font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-pilates-brown">{step}</p>
                  {index < bookingSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2">
                      <span className="text-pilates-rose">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="booking-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-8 text-center">
              Book Your Session Today
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-display text-pilates-dark mb-4">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <a href="tel:01234567890" className="flex items-center gap-3 text-pilates-brown hover:text-pilates-rose transition-colors">
                    <Phone className="w-5 h-5 text-pilates-rose" />
                    <span>01234 567890</span>
                  </a>
                  <a href="mailto:info@freereinpilates.com" className="flex items-center gap-3 text-pilates-brown hover:text-pilates-rose transition-colors">
                    <Mail className="w-5 h-5 text-pilates-rose" />
                    <span>info@freereinpilates.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-pilates-brown">
                    <MapPin className="w-5 h-5 text-pilates-rose mt-0.5" />
                    <div>
                      <p>Shefford, Bedfordshire</p>
                      <p className="text-sm">Studio sessions by appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-display text-pilates-dark mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-pilates-brown">
                    <CheckCircle className="w-5 h-5 text-pilates-rose mt-0.5 flex-shrink-0" />
                    <span>Personalised consultation to understand your goals</span>
                  </li>
                  <li className="flex items-start gap-2 text-pilates-brown">
                    <CheckCircle className="w-5 h-5 text-pilates-rose mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling to suit your availability</span>
                  </li>
                  <li className="flex items-start gap-2 text-pilates-brown">
                    <CheckCircle className="w-5 h-5 text-pilates-rose mt-0.5 flex-shrink-0" />
                    <span>Expert guidance from qualified instructor</span>
                  </li>
                  <li className="flex items-start gap-2 text-pilates-brown">
                    <CheckCircle className="w-5 h-5 text-pilates-rose mt-0.5 flex-shrink-0" />
                    <span>Welcoming environment for all abilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-pilates-brown mb-4">
                <strong>Erin Pitts</strong> - Certified Pilates Instructor & Sports Therapist
              </p>
              <motion.a
                href="tel:01234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now to Book
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BookOnline