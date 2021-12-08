setTimeout(function () {
  console.log('set1');

  new Promise(function(resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log('then4')
    });
    console.log('then2')
  })
});


new Promise(function (resolve) {
  console.log('pr1');//立即执行，then后面的语句作为微任务放入微任务队列
  resolve();
}).then(function () {
  console.log('then1')
})

setTimeout(function () {
  console.log('set2');
})

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask1')
})

new Promise(function (resolve) {
  resolve()
}).then(function () {
  console.log('then3')
})
