/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#16a34a", // Main green
        greenLight: "#bbf7d0",   // Light green for backgrounds
        greenDark: "#14532d",    // Deep green accents
        greenMuted: "#ecfdf5",   // Very soft green base
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        cardHover: "0 8px 30px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        greennest: {
          primary: "#16a34a",
          secondary: "#bbf7d0",
          accent: "#14532d",
          neutral: "#f3f4f6",
          "base-100": "#ffffff", // ✅ ensures white backgrounds (fixes black login box)
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
    darkTheme: "light", // ✅ force light mode always
  },
};
