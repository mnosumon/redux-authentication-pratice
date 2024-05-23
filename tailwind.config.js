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
        textColor: "var(--textColor",
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
  },
  plugins: [],
}
