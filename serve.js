/*
 * @description: 测试
 * @Author: Gouxinyu
 * @Date: 2021-11-29 15:53:44
 */
// import config from './vite.config';
const app = require('express')();
const { createServer: createViteServer } = require('vite');
const spdy = require('spdy');

async function createServer() {
    const vite = await createViteServer({
        middlewareMode: 'html'
    })

    app.use(vite.middlewares);

    app.use('*', async () => { });

    const options = {
        spdy: {
            protocols: ['h2', 'http/1.1']
        }
    };

    // spdy.createServer(options, app);

    app.listen(5000, 'localhost', () => {
        console.log('启动服务器');
    })
}

createServer();
