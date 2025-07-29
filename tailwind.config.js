/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-500": "hsl(171, 66%, 44%)",
        "blue-100": "hsl(233, 100%, 69%)",
        "gray-700": "hsl(210, 10%, 33%)",
        "gray-500": "hsl(201, 11%, 66%)",
      },
    },
    fontFamily: {
      "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
    },
  },
  plugins: [],
};
