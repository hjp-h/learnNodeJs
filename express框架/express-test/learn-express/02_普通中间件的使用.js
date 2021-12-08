const express = require('express')
const app = express();

// 中间件本质上就是个回调函数 普通中间件没有配置路由 谁都能匹配的上
app.use((req,res,next) => {
  console.log('第1个普通的中间件')
  res.end('响应成功')
  // 放行 允许执行下一个中间件
  next();
})

app.use((req, res, next) => {
  console.log('第2个普通的中间件')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
