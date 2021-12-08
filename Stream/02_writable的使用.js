const fs = require('fs');
// 传统的写入文件 是将内容一次性从头写入文件
fs.writeFile('./foo.txt','我爱你中国',{flag:'a'},err => {
  console.log(err)
})


const writer = fs.createWriteStream('./foo.txt',{
  flag:'a',// 写模式
  start:5 // 开始写入的位置
})

writer.write('中国最棒', err => {
  if(err) {
    console.log(err)
  }
  console.log('写入成功')
})

writer.write('习近平新时代特色社会主义思想', err => {
  if(err) {
    console.log(err)
  }
  console.log('写入成功')
})

// 关闭写入流
// writer.close()

// 写入最后的字符串 然后关闭
writer.end('写完啦')

