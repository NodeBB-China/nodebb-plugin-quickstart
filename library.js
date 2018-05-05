'use strict'
const util = require('util')
const _ = require('lodash')

// 使用 Bluebird 来替代默认的全局 Promise (更快速的 Promise)
global.Promise = require('bluebird')

// 重写所有 Promise 方法为 Callback 方式
const transform = origin => {
  const target = {}
  // 获取对象的所有键
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(origin))

  // 删除不必要的键
  _.pull(methods, 'constructor')
  // 如果类使用静态方法， 请注释掉上方， 并使用下方的代码代替
  // _.pull(methods, 'prototype', 'length', 'name')

  // 使用迭代器， 转换方法
  for (let method of methods) {
    target[method] = util.callbackify(origin[method])
  }
  return target
}

// 载入插件库核心
const Origin = require('./src/core')
const origin = new Origin()

// 转换
const plugin = transform(origin)

module.exports = plugin
