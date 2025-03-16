module.exports = app => {
  const { router, controller } = app;
  // 获取csrf token
  router.get('/api/csrf-token', controller.home.getCsrfToken);

  router.get('/', controller.home.index);

  router.get('/news', controller.news.list);
  // router.resources 是一个快捷方法，用于为资源创建一组标准的 RESTful 路由。
  // 它创建了以下路由：
  // GET /api/users 获取所有用户 对应controller.user.index  
  // GET /api/users/:id 获取单个用户 对应controller.user.show
  // POST /api/users 创建用户 对应controller.user.create
  // PUT /api/users/:id 更新用户 对应controller.user.update
  // DELETE /api/users/:id 删除用户 对应controller.user.destroy
  router.resources('users', '/api/users', controller.user);

  router.resources('department', '/api/department', controller.department);
};
