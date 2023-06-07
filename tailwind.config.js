/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}', 'index.html', 'styles.css'],
    theme: {
        fontFamily: {
            lexend: ['Lexend', 'sans-serif', 'ui-sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#0e1726',
            gray: '#f3f4f6',
            white: '#fff',
            primary: '#5367ff',
            success: '#32C28D',
            danger: '#E84861',
            warning: '#F4A03D',
            info: '#00A2E9',
        },
        extend: {},
    },
    plugins: [],
};
