const {Sequelize} = require('sequelize')
// 创建sequelize的连接
const sequelize = new Sequelize('hospital','root','164158',{
  host:'localhost',
  port:'3306',
  dialect:'mysql'
})
sequelize.authenticate().then(() => {
  console.log('连接数据库成功')
}).catch(err => {
  console.log('连接失败')
})
