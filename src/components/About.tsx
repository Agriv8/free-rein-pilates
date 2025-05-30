import { motion } from 'framer-motion'
import { Award, Heart, Target } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-pilates-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-pilates-dark mb-6">
              About Us
            </h2>
            <p className="text-lg text-pilates-brown mb-6 leading-relaxed">
              Free Rein Pilates offers a range of services with the aim to enable all to access Pilates. 
              From community Matwork courses, Personal studio Reformer sessions, Tailored equestrian 
              Pilates clinics to luxury day Retreats, We are confident that we can help you kick start 
              or develop further your own Pilates practice.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-pilates-rose/10 rounded-full mt-1">
                  <Target className="w-5 h-5 text-pilates-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-pilates-dark mb-1">Personalised Approach</h4>
                  <p className="text-sm text-pilates-brown">Tailored programmes to meet your individual goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-pilates-rose/10 rounded-full mt-1">
                  <Heart className="w-5 h-5 text-pilates-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-pilates-dark mb-1">Holistic Wellness</h4>
                  <p className="text-sm text-pilates-brown">Focus on both physical and mental wellbeing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-pilates-rose/10 rounded-full mt-1">
                  <Award className="w-5 h-5 text-pilates-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-pilates-dark mb-1">Expert Guidance</h4>
                  <p className="text-sm text-pilates-brown">Nearly a decade of teaching experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Erin */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/client-content/erin 2.webp"
                  alt="Erin Pitts"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-display text-pilates-dark">Meet Erin</h3>
                  <p className="text-pilates-brown">Founder & Lead Instructor</p>
                </div>
              </div>
              
              <p className="text-pilates-brown leading-relaxed mb-4">
                I'm Erin, I am a certified Pilates instructor and Sports therapist, I have been 
                teaching and treating muscular discomfort for nearly a decade. Over the years I 
                have gained a wealth of knowledge and understanding of the human body and how 
                beneficial regular Pilates practice can be for all.
              </p>
              
              <p className="text-pilates-brown leading-relaxed">
                I hope for years to come, that I will continue my own professional development 
                and share my expertise with many.
              </p>

              <div className="mt-6 pt-6 border-t border-pilates-beige">
                <blockquote className="text-pilates-rose italic text-lg font-display">
                  "Change happens through movement and movement heals"
                </blockquote>
                <p className="text-sm text-pilates-brown mt-2">— Joseph Pilates</p>
              </div>
            </div>
            
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-pilates-rose/10 rounded-2xl" />
          </motion.div>
        </div>

        {/* What is Pilates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-display text-pilates-dark mb-6">What is Pilates?</h3>
          <p className="text-lg text-pilates-brown max-w-4xl mx-auto leading-relaxed">
            Joseph Pilates (founder) choreographed a low impact body-conditioning exercise method 
            that works by targeting and isolating the deep postural (core) muscles. With emphasis 
            on slow controlled breathing and movement to rebalance the body and improve posture 
            which promotes subconscious correct alignment. Pilates achieves the perfect balance 
            between strength and flexibility and is a great way to help relieve unwanted stress 
            and tension.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About