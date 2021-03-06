const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        content: [
            "./pages/**/*.tsx",
            "./pages/**/*.html",
            "./components/**/*.tsx",
            "./layouts/**/*.tsx",
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: colors,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    screen: {
        "2xl": false,
    },
};
