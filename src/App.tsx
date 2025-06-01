import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Retreats from './components/Retreats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      <Hero />
      <About />
      <Retreats />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App