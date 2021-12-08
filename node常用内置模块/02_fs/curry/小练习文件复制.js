// 需求：将data目录下的txt文件复制到curry下
const fs = require('fs');
const path = require('path');
// 要复制的文件所在目录
const srcDir = './data'
const destDir = './'
// 读取原文件目录
fs.readdir(srcDir,(err,files) => {
  if(!err) {
    // 遍历其中的每一项
    console.log('拷贝中')
    files.forEach(file => {
      if(file.endsWith('.txt')) {
        const srcPath = path.resolve(srcDir, file);
        const destPath = path.resolve(destDir, file);
        fs.copyFileSync(srcPath, destPath)
      }
    })
    console.log('拷贝成功')
  }
});
