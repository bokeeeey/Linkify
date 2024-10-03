import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  darkMode: ['selector'],
  theme: {
    extend: {
      colors: {
        primary: '#6D6AFE',
        red: '#FF5B56',
        black: '#111322',
        white: '#FFFFFF',
        'gray-100': '#373740',
        'gray-80': '#585969',
        'gray-60': '#9CA2AD',
        'gray-40': '#D0D8E3',
        'gray-20': '#E6EBF4',
        bg: '#EFF1F4',
        blue: '#4C91FF',
      },
    },
  },
  plugins: [],
};

export default config;
