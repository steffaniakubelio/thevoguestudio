import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

// Import project images
import loftImg from '/images/loft.jpeg'
import officeImg from '/images/office.jpeg'
import penthouseImg from '/images/penthouse.jpeg'
import restaurantImg from '/images/restaurant.jpeg'
import spaImg from '/images/spa.jpeg'
import galleryImg from '/images/gallery.jpeg'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate star field (reduced to 50 for better performance)
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.3
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  const projects = [
    {
      title: 'Modern Minimalist Loft',
      category: 'Residential',
      location: 'New York',
      gradient: 'from-[#C4A57B] to-[#D4A574]',
      image: loftImg
    },
    {
      title: 'Executive Office Suite',
      category: 'Commercial',
      location: 'London',
      gradient: 'from-[#D4A574] to-[#C4A57B]',
      image: officeImg
    },
    {
      title: 'Luxury Penthouse',
      category: 'Residential',
      location: 'Dubai',
      gradient: 'from-[#8B6F47] to-[#C4A57B]',
      image: penthouseImg
    },
    {
      title: 'Boutique Restaurant',
      category: 'Hospitality',
      location: 'Paris',
      gradient: 'from-[#C4A57B] to-[#8B6F47]',
      image: restaurantImg
    },
    {
      title: 'Spa Wellness Center',
      category: 'Commercial',
      location: 'Bali',
      gradient: 'from-[#D4A574] to-[#B89968]',
      image: spaImg
    },
    {
      title: 'Art Gallery',
      category: 'Cultural',
      location: 'Milan',
      gradient: 'from-[#8B6F47] to-[#D4A574]',
      image: galleryImg
    }
  ]

  return (
    <section 
      id="portfolio" 
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F0E9DC] overflow-hidden" 
      ref={ref}
      style={{ willChange: 'scroll-position' }}
    >
      {/* Interstellar Star Field Background - Optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ willChange: 'transform' }}>
        {/* Stars - Reduced count */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[#C4A57B]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(196, 165, 123, 0.5)`,
              willChange: 'opacity, transform'
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Shooting Stars - Reduced to 2 */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent"
            style={{
              top: `${20 + i * 40}%`,
              left: '-100px',
              transform: 'rotate(-45deg)',
              willChange: 'transform, opacity'
            }}
            animate={{
              x: ['0vw', '120vw'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 5,
              ease: 'easeOut'
            }}
          />
        ))}

        {/* Nebula-like Clouds - Optimized */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 165, 123, 0.15) 0%, rgba(212, 165, 116, 0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            willChange: 'transform'
          }}
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 111, 71, 0.12) 0%, rgba(196, 165, 123, 0.06) 40%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform'
          }}
        />

        {/* Constellation Lines - Simplified */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="constellationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4A57B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4A574" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <motion.line
            x1="10%" y1="20%" x2="30%" y2="35%"
            stroke="url(#constellationGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="70%" y1="60%" x2="85%" y2="70%"
            stroke="url(#constellationGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>

        {/* Distant Planets/Orbs - Reduced animation complexity */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-[#C4A57B]/30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(212, 165, 116, 0.2), rgba(139, 111, 71, 0.1))',
            boxShadow: '0 0 30px rgba(196, 165, 123, 0.3)',
            willChange: 'transform'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        > 
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-display mb-3">
            <span className="text-[#3D2E1F]">Featured </span>
            <span className="bg-gradient-to-r from-[#8B6F47] via-[#C4A57B] to-[#D4A574] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[#5D4E3C] text-sm sm:text-base">
            Explore our portfolio of exceptional designs
          </p>
        </motion.div>

        {/* Projects Grid - Optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
              style={{ willChange: 'transform' }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-lg">
                {/* Project Image - Optimized */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-multiply`} />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#8B6F47] text-xs font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-bold text-[#3D2E1F] mb-2 font-display group-hover:text-[#8B6F47] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#5D4E3C] text-sm">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
