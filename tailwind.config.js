/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './Pages/*',
    './Components/*',
  ],
  theme: {

    extend: {

    container: {
      center : true ,
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    },

  },
  plugins: [],
}