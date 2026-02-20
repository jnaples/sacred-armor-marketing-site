/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#E8E3D6",
          card: "#F5F1E8",
          border: "#F6F0E9",
          text: "#1a1a1a",
          reference: "#668059",
          divider: "#D4A574",
          tabBar: "#E8E3D6",
          tabActive: "#D4A574",
          tabInactive: "#8B7355",
          accent: "#D4A574",
        },
        dark: {
          background: "#1a1d23",
          card: "#2a2d35",
          border: "#443A37",
          text: "#E8E6E3",
          reference: "#DE9D36",
          divider: "#D4A574",
          tabBar: "#1a1d23",
          tabActive: "#DE9D36",
          tabInactive: "#666666",
          accent: "#DE9D36",
        },
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
