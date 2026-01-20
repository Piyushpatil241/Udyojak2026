import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-xl p-5 md:p-6 ticket-style hover:bg-card-hover transition-all glow-primary-hover"
    >
      <h4 className="text-lg md:text-xl font-serif gradient-logo mb-2">
        {event.name}
      </h4>
      <p className="text-white text-sm md:text-base mb-4">
        {event.description}
      </p>

      {event.externalLink ? (
        <motion.a
          href={event.externalLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 gradient-logo-bg text-white rounded-lg font-semibold hover:opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      ) : (
        <button
          className="flex items-center gap-2 px-4 py-2 bg-card text-white/60 rounded-lg font-semibold cursor-not-allowed"
          disabled
        >
          Register
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  )
}

export default EventCard

