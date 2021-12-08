const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
const middleWare1 = (ctx,next) => {
  ctx.message = 'aaa';
  await next();
  ctx.body = ctx.message
}
const middleWare2 = (ctx,next) => {
  ctx.message += 'bbb';
  next();
}
const middleWare3 = async (ctx,next) => {
  //当调用next执行到middlWare3的时候 middleWare2的next()会立即执行然后回到ctx.body 并不会去等到axios的结果
  //解决: koa中next()返回的是promise 加上async await即可
  ctx.message += 'ccc';
  console.log(ctx.message) //aaabbbccc

  // 在middleWare1中只能拿到发送请求前的数据

  const data = await axios.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  // 在这之后的的ctx.message与之前的不一样了 只要你发送了请求 ctx就会改变
  console.log(ctx.message+data) // OK[object Object]
  next()
}
const middleWare4 = (ctx,next) => {
  console.log('4执行了')
  ctx.message += 'ddd';
  console.log(ctx.message)//okddd
}
app.use(middleWare1)
app.use(middleWare2)
app.use(middleWare3)
app.use(middleWare4)
app.listen(8888,() => {
  console.log('服务器启动成功')
})
