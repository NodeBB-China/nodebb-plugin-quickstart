const util = require('util')
// 使 Promise 方法回调化, 是 Node.js Callbackify 的重新实现
const callbackify = (origin) => {
  if (typeof origin !== 'function') {
    // 如果传入的参数不是函数的话， 那么就触发一个无法捕捉的错误终结掉进程， 以防出现不可预料的问题。
    throw new Error('传入参数必须是函数')
  }
  const callbackified = (...args) => {
    const maybeCallback = args.pop()
    if (typeof maybeCallback !== 'function') {
      throw new Error('传入函数的最后一项必须是回调函数')
    }
    const callback = (...args) => { Reflect.apply(maybeCallback, this, args) }
    Reflect.apply(origin, this, args)
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(origin))
  Object.defineProperties(callbackified, Object.getOwnPropertyDescriptors(origin))
  return callbackified
}
if (!util.callbackify) {
  util.callbackify = callbackify
}
module.exports = util.callbackify
