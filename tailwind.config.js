/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0a2463",
                    secondary: "#123587",
                    // accent: "#3f8efc",
                    // neutral: "#87bfff",
                    success: "#32cd32",
                    error: "#cc0606",
                    warning: "#ffeb3b",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
