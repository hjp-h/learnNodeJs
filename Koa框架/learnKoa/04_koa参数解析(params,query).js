const Koa = require('koa')
const userRouter = require('./routers/user')
const app = new Koa();
// 与express不同 这里传入的不是路由本身 而是它的routes方法
app.use(userRouter.routes())
// 使用allAllowedMethods 当请求方式不对时 会给出具体的原因
app.use(userRouter.allowedMethods())
app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
