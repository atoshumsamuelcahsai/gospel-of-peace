import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Traditional church colors - warm and welcoming
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6c096',
          400: '#f19d4a',
          500: '#ed7f1a',
          600: '#de6510',
          700: '#b84d0f',
          800: '#933e14',
          900: '#763314',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Keep your existing brand colors as well
        brand: {
          50: '#f3f7ff', 
          100: '#e6efff', 
          200: '#c4d9ff', 
          300: '#9fc1ff',
          400: '#6f9dff', 
          500: '#4b7fff', 
          600: '#2f60f0', 
          700: '#234ac1',
          800: '#1c3a97', 
          900: '#182f78',
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