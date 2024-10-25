/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "begeClaro": "#fffef2",
        "laranjaPrincipal": "#e59949"
      },
      padding:{
        "paddingXpc": "100px",
        "paddinXcel": "20px",
      },
      fontFamily: {
        "Kavivanar": "'Kavivanar', cursive",
        "Yatra": "'Yatra One', system-ui",
        "Bebas": "'Bebas Neue', sans-serif"
      }
    },
  },
  plugins: [],
}

