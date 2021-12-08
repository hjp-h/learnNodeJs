const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const loginRouter = new Router();
loginRouter.get('/login',(ctx,next) => {
  const {name} = ctx.request.query;
  // 只要这里设置了 cookie 下次别的地方也能拿到这次的cookie(前提是没有过期)
  ctx.cookies.set("name",name,{
    // 设置cookie有效的时间
    maxAge:30 * 1000
  })
  ctx.body = 'login'
})

loginRouter.get('/welcome',(ctx,next) => {
  const name = ctx.cookies.get("name")
  ctx.body = '你的cookie是：'+name
})

app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

app.listen(8008,() => {
  console.log('服务器启动成功')
})
