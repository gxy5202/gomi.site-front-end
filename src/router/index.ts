/*
 * @description:
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:38:11
 */
import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
// import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Artical from "../views/Artical.vue";
import Coding from "../views/Coding.vue";
import LightRuler from "../views/LightRuler.vue";
const Home = defineAsyncComponent(() => import("../views/Home.vue"));
const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    { name: "blog", path: "/blog", component: Blog },
    { name: "artical", path: "/blog/artical/:artical_id", component: Artical },
    { name: "coding", path: "/coding", component: Coding },
    { name: "LightRuler", path: "/LightRuler", component: LightRuler },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
