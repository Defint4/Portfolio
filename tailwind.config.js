/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: { 
    extend: {
      blur: {
        xs: '2px',
      },
      width: {
        '200': '50rem',
      },
      backdropGrayscale: {
        '40': '40%',
      }
    },
  },
  plugins: [],
}
