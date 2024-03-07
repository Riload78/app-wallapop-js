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
          400: '#38bdf8', // Reemplaza 'xxxxxx' con el código hexadecimal de tu color
        },
      },
    },
  },
  plugins: [],
}


