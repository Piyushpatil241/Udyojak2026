import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'
import brochurePdf from '../assets/UDYOJAK 2026 BROCHURE.pdf'

const DownloadCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-card rounded-xl ticket-style hover:bg-card-hover transition-all glow-primary-hover mb-4 backdrop-blur-sm"
    >
      <div className="text-4xl md:text-5xl">{item.icon}</div>
      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-serif text-white mb-1">
          {item.title}
        </h4>
        <p className="text-white text-sm md:text-base">
          {item.description}
        </p>
      </div>
      <a
        href={item.action === 'Download' ? brochurePdf : item.link}
        download={item.action === 'Download'}
        target={item.action === 'View' ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        <motion.button
          className="flex items-center gap-2 px-4 py-2 gradient-logo-bg text-white rounded-lg font-semibold hover:opacity-90 transition-all whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.action === 'Download' ? (
            <>
              <Download className="w-4 h-4" />
              {item.action}
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              {item.action}
            </>
          )}
        </motion.button>
      </a>
    </motion.div>
  )
}

export default DownloadCard

