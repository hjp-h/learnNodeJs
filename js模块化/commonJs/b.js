const {name,age} = require('./a')
// commonJs的加载是同步的，需要等待require执行完，后面的代码才会执行
// require('')中的模块只会被加载一次 代码只会跑一次 然后就被缓存 下次用到的时候就直接拿来用就可以
// const moduleB = require('./a)
// moduleB实际上就是a中的module.exports,他们指向的是同一个对象，改变其中一个都会跟着一起改变

// 面试题：commonJs中，模块加载的顺序？
// 当一个页面中存在多个require('')时，而require的模块中又require了其他的模块，层层嵌套
// 其实就是一个图的数据结构，采用深度遍历的方式，直接到达最底端，然后回退到上一个模块，继续下一个require

//cmmonJs规范缺点
//1.同步加载 意味着在required后面的代码都暂停执行
//2.在浏览器中会出现明显的卡顿
//3.在webpack中可以使用，是因为它帮我们转换成了浏览器可以直接执行的代码
console.log('我是b模块')
console.log(name)
console.log(age)
