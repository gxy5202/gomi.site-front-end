import { createRouter, createWebHashHistory } from "vue-router";
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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
