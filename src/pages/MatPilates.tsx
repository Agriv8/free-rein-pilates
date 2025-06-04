import { motion } from 'framer-motion'
import { Users, CheckCircle, Calendar, MapPin } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MatPilates = () => {
  const benefits = [
    "Improve flexibility and range of motion",
    "Strengthen core muscles",
    "Better posture and alignment", 
    "Reduce stress and tension",
    "Suitable for all fitness levels",
    "Modified movements for injuries"
  ]

  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/client-content/Mat Pilates Courses.webp')`,
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
              Mat Pilates Courses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Community classes for all ability levels in Hitchin, Hertfordshire
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Mat Pilates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display text-pilates-dark mb-6">
                Why Mat Pilates?
              </h2>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                Mat Pilates is a low impact form of exercise that focuses on strengthening 
                and toning muscles through sequences of mat-based movements 'flows'. The goal 
                of Mat Pilates is to improve posture and increase flexibility encouraging 
                correct posture, alignment of the spine and core strength.
              </p>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                Our Community Mat Pilates courses run throughout the year based in Hitchin, 
                Hertfordshire. All courses cater to a mixed range of abilities, whether you 
                have been practicing Pilates for many years or you are just starting out, 
                our courses are differentiated to allow progress for all.
              </p>
              <div className="flex items-center gap-3 text-pilates-brown">
                <MapPin className="w-5 h-5 text-pilates-rose" />
                <span className="font-medium">Location: Hitchin (SG4)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-display text-pilates-dark mb-6">
                Course Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-pilates-rose mt-0.5 flex-shrink-0" />
                    <span className="text-pilates-brown">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Course Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-pilates-sand rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-6 text-center">
              Course Information
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="w-8 h-8 text-pilates-rose mx-auto mb-3" />
                <h4 className="font-semibold text-pilates-dark mb-2">Mixed Abilities</h4>
                <p className="text-pilates-brown">Complete beginners welcome</p>
              </div>
              <div>
                <Calendar className="w-8 h-8 text-pilates-rose mx-auto mb-3" />
                <h4 className="font-semibold text-pilates-dark mb-2">6 Week Blocks</h4>
                <p className="text-pilates-brown">50-60 minute sessions</p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-pilates-rose mx-auto mb-3" />
                <h4 className="font-semibold text-pilates-dark mb-2">Home Practice</h4>
                <p className="text-pilates-brown">Recommendations included</p>
              </div>
            </div>
          </motion.div>

          {/* Instructor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <img
              src="/client-content/Mat Pilates Courses2.webp"
              alt="Mat Pilates Class"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl mb-8"
            />
            <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
              Erin has been teaching Mat Pilates for almost a decade including a mix of 
              classical, contemporary and rehabilitation Pilates methods. She has lots of 
              experience working with people of all ages and fitness levels. With her sports 
              therapy background she often has helped people recovering from injury through 
              modified movement in class.
            </p>
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
              Ready to Join Our Community?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium text-lg"
              onClick={() => window.location.href = '/#contact'}
            >
              Book Your Mat Spot Here!
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MatPilates