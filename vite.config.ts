/*
 * @description:
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
 */
import vue from "@vitejs/plugin-vue";
import copyFiles from "vite-plugin-copy-files";
import { transformAssetUrls } from "@quasar/vite-plugin";
// https://vitejs.dev/config/
export default {
    publicDir: "public",
    build: {
        minify: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
        outDir: "dist",
        assetsDir: "static",
    },
    server: {
        // middlewareMode: "html",
        port: 8000,
        https: true,
        proxy: {
            "/api": {
                target: "https://www.gomi.site",
                // target: 'http://172.22.53.71:3000/',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        // copyFiles({
        //     entry: "src",
        //     root: "assets",
        //     include: [/\.(png|jpg|jpeg)$/],
        //     exclude: [/node_modules/],
        // }),
    ],
};
