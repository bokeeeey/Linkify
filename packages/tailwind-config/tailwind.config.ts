import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "custom-blue": "#007bff",
        primary: "#6D6AFE",
      },
    },
  },
  plugins: [],
};

export default config;
