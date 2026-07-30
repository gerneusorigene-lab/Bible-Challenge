import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const port = Number(process.env.PORT ?? 5000);
const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
  registerType: 'autoUpdate',

  devOptions: {
    enabled: false,
  },

  includeAssets: ['favicon.ico', 'favicon.svg'],

  manifest: {
    name: 'Bible Challenge Game',
    short_name: 'Bible Challenge',

    description:
      'Strengthen your faith through an engaging and interactive Bible learning experience.',

    theme_color: '#061526',
    background_color: '#061526',
    display: 'standalone',
    orientation: 'portrait',
    start_url: '/',
    scope: '/',

    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },

  workbox: {
    cleanupOutdatedCaches: true,
  },
}),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },

    dedupe: ['react', 'react-dom'],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },

  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,

    fs: {
      strict: true,
    },

    watch: {
      ignored: ['**/android/**', '**/ios/**'],
    },
  },

  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});