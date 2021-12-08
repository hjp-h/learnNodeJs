// 第一种导出方式 分别导出
// export const name = 'hjp'
// export function sayHello(newName = this.name) {
//   console.log('你好',newName)
// }

// 第二种导出方式 统一导出
const name = 'hjp'
function sayHello(newName = this.name) {
  console.log('你好',newName)
}
//注意：这里的export是关键字 {}是一种语法
export {
  name,
  sayHello
}

// 默认导出 导出的只有一个
export default function() {
  console.log('默认导出函数')
}
//第三种导出方式 别名导出
// export {
//   name as fname,
//   sayHello as fSay
// }

