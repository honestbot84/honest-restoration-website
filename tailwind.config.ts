import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cypress: "#1F4A3A",
        "gulf-rust": "#A65D3F",
        linen: "#F3EEE4",
        mangrove: "#5C7A72",
        shade: "#1A2421",
        driftwood: "#D8C39A",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1120px" },
      borderRadius: { card: "20px" },
      boxShadow: {
        mask: "0 20px 50px rgba(26, 36, 33, 0.06)",
        disc: "0 8px 28px rgba(0, 0, 0, 0.12)",
        btn: "0 4px 14px rgba(166, 93, 63, 0.28)",
        card: "0 16px 40px rgba(26, 36, 33, 0.07)",
        nav: "0 12px 32px rgba(26, 36, 33, 0.08)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
