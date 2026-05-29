import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/tiktok-demo/' : '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 6006,
  },
  preview: {
    host: '127.0.0.1',
    port: 6006,
  },
});
