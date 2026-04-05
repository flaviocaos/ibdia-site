/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ibdia: {
          dark: '#0D3B66',
          cyan: '#2EC4B6',
          blue: '#118AB2',
        }
      },
    },
  },
  plugins: [],
}