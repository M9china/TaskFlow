/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./**/*{tsx,scss,css,html,jsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

