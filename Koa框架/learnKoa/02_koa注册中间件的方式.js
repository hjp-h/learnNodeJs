const Koa = require('koa')
const app = new Koa();

// 以下方式的中间件在koa中不支持，koa中只能传一个函数
// 1.method方式：app.get() app.post()
// 2.path方式：app.use('./path',() => {})
// 3.连续注册中间件
app.use((ctx, next) => {
  const {request,response} = ctx
  if(request.url === '/login') {
    if(request.method === 'GET') {
      response.body = 'GET:Login OK'
    }
    else {
      response.body = 'other request methods~'
    }
  }
})
app.listen(8888,() => {
  console.log('Koa服务器启动成功！')
})
