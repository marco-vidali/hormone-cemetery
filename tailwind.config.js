/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        main: {
          primary: "#303880",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
