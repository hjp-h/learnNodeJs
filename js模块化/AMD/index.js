(function () {
  //自执行函数首先是基本的配置
  require.config({
    baseUrl:'',
    paths:{
      foo:'./modules/foo',
      bar:'./modules/bar'
    }
  })
  //强制加载模块
  require(['foo'],function(foo) {

  })
})()
