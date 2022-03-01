const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sp':'400px',
            'mp':'500px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          },
        colors:{
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow.black,
            blue: colors.blue,
            red: colors.red,
            green: colors.green,
            primary: {
                '100': 'rgba(3, 132, 198, 0.1)',
                '200': 'rgba(3, 132, 198, 0.45)',
                '300': 'rgba(3, 132, 198, 0.67)',
                '400': 'rgba(3, 132, 198, 0.75)',
                '500': 'rgba(3, 132, 198, 0.8)',
                '600': '#0384C6',
            },
            secondary:{
                '40': "#F3F6F9",
                '50': 'rgba(0, 0, 0, 0.4)',
                '100': 'rgba(0, 0, 0, 0.1)',
                '150': 'rgba(0, 0, 0, 0.21)',
                '200': 'rgba(0, 0, 0, 0.45)',
                '300': 'rgba(0, 0, 0, 0.67)',
                '400': 'rgba(0, 0, 0, 0.1)',
                '500': 'rgba(0, 0, 0, 0.75)',
                '600': '#000000'             
            },
            danger: {               
                '100': 'rgba(218, 30, 30, 0.1)',
                '200': 'rgba(218, 30, 30, 0.45)',
                '300': 'rgba(218, 30, 30, 0.67)',
                '400': 'rgba(218, 30, 30, 0.75)',
                '500': 'rgba(218, 30, 30, 0.8)',
                '600': '#DA1E1E'             
            },
            info: {               
                '100': 'rgba(82, 129, 220, 0.1)',
                '200': 'rgba(82, 129, 220, 0.45)',
                '300': 'rgba(82, 129, 220, 0.67)',
                '400': 'rgba(82, 129, 220, 0.75)',
                '500': 'rgba(82, 129, 220, 0.8)',
                '600': '#5281DC'             
            },
            success: {
                '100': 'rgba(88, 149, 10, 0.1)',
                '200': 'rgba(88, 149, 10, 0.45)',
                '300': 'rgba(88, 149, 10, 0.67)',
                '400': 'rgba(88, 149, 10, 0.75)',
                '500': 'rgba(88, 149, 10, 0.8)',
                '600': 'rgba(88, 149, 10, 1)',           
            },
            active: '#1CA0E3',
            modelColor: "rgba(35, 29, 29, 0.44)",               
            danger: colors.red,
            info: colors.blue,
            success: colors.green,
            mainColor: '#1CA0E3',
            active: '#1CA0E3',
            modelColor: "rgba(35, 29, 29, 0.44)"
        },
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            height: {
                '95p': '95%',
            }
        },
    },
    variants: {},
    plugins: [],
  }