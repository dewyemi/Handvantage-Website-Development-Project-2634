/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors (keep for backward compatibility)
        primary: {
          blue: '#2563eb',
          purple: '#7c3aed',
          dark: '#0f172a',
          light: '#f8fafc',
          success: '#16a34a',
          warning: '#dc2626'
        },
        // New Duality Palette
        fortress: {
          900: '#0a0e27',
          800: '#1a1f3a',
          700: '#2d3654',
          accent: '#3b82f6'
        },
        factory: {
          500: '#06b6d4',
          400: '#22d3ee',
          300: '#67e8f9',
          accent: '#f59e0b'
        },
        viability: {
          primary: '#8b5cf6',
          secondary: '#a78bfa',
          glow: '#c084fc'
        },
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc'
        },
        gold: '#fbbf24'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace']
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'title': ['2.5rem', { lineHeight: '1.2' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4' }],
        'body-large': ['1.25rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section-sm': '5rem',
        'section': '7.5rem',
        'section-lg': '10rem',
        'hero': '8rem',
      },
      boxShadow: {
        'glow-viability': '0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2), 0 0 120px rgba(139, 92, 246, 0.1)',
        'glow-factory': '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)',
        'glow-viability-sm': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
      }
    },
  },
  plugins: [],
}