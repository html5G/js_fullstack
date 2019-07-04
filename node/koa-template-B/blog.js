const Koa = require('koa');
const app = new Koa();

// 支持哪些模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path');
const router = require('./router');

// 处理请求数据
const koaBody = require('koa-body');
// 往ctx 上面加东西
app.use(koaBody());
app.use(
    views(path.join(__dirname, './views'), {
        extension: 'ejs'
    })
)

app.use(router.routes())

app.listen(8080, () => {
    console.log('server is running 8080');
})