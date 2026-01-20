import { Film, Star } from 'lucide-react'
import { motion } from 'framer-motion'

// Clapperboard decorative component
export const Clapperboard = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 1 }}
    className={`absolute ${className} opacity-20`}
  >
    <Film className="w-8 h-8 md:w-12 md:h-12 text-primary-purple" />
  </motion.div>
)

// Projector Reel decorative component
export const ProjectorReel = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className={`absolute ${className} opacity-10`}
  >
    <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-primary-purple rounded-full relative">
      <div className="w-full h-full border-2 border-dashed border-primary-red rounded-full animate-spin-slow" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-primary-purple rounded-full" />
      </div>
    </div>
  </motion.div>
)

// Star Sparkle component
export const StarSparkle = ({ className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ 
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 1
    }}
    className={`absolute ${className}`}
  >
    <Star className="w-4 h-4 text-primary-light fill-primary-light" />
  </motion.div>
)

// Multiple stars component
export const StarField = () => {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    size: Math.random() * 0.5 + 0.5
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <StarSparkle
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.size})`
          }}
          delay={star.delay}
        />
      ))}
    </div>
  )
}
