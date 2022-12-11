import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import path from 'path';
import scssFormat from './plugins/vite-plugin-scss-format'

const resolve = (dir) => path.resolve(__dirname, dir);
// console.log(resolve('../'))

// https://vitejs.dev/config/
export default defineConfig({
  root: "../",
  base: "/x/d/",
  publicDir: "./vite-vue-router/static/",
  define: {
    APP_NAME: JSON.stringify('test-vite-ie11'),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  },
  build: {
    outDir: 'iePackage',
  },
  plugins: [
    vue(),
    scssFormat(),
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
