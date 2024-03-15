/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', "[class='dark']"],
    prefix: 'tw-',
    content: [
        "./.vitepress/theme/**/*.vue",
        "./**/*.md",
    ],
    safelist: ['body', 'html']
}