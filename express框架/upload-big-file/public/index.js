const info = document.querySelector("#info")
const progress = document.querySelector("#progress")
const uploader = document.querySelector("#uploader")

const readFile = (file) => {
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  return new Promise((resolve,reject) => {
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
  })
}

// 监听文件输入框的变化
uploader.addEventListener("change",async(event) => {
  // 获取上传的文件
  const {files} = event.target;
  const [file] = files;
  const {name,type,size} = file
  progress.max = size //进度条赋值
  if(!file){
    return
  }

  // 重置uploader
  uploader.value = null;
  // 读取文件
  const content = await readFile(file);
  const hash = CryptoJS.MD5(content); // 获取文件的hash值 文件的唯一标识
  
  // 开始上传前的记录
  let uploaded = 0;
  const chunkSize = 64 * 1024; // 每次上传的文件大小 64kb
  const local = localStorage.getItem(hash); // 将当前文件标识存入本地 方便下次断点续传的时候 获取文件进度
  if(local){
    uploaded = Number(local);
    progress.value = uploaded;
  }

  //断点续传测试
  const breakPoint = 393216

  while(uploaded<size){
    const chunkFile = file.slice(uploaded,uploaded+chunkSize,type); //文件切割
    const formData = new FormData();
    formData.append("file",chunkFile)
    formData.append("name",name);
    formData.append("type",type);
    formData.append("size",size);
    formData.append("offset",uploaded);
    formData.append("hash",hash)
    // if(uploaded>=breakPoint){
    //   info.innerHTML = "断点测试"
    //   return;
    // }
    try{
      await axios.post("/api/upload",formData)
    }catch(e){
      // 上传失败
      console.log("文件上传失败，请重试！")
      info.innerHTML = "文件上传失败，请重试！"
    }
    // 上传成功
    uploaded += chunkFile.size;
    localStorage.setItem(hash,uploaded)
    progress.value = uploaded;
  }
  info.innerHTML = "文件上传成功！"
  localStorage.removeItem(hash)
})