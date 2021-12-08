// 与express不同 导入的是一个类
const Koa = require("koa")
// 既然是个类 我们就创造这个类的实例
const app = new Koa();
// 这里只有两个参数context(包含response,request) next
app.use((ctx,next) => {
  // 做出响应 如果没有响应会出现NOT FOUND的错
  ctx.response.body = 'Hello Koa'
})
app.listen(8888,() => {
  console.log("koa服务器启动成功！")
})
