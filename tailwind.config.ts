import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        deluge: {
          '50': '#f8f7fb',
          '100': '#f1f0f7',
          '200': '#e5e3f1',
          '300': '#d1cde5',
          '400': '#b7afd6',
          '500': '#9d8fc3',
          '600': '#8975b2',
          '700': '#745f9b',
          '800': '#645285',
          '900': '#53446e',
          '950': '#352c49',
        },
      },
    },
  },
  plugins: [],
};
export default config;
