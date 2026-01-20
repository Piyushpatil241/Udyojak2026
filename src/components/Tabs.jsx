import { motion } from 'framer-motion'

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center gap-2 md:gap-4 mt-8 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all whitespace-nowrap ${
            activeTab === tab.id
              ? 'gradient-logo-bg text-white'
              : 'bg-card text-white hover:bg-card-hover hover:text-primary-purple border backdrop-blur-sm'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
        </motion.button>
      ))}
    </div>
  )
}

export default Tabs

