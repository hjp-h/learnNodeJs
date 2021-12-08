const http = require('http');

// axios既支持前端（基于xhr封装） 又支持Node(基于http模块)
const server = http.createServer((req,res) => {
  res.end('响应成功！')
})
server.listen('8888',"localhost",() => {
  console.log('服务器启动成功')
})
