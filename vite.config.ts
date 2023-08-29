import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/lib/test/setup.ts',
    cache: {
      dir: '.yarn/.vite/test',
    },
  },
  cacheDir: '.yarn/.vite',
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: '/src/',
      },
    ],
  },
});
