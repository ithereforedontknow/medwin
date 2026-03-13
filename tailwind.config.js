import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f5f5f5",
        raised: "#eeeeee",
        card: "#e0e0e0",
        border: "#cccccc",
        muted: "#b0b0b0",
        dim: "#757575",
        body: "#424242",
        head: "#212121",
        accent: "#000000",
        "accent-dim": "#333333",
        "accent-bright": "#666666",
        "accent-subtle": "#fafafa",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Geist", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [daisyui],
};
