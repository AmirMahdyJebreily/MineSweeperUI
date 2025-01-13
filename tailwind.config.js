/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Arad']
      },
      animation: {
        'dice1': 'fromleft 166ms ease-in forwards',
        'dice2': 'fromright 166ms ease-in 172ms forwards',
        'dice3': 'fromtop 166ms ease-in 344ms forwards',
        'dice4': 'frombottom 166ms ease-in 516ms forwards',
        'dice5': 'fromright 166ms ease-in 688ms forwards',
        'dice6': 'fromtop 166ms ease-in 860ms forwards',
      },
      keyframes: {
        fromleft: {
          '0%': { transform: 'translateX(-1.5rem)', opacity: 0.5 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fromright: {
          '0%': { transform: 'translateX(1.5rem)', opacity: 0.5 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fromtop: {
          '0%': { transform: 'translateY(1.5rem)', opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        frombottom: {
          '0%': { transform: 'translateY(-1.5rem)', opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}

