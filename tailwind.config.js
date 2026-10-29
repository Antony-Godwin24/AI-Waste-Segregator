/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        mint: {
          50: '#f2fbf7',
          100: '#e1f7ec',
          200: '#c5eed9',
          300: '#99dfbe',
          400: '#64c89d',
          500: '#3dad7f',
          600: '#2c8b64',
          700: '#246f52',
          800: '#1f5842',
          900: '#1b4938',
        },
        eco: {
          bg: '#f8faf9',
          card: '#ffffff',
          dark: '#0f291e',
          muted: '#64748b',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}