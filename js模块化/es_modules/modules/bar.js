// import 和 export结合的暴露

import {info} from './foo.js'
info.name = 'xws'
export {name,sayHello,info} from './foo.js'