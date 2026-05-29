import { colorTokens } from './data/config/colors.js';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: colorTokens.primary,
        secondary: colorTokens.secondary,
        accent: colorTokens.accent,
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          'PingFang SC',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      gridTemplateColumns: {
        28: 'repeat(28, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
