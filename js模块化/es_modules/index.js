// 第一种导入方式
// 注意import 是关键字 {}是一种语法格式 不是一个对象
// import {name,sayHello} from './modules/foo.js'
// console.log(name);
// sayHello('curry');

//第二种方式 别名导入
// import {fname as name,fSay as sayHello} from './modules/foo.js'
// console.log(name);
// sayHello('curry');

import {name,sayHello} from './modules/bar.js'
import defaultF from './modules/foo.js'
console.log(name);
sayHello('curry');
defaultF();
let flag = true;
if(flag){
  // 在js中是不允许这么写的，因为在解析js文件的时候就必须知道该文件的所有依赖关系
  // import {name,sayHello} from './modules/bar.js';

  //我们得把它变成一个函数 该函数是promise的类型
  import('./modules/bar.js').then(res => {
    console.log('import函数内',res.name)
  }).catch(err => {
    console.log('打印错误',err)
  });
}


//esmodule的加载过程
//首先我们得明确两个东西，第一加载的是普通的变量 第二个是引用类型的变量
// 1.当是普通类型的变量的时候(比如说是name)，export的时候,esmodule会设置一个单独的环境
// 重新生成一个const name对之前的name进行一个保存，所以只能在导出变量的文件中对变量进行修改，
// 而不能在导入的文件中进行修改

// 2.引用类型变量，export的时候,esmodule会设置一个单独的环境，对引用类型的变量的地址进行保存，
// 这时导入变量的文件也可以对变量进行修改
