async function async1 () {
  console.log('async1 start')
  //#region 
  /* 
  await 紧跟着的代码 相当于是放在
  new Promise(function (resolve, reject) {
    await 紧跟着的代码相当于放在这里 => async2();
  }).then(function () {
     => console.log('async1 end')
  })
   */
  //#endregion
  await async2();
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('Script start')
setTimeout(function () {
  console.log('setTimeout')
},0)

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then( function() {
  console.log('propmise2')
})

console.log('Script end')
