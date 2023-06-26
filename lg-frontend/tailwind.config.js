/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color:{
      primaryLight:'hsla(222, 59%, 12%, 1)',
      primary:'hsla(222, 59%, 8%, 1)',
      primaryDark:'hsla(222, 59%, 4%, 1)'
    }
  },
  },
  plugins: [],
}

