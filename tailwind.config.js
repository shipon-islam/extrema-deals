/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#fdc814",
        "secondary-yellow": "#ffe617",
        "primary-black": "#0e1012",
        "secondary-black": "#1f2228",
        "primary-gray": "#272c2f",
        "primary-white": "#fffdfa",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "navbar-gradient": "linear-gradient(135deg, #0e1012 50%, #fdc814 50%)",
        "foldertop-gradient":
          "linear-gradient(-135deg, transparent 55%, #1F2228 55%)",
      },
    },
  },
  plugins: [],
};
