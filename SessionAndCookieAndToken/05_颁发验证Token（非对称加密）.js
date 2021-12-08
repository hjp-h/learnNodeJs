const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa();
const loginRouter = new Router();

// 注意啦! fs这里的相对目录 不是相对于当前的写代码的这个文件
// 而是相对于process.cwd()这个路径，也就是你执行nodemon所在的文件路径
console.log(__dirname)
// 加密token的密钥
const SECRET_KEY = fs.readFileSync('./keys/private.key')
const PUBLIC_KEY = fs.readFileSync('./keys/public.key')
loginRouter.get('/login',(ctx,next) => {
  // token携带的数据
  const user = {name:'hjp',password:'123'}
  
  // 生成token
  const token = jwt.sign(user,SECRET_KEY,{
    // 设置过期时间
    expiresIn: 30,
    // 采用的算法
    algorithm:'RS256'
  })

  // 给客户端返回token
  ctx.body = token
  
})

loginRouter.get('/welcome',(ctx,next) => {
  // 在postman中发送这个请求的时候 在Authrization中选择Bearer Token 将token复制进去
  const authorization = ctx.headers.authorization
  const token = authorization.replace('Bearer ','')
  try{
    const result = jwt.verify(token,PUBLIC_KEY,{
      // 解密算法
      algorithms:['RS256']
    })
    ctx.body = result
  }catch(error){
    console.log(error.message)
    ctx.body = '无效的token~'
  }
  
})

app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

app.listen(8008,() => {
  console.log('服务器启动成功')
})
