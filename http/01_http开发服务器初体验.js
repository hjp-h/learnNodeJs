const http = require('http');
const url = require('url');
const qs = require('querystring')
// 创建一个服务器 并且写入处理逻辑
const server = http.createServer((req, res) => {
  // 设置状态码 方式一
  // res.statusCode = 404;
  
  // 设置状态码 方式二
  // res.writeHead(503)
  
  // 设置响应头 text/html可以设置想用数据的类型
  res.setHeader('Content-Type', 'text/html;charset=utf8')

  // url.parse解析路径
  const {pathname,query} =url.parse(req.url);
  
  if(pathname === '/login'){
    //#region  request对象的url的使用(get请求)
    if(req.method === "GET") {
      console.log(qs.parse(query));
      res.write('响应成功！');
      res.end('<h2>欢迎回来</h2>');
    }
    //#region  request对象的url的使用(post请求)
    // 注意POST要大写    
    else if(req.method === "POST") {
      // 设置解码编码 另外一种方法是拿到结果调用toString()方法 不设置的话就是拿到二进制编码
      req.setEncoding('utf8');
      // 监听数据流 
      req.on('data',(data) => {
        const res = JSON.parse(data);
        const {username,password} = res;
        console.log(username,password)
      })
      // 响应成功
      res.write('响应成功！');
      // res也是继承stream
      res.end('欢迎回来')
    } 
    //#endregion
  }
  // #endregion
    
})

// 启动服务器，设置监听端口
server.listen(8001,'localhost',() => {
  // 服务器启动成功的回调
  console.log('server1启动成功！')
})

// 另外一种创建的方式 上面的方法本质就是new 一个server
// const server2 = new http.Server((req, res) => {
//   res.end('server2')
// })

// server2.listen(8002,'localhost',() => {
//   console.log('server2启动成功')
//   // 如果不传端口号
//   // 可以通过下面的方法进行输出
//   // console.log(server2.address().port())
//   // 如果不传localhost 默认主机名就是0.0.0.0  整个IPV4的网络都可以访问
// })
