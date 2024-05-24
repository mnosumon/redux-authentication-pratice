/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-color)",
        primary: "var(--primary)",
        heading: "var(--heading)",
        subHeading: "var(--subHeading)",
        textColor: "var(--textColor)",
        lineColor: 'var(--line-color)'
      },
      fontFamily: {
        gilroyLight: ["GilroyLight"],
        gilroyRegular: ["GilroyRegular"],
        gilroyBlack: ["GilroyBlack"],
        gilroyBold: ["GilroyBold"],
        gilroyMeium: ["GilroyMeium"],
        gilroySemiBold: ["GilroySemiBold"],
        gilroyExtraBold: ["GilroyExtraBold"],
      }
    },
    screens: {
      xs: '300px',
      sm: '576px',
      md: '768px',
      lg: '922px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true
    },
  },
  plugins: [],
}
