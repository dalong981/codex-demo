import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kids-english/',
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
});
