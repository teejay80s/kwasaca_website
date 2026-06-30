import type { Config } from 'tailwindcss'

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
          deep:  '#0d3320',
          base:  '#14532d',
          mid:   '#166534',
          glow:  '#16a34a',
          light: '#dcfce7',
          pale:  '#f0fdf4',
        },
        red: {
          base:  '#b91c1c',
          warm:  '#dc2626',
          pale:  '#fef2f2',
        },
        ink:   '#0a1a0e',
        cream: '#fafaf7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'blink':     'blink 2.5s infinite',
        'pop-up':    'popUp 0.25s ease',
        'scroll':    'scroll 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        popUp: {
          from: { opacity: '0', transform: 'translateY(10px) scale(0.97)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config