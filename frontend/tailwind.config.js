/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            spacing: {
                128: "32rem",
                144: "40rem",
                200: "60rem",
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
}
