/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "-4": "-0.04em",
        "-1": "-0.01em",
        9: "0.09em",
        "-5": "-0.55px" // This corresponds to -4% of font-size
      },
    },
  },
  plugins: [],
};
