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

// 部门类与数据库表进行映射
class Dept extends Model {};

// 初始化部门表(主表)
Dept.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  deptName: {
    // 对应的是数据库中的哪个字段
    field:'dept_name',
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize,
  tableName: 'dept',
  createdAt: false,
  updatedAt: false
})

// 员工类与数据库表进行映射
class Employee extends Model {};

// 初始化Employee表
Employee.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employeeName: {
    field: 'employee_name',
    type:DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type:DataTypes.INTEGER,
    allowNull: false
  },
  position: {
    type:DataTypes.STRING
  },
  deptId: {
    field: 'dept_id',
    type:DataTypes.INTEGER,
    references: {
      model: Dept,
      key: 'id'
    }
  }
},{
  // 告诉它是那个数据库连接的
  sequelize,
  // 对应的表名
  tableName:'employee',
  // 暂时不需要下面的两个字段
  createdAt: false,
  updatedAt: false
})

// 将两张表联系起来
Employee.belongsTo(Dept,{
  foreignKey: 'dept_id',
})

async function queryEmployee () {
  const result = await Employee.findAll({
    include:{
      model:Dept
    },
    where: {
      
    }
  })
  console.log(result)
}

queryEmployee()
