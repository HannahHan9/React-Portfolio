/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,tx,jsx}"],
    theme: {
        extend: {},
        fontFamily: {
            workSans: ["Work Sans", "sans-serif"],
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            bold: 700,
            extrabold: 800,
        },
    },
    plugins: [],
};
