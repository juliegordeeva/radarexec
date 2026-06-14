import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          deep: '#111111',
          DEFAULT: '#151515',
          light: '#1A1A1A',
        },
        ivory: {
          DEFAULT: '#F4F0E8',
          soft: '#EFE8DC',
        },
        stone: {
          DEFAULT: '#9D9A93',
          light: '#B7B0A6',
        },
        taupe: {
          DEFAULT: '#3A352F',
          light: '#4B463F',
        },
        champagne: {
          DEFAULT: '#C6AA74',
          deep: '#B99A63',
        },
        burgundy: '#4A1F24',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'hero-desktop': ['5.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.625rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-desktop': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'section-mobile': ['2rem', { lineHeight: '1.15' }],
        subheadline: ['1.5rem', { lineHeight: '1.4' }],
        'subheadline-mobile': ['1.25rem', { lineHeight: '1.45' }],
        body: ['1.125rem', { lineHeight: '1.65' }],
        'body-mobile': ['1rem', { lineHeight: '1.65' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        cta: ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section-y': '10rem',
        'section-y-md': '7rem',
        'section-y-sm': '5.5rem',
      },
      transitionDuration: {
        reveal: '600ms',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
