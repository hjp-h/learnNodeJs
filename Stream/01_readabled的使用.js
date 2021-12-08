const fs = require('fs');
// 之前所学的fs.readfile()是一次性将文件里的内容全部读完
// fs.readFile('./foo.txt', (err ,data) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log(data);
// })

// 创建的每一个readStream都是emit的一个实例
const reader = fs.createReadStream('./foo.txt',{
  start: 3, // 开始位置
  end: 14, // 结束位置
  highWaterMark: 2, // 一次读进 2 个字节
  encoding: 'utf8'
});

reader.on('data', (data) => {
  console.log(data)
  // 读完一个数据 就暂停 1秒
  reader.pause();
  setTimeout(() => {
    reader.resume();
  },1000)
})
