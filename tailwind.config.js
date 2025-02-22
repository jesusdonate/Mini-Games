/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        'navbar': '#c5c0aa',
        'primary': '#9cbcc6',
        'secondary': '#406b8c',
        'alert': '#e3342f',
        'custom-blue': '#406b8c',
        'custom-red': '#a4485e',
        'custom-pink': '#ffd1dc',
        'custom-orange': '#eb8445',
        'custom-green': '#52b788',

      },
    },
  },
  plugins: [],
}

