const express = require('express')
const multer = require('multer')
const app = express();
const upload = multer()
//app.use(upload.any()) 调用这个方法来处理form-data中除了文件的其它数据
// upload.any()不要作为全局的中间件进行使用 防止恶意上传
app.post('/login',upload.any(),(req, res, next) => {
  console.log(req.body)
  res.end('登录成功')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
