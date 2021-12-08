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

// 病人类与数据库表进行映射
class Patient extends Model {};

// 初始化病人表(主表)
Patient.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  allergen: DataTypes.STRING,
  password: {
    type:DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize,
  tableName: 'patient',
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

// 病人员工表
// 病人类与数据库表进行映射
class Registration extends Model {};

// 初始化病人表(主表)
Registration.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patientId:{
    field: 'patient_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:Patient,
      key: 'id'
    }
  },
  employeeId:{
    field: 'employee_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:Employee,
      key: 'id'
    }
  }
  
},{
  sequelize,
  tableName: 'registration',
  createdAt: false,
  updatedAt: false
})

// 将两张表联系起来
Employee.belongsToMany(Patient,{
  through:Registration,
  foreignKey: 'employeeId',
  otherKey: 'patientId'
})

Patient.belongsToMany(Employee,{
  through:Registration,
  foreignKey: 'patientId',
  otherKey: 'employeeId'
})

async function queryEmployee () {
  const result = await Employee.findAll({
    include:{
      model:Patient
    }
  })
  console.log(result)
}

queryEmployee()
