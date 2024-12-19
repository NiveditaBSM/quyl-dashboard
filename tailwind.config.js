/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'rem-10': '10rem',
        'rem-20': '20rem',
        'rem-15.5': '15.5rem',
      },
    },
  },
  plugins: [],
}

