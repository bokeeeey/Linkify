import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [sharedConfig],
};

export default config;
