const express = require('express')
// express是一个函数，调用的话，返回的也是一个函数对象
const app = express()

//默认
app.get('/',(req, res,next) => {
  res.end('首页')
})

// 接收get请求
app.get('/login',(req,res,next) => {
  res.end('GET:欢迎回来~')
})

// 接收post请求
app.post('/login',(req,res,next) => {
  res.end('POST:欢迎回来！')
})

// 开启一个服务器
app.listen(8888,() => {
  console.log('服务器开启成功！')
})
