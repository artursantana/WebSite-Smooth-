import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@videos': '/src/videos',
    },
  },
  optimizeDeps: {
    include: ['../../videos/video.mp4'],
  },
});
