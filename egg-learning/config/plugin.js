// 模板渲染插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// 数据库插件

// npx sequelize init:config 初始化配置
// npx sequelize init:migrations 初始化迁移
// npx sequelize migration:generate --name "init-users" 创建迁移
// npx sequelize db:migrate 执行迁移
// npx sequelize db:migrate:undo 回滚迁移
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
