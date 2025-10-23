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
      {/* Background Orb */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
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
          {/* Animated Mail Envelope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[350px] lg:h-[450px] rounded-2xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-[#C4A57B]/20 shadow-xl overflow-hidden flex items-center justify-center"
            style={{ perspective: '800px' }}
          >
            <div className="mail-container relative w-[220px] h-[160px]">
              {/* Envelope back */}
              <div className="envelope-back absolute inset-0 rounded-lg bg-gradient-to-br from-[#C4A57B] to-[#D4A574] shadow-lg" />

              {/* Envelope front */}
              <div className="envelope-front absolute bottom-0 left-0 w-full h-1/2 rounded-b-lg bg-gradient-to-br from-[#D4A574] to-[#C4A57B] shadow-inner z-10" />
              
              {/* Envelope flap */}
              <motion.div
                className="envelope-flap absolute top-0 left-0 w-full h-1/2 rounded-t-lg bg-gradient-to-br from-[#8B6F47] to-[#C4A57B] shadow-md z-20 origin-bottom"
                animate={{
                  rotateX: [0, -180, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 1
                }}
              />

              {/* Letter */}
              <motion.div
                className="letter absolute left-1/2 top-1/2 w-[85%] h-[75%] bg-[#FAF7F0] rounded-md shadow-md p-4 z-15 -translate-x-1/2 -translate-y-1/2 ring-1 ring-[#D4A574]"
                animate={{
                  y: [0, -60, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 1,
                  delay: 0.5
                }}
              >
                <div className="letter-text flex flex-col gap-2">
                  <div className="line h-3 rounded bg-gradient-to-r from-[#C4A57B] to-[#D4A574]" />
                  <div className="line h-3 rounded bg-gradient-to-r from-[#C4A57B] to-[#D4A574]" style={{ width: '60%' }} />
                  <div className="line h-3 rounded bg-gradient-to-r from-[#C4A57B] to-[#D4A574]" />
                  <div className="line h-3 rounded bg-gradient-to-r from-[#C4A57B] to-[#D4A574]" style={{ width: '60%' }} />
                  <div className="line h-3 rounded bg-gradient-to-r from-[#C4A57B] to-[#D4A574]" />
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-[#C4A57B] to-[#D4A574] shadow-md"
                  style={{
                    width: '8px',
                    height: '8px',
                    left: `${15 + i * 12}%`,
                    top: `${30 + (i % 3) * 15}%`,
                    boxShadow: '0 0 10px rgba(196, 165, 123, 0.5)'
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>

            {/* Glow behind envelope */}
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
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C4A57B]/20 via-transparent to-[#D4A574]/20 blur-3xl -z-10"
            />
          </motion.div>

          {/* Contact form */}
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
              <div className="grid sm:grid-cols-2 gap-3">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 shadow-md"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 shadow-md"
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="Subject"
                className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 shadow-md"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                placeholder="Tell us about your project..."
                rows="3"
                className="w-full bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 rounded-xl px-4 py-2.5 text-sm text-[#3D2E1F] placeholder-[#5D4E3C]/50 focus:border-[#C4A57B] focus:ring-2 focus:ring-[#C4A57B]/20 focus:outline-none transition-all duration-200 resize-none shadow-md"
              />

              <motion.button
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#C4A57B] to-[#D4A574] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-[#C4A57B]/10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 group cursor-pointer"
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

      {/* CSS for envelope */}
      <style jsx>{`
        .mail-container {
          perspective: 800px;
        }
        .envelope-back,
        .envelope-front,
        .envelope-flap,
        .letter {
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        .envelope-flap {
          transform-style: preserve-3d;
          box-shadow: 0 4px 12px rgba(139, 111, 71, 0.4);
        }
        .letter-text .line {
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  )
}

export default Contact
