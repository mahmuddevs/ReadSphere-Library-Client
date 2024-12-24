/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    function ({ addBase }) {
      addBase(
        {
          'h2': { color: '#111111', fontSize: '20px', fontWeight: 700 },
          'p': { fontSize: '1.125rem', fontWeight: 400, lineHeight: "26px" }
        }
      )
    }
  ],
}

