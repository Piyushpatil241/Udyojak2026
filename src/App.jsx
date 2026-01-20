import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Countdown from './components/Countdown'
import Tabs from './components/Tabs'
import RegistrationTab from './components/RegistrationTab'
import ScheduleTab from './components/ScheduleTab'
import DownloadsTab from './components/DownloadsTab'
import logoImage from './assets/Logo.jpeg'

function App() {
  const [activeTab, setActiveTab] = useState('regs')

  // Event date: 27th January 2026
  const eventDate = '2026-01-27T00:00:00'

  const tabs = [
    { id: 'regs', label: 'REGS' },
    { id: 'schedule', label: 'SCHEDULE' },
    { id: 'downloads', label: 'DOWNLOADS' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'regs':
        return <RegistrationTab />
      case 'schedule':
        return <ScheduleTab />
      case 'downloads':
        return <DownloadsTab />
      default:
        return <RegistrationTab />
    }
  }

  return (
    <div className="min-h-screen pb-24 film-grain relative">
      {/* Hero Section */}
      <section className="pt-8 md:pt-16 pb-8 text-center spotlight-effect cinema-curtain film-strip relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full gradient-logo-bg flex items-center justify-center glow-primary p-2">
            <img 
              src={logoImage} 
              alt="Udyojak Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </motion.div>

        {/* Event Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold gradient-logo mb-4"
        >
          UDYOJAK 2026
        </motion.h1>

        {/* Countdown */}
        <Countdown targetDate={eventDate} />

        {/* Tab Navigation */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </section>

      {/* Tab Content */}
      <section className="pb-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Sticky Footer Banner */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 gradient-logo-bg text-white py-3 md:py-4 z-50"
      >
        <div className="text-center font-semibold text-sm md:text-base">
          Registrations closing soon!!!! • 23rd January
        </div>
      </motion.div>
    </div>
  )
}

export default App

