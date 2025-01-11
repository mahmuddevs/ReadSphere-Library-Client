/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050a0c',
        'background': '#f1f7fa',
        'primary-new': '#4699ce',
        'secondary-new': '#86c2e8',
        'accent-new': '#50ade9',
      },
    },
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

