/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  ],
  theme: {
    extend: {
      
      backgroundImage: {"headgradient":"linear-gradient(bg-gradient-to-r from-[#ffedd5] to-[red])"}
// bg-gradient-to-r from-[#351EE0] to-[#3F74EF]
  
  },
  plugins: [],
}
}
