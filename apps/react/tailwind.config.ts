import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const pxToRem = require('tailwindcss-preset-px-to-rem');

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [sharedConfig, pxToRem],
};

export default config;
