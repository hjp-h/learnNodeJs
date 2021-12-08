const path = require('path')
const allPath = '/user/data/roam/test.txt'
const fileBasePath = '../user/data/roam'
const filename = 'test.txt'
// 1.获取路径信息
console.log(path.dirname(allPath)) // /user/data/roam
console.log(path.basename(allPath))// test.txt
console.log(path.extname(allPath)) // .txt

// 2.resolve 用于路径的拼接 它会注意最前面有没有以 / ./ ../ 开头的路径
// 前面第一个斜杆表示的根目录 ..表示上一级目录（下面的例子中就是除了01_path）
const filePath = path.resolve(fileBasePath, filename)
console.log(filePath) // D:\documentation\NodeJs\node常用内置模块\user\data\roam\test.txt

//3.join 用于路径的拼接 比较傻瓜式的拼接 相当于字符串的 +
const filePath1 = path.join(fileBasePath, filename)
console.log(filePath1) // ..\user\data\roam\test.txt

