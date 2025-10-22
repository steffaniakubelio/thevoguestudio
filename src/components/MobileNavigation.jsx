import { motion, AnimatePresence } from 'framer-motion'
import { HiHome, HiUser, HiBriefcase, HiPhotograph, HiChatAlt2, HiX } from 'react-icons/hi'
import { useState } from 'react'

const MobileNavigation = ({ navItems, activeSection }) => {
  const [expandedMenu, setExpandedMenu] = useState(false)

  const iconMap = {
    'Home': HiHome,
    'About': HiUser,
    'Services': HiBriefcase,
    'Portfolio': HiPhotograph,
    'Contact': HiChatAlt2
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, type: 'spring', stiffness: 200 }}
      className="lg:hidden fixed bottom-6 right-6 z-[100]"
    >
      {/* Expandable Menu */}
      <AnimatePresence>
        {expandedMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
          >
            {navItems.map((item, index) => {
              const Icon = iconMap[item.name] || HiHome
              const isActive = activeSection === item.href.slice(1)
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setExpandedMenu(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex items-center gap-3 pr-5 pl-4 py-3 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 shadow-xl ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C4A57B]/90 to-[#D4A574]/90 border-[#8B6F47] text-[#3D2E1F] shadow-[#C4A57B]/40'
                      : 'bg-[#3D2E1F]/85 border-[#8B6F47]/50 text-[#F5F1E8] hover:border-[#C4A57B] hover:bg-[#3D2E1F]/95'
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
                    isActive ? 'bg-[#3D2E1F]/20' : 'bg-[#C4A57B]/20 group-hover:bg-[#C4A57B]/30'
                  }`}>
                    <Icon className="text-xl" />
                  </div>
                  
                  <span className="font-semibold text-sm whitespace-nowrap">{item.name}</span>

                  {isActive && (
                    <>
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 w-1 h-8 bg-[#3D2E1F] rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-[#D4A574] blur-xl -z-10"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </>
                  )}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock Button */}
      <motion.button
        onClick={() => setExpandedMenu(!expandedMenu)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`relative w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 shadow-2xl ${
          expandedMenu
            ? 'bg-gradient-to-br from-[#C4A57B] to-[#D4A574] border-[#8B6F47] rotate-45'
            : 'bg-[#3D2E1F]/90 border-[#C4A57B]/60 hover:border-[#C4A57B]'
        }`}
      >
        <AnimatePresence mode="wait">
          {expandedMenu ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiX className="text-[#3D2E1F] text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1.5"
            >
              <motion.span className="w-6 h-0.5 bg-[#C4A57B] rounded-full" animate={{ width: expandedMenu ? 0 : 24 }} />
              <motion.span className="w-6 h-0.5 bg-[#C4A57B] rounded-full" />
              <motion.span className="w-4 h-0.5 bg-[#C4A57B] rounded-full self-end" animate={{ width: expandedMenu ? 0 : 16 }} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 rounded-2xl bg-[#C4A57B] blur-xl -z-10"
          animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.button>

      {expandedMenu && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 border-2 border-[#C4A57B] rounded-2xl -z-10"
        />
      )}
    </motion.div>
  )
}

export default MobileNavigation
