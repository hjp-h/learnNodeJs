// Buffer相当于一个存储二进制的数组，每8位为一个单位，即一个字节

// 创建一个buffer 并且将字符串传入

const content = '你好，热心靓仔'
// 方式一
// 默认使用utf8编码 三个字节位一个汉字
// const buffer = new Buffer(content);
// console.log(buffer);

// 方式二
// const buffer = Buffer.from(content);
// console.log(buffer)

// 方式三
// const buffer = Buffer.alloc(21,content)
// console.log(buffer.toString())

// 编码与解码
// 默认是用utf8编码与解码 第二个参数还可以传utf16le
// const buffer = Buffer.from(content,'utf8');
// console.log(buffer.toString())
