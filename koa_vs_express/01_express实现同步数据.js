const express = require('express')
const app = express()
const middleWare1 = (req,res,next) => {
  req.message = 'aaa';
  next(); //这里是同步的代码 会层层的去调用，调用结束后才往下执行
  res.end(req.message)
}
const middleWare2 = (req,res,next) => {
  req.message += 'bbb';
  next();
}
const middleWare3 = (req,res,next) => {
  req.message += 'ccc';
}
app.use(middleWare1,middleWare2,middleWare3)
app.listen(8888,() => {
  console.log('服务器启动成功')
})
