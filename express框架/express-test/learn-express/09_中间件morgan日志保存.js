const fs = require('fs')
const express = require('express')
const morgan = require('morgan')

const app = express();
const writeStream = fs.createWriteStream('./logs/access.log',{
  flags:'a+'
})
app.use(morgan('combined',{stream:writeStream}))
app.get('/login',(req, res, next) => {
  res.end('Hello Morgan')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
