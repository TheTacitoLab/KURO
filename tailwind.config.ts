import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        ink: '#111111',
        mid: '#4A4A4A',
        mute: '#777777',
        hair: '#DDDDDD',
        soft: '#F4F4F4',
        paper: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '700' }],
        'chapter': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'lede': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.65', letterSpacing: '0em', fontWeight: '400' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '700' }],
      },
      spacing: {
        'side-desktop': '80px',
        'side-mobile': '32px',
      },
      maxWidth: {
        'site': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
