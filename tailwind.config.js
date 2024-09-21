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
        primary: "#FACA15",
        primaryDark: "#c29d10",
      }
    }
  },

  plugins: [
    flowbite.plugin()
  ],
}


