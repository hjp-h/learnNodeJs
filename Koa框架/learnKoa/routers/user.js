const Router = require('koa-router')
// 创建路由对象 并配置前缀 express不用配置 它是在app.use中配置的
const router = new Router({prefix:'/user'})

router.get('/',(ctx,next) => {
  ctx.response.body = 'welcome userRouter~'
})

router.get('/:id',(ctx,next) => {
  // const id = ctx.request.params.id;
  const id = ctx.params.id;
  // console.log(ctx.request.query)
  console.log(ctx.query)
  ctx.response.body = `find a user ${id}`
})

router.get('/list',(ctx,next) => {
  ctx.response.body = 'userList ~'
})

module.exports = router

