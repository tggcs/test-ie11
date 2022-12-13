import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path';
import scssFormat from './plugins/vite-plugin-scss-format'
import ieIgnoreFormat from './plugins/vite-plugin-ie-ignore'

const resolve = (dir) => path.resolve(__dirname, dir);
// console.log(resolve('../'))

// https://vitejs.dev/config/
export default defineConfig({
  root: "../",
  base: "/x/d/",
  publicDir: "./vite-vue-router/static/",
  define: {
    APP_NAME: JSON.stringify('test-vite-ie11'),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    VITE_IE: JSON.stringify("true")
  },
  build: {
    outDir: 'iePackage',
  },
  plugins: [
    vue(),
    scssFormat(),
    ieIgnoreFormat(),
    legacy({
      targets: ['defaults', 'ie >= 11'],
    }),
    viteStaticCopy({
      targets: [
        { src: resolve('../temp/*'), dest: resolve('../iePackage') }
      ]
    })
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
