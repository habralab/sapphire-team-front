import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({}),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff,woff2,svg}'],
        navigateFallbackDenylist: [/^\/backend/],
      },
      includeAssets: ['/assets/favicon.svg'],
      manifest: {
        theme_color: '#f5f5f5',
        background_color: '#f5f5f5',
        icons: [
          {
            src: '/assets/favicon-base.svg',
            sizes: '64x64 32x32 24x24 16x16 192x192',
            type: 'image/svg+xml',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: '/assets/icon512_maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: '/assets/icon512_rounded.png',
            type: 'image/png',
          },
        ],
        orientation: 'any',
        display: 'standalone',
        lang: 'ru-RU',
        start_url: process.env.VITE_APP_BASE_URL ?? '/',
        name: 'Найди IT-проект | Sapphire',
        short_name: 'Найди IT-проект',
        description: 'Помогает специалистам объединиться в команды для работы в проектах',
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/config/setup.ts',
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
