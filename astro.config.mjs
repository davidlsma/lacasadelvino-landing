import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/la-casa-del-vino/',
  vite: {
    plugins: [tailwindcss()],
  },
});
