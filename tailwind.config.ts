import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Professional Navy Blue + Warm Gold palette
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1e3a5f', // Deep navy
        },
        gold: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ead5',
          300: '#ebdbb0',
          400: '#e0c888',
          500: '#d4af37', // Rich gold
          600: '#c19b2f',
          700: '#a68228',
          800: '#8a6b21',
          900: '#6e551a',
        },
        accent: {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#52606d',
          700: '#3e4c59',
          800: '#323f4b',
          900: '#1f2933',
        },
        // Warm neutrals for backgrounds
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ebe4d8',
          400: '#ddd3c1',
          500: '#c9bca8',
          600: '#b3a393',
          700: '#8f8171',
          800: '#6e6559',
          900: '#4d4741',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

export default config