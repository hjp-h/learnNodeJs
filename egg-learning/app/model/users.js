'use strict';
module.exports = app => {
  const { STRING, INTEGER, DataTypes } = app.Sequelize;
  // 扫描model下的文件转为首字母大写 可通过ctx.model.Users 或者app.model.Users访问
  // 定义一个名为Users的model  但我们并没有指定表名 注意默认情况下表名会自动转为复数形式 通过freezeTableName: true 来禁用，也可以直接指定表名为users
  const User = app.model.define('Users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    department_id: INTEGER,
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'users',
  });

  User.associate = function () {
    // 定义与部门表的关联关系
    app.model.Users.belongsTo(app.model.Department, {
      foreignKey: 'department_id',
      as: 'department'
    });
  };


  return User;
};