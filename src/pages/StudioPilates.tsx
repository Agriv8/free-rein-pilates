import { motion } from 'framer-motion'
import { Sparkles, Heart, Target, Activity } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const StudioPilates = () => {
  const benefits = [
    {
      title: "Stronger core and better posture",
      desc: "Strengthen deep abdominal and back muscles for pain-free movement"
    },
    {
      title: "Enhanced flexibility and mobility",
      desc: "Active stretching while strengthening for healthy joint movement"
    },
    {
      title: "Reduced pain and injury risk",
      desc: "Correct imbalances and support long-term recovery"
    },
    {
      title: "Personalised programmes",
      desc: "Tailored to your individual goals and fitness level"
    }
  ]

  const conditions = [
    "Back pain and postural issues",
    "Knee and hip injuries", 
    "Sports injuries",
    "Post-surgery recovery"
  ]

  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/client-content/1-2-1- Studio Pilates.webp')`,
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
              1-2-1 Studio Pilates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Exclusive boutique home studio for personalised reformer practice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Introduction */}
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
              Our Exclusive Home Studio
            </h2>
            <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
              Our Free Rein home studio is a luxurious and calming space to allow clients 
              the opportunity to escape reality for an hour of 'me time'. We offer private 
              reformer and small equipment sessions choreographed to support every client's 
              personal goals.
            </p>
          </motion.div>

          {/* Studio Images */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/client-content/studio.webp"
              alt="Studio space"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              src="/client-content/1-2-1- Studio Pilates 2.webp"
              alt="Reformer equipment"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              src="/client-content/1-2-1- Studio Pilates 3.webp"
              alt="Private session"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Why Reformer */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display text-pilates-dark mb-6">
                Why Reformer Pilates?
              </h3>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                Reformer Pilates is a dynamic form of exercise performed on a machine - 
                the 'reformer'. Unlike traditional mat-based Pilates, the reformer adds 
                resistance through a system of springs and pulleys, allowing for controlled, 
                low-impact movements that strengthen and lengthen muscles.
              </p>
              <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
                One of the main reasons the reformer has become such a popular piece of 
                equipment in our studio is its adaptability - It can be modified to suit 
                anyone, from beginners to advanced athletes, and is particularly effective 
                in rehabilitation and injury prevention.
              </p>
              
              <div className="bg-pilates-sand rounded-xl p-6">
                <h4 className="text-xl font-display text-pilates-dark mb-4">
                  Conditions We Help With:
                </h4>
                <ul className="space-y-2">
                  {conditions.map((condition) => (
                    <li key={condition} className="flex items-center gap-2 text-pilates-brown">
                      <Activity className="w-4 h-4 text-pilates-rose" />
                      {condition}
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
                Key Benefits
              </h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h4 className="font-semibold text-pilates-dark mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pilates-rose" />
                    {benefit.title}
                  </h4>
                  <p className="text-pilates-brown">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Studio Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-pilates-rose/10 to-pilates-beige/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-display text-pilates-dark mb-8 text-center">
              Your Private Studio Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Target className="w-12 h-12 text-pilates-rose mx-auto mb-4" />
                <h4 className="font-semibold text-pilates-dark mb-2">Personalised Sessions</h4>
                <p className="text-pilates-brown">Every session tailored to your specific goals</p>
              </div>
              <div>
                <Heart className="w-12 h-12 text-pilates-rose mx-auto mb-4" />
                <h4 className="font-semibold text-pilates-dark mb-2">Spa-Like Atmosphere</h4>
                <p className="text-pilates-brown">Luxurious, calming environment for total focus</p>
              </div>
              <div>
                <Sparkles className="w-12 h-12 text-pilates-rose mx-auto mb-4" />
                <h4 className="font-semibold text-pilates-dark mb-2">Expert Instruction</h4>
                <p className="text-pilates-brown">Qualified guidance with sports therapy expertise</p>
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
              Ready for Your Personal Transformation?
            </h3>
            <p className="text-lg text-pilates-brown mb-8 max-w-2xl mx-auto">
              Please get in touch if you think Reformer Pilates may be for you, 
              or even if you'd like to know a little more, we are always happy to chat!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all font-medium text-lg"
              onClick={() => window.location.href = '/#contact'}
            >
              Contact Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default StudioPilates