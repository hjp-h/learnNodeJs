const fs = require('fs');
//将foo.txt的内容写入bat.txt

//  传统的将foo.txt的内容写入bat.txt
// fs.readFile('./foo.txt',(err, data) => {
//   if(err) {
//     console.log(err)
//   }
//   fs.writeFile('./bat.txt',data,() => {
//     console.log('写入成功')
//   })
// })

// 使用pipe
const reader = fs.createReadStream('./foo.txt')
const writer = fs.createWriteStream('./bat.txt')
reader.pipe(writer)
