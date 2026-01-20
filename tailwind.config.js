/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#822c65', // Purple (top of logo gradient)
          purple: '#822c65',
          red: '#b41c34', // Red (bottom of logo gradient)
          pink: '#b3244a',
          light: '#d493a4',
          white: '#f3f1f3',
        },
        accent: {
          DEFAULT: '#b3244a',
          light: '#d493a4',
          dark: '#822c65',
        },
        light: '#f3f1f3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

