const fs = require('fs')
const express = require('express')

const app = express();
// params: /login/张三/123 
// query: /login?name=张三&password=123
const writeStream = fs.createWriteStream('./logs/access.log',{
  flags:'a+'
})

app.get('/register/:name/:password',(req, res, next) => {
  console.log(req.params)
  res.end('register successfully')
})

app.get('/login',(req, res, next) => {
  console.log(req.query)
  res.end('login successfully')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
