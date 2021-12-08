const express = require('express')
const userRouter = require('./routers/user')
const loginRouter = require('./routers/login')
const app = express()
// 这个文件主要是导入其他的路由 使得页面简洁
// app.use('/users',userRouter)  配置路由 当出现/users的时候就会去调用userRouter
app.use('/users',userRouter)
app.use('/login',loginRouter)
app.listen('8888',() => {
  console.log('路由服务器启动成功！')
})
