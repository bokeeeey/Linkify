import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgo: true, // SVGO를 사용할지 여부
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false, // viewBox 속성 유지
              },
            },
          },
        ],
      },
      titleProp: true, // title 속성 사용 가능
    }),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ 경로 설정
      '@ui': path.resolve(__dirname, '../../packages/ui'), // @ui 경로 설정
    },
  },
});
