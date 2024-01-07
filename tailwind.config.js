/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#000000',
        'paraColor': '#909090',
        'SearchColor': '#656565',
        'subNavBG': '#2E2E2E',
        'subNavWhite': 'rgba(255, 255, 255, .5)',
        'subNavHoverWhite': 'rgba(255, 255, 255, .8)',
      },
      maxWidth: {
        'container': '1136px',
        'SecondContainer': '1120px',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      transitionTimingFunction: {
        'myTrans': 'all liner .4s'
      },
      backgroundImage: {
        'registerBanner': "url('/images/login.jpg')",
        'loginBanner': "url('/images/login.jpg')",
        '404errorBg': "url('/images/404errorBg.png')",
      },
      borderRadius: {
        'custom': '20px',
        '10px': '10px',
      },
      margin: {
        'margin52': '52px',
      },
      padding: {
        '104px': '104px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Simple 16 row grid
        '7': 'repeat(17, minmax(0, 1fr))',
      },
      rotate: {
        '30': '30deg',
        '55': '55deg',
      },
      dropShadow: {
        'customShadow': '30px 53px 82px 8px rgba(159, 159, 159, 0.15)',
      }
    },
  },
  plugins: [],
}