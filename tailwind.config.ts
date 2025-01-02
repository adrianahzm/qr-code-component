import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Para Next.js
    './components/**/*.{js,ts,jsx,tsx}', // Para tus componentes
    './src/**/*.{js,ts,jsx,tsx}', // Para Vite o React
    './public/index.html', // Para HTML estático
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
