const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa();
// 使用bodyparser来解析发送过来的json和urlencoded数据
app.use(bodyparser())
app.use((ctx,next) => {
  console.log(ctx.request.body)
  ctx.response.body = '这是json,urlencoded请求类型的参数'
});

app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
