import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Particles() {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 })
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c9a96e"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'Vogue Studio transformed our house into a dream home. Their attention to detail and creative vision exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechCorp',
      text: 'The office redesign has significantly improved our team\'s morale and productivity. Truly exceptional work!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Restaurant Owner',
      text: 'Our customers can\'t stop talking about the beautiful ambiance. Vogue Studio understood our vision perfectly.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#0f0f0f] relative overflow-hidden" ref={ref}>
      {/* 3D Particles Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] text-sm tracking-[0.3em] mb-4">TESTIMONIALS</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Client <span className="text-[#c9a96e]">Stories</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-[#c9a96e]/20 hover:border-[#c9a96e] transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-[#c9a96e] text-xl" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-[#c9a96e]/20 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-[#c9a96e] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
