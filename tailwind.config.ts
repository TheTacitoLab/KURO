import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // OBRA palette — dark electronic / house. Keep in sync with styles/globals.css :root.
        // Surfaces (dark → lighter)
        void: '#0E1311',      // page background, deepest
        obsidian: '#171C1A',  // primary dark surface / former dark sections
        slate: '#202624',     // surface alt, cards, form fields
        line: '#2E3633',      // borders, dividers

        // Text
        white: '#FFFFFF',     // primary text
        ash: '#B6BBBA',       // secondary text
        mute: '#6E7471',      // tertiary text, muted labels

        // Accents
        electric: '#3E53D8',  // primary accent (cobalt-indigo)
        magenta: '#D44078',   // accent (raspberry)
        coral: '#E85F40',     // accent (coral-red)
        flare: '#EF9568',     // peach highlight
        violet: '#7E50A4',    // fifth accent
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Display / chapter / headline type. TODO: load Breul Grotesk via next/font/local
        // (place .woff2 in /public/fonts and set --font-display). Falls back to the sans for now.
        display: ['var(--font-display)', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        // Small labels + technical text — club/flyer monospace.
        mono: ['var(--font-mono)', 'Space Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
