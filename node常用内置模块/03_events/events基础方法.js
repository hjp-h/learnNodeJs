const events = require('events')
const eventBus = new events();
//监听事件
const listener1 = (...args) => {
  console.log(args,'listener1')
}
const listener2 = (...args) => {
  console.log(args,'listener2')
}
// 只监听一次 once
// prependListener 将监听放在最前面 prependListenerOnce
eventBus.on('click',listener1)
eventBus.on('click',listener2)
setTimeout(() => {
  eventBus.emit('click','curry','kobe');
  eventBus.off('click',listener2)
  eventBus.emit('click','curry','kobe');
},2000)

// 移除所有的监听器
// 获取所有事件名
console.log(eventBus.eventNames());
console.log(eventBus.listenerCount());
console.log(eventBus.listeners('click'));
