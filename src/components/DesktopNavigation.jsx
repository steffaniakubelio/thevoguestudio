import { motion, useScroll, useTransform } from 'framer-motion'
import { HiChevronRight } from 'react-icons/hi'
import { useState } from 'react'

const DesktopNavigation = ({ navItems, activeSection, scrolled }) => {
  const { scrollYProgress } = useScroll()
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      {/* ULTRA-PREMIUM FLOATING NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ opacity: navOpacity }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`hidden lg:block fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-auto max-w-7xl ${
          scrolled ? 'top-4' : 'top-8'
        }`}
      >
        <div className="relative">
          {/* Main Navigation Container */}
          <div className={`relative flex items-center gap-3 pl-7 pr-3 py-1 rounded-full backdrop-blur-2xl border-2 transition-all duration-500 ${
            scrolled
              ? 'bg-gradient-to-r from-[#2A1F15]/98 via-[#3D2E1F]/98 to-[#2A1F15]/98 border-[#C4A57B]/50 shadow-2xl shadow-[#C4A57B]/25'
              : 'bg-gradient-to-r from-[#2A1F15]/95 via-[#3D2E1F]/95 to-[#2A1F15]/95 border-[#C4A57B]/40 shadow-xl shadow-[#C4A57B]/20'
          }`}>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1)
                const isHovered = hoveredItem === item.name
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 * index, 
                      duration: 0.5,
                      ease: [0.6, 0.05, 0.01, 0.9]
                    }}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      className={`relative px-2 py-2 text-base font-semibold tracking-wide transition-all duration-300 block ${
                        isActive
                          ? 'text-[#D4A574]'
                          : 'text-[#E8DCC8]/95 hover:text-[#F5F1E8]'
                      }`}
                    >
                      <span className="relative z-10 whitespace-nowrap">
                        {item.name}
                      </span>

                      {/* Hover Background Glow */}
                      {isHovered && !isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#C4A57B]/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}

                      {/* Underline on Hover */}
                      {(isHovered && !isActive) && (
                        <motion.div
                          layoutId="hoverUnderline"
                          className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent blur-sm" />
                        </motion.div>
                      )}

                      {/* Active Underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#8B6F47] via-[#D4A574] to-[#8B6F47] rounded-full" />
                          
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#C4A57B] via-[#F5E6D3] to-[#C4A57B] rounded-full blur-md"
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                          />

                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5E6D3] to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
                          />
                        </motion.div>
                      )}
                    </a>
                  </motion.div>
                )
              })}
            </div>

            {/* Elegant Divider */}
            <div className="relative h-10 w-px mx-5">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C4A57B]/60 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/50 via-[#C4A57B] to-[#D4A574]/50"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Premium CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-[#C4A57B] via-[#D4A574] to-[#C4A57B] rounded-full text-[#1A1410] font-bold text-base tracking-wide shadow-xl shadow-[#C4A57B]/40 transition-all duration-300 overflow-hidden"
              style={{ backgroundSize: '200% auto' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D4A574] via-[#F5E6D3] to-[#D4A574]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              <span className="relative z-10 whitespace-nowrap">Get Started</span>
              
              <motion.span
                className="relative z-10"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <HiChevronRight className="text-xl" />
              </motion.span>

              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#F5E6D3] to-[#D4A574] rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10" />
            </motion.a>
          </div>

          {/* Multi-Layer Glow Effects */}
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8B6F47]/30 via-[#C4A57B]/40 to-[#8B6F47]/30 blur-xl -z-10"
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#C4A57B]/20 via-[#D4A574]/30 to-[#C4A57B]/20 blur-2xl -z-20"
            animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gradient-to-b from-[#C4A57B]/30 to-transparent rounded-full blur-2xl -z-30" />
        </div>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 right-0 h-1 z-40 origin-left"
        style={{ 
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #8B6F47 0%, #C4A57B 40%, #D4A574 60%, #C4A57B 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#D4A574] via-[#F5E6D3] to-[#D4A574] blur-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
        />
      </motion.div>
    </>
  )
}

export default DesktopNavigation
