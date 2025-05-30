import React from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Horse, Sparkles, Heart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Mat Pilates Courses',
      description: 'Community classes in Shefford for all ability levels. Improve flexibility, posture, and strength in a welcoming environment.',
      image: '/client-content/Mat Pilates Courses.webp',
      link: '#mat-pilates'
    },
    {
      icon: Calendar,
      title: 'Day Retreats',
      description: 'Luxury retreats at beautiful venues. Self-care, movement, and relaxation in stunning settings.',
      image: '/client-content/Wrest Park Day Retreats.webp',
      link: '#retreats'
    },
    {
      icon: Sparkles,
      title: '1-2-1 Studio Pilates',
      description: 'Exclusive boutique home studio sessions. Personalised reformer practice tailored to your goals.',
      image: '/client-content/1-2-1- Studio Pilates.webp',
      link: '#studio'
    },
    {
      icon: Horse,
      title: 'Equestrian Pilates',
      description: 'Specialised programme for riders. Improve your seat, balance, and communication with your horse.',
      image: '/client-content/Equestrian Pilates Sessions .webp',
      link: '#equestrian'
    },
    {
      icon: Heart,
      title: 'Sports Therapy',
      description: 'Professional treatment for muscular discomfort. Restore movement and manage pain effectively.',
      image: '/client-content/ Sports Therapy Sessions .webp',
      link: '#therapy'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-pilates-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
            From community mat courses to luxury retreats, we offer a range of services 
            to help you achieve your Pilates goals
          </p>
        </motion.div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`flex items-center gap-3 mb-4 ${
                  index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'
                }`}>
                  <div className="p-3 bg-pilates-rose/10 rounded-full">
                    <service.icon className="w-6 h-6 text-pilates-rose" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display text-pilates-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-pilates-brown mb-6 leading-relaxed">
                  {service.description}
                </p>
                <motion.a
                  href={service.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-6 py-3 bg-pilates-beige text-pilates-dark rounded-full hover:bg-pilates-rose hover:text-white transition-all font-medium ${
                    index % 2 !== 0 ? 'md:ml-auto' : ''
                  }`}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services