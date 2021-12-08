// 以下的方式是错的 因为写入文件的东西 不仅仅包含图片信息 还包含了其他的信息
const http = require('http')
const url = require('url')
const fs = require('fs')
const server = http.createServer((req,res) => {
  const {pathname, query} = url.parse(req.url)
  //因为数据不是一次性全部返回的 所以我们要创建stream 追加写入
  const writer = fs.createWriteStream('./foo.png',{
    flags:'a+'
  })
  if(pathname === '/upload') {
    if(req.method === 'POST') {
      req.on('data',data => {
        writer.write(data)
      })
      req.on('end',() => {
        console.log('文件上传成功！')
        writer.close()
        res.end('文件上传成功！')
      })
    }
  }
})

server.listen(8888,'localhost',() => {
  console.log('文件上传服务器启动成功')
})
