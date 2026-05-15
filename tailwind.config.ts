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
        carbon: '#050505',
        ink: '#0B0B0B',
        graphite: '#111111',
        steel: '#1A1A1A',
        ash: '#2A2A2A',
        mid: '#4A4A4A',
        mute: '#777777',
        hair: '#D8D8D8',
        soft: '#F2F2F2',
        paper: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'side-desktop': '80px',
        'side-mobile': '32px',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
