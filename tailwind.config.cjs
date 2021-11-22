const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                pacificBlue: '#46B4C7',
                ming: '#256D7A',
                cedarChest: '#C76350',
                mantis: '#5AC75F',
                fernGreen: '#3D7A40',
                honeydew: '#D6EAD7',
            },
        },
    },
    plugins: [],
}
