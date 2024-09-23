/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],

  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInDown 0.5s'
      },
      keyframes: theme => ({
        fadeInDown: {
          "0%": {
            transform: "translateY(30px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },

      }),
      textShadow: {
        md: '0 2px 4px var(--tw-shadow-color)',
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero': "url('/public/landingPage/harbor.jpg')"
      },
      colors: {
        primary: "#DAA520",
        primaryLigth: "#FFD700",
        secondary: "#C0C0C0"
      }
    }
  },

  plugins: [
    flowbite.plugin()
  ],
}


