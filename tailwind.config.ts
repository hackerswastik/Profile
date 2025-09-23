import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark-gray': '#181818',
      },
      boxShadow: {
        glass: '0 0 1rem rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, rgb(20, 20, 20) 0%, transparent 60%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;

