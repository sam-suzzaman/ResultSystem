/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0a2463",
                    secondary: "#123587db",
                    gray: "#000",
                    success: "#32cd32",
                    danger: "#dc0909",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
