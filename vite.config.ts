import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

const isNotProduction = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({}),
    !process.env.VITEST && isNotProduction ? eslint() : undefined,
    !process.env.VITEST && isNotProduction ? checker({ typescript: true }) : undefined,
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/config/test/setup.ts',
    include: ['(src|tests)/**/*.test.ts(x)?'],
    cache: {
      dir: '.yarn/.vite/test',
    },
  },
  cacheDir: '.yarn/.vite',
  resolve: {
    alias: [
      {
        find: /^~\//,
        replacement: '/src/',
      },
    ],
  },
});
