const express = require('express')
const {resolve,extname} = require("path")
const {existsSync,promises:{appendFile,writeFile}} = require("fs")
// 中间件 处理文件上传
const uploader = require("express-fileupload")

const app = express();
const port = 3006;

app.use("/",express.static("public"))
app.use(uploader());
app.use(express.json())
app.use(express.urlencoded({urlencoded:true}))

app.post("/api/upload",async(req,res) => {
  // 获取客户端传来的文件
  const {name,type,size,hash,offset} = req.body;
  console.log(name,type,size,offset)
  const {file} = req.files;
  const ext = extname(name)
  const filename = resolve(__dirname,`./public/${hash}${ext}`)
  
  // 如果已经有上传的进度  这里有坑 offset是个字符串
  if(Number(offset)!==0){
    if(!existsSync(filename)){
      res.status(400).send({message:"文件不存在，请重新上传！"})
      return
    }
    await appendFile(filename,file.data);
    res.send({
      message:"appended"
    })
  }else{
    await writeFile(filename,file.data)
    res.send({
      data:'ok~ file created'
    })
  }

})

app.listen(port,() => {
  console.log("服务启动成功，端口：",port)
})