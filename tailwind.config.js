// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        volvo: {
          blue: {
            light: "#0D6EFD",
            DEFAULT: "#003057",
            dark: "#002240",
          },
          gray: {
            light: "#F3F4F6",
            DEFAULT: "#6B7280",
            dark: "#374151",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}
