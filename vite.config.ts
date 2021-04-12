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
    port: 8000
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