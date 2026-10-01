import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  // Production custom domain: https://cmkarthik.me/
  // The site is served from root '/', so base must strictly resolve from '/'
  // Explicitly prevent any legacy repository subpaths (e.g. '/my-portfolio2.0/')
  const envBase = process.env.VITE_BASE_PATH;
  const basePath = (!envBase || envBase.includes('my-portfolio2.0')) ? '/' : envBase;

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
