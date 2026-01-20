# Event '25 Website

A modern, dark-themed, responsive event website built with React + Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Luxury UI** - Premium dark theme with gold accents
- ⏱️ **Live Countdown** - Real-time countdown to event date (27th January)
- 📋 **Event Registration** - Searchable accordion-based event listings
- 📅 **Schedule** - Day-by-day event timeline
- 📥 **Downloads** - Quick access to event resources
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ✨ **Smooth Animations** - Subtle Framer Motion animations throughout

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Accordion.jsx
│   ├── Countdown.jsx
│   ├── DownloadCard.jsx
│   ├── EventCard.jsx
│   ├── RegistrationTab.jsx
│   ├── ScheduleCard.jsx
│   ├── ScheduleTab.jsx
│   ├── Tabs.jsx
│   └── DownloadsTab.jsx
├── data/               # JSON data files
│   ├── events.json
│   ├── schedule.json
│   └── downloads.json
├── App.jsx             # Main application component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Changing Event Data

All event data is stored in JSON files in `src/data/`:

- **events.json** - Event listings organized by category
- **schedule.json** - Event schedule for Day 1 and Day 2
- **downloads.json** - Downloadable resources

Simply edit these JSON files to update the content without touching the UI code.

### Changing Event Date

Edit the `eventDate` variable in `src/App.jsx`:

```jsx
const eventDate = '2025-01-27T00:00:00'
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme. The gold color is defined as:

```js
gold: {
  DEFAULT: '#d4af37',
  // ... other shades
}
```

## Design Features

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Color Scheme**: Deep black/charcoal gradient background with gold (#d4af37) accents
- **Cards**: Rounded corners (xl/2xl), soft shadows, gold glow on hover
- **Spacing**: Center-aligned layout with generous breathing room

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

