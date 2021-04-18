/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import './scss/markdown.scss';
createApp(App).use(router).use(Quasar).mount('#app');
