const fs = require('fs');
// 1.获取文件的描述符
fs.open('./test.txt',(err, data) => {
  if(err) {
    console.log(err);
    return ;
  }
  console.log(data)
  // 2.通过文件描述符获取文件的信息 fstat
  fs.fstat(data,(err, info) => {
    if(err) {
      console.log(err);
      return;
    }
    console.log(info);
  })
})

