/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'animate-delay-100',
    'animate-delay-150',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
    'animate-delay-700',
    'animate-delay-800',
    'animate-delay-1000',
    'animate-delay-1300',
    'animate-delay-1400',
    'animate-delay-1500',
    'animate-delay-1800',
    'animate-delay-3200',
    'animate-delay-3500',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const delays = {
        '0': '0s',
        '50': '0.05s',
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '1000': '1s',
        '1300': '1.3s',
        '1400': '1.4s',
        '1500': '1.5s',
        '1800': '1.8s',
        '3200': '3.2s',
        '3500': '3.5s',
      };
      const utilities = {};
      for (const [key, value] of Object.entries(delays)) {
        utilities[`.animate-delay-${key}`] = {
          'animation-delay': value,
        };
      }
      addUtilities(utilities);
    },
  ],
}