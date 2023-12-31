/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008B8B",
        secondary: "	#20B2AA",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
