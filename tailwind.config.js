/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".jsx",
    './index.html', './src/**/*.{js,ts,jsx,tsx}', '*.html', '*.php', '*.jsx'
  ],
  theme: {
    darkMode: ['class', '[data-mode="dark"]'],
    extend: {},
  },
  plugins: [],
}

