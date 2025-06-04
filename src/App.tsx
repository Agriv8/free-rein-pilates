import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Retreats from './components/Retreats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-pilates-cream">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Retreats />
      <Testimonials />
      <Contact />
      <InstagramFeed />
      <Footer />
    </div>
  )
}

export default App