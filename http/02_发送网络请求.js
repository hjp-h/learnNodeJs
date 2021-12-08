const http = require('http');

// axios既支持前端（基于xhr封装） 又支持Node(基于http模块)

// http发送网络请求 (get)
// http.get('http://localhost:8888',res => {
//   // 这里的res 是服务器返回的结果 IncommingMessage 而不是 继承于stream的response
//   res.on('data',data => {
//     // 默认拿到的就是buffer
//     console.log(data.toString());
//   })
//   res.on('end',() => {
//     console.log("数据获取完毕")
//   })
// })

//http发送post请求 
const req = http.request({
  method: 'POST',
  hostname:'localhost',
  port: 8888
}, res => {
    res.on('data',data => {
      // 默认拿到的就是buffer
      console.log(data.toString());
    })
    res.on('end',() => {
      console.log("数据获取完毕")
    })
})
//发送除了get的请求 我们要告诉node我们已经操作完成
req.end()
