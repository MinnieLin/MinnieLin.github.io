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
        'blob-morph': 'blob-morph 20s ease-in-out infinite',
        'blob-float': 'blob-float 6s ease-in-out infinite',
        'blob-breathe':
          'blob-breathe 4s ease-in-out infinite, blob-rotate 40s linear infinite',
        'bounce-slow': 'bounce 1s infinite',
      },
      keyframes: {
        // Original
        blobbing: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },

        // Option 1: Morphing blob with rotation and scale changes
        'blob-morph': {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1)',
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            transform: 'rotate(90deg) scale(1.05)',
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            transform: 'rotate(180deg) scale(0.95)',
            'border-radius': '50% 60% 30% 60% / 60% 40% 60% 30%',
          },
          '75%': {
            transform: 'rotate(270deg) scale(1.02)',
            'border-radius': '60% 40% 60% 30% / 30% 60% 40% 70%',
          },
        },

        // Option 2: Floating movement
        'blob-float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.8',
          },
          '33%': {
            transform: 'translateY(-10px) rotate(120deg)',
            opacity: '0.9',
          },
          '66%': {
            transform: 'translateY(5px) rotate(240deg)',
            opacity: '0.7',
          },
        },

        // Option 3: Breathing effect
        'blob-breathe': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'scale(1.08)',
            opacity: '0.6',
          },
        },
        'blob-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },

        // Enhanced bounce
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

const newAnimations = {}
