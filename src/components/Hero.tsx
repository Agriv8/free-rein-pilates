import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { usePageContent } from '../hooks/useContent'

const Hero = () => {
  const { content } = usePageContent('home')
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${content?.hero?.image || '/client-content/home page banner.webp'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'centre',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pilates-dark/20 to-pilates-dark/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="/client-content/Main Logo-White-RGB.webp" 
            alt="Free Rein Pilates" 
            className="h-32 sm:h-40 md:h-48 lg:h-56 mx-auto mb-6"
          />
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
            {content?.hero?.subtitle || 'Enabling all to access Pilates through community courses, personal studio sessions, equestrian clinics, and luxury retreats'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-pilates-dark rounded-full font-medium hover:bg-pilates-sand transition-all shadow-lg"
            >
              {content?.hero?.cta || 'Explore Our Services'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-pilates-dark transition-all"
            >
              Book Your First Class
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator - moved outside content div to prevent overlap */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="text-white/70 w-8 h-8 hover:text-white transition-colors" />
      </motion.div>

      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pilates-cream to-transparent z-15" />
    </section>
  )
}

export default Hero