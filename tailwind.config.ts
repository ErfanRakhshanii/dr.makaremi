import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "blue",
      black: "black",
      white: "white",
      indigo: "indigo",
      red: "red",
      yellow: "amber",
      green: "#45CBC2",
      hardgreen: "#064247",
      softgreen: "#288E87",
      verysoftgreen: "#D6F3F1",
      darkblue: "#0D0630",
      gray: "#CBCBCB",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sansR: ["var(--sansR)", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
