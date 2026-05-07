/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif']
      },
      colors: {
        ink: {
          950: '#0a0d12',
          900: '#0f1319',
          800: '#161b23',
          700: '#1d2330',
          600: '#2a3140',
          500: '#3a4254',
          400: '#5b657c',
          300: '#8a93a6',
          200: '#b9c0cf',
          100: '#dde1ea',
          50:  '#f1f3f8'
        },
        accent: {
          500: '#d97706',
          400: '#f59e0b',
          300: '#fbbf24'
        },
        signal: {
          green: '#10b981',
          red: '#f43f5e'
        }
      },
      maxWidth: {
        prose: '72ch',
        'prose-wide': '88ch',
        page: '1280px'
      },
      letterSpacing: {
        cad: '0.18em'
      }
    }
  },
  plugins: []
};
