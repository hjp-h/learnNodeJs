const mysql = require('mysql2')

// 创建连接
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'hospital',
  user: 'root',
  password: '164158'
})

const preStatement = 'select * from employee where employee_name = ? and password = ?'

// 执行语句并且返回结果
// connections.execute(preStatement,['jack',123],(err,res) => {
//   console.log(res)
// })

// 推荐使用 async await 防止回调地狱
connections.promise().execute(preStatement,['jack',123]).then(([result]) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})
