/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue-100':'#ADD7F6',
        'main-blue-200':'#87BFFF',
        'main-blue-300':'#3F8EFC',
        'main-blue-400':'#2667FF',
        'main-blue-500':'#3B28CC',

        'main-dark-300':'#121212',
        'main-dark-400':'#000808',

        'text-primary':'#ffffff',
        'text-secondary':'rgba(255,255,255,0.7)',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    }
  },
  plugins: [],
}
