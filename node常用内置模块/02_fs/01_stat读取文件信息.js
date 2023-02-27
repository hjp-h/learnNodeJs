const fs = require('fs');
// 读取文件信息
const filePath = './test.txt'

//1.同步读取文件信息
const info = fs.statSync(filePath)
console.log(info.isDirectory())
console.log(info)

//2.异步读取文件信息
// fs.stat(filePath, (err,info) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log(info)
// })

//3.Promise的方式阻止回调地狱

fs.promises.stat(filePath).then(info => {
  console.log(info)
}).catch(err => {
  console.log(err)
});
