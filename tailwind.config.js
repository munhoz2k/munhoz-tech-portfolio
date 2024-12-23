/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      spacing: {
        'size-100': '0.25rem', // 4px
        'size-200': '0.5rem',  // 8px
        'size-250': '0.75rem', // 12px
        'size-300': '1rem',    // 16px
        'size-350': '1.5rem',  // 24px
        'size-400': '2rem',    // 32px
        'size-425': '2.5rem',  // 40px
        'size-450': '3rem',    // 48px
        'size-500': '4rem',    // 64px
        'size-600': '8rem',    // 128px
        'size-625': '10rem',   // 160px
      },
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },

      colors: {
        'life-green-50': '#EFFAF1',
        'life-green-100': '#D3EEDC',
        'life-green-200': '#A7DCBF',
        'life-green-300': '#8BD0AD',
        'life-green-400': '#61BD92',
        'life-green-500': '#4BAA7F',
        'life-green-600': '#37815F',
        'life-green-700': '#1D4937',
        'life-green-800': '#0D3024',
        'life-green-900': '#152822',

        'purple-50': '#F5F3FF',
        'purple-100': '#EDE9FE',
        'purple-200': '#DDD6FE',
        'purple-300': '#C4B5FD',
        'purple-400': '#A78BFA',
        'purple-500': '#8B5CF6',
        'purple-600': '#7C3AED',
        'purple-700': '#6D28D9',
        'purple-800': '#5B21B6',
        'purple-900': '#4C1D95',

        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
      }
    },
  },
  plugins: [],
}

