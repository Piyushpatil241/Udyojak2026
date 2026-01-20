import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const ScheduleCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 md:gap-6 p-4 md:p-6 bg-card rounded-xl ticket-style hover:bg-card-hover transition-all glow-primary-hover mb-4 backdrop-blur-sm"
    >
      <div className="flex-shrink-0">
        <div className="text-2xl md:text-3xl font-bold gradient-logo">
          {event.time}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-serif text-white mb-2">
          {event.name}
        </h4>
        <div className="flex items-center gap-2 text-white text-sm md:text-base">
          <MapPin className="w-4 h-4" />
          <span>{event.venue}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ScheduleCard

