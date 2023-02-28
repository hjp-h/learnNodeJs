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


const copyFolder = (filePath, copyPath) => {
  if (fs.existsSync(filePath)) {
    if (!fs.existsSync(copyPath)){  
      fs.mkdirSync(copyPath);
    }
    const files = fs.readdirSync(filePath);
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`;
      const states = fs.statSync(nextFilePath);
      if (states.isDirectory()) {
        copyFolder(nextFilePath, `${copyPath}/${file}`);
      } else {
        fs.copyFile(nextFilePath, `${copyPath}/${file}`, () => {});
      }
    });
  }
};

const deleteFolder = (filePath) => {
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath);
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`;
      const states = fs.statSync(nextFilePath);
      if (states.isDirectory()) {
        deleteFolder(nextFilePath);
      } else {
        fs.unlinkSync(nextFilePath);
      }
    });
    fs.rmdirSync(filePath);
  }
};

const getCurrentEnv = () => {
  const { npm_config_argv } = process.env;
  return npm_config_argv
    ? (JSON.parse(npm_config_argv).original[1] ?? "").match(/--env=(?<env>\S+)/)
        ?.groups?.env
    : "";
}

const  { buildDir, copyDir, copyFileType } = {
  buildDir: "dist",
  copyFileType: ["html", "js"],
  copyDir: ["public"],
}
// webpakc打包类似
const build = () => {
  const env = getCurrentEnv();
  const dir = `./${buildDir}`;
  deleteFolder(dir);
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/.env`, `env=${env ? env : "prod"}`, {}, () => {});
  const files = fs.readdirSync("./");
  files.forEach((file) => {
    const filePath = `./${file}`;
    if (copyDir.includes(file)) {
      copyFolder(filePath, `${dir}/${file}`);
    } else {
      const fileType = file.split(".")?.[1] ?? "";
      if (copyFileType.includes(fileType)) {
        fs.copyFile(filePath, `${dir}/${file}`, () => {});
      }
    }
  });
};
build();


