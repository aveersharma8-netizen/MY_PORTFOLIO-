/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FBFBF9',
          dark: '#141413',
        },
        surface: {
          DEFAULT: '#F2F1EC',
          hover: '#EAE8E1',
          dark: '#1E1E1D',
          'dark-hover': '#282826',
        },
        ink: {
          DEFAULT: '#1A1A18',
          secondary: '#5C5B56',
          muted: '#8C8B84',
          light: '#F5F5F0',
        },
        vermilion: {
          DEFAULT: '#C8321A',
          hover: '#A92813',
          light: '#FDF2F0',
          border: 'rgba(200, 50, 26, 0.25)',
        },
        border: {
          subtle: '#E6E5DF',
          dark: '#2A2A28',
        }
      },
      fontFamily: {
        serif: ['Syne', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
