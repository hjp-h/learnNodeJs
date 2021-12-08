const mysql = require('mysql2')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'hospital',
  user: 'root',
  password: '164158'
})

// sql预处理语句
// sql预处理语句性能高（提前处理，多次执行，只编译以一次） 可以有效防止sql注入
// 什么是sql注入？利用一些条件语句 例如 or 1=1 使得查询条件成立
const preStatement = 'select * from employee where employee_name = ? and password = ?'

// 执行语句并且返回结果
connection.execute(preStatement,['jack',123],(err,res) => {
  console.log(res)
})
