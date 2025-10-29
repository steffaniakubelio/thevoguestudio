import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollYProgress } = useScroll()

  // Animate top offset from 32px to 16px (top-8 to top-4)
  const logoTop = useTransform(scrollYProgress, [0, 0.15], [32, 16]) // px values

  // Optionally you can animate opacity or scale as well
  const logoOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.9])
  
  const theVogueY = useTransform(scrollYProgress, [0, 0.6], [0, -400])
  const theVogueX = useTransform(scrollYProgress, [0, 0.6], [0, -150])
  const theVogueOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.7, 0])
  const theVogueScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  const studioY = useTransform(scrollYProgress, [0, 0.6], [0, 400])
  const studioX = useTransform(scrollYProgress, [0, 0.6], [0, 150])
  const studioOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.7, 0])
  const studioScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  const sloganOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section 
      id="home" 
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F0E9DC] h-[calc(100vh-4rem)] sm:h-screen md:h-screen"
      style={{
        minHeight: 'calc(100svh - 4rem)',
      }}
    >
      <motion.img
        src="/voguelogo.png"
        alt="Vogue Studio Logo"
        className="fixed hidden sm:block left-30 w-20 h-15 sm:w-24 sm:h-18 md:w-22 md:h-18 z-50 select-none"
        style={{
          top: logoTop,
          opacity: logoOpacity,
          userSelect: 'none',
          // For smooth GPU animation
          willChange: 'top, opacity',
        }}
      />
      <style jsx>{`
        @media (min-width: 640px) {
          #home {
            height: 100vh !important;
            min-height: 100svh !important;
            max-height: 100vh !important;
          }
        }
      `}</style>

       {/* <img
        src="/voguelogo.png"
        alt="Vogue Studio Logo"
        className="fixed top-4 left-15 w-20 h-15 sm:w-24 sm:h-20 md:w-25 md:h-20 z-50 select-none"
        style={{ userSelect: 'none' }}
      /> */}


      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      
        {/* RESPONSIVE Flower Vase */}
        <motion.div
          initial={{ opacity: 0, x: -150, y: 150 }}
          animate={{ opacity: 0.85, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute bottom-0 left-0 w-[200px] h-[280px] xs:w-[240px] xs:h-[320px] sm:w-[300px] sm:h-[400px] md:w-[320px] md:h-[420px] lg:w-[340px] lg:h-[440px] xl:w-[360px] xl:h-[460px] 2xl:w-[380px] 2xl:h-[480px]"
        >
          <svg viewBox="0 0 240 350" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="vaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B89968" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#A0826D" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#8B6F47" stopOpacity="0.9" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
            </defs>
            <ellipse cx="120" cy="310" rx="65" ry="12" fill="#8B6F47" opacity="0.2" />
            <path d="M 65 310 Q 55 280 58 250 Q 60 220 65 200 L 68 170 Q 70 150 85 148 L 155 148 Q 170 150 172 170 L 175 200 Q 180 220 182 250 Q 185 280 175 310 Z" fill="url(#vaseGradient)" stroke="#6B5444" strokeWidth="2.5" filter="url(#shadow)" />
            <path d="M 75 180 Q 78 200 80 240" stroke="#C4A57B" strokeWidth="3" opacity="0.4" fill="none" />
            <ellipse cx="120" cy="148" rx="35" ry="8" fill="#A0826D" opacity="0.6" />
            <rect x="85" y="140" width="70" height="12" rx="6" fill="url(#vaseGradient)" stroke="#6B5444" strokeWidth="2" />
            <ellipse cx="120" cy="160" rx="32" ry="6" fill="#A8DADC" opacity="0.3" />
            <path d="M 120 155 Q 118 100 115 50" stroke="#6B5444" strokeWidth="4" opacity="0.8" fill="none" />
            <path d="M 125 155 Q 128 90 132 35" stroke="#6B5444" strokeWidth="4" opacity="0.8" fill="none" />
            <path d="M 110 155 Q 105 110 98 60" stroke="#6B5444" strokeWidth="4" opacity="0.8" fill="none" />
            <path d="M 130 155 Q 135 105 145 55" stroke="#6B5444" strokeWidth="4" opacity="0.8" fill="none" />
            <path d="M 115 155 Q 108 95 100 45" stroke="#6B5444" strokeWidth="4" opacity="0.8" fill="none" />
            <circle cx="115" cy="50" r="14" fill="#D4A574" opacity="0.9" filter="url(#shadow)" />
            <circle cx="109" cy="45" r="7" fill="#C4A57B" opacity="0.85" />
            <circle cx="121" cy="45" r="7" fill="#C4A57B" opacity="0.85" />
            <circle cx="109" cy="55" r="7" fill="#C4A57B" opacity="0.85" />
            <circle cx="121" cy="55" r="7" fill="#C4A57B" opacity="0.85" />
            <circle cx="115" cy="50" r="6" fill="#8B6F47" opacity="0.7" />
            <circle cx="132" cy="35" r="16" fill="#D4A574" opacity="0.9" filter="url(#shadow)" />
            <circle cx="125" cy="29" r="8" fill="#C4A57B" opacity="0.85" />
            <circle cx="139" cy="29" r="8" fill="#C4A57B" opacity="0.85" />
            <circle cx="125" cy="41" r="8" fill="#C4A57B" opacity="0.85" />
            <circle cx="139" cy="41" r="8" fill="#C4A57B" opacity="0.85" />
            <circle cx="132" cy="35" r="7" fill="#8B6F47" opacity="0.7" />
            <circle cx="98" cy="60" r="12" fill="#D4A574" opacity="0.9" filter="url(#shadow)" />
            <circle cx="93" cy="55" r="6" fill="#C4A57B" opacity="0.85" />
            <circle cx="103" cy="55" r="6" fill="#C4A57B" opacity="0.85" />
            <circle cx="93" cy="65" r="6" fill="#C4A57B" opacity="0.85" />
            <circle cx="103" cy="65" r="6" fill="#C4A57B" opacity="0.85" />
            <circle cx="98" cy="60" r="5" fill="#8B6F47" opacity="0.7" />
            <circle cx="145" cy="55" r="13" fill="#D4A574" opacity="0.9" filter="url(#shadow)" />
            <circle cx="139" cy="50" r="6.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="151" cy="50" r="6.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="139" cy="60" r="6.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="151" cy="60" r="6.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="145" cy="55" r="5.5" fill="#8B6F47" opacity="0.7" />
            <circle cx="100" cy="45" r="11" fill="#D4A574" opacity="0.9" filter="url(#shadow)" />
            <circle cx="95" cy="41" r="5.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="105" cy="41" r="5.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="95" cy="49" r="5.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="105" cy="49" r="5.5" fill="#C4A57B" opacity="0.85" />
            <circle cx="100" cy="45" r="4.5" fill="#8B6F47" opacity="0.7" />
            <ellipse cx="105" cy="120" rx="12" ry="22" fill="#7A6240" opacity="0.6" transform="rotate(-35 105 120)" />
            <ellipse cx="135" cy="110" rx="10" ry="20" fill="#7A6240" opacity="0.6" transform="rotate(40 135 110)" />
            <ellipse cx="110" cy="95" rx="11" ry="18" fill="#7A6240" opacity="0.6" transform="rotate(-50 110 95)" />
            <ellipse cx="140" cy="95" rx="9" ry="17" fill="#7A6240" opacity="0.6" transform="rotate(35 140 95)" />
            <ellipse cx="95" cy="135" rx="10" ry="19" fill="#7A6240" opacity="0.6" transform="rotate(-25 95 135)" />
            <ellipse cx="125" cy="130" rx="11" ry="21" fill="#7A6240" opacity="0.6" transform="rotate(30 125 130)" />
          </svg>
        </motion.div>

        {/* RESPONSIVE Pendant Light 1 */}
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.7, duration: 1.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute top-0 right-2 w-[100px] h-[150px] xs:w-[120px] xs:h-[180px] sm:w-[150px] sm:h-[225px] md:w-[160px] md:h-[240px] lg:w-[170px] lg:h-[255px] xl:w-[180px] xl:h-[270px] 2xl:w-[190px] 2xl:h-[285px]"
        >
          <svg viewBox="0 0 120 200" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="light1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4A574" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A0826D" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="bulbGlow1">
                <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#C4A57B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C4A57B" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="8" r="6" fill="#8B6F47" opacity="0.8" />
            <rect x="57" y="8" width="6" height="4" fill="#8B6F47" opacity="0.8" />
            <line x1="60" y1="12" x2="60" y2="75" stroke="#6B5444" strokeWidth="3" opacity="0.7" />
            <path d="M 35 75 L 22 115 Q 22 122 28 122 L 92 122 Q 98 122 98 115 L 85 75 Z" fill="url(#light1Gradient)" stroke="#6B5444" strokeWidth="2" filter="url(#shadow)" />
            <path d="M 30 85 L 25 110" stroke="#8B6F47" strokeWidth="1" opacity="0.4" />
            <path d="M 90 85 L 95 110" stroke="#8B6F47" strokeWidth="1" opacity="0.4" />
            <rect x="54" y="118" width="12" height="6" rx="2" fill="#8B6F47" opacity="0.8" />
            <ellipse cx="60" cy="135" rx="16" ry="20" fill="#D4A574" opacity="0.95" />
            <ellipse cx="60" cy="135" rx="10" ry="13" fill="#F5E6D3" opacity="0.8" />
            <circle cx="60" cy="145" r="40" fill="url(#bulbGlow1)" opacity="0.5" />
          </svg>
        </motion.div>

        {/* RESPONSIVE Pendant Light 2 */}
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 0.9, duration: 1.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute top-20 right-20 xs:top-24 xs:right-24 sm:top-20 sm:right-32 md:top-24 md:right-40 lg:top-28 lg:right-44 xl:top-30 xl:right-48 2xl:top-32 2xl:right-52 w-[80px] h-[120px] xs:w-[100px] xs:h-[150px] sm:w-[130px] sm:h-[195px] md:w-[140px] md:h-[210px] lg:w-[150px] lg:h-[225px] xl:w-[160px] xl:h-[240px] 2xl:w-[170px] 2xl:h-[255px]"
        >
          <svg viewBox="0 0 120 200" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="light2Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C4A57B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B6F47" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="bulbGlow2">
                <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#C4A57B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C4A57B" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="8" r="6" fill="#8B6F47" opacity="0.8" />
            <rect x="57" y="8" width="6" height="4" fill="#8B6F47" opacity="0.8" />
            <line x1="60" y1="12" x2="60" y2="65" stroke="#6B5444" strokeWidth="3" opacity="0.7" />
            <path d="M 37 65 L 24 105 Q 24 112 30 112 L 90 112 Q 96 112 96 105 L 83 65 Z" fill="url(#light2Gradient)" stroke="#6B5444" strokeWidth="2" filter="url(#shadow)" />
            <path d="M 32 75 L 27 100" stroke="#A0826D" strokeWidth="1" opacity="0.4" />
            <path d="M 88 75 L 93 100" stroke="#A0826D" strokeWidth="1" opacity="0.4" />
            <rect x="54" y="108" width="12" height="6" rx="2" fill="#8B6F47" opacity="0.8" />
            <ellipse cx="60" cy="125" rx="14" ry="18" fill="#C4A57B" opacity="0.95" />
            <ellipse cx="60" cy="125" rx="9" ry="12" fill="#F5E6D3" opacity="0.75" />
            <circle cx="60" cy="135" r="38" fill="url(#bulbGlow2)" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-radial from-[#C4A57B]/25 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] bg-gradient-radial from-[#8B6F47]/20 to-transparent rounded-full blur-3xl opacity-40" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-3 sm:px-4 md:px-6 w-full max-w-[98vw] lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="w-full"
          >
            <div className="relative">
              <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-16 flex-wrap sm:flex-nowrap">
                
                {/* "The Vogue" */}
                <motion.div
                  style={{ y: theVogueY, x: theVogueX, opacity: theVogueOpacity, scale: theVogueScale }}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                  className="will-change-transform"
                >
                  <h1 className="text-7xl xs:text-8xl sm:text-9xl md:text-[10rem] lg:text-[11rem] xl:text-[12rem] 2xl:text-[14rem] text-[#3D2E1F] leading-none font-display">
                    The Vogue
                  </h1>
                </motion.div>

                {/* "Studio" */}
                <motion.div
                  style={{ y: studioY, x: studioX, opacity: studioOpacity, scale: studioScale }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                  className="will-change-transform"
                >
                  <h1 className="text-7xl xs:text-8xl sm:text-9xl md:text-[10rem] lg:text-[11rem] xl:text-[12rem] 2xl:text-[14rem] bg-gradient-to-r from-[#8B6F47] via-[#A0826D] to-[#C4A57B] bg-clip-text text-transparent leading-none font-display">
                    Studio
                  </h1>
                </motion.div>
              </div>

              {/* RIPPLES */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`ripple-${i}`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px]"
                    style={{ 
                      aspectRatio: '1 / 1',
                      borderColor: `rgba(139, 111, 71, ${0.75 - i * 0.15})`,
                    }}
                    initial={{ width: '0%', opacity: 0 }}
                    animate={{ 
                      width: ['0%', '300vmax'],
                      opacity: [0, 0.8 - i * 0.15, 0]
                    }}
                    transition={{ 
                      duration: 16, 
                      repeat: Infinity, 
                      ease: 'linear', 
                      delay: i * 4 
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#8B6F47]/20 via-[#C4A57B]/30 to-[#8B6F47]/20 -z-10 opacity-40" />
            </div>

            <motion.div
              style={{ opacity: sloganOpacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              className="mt-4 xs:mt-6 sm:mt-10 md:mt-14 lg:mt-18 xl:mt-22"
            >
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#5D4E3C] font-light tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.18em] xl:tracking-[0.2em] px-4 font-body">
                We Don't Design! <span className="italic font-normal text-[#8B6F47]">We Define Premium</span>
              </p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1.2, ease: 'easeInOut' }}
                className="relative mt-3 xs:mt-4 sm:mt-6 md:mt-7 lg:mt-8 flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4"
              >
                <div className="h-px w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent opacity-60" />
                <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#C4A57B]" />
                <div className="h-px w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent opacity-60" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-4 xs:bottom-6 sm:bottom-10 md:bottom-12 lg:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-20"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2">
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#5D4E3C]/50 font-light">Scroll</span>
            <div className="w-px h-6 xs:h-8 sm:h-10 md:h-12 bg-gradient-to-b from-[#8B6F47]/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
