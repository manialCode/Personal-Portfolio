/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    darkMode: "class",
    extend: {},
    animation: {
      "background-shine": "background-shine 2s linear infinite both",
    },
    keyframes: {
      "background-shine": {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },
  plugins: [],
};
