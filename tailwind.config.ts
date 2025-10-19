// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Option A — Light & Grace
        primary: {
          50:  '#f0f9ff',
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
        accent: {
          50:  '#e6fafa',
          100: '#b3f0ef',
          200: '#80e5e3',
          300: '#4ddad7',
          400: '#26ceca',
          500: '#00a8a8',
          600: '#008c8c',
          700: '#006f6f',
          800: '#005252',
          900: '#003636',
        },
        gold: {
          50:  '#fffaf0',
          100: '#fff3d6',
          200: '#ffe6a8',
          300: '#ffd777',
          400: '#f4c542',
          500: '#eab308',
        },
        neutral: {
          50:  '#ffffff',
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#1f2937',
        },
        cream: {
          50: '#fffdf9',
          100:'#faf8f2',
          200:'#f5f2ea',
          300:'#eeeae0',
          400:'#e6e1d6',
          500:'#dcd6c7',
        },
        honeyOak: {
          50: '#fdf8f0',
          100: '#f9e8d1',
          200: '#f2d0a3',
          300: '#e9b570',
          400: '#e09a3d',
          500: '#d17a1a',
          600: '#b86515',
          700: '#9e5012',
          800: '#844010',
          900: '#6a300e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: { '18':'4.5rem', '88':'22rem' },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
        gold: '0 4px 14px rgba(234,179,8,0.30)',
      },
      // Background helpers (names used in globals.css as well)
      backgroundImage: {
        // subtle “paper” grain + micro grid
        'paper':
          'radial-gradient(1000px 600px at 20% -10%, rgba(65,111,227,0.06), transparent 60%), radial-gradient(800px 500px at 100% 0%, rgba(14,165,233,0.06), transparent 60%), linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
        // soft hero “beams” (modern take on lcmc’s gentle light areas)
        'beams':
          'conic-gradient(from 120deg at 50% -10%, rgba(65,111,227,0.18), transparent 40%), conic-gradient(from 250deg at 0% 20%, rgba(14,165,233,0.16), transparent 35%), radial-gradient(1200px 500px at 75% -10%, rgba(255,255,255,0.7), transparent 60%)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
