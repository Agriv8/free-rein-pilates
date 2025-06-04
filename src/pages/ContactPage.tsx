import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_DATABASE_URL || import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'
const supabase = supabaseUrl === 'https://placeholder.supabase.co' ? null : createClient(supabaseUrl, supabaseAnonKey)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (supabase) {
        const { error } = await supabase
          .from('contact_submissions')
          .insert([
            {
              ...formData,
              source: 'free-rein-pilates',
              created_at: new Date().toISOString()
            }
          ])

        if (error) throw error
      } else {
        // For now, just log to console when Supabase is not configured
        console.log('Contact form submission:', formData)
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              Get in Touch
            </h1>
            <p className="text-xl text-pilates-brown">
              Ready to start your Pilates journey? Contact us today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-display text-pilates-dark mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pilates-rose/10 rounded-full">
                      <Phone className="w-5 h-5 text-pilates-rose" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pilates-dark mb-1">Phone</h4>
                      <p className="text-pilates-brown">0333 050 4262</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pilates-rose/10 rounded-full">
                      <Mail className="w-5 h-5 text-pilates-rose" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pilates-dark mb-1">Email</h4>
                      <p className="text-pilates-brown">info@freereinpilates.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pilates-rose/10 rounded-full">
                      <MapPin className="w-5 h-5 text-pilates-rose" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pilates-dark mb-1">Location</h4>
                      <p className="text-pilates-brown">
                        Unit 2C, Old Hall Farmyard<br />
                        Priory Lane, Little Wymondley<br />
                        Hitchin, Herts<br />
                        SG4 7BL
                      </p>
                      <p className="text-sm text-pilates-brown mt-1">
                        Studio sessions by appointment only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-pilates-beige/30">
                  <h4 className="font-semibold text-pilates-dark mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-3 bg-pilates-beige/20 rounded-full hover:bg-pilates-rose/20 transition-colors group"
                    >
                      <Instagram className="w-5 h-5 text-pilates-brown group-hover:text-pilates-rose transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-pilates-beige/20 rounded-full hover:bg-pilates-rose/20 transition-colors group"
                    >
                      <Facebook className="w-5 h-5 text-pilates-brown group-hover:text-pilates-rose transition-colors" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-pilates-beige/30">
                  <h4 className="font-semibold text-pilates-dark mb-4">Important Forms</h4>
                  <div className="space-y-2">
                    <a 
                      href="/PDFs/Free Rein Pilates – Client Intake Form.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-pilates-brown hover:text-pilates-rose transition-colors"
                    >
                      → Client Intake Form
                    </a>
                    <a 
                      href="/PDFs/Free Rein Pilates – Informed Consent Form.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-pilates-brown hover:text-pilates-rose transition-colors"
                    >
                      → Informed Consent Form
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-pilates-sand rounded-xl">
                  <p className="text-sm text-pilates-brown text-center">
                    <strong>Erin Pitts</strong><br />
                    Certified Pilates Instructor & Sports Therapist
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-display text-pilates-dark mb-6">
                  Send us a Message
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pilates-dark mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pilates-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pilates-rose/50 focus:border-pilates-rose transition-colors"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-pilates-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-pilates-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pilates-rose/50 focus:border-pilates-rose transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-pilates-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-pilates-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pilates-rose/50 focus:border-pilates-rose transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-pilates-dark mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-pilates-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pilates-rose/50 focus:border-pilates-rose transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="mat-pilates">Mat Pilates Courses</option>
                      <option value="studio-pilates">1-2-1 Studio Pilates</option>
                      <option value="equestrian">Equestrian Pilates</option>
                      <option value="retreats">Day Retreats</option>
                      <option value="sports-therapy">Sports Therapy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pilates-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-pilates-beige/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pilates-rose/50 focus:border-pilates-rose transition-colors resize-none"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
                  >
                    Sorry, there was an error. Please try again or contact us directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Map/Directions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-6">
              Visit Our Studio
            </h3>
            <p className="text-lg text-pilates-brown mb-8 max-w-3xl mx-auto">
              Our boutique home studio in Shefford offers a peaceful, private environment 
              for your personalised Pilates journey. Studio sessions are by appointment only.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-left">
                <h4 className="font-semibold text-pilates-dark mb-2">Studio Address</h4>
                <p className="text-pilates-brown">
                  Unit 2C, Old Hall Farmyard<br />
                  Priory Lane, Little Wymondley<br />
                  Hitchin, Herts<br />
                  SG4 7BL
                </p>
                <p className="text-sm text-pilates-brown mt-2">
                  * Full address provided upon booking
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-pilates-dark mb-2">Mat Classes Location</h4>
                <p className="text-pilates-brown">
                  Community Centre<br />
                  Hitchin<br />
                  Hertfordshire
                </p>
                <p className="text-sm text-pilates-brown mt-2">
                  * Exact venue details sent with booking confirmation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage