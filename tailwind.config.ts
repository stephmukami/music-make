import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-purple":"#F2EFFA",
        "brand-grey":"#F5F5F5",
        "card-green":"#E6EDEB",
        "card-red":"#F3EAEA",
        "card-yellow":"#F4F1E8",
        "font-purple":"#2A3161",
        "card-purple":"EAE4E9",
        "tag-purple":"#E8DFFF",
        "hover-blue":"#02D7F2"


      },
    },
  },

  
  plugins: [],
} satisfies Config;