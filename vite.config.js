import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })],
  alias: {
    '@': resolve('src'),
    'img': resolve('src/assets/images'),
    'components': resolve('src/components'),
    'common':resolve('src/common'),
    'views': resolve('src/view'),
    'network': resolve('src/network')
  },
  publicPath: '/',
  server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  
})


