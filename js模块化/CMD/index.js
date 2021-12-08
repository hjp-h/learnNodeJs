//每个模块都要用define 
//采用了commonJs的规范 require
define(function (require, exports, module) {
  const foo = require('./modules/foo')
  console.log(foo.name)
  foo.sayHello('kobe')
});
