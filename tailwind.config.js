/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,css}"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        sky: {
          400: '#38bdf8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


