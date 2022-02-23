const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
                '100': '#0384C6',
                '200': 'rgba(3, 132, 198, 0.8)'
            },
            secondary:{
                '40': "#F3F6F9",
                '50': 'rgba(0, 0, 0, 0.4)',
                '100': 'rgba(0, 0, 0, 0.1)',
                '200': 'rgba(0, 0, 0, 0.45)',
                '300': 'rgba(0, 0, 0, 0.67)',
                '400': 'rgba(0, 0, 0, 0.1)',
                '500': 'rgba(0, 0, 0, 0.75)',
                '600': 'rgba(0, 0, 0, 0.8)',
                '600': '#000000'             
            },
            danger: colors.red,
            info: colors.blue,
            success: colors.green,
            mainColor: '#1CA0E3' ,
            active: '#1CA0E3',
        },
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [],
  }