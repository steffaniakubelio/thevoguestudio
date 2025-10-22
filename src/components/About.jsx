import { motion } from 'framer-motion'
import { HiSparkles, HiLightBulb, HiTrendingUp } from 'react-icons/hi'
import storyImage from '../../public/images/storyImage.jpeg'
import philosophyImage from '../../public/images/philosophyImage.jpeg'
import impactImage from '../../public/images/impactImage.jpeg'

const imagesMap = {
  story: storyImage,
  philosophy: philosophyImage,
  impact: impactImage,
}

const About = () => {
  const sections = [
    {
      number: '01',
      title: 'Our Story',
      subtitle: 'Where Vision Becomes Reality',
      icon: HiSparkles,
      story: `Founded in 2025, Vogue Studio emerged from a singular vision: to transform ordinary spaces into extraordinary experiences. What began as a passion project in a small studio has evolved into a distinguished force in luxury interior design.`,
      quote: "Design is not just what it looks like. Design is how it works, how it feels, and how it transforms lives.",
      quoteAuthor: 'Vogue Studio Philosophy',
      stats: [
        { label: 'Founded', value: '2025' },
        { label: 'Team', value: '50+' },
        { label: 'Projects', value: '500+' }
      ],
      image: 'story'
    },
    {
      number: '02',
      title: 'Our Philosophy',
      subtitle: 'Timeless Elegance Meets Innovation',
      icon: HiLightBulb,
      story: `Every space tells a story. Our approach transcends mere aesthetics, weaving together timeless elegance with cutting-edge innovation. We believe in creating environments that not only captivate the eye but also enhance the way you live, work, and dream.`,
      quote: "True luxury lies in the perfect harmony between form and function, beauty and purpose.",
      quoteAuthor: 'Design Principles',
      stats: [
        { label: 'Style', value: 'Timeless' },
        { label: 'Approach', value: 'Holistic' },
        { label: 'Focus', value: 'You' }
      ],
      image: 'philosophy'
    },
    {
      number: '03',
      title: 'Our Impact',
      subtitle: 'Creating Spaces That Inspire and Connect',
      icon: HiTrendingUp,
      story: `We are dedicated to crafting spaces that do more than just look beautiful—they inspire creativity, foster connections, and elevate everyday life. Our work has transformed communities and built lasting relationships with clients worldwide.`,
      quote: "Great design bridges people and places, inspiring moments that matter.",
      quoteAuthor: 'Vogue Studio Impact',
      stats: [
        { label: 'Communities Impacted', value: '30+' },
        { label: 'Happy Clients', value: '200+' },
        { label: 'Sustainable Projects', value: '50+' }
      ],
      image: 'impact'
    }
  ]

  return (
    <section id="about" className="relative w-full bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F0E9DC] overflow-hidden">
      
      {/* Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-[#C4A57B] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="relative pt-16 pb-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-display text-[#3D2E1F]"
          >
            A Legacy of <span className="bg-gradient-to-r from-[#8B6F47] via-[#C4A57B] to-[#D4A574] bg-clip-text text-transparent">Design Excellence</span>
          </motion.h2>
        </div>
      </div>

      {/* Editorial Sections */}
      {sections.map((section, index) => (
        <div key={section.number} className="relative py-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Large Background Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.04, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 right-0 flex justify-center lg:justify-start pointer-events-none overflow-hidden"
            >
              <span className="text-[12rem] sm:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-[#8B6F47] leading-none font-display select-none">
                {section.number}
              </span>
            </motion.div>

            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative z-10 mb-6 lg:mb-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C4A57B] to-[#D4A574] flex items-center justify-center shadow-lg"
                >
                  <section.icon className="text-2xl text-white" />
                </motion.div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C4A57B] to-transparent" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2E1F] mb-2 font-display">
                {section.title}
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#8B6F47] font-light tracking-wide">
                {section.subtitle}
              </p>
            </motion.div>

            {/* 3-Column Grid - Matching Heights */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              
              {/* Story Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="relative p-5 rounded-xl bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 shadow-lg h-full flex flex-col">
                  <p className="text-[#5D4E3C] text-sm leading-relaxed mb-4">
                    {section.story}
                  </p>
                  
                  {/* Quote Box */}
                  <div className="relative mt-auto p-4 rounded-lg bg-gradient-to-br from-[#C4A57B]/10 to-[#D4A574]/10 border-l-4 border-[#C4A57B]">
                    <div className="text-4xl text-[#C4A57B] opacity-20 font-serif leading-none mb-1">"</div>
                    <p className="text-[#3D2E1F] text-xs italic leading-relaxed mb-2">
                      {section.quote}
                    </p>
                    <p className="text-[#8B6F47] text-[10px] font-bold tracking-widest uppercase">
                      — {section.quoteAuthor}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image Column - Matching story box height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-4"
              >
                <div className="relative h-full min-h-[300px] rounded-xl bg-gradient-to-br from-[#C4A57B]/20 to-[#D4A574]/20 backdrop-blur-xl border border-[#C4A57B]/20 shadow-lg overflow-hidden group flex items-center justify-center">
                  <img
                    src={imagesMap[section.image]}
                    alt={section.title}
                    className="w-auto h-full object-cover rounded-xl"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#3D2E1F]/80 to-transparent flex items-end p-5"
                  >
                    <p className="text-white text-xs font-semibold">{section.title}</p>
                  </motion.div>
                </div>

              </motion.div>

              {/* Stats Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="space-y-4 h-full flex flex-col">
                  {section.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                      whileHover={{ x: -4, scale: 1.02 }}
                      className="relative p-5 rounded-lg bg-white/70 backdrop-blur-xl border border-[#C4A57B]/20 shadow-md cursor-pointer overflow-hidden group flex-1"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-[#C4A57B]/5 to-[#D4A574]/5"
                      />
                      
                      <div className="relative z-10">
                        <div className="text-3xl sm:text-4xl font-bold text-[#8B6F47] mb-1 font-display">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-[#5D4E3C] font-semibold tracking-widest uppercase">
                          {stat.label}
                        </div>
                      </div>

                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#C4A57B]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Section Divider */}
          {index < sections.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-[#C4A57B]/30 to-transparent" />
            </motion.div>
          )}
        </div>
      ))}

      {/* Bottom Padding */}
      <div className="h-16 sm:h-20 lg:h-24" />
    </section>
  )
}

export default About
