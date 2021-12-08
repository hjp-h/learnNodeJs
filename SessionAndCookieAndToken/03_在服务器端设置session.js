const Koa = require('koa');
const Router = require('koa-router')
const Session = require('koa-session')

const app = new Koa();
const loginRouter = new Router();

// 配置session
const session = Session({
  key:'sessionId',
  // 过期时间
  maxAge:20 * 1000,
  // 是否需要签名 防止session被修改
  signed: true
},app)
// 签名
app.keys = ['asdasfd']
// 在app中使用session 这一步其实有一个赋值 ctx.session = session
app.use(session)


loginRouter.get('/login',(ctx,next) => {
  // 服务器会对他进行base64的一个编码
  ctx.session.user = {name:'hjp',age:20}
  ctx.body = 'login'
})

loginRouter.get('/welcome',(ctx,next) => {
  // 如果session被修改了 这里将打印undefined
  console.log(ctx.session.user)
  ctx.body = 'Welcome'
})

app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

app.listen(8008,() => {
  console.log('服务器启动成功')
})
