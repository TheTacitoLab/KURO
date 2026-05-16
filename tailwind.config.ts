import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Structural
        ink: '#161512',
        black: '#0E0D0B',
        coal: '#1D1C19',
        soot: '#2A2823',

        // Paper / cream backgrounds
        paper: '#F3EBDD',
        cream: '#F6F1E8',
        bone: '#FCFAF7',
        sand: '#E4CFA8',

        // Festival palette
        sun: '#E7A93B',
        coral: '#D96B57',
        terracotta: '#B85C3A',
        ember: '#A9473A',
        sky: '#8FB7C9',
        sea: '#5F8F95',
        mint: '#A8C3AE',
        olive: '#7B8460',
        lilac: '#C5B6D6',

        // Utility tones (on cream)
        smoke: '#5E574C',
        dust: '#8B8174',
        haze: '#C9C0AF',
        edge: '#DCD2BD',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
      },
      spacing: {
        'side-desktop': '64px',
        'side-mobile': '24px',
      },
      maxWidth: {
        site: '1600px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(0.5deg)' },
        },
        slow: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-6px,0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        drift: 'drift 9s ease-in-out infinite',
        slow: 'slow 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
