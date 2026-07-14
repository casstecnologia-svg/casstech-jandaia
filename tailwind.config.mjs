/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#05070D',
          800: '#0A0E1A',
          700: '#0E1424',
        },
        surface: {
          DEFAULT: '#111827',
          light: '#151E33',
        },
        line: '#1E2A44',
        primary: {
          DEFAULT: '#00E5FF',
          600: '#00B8D4',
          700: '#0091A7',
        },
        accent: {
          DEFAULT: '#3B82F6',
          glow: '#22D3EE',
        },
        whatsapp: '#25D366',
        instagram: '#E1306C',
        ink: {
          100: '#F8FAFC',
          300: '#CBD5E1',
          500: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.5rem, 6vw, 5rem)',
        'fluid-h2': 'clamp(1.9rem, 4vw, 3.25rem)',
        'fluid-h3': 'clamp(1.35rem, 2.4vw, 1.9rem)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)',
        'glow-radial': 'radial-gradient(600px circle at 50% 0%, rgba(34,211,238,0.18), transparent 70%)',
        'grid-tech':
          'linear-gradient(rgba(30,42,68,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.6) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,229,255,0.25), 0 8px 40px -12px rgba(0,229,255,0.45)',
        'glow-soft': '0 8px 30px -12px rgba(34,211,238,0.35)',
        card: '0 10px 40px -20px rgba(0,0,0,0.8)',
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2s infinite',
        floatUp: 'floatUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
