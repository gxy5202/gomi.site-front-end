/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default {
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://115.159.153.183:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'ant-design-vue',
    //     esModule: true,
    //     resolveStyle: (name) => {
    //       return `ant-design-vue/es/${name}/style/css`;
    //     },
    //   }]
    // })
  ]
}