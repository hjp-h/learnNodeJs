const Koa = require('koa')
const app = new Koa()
const middleWare1 = (ctx,next) => {
  ctx.message = 'aaa';
  console.log('m1')
  next(); //这里是同步的代码 会层层的去调用，调用结束后才往下执行
  console.log('m1 finish')
  ctx.body = ctx.message
}
const middleWare2 = (ctx,next) => {
  console.log('m2')
  ctx.message += 'bbb';
  next();
  console.log('m2 finish')
}
const middleWare3 = (ctx,next) => {
  console.log('m3')
  ctx.message += 'ccc';
}
app.use(middleWare1)
app.use(middleWare2)
app.use(middleWare3)
app.listen(8888,() => {
  console.log('服务器启动成功')
})
