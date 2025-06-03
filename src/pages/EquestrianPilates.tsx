import { motion } from 'framer-motion'
import { Activity, Target, Heart, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EquestrianPilates = () => {
  const benefits = [
    "Deeper, more stable seat",
    "Improved balance and symmetry",
    "Better communication with your horse",
    "Increased flexibility and range of motion",
    "Stronger core for shock absorption",
    "Enhanced body awareness in the saddle"
  ]

  const focusAreas = [
    {
      icon: Target,
      title: "Neutral Spine & Pelvis",
      desc: "Achieve shock-absorbing posture for better riding"
    },
    {
      icon: Activity,
      title: "Core Stability",
      desc: "Strengthen deep muscles for improved seat security"
    },
    {
      icon: Heart,
      title: "Flexibility Training",
      desc: "Increase range of motion for fluid movement"
    },
    {
      icon: Users,
      title: "Rider Symmetry",
      desc: "Address imbalances affecting your horse's performance"
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
            backgroundImage: `url('/client-content/Equestrian Pilates Sessions .webp')`,
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
              Equestrian Pilates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Specialised programme to enhance your riding through targeted exercises
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
              Pilates for Horse & Rider Partnership
            </h2>
            <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
              Our Equestrian Pilates sessions have been carefully planned and developed 
              to create a deeper seat and partnership with horse and rider.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/client-content/Equestrian Pilates Sessions .webp"
              alt="Equestrian training"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              src="/client-content/Equestrian Pilates Sessions 2.webp"
              alt="Rider improvement"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              src="/client-content/Equestrian Pilates Sessions 3.webp"
              alt="Horse and rider"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* About Erin's Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-display text-pilates-dark mb-4">
              From One Equestrian to Another
            </h3>
            <p className="text-lg text-pilates-brown leading-relaxed">
              As a novice Equestrian and horse owner herself, Erin understands the physical 
              demands of riding and frustrations when your horse doesn't respond effectively 
              to your cues from the saddle. Often it is our own postural imbalances causing 
              confusion. Our Equestrian Pilates programme has been designed with Equestrian 
              movement in mind.
            </p>
          </motion.div>

          {/* How It Works */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display text-pilates-dark mb-6">
                Understanding Rider Imbalances
              </h3>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                Imbalances can develop over time, based on physiology, posture and lifestyle. 
                How you move or stand when not riding (for example, with rounded shoulders) 
                can directly affect how you function in the saddle.
              </p>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                Pilates exercises help to increase your body awareness and improve flexibility, 
                balance and strength in order for a rider to facilitate an optimal riding position.
              </p>
              
              <div className="bg-pilates-sand rounded-xl p-6">
                <h4 className="text-xl font-display text-pilates-dark mb-4">
                  Benefits for Your Riding:
                </h4>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-pilates-brown">
                      <Activity className="w-4 h-4 text-pilates-rose mt-1 flex-shrink-0" />
                      {benefit}
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
                Focus Areas
              </h3>
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h4 className="font-semibold text-pilates-dark mb-2 flex items-center gap-3">
                    <area.icon className="w-6 h-6 text-pilates-rose" />
                    {area.title}
                  </h4>
                  <p className="text-pilates-brown">{area.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Programme Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pilates-rose/10 to-pilates-beige/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-6 text-center">
              Your Equestrian Pilates Journey
            </h3>
            <p className="text-lg text-pilates-brown text-center mb-8 max-w-3xl mx-auto">
              Whether you wish to improve your range of motion, flexibility, posture or 
              general fitness, our Pilates sessions will help you to achieve your goals. 
              The sessions are planned to work on strengthening and stabilising core muscle 
              groups allowing you as a rider to achieve a neutral, shock absorbing spine 
              and pelvis.
            </p>
            <p className="text-lg text-pilates-brown text-center font-medium">
              This will develop a trusting riding relationship where your horse responds 
              to your commands and is confident in your leading ability.
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
              Let's Improve Your Riding Together
            </h3>
            <p className="text-lg text-pilates-brown mb-8 max-w-2xl mx-auto">
              Get in touch with me to let me know your needs and I can create an 
              individual training plan for you from there.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium text-lg"
              onClick={() => window.location.href = '/#contact'}
            >
              Let's Get Started!
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EquestrianPilates