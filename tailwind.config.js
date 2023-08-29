/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '380px',
      'sm' : '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary : '#19FB9B',
        secondary : '#0bae19',
      },
      // backgroundImage: {
      //   home1: "url('/assets/logo/Logo1.png')",
      // },
      keyframes: {
        rotation : {
          'to' : {transform: 'rotate(360deg)'}
        },
        rotationReverse : {
          'to' : {transform: 'rotate(-360deg)'}
        },
        rotationNone : {
          'to' : {transform: 'rotate(0deg)'}
        },
        locationAnimate : {
          '50%': {backgroundColor: 'rgba(245,157,15,1)'},
          '100%': {backgroundColor: 'rgba(245,157,15,0)'},
        },
        zoomInOut : {
          '50%' : {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'}
        },
        zoomInOutContact : {
          '25%': {transform: 'scale(1.2)'},
          '50%' : {transform: 'scale(1.3)'},
          '75%' : {transform: 'scale(1.7)'},
          '100%': {transform: 'scale(1)'}
        },
        firstLoading:{
          "0%" : {
            opacity : '0%'
          },
          "100%" : {
            opacity : '100%'
          }
        },
        slideUpEnter: {
          "0%": {
            opacity: '20%',
            // transform: "translateY(20px)",
          },
          "100%": {
            opacity: '100%',
            // transform: "translateY(0px)",
          },
        },
        slideUpEnter2: {
          "0%": {
            opacity: '20%',
            transform: "translateX(-100%)",
          },
          // "100%": {
          //   opacity: '100%',
          //   transform: "translateY(100%)",
          // },
        },
        slideUpLeave: {
          "0%": {
            opacity: '100%',
          },
          "100%": {
            opacity: '0%',
          },
        },
      },
      // animation: {
      //   slideUpEnter: "slideUpEnter .3s ease-in-out",
      //   slideUpLeave: "slideUpLeave .3s ease-in-out",
      // },
      clipPath: {
        ellipseA: "ellipse(52% 100% at 45% 45%)",
        ellipseB:"ellipse(99% 71% at 51% 76%)",
        polygonAbout1: 'polygon(0% 0%, 100% 0%, 100% 75%, 65% 78%, 47% 100%, 33% 77%, 0% 75%)',
        polygonAbout2: 'polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 17% 49%, 0 0)',
        polygonB: "polygon(71% 0, 100% 0, 100% 100%, 32% 100%)",
        polygonC: 'polygon(35% 0, 100% 0, 100% 100%, 0% 100%)',
        polygonD: 'polygon(0 100%, 100% 77%, 100% 0, 0 0)',
        polygonE: 'polygon(0 0, 49% 100%, 100% 0)',
    },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('tailwind-clip-path')]
}