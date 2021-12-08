//define([这里面写依赖的文件]，callback)
//'bar'回去对应配置的paths中找
define(['bar'], function(bar) {
  console.log(bar.name)
  bar.sayHello();
});
