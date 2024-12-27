import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006837', 
        accent: '#AAD330', 
        secondary: '#A9754E', 
        background: '#F9FAFB', 
        textPrimary: '#001219', 
        neutral: '#E5E7EB', 
        textDark: '#333333',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

export default config;
