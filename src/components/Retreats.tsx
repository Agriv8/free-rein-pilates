import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Gift } from 'lucide-react'

const Retreats = () => {
  const schedule = [
    { time: '9:00am', title: 'Arrival', desc: 'Tea, coffee & goodie bag' },
    { time: '9:15am', title: 'Core Restore', desc: 'Classical Mat Pilates workshop' },
    { time: '10:15am', title: 'Refreshment Break', desc: 'Relax and socialise' },
    { time: '10:35am', title: 'Small Equipment', desc: 'Benefits of props in practice' },
    { time: '11:40am', title: 'The Posterior Chain', desc: 'Flexibility and free movement' },
    { time: '1:00pm', title: 'Day Pass', desc: 'Explore Wrest Park grounds' },
  ]

  return (
    <section id="retreats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pilates-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-pilates-dark mb-4">
            Day Retreats
          </h2>
          <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
            Self care is often overlooked in our busy daily lives. Allow yourself a few hours 
            to move, breathe, relax, and unwind with great mental and physical benefit.
          </p>
        </motion.div>

        {/* Wrest Park Retreat */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6">
              <img
                src="/client-content/Wrest Park Day Retreats.webp"
                alt="Wrest Park"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-pilates-dark font-semibold">£115 per person</p>
              </div>
            </div>
            
            <h3 className="text-3xl font-display text-pilates-dark mb-4">
              Wrest Park Day Retreats
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-pilates-brown">
                <MapPin className="w-5 h-5 text-pilates-rose" />
                <span>Wrest Park Orangery, Silsoe, Bedfordshire</span>
              </div>
              <div className="flex items-center gap-3 text-pilates-brown">
                <Clock className="w-5 h-5 text-pilates-rose" />
                <span>4 hours of luxury retreat experience</span>
              </div>
              <div className="flex items-center gap-3 text-pilates-brown">
                <Gift className="w-5 h-5 text-pilates-rose" />
                <span>Includes goodie bag & day park ticket</span>
              </div>
            </div>
            
            <p className="text-pilates-brown leading-relaxed mb-6">
              Immerse yourself within the beautiful setting of Wrest Park's Orangery. 
              With its stunning gardens and architecture, often featured in Bridgerton 
              as 'Aubrey Hall', it's a place of true elegance and grandeur.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium"
            >
              Book Your Retreat
            </motion.button>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h4 className="text-2xl font-display text-pilates-dark mb-6">
              Retreat Itinerary
            </h4>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 pb-4 border-b border-pilates-beige/30 last:border-0"
                >
                  <div className="flex-shrink-0">
                    <p className="text-pilates-rose font-semibold">{item.time}</p>
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-semibold text-pilates-dark mb-1">{item.title}</h5>
                    <p className="text-sm text-pilates-brown">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pilates-sand rounded-xl">
              <p className="text-sm text-pilates-brown text-center">
                Your day of relaxation doesn't need to end here - explore the woodlands, 
                read a book, or enjoy lunch at the onsite café
              </p>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon - Center Parcs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pilates-rose/10 to-pilates-beige/10 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-pilates-rose" />
            <h3 className="text-2xl font-display text-pilates-dark">
              Center Parcs Woburn Day Retreats
            </h3>
          </div>
          <p className="text-pilates-brown text-lg font-medium">Coming Soon!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Retreats