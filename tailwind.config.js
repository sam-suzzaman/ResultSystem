/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            light: {
                primary: "#0a2463",
                secondary: "#123587db",
                success: "#119e11",
                "base-100": "#ffffff",
            },
        },
    },
    plugins: [require("daisyui")],
};
