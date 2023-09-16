/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        "green": "#009a67",
        "beige": "#fffdf7",
        "slate": "#333231",
        "light-slate":"hsl(30 2% 50% / 1)",
        "sky-blue": "hsl(191 100% 95% / 1)",
        "yellow": "#fbea1b",
        "orange":"#ffc231",
        "teal": "hsl(189 62% 35%)",
        "light-teal": "hsl(190 61% 87% / 1)"
      },
      fontFamily: {
        serif: ['Caudex', 'serif'],
        axel: ['AxelSchefflerSans-Regular', 'sans'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '5rem',
          '2xl': '15rem',
        },        
      },
    },
  },
  plugins: [],
}

