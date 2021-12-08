const fs = require('fs')
const express = require('express')

const app = express();


app.get('/login',(req, res, next) => {

  // 设置响应码
  res.status(404)
  // res.type('application/json');
  // res.end(JSON.stringify({name:'hjp',age:12}))
  
  // 通过下面的代码就能实现上面的效果
  res.json({name:'hjp',age:12})
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
