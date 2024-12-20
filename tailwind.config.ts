import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Incluye la carpeta "app"
    './src/**/*.{js,ts,jsx,tsx}', // Incluye la carpeta "src" (por si acaso la usas)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005F73',
        secondary: '#0A9396',
        accent: '#94D2BD',
        neutral: '#E9D8A6',
        background: '#EEE',
        textPrimary: '#001219',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
