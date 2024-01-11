/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
    orange: '#FFA500',
    lightorange: '#F2BB66',
    lightorange1: '#FBB917',
    white: '#FFFFFF',
    black: '#000000'
  },
    extend: {},
  },
  plugins: [],
}