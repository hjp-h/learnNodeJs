const path = require('path')
const express = require('express')
const multer = require('multer')
const app = express();

// 自定义存储
const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,'./uploads/')
  },
  filename:(req,file,cb) => {
    cb(null,Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  // 传入storage表示自定义存储
  storage
})

// 如果用了这个中间件 下面要用req.files 否则req.file
// app.use(upload.any())

// 上传一张 upload.single() file是上传的文件名
// upload.fields([{ name:''maxCount:},{ name:''}])
app.post('/upload',upload.array('file'),(req, res, next) => {
  // 文件上传的信息
  console.log(req.files) 
  res.end('文件上传成功！')
})

app.listen(8888,() => {
  console.log('服务器启动成功！')
})
