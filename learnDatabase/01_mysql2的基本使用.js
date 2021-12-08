const mysql = require('mysql2')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'hospital',
  user: 'root',
  password: '164158'
})

// sql语句
const statement = 'select * from employee where gender = 0'

// 执行语句并且返回结果
connection.query(statement,(err,res,fields) => {
  console.log(res)
})
