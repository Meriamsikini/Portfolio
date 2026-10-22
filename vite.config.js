import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envDir: 'src',
  base: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/',
  build: { outDir: 'dist', assetsDir: 'assets' }
});
