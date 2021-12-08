// 模块定义格式 采用了CommonJs的规范
define(function(require, exports, module) {
  const name = 'hjp'
  const sayHello = function (newName = this.name) {
    console.log('你好',newName)
  }
  module.exports = {
    name,
    sayHello
  }
});
