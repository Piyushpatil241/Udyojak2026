import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import EventCard from './EventCard'
import eventsData from '../data/events.json'

const RegistrationTab = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter events based on search query (flat list, no categories)
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return eventsData

    const query = searchQuery.toLowerCase()

    return eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-card ticket-style rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-purple/50 focus:bg-card-hover transition-all backdrop-blur-sm"
        />
      </div>

      {/* Events Grid (no categories) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

      {filteredEvents.length === 0 && searchQuery && (
        <div className="text-center py-12 text-white">
          No events found matching "{searchQuery}"\r
        </div>
      )}
    </div>
  )
}

export default RegistrationTab
