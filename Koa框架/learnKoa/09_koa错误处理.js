const Koa = require('koa')

const app = new Koa();

app.use((ctx,next) => {
  const login = false;
  if(!login) {
    // express 通过在next(new Error())中传入错误消息 app.use(err,req,res,next)中接收错误的消息
    // koa中是通过ctx.app.emit('error',new Error(''),ctx)
    ctx.app.emit('error',new Error(JSON.stringify({errStatus:401,errMessage:'未登录'})),ctx)
  }else{
    ctx.body = '已登录'
  }
});

app.on('error',(err,ctx) => {
  ctx.status = 401;
  ctx.body = JSON.parse(err.message);
})
app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
