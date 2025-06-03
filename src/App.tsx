import { AuthProvider } from './contexts/AuthContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Retreats from './components/Retreats'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-pilates-cream">
        <Navigation />
        <Hero />
        <About />
        <Retreats />
        <Testimonials />
        <InstagramFeed />
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App