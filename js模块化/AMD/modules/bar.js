define(function () {
  const name = 'hjp'
  const sayHello = function (name1 = this.name) {
    console.log('你好',name1)
  }
  return {
    name,
    sayHello
  }
});
