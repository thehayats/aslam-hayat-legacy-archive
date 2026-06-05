import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1a3a2a',
          dark: '#0f2318',
          light: '#2d5c42',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dark: '#ede8d8',
          light: '#faf8f4',
        },
        gold: {
          DEFAULT: '#c9a84c',
          dark: '#a8893a',
          light: '#dfc06a',
        },
        parchment: '#f0ead6',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        lora: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
        urdu: ['var(--font-urdu)', 'Noto Nastaliq Urdu', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1c1c1c',
            fontFamily: 'var(--font-lora), Lora, Georgia, serif',
            h1: {
              fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
              color: '#1a3a2a',
            },
            h2: {
              fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
              color: '#1a3a2a',
            },
            h3: {
              fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
              color: '#1a3a2a',
            },
            a: {
              color: '#c9a84c',
              '&:hover': {
                color: '#a8893a',
              },
            },
            blockquote: {
              borderLeftColor: '#c9a84c',
              color: '#1a3a2a',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
