/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "system-ui"],
        cabinetGrotesk: ["Cabinet Grotesk", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        neuemachina: ["PP Neue Machina", "sans-serif"],
      },
      colors: {
        "custom-green": "#1B3D38",
        "custom-orange": "#BC6C25",
        "custom-white": "#DBE7E8",
        "custom-grey": "#D9D9D9",

      },
    },
  },
  plugins: [],
};
