const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
// 突破口就在于next()函数 koa返回的是一个promise类型 而express只是一个普通的函数 加上async aswait即可
const middleWare1 = async (ctx,next) => {
  ctx.message = 'aaa';
  await next();
  ctx.body = ctx.message
}
const middleWare2 = async (ctx,next) => {
  ctx.message += 'bbb';
  await next();
}
const middleWare3 = async (ctx,next) => {
  console.log(ctx.message) 
  const data = await axios.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  ctx.message += 'ccc';
  next()
}
app.use(middleWare1)
app.use(middleWare2)
app.use(middleWare3)
app.listen(8888,() => {
  console.log('服务器启动成功')
})
