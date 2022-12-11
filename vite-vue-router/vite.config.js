import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import path from 'path';

const resolve = (dir) => path.resolve(__dirname, dir);
// console.log(resolve('../'))

// https://vitejs.dev/config/
export default defineConfig({
  root: "../",
  base: "/x/d/",
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'ie >= 11'],
    }),
  ],
  resolve: {
    alias: {
      'VIEWS': resolve('../views/'),
      'VVR': resolve('../vite-vue-router/'),
    },
  },
  server: {
    port: 5174,
    proxy: {
      '/x/d/online-files': {
        target: 'https://cdn.jsdelivr.net/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/x\/d\/online-files/, ''),
      },
    },
  }, 
})
