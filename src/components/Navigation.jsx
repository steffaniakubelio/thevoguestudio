import { useState, useEffect } from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <DesktopNavigation 
        navItems={navItems}
        activeSection={activeSection}
        scrolled={scrolled}
      />
      <MobileNavigation 
        navItems={navItems}
        activeSection={activeSection}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrolled={scrolled}
      />
    </>
  )
}

export default Navigation
