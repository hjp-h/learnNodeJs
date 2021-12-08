const path = require('path')
const Koa = require('koa')

const app = new Koa();

app.use((ctx,next) => {
  // ctx.body ctx.status 等价于 ctx.response.body ctx.response.status 后者是前者的代理
  // 设置响应码
  ctx.status = 200;
  // 响应字符串
  // ctx.body = 'String形式响应'

  // 响应json
  ctx.body = {
    name:'hjp',
    password:123
  }

  //响应数组
  // ctx.body = ['hjp','lqh']
});

app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
