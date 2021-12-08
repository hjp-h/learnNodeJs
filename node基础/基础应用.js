//向node传递参数 node 文件名 参数1 参数2...
// process.argv.forEach(item => {
//   console.log(item);
// })

//特殊的全局对象 这是因为在每一个模块中都有 但是不能在命令行中使用 所以特殊
// console.log('__dirname:',__dirname);
// console.log('__filename:',__filename)

//全局对象
// global与window有点相似 但是又不同
// 浏览器中在最外层定义的变量会放在window中 而node中不会放在global中
// 因为如果会放在global中，其他模块声明的变量会覆盖
setTimeout(() => {
  console.log('setTimeout');
},1000)

//serInterval

setImmediate(() => {
  console.log('setImmediate');
})

process.nextTick(() =>  {console.log('nextTick');});
