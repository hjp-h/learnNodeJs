const express = require('express')
const app = express();

// 普通中间件谁都可以使用
// app.use((req,res,next) => {
//   // 手写JSON解析
//   if(req.headers['content-type'] === 'application/json'){
//     req.on('data',(data) => {
//       req.body = JSON.parse(data.toString());
//     })
//     req.on('end',() => {
//       next();
//     })
//   }
//   else {
//     next();
//   }
  
// })
app.use(express.json())
// true: 那么对urlencoded进行解析时, 它使用的是第三方库: qs
// false: 那么对urlencoded进行解析时, 它使用的是Node内置模块: querystring
app.use(express.urlencoded({extended: true}));
app.post('/login',(req, res, next) => {
  // 相同的逻辑 这种代码要写好多次
  // req.on('data',(data) => {
  //   console.log(data.toString())
  //   res.end('登录成功')
  // })
  console.log(req.body)
  res.end('登录成功')
})

app.post('/products',(req, res, next) => {
  // req.on('data',(data) => {
  //   console.log(data.toString())
  //   res.end('上传商品信息成功')
  // })
  console.log(req.body)
  res.end('上传商品信息成功')
})



app.listen(8888,() => {
  console.log('服务器启动成功！')
})
