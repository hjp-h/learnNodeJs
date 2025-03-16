'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'department_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'id'
      },
      onUpdate: 'CASCADE',  // 当部门 id 更新时
      onDelete: 'SET NULL'  // 当部门被删除时
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'department_id');
  }
};
