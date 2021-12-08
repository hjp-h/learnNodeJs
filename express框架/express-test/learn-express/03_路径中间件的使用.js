const express = require('express')
const app = express();

// 路径中间件 就是匹配到了对应的路径才进行回调
app.use((req,res,next) => {
  // 中间件匹配到第一个就不会继续往下匹配 除非调用next()
  console.log('第1个普通的中间件')
  res.end('响应成功')
  // 放行 允许执行下一个中间件
  next();
})
app.use('/home',(req, res, next) => {
  console.log('第1个home的中间件')
  next()
})

app.use('/home',(req, res, next) => {
  console.log('第2个home的中间件')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
