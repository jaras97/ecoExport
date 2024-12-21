import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Incluye la carpeta "app"
    './src/**/*.{js,ts,jsx,tsx}', // Incluye la carpeta "src" (por si acaso la usas)
  ],
  theme: {
    extend: {
      colors: {

        accent: '#94D2BD',
  
        textPrimary: '#001219',
        primary: '#005F73', // Azul profundo
        secondary: '#94D2BD', // Verde azulado
        background: '#F9FAFB', // Blanco humo
        neutral: '#E5E7EB', // Gris claro
        textDark: '#333333', // Gris antracita
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
