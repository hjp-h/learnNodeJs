const fs = require('fs');
const path = require('path');
// 1.文件的写入
// fs.writeFile('./test.txt','Hello Node FS',{flag:'a+'},err => {
//   console.log(err)
// })

//2.文件的读写
// fs.readFile('./test.txt',{encoding:'utf8'},(err,data) => {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

//3.创建文件夹
const newDir = './user'
// if(!fs.existsSync(newDir)){
//   fs.mkdirSync(newDir, err => {
//     console.log(err)
//   })
// }

//4.读取文件夹中的文件
// fs.readdir(newDir,(err,files) => {
//   console.log(files);
// })

//4.1扩展 文件夹中有文件夹 递归调用
// {withFileTypes:true} 带上这个参数file就是个对象，不带的话就是个文件名
function getFiles(dirname) {
  fs.readdir(dirname,{withFileTypes:true},(err,files) => {
    files.forEach(file => {
      const filePath = path.resolve(dirname,file.name)
      //#region 方法一：使用stat获取文件的具体信息
      // fs.stat(filePath,(err,info) => {
      //   if(err){
      //     console.log(err);
      //     return;
      //   }
      //   //如果是文件的话 就递归调用
      //   if(info.isDirectory()) {
      //     getFiles(filePath)
      //   }else{
      //     console.log(file.name)
      //   }
      // })
      //#endregion
      
      // #region 方法二：直接使用file对象
      if(file.isDirectory()){
        getFiles(filePath);
      }else{
        console.log(file.name)
      }
    })
  })
}
//getFiles(newDir);

//5.文件重命名
// fs.rename('./user','./curry',err => {
//   console.log(err)
// })

