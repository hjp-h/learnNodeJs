'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // 扫描model下的文件转为首字母大写 可通过ctx.model.User 或者app.model.User访问
  // 为users表定义一个model 注意默认情况下表名会自动转为复数形式 通过freezeTableName: true 来禁用
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};