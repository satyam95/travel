/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        '-4': '-0.04em', // This corresponds to -4% of font-size
      },
    },
  },
  plugins: [],
};
