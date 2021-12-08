const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa();
// 配置路由
const router = new Router({prefix:'/user'});

// 配置文件上传的参数
const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null,'./uploads/')
  },
  filename:(req, file, cb) => {
    cb(null,Date.now()+path.extname(file.originalname))
  },
})
const upload = multer({
  storage
})

// 使用multer.any()来解析发送过来的form-data数据（非文件）
router.post('/info',upload.any(),(ctx,next) => {
  // 注意：这里不是从request中拿数据 koa的request不是原生http的request 原生的是req
  console.log(ctx.req.body)
  ctx.response.body = '这是form-data请求类型的参数'
});

router.post('/upload',upload.array('file'),(ctx,next) => {
  console.log(ctx.req.file)
  ctx.response.body = '文件上传成功！'
})

app.use(router.routes());
app.use(router.allowedMethods())
app.listen(8888,() => {
  console.log('koa参数服务器启动成功！')
})
