import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Hannah',
      source: 'Facebook',
      rating: 5,
      text: "I've been attending Erin's mat courses for nearly a year. I really enjoy her classes, she's very informative and unlike other classes I've been to, I understand fully the muscles used and benefits of the exercises. Her tailored approach whilst in a group setting is much appreciated.",
      highlight: true
    },
    {
      name: 'Sarah M.',
      source: 'Google Reviews',
      rating: 5,
      text: "The studio sessions are absolutely wonderful. Erin creates such a calming, supportive environment and really takes time to understand your individual needs. I've seen amazing improvements in my posture and core strength."
    },
    {
      name: 'Emma K.',
      source: 'Client',
      rating: 5,
      text: "As an equestrian, the specialised Pilates sessions have transformed my riding. My seat is more stable, and my horse responds so much better to my aids. Highly recommend!"
    }
  ]

  const galleryImages = [
    '/client-content/studio.webp',
    '/client-content/Mat Pilates Courses2.webp',
    '/client-content/1-2-1- Studio Pilates 2.webp',
    '/client-content/Equestrian Pilates Sessions 2.webp',
    '/client-content/1-2-1- Studio Pilates 3.webp',
    '/client-content/ Sports Therapy Sessions 2.webp',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-pilates-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-pilates-brown">
            Real experiences from our wonderful community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                testimonial.highlight ? 'md:scale-105 md:z-10' : ''
              }`}
            >
              <div className={`h-full p-8 rounded-2xl shadow-lg ${
                testimonial.highlight
                  ? 'bg-gradient-to-br from-pilates-rose/10 to-pilates-beige/10 border-2 border-pilates-rose/20'
                  : 'bg-pilates-sand'
              }`}>
                <Quote className="w-8 h-8 text-pilates-rose/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pilates-rose text-pilates-rose" />
                  ))}
                </div>
                
                <p className="text-pilates-brown mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto">
                  <p className="font-semibold text-pilates-dark">{testimonial.name}</p>
                  <p className="text-sm text-pilates-brown">{testimonial.source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display text-pilates-dark text-center mb-8">
            Studio Gallery
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pilates-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials