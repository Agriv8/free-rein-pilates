import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Smile, Leaf } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="fixed inset-0 z-0">
        <svg className="absolute top-10 left-10 w-96 h-96 opacity-20" viewBox="0 0 200 200">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.4,-0.2C88.8,15.9,85,31.8,77.2,45.1C69.4,58.4,57.6,69.1,44.1,75.6C30.6,82.1,15.3,84.4,-0.8,85.8C-16.9,87.2,-33.8,87.7,-48.1,82.4C-62.4,77.1,-74.1,65.9,-81.3,52.2C-88.5,38.5,-91.2,22.3,-90.7,6.4C-90.2,-9.5,-86.5,-25.1,-79.1,-38.9C-71.7,-52.7,-60.6,-64.7,-47.3,-72.2C-34,-79.7,-19.5,-82.7,-4.2,-76.1C11.1,-69.5,30.6,-83.6,44.7,-76.4Z" fill="url(#gradient1)"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute bottom-20 right-20 w-80 h-80 opacity-15" viewBox="0 0 200 200">
          <path d="M37.1,-63.8C48.5,-56.2,58.1,-45.7,64.3,-33.1C70.5,-20.5,73.3,-5.8,71.8,8.2C70.3,22.2,64.5,35.5,56.1,46.8C47.7,58.1,36.7,67.4,24.1,72.1C11.5,76.8,-2.7,76.9,-16.4,73.2C-30.1,69.5,-43.3,61.9,-53.8,51.4C-64.3,40.9,-72.1,27.5,-75.3,12.8C-78.5,-1.9,-77.1,-17.9,-71.4,-31.8C-65.7,-45.7,-55.7,-57.5,-43.5,-64.8C-31.3,-72.1,-17,-74.9,-2.8,-70.8C11.4,-66.7,25.7,-71.4,37.1,-63.8Z" fill="url(#gradient2)"/>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <div className="text-2xl font-bold text-rose-600">
                free-rein-pilates
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-slate-700 hover:text-rose-500 transition-colors">Features</a>
                <a href="#" className="text-slate-700 hover:text-rose-500 transition-colors">About</a>
                <a href="#" className="text-slate-700 hover:text-rose-500 transition-colors">Contact</a>
                <button className="px-6 py-2 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-full hover:from-rose-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                free-rein-pilates
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              A modern website for Free Rein Pilates studio showcasing classes, instructors, and wellness philosophy
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-rose-200 rounded-full text-lg font-semibold text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-all transform hover:scale-105 shadow-lg">
                Explore Now
                <Heart className="inline ml-2 w-5 h-5 group-hover:fill-rose-400 transition-colors" />
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-full text-lg font-semibold hover:from-rose-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg">
                Start Creating
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Made with Love', desc: 'Every detail crafted with care and attention', color: 'from-rose-400 to-pink-400' },
                { icon: Smile, title: 'Delightful UX', desc: 'Interactions that bring smiles and joy', color: 'from-orange-400 to-yellow-400' },
                { icon: Leaf, title: 'Natural Flow', desc: 'Organic design that feels intuitive', color: 'from-green-400 to-emerald-400' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/30 hover:bg-white/80 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App