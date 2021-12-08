const express = require('express')
app.use(express.static('./build文件的路径'))
app.listen('8888',() => {
  console.log('路由服务器启动成功！')
})
