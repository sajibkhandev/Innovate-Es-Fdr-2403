/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFF4FA',
        'secondary': '#1BBF00',
        'thrid': '#141135',
        'four': '#726E9E',
        'five': '#F6F5FF',
      },
      fontFamily: {
        'open': ["Open Sans"],
        'paprika': ["Paprika"],
        'nunito': ["Nunito"],
       
      },
      maxWidth: {
        'container': '1170px',
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')",
        'aboutProfile': "url('./assets/aboutprofile.png')",
        
      },
      spacing: {
        '100': '100px',
      }
    },
  },
  plugins: [],
}