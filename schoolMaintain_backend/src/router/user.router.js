const Router = require('koa-router');
const {
  create,
  avatarInfo,
  backgroundImage
} = require('../controller/user.controller');
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new Router({prefix: '/user'});

// 用户注册
userRouter.post('/register', verifyUser, handlePassword, create);

// 查看用户头像
userRouter.get('/:userId/avatar',avatarInfo)

// 查看用户背景图片
userRouter.get('/:userId/backgroundImage',backgroundImage)
module.exports = userRouter;
