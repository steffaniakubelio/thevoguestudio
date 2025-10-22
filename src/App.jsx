import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const { scrollYProgress } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F0E9DC] text-[#3D2E1F] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4A57B] via-[#D4A574] to-[#C4A57B] origin-left z-50 shadow-lg"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </motion.main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#3D2E1F] to-[#2A2117] py-8 text-center border-t border-[#C4A57B]/30">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#C4A57B] text-sm font-medium tracking-wider">
            © 2025 Vogue Studio. All Rights Reserved.
          </p>
          <p className="text-[#8B6F47] text-xs mt-2">
            Crafting Exceptional Spaces
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
