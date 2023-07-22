/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'blog-black': '#232739',
        'blog-font': '#f4f4f6'
      },
    },
  },
  plugins: [],
}

