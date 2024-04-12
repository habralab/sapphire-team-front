import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { splitVendorChunkPlugin } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    basicSsl(),
    ViteEjsPlugin((viteConfig) => ({
      env: viteConfig.env,
    })),
    react(),
    svgr({}),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff,woff2,svg}'],
      },
      includeAssets: [
        '/favicon.ico',
        '/favicon.svg',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        '/mstile-150x150.png',
        '/safari-pinned-tab.svg',
        '/apple-touch-icon.png',
        '/apple-touch-icon-precomposed.png',
      ],
      manifest: {
        theme_color: '#f5f5f5',
        background_color: '#f5f5f5',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
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
  server: {
    https: true,
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
