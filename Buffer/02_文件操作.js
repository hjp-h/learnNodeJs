const fs = require('fs')
const sharp = require('sharp')
//读取文件对象
// fs.readFile('./files/foo.txt',{encoding:'utf8'},(err,data) => {
//   if(err) {
//     console.log(err);
//   }
//   // 如果没有 {encoding:'utf8'} 输出的是一个buffer对象
//   console.log(data)
// })

// 读取图片
// fs.readFile('./files/bar.jpg',(err,data) => {
//   if(err) {
//     console.log(err);
//   }
//   fs.writeFile('./files/baz.jpg',data,() => {
//   })
// })

//使用sharp
// sharp('./files/bar.jpg').resize(300,300).toFile('./files/bax.jpg',err => {
//   console.log(err)
// })

sharp('./files/bar.jpg')
  .resize(300,300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./files/bay.jpg',data,() => {});
  })

