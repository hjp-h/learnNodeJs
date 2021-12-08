const {Sequelize,DataTypes,Model,Op} = require('sequelize')
// 创建数据库连接
const sequelize = new Sequelize('hospital','root','164158',{
  host:'localhost',
  port:'3306',
  dialect:'mysql'
})
// 验证数据库是否连接成功
sequelize.authenticate().then(() => {
  console.log('连接数据库成功！')
}).catch(err => {
  console.log(err)
})
// 创建一个类与数据库表进行映射
class Employee extends Model {};

// 初始化Employee表
Employee.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employee_name: {
    type:DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type:DataTypes.INTEGER,
    allowNull: false
  },
  position: {
    type:DataTypes.STRING
  }
},{
  // 创建连接
  sequelize,
  // 对应的表名
  tableName:'employee',
  // 暂时不需要下面的两个字段
  createdAt: false,
  updatedAt: false
})

async function queryEmployee () {
  // 1.查询所有员工的信息
  // const result = await Employee.findAll();
  // console.log(result)

  // 1.1 按条件查找
  // const result = await Employee.findAll({
  //   where: {
  //     gender: {
  //       [Op.eq]:0
  //     }
  //   }
  // });

  // 2.更新数据
  const result = await Employee.update({
    employee_name:'lilei'
  },{
    where:{
      id:1
    }
  })
  console.log(result)
}

queryEmployee()
