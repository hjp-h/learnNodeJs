'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  return app.model.define('Department', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    // 部门id
    name: {
      type: STRING(255)
    },
    // 部门领导
    parent_id: {
      type: INTEGER
    },
    // 部门名字
    created_at: {
      type: DATE,
    },
    // 上级部门
    updated_at: {
      type: DATE,
    },
    leader: {
      type: STRING(255)
    },
  }, {
    tableName: 'department'
  });
};