const Koa = require('koa')
const staticAssets = require('koa-static')

const app = new Koa();

app.use(staticAssets('./build'));

app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
