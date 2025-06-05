import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Activity, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const SportsTherapy = () => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const treatments = [
    "LLLT (Low level laser therapy)",
    "MLD (Manual Lymphatic Drainage) massage",
    "Pregnancy related muscular tension release",
    "Dry needling",
    "Medical acupuncture",
    "Taping for injuries",
    "Sports massage therapy",
    "Exercise rehabilitation"
  ]

  const conditions = [
    {
      icon: Shield,
      title: "Chronic Back Pain",
      desc: "Long-term relief through targeted therapy"
    },
    {
      icon: Activity,
      title: "Tendonitis",
      desc: "Reduce inflammation and restore function"
    },
    {
      icon: Zap,
      title: "Sports Injuries",
      desc: "Fast recovery and injury prevention"
    },
    {
      icon: Heart,
      title: "Post-Surgery Recovery",
      desc: "Safe rehabilitation and strength building"
    }
  ]

  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/client-content/ Sports Therapy Sessions .webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'centre',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pilates-dark/20 to-pilates-dark/60 z-10" />
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display text-white mb-4">
              Sports Therapy
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional treatment to restore movement and manage pain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-pilates-dark mb-6">
              Expert Sports Therapy Treatment
            </h2>
            <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
              Many people live their lives with chronic muscular pain and sadly often give 
              up on finding a solution to treat it. Erin is our qualified Sports Therapist 
              with years of experience helping many clients to manage pain and recover to 
              full movement.
            </p>
          </motion.div>

          {/* About Erin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/client-content/erin 2.webp"
                alt="Erin - Sports Therapist"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-display text-pilates-dark">
                  Erin Pitts
                </h3>
                <p className="text-pilates-brown font-medium">
                  Qualified Sports Therapist & Pilates Instructor
                </p>
              </div>
            </div>
            <p className="text-lg text-pilates-brown leading-relaxed">
              Erin is our qualified and insured Sports Therapist, she can offer a range 
              of well practiced manual therapy techniques to help treat many soft tissue 
              injuries and other minor ailments. With years of experience, she combines 
              her sports therapy expertise with Pilates knowledge for comprehensive treatment.
            </p>
          </motion.div>

          {/* Treatment Options */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display text-pilates-dark mb-6">
                Comprehensive Treatment Options
              </h3>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                The sessions we offer help you recover and rehabilitate. From chronic back 
                pain or Tendonitis to Lymphatic drainage, we can offer a treatment plan to 
                get you moving pain free and back to fitness.
              </p>
              
              <div className="bg-pilates-sand rounded-xl p-6">
                <h4 className="text-xl font-display text-pilates-dark mb-4">
                  Treatments Available:
                </h4>
                <ul className="space-y-2">
                  {treatments.map((treatment) => (
                    <li key={treatment} className="flex items-start gap-2 text-pilates-brown">
                      <CheckCircle className="w-4 h-4 text-pilates-rose mt-1 flex-shrink-0" />
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-display text-pilates-dark mb-6">
                Conditions We Treat
              </h3>
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h4 className="font-semibold text-pilates-dark mb-2 flex items-center gap-3">
                    <condition.icon className="w-6 h-6 text-pilates-rose" />
                    {condition.title}
                  </h4>
                  <p className="text-pilates-brown">{condition.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/client-content/ Sports Therapy Sessions .webp"
              alt="Sports therapy treatment"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              src="/client-content/ Sports Therapy Sessions 2.webp"
              alt="Therapy techniques"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              src="/client-content/ Sports Therapy Sessions 3.webp"
              alt="Recovery treatment"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Treatment Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pilates-rose/10 to-pilates-beige/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-8 text-center">
              Your Treatment Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display text-pilates-rose">1</span>
                </div>
                <h4 className="font-semibold text-pilates-dark mb-2">Initial Consultation</h4>
                <p className="text-pilates-brown">Comprehensive assessment of your condition</p>
              </div>
              <div>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display text-pilates-rose">2</span>
                </div>
                <h4 className="font-semibold text-pilates-dark mb-2">Treatment Plan</h4>
                <p className="text-pilates-brown">Personalised approach for your recovery</p>
              </div>
              <div>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display text-pilates-rose">3</span>
                </div>
                <h4 className="font-semibold text-pilates-dark mb-2">Recovery & Maintenance</h4>
                <p className="text-pilates-brown">Ongoing support for lasting results</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-6">
              Ready to Move Pain-Free?
            </h3>
            <p className="text-lg text-pilates-brown mb-8 max-w-2xl mx-auto">
              Please contact us if you'd like to know more and book an initial consultation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium text-lg"
              onClick={() => {
                addToCart('5') // Sports Therapy Session product ID
                navigate('/shop')
              }}
            >
              Book Therapy Session
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SportsTherapy