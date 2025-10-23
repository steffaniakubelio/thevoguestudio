import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      details: 'hello@voguestudio.com',
      link: 'mailto:hello@voguestudio.com'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: HiLocationMarker,
      title: 'Office',
      details: '123 Design Street, New York, NY 10001',
      link: 'https://maps.google.com'
    }
  ]

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F0E9DC] overflow-hidden"
      ref={ref}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Background Orb - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(196,165,123,0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
            willChange: 'transform, opacity',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Enhanced SVG Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[350px] lg:h-[450px] rounded-2xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-[#C4A57B]/20 shadow-xl overflow-hidden flex items-center justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradBase" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C4A57B" />
                  <stop offset="100%" stopColor="#D4A574" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[80, 100, 120].map((r, i) => (
                <motion.circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="url(#gradBase)"
                  strokeWidth="1.5"
                  filter="url(#glow)"
                  opacity="0.6"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ transformOrigin: '200px 200px' }}
                />
              ))}

              <motion.circle
                cx="200"
                cy="200"
                r="20"
                fill="url(#gradBase)"
                filter="url(#glow)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const radius = 100;
                return (
                  <motion.circle
                    key={i}
                    cx={200 + Math.cos(angle) * radius}
                    cy={200 + Math.sin(angle) * radius}
                    r="5"
                    fill="url(#gradBase)"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  />
                )
              })}
            </svg>

            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.9, 1.05, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#C4A57B]/20 via-transparent to-[#D4A574]/20 rounded-2xl blur-3xl"
            />
          </motion.div>

          {/* Contact Form - Smooth Transition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-[#C4A57B]/20 shadow-md mb-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4A57B] animate-pulse" />
                <span className="text-[#8B6F47] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-display mb-2">
                <span className="text-[#3D2E1F]">Let's Create </span>
                <span className="bg-gradient-to-r from-[#8B6F47] via-[#C4A57B] to-[#D4A574] bg-clip-text text-transparent">
                  Something Beautiful
                </span>
              </h2>

              <p className="text-[#5D4E3C] text-xs sm:text-sm">
                Ready to transform your space? Let's discuss your vision.
              </p>
            </div>

            <form className="space-y-3 mb-6">
              {["Your Name", "Your Email"].map((placeholder, idx) => (
                <motion.input
                  key={idx}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type={placeholder === "Your Email" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 shadow-md"
                  style={{ willChange: 'transform' }}
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                placeholder="Tell us about your project..."
                rows="3"
                className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 resize-none shadow-md"
                style={{ willChange: 'transform' }}
              />

              <motion.button
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#C4A57B] to-[#D4A574] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-xl transition-transform duration-300 flex items-center justify-center gap-2 group"
                style={{ willChange: 'transform' }}
              >
                <span>Send Message</span>
                <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>

            {/* Contact Info Lines */}
            <div className="space-y-3 pt-4 border-t border-[#C4A57B]/10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 group cursor-pointer"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C4A57B]/10 to-[#D4A574]/10 border border-[#C4A57B]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-[#C4A57B] text-base" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#8B6F47] font-semibold uppercase tracking-wider">
                      {info.title}
                    </p>
                    <p className="text-xs text-[#3D2E1F] font-medium group-hover:text-[#8B6F47] transition-colors duration-300 truncate">
                      {info.details}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
