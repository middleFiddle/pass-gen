/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}"
    ],
    theme: {

        extend: {
            colors: {
                'dark-gray-s': "#24232C",
                'gray-s': "#817d92",
                'white-s': "#E6E5EA",
                'black-s': "#18171F",
                'green-s': "#A4FFAF",
                'red-s': "#f64a4a",
                'orange-s': "#fb7c58",
                'yellow-s': "#F8CD65",
                'back-s': '#14131b',
                'Back-blend-s': '#08070b',
            },
            fontFamily: {
                'mono-s': ["JetBrains Mono Bold", "monospace"],
            },

            fontSize: {
                'password': ['32px', {lineHeight: '43px'}],
                'heading': ['24px', {lineHeight: '31px'}],
                'body': ['18px', {lineHeight: '23px'}],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {mytheme: {
                "primary": "#a4ffaf",

            }}
        ]
    }
}
