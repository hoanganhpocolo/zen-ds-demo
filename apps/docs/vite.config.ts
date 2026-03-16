import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@zen/components': path.resolve(__dirname, '../../packages/components/src'),
      '@zen/tokens': path.resolve(__dirname, '../../packages/tokens/src/styles/tokens/index.css'),
      '@zen/icons/line': path.resolve(__dirname, '../../packages/icons/src/line'),
      '@zen/icons/solid': path.resolve(__dirname, '../../packages/icons/src/solid'),
      '@zen/icons/social': path.resolve(__dirname, '../../packages/icons/src/social'),
      '@zen/icons': path.resolve(__dirname, '../../packages/icons/src'),
    },
  },
});
