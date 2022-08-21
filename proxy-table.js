/*
 * @description: proxy config
 * @Author: Gouxinyu
 * @Date: 2022-08-21 16:46:48
 */
module.exports = {
    dev: {
        "/api": {
            target: "https://www.gomi.site",
            // target: 'http://172.22.53.71:3000/',
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
}