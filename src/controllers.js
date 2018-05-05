'use strict'
// 系统函数库
// const user = module.parent.parent.require('./user')
// const db = module.parent.parent.require('../src/database')
// const meta = module.parent.parent.require('./meta')
// const utils = module.parent.parent.require('../public/src/utils')

// 常用模块
// const async = module.parent.parent.require('async')
// const nconf = module.parent.parent.require('nconf')
// const winston = module.parent.parent.require('winston')
// const path = module.parent.parent.require('path')

// 载入依赖模块
// const _ = require('lodash')
// const callbackify = require('../callbackify')

class Controllers {
  // 已经确认由于 NodeBB 的 Express 的原因， 会导致中间件已经书写头， 造成错误， 故暂时移除此处的重写
  renderAdminPage (req, res) {
    /*
      请确保你的路由地址能和模板路径能够对应。
      例如， 如果你的站点地址为:
        myforum.com/some/complex/route/
      你的模板地址应该为:
        templates/some/complex/route.tpl
      并且你应该这样来渲染它:
        res.render('some/complex/route');
    */

    res.render('admin/plugins/quickstart', {})
    /*
      使用回调方式中的 next(err, data) 方法。
      传递数据:
        return '数据'
      传递错误:
        throw new Error('错误')

    */
  }
  /*
  load () {
    // 转换所有内部方法为回调方式
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    _.pull(methods, 'constructor', 'load')
    // _.pull(methods, 'prototype', 'length', 'name', 'load')
    const target = {}
    for (let method of methods) {
      target[method] = callbackify(this[method])
    }
    return target
  }
  */
}

module.exports = Controllers
