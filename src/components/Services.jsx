import { motion } from 'framer-motion'
import { HiHome, HiBriefcase, HiSparkles, HiCube, HiLightningBolt, HiArrowRight } from 'react-icons/hi'
import { useState } from 'react'

// Import service images
import residentialImg from '/images/residentialImg.jpeg'
import commercialImg from '/images/commercialImg.jpeg'
import hospitalityImg from '/images/hospitalityImg.jpeg'
import spacePlanningImg from '/images/spacePlanningImg.jpeg'
import furnitureImg from '/images/furnitureImg.jpeg'
import renovationImg from '/images/renovationImg.jpeg'

// Map service ids to images
const serviceImages = {
  1: residentialImg,
  2: commercialImg,
  3: hospitalityImg,
  4: spacePlanningImg,
  5: furnitureImg,
  6: renovationImg
}

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      title: 'Residential Design',
      subtitle: 'Your Dream Home Awaits',
      description: 'Transform living spaces into personalized sanctuaries. From luxurious apartments to sprawling estates, we craft homes that reflect your unique style and enhance your lifestyle.',
      icon: HiHome,
      features: ['Custom Layouts', 'Material Selection', 'Lighting Design', '3D Visualization'],
      color: 'from-[#C4A57B] to-[#D4A574]',
      bgColor: 'rgba(196, 165, 123, 0.08)'
    },
    {
      id: 2,
      title: 'Commercial Spaces',
      subtitle: 'Where Business Meets Beauty',
      description: 'Create inspiring workspaces that boost productivity and impress clients. Our commercial designs blend functionality with sophisticated aesthetics.',
      icon: HiBriefcase,
      features: ['Office Design', 'Retail Spaces', 'Brand Integration', 'Ergonomic Solutions'],
      color: 'from-[#D4A574] to-[#C4A57B]',
      bgColor: 'rgba(212, 165, 116, 0.08)'
    },
    {
      id: 3,
      title: 'Hospitality Design',
      subtitle: 'Experiences That Enchant',
      description: 'Design memorable guest experiences in hotels, restaurants, and entertainment venues. We create atmospheric spaces that captivate and inspire.',
      icon: HiSparkles,
      features: ['Hotel Interiors', 'Restaurant Design', 'Lounge Spaces', 'Ambiance Creation'],
      color: 'from-[#8B6F47] to-[#C4A57B]',
      bgColor: 'rgba(139, 111, 71, 0.08)'
    },
    {
      id: 4,
      title: 'Space Planning',
      subtitle: 'Maximize Every Square Foot',
      description: 'Optimize your space with intelligent layouts that enhance flow and functionality. Strategic planning ensures every area serves a purpose beautifully.',
      icon: HiCube,
      features: ['Layout Optimization', 'Flow Analysis', 'Storage Solutions', 'Multi-use Design'],
      color: 'from-[#C4A57B] to-[#8B6F47]',
      bgColor: 'rgba(196, 165, 123, 0.08)'
    },
    {
      id: 5,
      title: 'Custom Furniture',
      subtitle: 'Bespoke Pieces, Perfect Fit',
      description: 'Commission one-of-a-kind furniture that complements your space perfectly. Our artisans craft bespoke pieces combining form and function.',
      icon: HiCube,
      features: ['Custom Design', 'Premium Materials', 'Artisan Craft', 'Perfect Fit'],
      color: 'from-[#D4A574] to-[#B89968]',
      bgColor: 'rgba(212, 165, 116, 0.08)'
    },
    {
      id: 6,
      title: 'Renovation & Remodeling',
      subtitle: 'Breathe New Life Into Spaces',
      description: 'Transform existing spaces into modern masterpieces. We bring fresh vision while preserving structural integrity and character.',
      icon: HiLightningBolt,
      features: ['Full Remodeling', 'Structural Updates', 'Modern Upgrades', 'Preservation'],
      color: 'from-[#8B6F47] to-[#D4A574]',
      bgColor: 'rgba(139, 111, 71, 0.08)'
    }
  ]

  return (
    <section id="services" className="relative w-full bg-gradient-to-br from-[#F0E9DC] via-[#FAF7F0] to-[#F5F1E8] py-16 sm:py-20 lg:py-24 overflow-hidden">
      
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-[50%]"
          style={{
            background: 'radial-gradient(circle at center, rgba(196, 165, 123, 0.15), transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-[-160px] right-[-160px] w-[500px] h-[500px] rounded-[50%]"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 111, 71, 0.12), transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -700],
              x: [0, Math.sin(i * 2) * 60],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'linear'
            }}
            className="absolute"
            style={{
              bottom: '-30px',
              left: `${8 + i * 8}%`,
              width: '8px',
              height: '8px',
              background: 'rgba(196, 165, 123, 0.4)',
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(196, 165, 123, 0.6)'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >         
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-display mb-3"
          >
            <span className="text-[#3D2E1F]">Transforming Spaces, </span>
            <span className="bg-gradient-to-r from-[#8B6F47] via-[#C4A57B] to-[#D4A574] bg-clip-text text-transparent">
              Elevating Lives
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#5D4E3C] text-sm sm:text-base max-w-2xl mx-auto"
          >
            From concept to completion, we deliver exceptional interior design solutions
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const Icon = service.icon
            const isHovered = hoveredService === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                onTap={() => setHoveredService(hoveredService === service.id ? null : service.id)}
                className="relative"
              >
                {/* Hover Background Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 rounded-2xl pointer-events-none"
                  style={{
                    backgroundColor: service.bgColor,
                    filter: 'blur(20px)'
                  }}
                />

                <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`relative group ${isEven ? '' : 'lg:col-start-2'}`}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={serviceImages[service.id]} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E1F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <span className="text-[#8B6F47] font-bold text-sm">{String(service.id).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                  >
                    <div className="space-y-4">
                      <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} items-center justify-center shadow-md`}>
                        <Icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#3D2E1F] mb-1 font-display">
                          {service.title}
                        </h3>
                        <p className="text-[#8B6F47] text-sm sm:text-base font-semibold">
                          {service.subtitle}
                        </p>
                      </div>
                      <div className={`h-px w-12 bg-gradient-to-r ${service.color} rounded-full`} />
                      <p className="text-[#5D4E3C] text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                            className="flex items-center gap-2"
                          >
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.color}`} />
                            <span className="text-[#5D4E3C] text-xs">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-2`}
                      >
                        <span>Learn More</span>
                        <HiArrowRight className="text-base" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
