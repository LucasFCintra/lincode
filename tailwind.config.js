/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 6 - 2rem * 6))' }
        },
        'float-main': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'float-leads': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 10px)' }
        },
        'float-engagement': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' }
        },
        'float-performance': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-15px, -5px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'float-main': 'float-main 6s ease-in-out infinite',
        'float-leads': 'float-leads 7s ease-in-out infinite 1s',
        'float-engagement': 'float-engagement 8s ease-in-out infinite 2s',
        'float-performance': 'float-performance 7.5s ease-in-out infinite 1.5s',
        'spin-slow': 'spin-slow 15s linear infinite'
      }
    }
  },
  plugins: [],
} 