/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   variants: {
    extend: {
      backgroundColor: ['responsive', 'focus'], // Make sure 'focus' is included here
    },
  },
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      fontFamily: {
        UltraSolar: ['Ultrasolar web']
      },
      colors: {
        textwhite: '#ffffff',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
}

