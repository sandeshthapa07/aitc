import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
      },

      colors: {
        primary: '#FF7500',
        secondary: '#3D2D72',
        mainBlack: '#3C3C46',
        lightShade1: '#EDEDFF',
        lightShad2: '#F8F8FF',
        darkShade1: '#393737',
        darkShade2: '#5A5A5A',
        grey: '#949494',
      },
      screens: {
        xmd: '744px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;
