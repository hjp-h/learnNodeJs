// 每一个模块都有一个exports对象，commonJs对对象的导出本质就是利用对象地址的引用
var name = 'hjp'
var age = 18
exports.name = name
exports.age = age
console.log('我是a文件哦')
// 原理就是内存地址的引用
// module.exports 和 exports的关系是什么呢？
// 实质上导出的是 module.exports
// 在node的源码中，它最开始帮我们做了一件事 就是exports =  module.exports
// 如果我们后面对module.exports = {...} 重新赋值，那么module.exports指向的是一个新的对象
// 与exports没有任何的关系
