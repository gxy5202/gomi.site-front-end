/*
 * @description:
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:38:11
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'blog', path: '/blog', component: Blog },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;