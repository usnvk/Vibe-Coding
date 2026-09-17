/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      keyframes: {
        'burnout-pulse': {
          '0%, 100%': {
            backgroundColor: 'rgba(239, 68, 68, 0.95)',
            boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            backgroundColor: 'rgba(185, 28, 28, 1)',
            boxShadow: '0 0 0 10px rgba(239, 68, 68, 0)',
            transform: 'scale(1.06)',
          },
        },
      },
      animation: {
        'burnout-pulse': 'burnout-pulse 1.5s infinite cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
}
