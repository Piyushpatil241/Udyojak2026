import { useState } from 'react'
import { motion } from 'framer-motion'
import ScheduleCard from './ScheduleCard'
import scheduleData from '../data/schedule.json'

const ScheduleTab = () => {
  const [activeDay, setActiveDay] = useState('day1')

  const days = [
    { id: 'day1', label: 'DAY 1', date: scheduleData.day1.date },
    { id: 'day2', label: 'DAY 2', date: scheduleData.day2.date }
  ]

  const currentSchedule = scheduleData[activeDay]

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 relative">
      {/* Day Switcher */}
      <div className="flex justify-center gap-4 mb-8">
        {days.map((day) => (
          <motion.button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeDay === day.id
                ? 'gradient-logo-bg text-white'
                : 'bg-card text-white hover:bg-card-hover hover:text-primary-purple ticket-style backdrop-blur-sm'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {day.label} – {day.date}
          </motion.button>
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentSchedule.events.map((event, index) => (
          <ScheduleCard key={index} event={event} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default ScheduleTab

