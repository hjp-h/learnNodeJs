const express = require('express')
const axios = require('axios')
const app = express()
const middleWare1 = (req,res,next) => {
  req.message = 'aaa';
  next(); // 1.这里是同步的代码 会层层的去调用，调用结束后才往下执行
  //3. 如何解决？
  //将异步代码写在这里 const data = await(...) 
  res.end(req.message)
}
const middleWare2 = (req,res,next) => {
  req.message += 'bbb';
  next();
}
const middleWare3 = async (req,res,next) => {
  // 2.当调用next执行到middlWare3的时候 next()会立即执行然后回到res.end() 并不会去等到axios的结果
  const data = await axios.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  req.message += 'ccc';
}
app.use(middleWare1,middleWare2,middleWare3)
app.listen(8888,() => {
  console.log('服务器启动成功')
})
