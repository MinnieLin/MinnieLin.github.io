const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        fore: {
          primary: 'var(--color-fore-primary)',
          secondary: 'var(--color-fore-secondary)',
          subtle: 'var(--color-fore-subtle)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          secondary: 'var(--color-back-secondary)',
          subtle: 'var(--color-back-subtle)',
          accent: 'var(--color-back-accent)',
        },
        'blob-accent': '#93989c',
      },
      fontFamily: {
        sans: [
          'var(--font-inter)', // Keep Next.js font variable
          'Helvetica Neue', // Add Helvetica Neue first
          'Helvetica', // Then Helvetica
          'Arial', // Arial as fallback
          'ui-sans-serif', // System UI fonts as fallbacks
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['var(--font-fira-code)', 'Fira Code', 'Monaco', 'monospace'],
      },
      animation: {
        'blob-spin': 'blobbing 25s linear infinite',
        'bounce-slow': 'bounce 1s infinite',
      },
      keyframes: {
        blobbing: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-20%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
}
