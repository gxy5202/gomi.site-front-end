/*
 * @description: router
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:38:11
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../views/Home.vue"),
    },
    {
        name: "blog",
        path: "/blog",
        component: () => import("../views/Blog.vue"),
    },
    {
        name: "artical",
        path: "/blog/artical/:artical_id",
        component: () => import("../views/Artical.vue"),
    },
    {
        name: "coding",
        path: "/coding",
        component: () => import("../views/Coding.vue"),
    },
    {
        name: "LightRuler",
        path: "/LightRuler",
        component: () => import("../views/LightRuler.vue"),
    },
    {
        name: "VideoRoll",
        path: "/VideoRoll",
        component: () => import("../views/VideoRoll/Index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/**
 * 添加路由守卫, loading状态
 */
// router.beforeResolve((to) => {
//     console.log(to);
// });

export default router;
